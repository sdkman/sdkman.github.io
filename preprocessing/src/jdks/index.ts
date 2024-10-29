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

:::info[Why is [Temurin](/jdks#tem) the default JDK?]

We've chosen Eclipse Temurin as our default JDK because it's widely recognized as the de facto standard for OpenJDK distributions.
Trusted for its reliability, stability, and performance, Temurin is ideal for production-grade development. We ensure our default
version aligns with the latest stable release, so you're equipped with the best tools for your JVM projects.

Looking ahead, we plan to give you the flexibility to track the latest JDK releases from individual vendors, such as Oracle or
Amazon Corretto. While this isn't available yet, we're working to make it easier for you to stay on top of the specific distributions
you rely on.

:::

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
