import { Blogs } from '@/data/blogs';

export default function BlogList() {
  return (
    <ul>
      {Blogs.map((blog) => (
        <li key={blog.slug}>
          {blog.publishDate} - <a href={`/blog/${blog.slug}`}>{blog.title}</a>
        </li>
      ))}
    </ul>
  );
}
