export type Blog = {
    publishDate: string;
    title: string;
    description: string;
    slug: string;
}

export const Blogs: Blog[] = [
    // {
    //     publishDate: "05/2025",
    //     title: "LLMs and Language Learning",
    //     description: "#TODO",
    //     slug: "llms-and-language-learning"
    // },
    {
        publishDate: "05/2025",
        title: "Why PKCE Is My Favorite OAuth Standard",
        description: "PKCE is the best OAuth standard.",
        slug: "pkce"
    },
]