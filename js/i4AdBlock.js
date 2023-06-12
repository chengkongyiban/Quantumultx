/*
爱思极速版去广告
author=keywos
^http:\/\/d\.image\.i4\.cn\/adInfo\/ url reject
^https?:\/\/list-app-m\.i4\.cn\/get(HotSearch|App)List\.xhtml url script-response-body https://github.com/chengkongyiban/Quantumultx/raw/main/js/i4AdBlock.js 
hostname = list-app-m.i4.cn
*/
let u = $request.url;
let i = JSON.parse($response.body);
if (u.includes("list-app-m.i4.cn")) {
  i.app && (i.app=[])
}
	i.adli && (i.adli=[])
	i.list && (i.list= [])
	i.ad && (i.ad = []);
$done({body: JSON.stringify(i)});
