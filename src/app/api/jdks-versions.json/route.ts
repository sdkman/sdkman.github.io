import type { Platform } from '@/types/jdk';

export const dynamic = 'force-static';

const platformList: Platform[] = [
  'linuxx64',
  'linuxarm32hf',
  'linuxarm64',
  'darwinx64',
  'darwinarm64',
  'windowsx64',
];

async function fetchJDKs(platformId: Platform): Promise<string> {
  try {
    const res = await fetch(
      `https://api.sdkman.io/2/candidates/java/${platformId}/versions/list?installed=`,
    );

    return await res.text();
  } catch (err) {
    console.error(err);
  }

  return '';
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

async function generateJDKs() {
  const result = [];

  for (const platform of platformList) {
    const JDKsData = await fetchJDKs(platform);
    const JDKs = parseJDKs(JDKsData);

    result.push({
      platform,
      versions: JDKs,
    });
  }

  return result;
}

export async function GET() {
  const data = await generateJDKs();

  return Response.json(data);
}
