import Layout from '@theme/Layout';
import JDKList from '@site/src/components/sections/JDKList';
import PageCarbonAds from '@site/src/components/sections/PageCarbonAds';

export default function JDKsPage() {
  return (
    <Layout title="JDK Distributions">
      <PageCarbonAds />
      <JDKList />
    </Layout>
  );
}
