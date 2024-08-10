import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hero from '@site/src/components/sections/Hero';
import Features from '@site/src/components/sections/Features';
import { OpenCollectiveCarousel } from '@site/src/components/sections/OpenCollective';

export default function WelcomePage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />

      <main>
        <Features />
        <OpenCollectiveCarousel />
      </main>
    </Layout>
  );
}
