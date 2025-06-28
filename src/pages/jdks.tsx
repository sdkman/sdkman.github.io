import Layout from '@theme/Layout';

import PageCarbonAds from '@site/src/components/ads/PageCarbonAds';
import JdkList from '@site/src/components/sections/jdks/JdkList';

export default function JDKsPage() {
  return (
    <Layout title="JDK Distributions">
      <PageCarbonAds />
      <JdkList />
    </Layout>
  );
}
