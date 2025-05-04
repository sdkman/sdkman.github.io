import Layout from '@theme/Layout';

import Hero from '@site/src/components/sections/Hero';
import Features from '@site/src/components/sections/Features';
import { OpenCollectiveCarousel } from '@site/src/components/sections/OpenCollective';
import PageCarbonAds from '@site/src/components/sections/PageCarbonAds';
import Technologies from '@site/src/components/sections/Technologies';

export default function WelcomePage() {
  return (
    <Layout
      title="Home"
      description="SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems."
    >
      <PageCarbonAds />
      <Hero />

      <main>
        <Technologies />
        <Features />
        <OpenCollectiveCarousel />
      </main>
    </Layout>
  );
}
