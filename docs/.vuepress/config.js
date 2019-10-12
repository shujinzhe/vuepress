module.exports = {
	base: '/vuepress/',
	title: '岳明亮的个人笔记',
	description: '生活不止眼前的苟且，还有诗与远方',
	head: [
		['link', { rel: 'icon', href: '/img/logo.ico' }]
	],
	port: 8080,
	dest: '../vuepress_deploy/dist',
	locales: {
		'/': {
		  lang: 'zh-CN'
		}
	}
}