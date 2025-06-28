import * as React from 'react';

type Props = { code: string; placement: string };

export default function CarbonAds({ code, placement }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = '';
      const s = document.createElement('script');
      s.async = true;
      s.id = '_carbonads_js';
      s.src = `https://cdn.carbonads.com/carbon.js?serve=${code}&placement=${placement}`;
      ref.current.appendChild(s);
    }
  }, []);

  return <div className="carbon-band" ref={ref} />;
}
