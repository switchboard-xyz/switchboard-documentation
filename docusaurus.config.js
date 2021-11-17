// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Switchboard",
  tagline: "Community curated lightspeed data feeds on-chain",
  url:
    process.env.NODE_ENV === "production"
      ? "https://docs.switchboard.xyz"
      : "http://localhost",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "switchboard-xyz", // Usually your GitHub org/user name.
  projectName: "v2", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Automatically converts npm codeblocks to yarn
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          editUrl:
            process.env.NODE_ENV === "production"
              ? process.env.CI_PROJECT_URL + "/-/edit/main/"
              : "/",
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: "🌜",
          lightIcon: "☀️",
          // React inline style object
          // see https://reactjs.org/docs/dom-elements.html#style
          darkIconStyle: {
            marginLeft: "2px",
          },
          lightIconStyle: {
            marginLeft: "1px",
          },
        },
      },
      // Only for code blocks
      prism: {
        theme: require("prism-react-renderer/themes/shadesOfPurple"),
        additionalLanguages: ["rust", "toml", "docker", "bash", "yaml"],
      },
      navbar: {
        title: "Switchboard",
        hideOnScroll: false,
        logo: {
          alt: "Switchboard Logo",
          src: "img/switchboard_purple.png",
          srcDark: "img/switchboard_purple.png",
        },
        items: [
          // Need to bring in Algolia DocSearch https://docsearch.algolia.com/
          // {
          //   type: "search",
          //   position: "right",
          // },
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },
          {
            to: "https://switchboard.xyz/explorer",
            label: "Feeds",
            position: "left",
          },
          {
            to: "https://switchboardxyz.medium.com/",
            label: "Blog",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/switchboard-xyz",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      i18n: {
        defaultLocale: "en",
        locales: ["en", "fr", "es"],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Developer Resources",
                to: "/developers",
              },
              {
                label: "Rust API Docs",
                href: "https://docs.rs/switchboard-program/0.1.52/switchboard_program/",
              },
              {
                label: "Client API Docs",
                href: "https://switchboard-xyz.github.io/switchboard-api/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/sNeGymrabT",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/switchboardxyz",
              },
              {
                label: "Telegram",
                href: "https://t.me/switchboardxyz",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/switchboardxyz",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Medium",
                href: "https://switchboardxyz.medium.com/",
              },
              {
                label: "Jobs",
                href: "https://app.trinethire.com/companies/35264-switchboard-technology-labs/jobs",
              },
              {
                label: "GitHub",
                href: "https://github.com/switchboard-xyz",
              },
            ],
          },
        ],
      },
    }),
};

module.exports = config;
