(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"158":function(e,t,a){"use strict";a.d(t,"a",(function(){return useParams}));var n=a(62);function useParams(){var e;return null===(e=Object(n.b)().router)||void 0===e?void 0:e.params}},"164":function(e,t,a){"use strict";a.d(t,"b",(function(){return useFileList})),a.d(t,"a",(function(){return useAutoSaveRestore})),a.d(t,"c",(function(){return y.a}));var n=a(19),r=a(9),c=a(10),s=a.n(c),o=a(14),i=a(71),u=a(66),l=a(174),d=a(154),p=a(155),f=a(55);var m={"mockUrl":"http://yapi.smart-xwork.cn/mock/129336","devUrl":"","prodUrl":"","path":"/getPostObjectParams","method":d.a.GET,"requestHeaders":{},"requestBodyType":d.b.query,"responseBodyType":d.c.json,"dataKey":void 0,"paramNames":[],"queryNames":[],"requestDataOptional":!0,"requestDataJsonSchema":{},"responseDataJsonSchema":{},"requestFunctionName":"getPostObjectParams","extraInfo":{}},b=function getPostObjectParams(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return f.a.apply(void 0,[Object(p.a)(m,e)].concat(a))};b.requestConfig=m;var j=a(36);function useFileList(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],d=function(){var e=Object(n.a)(s.a.mark((function _callee(e,t,n){var r,o,d,p,f,m,v;return s.a.wrap((function _callee$(s){for(;;)switch(s.prev=s.next){case 0:if("remove"!==t){s.next=4;break}c(a.filter((function(e,t){return t!==n}))),s.next=16;break;case 4:return r=e[e.length-1],s.next=7,b({},{"mock":!0});case 7:if(o=s.sent.data,d=o.signature,p=o.OSSAccessKeyId,f=o.policy,m=r.url,j.a){s.next=14;break}return s.next=13,Object(i.c)({"src":r.url,"quality":30});case 13:m=s.sent.tempFilePath;case 14:v=l.a.encode(m)+".png",Object(u.a)({"filePath":m,"name":"file","url":"https://alllink-overseas.oss-eu-west-1.aliyuncs.com","formData":{"key":v,"policy":f,"OSSAccessKeyId":p,"signature":d},"success":function success(e){204===e.statusCode&&(console.log("上传成功"),r.token="https://file2.alllink.work"+v,a.push(r),c(a))}});case 16:case"end":return s.stop()}}),_callee)})));return function onFileChange(t,a,n){return e.apply(this,arguments)}}();return[a,d,c]}var v=a(241),O=a(192),h=a(33),g=a(51);function useAutoSaveRestore(e,t,a){Object(o.useEffect)((function(){try{var t=Object(h.i)(e);t&&(a(t),Object(g.h)({"title":"已恢复草稿","icon":"success","duration":2e3}))}catch(e){}}),[]);var n=Object(v.a)((function(){Object(h.p)(e,t)}),{"wait":2e3}).run;Object(O.a)(n,t)}var y=a(158)},"234":function(e,t,a){e.exports={"scrollPage":"index-module__scrollPage___2XQmd","image":"index-module__image___13U4-"}},"240":function(e,t,a){"use strict";a.r(t);var n=a(156),r=a(14),c=a(159),s=a(234),o=a.n(s),i=a(160),u=a(164),l=a(29),d={"联系我们":["http://pic.alllink.work/641600098112_.pic_hd.jpg"]};t.default=function Policies(){var e,t=Object(u.c)(),a=Object(r.useMemo)((function(){return t?(console.log(t),d[t.type]):(console.log([]),[])}),[t]);return Object(l.jsxs)(n.View,{"children":[Object(l.jsx)(c.f,{"title":null!==(e=null==t?void 0:t.type)&&void 0!==e?e:"","navHome":"goods","bottomLine":!0}),Object(l.jsx)(i.b,{"navigation":!0,"children":Object(l.jsx)(n.ScrollView,{"scrollY":!0,"className":o.a.scrollPage,"children":a.map((function(e){return Object(l.jsx)(n.Image,{"mode":"widthFix","className":o.a.image,"src":e},e)}))})})]})}}}]);