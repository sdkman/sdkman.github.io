import Layout from '@theme/Layout';

import Hero from '@site/src/components/sections/Hero';
import Features from '@site/src/components/sections/Features';
import { OpenCollectiveCarousel } from '@site/src/components/sections/OpenCollective';

export default function WelcomePage() {
  return (
    <Layout title="Home">
      <Hero />

      <main>
        <Features />
        <OpenCollectiveCarousel />
      </main>
    </Layout>
  );
}
