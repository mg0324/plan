module.exports = {
    base: '/plan/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    title: '我的计划 | mangomei',
    description: '我的计划',
    themeConfig: {
        //logo: '/favicon.ico',
        lastUpdated: '最近更新',
        nav: [
            { text: '首页', link: '/' },
            //{ text: '指南', link: '/zh/guide/' }
        ],
        sidebarDepth: 2,
        
        displayAllHeaders: false
    },
    markdown: {
        lineNumbers: true
    }
}