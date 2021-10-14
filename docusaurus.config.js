// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Switchboard Documentation',
  tagline: 'Community curated lightspeed data feeds on-chain',
  url:
    process.env.NODE_ENV === 'production' ? 'https://switchboard-xyz.gitlab.io/' : 'http://localhost' + process.env.PORT,
  baseUrl:
    process.env.NODE_ENV === 'production' ? '/v2/' : '/test/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'switchboard-xyz', // Usually your GitHub org/user name.
  projectName: 'v2', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            process.env.NODE_ENV === 'production' ? process.env.CI_PROJECT_URL + '/-/edit/main/' : '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            process.env.NODE_ENV === 'production' ? process.env.CI_PROJECT_URL + '/-/edit/main/' : '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Switchboard',
        logo: {
          alt: 'Switchboard Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/switchboard-xyz',
            label: 'GitHub',
            position: 'right',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/switchboardxyz',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/sNeGymrabT',
              },
							{
								label: 'Telegram',
								href: 'https://t.me/switchboardxyz',
							},
							{
								label: 'LinkedIn',
								href: 'https://www.linkedin.com/company/switchboardxyz',
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
							{
								label: 'Jobs',
								href: 'https://app.trinethire.com/companies/35264-switchboard-technology-labs/jobs',
							},
              {
                label: 'GitHub',
                href: 'https://github.com/switchboard-xyz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Switchboard Technology Labs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
