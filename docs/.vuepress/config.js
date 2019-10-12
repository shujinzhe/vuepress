module.exports = {
	base: '/vuepress/',
	title: '岳明亮的个人笔记',
	description: 'shujinzhe的个人笔记',
	head: [
		['link', { rel: 'icon', href: '/img/logo.png' }]
	],
	port: 8080,
	dest: '../vuepress_deploy/dist',
	locales: {
		'/': {
		  lang: 'zh-CN'
		}
	}
}