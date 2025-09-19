import type { Metadata } from 'next';

import { CarbonAds } from '@/components/carbon-ads';
import { Features } from '@/components/sections/home/features';
import { Hero } from '@/components/sections/home/hero';
import { OpenCollectiveCarousel } from '@/components/sections/home/open-collective-carousel';
import { Technologies } from '@/components/sections/home/technologies';
import { openCollectiveService } from '@/lib/services/open-collective';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems.',
};

export default async function HomePage() {
  const [organizationsSponsors, individualSponsors] = await Promise.all([
    openCollectiveService.getOpenCollective('organizations'),
    openCollectiveService.getOpenCollective('users'),
  ]);

  return (
    <main>
      <CarbonAds />

      <Hero />
      <Technologies />
      <Features />
      <OpenCollectiveCarousel
        organizationsSponsors={organizationsSponsors}
        individualSponsors={individualSponsors}
      />
    </main>
  );
}
