'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

type TOCProps = {
  headings: { level: number; text: string; slug: string }[];
};

function TOC({ headings }: TOCProps) {
  const activeId = useActiveItem(headings.map((heading) => heading.slug));

  return (
    <div className="my-5">
      <p className="mb-3 font-medium">On this page</p>

      <ul className="space-y-1 text-sm">
        {headings.map((heading, idx) => (
          <li key={`toc-item-${idx}`}>
            <a
              className={cn(
                'flex w-full py-1',
                heading.level !== 2 ? 'pl-3' : '',
                activeId === heading.slug ? 'text-muted-foreground' : '',
              )}
              href={`#${heading.slug}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

export { TOC };
