(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,a){e.exports={Layout:"Layout_Layout__1-68l"}},39:function(e,t,a){e.exports={Header:"Header_Header__2HSLQ"}},44:function(e,t,a){e.exports=a(74)},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),u=a(8),l=a.n(u),s=a(12),i=a(18),m=a(19),b=a(21),d=a(20),v=a(37),E=a.n(v),p=a(10),h=a(39),O=a.n(h),f=a(11);var _=Object(p.b)((function(e){return{isAuthenticated:!!e.authReducer.token}}))((function(e){return r.a.createElement("nav",{className:O.a.Header+" navbar navbar-expand-lg navbar-dark bg-dark "},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(f.b,{className:"navbar-brand",to:"/"},"CutOfWood"))),r.a.createElement("ul",{className:"navbar-nav my-2 my-lg-0"},e.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/logout"},"\u0412\u044b\u0439\u0442\u0438"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/auth"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/registration"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))))})),k=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:E.a.Layout},r.a.createElement(_,null),r.a.createElement("main",null,this.props.children))}}]),a}(r.a.Component),g=Object(p.b)()(k),j=a(2),y=a(40),w=a.n(y).a.create({baseURL:"http://127.0.0.1:8000/api"});function N(){return localStorage.removeItem("token"),{type:"AUTH_LOGOUT"}}function S(e,t){return{type:"AUTH_SUCCESS",user:e,token:t}}var T=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.autoLogin();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=r.a.createElement(j.c,null,r.a.createElement(j.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(j.c,null,r.a.createElement(j.a,{to:"/"}))),r.a.createElement(g,null,e)}}]),a}(r.a.Component);var R=Object(j.f)(Object(p.b)((function(e){return{isAuthenticated:!!e.authReducer.token}}),(function(e){return{autoLogin:function(){return e(function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("token"))){e.next=7;break}return n={method:"GET",headers:{Authorization:"Token "+a},url:"auth/user"},e.next=5,w(n).then((function(e){t(S(e.data,a))})).catch((function(){t(N())}));case 5:e.next=8;break;case 7:t(N());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(T));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(7),A=a(13),L={token:null,user:{},errorMessage:""};var x=Object(U.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{token:t.token,user:t.user,errorMessage:""});case"AUTH_LOGOUT":return L;case"AUTH_ERROR":case"REGISTRATION_ERROR":return Object(A.a)(Object(A.a)({},e),{},{errorMessage:t.errorMessage});default:return e}}}),C=a(41),H=a(26),I=a(42),M=a.n(I),D=a(43),G="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):U.d,W={key:"root",storage:M.a},X=Object(H.a)(W,x),F=Object(U.e)(X,G(Object(U.a)(C.a))),B=Object(H.b)(F);o.a.render(r.a.createElement(p.a,{store:F},r.a.createElement(f.a,null,r.a.createElement(D.a,{loading:null,persistor:B},r.a.createElement(R,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.2df2c4bd.chunk.js.map