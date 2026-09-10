import { defineConfig } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mspace',
  'msqrt',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'annotation',
  'annotation-xml',
];


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "智能网联汽车概论",
  description: "高职院校智能网联汽车概论课程（项目化教学）",
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '课程大纲', link: '/course/' },
      { text: '项目一 概述', link: '/course/项目1-智能网联汽车概述/' },
      { text: '项目二 环境感知', link: '/course/项目2-环境感知技术与应用/' },
      { text: '项目三 无线通信', link: '/course/项目3-无线通信技术与应用/' },
    ],
    sidebar: {
      '/': [
        {
          text: '课程导航',
          items: [
            { text: '课程总览', link: '/course/' },
          ]
        },
        {
          text: '项目一　智能网联汽车概述',
          collapsed: false,
          items: [
            { text: '项目首页', link: '/course/项目1-智能网联汽车概述/' },
            { text: '任务1-1 认识智能网联汽车', link: '/course/项目1-智能网联汽车概述/任务1-1' },
            { text: '任务1-2 现状与发展趋势', link: '/course/项目1-智能网联汽车概述/任务1-2' },
          ]
        },
        {
          text: '项目二　环境感知技术与应用',
          collapsed: false,
          items: [
            { text: '项目首页', link: '/course/项目2-环境感知技术与应用/' },
            { text: '任务2-1 环境感知技术应用', link: '/course/项目2-环境感知技术与应用/任务2-1' },
            { text: '任务2-2 道路车辆行人标志识别', link: '/course/项目2-环境感知技术与应用/任务2-2' },
          ]
        },
        {
          text: '项目三　无线通信技术与应用',
          collapsed: false,
          items: [
            { text: '项目首页', link: '/course/项目3-无线通信技术与应用/' },
            { text: '任务3-1 V2X及移动通信技术', link: '/course/项目3-无线通信技术与应用/任务3-1' },
            { text: '任务3-2 物联网无线通信技术', link: '/course/项目3-无线通信技术与应用/任务3-2' },
          ]
        },
        {
          text: '项目四　车载网络技术与应用',
          collapsed: false,
          items: [
            { text: '项目首页', link: '/course/项目4-车载网络技术与应用/' },
            { text: '任务4-1 车载总线技术', link: '/course/项目4-车载网络技术与应用/任务4-1' },
            { text: '任务4-2 移动互联网与以太网', link: '/course/项目4-车载网络技术与应用/任务4-2' },
          ]
        },
        {
          text: '项目五　高精度导航定位技术与应用',
          collapsed: false,
          items: [
            { text: '项目首页', link: '/course/项目5-高精度导航定位技术与应用/' },
            { text: '任务5-1 导航定位技术', link: '/course/项目5-高精度导航定位技术与应用/任务5-1' },
            { text: '任务5-2 高精度地图', link: '/course/项目5-高精度导航定位技术与应用/任务5-2' },
          ]
        },
        {
          text: '项目六　ADAS 技术与应用',
          collapsed: false,
          items: [
            { text: '项目首页', link: '/course/项目6-ADAS技术与应用/' },
            { text: '任务6-1 ADAS 系统应用', link: '/course/项目6-ADAS技术与应用/任务6-1' },
            { text: '任务6-2 路径规划与决策控制', link: '/course/项目6-ADAS技术与应用/任务6-2' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
