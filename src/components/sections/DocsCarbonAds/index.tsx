import CarbonAds from '@site/src/components/CarbonAds';
import { CARBON_ADS_CODE, CARBON_ADS_PLACEMENT } from '@site/src/constants';

export default function DocsCarbonAds() {
  return (
    <section>
      <CarbonAds code={CARBON_ADS_CODE} placement={CARBON_ADS_PLACEMENT} />
    </section>
  );
}
