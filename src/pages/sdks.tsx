import Layout from '@theme/Layout';
import SDKList from '@site/src/components/sections/SDKList';
import PageCarbonAds from '@site/src/components/sections/PageCarbonAds';

export default function SDKsPage() {
  return (
    <Layout title="SDK Installation Candidates">
      <PageCarbonAds />
      <SDKList />
    </Layout>
  );
}
