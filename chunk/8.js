(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"169":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(55),a=n(101),l=n(56),c=(n(57),{"mockUrl":"http://yapi.smart-xwork.cn/mock/129336","devUrl":"","prodUrl":"","path":"/bbs/getCommentList","method":i.a.GET,"requestHeaders":{},"requestBodyType":i.b.query,"responseBodyType":i.c.json,"dataKey":void 0,"paramNames":[],"queryNames":["thingid"],"requestDataOptional":!1,"requestDataJsonSchema":{},"responseDataJsonSchema":{},"requestFunctionName":"getCommentList","extraInfo":{}}),s=function getCommentList(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return l.a.apply(void 0,[Object(a.a)(c,e)].concat(n))};s.requestConfig=c},"260":function(e,t,n){e.exports={"multi-ellipsis--l2":"index-module__multi-ellipsis--l2___Szy2B","multi-ellipsis--l3":"index-module__multi-ellipsis--l3___3K_KS","multi-ellipsis--l4":"index-module__multi-ellipsis--l4___OzGUe","container":"index-module__container___1I0qU","contentContainer":"index-module__contentContainer___2VmoL","contentInline":"index-module__contentInline___2abEp","split":"index-module__split___90HrN","splitInline":"index-module__splitInline___1veuX","splitLine":"index-module__splitLine___2fvzX","avatar":"index-module__avatar___j1fEl","avatarContainer":"index-module__avatarContainer___3zBvk","avatarPeople":"index-module__avatarPeople___1cTbx","avatarPeopleIn":"index-module__avatarPeopleIn___2GIMt","btn":"index-module__btn___1hnJL","btnRight":"index-module__btnRight___ByFTq","btnRightImg":"index-module__btnRightImg___15sdt","btnRightWrapper":"index-module__btnRightWrapper___1enZ0","btnRightText":"index-module__btnRightText___PwY0D","btnLeft":"index-module__btnLeft___1XiV4","btnLeftText":"index-module__btnLeftText___3glDv","btnLeftActive":"index-module__btnLeftActive___knSSJ","msg":"index-module__msg___3ZI0_","msgTitle":"index-module__msgTitle___1FNa9","msgTitleText":"index-module__msgTitleText___zB2ZB","msgTitleTextActive":"index-module__msgTitleTextActive___17r0n"}},"268":function(e,t,n){"use strict";n.r(t);var i=n(19),a=n(9),l=n(11),c=n.n(l),s=n(51),r=n(155),o=n(14),u=n(279),d=n(276),_=n(158),m=n(166),b=n(160),j=n(215),x=n.n(j),h=n(169),p=n(157),g=n.n(p),f=n(260),O=n.n(f),v=n(29),w=[{"id":"1","nickname":"Zeyu","avatar":"https://s4.ax1x.com/2022/02/09/HJsqb9.png","school":"诺丁汉大学","country":"China","city":"Ningbo","major":"cs","grade":"4","gender":1},null,null,null,null,null,null,null,null,null],T={"thingid":"5","userInfo":{"id":"1","nickname":"Zeyu","avatar":"","school":"诺丁汉大学","country":"China","city":"Ningbo","major":"cs","grade":"4","gender":1},"juCategories":{"order":1,"title":"玩乐"},"date":"9天前","content":"55555555555555555555555测试换行555555555555555555555555555","people":{"in":1,"total":10}};t.default=function JuDetail(){var e=Object(m.a)().thingid,t=Object(o.useState)(),n=Object(a.a)(t,2),l=n[0],j=n[1],p=Object(u.a)(!1),f=Object(a.a)(p,2),N=f[0],I=(f[1].toggle,Object(u.a)(!0)),V=Object(a.a)(I,2),k=V[0],C=V[1],y=C.setTrue,L=C.setFalse,R=Object(o.useState)(),q=Object(a.a)(R,2),S=q[0],A=q[1];Object(o.useEffect)((function(){J(e);j(T)}),[]);var J=function(){var e=Object(i.a)(c.a.mark((function _callee(e){return c.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee)})));return function fetchData(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(c.a.mark((function _callee2(){var e;return c.a.wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:if(!N){t.next=3;break}return Object(s.h)({"title":"不能加入这个局了哦～","icon":"none","duration":2e3}),t.abrupt("return");case 3:return t.next=5,Object(s.g)({"title":"是否确认加入","confirmText":"确认","confirmColor":"#616b86","cancelText":"取消"});case 5:if(e=t.sent,e.confirm){t.next=9;break}return t.abrupt("return");case 9:case"end":return t.stop()}}),_callee2)})));return function showJoinToast(){return e.apply(this,arguments)}}(),B=Object(o.useCallback)((function(){return Object(h.a)({"thingid":"12345"},{"mock":!0})}),[e]),H=Object(d.a)(B),P=H.loading,U=H.data,z=(H.refresh,Object(o.useMemo)((function(){var e;return null==U||null===(e=U.data)||void 0===e?void 0:e.list}),[U])),Z=Object(o.useCallback)((function(){return Object(h.a)({"thingid":"12345"},{"mock":!0})}),[e]),E=Object(d.a)(Z),F=E.loading,W=E.data,G=(E.refresh,Object(o.useMemo)((function(){var e;return null==W||null===(e=W.data)||void 0===e?void 0:e.list}),[W])),K=function AvatarItem(e){var t=e.userInfo;return Object(v.jsx)(r.View,{"style":{"margin":"5px 10px"},"children":Object(v.jsx)(_.b,{"src":t?t.avatar:"https://s4.ax1x.com/2022/02/09/HJ2smD.png","size":45,"onClick":t?function handleUserInfoSelect(){t&&A(t)}:D})})};return Object(v.jsxs)(_.i,{"navigation":!0,"children":[Object(v.jsx)(_.k,{"navHome":"ju","bottomLine":!0}),Object(v.jsxs)(r.ScrollView,{"scrollWithAnimation":!0,"scrollY":!0,"className":O.a.container,"children":[Object(v.jsx)(_.n,{"userInfo":null==l?void 0:l.userInfo,"thingid":null==l?void 0:l.thingid,"time":null==l?void 0:l.date}),Object(v.jsx)(r.View,{"className":O.a.contentContainer,"children":Object(v.jsx)(r.View,{"className":O.a.contentInline,"children":null==l?void 0:l.content})}),Object(v.jsxs)(r.View,{"className":O.a.split,"children":[Object(v.jsx)(r.View,{"className":O.a.splitInline,"children":"组局进度"}),Object(v.jsx)(r.View,{"className":O.a.splitLine})]}),Object(v.jsxs)(r.View,{"className":O.a.avatar,"children":[Object(v.jsx)(r.View,{"className":O.a.avatarContainer,"children":w.map((function(e,t){return Object(v.jsx)(K,{"userInfo":e,"setSelectedUserInfo":A},t)}))}),Object(v.jsxs)(r.View,{"className":O.a.avatarPeople,"children":[Object(v.jsx)(r.View,{"className":O.a.avatarPeopleIn,"children":null==l?void 0:l.people.in}),Object(v.jsx)(r.View,{"children":"/"}),Object(v.jsx)(r.View,{"children":null==l?void 0:l.people.total})]})]}),Object(v.jsxs)(r.View,{"className":O.a.btn,"children":[Object(v.jsx)(r.View,{"className":N?O.a.btnLeft:g()([O.a.btnLeft,O.a.btnLeftActive]),"children":Object(v.jsx)(r.View,{"className":O.a.btnLeftText,"onClick":D,"children":N?"已失效/满员/取消":"立即加入"})}),Object(v.jsxs)(r.View,{"className":O.a.btnRightWrapper,"children":[Object(v.jsxs)(r.View,{"className":O.a.btnRight,"onClick":function handleShare(){},"children":[Object(v.jsx)(r.Image,{"src":b.u,"className":O.a.btnRightImg}),Object(v.jsx)(r.View,{"className":O.a.btnRightText,"children":"转发"})]}),Object(v.jsxs)(r.View,{"className":O.a.btnRight,"onClick":function handleReport(){},"children":[Object(v.jsx)(r.Image,{"src":b.q,"className":O.a.btnRightImg}),Object(v.jsx)(r.View,{"className":O.a.btnRightText,"children":"举报"})]})]})]}),Object(v.jsxs)(r.View,{"className":O.a.msg,"children":[Object(v.jsxs)(r.View,{"className":O.a.msgTitle,"children":[Object(v.jsx)(r.View,{"className":k?g()([O.a.msgTitleText,O.a.msgTitleTextActive]):O.a.msgTitleText,"onClick":y,"children":"公共留言区"}),Object(v.jsx)(r.View,{"className":k?O.a.msgTitleText:g()([O.a.msgTitleText,O.a.msgTitleTextActive]),"onClick":L,"children":"局内讨论区"})]}),Object(v.jsx)(x.a,{"row":4,"loading":k?F:P,"children":Object(v.jsx)(r.View,{"children":Object(v.jsx)(_.f,{"commentList":k?G||[]:z||[]})})})]}),void 0!==S&&Object(v.jsx)(_.o,{"userInfo":S,"visible":void 0!==S,"onHide":function onHide(){return A(void 0)}})]})]})}}}]);