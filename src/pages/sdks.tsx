import Layout from '@theme/Layout';

import PageCarbonAds from '@site/src/components/ads/PageCarbonAds';
import SdkList from '@site/src/components/sections/sdks/SdkList';

export default function SDKsPage() {
  return (
    <Layout title="SDK Installation Candidates">
      <PageCarbonAds />
      <SdkList />
    </Layout>
  );
}
