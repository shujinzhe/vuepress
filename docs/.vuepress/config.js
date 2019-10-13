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
	},
	themeConfig: {
    nav: [
		{ text: '大数据组件',
			items: [
				{ text: 'Spark', link: '/bigdata/spark/' },
				{ text: 'Hadoop', link: '/bigdata/hadoop/' }
			]	  
		},
		{ text: '力扣算法', link: '/leetcode/' }
    ]
  }
}