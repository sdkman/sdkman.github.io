import type { SDK } from '@site/src/types/sdk';

import Link from '@docusaurus/Link';
import clsx from 'clsx';

import { stripVersionFromTitle } from '@site/src/lib/utils';

import styles from './styles.module.scss';

type Props = {
  item: SDK;
};

export default function SdkCard({ item }: Props) {
  return (
    <Link className={clsx('card', styles.card)} href={`/sdks/${item.id}`}>
      <div className="card__header">
        <h2 className="card__title">{stripVersionFromTitle(item.title)}</h2>
      </div>
    </Link>
  );
}
