import type { SDK } from '@site/src/types/sdk';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  item: SDK;
};

export default function SDKCard({ item }: Props) {
  return (
    <Link className={clsx('card', styles.card)} href={`/sdks/${item.id}`}>
      <div className="card__header">
        <h2 className="card__title">{item.title}</h2>
      </div>
    </Link>
  );
}
