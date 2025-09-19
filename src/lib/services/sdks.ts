import type { SDK } from '@/types/sdk';

async function fetchSDKs() {
  try {
    const res = await fetch('https://api.sdkman.io/2/candidates/list');

    return await res.text();
  } catch (err) {
    console.error(err);
  }

  return '';
}

function parseSDKs(sdksData: string): SDK[] {
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

async function getSdkList() {
  const sdksData = await fetchSDKs();
  const sdks = parseSDKs(sdksData);

  return sdks;
}

async function getSdkById(id?: string): Promise<SDK | undefined> {
  try {
    const data = await getSdkList();
    return data.find((item) => item.id === id);
  } catch (err) {
    console.error(err);
  }
}

async function generateParams() {
  const sdks = await getSdkList();

  return sdks.reduce<Record<'id', string>[]>((acc, val) => {
    acc.push({ id: val.id });

    return acc;
  }, []);
}

const sdksService = {
  getSdkList,
  getSdkById,
  generateParams,
};

export default sdksService;
