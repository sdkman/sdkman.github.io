import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CarbonAds } from '@/components/carbon-ads';
import { CustomMDX } from '@/components/mdx';
import { PageHeader } from '@/components/page-header';
import { TOC } from '@/components/toc';
import { Container } from '@/components/ui/container';
import { docsMenu } from '@/data/menus';
import { getDocs } from '@/lib/source';
import { cn } from '@/lib/utils';

export async function generateStaticParams() {
  const docs = getDocs();

  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Readonly<Props>) {
  const parsedParams = await params;
  const doc = getDocs().find((doc) => doc.slug === parsedParams.slug);
  if (!doc) return {};

  return {
    title: doc.metadata.title,
    // description: doc.metadata.description,
  };
}

export default async function DocsPage({ params }: Readonly<Props>) {
  const parsedParams = await params;
  const doc = getDocs().find((doc) => doc.slug === parsedParams.slug);
  if (!doc) notFound();

  const breadcrumbs = [{ text: doc.metadata.title }];

  return (
    <div>
      <CarbonAds />

      <PageHeader title={doc.metadata.title} breadcrumbs={breadcrumbs} />

      <Container className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-[200px_1fr_200px]">
        <aside className="hidden lg:block">
          <nav className="sticky top-20">
            <ul className="my-5 space-y-1 text-sm">
              {docsMenu.map((item) => (
                <li key={item.name}>
                  <Link
                    className={cn(
                      'flex w-full py-1',
                      item.url === parsedParams.slug
                        ? 'text-muted-foreground'
                        : '',
                    )}
                    href={item.url}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="prose link-highlight">
          <CustomMDX source={doc.content} />
        </main>

        <aside className="hidden lg:block">
          <nav className="sticky top-20">
            <TOC headings={doc.headings} />
          </nav>
        </aside>
      </Container>
    </div>
  );
}
