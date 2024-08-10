import Link from '@docusaurus/Link';
import clsx from 'clsx';

import CommonHausFoundationLogo from '@site/static/img/CF_logo_horizontal_stack_reverse.svg';

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.footerContent)}>
        <Link href="https://www.commonhaus.org/">
          <CommonHausFoundationLogo
            className={styles.footerCommonHausFoundationLogo}
            width={150}
            height={32}
          />
        </Link>

        <div>
          &copy; 2012 - {new Date().getFullYear()} SDKMAN! is Open Source
          Software licensed under{' '}
          <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2</a>
        </div>

        <div>
          Logos and Design by{' '}
          <Link href="https://github.com/dmesu">Daida Medina</Link> and{' '}
          <Link href="https://github.com/SvMak">Sviatoslav Makhynko</Link>
        </div>

        <Link className={styles.footerStatus} href="http://status.sdkman.io">
          <span>Status</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#3BCF6E"
              d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
            ></path>
          </svg>
        </Link>
      </div>
    </footer>
  );
}
