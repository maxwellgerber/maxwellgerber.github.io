import BlogLayout from '@/components/BlogLayout';
import Content from './content.mdx';

export default function Page() {
  return (
    <BlogLayout slug='how-to-run-a-jwks'>
      <Content />
    </BlogLayout>
  );
}
