import { Redirect, useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import PageCarbonAds from '@site/src/components/sections/PageCarbonAds';
import clsx from 'clsx';
import styles from './styles.module.scss';

import jdks from '@site/src/data/jdks';
import { getNameFromPath } from '@site/src/lib/utils';

export default function JDKDetailsPage() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const JDKId = getNameFromPath(location.pathname, siteConfig.baseUrl);

  if (!JDKId.length) {
    return <Redirect to="/jdks/" />;
  }

  const JDK = jdks.find((item) => item.id === JDKId);

  if (!JDK) {
    return <Redirect to="/404/" />;
  }

  return (
    <Layout title={`${JDK.distribution} (${JDK.vendor})`}>
      <PageCarbonAds />

      <div className={clsx('container', styles.page)}>
        <Heading as="h1">{`${JDK.distribution} (${JDK.vendor})`}</Heading>

        <div className={styles.pageContent}>
          <div>
            <p>{JDK.description}</p>

            <div>
              <Heading as="h2">Installation</Heading>

              <CodeBlock language="shell">
                sdk install java x.y.z-{JDK.id}
              </CodeBlock>
            </div>
          </div>

          <div className={clsx('card', styles.card)}>
            <div className="card__header">
              <div className="card__title">Details</div>
            </div>

            <div className={clsx('card__body', styles.cardBody)}>
              <Link href={JDK.url}>Website</Link>

              {JDK.os?.icons && (
                <div className={styles.cardIcons}>
                  {JDK.os.icons.map((OsIcon, idx) => (
                    <OsIcon
                      key={`jdk-os-icon-${JDK.id}-${idx}`}
                      className={styles.cardOsIcon}
                    />
                  ))}
                </div>
              )}

              {JDK.architecture?.long && (
                <div>
                  <div className={styles.cardSubtitle}>Architectures:</div>

                  <ul>
                    {JDK.architecture?.long.map((arch, idx) => (
                      <li key={`arch-${JDK.id}-${idx}`}>{arch}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
