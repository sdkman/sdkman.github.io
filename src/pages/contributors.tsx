import Layout from '@theme/Layout';

import PageCarbonAds from '@site/src/components/ads/PageCarbonAds';
import OpenCollectiveList from '@site/src/components/sections/contributors/OpenCollectiveList';

export default function ContributorsPage() {
  return (
    <Layout title="Contributors">
      <PageCarbonAds />
      <OpenCollectiveList />
    </Layout>
  );
}
