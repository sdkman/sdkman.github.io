'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

type CarbonAdsProps = {
  isDocs?: boolean;
};

function CarbonAds({ isDocs = false }: CarbonAdsProps) {
  const initialized = React.useRef(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!!ref.current && !initialized.current) {
      initialized.current = true;

      ref.current.innerHTML = '';
      const s = document.createElement('script');
      s.async = true;
      s.id = '_carbonads_js';
      s.src = `https://cdn.carbonads.com/carbon.js?serve=CK7I6KJE&placement=sdkmanio`;
      ref.current.appendChild(s);
    }
  }, []);

  return (
    <div
      className={cn('flex h-32 justify-end ', !isDocs && 'z-10 md:absolute md:top-16 md:right-0')}
      ref={ref}
    />
  );
}

export { CarbonAds };
