import { CarbonAds } from '@/components/carbon-ads';
import { PageHeader } from '@/components/page-header';
import { SdkList } from '@/components/sections/sdks/sdk-list';
import sdksService from '@/lib/services/sdks';

export default async function SDKsPage() {
  const sdks = await sdksService.getSdkList();
  const breadcrumbs = [{ text: 'SDK Installation Candidates' }];

  return (
    <div>
      <CarbonAds />

      <PageHeader
        title="SDK Installation Candidates"
        breadcrumbs={breadcrumbs}
      />

      <SdkList sdks={sdks} />
    </div>
  );
}
