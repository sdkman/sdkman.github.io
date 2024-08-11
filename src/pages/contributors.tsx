import Layout from '@theme/Layout';

import { OpenCollectiveList } from '@site/src/components/sections/OpenCollective';
import PageCarbonAds from '@site/src/components/sections/PageCarbonAds';

export default function ContributorsPage() {
  return (
    <Layout title="Contributors">
      <PageCarbonAds />
      <OpenCollectiveList />
    </Layout>
  );
}
