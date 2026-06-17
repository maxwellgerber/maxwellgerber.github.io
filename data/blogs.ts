export type Blog = {
  publishDate: string;
  title: string;
  description: string;
  slug: string;
  tags?: string[];
};

export const Blogs: Blog[] = [
  // DRAFT — page lives in drafts/blog/how-to-run-a-jwks/, move to pages/blog/ and uncomment to publish
  // {
  //   publishDate: '05/09/2026',
  //   title: 'How to run a JWKS Endpoint',
  //   description:
  //     'Hard-won lessons from running JWKS endpoints in production: why you always want three keys, why rotation cadence matters, and the failure modes that only show up at scale.',
  //   slug: 'how-to-run-a-jwks',
  //   tags: ['security', 'authentication', 'oauth', 'identity'],
  // },
  {
    publishDate: '04/22/2026',
    title: 'Cross App Access and the Vercel Breach',
    description:
      "Vercel's April 2026 breach is a textbook case of the blast radius Cross-App Access is designed to prevent. Here's what XAA would have changed.",
    slug: 'xaa-vercel-breach',
    tags: ['xaa', 'oauth', 'security', 'authentication', 'identity'],
  },
  {
    publishDate: '05/25/2025',
    title: 'Cookie Shadowing Kind of Sucks',
    description:
      'Cookie shadowing occurs when cookies have the same name but different properties, leading to double cookies being set. It is very annoying to deal with.',
    slug: 'cookie-shadowing',
    tags: ['cookies', 'web-development', 'http', 'javascript'],
  },
  {
    publishDate: '05/18/2025',
    title: 'Why PKCE Is My Favorite OAuth Standard',
    description: 'PKCE is the best OAuth standard.',
    slug: 'pkce',
    tags: ['oauth', 'security', 'authentication'],
  },
];
