import type { BrandItem } from '@/types/brand';

const logos: BrandItem[] = [
  {
    src: '/img/logo.png',
    alt: 'SDKMAN! small logo',
    links: [
      {
        text: 'PNG',
        href: '/img/logo.png',
      },
    ],
  },
  {
    src: '/img/sdk-man-small-pattern.svg',
    alt: 'SDKMAN! logo',
    links: [
      {
        text: 'SVG',
        href: '/img/sdk-man-small-pattern.svg',
      },
      {
        text: 'PNG',
        href: '/img/sdk-man-small-pattern.png',
      },
    ],
  },
];

export default logos;
