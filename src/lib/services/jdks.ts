import jdksVersions from '@site/src/data/jdks-versions';

function getVersions(platformId: string, vendorId: string): string[] {
  const JDKsByPlatform = jdksVersions.find(
    (item) => item.platform === platformId,
  );

  if (!!JDKsByPlatform) {
    return JDKsByPlatform.versions
      .filter((item) => item.dist === vendorId)
      .map((item) => item.version);
  }

  return [];
}

export const jdksService = {
  getVersions,
};
