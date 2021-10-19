// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Switchboard",
  tagline: "Community curated lightspeed data feeds on-chain",
  url:
    process.env.NODE_ENV === "production"
      ? "https://switchboard-xyz.gitlab.io"
      : "http://localhost",
  baseUrl: process.env.NODE_ENV === "production" ? "/v2/" : "/",
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.

          editUrl:
            process.env.NODE_ENV === "production"
              ? process.env.CI_PROJECT_URL + "/-/edit/main/"
              : "/",
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
        darkTheme: require("prism-react-renderer/themes/github"),
      },
      navbar: {
        title: "Switchboard",
        hideOnScroll: true,
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
            docId: "about/switchboard",
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
          // { to: "blog", label: "Blog", position: "left" },
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
                label: "Overview",
                to: "/docs/",
              },
              {
                label: "Rust API Docs",
                to: "/docs/",
              },
              {
                label: "Client API Docs",
                to: "/docs/",
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
