import Head from 'next/head';
import Link from 'next/link';
import { Blogs } from '@/data/blogs';
import { siteConfig } from '@/data/site-config';

type Props = React.PropsWithChildren<{ slug: string }>;

export default function BlogLayout({ slug, children }: Props) {
  const blogIdx = Blogs.findIndex((blog) => blog.slug === slug);
  if (blogIdx < 0) throw Error(`No blog found for slug ${slug}`);
  const blog = Blogs[blogIdx];

  const canonicalLink = `${siteConfig.url}/blog/${blog.slug}`;
  const publishDate = new Date(blog.publishDate).toISOString();

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <link rel='canonical' href={canonicalLink} />

        <meta name='description' content={blog.description} />
        <meta name='robots' content='index, follow' />
        <meta name='title' content={blog.title} />

        <meta property='og:site_name' content={siteConfig.name} />
        <meta property='og:title' content={blog.title} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={canonicalLink} />
        <meta property='og:description' content={blog.description} />
        <meta property='article:author' content={siteConfig.author.name} />
        <meta property='article:published_time' content={publishDate} />
        {blog.tags && blog.tags.map((tag) => <meta key={tag} property='article:tag' content={tag} />)}

        <meta name='twitter:card' content={'summary'} />
        <meta name='twitter:site' content={siteConfig.author.twitter} />
        <meta name='twitter:creator' content={siteConfig.author.twitter} />
        <meta name='twitter:url' content={canonicalLink} />
        <meta name='twitter:title' content={blog.title} />
        <meta name='twitter:description' content={blog.description} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: blog.title,
              url: canonicalLink,
              description: blog.description,
              datePublished: publishDate,
              dateModified: publishDate,
              author: {
                '@type': 'Person',
                name: siteConfig.author.name,
                url: siteConfig.author.url,
              },
              publisher: {
                '@type': 'Person',
                name: siteConfig.author.name,
                url: siteConfig.url,
              },
              ...(blog.tags && { keywords: blog.tags.join(', ') }),
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': canonicalLink,
              },
            }),
          }}
        />
      </Head>
      <main className='container'>
        <article>
          <header>
            <h1>{blog.title}</h1>
            <time dateTime={publishDate}>
              {new Date(blog.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>
          <hr />
          <div className='article-content'>{children}</div>
          <hr />
          <footer>
            <nav aria-label='Breadcrumb'>
              <Link href='/'>← Back to home</Link>
            </nav>
          </footer>
        </article>
      </main>
    </>
  );
}
