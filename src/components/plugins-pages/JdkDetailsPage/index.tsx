import Link from '@docusaurus/Link';
import { Redirect, useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import PageCarbonAds from '@site/src/components/ads/PageCarbonAds';

import { getNameFromPath } from '@site/src/lib/utils';

import jdks from '@site/src/data/jdks';

import Installation from './Installation';
import styles from './styles.module.scss';

export default function JdkDetailsPage() {
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

            <Installation id={JDK.id} architecture={JDK.architecture?.long} />
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
                      <li key={`arch-${JDK.id}-${idx}`}>{arch.label}</li>
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
