import fs from 'node:fs/promises';
import path from 'node:path';

import { vendors } from '../data/jdks';

export default function jdksPlugin() {
  return {
    name: 'docusaurus-jdks-plugin',
    async loadContent() {
      const jdkList = getJDKsMarkup(vendors);
      const template = getMarkup(jdkList);

      try {
        await fs.writeFile(
          path.resolve(__dirname, '../../docs/jdks.mdx'),
          template,
        );
      } catch (err) {
        console.error(err);
      }
    },
  };
}

function getMarkup(content: string) {
  return `---
title: JDK Distributions
---

{/* ATTENTION! Do not edit, the file is generated automatically by the plugin */}

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
