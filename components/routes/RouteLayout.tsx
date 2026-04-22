import Head from 'next/head';
import Link from 'next/link';
import { Routes } from '@/data/routes';
import { siteConfig } from '@/data/site-config';
import RouteMap from './RouteMap.dynamic';
import RouteStats from './RouteStats';
import RoutePhotos from './RoutePhotos';

type Props = React.PropsWithChildren<{ slug: string }>;

export default function RouteLayout({ slug, children }: Props) {
  const routeIdx = Routes.findIndex((r) => r.slug === slug);
  if (routeIdx < 0) throw Error(`No route found for slug ${slug}`);
  const route = Routes[routeIdx];

  const canonicalLink = `${siteConfig.url}/routes/${route.slug}`;
  const publishDate = new Date(route.publishDate).toISOString();

  return (
    <>
      <Head>
        <title>{route.name} — {siteConfig.name}</title>
        <link rel='canonical' href={canonicalLink} />

        <meta name='description' content={route.description} />
        <meta name='robots' content='index, follow' />

        <meta property='og:site_name' content={siteConfig.name} />
        <meta property='og:title' content={route.name} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={canonicalLink} />
        <meta property='og:description' content={route.description} />
        <meta property='article:author' content={siteConfig.author.name} />
        <meta property='article:published_time' content={publishDate} />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={siteConfig.author.twitter} />
        <meta name='twitter:creator' content={siteConfig.author.twitter} />
        <meta name='twitter:url' content={canonicalLink} />
        <meta name='twitter:title' content={route.name} />
        <meta name='twitter:description' content={route.description} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: route.name,
              url: canonicalLink,
              description: route.description,
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
            <h1>{route.name}</h1>
            <RouteStats route={route} />
          </header>
          <RouteMap gpxUrl={route.gpxFile} />
          <hr />
          <div className='article-content'>{children}</div>
          {route.photos.length > 0 && (
            <>
              <hr />
              <RoutePhotos photos={route.photos} routeName={route.name} />
            </>
          )}
          <hr />
          <footer>
            <nav aria-label='Breadcrumb'>
              <Link href='/routes'>← All routes</Link> · <Link href='/'>Home</Link>
            </nav>
          </footer>
        </article>
      </main>
    </>
  );
}
