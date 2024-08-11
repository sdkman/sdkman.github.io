import CarbonAds from '@site/src/components/CarbonAds';
import styles from './styles.module.scss';

import { CARBON_ADS_CODE, CARBON_ADS_PLACEMENT } from '@site/src/constants';

export default function PageCarbonAds() {
  return (
    <section className={styles.section}>
      <CarbonAds code={CARBON_ADS_CODE} placement={CARBON_ADS_PLACEMENT} />
    </section>
  );
}
