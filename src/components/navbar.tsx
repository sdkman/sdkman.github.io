'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { SocialLinks } from '@/components/social-links';
import { Container } from '@/components/ui/container';
import { mainMenu } from '@/data/menus';
import { cn } from '@/lib/utils';

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 shadow backdrop-blur-sm">
      <Container className="text-muted-foreground flex h-16 items-center justify-between">
        <div className="mr-8 flex items-center gap-4">
          <MobileNav className="lg:hidden" />

          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="SDKMAN! Logo"
              width={44}
              height={32}
            />
          </Link>
        </div>

        <nav className="hidden grow lg:block">
          <ul className="flex items-center gap-6">
            {mainMenu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.url}
                  className={cn(
                    'font-semibold',
                    item.url === pathname
                      ? 'text-link-highlight'
                      : 'hover:text-link-highlight',
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <SocialLinks />
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}

export { Navbar };
