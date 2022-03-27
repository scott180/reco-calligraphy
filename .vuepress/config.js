module.exports = {
  "title": "书法练习",
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
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于我",
		"link": "/docs/练习/关于我",
        "icon": "reco-account",
      }
    ],
   
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
    "lastUpdated": "Last Updated",
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
  ]

}