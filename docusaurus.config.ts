import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SDKMAN! the Software Development Kit Manager',
  tagline: '',
  favicon: 'assets/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sdkman.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sdkman', // Usually your GitHub org/user name.
  projectName: 'sdkman.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/scss/custom.scss', './src/scss/carbon.scss'],
        },
        googleAnalytics: {
          trackingID: 'UA-10247295-12',
          anonymizeIP: true,
        },
        // IMPORTANT: Need use Google Analytics 4 with G-* instead UA-*
        // gtag: {
        //   trackingID: 'G-##########',
        //   anonymizeIP: true
        // },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    './src/plugins/google-fonts.ts',
    './src/plugins/jdks-details.ts',
  ],

  themeConfig: {
    metadata: [
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'SDKMAN!' },
      {
        name: 'og:description',
        content:
          'SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix based systems.',
      },
      { name: 'twitter:site', content: '@sdkman_' },
      { name: 'twitter:creator', content: '@sdkman_' },
    ],
    // Replace with your project's social card
    image: 'assets/img/bubble-logo-sdkman-groovy-color.png',
    navbar: {
      logo: {
        alt: 'SDKMAN!',
        src: 'assets/img/logo.png',
        width: 44,
        height: 32,
      },
      items: [
        {
          label: 'Docs',
          to: '/install',
          position: 'left',
        },
        {
          label: 'JDKs',
          to: '/jdks',
          position: 'left',
        },
        {
          label: 'SDKs',
          to: '/sdks',
          position: 'left',
        },
        {
          label: 'Contributors',
          to: '/contributors',
          position: 'left',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} SDKMAN!.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
