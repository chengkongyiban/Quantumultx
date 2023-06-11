/*
author=keywos
^http:\/\/d\.image\.i4\.cn\/adInfo\/ url reject
^https?:\/\/list-app-m\.i4\.cn\/get(HotSearch|App)List\.xhtml url script-response-body https://github.com/chengkongyiban/Quantumultx/raw/main/js/i4Ad.js 
hostname = list-app-m.i4.cn
*/
let i = JSON.parse($response.body);

  i.adli=[]

  i.list= []

  i.ad = []

  i.app=[]

$done({body: JSON.stringify(i)});

