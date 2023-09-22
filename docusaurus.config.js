// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '永c隨筆',
  tagline: '記錄個人學習的成長過程及心得',
  favicon: 'img/pageIco/editnote_pencil_edi_6175.ico',

  // Set the production url of your site here
  url: 'https://incomparable-crostata-192195.netlify.app/',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yongsin0129', // Usually your GitHub org/user name.
  projectName: 'YongSin`s note', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          sidebarCollapsed: true,

          // 如果想要讓其他人可以發送 pr ，提醒你修改頁面，可以將這個設定打開，並放上自已的 github 
          // editUrl: 
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-ETSBPCK259',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '永c隨筆',
        logo: {
          alt: '永c隨筆 Logo',
          src: 'img/pageIco/editnote_pencil_edi_6175.ico',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   label: 'Tutorial',
          //   position: 'left',
          // },
          { to: '/docs/intro', label: 'Docs', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/portfolio', label: 'Portfolio', position: 'left' },
          {
            href: 'https://github.com/yongsin0129?tab=repositories',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 永c隨筆, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'docker'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      algolia: {
        apiKey: "e6b9909b7a7d702e21460b8eea459a84",
        indexName: "myblog",
        appId: "RTNEXMDKHO",
      },
      metadata: [
        { name: 'keywords', content: '永c隨筆, 永C隨筆' },
        { name: 'description', content: '記錄個人學習的成長過程及心得' },
      ]

      // announcementBar:{
      //   id: 'announcement id',
      //   content:'歡迎來到永c隨筆，此筆記緩慢增加中...',
      //   textColor:'black',
      //   backgroundColor:'pink',
      //   isCloseable: true
      // },



    }),

  // 新增 scripts tag into website
  // 改使用 injectHtmlTags 的方式，就不在這邊另外寫 scripts
  // scripts: [
  //   // String format.
  //   // 'https://docusaurus.io/script.js',
  //   {
  //     src: "https://www.chatbase.co/embed.min.js",
  //     id: "V5_rBtZ9J8a58fjU1T-sf",
  //     defer: true,
  //   },
  // ],

  // 使用 import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
  // clientModules: [
  //   require.resolve('./src/js/chatbase.js')
  // ],

  // 使用 module.exports = function (context, options) { return xxxx }
  plugins: ['./src/js/injectHtmlTags.js'],
}

module.exports = config
