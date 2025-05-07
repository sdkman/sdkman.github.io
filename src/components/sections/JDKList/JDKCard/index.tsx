import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.scss';

import { JDK } from '@site/src/types/jdk';

type Props = {
  item: JDK;
};

export default function JDKCard({ item }: Props) {
  return (
    <Link className={clsx('card', styles.card)} href={`/jdks/${item.id}`}>
      <div className="card__header">
        <h2 className="card__title">
          {item.distribution} ({item.vendor})
        </h2>
      </div>

      <div className="card__body">
        <div className={styles.cardBody}>
          {item.os?.icons && (
            <div className={styles.cardSide}>
              {item.os.icons.map((OsIcon, idx) => (
                <OsIcon
                  key={`jdk-os-icon-${item.id}-${idx}`}
                  className={styles.cardOsIcon}
                />
              ))}
            </div>
          )}

          {item.architecture?.icons && (
            <div className={styles.cardSide}>
              {item.architecture.icons.map((ArchIcon, idx) => (
                <ArchIcon
                  key={`jdk-arch-icon-${item.id}-${idx}`}
                  className={styles.cardArchIcon}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
