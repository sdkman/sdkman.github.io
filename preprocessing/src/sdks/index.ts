import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export default async function generateSDKs() {
  const sdksData = await fetchSDKs();
  const sdks = parseSDKs(sdksData);

  try {
    await writeFile(
      resolve(process.cwd(), './src/data/sdks.ts'),
      `const sdks = ${JSON.stringify(sdks, null, 2)};\n\n` +
        'export default sdks;',
    );
  } catch (err) {
    console.error(err);
  }
}

async function fetchSDKs() {
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
    const title = `${lines[0].split(')')[0].trim()})`;
    const url = lines[0].split(')').slice(-1)[0].trim();
    const description = lines.slice(2, -2).join('\n').trim();

    return {
      id,
      title,
      url,
      description,
    };
  });
}
