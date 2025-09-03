export function getNameFromPath(pathname: string, baseUrl: string): string {
  const normalPathName =
    baseUrl === '/'
      ? pathname
      : pathname.replace(new RegExp(`^${baseUrl}`), '/');
  const pathParts = normalPathName.split('/');

  return pathParts.filter((path) => !!path.length).slice(-1)[0];
}
