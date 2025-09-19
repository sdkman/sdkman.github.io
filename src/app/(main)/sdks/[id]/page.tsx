import Link from 'next/link';
import { notFound } from 'next/navigation';

import { FaGlobe } from 'react-icons/fa6';

import { CarbonAds } from '@/components/carbon-ads';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from '@/components/ui/code';
import { Container } from '@/components/ui/container';
import sdksService from '@/lib/services/sdks';

type Props = {
  params: Promise<{ id?: string }>;
};

export default async function SdkDetailsPage({ params }: Readonly<Props>) {
  const pageParams = await params;
  const SDK = await sdksService.getSdkById(pageParams.id);
  if (!SDK) return notFound();

  const breadcrumbs = [
    { text: 'SDK Installation Candidates', url: '/sdks' },
    { text: SDK.title },
  ];

  return (
    <>
      <CarbonAds />

      <PageHeader title={SDK.title} breadcrumbs={breadcrumbs} />

      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_250px]">
          <div className="flex flex-col gap-6">
            <p>{SDK.description}</p>

            <pre>
              <Code>{`sdk install ${SDK.id}`}</Code>
            </pre>
          </div>

          <Card className="h-fit">
            <CardHeader className="gap-0">
              <CardTitle>Details</CardTitle>
            </CardHeader>

            <CardContent>
              <Link className="flex items-center gap-2" href={SDK.url}>
                <FaGlobe className="size-4" />
                Website
              </Link>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
}

export async function generateStaticParams() {
  const params = await sdksService.generateParams();

  return params;
}

export async function generateMetadata({ params }: Readonly<Props>) {
  const pageParams = await params;
  const SDK = await sdksService.getSdkById(pageParams.id);
  if (!SDK) return notFound();

  return {
    title: SDK.title,
  };
}
