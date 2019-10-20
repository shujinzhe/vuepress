module.exports = {
	base: '/vuepress/',
	title: '岳明亮的个人笔记',
	description: '生活不止眼前的苟且，还有诗与远方',
	head: [
		['link', { rel: 'icon', href: '/img/logo.ico' }]
	],
	port: 8080,
	dest: 'c:/vuepress_deploy/dist',
	locales: {
		'/': {
		  lang: 'zh-CN'
		}
	},
	themeConfig: {
        // 假定 GitHub。也可以是一个完整的 GitLab 网址
        repo: 'shujinzhe/vuepress',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        docsBranch: 'master',
        // 默认为 true，设置为 false 来禁用
        editLinks: true,
        // 显示上次更新字样
		lastUpdated: '上次更新',
        // 默认值：true
		activeHeaderLinks: false,
        // 展开所有子标题
		displayAllHeaders: false,
        // 导航栏配置
		nav: require("./nav.js"),
        // 侧边栏配置
		sidebar: require("./sidebar.js"),
        // 侧边栏深度，默认为1
		sidebarDepth: 2,
        // 搜索最大返回条数
		searchMaxSuggestoins: 10,
        // 编辑连接
		editLinks: true,
		editLinkText: '在GitHub上编辑此页！'
	}
}