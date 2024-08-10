import Link from '@docusaurus/Link';

import OCButton from './OCButton';
import styles from './styles.module.scss';

type Props = {
  showViewAll?: boolean;
};

export default function Buttons({ showViewAll = false }: Props) {
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

      <OCButton />
    </div>
  );
}
