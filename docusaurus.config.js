// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Xiphium',
  tagline: 'The Tissue Culture ERP of Iribov',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Iribov.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/xiphium-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Iribov', // Usually your GitHub org/user name.
  projectName: 'xiphium-documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Iribov/xiphium-documentation/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Iribov/xiphium-documentation/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig}, */
    ({
      //Search engine optimization
      metadata: [
        {name: 'keywords', content: 'iribov, xiphium, tissue culture, ERP, tissue culture ERP'}
      ],

      // Replace with your project's social card
      image: 'img/logo.jpg',
      navbar: {
        title: 'Xiphium',
        logo: {
          alt: 'Iribov Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'}, {to: '/about-us', label: 'About Us', position: 'left'},
          {
            href: 'https://github.com/Iribov/xiphium-documentation',
            position: 'right',
            className: 'header-github-link',
            title: 'Github repository',
            'area-label': 'Github repository'
          },
          {
            href: 'https://Iribov.com',
            position: 'right',
            className: 'header-iribov-link',
            title: 'Iribov Website',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Linkedin',
                href: 'https://nl.linkedin.com/company/iribov',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Iribov',
              },
              {
                label: 'Iribov',
                href: 'https://Iribov.com',
              },
              {
                label: 'Iribov Innovations',
                href: 'https://www.iribovinnovations.com/',
              },
            ],
          },
        ],
        logo: {
          alt: "Iribov Logo",
          src: 'img/logo.png',
          href: 'https://iribov.com',
          width: 160,
          height: 50,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Iribov, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('./src/theme/highlight/themes/default4D_Light'),
        darkTheme: require('./src/theme/highlight/themes/default4D_Dark'),
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'OFRLPHDOGI',
  
        // Public API key: it is safe to commit it
        apiKey: 'cdb1a4340d347aafc309ab59cd7f1315',
  
        indexName: 'iribovio',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        //... other Algolia params
      },
    }),
};

export default config;
