import BlogLayout from "@/components/BlogLayout";
import Content from './content.mdx'

export default function Page() {
    return (
        <BlogLayout slug="cookie-shadowing">
            <Content />
        </BlogLayout>
    )
}