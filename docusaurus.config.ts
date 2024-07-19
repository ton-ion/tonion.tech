import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from './tailwind-config.cjs';

const config: Config = {
  title: 'Tonion',
  tagline: 'Reusable smart contract library and toolkit for the TON and Tact language',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tonion.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ton-ion', // Usually your GitHub org/user name.
  projectName: 'tonion.tech', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  customFields: {
    title2: "Tonion"
  },
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
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ton-ion/tonion.tech/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ton-ion/tonion.tech/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner.jpg',
    navbar: {
      // title: 'Tonion',
      logo: {
        alt: 'Tonion',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documents',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ton-ion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Tutorials',
          items: [
            {
              label: 'Quick start',
              to: '/docs/Getting%20started/quick-start',
            },
            {
              label: 'Tonion CLI',
              to: '/docs/CLI',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/xfF36fmUEU',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/tonionDev',
            },
            {
              label: 'Github',
              href: 'https://github.com/ton-ion',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dezh-tech',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `<div>Powered by <a href="https://tonion.tech/">Tonion</a></div>`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [tailwindPlugin],
};

export default config;
