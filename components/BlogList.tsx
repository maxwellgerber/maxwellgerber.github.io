import {Blogs} from "@/data/blogs";

export default function BlogList() {
    return (
        <ul>
            {Blogs.map(blog => <li>{blog.publishDate} - <a href={`/blog/${blog.slug}`}>{blog.title}</a></li>)}
        </ul>
    )
}