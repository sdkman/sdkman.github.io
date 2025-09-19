import type { JDKVersion } from '@/types/jdk';

import jdks from '@/data/jdks';

async function getVersions(
  platformId: string,
  vendorId: string,
): Promise<string[]> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

  const data = await fetch(`${BASE_URL}/api/jdks-versions.json`);
  const jdksVersions: JDKVersion[] = await data.json();

  const jdksByPlatform = jdksVersions.find(
    (item) => item.platform === platformId,
  );

  if (!!jdksByPlatform) {
    return jdksByPlatform.versions
      .filter((item) => item.dist === vendorId)
      .map((item) => item.version);
  }

  return [];
}

function generateParams() {
  return jdks.reduce<Record<'id', string>[]>((acc, val) => {
    acc.push({ id: val.id });

    return acc;
  }, []);
}

export const jdksService = {
  getVersions,
  generateParams,
};
