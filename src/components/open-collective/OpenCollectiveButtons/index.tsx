import Link from '@docusaurus/Link';

import OpenCollectiveButton from '@site/src/components/open-collective/OpenCollectiveButton';

import styles from './styles.module.scss';

type Props = {
  showViewAll?: boolean;
};

export default function OpenCollectiveButtons({ showViewAll = false }: Props) {
  return (
    <div className={styles.buttons}>
      {showViewAll ? (
        <Link
          className="button button--outline button--primary button--rounded"
          to="/contributors"
        >
          View all contributors
        </Link>
      ) : null}

      <OpenCollectiveButton />
    </div>
  );
}
