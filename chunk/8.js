(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"168":function(e,t,a){"use strict";a.d(t,"a",(function(){return useParams}));var n=a(72);function useParams(){var e;return null===(e=Object(n.b)().router)||void 0===e?void 0:e.params}},"174":function(e,t,a){"use strict";a.d(t,"b",(function(){return useFileList})),a.d(t,"a",(function(){return useAutoSaveRestore})),a.d(t,"c",(function(){return g.a}));var n=a(19),c=a(10),i=a(11),s=a.n(i),r=a(14),l=a(81),o=a(76),u=a(184),d=a(164),_=a(165),j=a(65);var m={"mockUrl":"http://yapi.smart-xwork.cn/mock/129336","devUrl":"","prodUrl":"","path":"/getPostObjectParams","method":d.a.GET,"requestHeaders":{},"requestBodyType":d.b.query,"responseBodyType":d.c.json,"dataKey":void 0,"paramNames":[],"queryNames":[],"requestDataOptional":!0,"requestDataJsonSchema":{},"responseDataJsonSchema":{},"requestFunctionName":"getPostObjectParams","extraInfo":{}},b=function getPostObjectParams(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return j.a.apply(void 0,[Object(_.a)(m,e)].concat(a))};b.requestConfig=m;var x=a(36);function useFileList(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],d=function(){var e=Object(n.a)(s.a.mark((function _callee(e,t,n){var c,r,d,_,j,m,h;return s.a.wrap((function _callee$(s){for(;;)switch(s.prev=s.next){case 0:if("remove"!==t){s.next=4;break}i(a.filter((function(e,t){return t!==n}))),s.next=16;break;case 4:return c=e[e.length-1],s.next=7,b({},{"mock":!0});case 7:if(r=s.sent.data,d=r.signature,_=r.OSSAccessKeyId,j=r.policy,m=c.url,x.a){s.next=14;break}return s.next=13,Object(l.c)({"src":c.url,"quality":30});case 13:m=s.sent.tempFilePath;case 14:h=u.a.encode(m)+".png",Object(o.a)({"filePath":m,"name":"file","url":"https://alllink-overseas.oss-eu-west-1.aliyuncs.com","formData":{"key":h,"policy":j,"OSSAccessKeyId":_,"signature":d},"success":function success(e){204===e.statusCode&&(console.log("上传成功"),c.token="https://file2.alllink.work"+h,a.push(c),i(a))}});case 16:case"end":return s.stop()}}),_callee)})));return function onFileChange(t,a,n){return e.apply(this,arguments)}}();return[a,d,i]}var h=a(245),f=a(202),O=a(33),p=a(61);function useAutoSaveRestore(e,t,a){Object(r.useEffect)((function(){try{var t=Object(O.i)(e);t&&(a(t),Object(p.h)({"title":"已恢复草稿","icon":"success","duration":2e3}))}catch(e){}}),[]);var n=Object(h.a)((function(){Object(O.p)(e,t)}),{"wait":2e3}).run;Object(f.a)(n,t)}var g=a(168)},"238":function(e,t,a){e.exports={"background":"index-module__background___TMKvQ","contentArea":"index-module__contentArea___2o3kz","contentTextarea":"index-module__contentTextarea___jl8nF","contentImagePicker":"index-module__contentImagePicker___2uBWj","detailsArea":"index-module__detailsArea___irlW1","detailsItem":"index-module__detailsItem___2UI8S","detailsTitle":"index-module__detailsTitle___1WOSO","specification":"index-module__specification___1jwft","lineAfter":"index-module__lineAfter___2P38x","detailsContent":"index-module__detailsContent___2ZhxG","buttonGroup":"index-module__buttonGroup___1BxZF","halfWidthButton":"index-module__halfWidthButton___nwnkI","active":"index-module__active___6yKyo","detailsScrollView":"index-module__detailsScrollView___3Plhs","categoryItem":"index-module__categoryItem___11mGm","selected":"index-module__selected___1Upt6","highlight":"index-module__highlight___3OY3d","COVID":"index-module__COVID___29POH","detailsSettings":"index-module__detailsSettings___2RbLO","switch":"index-module__switch___1vZ34","itemButtonGroup":"index-module__itemButtonGroup___1RbNQ","itemButton":"index-module__itemButton___2T09V","anonymousTextarea":"index-module__anonymousTextarea___1jGEL","topicContainer":"index-module__topicContainer___3kKzk","topicItem":"index-module__topicItem___1VEhj","topicDelete":"index-module__topicDelete___1ZpG_","topicClear":"index-module__topicClear___2DE5D","notification":"index-module__notification___1JQ7v","fullWidthButton":"index-module__fullWidthButton___22iMM","peopleTextarea":"index-module__peopleTextarea___1PMZI"}},"240":function(e,t,a){"use strict";a.d(t,"a",(function(){return useBoolean}));var n=a(14),__read=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,c,i=a.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){c={"error":e}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(c)throw c.error}}return s};var c=function useToggle(e,t){void 0===e&&(e=!1);var a=__read(Object(n.useState)(e),2),c=a[0],i=a[1];return[c,Object(n.useMemo)((function(){var a=void 0===t?!e:t;return{"toggle":function toggle(){return i((function(t){return t===e?a:e}))},"set":function set(e){return i(e)},"setLeft":function setLeft(){return i(e)},"setRight":function setRight(){return i(a)}}}),[])]},useBoolean_read=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,c,i=a.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){c={"error":e}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(c)throw c.error}}return s};function useBoolean(e){void 0===e&&(e=!1);var t=useBoolean_read(c(e),2),a=t[0],i=t[1],s=i.toggle,r=i.set;return[a,Object(n.useMemo)((function(){return{"toggle":s,"set":function set(e){return r(!!e)},"setTrue":function setTrue(){return r(!0)},"setFalse":function setFalse(){return r(!1)}}}),[])]}},"248":function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(10),i=a(167),s=a(14),r=a(169),l=a(238),o=a.n(l),u=a(170),d=a(175),_=a(174),j=a(176),m=a.n(j),b=a(180),x=a(35),h=a(240),f=a(29);t.default=function Postju(){var e=Object(s.useContext)(x.c),t=Object(c.a)(e,2),a=(t[0],t[1],Object(s.useState)("")),l=Object(c.a)(a,2),j=l[0],O=l[1],p=Object(s.useState)(200),g=Object(c.a)(p,2),v=g[0],w=g[1],y=Object(_.b)(),N=Object(c.a)(y,3),S=N[0],V=N[1],k=N[2],C=Object(s.useState)(0),T=Object(c.a)(C,2),I=T[0],A=T[1],B=Object(s.useState)(2),P=Object(c.a)(B,2),W=P[0],F=P[1],L=Object(s.useState)(""),D=Object(c.a)(L,2),G=D[0],q=D[1],R=Object(h.a)(!0),J=Object(c.a)(R,2),K=J[0],M=J[1],E=M.setTrue,U=M.setFalse,Z=M.set;Object(_.a)("ju:post",[j,v,S,I,W,G,K],(function(e){O(e[0]),w(e[1]),k(e[2]),A(e[3]),F(e[4]),q(e[5]),Z(e[6])}));return Object(f.jsxs)(i.View,{"children":[Object(f.jsx)(r.f,{"title":"发布","bottomLine":!0}),Object(f.jsx)(u.b,{"navigation":!0,"className":o.a.background,"children":Object(f.jsxs)(i.ScrollView,{"scrollY":!0,"scrollWithAnimation":!0,"style":{"height":"100%"},"children":[function renderContent(){return Object(f.jsxs)(i.View,{"className":o.a.contentArea,"children":[Object(f.jsx)(d.f,{"className":o.a.contentTextarea,"value":j,"onChange":O,"maxLength":1e3,"placeholder":"描述一下你的局吧~（如时间、地点）","autoFocus":!0,"count":!1,"height":v,"onLinechange":function onLinechange(e){w(e.detail.heightRpx>200?e.detail.heightRpx:200)}}),Object(f.jsx)(d.b,{"className":o.a.contentImagePicker,"files":S,"onChange":V,"count":9})]})}(),Object(f.jsxs)(i.View,{"className":o.a.detailsArea,"children":[function renderCategorySettings(){return Object(f.jsxs)(i.View,{"className":o.a.detailsItem,"children":[Object(f.jsxs)(i.View,{"className":o.a.detailsTitle,"children":[Object(f.jsx)(i.Text,{"children":"组局分类"}),Object(f.jsx)(i.View,{"className":o.a.lineAfter})]}),Object(f.jsx)(i.View,{"className":o.a.detailsContent,"children":Object(f.jsx)(i.ScrollView,{"className":o.a.detailsScrollView,"scrollX":!0,"scrollWithAnimation":!0,"children":b.juCategories.map((function(e,t){var a;return Object(f.jsxs)(d.a,{"className":m()((a={},Object(n.a)(a,o.a.categoryItem,!0),Object(n.a)(a,o.a.selected,I===t),a)),"onClick":function onClick(){return A(t)},"children":[" ",e.title]},t)}))})})]})}(),function renderPeopleSettings(){var e,t;return Object(f.jsxs)(i.View,{"className":o.a.detailsItem,"children":[Object(f.jsxs)(i.View,{"className":o.a.detailsTitle,"children":[Object(f.jsx)(i.Text,{"children":"组局人数"}),Object(f.jsx)(i.View,{"className":o.a.lineAfter})]}),Object(f.jsx)(i.View,{"className":o.a.detailsContent,"children":Object(f.jsxs)(i.ScrollView,{"className":o.a.detailsScrollView,"scrollX":!0,"scrollWithAnimation":!0,"children":[[2,3,4].map((function(e,t){var a;return Object(f.jsxs)(d.a,{"className":m()((a={},Object(n.a)(a,o.a.categoryItem,!0),Object(n.a)(a,o.a.selected,W===e),a)),"onClick":function onClick(){return F(e)},"children":[" ",e]},t)})),Object(f.jsx)(i.Input,{"type":"text","maxlength":9,"className":m()((e={},Object(n.a)(e,o.a.peopleTextarea,!0),Object(n.a)(e,o.a.selected,W>4),e)),"placeholderClass":m()((t={},Object(n.a)(t,o.a.peopleTextarea,!0),Object(n.a)(t,o.a.selected,W>4),t)),"placeholder":"请输入(不大于12)","value":W.toString(),"onBlur":function onBlur(e){var t=parseInt(e.detail.value);isNaN(t)||t.toString()!==e.detail.value?F(2):F(t<2?2:t>12?12:t)}})]})})]})}(),function renderContactSettings(){return Object(f.jsxs)(i.View,{"className":o.a.detailsItem,"children":[Object(f.jsxs)(i.View,{"className":o.a.detailsTitle,"children":[Object(f.jsx)(i.Text,{"children":"联系方式"}),Object(f.jsx)(i.View,{"className":o.a.lineAfter})]}),Object(f.jsx)(i.View,{"className":o.a.detailsContent,"children":Object(f.jsxs)(i.View,{"className":o.a.detailsSettings,"style":{"marginBottom":0},"children":[Object(f.jsx)(i.View,{"children":"微信号"}),Object(f.jsx)(i.Input,{"type":"text","maxlength":9,"className":o.a.anonymousTextarea,"placeholderClass":o.a.anonymousTextarea,"placeholder":"请输入你的微信号","value":G,"onInput":function onInput(e){q(e.detail.value)}})]})})]})}(),function renderLocationSettings(){var e,t;return Object(f.jsxs)(i.View,{"className":o.a.detailsItem,"children":[Object(f.jsxs)(i.View,{"className":o.a.detailsTitle,"children":[Object(f.jsx)(i.Text,{"children":"发布设置"}),Object(f.jsx)(i.View,{"className":o.a.specification,"children":"组局将在发布时间14天后将自动截止"}),Object(f.jsx)(i.View,{"className":o.a.lineAfter})]}),Object(f.jsx)(i.View,{"className":o.a.detailsContent,"children":Object(f.jsxs)(i.View,{"className":o.a.buttonGroup,"children":[Object(f.jsx)(d.a,{"className":m()((e={},Object(n.a)(e,o.a.halfWidthButton,!0),Object(n.a)(e,o.a.active,K),e)),"circle":!0,"onClick":E,"children":" 全部可见"}),Object(f.jsx)(d.a,{"className":m()((t={},Object(n.a)(t,o.a.halfWidthButton,!0),Object(n.a)(t,o.a.active,!K),t)),"circle":!0,"onClick":U,"children":" 仅本校可见"})]})})]})}(),Object(f.jsxs)(i.View,{"className":o.a.notification,"children":["*发布即代表已阅读理解并承诺遵守",Object(f.jsx)(i.Text,{"style":{"color":"#2680F0"},"onClick":function onJuRulesClick(){},"children":"攒局规范"}),"，如有违规自行承担相关责任"]}),Object(f.jsx)(d.a,{"className":o.a.fullWidthButton,"circle":!0,"children":"发布"})]})]})})]})}}}]);