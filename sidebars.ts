import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docSidebar: [
    'install',
    'usage',
    'vendors',
    { type: 'doc', label: 'JDKs', id: 'jdks' },
    { type: 'doc', label: 'SDKs', id: 'sdks' },
  ],
};

export default sidebars;
