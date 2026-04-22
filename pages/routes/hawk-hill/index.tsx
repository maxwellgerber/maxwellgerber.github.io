import Content from './content.mdx';
import RouteLayout from '@/components/routes/RouteLayout';

export default function Page() {
  return (
    <RouteLayout slug='hawk-hill'>
      <Content />
    </RouteLayout>
  );
}
