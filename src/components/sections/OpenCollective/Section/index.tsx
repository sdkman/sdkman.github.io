import { ReactNode } from 'react';
import clsx from 'clsx';
import { SiOpencollective } from 'react-icons/si';

import styles from './styles.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Section({ className = '', children }: Props) {
  return (
    <section className={clsx(styles.section, className)}>
      <div className="container">
        <div className={styles.sectionTitleWrapper}>
          <SiOpencollective />
          <h2 className={styles.sectionTitle}>Open Collective</h2>
        </div>

        {children}
      </div>
    </section>
  );
}
