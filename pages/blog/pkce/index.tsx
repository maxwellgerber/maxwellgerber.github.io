import Content from "./content.mdx";
import {BlogFooter} from "@/components/BlogFooter";
import Head from "next/head";

export default function Page() {
    return (
        <>
            <Head>
                <title>Why PKCE Is My Favorite OAuth Standard</title>
                <meta name="description" content="PKCE is the best OAuth standard."/>
                <meta name="robots" content="index, follow"/>
                <link rel="canonical" href="https://maxgerber.com/blog/pkce"/>
            </Head>
            <div className="container">
                <article>
                    <Content/>
                </article>
                <BlogFooter/>
            </div>
        </>
    )

}