export type Blog = {
    publishDate: string;
    title: string;
    description: string;
    slug: string;
}

export const Blogs: Blog[] = [
    {
        publishDate: "05/2025",
        title: "Cookie Shadowing Kind of Sucks",
        description: "Cookie shadowing occurs when cookies have the same name but different properties, leading to double cookies being set. It is very annoying to deal with.",
        slug: "cookie-shadowing"
    },
    {
        publishDate: "05/2025",
        title: "Why PKCE Is My Favorite OAuth Standard",
        description: "PKCE is the best OAuth standard.",
        slug: "pkce"
    },
]