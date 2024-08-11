import React, { useEffect, useRef } from 'react';

type Props = { code: string; placement: string };

export default function CarbonAds({ code, placement }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = '';
      const s = document.createElement('script');
      s.id = '_carbonads_js';
      s.src = `//cdn.carbonads.com/carbon.js?serve=${code}&placement=${placement}`;
      ref.current.appendChild(s);
    }
  }, []);

  return <div className="carbon-band" ref={ref} />;
}
