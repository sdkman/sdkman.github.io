'use client';

import * as React from 'react';

import { FaRegCopy } from 'react-icons/fa6';
import { highlight } from 'sugar-high';

import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

function Code({ children, ...props }: React.ComponentProps<'code'>) {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const codeHTML = highlight(children?.toString() || '');

  function copy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(children?.toString() || '');
      setTooltipOpen(true);
      setTimeout(() => setTooltipOpen(false), 700);
    } else {
      console.warn('Clipboard API not supported');
    }
  }

  return (
    <>
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />

      <Tooltip open={tooltipOpen}>
        <TooltipTrigger asChild>
          <button
            className="text-muted-foreground absolute top-2 right-3 cursor-pointer"
            onClick={copy}
          >
            <FaRegCopy className="h-4 w-4" />
          </button>
        </TooltipTrigger>

        <TooltipContent>Copied!</TooltipContent>
      </Tooltip>
    </>
  );
}

export { Code };
