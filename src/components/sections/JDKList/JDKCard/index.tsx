import type { JDK } from '@site/src/types/jdk';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.scss';

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

          {item.architecture?.short && (
            <div className={styles.cardSide}>
              <span className={styles.cardArch}>
                {item.architecture.short.join(' / ')}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
