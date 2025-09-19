import { CarbonAds } from '@/components/carbon-ads';
import { PageHeader } from '@/components/page-header';
import { DefaultJdk } from '@/components/sections/jdks/default-jdk';
import { JdkList } from '@/components/sections/jdks/jdk-list';

export default function JDKsPage() {
  const breadcrumbs = [{ text: 'JDK Distributions' }];

  return (
    <div>
      <CarbonAds />

      <PageHeader title="JDK Distributions" breadcrumbs={breadcrumbs} />

      <DefaultJdk />

      <JdkList />
    </div>
  );
}
