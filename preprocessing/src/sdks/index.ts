import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { SDK } from '../../../src/types/sdk';

const CANDIDATES_URL = 'https://state.sdkman.io/candidates';

type Candidate = {
  candidate: string;
  name: string;
  description: string;
  website_url: string;
  default?: string;
};

export default async function generateSDKs() {
  const sdks = parseSDKs(await fetchSDKs());

  await writeFile(
    resolve(process.cwd(), './src/data/sdks.ts'),
    `const sdks = ${JSON.stringify(sdks, null, 2)};\n\nexport default sdks;`,
  );
}

async function fetchSDKs(): Promise<Candidate[]> {
  const res = await fetch(CANDIDATES_URL);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch ${CANDIDATES_URL}: ${res.status} ${res.statusText}`,
    );
  }

  const data = await res.json();

  if (!Array.isArray(data) || !data.length) {
    throw new Error(
      `Unexpected response from ${CANDIDATES_URL}: expected a non-empty array`,
    );
  }

  return data;
}

function parseSDKs(candidates: Candidate[]): SDK[] {
  return candidates.map((item) => {
    if (!item.candidate || !item.name || !item.website_url) {
      throw new Error(
        `Incomplete candidate from ${CANDIDATES_URL}: ${JSON.stringify(item)}`,
      );
    }

    return {
      id: item.candidate,
      title: item.name,
      url: item.website_url,
      description: item.description,
      defaultVersion: item.default,
    };
  });
}
