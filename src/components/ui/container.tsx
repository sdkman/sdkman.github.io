import * as React from 'react';

import { cn } from '@/lib/utils';

function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-7xl px-5', className)}
      {...props}
    />
  );
}

export { Container };
