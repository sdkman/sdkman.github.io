import { Redirect, useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import PageCarbonAds from '@site/src/components/sections/PageCarbonAds';
import clsx from 'clsx';
import Installation from './Installation';
import styles from './styles.module.scss';

import sdks from '@site/src/data/sdks';
import { getNameFromPath } from '@site/src/lib/utils';

export default function SDKDetailsPage() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const SDKId = getNameFromPath(location.pathname, siteConfig.baseUrl);

  if (!SDKId.length) {
    return <Redirect to="/sdks/" />;
  }

  const SDK = sdks.find((item) => item.id === SDKId);

  if (!SDK) {
    return <Redirect to="/404/" />;
  }

  return (
    <Layout title={SDK.title}>
      <PageCarbonAds />

      <div className={clsx('container', styles.page)}>
        <Heading as="h1">{SDK.title}</Heading>

        <div className={styles.pageContent}>
          <div>
            <p>{SDK.description}</p>

            <Installation id={SDK.id} />
          </div>

          <div className={clsx('card', styles.card)}>
            <div className="card__header">
              <div className="card__title">Details</div>
            </div>

            <div className={clsx('card__body', styles.cardBody)}>
              <Link href={SDK.url}>Website</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
