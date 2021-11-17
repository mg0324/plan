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
                text: '打卡表归档',
                items: [
                    { text: '2020年', link: '/zh/play/2020.md' },
                ]
            },
            { text: '任务列表', link: '/zh/okr.md' },
            {
                text: '打卡记录',
                items: [
                    { text: '2021年11月', link: '/zh/2021/a11.md' },
                    { text: '2021年10月', link: '/zh/2021/a10.md' },
                    { text: '2021年09月', link: '/zh/2021/a09.md' },
                    { text: '2021年08月', link: '/zh/2021/a08.md' },
                    { text: '2021年07月', link: '/zh/2021/a07.md' },
                    { text: '2021年06月', link: '/zh/2021/a06.md' },
                    { text: '2021年05月', link: '/zh/2021/a05.md' },
                    { text: '2021年04月', link: '/zh/2021/a04.md' },
                    { text: '2021年03月', link: '/zh/2021/a03.md' },
                    { text: '2021年02月', link: '/zh/2021/a02.md' },
                    { text: '2021年01月', link: '/zh/2021/a01.md' },
                    { text: '2020年12月', link: '/zh/2020/punch-in12.md' },
                    { text: '2020年11月', link: '/zh/2020/punch-in11.md' },
                    { text: '2020年10月', link: '/zh/2020/punch-in10.md' },
                    { text: '2020年9月', link: '/zh/2020/punch-in09.md' },
                    { text: '2020年8月', link: '/zh/2020/punch-in2.md' },
                    { text: '2020年7月-4月', link: '/zh/2020/punch-in.md' }   
                ]
            },
            { text: '读书计划', link: '/zh/read-list.md' },
            { text: '任务列表', link: '/zh/task-list.md' },
            {
                text: '快速跳转',
                items: [
                    { text: '个人首页', link: 'http://mg.meiflower.top/' },
                    { text: '我的博客', link: 'http://mg.meiflower.top/mb' },
                    { text: '芒果卡片扫码录入', link: 'http://mg.meiflower.top/cp/bqr' },
                    { text: '芒果卡片点子队列', link: 'http://mg.meiflower.top/cp/keyqueue' },
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
        }/*,'vuepress-plugin-comment',{
            choosen: 'valine',
            // options选项中的所有参数，会传给Valine的配置
            options: {
                el: '#valine-vuepress-comment',
                appId: '8C9I0p0NUxWloolzGzC2nwSm-gzGzoHsz',
                appKey: 'aYOxPQ9MzgFSifkgAGdSheVP'
            }
        }*/

    ]
}