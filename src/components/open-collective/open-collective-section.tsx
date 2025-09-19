import Link from 'next/link';

import { SiOpencollective } from 'react-icons/si';

import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

type OpenCollectiveSectionProps = {
  className?: string;
  children: React.ReactNode;
};

function OpenCollectiveSection({
  className,
  children,
}: Readonly<OpenCollectiveSectionProps>) {
  return (
    <section className={cn('py-20', className)}>
      <Container>
        <div className="flex items-center justify-center gap-2 [&_svg]:size-8">
          <SiOpencollective />
          <h2 className="text-2xl">Open Collective</h2>
        </div>

        {children}
      </Container>
    </section>
  );
}

type OpenCollectiveSubsectionProps = {
  title: string;
  children: React.ReactNode;
};

function OpenCollectiveSubsection({
  title,
  children,
}: Readonly<OpenCollectiveSubsectionProps>) {
  return (
    <>
      <div className="link-highlight mt-12 mb-8 text-center">
        <h3 className="mb-2 text-xl font-medium">{title}</h3>

        <p>
          <Link href="https://opencollective.com/sdkman/contribute">
            Contribute to our collective
          </Link>
        </p>
      </div>

      {children}
    </>
  );
}

export { OpenCollectiveSection, OpenCollectiveSubsection };
