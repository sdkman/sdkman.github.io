import Link from 'next/link';

import { Container } from '@/components/ui/container';

function DefaultJdk() {
  return (
    <Container className="link-highlight mb-8">
      <h2 className="mb-2 text-2xl font-medium">
        Why is <Link href="/jdks/tem">Temurin</Link> the default JDK?
      </h2>
      <p>
        We&apos;ve chosen Eclipse Temurin as our default JDK because it&apos;s
        widely recognized as the de facto standard for OpenJDK distributions.
        Trusted for its reliability, stability, and performance, Temurin is
        ideal for production-grade development. We ensure our default version
        aligns with the latest stable release, so you&apos;re equipped with the
        best tools for your JVM projects.
      </p>

      <p>
        Looking ahead, we plan to give you the flexibility to track the latest
        JDK releases from individual vendors, such as Oracle or Amazon Corretto.
        While this isn&apos;t available yet, we&apos;re working to make it
        easier for you to stay on top of the specific distributions you rely on.
      </p>
    </Container>
  );
}

export { DefaultJdk };
