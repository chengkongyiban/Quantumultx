/***************************
主要用于预览yaml及snippet 等Safari需要下载的文本

[rewrite local]

\.t_read\.txt$ url script-request-body https://github.com/chengkongyiban/Quantumultx/raw/main/js/txt_read.js

[MITM]

hostname = github.com, raw.githubusercontent.com,gitlab.com,gist.githubusercontent.com,gitlab.com
****************************/

const ua = $request.headers['User-Agent'] || $request.headers['user-agent']
const isStashiOS = 'undefined' !== typeof $environment && $environment['stash-version'] && ua.indexOf('Macintosh') === -1
const isSurgeiOS = 'undefined' !== typeof $environment && $environment['surge-version'];
const isShadowrocket = 'undefined' !== typeof $rocket;
const isLooniOS = 'undefined' != typeof $loon && /iPhone/.test($loon);
const isQuanX = 'undefined' !== typeof $task;
	
let req = $request.url.replace(/\.t_read\.txt$/,'');

!(async () => {
  let body = await http(req);
//判断是否断网
if(body == null){if(isSurgeiOS || isStashiOS){
	$notification.post("重写转换：未获取到body","请检查网络及节点是否畅通","认为是bug?点击通知反馈",{url:"https://t.me/zhangpeifu"})
 $done({ response: { status: 404 ,body:{} } });}else if (isQuanX){
	$notify("重写转换：未获取到body", "请检查网络及节点是否畅通", "认为是bug?点击通知反馈","https://t.me/zhangpeifu");
}else{$notification.post("重写转换：未获取到body","请检查网络及节点是否畅通","认为是bug?点击通知反馈","https://t.me/zhangpeifu")
 $done({ response: { status: 404 ,body:{} } });
}//识别客户端通知
}else{

 $done({ response: { status: 200 ,body:body ,headers: {'Content-Type': 'text/plain; charset=utf-8'} } });
}//判断是否断网的反括号

})()
.catch((e) => {
		$notification.post(`${e}`,'','');
		$done()
	})

function http(req) {
  return new Promise((resolve, reject) =>
    $httpClient.get(req, (err, resp,data) => {
  resolve(data)
  })
)
}