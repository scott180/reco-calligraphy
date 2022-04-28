module.exports = {
  "title": "书法练习轨迹",
  "description": "",
  // base: '/reco-calligraphy/',
  "dest": ".vuepress/dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
	valineConfig: {
		appId: 'In1BQCN8XdwnYBgPYnSi4r1W-gzGzoHsz',// your appId
		appKey: 'nVqtDyPE9OClqUri8YcHyRaR',// your appKey
		visitor: true,
		showComment: false,
		// path = window.location.href
	},  
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
	  {
        "text": "分类",
        "icon": "reco-category",
        "items": [
          {
            "text": "书法",
            "link": "/categories/书法/",
          },
		  {
            "text": "练习",
            "link": "/categories/练习/",
          },
		  {
            "text": "轨迹",
            "link": "/categories/轨迹/",
          },
        ]
      },
	  {
        "text": "文档",
        "icon": "reco-document",
        "items": [
			  { text: '灵飞经', link: '/docs/书法/灵飞经'}, 
			  { text: '多宝塔碑', link: '/docs/书法/多宝塔碑'}, 
			  { text: '徐书法', link: '/docs/练习/徐书法'}, 
			  { text: '无为徐生', link: '/docs/练习/无为徐生'}, 
			  { text: '古文诗词', link: '/docs/练习/古文诗词'}, 
			  { text: '书法练习轨迹', link: '/docs/练习/书法练习轨迹ReadMe'}, 
			  { text: '有感之杂说', link: '/docs/轨迹/有感之杂说'}, 
        ]		
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于我",
		"link": "/关于我",
        "icon": "reco-account",
      }
    ],
   subSidebar: 'auto',
	// 侧边栏
    sidebar: {
		 '/docs/': [
			{
			  title: '书法',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '书法名帖', path: '书法/书法名帖'}, 
				{ title: '灵飞经', path: '书法/灵飞经'},
				{ title: '多宝塔碑', path: '书法/多宝塔碑'},
				{ title: '《心经》书法', path: '书法/《心经》书法'},
				{ title: '《兜沙经》书法', path: '书法/《兜沙经》书法'}, 
				{ title: '文徵明小楷《千字文》', path: '书法/文徵明小楷《千字文》'},
				{ title: '文徵明小楷《草堂十志》', path: '书法/文徵明小楷《草堂十志》'}
	
			  ]					
			},
			{
			  title: '练习',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '徐书法', path: '练习/徐书法'}, 
				{ title: '无为徐生', path: '练习/无为徐生'},
				{ title: '古文诗词', path: '练习/古文诗词'}, 
				{ title: '笔名汉字频率分析', path: '练习/笔名汉字频率分析'},
				{ title: '书法练习轨迹ReadMe', path: '练习/书法练习轨迹ReadMe'},
				{ title: '书法练习轨迹--明月几时有', path: '练习/书法练习轨迹--明月几时有'}
			  ]					
			},
			{
			  title: '轨迹',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '自序', path: '轨迹/自序'}, 
				{ title: '诗词杂句', path: '轨迹/诗词杂句'}, 
				{ title: '有感之杂说', path: '轨迹/有感之杂说'},
				{ title: '书法练习轨迹remark', path: '轨迹/书法练习轨迹remark'},
				{ title: '书法练习轨迹--明月几时有-无图版', path: '轨迹/书法练习轨迹--明月几时有-无图版'}
			  ]
			}
		   
		   ]
    },		
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "Friend Link": [
      {
        "title": "无为徐生",
        "desc": "人情必有所寄，习惯而成自然。",
        "email": "1021151991@qq.com",
        "link": "https://xushufa.cn"
      },
      {
        "title": "reco-calligraphy",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://github.com/scott180/reco-calligraphy"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最近更新",
    "author": "",
    "authorAvatar": "/template.png",
	record: '浙ICP备2022008289号-1',
    recordLink: 'http://beian.miit.gov.cn',
    cyberSecurityRecord: '浙公网安备 33011002016354号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016354',
    startYear: '2022',
	subSidebar: 'auto'
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
      // 支持中文文件名
      [
        "permalink-pinyin",
        {
          lowercase: true, // Converted into lowercase, default: true
          separator: "-", // Separator of the slug, default: '-'
        },
      ],
	  // 图片放大
	  [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.img',
        delay: 1000,
        options: {
          margin: 16
        },
      },
    ],
	// 为博客文章自动随机添加名人名言
	 ["vuepress-plugin-boxx"],
	// google-analytics
	 [
      '@vuepress/google-analytics',
      {
        'ga': 'G-JFCQCFNN0H' // UA-00000000-0
      }
    ],
	[
	  '@vuepress/last-updated',
	  {
		transformer: (timestamp, lang) => {
		  // 不要忘了安装 moment
		  const moment = require('moment')
		  moment.locale(lang)
		  return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
		}
	  }
	]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
	  title: '书法练习轨迹',
      description: '',
    }
  }

}