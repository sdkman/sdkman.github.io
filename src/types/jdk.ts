import type { IconType } from 'react-icons';

export type Platform =
  | 'linuxx64'
  | 'linuxarm32hf'
  | 'linuxarm64'
  | 'darwinx64'
  | 'darwinarm64'
  | 'windowsx64';

export type Architecture = {
  label: string;
  platformId: Platform;
};

export type JDKArchitecture = {
  short: string[];
  long: Architecture[];
};

export type JDKOS = {
  icons: IconType[];
};

export type JDK = {
  id: string;
  vendor: string;
  distribution: string;
  url: string;
  architecture: JDKArchitecture;
  os: JDKOS;
  isDefault?: boolean;
  description: string;
};

export type JDKVersion = {
  platform: Platform;
  versions: { version: string; dist: string }[];
};
