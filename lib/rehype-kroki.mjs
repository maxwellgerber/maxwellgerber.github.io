import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { visit } from 'unist-util-visit';
import { fromHtml } from 'hast-util-from-html';

const DEFAULT_TYPES = ['d2', 'mermaid', 'plantuml', 'excalidraw'];
const FILE_REF = /^\s*@file:\s*(\S+)\s*$/;

function parseMeta(meta) {
  const out = {};
  if (!meta) return out;
  const re = /(\w+)="([^"]*)"/g;
  let m;
  while ((m = re.exec(meta)) !== null) out[m[1]] = m[2];
  return out;
}

function stripSvgSizing(svg) {
  return svg
    .replace(/<svg([^>]*)\s+width="[^"]*"/, '<svg$1')
    .replace(/<svg([^>]*)\s+height="[^"]*"/, '<svg$1')
    .replace(/<svg([^>]*)\s+style="[^"]*"/, '<svg$1');
}

export default function rehypeKroki(options = {}) {
  const endpoint = options.endpoint ?? process.env.KROKI_URL ?? 'http://localhost:8000';
  const types = new Set(options.types ?? DEFAULT_TYPES);

  return async function transformer(tree, file) {
    const baseDir = file?.dirname ?? (file?.path ? path.dirname(file.path) : process.cwd());
    const jobs = [];

    visit(tree, 'element', (node) => {
      if (node.tagName !== 'pre') return;
      const code = node.children?.find((c) => c.type === 'element' && c.tagName === 'code');
      if (!code) return;
      const classes = code.properties?.className ?? [];
      const langClass = classes.find((c) => typeof c === 'string' && c.startsWith('language-'));
      if (!langClass) return;
      const type = langClass.slice('language-'.length);
      if (!types.has(type)) return;

      const source = code.children.map((c) => (c.type === 'text' ? c.value : '')).join('');
      jobs.push({ node, type, source, meta: parseMeta(code.data?.meta) });
    });

    await Promise.all(
      jobs.map(async (job) => {
        const fileMatch = job.source.match(FILE_REF);
        if (fileMatch) {
          const ref = fileMatch[1];
          const resolved = path.resolve(baseDir, ref);
          try {
            job.source = await readFile(resolved, 'utf8');
          } catch (err) {
            throw new Error(`rehype-kroki: failed to read @file:${ref} (resolved to ${resolved})\n${err.message}`);
          }
        }
        let res;
        try {
          res = await fetch(`${endpoint}/${job.type}/svg`, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: job.source,
          });
        } catch (err) {
          throw new Error(
            `rehype-kroki: failed to reach Kroki at ${endpoint} (is \`npm run kroki:up\` running?)\n${err.message}`
          );
        }
        if (!res.ok) {
          const body = await res.text().catch(() => '');
          throw new Error(
            `rehype-kroki: ${job.type} render failed (${res.status} ${res.statusText}) at ${endpoint}\n--- source ---\n${job.source}\n--- response ---\n${body}`
          );
        }
        const svg = stripSvgSizing(await res.text());
        const styleParts = [];
        if (job.meta.height) styleParts.push(`height: ${job.meta.height}`);
        if (job.meta.width) styleParts.push(`width: ${job.meta.width}`);
        const style = styleParts.join('; ');

        const fragment = fromHtml(svg, { fragment: true });

        job.node.tagName = 'figure';
        job.node.properties = {
          className: ['kroki-figure'],
          ...(style ? { style } : {}),
        };
        job.node.children = fragment.children;
        if (job.node.data) delete job.node.data.meta;
      })
    );
  };
}
