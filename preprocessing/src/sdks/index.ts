import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export default async function generateSDKs() {
  const sdksData = await fetchSdks();
  const sdks = parseSDKs(sdksData);
  const sdkList = getSDKsMarkup(sdks);
  const template = getMarkup(sdkList);

  try {
    await writeFile(resolve(process.cwd(), './docs/sdks.mdx'), template);
  } catch (err) {
    console.error(err);
  }
}

function getMarkup(content: string) {
  return `---
title: SDK Installation Candidates
---

{/* ATTENTION! Do not edit, the file is generated automatically by the plugin */}

${content}`;
}

function getSDKsMarkup(sdks: any[]) {
  return sdks.reduce((acc, val) => {
    const item = `
## ${val.title} \\{#${val.id}\\}

[${val.url}](${val.url})

${val.description}

\`\`\`shell
sdk install ${val.id}
\`\`\`
`;

    acc += `${item}`;

    return acc;
  }, '');
}

async function fetchSdks() {
  try {
    const res = await fetch('https://api.sdkman.io/2/candidates/list');

    return await res.text();
  } catch (err) {
    console.error(err);
  }
}

function parseSDKs(sdksData: string) {
  const baseParts = sdksData
    .split(
      '--------------------------------------------------------------------------------',
    )
    .slice(1, -1);

  return baseParts.map((item) => {
    const lines = item.slice(1, -1).split('\n');
    const id = lines.slice(-1)[0].split(' ').slice(-1)[0].trim();
    const title = lines[0].split('  ')[0].trim();
    const url = lines[0].split('  ').slice(-1)[0].trim();
    const description = lines.slice(2, -2).join('\n').trim();

    return {
      id,
      title,
      url,
      description,
    };
  });
}
