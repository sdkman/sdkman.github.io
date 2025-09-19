import type { Metadata } from 'next';

import { CarbonAds } from '@/components/carbon-ads';
import { PageHeader } from '@/components/page-header';
import { OpenCollectiveList } from '@/components/sections/contributors/open-collective-list';
import { openCollectiveService } from '@/lib/services/open-collective';

export const metadata: Metadata = {
  title: 'Contributors',
};

export default async function ContributorsPage() {
  const [organizationsSponsors, individualSponsors] = await Promise.all([
    openCollectiveService.getOpenCollective('organizations'),
    openCollectiveService.getOpenCollective('users'),
  ]);

  const breadcrumbs = [{ text: 'Contributors' }];

  return (
    <div>
      <CarbonAds />

      <PageHeader title="Contributors" breadcrumbs={breadcrumbs} />

      <OpenCollectiveList
        organizationsSponsors={organizationsSponsors}
        individualSponsors={individualSponsors}
      />
    </div>
  );
}
