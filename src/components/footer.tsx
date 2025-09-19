import Link from 'next/link';

import CommonHausFoundationLogo from '@/components/icons/common-haus-foundation-logo';
import { Container } from '@/components/ui/container';

function Footer() {
  return (
    <footer className="bg-footer-background py-10 text-sm font-medium">
      <Container className="flex flex-col items-center justify-center text-center">
        <Link
          className="mb-6"
          href="https://www.commonhaus.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CommonHaus Foundation"
        >
          <CommonHausFoundationLogo />
        </Link>

        <p className="link-highlight">
          &copy; 2012 - {new Date().getFullYear()} SDKMAN! is Open Source
          Software licensed under{' '}
          <Link
            href="http://www.apache.org/licenses/LICENSE-2.0.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apache 2
          </Link>
        </p>

        <p className="link-highlight">
          Logos and Design by{' '}
          <Link
            href="https://github.com/dmesu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daida Medina
          </Link>{' '}
          and{' '}
          <Link
            href="https://github.com/SvMak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sviatoslav Makhynko
          </Link>
        </p>

        <Link
          className="mt-4 flex items-center"
          href="http://status.sdkman.io"
          target="_blank"
          rel="noopener noreferrer"
        >
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
      </Container>
    </footer>
  );
}

export { Footer };
