module.exports = {
    base: '/plan/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    title: '我的计划 * MangoMei',
    description: '我的计划',
    themeConfig: {
        //logo: '/favicon.ico',
        lastUpdated: '最近更新',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '打卡记录',
                items: [
                    { text: '2020年11月', link: '/zh/punch-in11.md' },
                    { text: '2020年10月', link: '/zh/punch-in10.md' },
                    { text: '2020年9月', link: '/zh/punch-in09.md' },
                    { text: '2020年8月', link: '/zh/punch-in2.md' },
                    { text: '2020年7月-4月', link: '/zh/punch-in.md' }   
                ]
            },
            { text: '任务列表', link: '/zh/task-list.md' },
            {
                text: '快速跳转',
                items: [
                    { text: '我的博客', link: 'http://mg.meiflower.top/mb' },
                    { text: '芒果卡片', link: 'http://mg.meiflower.top/card-admin/' },
                    { text: '在线简历', link: 'http://mg.meiflower.top/mr' },
                    { text: 'mango-kit工具集', link: 'http://mg.meiflower.top/mango-kit' },
                    { text: '我的工作总结', link: 'http://mg.meiflower.top/workstay' }
                ]
            }
        ],
        sidebar: "auto",
        sidebarDepth: 2,
        
        displayAllHeaders: false
    },
    markdown: {
        lineNumbers: true,
        plugins: ['task-lists']
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': '/plan/'
            }
        }
    },
    plugins: ['@vuepress/medium-zoom','@vuepress/active-header-links','@vuepress/back-to-top','@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).fromNow()
            }
        },'@vuepress/pwa', {
            serviceWorker: true,
            //指向自定义组件
            popupComponent: 'MySWUpdatePopup',
            updatePopup: {
                message: "新的风暴已经出现",
                buttonText: "盘他"
            }
        }]
}