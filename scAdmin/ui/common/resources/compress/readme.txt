双击文件“compress.bat”执行框架中的JS和CSS文件压缩。


PS：
1. 如果压缩报错，则需要安装nodejs环境，可进入官网“http://nodejs.org/”下载安装；
2. 压缩的配置文件的完整参数，详见“https://github.com/jrburke/r.js/blob/master/build/example.build.js”；
3. 在本地开发时，在index.html页面引用的css和js都是使用main，而发布后需要将其改为built，并且在发布的服务器上进行压缩，
   压缩方法：
       a. 定位到“Web\Common\Resources\compress”目录；
	   b. 如果是Windows系统，直接双击compress.bat文件即可，结束；
	   c. 如果是linux系统，分别执行“node r.js -o buildconfig_js.js”和“node r.js -o buildconfig_css.js”，结束。
