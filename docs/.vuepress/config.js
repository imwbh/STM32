module.exports = {
    title: 'STM32 Pages',
    description: 'My STM32 Notes',
    themeConfig: {
        //logo: '/avatar.png',  // 左上角logo
        nav:[ // 导航栏配置
          {text: '首页', link: '/' },
          {text: '源码', link: '' },
          {text: '友链', link: ''}      
        ],
        sidebar: 'auto', // 侧边栏配置
        lastUpdated: '最后更新于', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'imwbh/stm32',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        //repoLabel: 'Repo',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        //docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        //docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: 'edit on github',
        smoothScroll: true,
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
      }
  }