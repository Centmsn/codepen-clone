(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),l=n(2),i=n(9),s=n(10),u=n(5),m=(n(21),n(22),n(23),n(24),n(25),function(e){var t=e.lang,n=e.name,r=e.value,o=e.onChange,m=Object(a.useState)(!0),f=Object(l.a)(m,2),d=f[0],p=f[1];return c.a.createElement("div",{className:"editor-container ".concat(d?"":"editor-container--closed")},c.a.createElement("div",{className:"editor-container__title"},n,c.a.createElement("button",{className:"button",onClick:function(){return p((function(e){return!e}))}},c.a.createElement(s.a,{icon:d?u.a:u.b}))),c.a.createElement(i.Controlled,{onBeforeChange:function(e,t,n){o(n)},value:r,className:"editor-container__wrapper",options:{lineWrapping:!0,lint:!0,mode:t,lineNumbers:!0,theme:"material"}}))}),f=function(e,t){var n="codepen-clone-"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),r=Object(l.a)(c,2),o=r[0],i=r[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(o))}),[n,o]),[o,i]},d=function(){var e=f("html",""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=f("css",""),i=Object(l.a)(o,2),s=i[0],u=i[1],d=f("js",""),p=Object(l.a)(d,2),b=p[0],g=p[1],v=Object(a.useState)(""),E=Object(l.a)(v,2),h=E[0],j=E[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){j("<html><body>".concat(n,"</body><style>").concat(s,"</style><script>").concat(b,"<\/script></html>"))}),500);return function(){return clearTimeout(e)}}),[n,s,b]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container container--top"},c.a.createElement(m,{lang:"xml",name:"HTML",value:n,onChange:r}),c.a.createElement(m,{lang:"css",name:"CSS",value:s,onChange:u}),c.a.createElement(m,{lang:"javascript",name:"JS",value:b,onChange:g})),c.a.createElement("div",{className:"container"},c.a.createElement("iframe",{srcDoc:h,sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))};n(26);o.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.ccace64e.chunk.js.map