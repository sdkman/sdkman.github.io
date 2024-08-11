import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import vendors from './vendors';

export default async function generateJDKs() {
  const jdkList = getJDKsMarkup(vendors);
  const template = getMarkup(jdkList);

  try {
    await writeFile(resolve(process.cwd(), './docs/jdks.mdx'), template);
  } catch (err) {
    console.error(err);
  }
}

function getMarkup(content: string) {
  return `---
title: JDK Distributions
---

{/* ATTENTION! Do not edit, the file is generated automatically by the plugin */}

import DocsCarbonAds from '@site/src/components/sections/DocsCarbonAds';

<DocsCarbonAds />

${content}`;
}

function getJDKsMarkup(vendors: any[]) {
  return vendors
    .sort((a, b) => (a.distribution > b.distribution ? 1 : -1))
    .reduce((acc, val) => {
      const item = `
## ${val.distribution}(${val.vendor}) \\{#${val.id}\\}

[${val.url}](${val.url})

${val.description}

\`\`\`shell
sdk install java x.y.z-${val.id}
\`\`\`
`;

      acc += `${item}`;

      return acc;
    }, '');
}
