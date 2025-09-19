import Image from 'next/image';

import { Code } from '@/components/ui/code';
import { Container } from '@/components/ui/container';

function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-center">
          <Image
            className="h-auto w-[250px]"
            src="/img/sdk-man-small-pattern.svg"
            alt="SDKMAN! logo"
            width={250}
            height={145}
          />

          <h1 className="mt-6 mb-4 text-center text-5xl font-bold capitalize">
            The Software Development Kit Manager
          </h1>
          <p className="text-muted-foreground w-full max-w-3xl text-center text-lg font-medium">
            Meet <strong>SDKMAN!</strong> – your reliable companion for
            effortlessly managing multiple Software Development Kits on Unix
            systems. Imagine having different versions of SDKs and needing a
            stress-free way to switch between them. SDKMAN! steps in with its
            easy-to-use Command Line Interface (CLI) and API. Formerly known as
            GVM, the Groovy enVironment Manager, SDKMAN! draws inspiration from
            familiar tools like apt, pip, RVM, and rbenv and even Git. Think of
            it as your helpful toolkit friend, ready to streamline SDK
            management for you. 🛠️
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <p className="text-2xl font-bold capitalize">Get started now!</p>

          <p className="text-muted-foreground text-center font-medium">
            Go on then, paste and run the following in a terminal:
          </p>

          <div className="mt-4">
            <pre>
              <Code>{'curl -s "https://get.sdkman.io" | bash'}</Code>
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
