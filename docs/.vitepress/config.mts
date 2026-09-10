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
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  title: "apollo project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Courses', link: '/courses' },
      { text: 'courses相关', link: '/courses-related' }
    ],

    sidebar: {
      '/courses/': [
        {
          text: 'Courses',
          items: [
            { text: 'Chapter 01: 正文', link: '/courses/paper' },
            { text: 'Chapter 02: 正文-中文', link: '/courses/paper-chn' }
          ]
        }
      ],
      '/courses-related/': [
        {
          text: 'courses相关',
          items: [
            { text: 'Chapter 01: 相关文献', link: '/courses-related/doc-01' },
            { text: 'Chapter 02: 研究现状', link: '/courses-related/doc-02' },
            { text: 'Chapter 03: 相关教材', link: '/courses-related/doc-03' },
            { text: 'Chapter 04: 非马尔可夫纯退相位环境', link: '/courses-related/doc-04' },
            { text: 'Chapter 05: 中心自旋量子电池', link: '/courses-related/doc-05' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
