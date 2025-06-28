import Layout from '@theme/Layout';

import PageCarbonAds from '@site/src/components/ads/PageCarbonAds';
import Features from '@site/src/components/sections/home/Features';
import Hero from '@site/src/components/sections/home/Hero';
import OpenCollectiveCarousel from '@site/src/components/sections/home/OpenCollectiveCarousel';
import Technologies from '@site/src/components/sections/home/Technologies';

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
