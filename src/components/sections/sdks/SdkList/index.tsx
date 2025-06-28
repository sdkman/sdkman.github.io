import Heading from '@theme/Heading';

import SDKCard from '@site/src/components/cards/SdkCard';

import sdks from '@site/src/data/sdks';

import styles from './styles.module.scss';

export default function SdkList() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading className={styles.sectionTitle} as="h1">
          SDK Installation Candidates
        </Heading>

        <div className={styles.sectionList}>
          {sdks.map((SDK, idx) => (
            <SDKCard key={`sdk-${idx}`} item={SDK} />
          ))}
        </div>
      </div>
    </section>
  );
}
