import Content from './content.mdx';
import BlogLayout from '@/components/BlogLayout';

export default function Page() {
  return (
    <BlogLayout slug='pkce'>
      <Content />
    </BlogLayout>
  );
}
