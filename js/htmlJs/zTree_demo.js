var zTreeObj,
	setting = {
		check: {
			chkboxType:{"Y":"p","N":"s"},
			enable: true
		},
		view: {
			selectedMulti: false
		}
	},
	zTreeNodes = [{
			"name": "网站导航",
			open: true,
			icon: '/WebFrontEndLearning/img/zTree/diy/5.png',
			children: [{
					"name": "google",
					"url": "http://g.cn",
					"target": "_blank"
				},
				{
					"name": "baidu",
					"url": "http://baidu.com",
					"target": "_blank"
				},
				{
					"name": "sina",
					"url": "http://www.sina.com.cn",
					"target": "_blank"
				}
			]
		},
		{
			"name": "网站导航中文",
			open: true,
			icon: '/WebFrontEndLearning/img/zTree/diy/5.png',
			children: [{
					"name": "谷歌",
					"url": "http://g.cn",
					"target": "_blank"
				},
				{
					"name": "百度",
					"url": "http://baidu.com",
					"target": "_blank",
					children: [{
							"name": "百度云",
							"url": "http://baidu.com",
							"target": "_blank",
						},
						{
							"name": "百度网盘",
							"url": "http://baidu.com",
							"target": "_blank",
						}
					]
				},
				{
					"name": "新浪",
					"url": "http://www.sina.com.cn",
					"target": "_blank"
				}
			]
		}
	];

$(document).ready(function() {
	zTreeObj = $.fn.zTree.init($("#tree"), setting, zTreeNodes);

});