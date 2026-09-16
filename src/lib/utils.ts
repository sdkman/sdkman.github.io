export function getNameFromPath(pathname: string, baseUrl: string): string {
  const normalPathName =
    baseUrl === '/'
      ? pathname
      : pathname.replace(new RegExp(`^${baseUrl}`), '/');
  const pathParts = normalPathName.split('/');

  return pathParts.filter((path) => !!path.length).slice(-1)[0];
}

// TODO: revert once we can accurately resolve candidate versions again.
// Candidate titles arrive from the API as "<name> (<version>)", e.g. "Ant
// (1.10.17)". Drop the trailing parenthesised group so no stale version is
// shown. Note "Apache ActiveMQ (Classic)" loses its "(Classic)" suffix too --
// it is the only candidate whose name carries its own parentheses.
export function stripVersionFromTitle(title: string): string {
  if (!title.endsWith(')')) {
    return title;
  }

  const versionStart = title.lastIndexOf('(');

  return versionStart === -1 ? title : title.slice(0, versionStart).trim();
}
