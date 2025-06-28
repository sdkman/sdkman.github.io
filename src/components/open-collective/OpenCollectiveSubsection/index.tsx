import * as React from 'react';

import Link from '@docusaurus/Link';

import styles from './styles.module.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function OpenCollectiveSubsection({ title, children }: Props) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitleWrapper}>
        <h3 className={styles.sectionTitle}>{title}</h3>

        <p>
          <Link href="https://opencollective.com/sdkman/contribute">
            Contribute to our collective
          </Link>
        </p>
      </div>

      {children}
    </div>
  );
}
