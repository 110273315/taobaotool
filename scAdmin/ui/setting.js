/*
 * 首页(头部菜单的)路由地址
 */
var homePageRoute = {
	'BASE': '/accountList',
	'SR': '/sr/campaign/reward/list'
}

var setting = {
	defaultPro: '/index', //进入系统默认项目
	isDebug: true // 是否debug，上线时候设置为false
};
var baseHost = "http://127.0.0.1:18910";
/*
 * url地址及接口地址常量
 */
var baseSetting = {
	/*
	 * 外网前台url地址数组，用于判断内外网条件（可以为IP或域名）
	 * 只要当前URL地址栏中包含数组中的一项就认为是外网，采用外网接口地址；否则采用内网接口地址
	 */
	base_outpath: ["http://127.0.0.1"],
	defpath: {
		/*
		 *外网接口地址
		 */
		outpath: {
			'BASE': baseHost,
			'SA': baseHost,
			'SS': baseHost,
			'SR': baseHost,
			'SP': "http://127.0.0.1:3001"
		},
		/*
		 *内网接口地址
		 */
		inpath: {
			'BASE': 'http://127.0.0.1:18910',
			'SA': baseHost,
			'SS': baseHost,
			'SR': 'http://127.0.0.1:18910',// 汤地址
			'SP': "http://127.0.0.1:3001"
		}
	},
	fileUploadPath: 'http://scqa.smartac.co/resource', // 资源服务器路径,
	importTempDownloadPath: baseHost
}

/*
 * 上传文件分类
 */
var FILETYPE = {
	'IMAGE': 'IMAGE',
	'FILE': 'FILE',
	'AUDIO': 'AUDIO',
	'VIDEO': 'VEDIO'
};
/*
 * 上传文件大小限制
 */
var FILESIZE = {
		'IMAGE': 2 * 1024 * 1024,
		'FILE': 4 * 1024 * 1024,
		'TOTALFILE': 10 * 1024 * 1024,
		'AUDIO': 5 * 1024 * 1024,
		'VIDEO': 10 * 1024 * 1024
	}
	/*
	 * 文件MIME格式
	 */
var FILEMIME = {
		'IMAGE': ['image/gif', 'image/jpeg', 'image/png', 'image/bmp','image/svg+xml'],
		'FILE': ['image/gif', 'image/jpeg', 'image/png', 'image/bmp', 'image/x-icon', 'application/msword', 'application/pdf',
			'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/zip','application/rar', 'text/html', 'text/plain'
		],
		'AUDIO': ['audio/basic', 'audio/midi', 'audio/x-midi', 'audio/x-pn-realaudio', 'audio/mp3', 'audio/wav', 'audio/x-mpeg','audio/x-ms-wma','audio/amr'],
		'VIDEO': ['video/mpeg', 'video/x-ms-wmv','video/x-msvideo', 'video/mp4', 'video/rm', 'video/avi', 'video/vnd.rn-realvideo', 'video/quicktime', 'video/3gpp']
	}
/*
* 允许的文件后缀
*/
var FILEEXTENTIONS = {
	'FILE': ['zip','rar','apk'],
	'AUDIO':['mp3','wav','wma','au','snd','amr'],
	'VIDEO':['wav','mp4','avi','rm','wmv','rmvb','mov','3gp']
}
	/*
	 * 权限值
	 */
var USERLIMITS = {
	'ADD': 1,
	'EDIT': 2,
	'DEL': 4,
	'LIST': 8,
	'QUERY': 16,
	'EXPORT': 64,
	'PUBLISH': 128
}

var UE_EDITOR_CONFIG = {
	serverUrl: 'http://scqa.smartac.co/sc/api/ueditorServerUrl'// ueditor服务器统一请求接口路径
}
