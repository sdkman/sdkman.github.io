'use client';

import * as React from 'react';

import Link from 'next/link';

import { FaBars } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { docsMenu, mainMenu } from '@/data/menus';
import { cn } from '@/lib/utils';

type MobileNavProps = {
  className?: string;
};

function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn(className)}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <FaBars />
            <span className="sr-only">Open navigation</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <ul className="mt-4 flex flex-col items-center gap-4">
            {mainMenu
              .filter((item) => item.name !== 'Docs')
              .map((item) => (
                <li key={item.name}>
                  <Link href={item.url} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>

          <h2 className="text-foreground mt-4 text-center font-semibold">
            Docs
          </h2>

          <ul className="flex flex-col items-center gap-4">
            {docsMenu.map((item) => (
              <li key={item.name}>
                <Link href={item.url} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export { MobileNav };
