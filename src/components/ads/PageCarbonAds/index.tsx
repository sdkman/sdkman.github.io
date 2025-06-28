import CarbonAds from '@site/src/components/ads/CarbonAds';

import { CARBON_ADS_CODE, CARBON_ADS_PLACEMENT } from '@site/src/constants';

import styles from './styles.module.scss';

export default function PageCarbonAds() {
  return (
    <section className={styles.section}>
      <CarbonAds code={CARBON_ADS_CODE} placement={CARBON_ADS_PLACEMENT} />
    </section>
  );
}
