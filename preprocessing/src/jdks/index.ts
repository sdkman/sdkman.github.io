import type { Platform } from '../../../src/types/jdk';

import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const platformList: Platform[] = [
  'linuxx64',
  'linuxarm32hf',
  'linuxarm64',
  'darwinx64',
  'darwinarm64',
  'windowsx64',
];

export default async function generateJDKs() {
  const result = [];

  for (const platform of platformList) {
    const JDKsData = await fetchJDKs(platform);
    const JDKs = parseJDKs(JDKsData);

    result.push({
      platform,
      versions: JDKs,
    });
  }

  try {
    await writeFile(
      resolve(process.cwd(), './src/data/jdks-versions.ts'),
      `const result = ${JSON.stringify(result, null, 2)};\n\n` +
        'export default result;',
    );
  } catch (err) {
    console.error(err);
  }
}

async function fetchJDKs(platformId: Platform) {
  try {
    const res = await fetch(
      `https://api.sdkman.io/2/candidates/java/${platformId}/versions/list?installed=`,
    );

    return await res.text();
  } catch (err) {
    console.error(err);
  }
}

function parseJDKs(data: string) {
  return data
    .split('\n')
    .slice(5, -10)
    .reduce<{ version: string; dist: string }[]>((acc, val) => {
      const rowParts = val.split('|').map((item) => item.trim());

      acc.push({
        version: rowParts[2],
        dist: rowParts[3],
      });

      return acc;
    }, []);
}
