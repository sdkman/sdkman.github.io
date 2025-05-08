export function getNameFromPath(pathname: string, baseUrl: string): string {
  const normalPathName =
    baseUrl === '/'
      ? pathname
      : pathname.replace(new RegExp(`^${baseUrl}`), '/');
  const pathParts = normalPathName.split('/');

  return pathParts.slice(-1)[0];
}
