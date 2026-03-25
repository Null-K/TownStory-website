import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TownStory",
  description: "日式城镇风格，社交 Minecraft 服务器",
  appearance: false,
  head: [['link', { rel: 'icon', href: '/images/icon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '#' },
      // { text: '友情链接', link: '/#常见问题' },
      { text: '帮助文档', link: '#' }
    ],

    // sidebar: [
    //   {
    //     text: '服务器指南',
    //     items: [
    //       { text: '新手入门', link: '/guide/getting-started' },
    //       { text: '服务器规则', link: '/guide/rules' },
    //       { text: '常见问题', link: '/guide/faq' }
    //     ]
    //   },
    //   {
    //     text: '游戏玩法',
    //     items: [
    //       { text: '经济系统', link: '/gameplay/economy' },
    //       { text: '领地保护', link: '/gameplay/residence' },
    //       { text: '活动介绍', link: '/gameplay/events' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=5iNz7vG6qL5rPqSG9ZLusH2WwQLrT711&jump_from=webapi&authKey=od7su5i0/Hu/tfeqSLWcjH3Xtyiwpi9Q7bAJwKjU+fTYIFivUNpcK8yY3VrooAoO' },
      { icon: 'afdian', link: 'https://afdian.com/a/puddingkc' }
      // { icon: 'github', link: 'https://github.com/your-repo' }
    ]
  }
})
