import Head from 'next/head';
import Link from 'next/link';
import RouteList from '@/components/routes/RouteList';
import { siteConfig } from '@/data/site-config';

export default function RoutesIndex() {
  return (
    <>
      <Head>
        <title>Bike Routes — {siteConfig.name}</title>
        <meta name='description' content='Curated bike routes that I enjoy riding.' />
      </Head>
      <main className='container'>
        <h1>Bike Routes</h1>
        <p>Some of my favorite rides.</p>
        <RouteList />
        <hr />
        <nav aria-label='Breadcrumb'>
          <Link href='/'>← Back to home</Link>
        </nav>
      </main>
    </>
  );
}
