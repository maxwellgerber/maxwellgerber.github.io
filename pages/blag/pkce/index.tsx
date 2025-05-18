import Content from "./content.mdx";
import {BlogFooter} from "@/components/BlogFooter";

export default function Page() {
    return (
        <div className="container">
            <Content/>
            <BlogFooter/>
        </div>
    )

}