import type { IconType } from 'react-icons';

export type JDKArchitecture = {
  icons: IconType[];
  list: string[];
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
