import Head from "next/head";
import {Blogs} from "@/data/blogs";

type Props = React.PropsWithChildren<{ slug: string }>

export default function BlogLayout({slug, children}: Props) {
    const blogIdx = Blogs.findIndex(blog => blog.slug === slug);
    if (blogIdx < 0) throw Error(`No blog found for slug ${slug}`);
    const blog = Blogs[blogIdx];

    const canonicalLink = `https://maxgerber.com/blog/${blog.slug}`;

    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <link rel="canonical" href={canonicalLink}/>

                <meta name="description" content={blog.description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="title" content={blog.title}/>

                <meta property="og:site_name" content="maxgerber.com"/>
                <meta property="og:title" content={blog.title}/>
                <meta property="og:type" content="article"/>
                <meta property="og:url" content={canonicalLink}/>
                <meta property="og:description" content={blog.description}/>

                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:url" content={canonicalLink}/>
                <meta property="twitter:title" content={blog.title}/>
                <meta property="twitter:description" content={blog.description}/>

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "Article",
                        "headline": blog.title,
                        "url": canonicalLink,
                        "description": blog.description,
                        "about": {
                            "@type": "Thing",
                            "name": blog.title,
                            "description": blog.description
                        }
                    })
                }}/>

            </Head>
            <article className="container">
                <h1>{blog.title}</h1>
                <hr/>
                {children}
                <hr/>
                <a href="/">Back</a>
            </article>
        </>
    )
}