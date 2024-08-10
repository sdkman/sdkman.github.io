import { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

export default function Subsection({ title, children }: Props) {
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
