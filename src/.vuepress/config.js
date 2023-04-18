const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Riot API Connector',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#d32f2f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo-circle-red.svg',
    repo: 'anthonyrave/riot-api-connector',
    editLinks: true,
    docsRepo: 'anthonyrave/riot-api-connector-docs',
    editLinkText: 'Help us improve this page!',
    lastUpdated: false,
    smoothScroll: true,
    nav: [],
    sidebar: {
      '/guide/': [
        {
          title: 'Getting started',
          collapsable: false,
          children: [
            '',
            'installation',
            'facades',
          ]
        },
        {
          title: 'Features',
          collapsable: false,
          children: [
            'summoner',
          ],
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
