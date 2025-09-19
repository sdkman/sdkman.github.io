import Link from 'next/link';
import { notFound } from 'next/navigation';

import { FaGlobe } from 'react-icons/fa6';

import { CarbonAds } from '@/components/carbon-ads';
import { PageHeader } from '@/components/page-header';
import { JdkInstallation } from '@/components/sections/jdks/jdk-installation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import jdks from '@/data/jdks';
import { jdksService } from '@/lib/services/jdks';

type Props = {
  params: Promise<{ id?: string }>;
};

export default async function JdkDetailsPage({ params }: Readonly<Props>) {
  const pageParams = await params;
  const JDK = jdks.find((item) => item.id === pageParams.id);
  if (!JDK) return notFound();

  const breadcrumbs = [
    { text: 'JDK Distributions', url: '/jdks' },
    { text: `${JDK.distribution} (${JDK.vendor})` },
  ];

  return (
    <>
      <CarbonAds />

      <PageHeader
        title={`${JDK.distribution} (${JDK.vendor})`}
        breadcrumbs={breadcrumbs}
      />

      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_250px]">
          <div className="flex flex-col gap-6">
            <p>{JDK.description}</p>

            <JdkInstallation id={JDK.id} architecture={JDK.architecture.long} />
          </div>

          <Card className="h-fit">
            <CardHeader className="gap-0">
              <CardTitle>Details</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col text-sm">
              <Link className="flex items-center gap-2" href={JDK.url}>
                <FaGlobe className="size-4" />
                Website
              </Link>

              <Separator className="my-3" />

              {JDK.os?.icons && (
                <div className="flex items-center gap-2">
                  {JDK.os.icons.map((OsIcon, idx) => (
                    <OsIcon
                      key={`jdk-os-icon-${JDK.id}-${idx}`}
                      className="size-5"
                    />
                  ))}
                </div>
              )}

              <Separator className="my-3" />

              {JDK.architecture?.long && (
                <div>
                  <div className="mb-1 font-medium">Architectures:</div>

                  <ul className="list-inside list-disc">
                    {JDK.architecture?.long.map((arch, idx) => (
                      <li key={`arch-${JDK.id}-${idx}`}>{arch.label}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
}

export async function generateStaticParams() {
  return jdksService.generateParams();
}

export async function generateMetadata({ params }: Readonly<Props>) {
  const pageParams = await params;
  const JDK = jdks.find((item) => item.id === pageParams.id);
  if (!JDK) return notFound();

  return {
    title: `${JDK.distribution} (${JDK.vendor})`,
  };
}
