(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"157":function(e,t,n){"use strict";n.d(t,"a",(function(){return useParams}));var a=n(61);function useParams(){var e;return null===(e=Object(a.b)().router)||void 0===e?void 0:e.params}},"165":function(e,t,n){"use strict";n.d(t,"b",(function(){return useFileList})),n.d(t,"a",(function(){return useAutoSaveRestore})),n.d(t,"c",(function(){return g.a}));var a=n(19),s=n(9),r=n(10),c=n.n(r),i=n(18),o=n(70),l=n(65),u=n(173),m=n(153),d=n(154),p=n(55),f={"mockUrl":"http://yapi.smart-xwork.cn/mock/129336","devUrl":"","prodUrl":"","path":"/getPostObjectParams","method":m.a.GET,"requestHeaders":{},"requestBodyType":m.b.query,"responseBodyType":m.c.json,"dataKey":void 0,"paramNames":[],"queryNames":[],"requestDataOptional":!0,"requestDataJsonSchema":{},"responseDataJsonSchema":{},"requestFunctionName":"getPostObjectParams","extraInfo":{}},b=function getPostObjectParams(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return p.a.apply(void 0,[Object(d.a)(f,e)].concat(n))};b.requestConfig=f;var j=n(36);function useFileList(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],m=function(){var e=Object(a.a)(c.a.mark((function _callee(e,t,a){var s,i,m,d,p,f,_;return c.a.wrap((function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if("remove"!==t){c.next=4;break}r(n.filter((function(e,t){return t!==a}))),c.next=16;break;case 4:return s=e[e.length-1],c.next=7,b({},{"mock":!0});case 7:if(i=c.sent.data,m=i.signature,d=i.OSSAccessKeyId,p=i.policy,f=s.url,j.a){c.next=14;break}return c.next=13,Object(o.c)({"src":s.url,"quality":30});case 13:f=c.sent.tempFilePath;case 14:_=u.a.encode(f)+".png",Object(l.a)({"filePath":f,"name":"file","url":"https://alllink-overseas.oss-eu-west-1.aliyuncs.com","formData":{"key":_,"policy":p,"OSSAccessKeyId":d,"signature":m},"success":function success(e){204===e.statusCode&&(console.log("上传成功"),s.token="https://file2.alllink.work"+_,n.push(s),r(n))}});case 16:case"end":return c.stop()}}),_callee)})));return function onFileChange(t,n,a){return e.apply(this,arguments)}}();return[n,m,r]}var _=n(249),v=n(191),O=n(33),h=n(51);function useAutoSaveRestore(e,t,n){Object(i.useEffect)((function(){try{var t=Object(O.i)(e);t&&(n(t),Object(h.h)({"title":"已恢复草稿","icon":"success","duration":2e3}))}catch(e){}}),[]);var a=Object(_.a)((function(){Object(O.p)(e,t)}),{"wait":2e3}).run;Object(v.a)(a,t)}var g=n(157)},"242":function(e,t,n){e.exports={"multi-ellipsis--l2":"index-module__multi-ellipsis--l2___2bW-q","multi-ellipsis--l3":"index-module__multi-ellipsis--l3___3F3B0","multi-ellipsis--l4":"index-module__multi-ellipsis--l4___2CJ5f","scrollPage":"index-module__scrollPage___2XQmd","image":"index-module__image___13U4-"}},"248":function(e,t,n){"use strict";n.r(t);var a=n(155),s=n(18),r=n(159),c=n(242),i=n.n(c),o=n(158),l=n(165),u=n(29),m={"联系我们":["http://pic.alllink.work/641600098112_.pic_hd.jpg"]};t.default=function Policies(){var e,t=Object(l.c)(),n=Object(s.useMemo)((function(){return t?(console.log(t),m[t.type]):(console.log([]),[])}),[t]);return Object(u.jsxs)(a.View,{"children":[Object(u.jsx)(r.f,{"title":null!==(e=null==t?void 0:t.type)&&void 0!==e?e:"","navHome":"goods","bottomLine":!0}),Object(u.jsx)(o.b,{"navigation":!0,"children":Object(u.jsx)(a.ScrollView,{"scrollY":!0,"className":i.a.scrollPage,"children":n.map((function(e){return Object(u.jsx)(a.Image,{"mode":"widthFix","className":i.a.image,"src":e},e)}))})})]})}}}]);