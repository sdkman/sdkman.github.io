import type { SDK } from '@/types/sdk';

import Link from 'next/link';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';

type SdkListProps = {
  sdks: SDK[];
};

function SdkList({ sdks }: Readonly<SdkListProps>) {
  return (
    <section className="pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sdks.map((SDK, idx) => (
            <Link key={`sdk-${idx}`} href={`/sdks/${SDK.id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{SDK.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { SdkList };
