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
		lastUpdated: '上次更新',
		activeHeaderLinks: false, // 默认值：true
		// displayAllHeaders: true,
		nav: require("./nav.js"),
		sidebar: require("./sidebar.js"),
		sidebarDepth: 2,
		searchMaxSuggestoins: 10,
		editLinks: true,
		editLinkText: '在GitHub上编辑此页！'
	}
}