import { ReactNode } from 'react';
import { SiOpencollective } from 'react-icons/si';

import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export default function Section({ children }: Props) {
  return (
    <section className={styles.section}>
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
