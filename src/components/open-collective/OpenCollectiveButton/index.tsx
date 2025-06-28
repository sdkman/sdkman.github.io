import Link from '@docusaurus/Link';

import styles from './styles.module.scss';

export default function OpenCollectiveButton() {
  return (
    <Link
      className={styles.button}
      href="https://opencollective.com/sdkman/contribute"
    >
      <img
        src="/assets/img/open-collective-button.png"
        alt="Donate"
        width={240}
        height={35}
        loading="lazy"
      />
    </Link>
  );
}
