import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import jdks from '@/data/jdks';

function JdkList() {
  return (
    <section className="pb-20">
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jdks.map((JDK, idx) => (
          <Link key={`jdk-${idx}`} href={`/jdks/${JDK.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2>
                    {JDK.distribution} ({JDK.vendor})
                  </h2>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex items-center justify-between">
                {JDK.os?.icons && (
                  <div className="flex items-center gap-3">
                    {JDK.os.icons.map((OsIcon, idx) => (
                      <OsIcon
                        key={`jdk-os-icon-${JDK.id}-${idx}`}
                        className="size-5"
                      />
                    ))}
                  </div>
                )}

                {JDK.architecture?.short && (
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold">
                      {JDK.architecture.short.join(' / ')}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </Container>
    </section>
  );
}

export { JdkList };
