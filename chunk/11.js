(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"157":function(e,t,n){"use strict";n.d(t,"a",(function(){return useParams}));var a=n(61);function useParams(){var e;return null===(e=Object(a.b)().router)||void 0===e?void 0:e.params}},"165":function(e,t,n){"use strict";n.d(t,"b",(function(){return useFileList})),n.d(t,"a",(function(){return useAutoSaveRestore})),n.d(t,"c",(function(){return g.a}));var a=n(19),i=n(9),c=n(10),s=n.n(c),l=n(18),o=n(70),r=n(65),d=n(173),u=n(153),_=n(154),m=n(55),j={"mockUrl":"http://yapi.smart-xwork.cn/mock/129336","devUrl":"","prodUrl":"","path":"/getPostObjectParams","method":u.a.GET,"requestHeaders":{},"requestBodyType":u.b.query,"responseBodyType":u.c.json,"dataKey":void 0,"paramNames":[],"queryNames":[],"requestDataOptional":!0,"requestDataJsonSchema":{},"responseDataJsonSchema":{},"requestFunctionName":"getPostObjectParams","extraInfo":{}},x=function getPostObjectParams(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return m.a.apply(void 0,[Object(_.a)(j,e)].concat(n))};x.requestConfig=j;var b=n(36);function useFileList(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],u=function(){var e=Object(a.a)(s.a.mark((function _callee(e,t,a){var i,l,u,_,m,j,h;return s.a.wrap((function _callee$(s){for(;;)switch(s.prev=s.next){case 0:if("remove"!==t){s.next=4;break}c(n.filter((function(e,t){return t!==a}))),s.next=16;break;case 4:return i=e[e.length-1],s.next=7,x({},{"mock":!0});case 7:if(l=s.sent.data,u=l.signature,_=l.OSSAccessKeyId,m=l.policy,j=i.url,b.a){s.next=14;break}return s.next=13,Object(o.c)({"src":i.url,"quality":30});case 13:j=s.sent.tempFilePath;case 14:h=d.a.encode(j)+".png",Object(r.a)({"filePath":j,"name":"file","url":"https://alllink-overseas.oss-eu-west-1.aliyuncs.com","formData":{"key":h,"policy":m,"OSSAccessKeyId":_,"signature":u},"success":function success(e){204===e.statusCode&&(console.log("上传成功"),i.token="https://file2.alllink.work"+h,n.push(i),c(n))}});case 16:case"end":return s.stop()}}),_callee)})));return function onFileChange(t,n,a){return e.apply(this,arguments)}}();return[n,u,c]}var h=n(249),O=n(191),f=n(33),p=n(51);function useAutoSaveRestore(e,t,n){Object(l.useEffect)((function(){try{var t=Object(f.i)(e);t&&(n(t),Object(p.h)({"title":"已恢复草稿","icon":"success","duration":2e3}))}catch(e){}}),[]);var a=Object(h.a)((function(){Object(f.p)(e,t)}),{"wait":2e3}).run;Object(O.a)(a,t)}var g=n(157)},"244":function(e,t,n){e.exports={"multi-ellipsis--l2":"index-module__multi-ellipsis--l2___3EmpI","multi-ellipsis--l3":"index-module__multi-ellipsis--l3___BdteD","multi-ellipsis--l4":"index-module__multi-ellipsis--l4___1lr57","background":"index-module__background___3qP9k","contentArea":"index-module__contentArea___1EbtO","contentTextarea":"index-module__contentTextarea___2A2ib","contentImagePicker":"index-module__contentImagePicker___3EADK","detailsArea":"index-module__detailsArea___34kob","detailsItem":"index-module__detailsItem___7dn2n","detailsTitle":"index-module__detailsTitle___3nCJx","specification":"index-module__specification___uIXIY","lineAfter":"index-module__lineAfter___1Cxtf","detailsContent":"index-module__detailsContent___2ItZj","buttonGroup":"index-module__buttonGroup___1iMNU","halfWidthButton":"index-module__halfWidthButton___3yvKW","active":"index-module__active___1TFcS","detailsScrollView":"index-module__detailsScrollView___29Y0c","categoryItem":"index-module__categoryItem___2WnNX","selected":"index-module__selected___1snb6","highlight":"index-module__highlight___1ij1D","COVID":"index-module__COVID___2KpY2","detailsSettings":"index-module__detailsSettings___2MPlf","switch":"index-module__switch___3O6J7","itemButtonGroup":"index-module__itemButtonGroup___1_BB6","itemButton":"index-module__itemButton___5r5eI","anonymousTextarea":"index-module__anonymousTextarea___1NIHe","topicContainer":"index-module__topicContainer___2i9Dn","topicItem":"index-module__topicItem___2NpPN","topicDelete":"index-module__topicDelete___1No0-","topicClear":"index-module__topicClear___1YVX3","notification":"index-module__notification___Sq2Ww","fullWidthButton":"index-module__fullWidthButton___2rg9-","locationItem":"index-module__locationItem___7FoaB"}},"251":function(e,t,n){"use strict";n.r(t);var a=n(12),i=n(9),c=n(155),s=n(18),l=n(62),o=n(159),r=n(244),d=n.n(r),u=n(158),_=n(162),m=n(165),j=n(160),x=n.n(j),b=n(168),h=n(35),O=n(29);t.default=function PostItem(){var e=Object(s.useContext)(h.c),t=Object(i.a)(e,2),n=t[0],r=(t[1],Object(s.useState)("")),j=Object(i.a)(r,2),f=j[0],p=j[1],g=Object(s.useState)(200),w=Object(i.a)(g,2),N=w[0],V=w[1],v=Object(m.b)(),y=Object(i.a)(v,3),I=y[0],C=y[1],S=y[2],k=Object(s.useState)(0),T=Object(i.a)(k,2),A=T[0],B=T[1],P=(Object(s.useMemo)((function(){return Object(b.translateNewGoodsCategoryToOriginal)(A)}),[A]),Object(s.useState)("")),D=Object(i.a)(P,2),q=D[0],W=D[1],F=Object(s.useState)(null),L=Object(i.a)(F,2),G=L[0],J=L[1],K=function selectLocation(){Object(l.a)({}).then((function(e){J(e)}),(function(){J(null!=G?G:null)}))},E=Object(s.useState)(n.city),Y=Object(i.a)(E,2),R=Y[0],U=Y[1];return Object(m.a)("goods:post",[f,N,I,A,q,G],(function(e){p(e[0]),V(e[1]),S(e[2]),B(e[3]),W(e[4]),J(e[5])})),Object(O.jsxs)(c.View,{"children":[Object(O.jsx)(o.f,{"title":"发布","bottomLine":!0}),Object(O.jsx)(u.b,{"navigation":!0,"className":d.a.background,"children":Object(O.jsxs)(c.ScrollView,{"scrollY":!0,"scrollWithAnimation":!0,"style":{"height":"100%"},"children":[function renderContent(){return Object(O.jsxs)(c.View,{"className":d.a.contentArea,"children":[Object(O.jsx)(_.g,{"className":d.a.contentTextarea,"value":f,"onChange":p,"maxLength":1e3,"placeholder":"新旧程度：\n购买渠道：\n期望价格：","autoFocus":!0,"count":!1,"height":N,"onLinechange":function onLinechange(e){V(e.detail.heightRpx>200?e.detail.heightRpx:200)}}),Object(O.jsx)(_.b,{"className":d.a.contentImagePicker,"files":I,"onChange":C,"count":9})]})}(),Object(O.jsxs)(c.View,{"className":d.a.detailsArea,"children":[function renderCategorySettings(){return Object(O.jsxs)(c.View,{"className":d.a.detailsItem,"children":[Object(O.jsxs)(c.View,{"className":d.a.detailsTitle,"children":[Object(O.jsx)(c.Text,{"children":"闲置分类"}),Object(O.jsx)(c.View,{"className":d.a.lineAfter})]}),Object(O.jsx)(c.View,{"className":d.a.detailsContent,"children":Object(O.jsx)(c.ScrollView,{"className":d.a.detailsScrollView,"scrollX":!0,"scrollWithAnimation":!0,"children":b.goodsCategories.map((function(e,t){var n;return Object(O.jsxs)(_.a,{"className":x()((n={},Object(a.a)(n,d.a.categoryItem,!0),Object(a.a)(n,d.a.highlight,e.highlight),Object(a.a)(n,d.a.selected,A===t),Object(a.a)(n,d.a.COVID,0===t),n)),"onClick":function onClick(){return B(t)},"children":[" ",e.title]},t)}))})})]})}(),function renderContactSettings(){return Object(O.jsxs)(c.View,{"className":d.a.detailsItem,"children":[Object(O.jsxs)(c.View,{"className":d.a.detailsTitle,"children":[Object(O.jsx)(c.Text,{"children":"联系方式"}),Object(O.jsx)(c.View,{"className":d.a.lineAfter})]}),Object(O.jsx)(c.View,{"className":d.a.detailsContent,"children":Object(O.jsxs)(c.View,{"className":d.a.detailsSettings,"style":{"marginBottom":0},"children":[Object(O.jsxs)(c.View,{"children":["微信号",Object(O.jsx)(c.Text,{"style":{"color":"red"},"children":"*"})]}),Object(O.jsx)(c.Input,{"type":"text","maxlength":9,"className":d.a.anonymousTextarea,"placeholderClass":d.a.anonymousTextarea,"placeholder":"请输入你的微信号","value":q,"onInput":function onInput(e){W(e.detail.value)}})]})})]})}(),function renderLocationSettings(){var e;return Object(O.jsxs)(O.Fragment,{"children":[Object(O.jsxs)(c.View,{"className":d.a.detailsItem,"children":[Object(O.jsxs)(c.View,{"className":d.a.detailsTitle,"children":[Object(O.jsx)(c.Text,{"children":"发布设置"}),Object(O.jsx)(c.View,{"className":d.a.lineAfter})]}),Object(O.jsx)(c.View,{"className":d.a.detailsContent,"children":Object(O.jsxs)(c.View,{"className":d.a.detailsSettings,"style":{"marginBottom":0},"children":[Object(O.jsx)(c.View,{"children":"发布定位"}),Object(O.jsx)(c.View,{"className":d.a.locationItem,"onClick":K,"children":"".concat(null!==(e=null==G?void 0:G.address)&&void 0!==e?e:"请选择定位"," >")})]})})]}),Object(O.jsxs)(c.View,{"className":d.a.detailsItem,"children":[Object(O.jsxs)(c.View,{"className":d.a.detailsTitle,"children":[Object(O.jsx)(c.Text,{"children":"选择城市"}),Object(O.jsx)(c.View,{"className":d.a.lineAfter})]}),Object(O.jsx)(c.View,{"className":d.a.detailsContent,"children":Object(O.jsxs)(c.View,{"className":d.a.detailsSettings,"style":{"marginBottom":0},"children":[Object(O.jsx)(c.View,{}),Object(O.jsx)(c.Picker,{"mode":"selector","range":["1","2"],"onChange":function onChange(e){U(e.detail.value)},"children":Object(O.jsx)(c.View,{"className":d.a.locationItem,"children":"".concat(null!=R?R:"请选择城市"," >")})})]})})]})]})}(),Object(O.jsx)(c.View,{"className":d.a.notification,"children":"*带定位发布可以提高闲置成交率"}),Object(O.jsx)(_.a,{"className":d.a.fullWidthButton,"circle":!0,"children":"发布"})]})]})})]})}}}]);