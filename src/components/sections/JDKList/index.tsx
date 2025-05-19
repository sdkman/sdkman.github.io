import Admonition from '@theme/Admonition';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import JDKCard from './JDKCard';
import styles from './styles.module.scss';

import jdks from '@site/src/data/jdks';

export default function JDKList() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading className={styles.sectionTitle} as="h1">
          JDK Distributions
        </Heading>

        <Admonition
          className={styles.sectionNote}
          type="info"
          title={
            <>
              Why is <Link href="/jdks/tem">Temurin</Link> the default JDK?
            </>
          }
        >
          <p>
            We've chosen Eclipse Temurin as our default JDK because it's widely
            recognized as the de facto standard for OpenJDK distributions.
            Trusted for its reliability, stability, and performance, Temurin is
            ideal for production-grade development. We ensure our default
            version aligns with the latest stable release, so you're equipped
            with the best tools for your JVM projects.
          </p>

          <p>
            Looking ahead, we plan to give you the flexibility to track the
            latest JDK releases from individual vendors, such as Oracle or
            Amazon Corretto. While this isn't available yet, we're working to
            make it easier for you to stay on top of the specific distributions
            you rely on.
          </p>
        </Admonition>

        <div className={styles.sectionList}>
          {jdks.map((JDK, idx) => (
            <JDKCard key={`jdk-${idx}`} item={JDK} />
          ))}
        </div>
      </div>
    </section>
  );
}
