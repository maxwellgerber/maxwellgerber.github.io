const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function inlineKroki(encodedUrl, altText) {
  const svg = execSync(`curl -sf "${encodedUrl}"`)
    .toString()
    .replace(/<svg([^>]*)width="[^"]*"/, '<svg$1')
    .replace(/<svg([^>]*)height="[^"]*"/, '<svg$1')
      .replace(/<svg([^>]*)style="[^"]*"/, '<svg$1')
    .replace('<svg', '<svg ');
  const title = altText ? ` title="${altText}"` : '';
  return `<figure class="kroki-figure"${title}>${svg}</figure>`;
}

// Expands `@file:<path>` inside fence blocks before kroki sees the token.
// Path is resolved relative to the markdown file's directory.
function fileRefPlugin(md) {
  md.core.ruler.push('file-ref-fence', (state) => {
    // marp-cli doesn't populate state.env.filePath, so fall back to argv.
    // marp is invoked as: marp <input.md> -o <output> ...
    const inputArg = process.argv.find(a => a.endsWith('.md') && !a.startsWith('-'));
    const baseDir = state.env && state.env.filePath
      ? path.dirname(state.env.filePath)
      : inputArg
        ? path.dirname(path.resolve(inputArg))
        : process.cwd();
    for (const token of state.tokens) {
      if (token.type === 'fence' && token.content.trim().startsWith('@file:')) {
        const ref = token.content.trim().slice(6).trim();
        token.content = fs.readFileSync(path.resolve(baseDir, ref), 'utf8');
      }
    }
  });
}

module.exports = {
  engine: ({ marp }) =>
    marp
      .use(fileRefPlugin)
      .use(require('@kazumatu981/markdown-it-kroki'), {
        entrypoint: 'http://localhost:8000',
        render: inlineKroki,
      }),
}
