(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{161:function(e,n,t){},162:function(e,n,t){},166:function(e,n){},168:function(e,n){},179:function(e,n){},181:function(e,n){},209:function(e,n){},211:function(e,n){},212:function(e,n){},217:function(e,n){},219:function(e,n){},238:function(e,n){},250:function(e,n){},253:function(e,n){},282:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(150),o=t.n(c),i=(t(161),t(162),t(24)),s=t(5),u=t(4),l=t(9),p=t(6),d=t(18),b=t(283),f="https://todo-list.alphacamp.io/api/auth",j=function(){var e=Object(l.a)(Object(u.a)().mark((function e(n,t){var r,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(f,"/login"),{username:n,password:t});case 3:if(r=e.sent,!(a=r.data).authToken){e.next=7;break}return e.abrupt("return",Object(d.a)({success:!0},a));case 7:return e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("[Login failed]:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(Object(u.a)().mark((function e(n,t,r){var a,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(f,"/register"),{username:n,email:t,password:r});case 3:if(a=e.sent,!(c=a.data).authToken){e.next=7;break}return e.abrupt("return",Object(d.a)({success:!0},c));case 7:return e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error("[Register failed]:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(Object(u.a)().mark((function e(n){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(f,"/test-token"),{headers:{Authorization:"Bearer "+n}});case 3:return t=e.sent,e.abrupt("return",t.data.success);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Check Permissoin Failed]:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),x=t(64),v=t(2),g={isAuthenticated:!1,currentMember:null,register:null,login:null,logout:null},m=Object(r.createContext)(g),k=function(){return Object(r.useContext)(m)};function w(e){var n=e.children,t=Object(r.useState)(!1),a=Object(p.a)(t,2),c=a[0],o=a[1],i=Object(r.useState)(!1),d=Object(p.a)(i,2),b=d[0],f=d[1],g=Object(s.i)().pathname;return Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){var n,t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=localStorage.getItem("authToken")){e.next=6;break}return o(!1),f(null),e.abrupt("return");case 6:return e.next=8,O(n);case 8:e.sent?(o(!0),t=x.decode(n),f(t)):(o(!1),f(null)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("[Check Permission Failed: ]",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),Object(v.jsx)(m.Provider,{value:{isAuthenticated:c,currentMember:b&&{id:b.sub,name:b.name},register:function(){var e=Object(l.a)(Object(u.a)().mark((function e(n,t,r){var a,c,i,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n,t,r);case 2:return a=e.sent,c=a.success,i=a.authToken,(s=x.decode(i))?(o(!0),f(s),localStorage.setItem("authToken",i)):(o(!1),f(null)),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),login:function(){var e=Object(l.a)(Object(u.a)().mark((function e(n,t){var r,a,c,i;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(n,t);case 2:return r=e.sent,a=r.success,c=r.authToken,(i=x.decode(c))?(o(!0),f(i),localStorage.setItem("authToken",c)):(o(!1),f(null)),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),logout:function(){var e=Object(l.a)(Object(u.a)().mark((function e(n,t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("authToken"),o(!1),f(null);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},children:n})}var y,C,E,S,T,D,F,z,N=function(){var e=k().isAuthenticated,n=Object(s.l)();Object(r.useEffect)((function(){if(e)return n("/todo");n("/login")}),[n,e])},I=t(12),M=t(13),R=M.a.div(y||(y=Object(I.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),A=M.a.div(C||(C=Object(I.a)(["\n  width: 50%;\n  margin-top: 30px;\n"]))),B=M.a.button(E||(E=Object(I.a)(["\n  border-radius: 30px;\n  background-color: #ff6600;\n  border: none;\n\n  color: white;\n  min-width: 300px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &.hover {\n    cursor: pointer;\n  }\n"]))),P=M.a.div(S||(S=Object(I.a)(["\n  color: #0062ff;\n  font-size: 16px;\n  font-weight: 400;\n"]))),L=["title","titleId"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},V.apply(this,arguments)}function Z(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function H(e,n){var t=e.title,a=e.titleId,c=Z(e,L);return r.createElement("svg",V({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},c),t?r.createElement("title",{id:a},t):null,T||(T=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),D||(D=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),F||(F=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),z||(z=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}var J,K,q,G,U,$,Q,W,X,Y,_,ee,ne=r.forwardRef(H),te=(t.p,t.p+"static/media/check-active.95ca055c.svg"),re=t.p+"static/media/check-circle.30720b46.svg",ae=t.p+"static/media/check-hover.5e00062b.svg",ce=M.a.div(J||(J=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #f5f8fa;\n  width: 100%;\n  height: 54px;\n  border-bottom: 2px solid black;\n"]))),oe=M.a.label(K||(K=Object(I.a)(["\n  font-size: 14;\n  color: '#696974';\n  text-align: start;\n"]))),ie=M.a.input(q||(q=Object(I.a)(["\n  outline: none;\n  border: none;\n  background-color: #f5f8fa;\n  border-radius: 0px;\n"]))),se=function(e){var n=e.type,t=e.label,r=e.value,a=e.placeholder,c=e.onChange;return Object(v.jsxs)(ce,{children:[Object(v.jsx)(oe,{children:t}),Object(v.jsx)(ie,{type:n||"text",placeholder:a,value:r,onChange:function(e){return c(e.target.value)}})]})},ue=M.a.header(G||(G=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--major);\n  padding: 0 16px;\n\n  h3 {\n    font-weight: 400;\n    user-select: none;\n  }\n"]))),le=M.a.div(U||(U=Object(I.a)(["\n  color: var(--gray);\n  span {\n    color: var(--major);\n  }\n"]))),pe=function(){var e=k().currentMember,n=null===e||void 0===e?void 0:e.name;return Object(v.jsxs)(ue,{children:[Object(v.jsx)("h3",{children:"Tasks"}),Object(v.jsxs)(le,{children:["Hi ",Object(v.jsx)("span",{children:n})]})]})},de=t(63),be=M.a.div($||($=Object(I.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  &.active {\n    box-shadow: 0 17px 0 -16px var(--major);\n  }\n"]))),fe=M.a.label(Q||(Q=Object(I.a)(["\n  display: inline-flex;\n  font-size: 30px;\n  transition: color 0.2s ease-out;\n  font-weight: 300;\n\n  &:after {\n    content: '+';\n  }\n"]))),je=M.a.div(W||(W=Object(I.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  user-select: none;\n\n  input {\n    flex: 1;\n    padding: 8px 12px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--major);\n      font-size: 13px;\n    }\n  }\n  $.active {\n    input::placeholder {\n      color: var(--gray);\n    }\n  }\n"]))),he=M.a.div(X||(X=Object(I.a)(["\n  button {\n    font-size: 13px;\n    color: var(--major);\n    padding-right: 5px;\n    display: none;\n  }\n\n  &.active {\n    button {\n      display: block;\n    }\n  }\n"]))),Oe=function(e){var n=e.inputValue,t=e.onChange,r=e.onAddTodo;return Object(v.jsxs)(be,{children:[Object(v.jsx)(fe,{className:"icon",htmlFor:"add-todo-input"}),Object(v.jsx)(je,{children:Object(v.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:n,onChange:function(e){return t(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&r()}})}),Object(v.jsx)(he,{className:Object(de.a)("",{active:n.length>0}),children:Object(v.jsx)("button",{className:"btn-reset",onClick:r,children:"\u65b0\u589e"})})]})},xe=M.a.div(Y||(Y=Object(I.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  .task-item-body-input {\n    user-select: none;\n    display: none;\n    flex: 1;\n    padding: 8px 0px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--gray);\n      font-size: 13px;\n    }\n  }\n\n  &:hover {\n    background: #fff3eb;\n    box-shadow: inset 0 0 0 1px #fff3eb;\n\n    .task-item-action .btn-destroy {\n      display: inline-flex;\n    }\n  }\n\n  &.done {\n    .task-item-body {\n      color: var(--gray);\n      text-decoration: line-through;\n    }\n\n    .icon-checked {\n      background-image: url(",");\n    }\n  }\n\n  &.edit {\n    .task-item-body-input {\n      display: block;\n    }\n    .task-item-body-text {\n      display: none;\n    }\n    .task-item-action {\n      display: none;\n    }\n  }\n\n  .task-item-checked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .task-item-body {\n    font-weight: 400;\n    padding: 8px 12px;\n    flex: 1;\n    display: flex;\n  }\n\n  .task-item-action {\n    .btn-destroy {\n      display: none;\n      font-size: 30px;\n      transition: color 0.2s ease-out;\n      font-weight: 300;\n      &:after {\n        content: '\xd7';\n      }\n    }\n  }\n\n  .icon-checked {\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n\n    &:hover {\n      transition: background-image 0.5s;\n      background-image: url(",");\n    }\n  }\n"])),te,re,ae),ve=function(e){var n=e.todo,t=e.onSave,a=e.onDelete,c=e.onToggleDone,o=e.onChangeMode,i=Object(r.useRef)(null);return Object(v.jsxs)(xe,{className:Object(de.a)("",{done:n.isDone,edit:n.isEdit}),children:[Object(v.jsx)("div",{className:"task-item-checked",onClick:function(){return c(n.id)},children:Object(v.jsx)("span",{className:"icon icon-checked"})}),Object(v.jsxs)("div",{className:"task-item-body",onDoubleClick:function(){return o({todoId:n.id,isEdit:!0})},children:[Object(v.jsx)("span",{className:"task-item-body-text",children:n.title}),Object(v.jsx)("input",{ref:i,className:"task-item-body-input",defaultValue:n.title,onKeyDown:function(e){i.current.value.length&&"Enter"===e.key&&t({id:n.id,title:i.current.value}),"Escape"===e.key&&o({id:n.id,isEdit:!1})}})]}),Object(v.jsx)("div",{className:"task-item-action ",children:Object(v.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:function(){return a(n.id)}})})]})},ge=function(e){var n=e.todos,t=e.onSave,r=e.onDelete,a=e.onToggleDone,c=e.onChangeMode;return Object(v.jsxs)("div",{children:["TodoCollection",n.map((function(e){return Object(v.jsx)(ve,{todo:e,onSave:t,onDelete:r,onToggleDone:a,onChangeMode:c},e.id)}))]})},me=M.a.footer(_||(_=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  p {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 2rem 0 1rem;\n  }\n"]))),ke=M.a.button(ee||(ee=Object(I.a)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  outline: 0;\n\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),we=function(e){var n=e.count,t=(Object(s.l)(),k().logout);return Object(v.jsxs)(me,{children:[Object(v.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a ",n]}),Object(v.jsx)(ke,{onClick:function(){t()},children:"\u767b\u51fa"})]})},ye=t(37),Ce=t.n(ye),Ee=function(){var e=Object(r.useState)(""),n=Object(p.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(p.a)(c,2),d=o[0],b=o[1],f=k(),j=f.login,h=f.isAuthenticated,O=Object(s.l)();function x(){return x=Object(l.a)(Object(u.a)().mark((function e(n,t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.length){e.next=3;break}return e.abrupt("return");case 3:if(t.length){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,j(n,t);case 7:if(!e.sent){e.next=10;break}return e.abrupt("return",Ce.a.fire({title:"\u767b\u5165\u6210\u529f!",icon:"success",showConfirmButton:!1,timer:1e3,position:"top"}));case 10:Ce.a.fire({title:"\u767b\u5165\u5931\u6557!",icon:"error",showConfirmButton:!1,timer:1e3,position:"top"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),x.apply(this,arguments)}return Object(r.useEffect)((function(){h&&O("/todo")}),[O,h]),Object(v.jsxs)(R,{children:[Object(v.jsx)("div",{children:Object(v.jsx)(ne,{})}),Object(v.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(v.jsx)(A,{children:Object(v.jsx)(se,{name:"username",label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:t,onChange:function(e){return a(e)}})}),Object(v.jsx)(A,{children:Object(v.jsx)(se,{name:"password",type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:d,onChange:function(e){return b(e)}})}),Object(v.jsx)(B,{onClick:function(){return function(e,n){return x.apply(this,arguments)}(t,d)},children:"\u767b\u5165"}),Object(v.jsx)(i.b,{to:"/signup",children:Object(v.jsx)(P,{children:"\u8a3b\u518a"})})]})},Se=function(){var e=Object(r.useState)(""),n=Object(p.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(p.a)(c,2),d=o[0],b=o[1],f=Object(r.useState)(""),j=Object(p.a)(f,2),h=j[0],O=j[1],x=Object(s.l)(),g=k(),m=g.register,w=g.isAuthenticated;function y(){return y=Object(l.a)(Object(u.a)().mark((function e(n,t,r){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.length){e.next=3;break}return e.abrupt("return");case 3:if(t.length){e.next=5;break}return e.abrupt("return");case 5:if(r.length){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,m(n,t,r);case 9:if(!e.sent){e.next=12;break}return e.abrupt("return",Ce.a.fire({title:"\u8a3b\u518a\u6210\u529f!",icon:"success",showConfirmButton:!1,timer:1e3,position:"top"}));case 12:Ce.a.fire({title:"\u8a3b\u518a\u5931\u6557!",icon:"error",showConfirmButton:!1,timer:1e3,position:"top"}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),y.apply(this,arguments)}return Object(r.useEffect)((function(){if(w)return x("/todo")}),[x,w]),Object(v.jsxs)(R,{children:[Object(v.jsx)("div",{children:Object(v.jsx)(ne,{})}),Object(v.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(v.jsx)(A,{children:Object(v.jsx)(se,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:t,onChange:function(e){return a(e)}})}),Object(v.jsx)(A,{children:Object(v.jsx)(se,{type:"email",label:"email",placeholder:"\u8acb\u8f38\u5165email",value:d,onChange:function(e){return b(e)}})}),Object(v.jsx)(A,{children:Object(v.jsx)(se,{type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:h,onChange:function(e){return O(e)}})}),Object(v.jsx)(B,{onClick:function(){return function(e,n,t){return y.apply(this,arguments)}(t,d,h)},children:"\u8a3b\u518a"}),Object(v.jsx)(i.b,{to:"/login",children:Object(v.jsx)(P,{children:"\u53d6\u6d88"})})]})},Te="https://todo-list.alphacamp.io/api",De=b.a.create({baseUrl:Te});De.interceptors.request.use((function(e){var n=localStorage.getItem("authToken");return n&&(e.headers.Authorization="Bearer ".concat(n)),e}),(function(e){return console.error(e)}));var Fe=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,De.get("".concat(Te,"/todos"));case 3:return n=e.sent,e.abrupt("return",n.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("[Get Todos failed]: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ze=function(){var e=Object(l.a)(Object(u.a)().mark((function e(n){var t,r,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.title,r=n.isDone,e.next=4,De.post("".concat(Te,"/todos"),{title:t,isDone:r});case 4:return a=e.sent,e.abrupt("return",a.data.data);case 8:e.prev=8,e.t0=e.catch(0),console.error("[Create Todo failed]: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(l.a)(Object(u.a)().mark((function e(n){var t,r,a,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.id,r=n.title,a=n.isDone,e.next=4,De.patch("".concat(Te,"/todos/").concat(t),{title:r,isDone:a});case 4:return c=e.sent,e.abrupt("return",c.data.data);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(l.a)(Object(u.a)().mark((function e(n){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,De.delete("".concat(Te,"/todos/").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),Me=function(){var e=Object(r.useState)([]),n=Object(p.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(!0),o=Object(p.a)(c,2),i=o[0],b=o[1],f=Object(r.useState)(""),j=Object(p.a)(f,2),h=j[0],O=j[1],x=Object(s.l)(),g=k().isAuthenticated;Object(r.useEffect)((function(){if(!g)return x("/login")}),[x,g]);var m=0;return t.forEach((function(e){e.isDone||m++})),Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Fe();case 3:n=e.sent,a(n.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isEdit:!1})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(v.jsxs)("div",{children:["TodoPage",Object(v.jsx)(pe,{}),Object(v.jsx)(Oe,{inputValue:h,onChange:function(e){O(e)},onAddTodo:function(e){return w.apply(this,arguments)}}),Object(v.jsx)(ge,{todos:t,onSave:function(e){return C.apply(this,arguments)},onDelete:function(e){return E.apply(this,arguments)},onToggleDone:function(e){return y.apply(this,arguments)},onChangeMode:function(e){var n=e.todoId,r=e.isEdit;a(t.map((function(e){return e.id===n?Object(d.a)(Object(d.a)({},e),{},{isEdit:r}):Object(d.a)(Object(d.a)({},e),{},{isEdit:!1})})))}}),Object(v.jsx)(we,{count:m})]});function w(){return(w=Object(l.a)(Object(u.a)().mark((function e(n){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==h.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,ze({title:h,isDone:!1});case 5:b(!i),O(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function y(){return(y=Object(l.a)(Object(u.a)().mark((function e(n){var r;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.find((function(e){return e.id===n})),e.next=4,Ne(Object(d.a)(Object(d.a)({},r),{},{isDone:!r.isDone}));case 4:b(!i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function C(){return(C=Object(l.a)(Object(u.a)().mark((function e(n){var r,a,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,a=n.title,e.prev=1,c=t.find((function(e){return e.id===r})),e.next=5,Ne(Object(d.a)(Object(d.a)({},c),{},{title:a}));case 5:b(!i),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function E(){return(E=Object(l.a)(Object(u.a)().mark((function e(n){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie(n);case 3:a(t.filter((function(e){return e.id!==n}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}};var Re=function(){return Object(v.jsx)("div",{className:"app",children:Object(v.jsx)(i.a,{children:Object(v.jsx)(w,{children:Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{path:"login",element:Object(v.jsx)(Ee,{})}),Object(v.jsx)(s.a,{path:"signup",element:Object(v.jsx)(Se,{})}),Object(v.jsx)(s.a,{path:"todo",element:Object(v.jsx)(Me,{})}),Object(v.jsx)(s.a,{path:"*",element:Object(v.jsx)(N,{})})]})})})})},Ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,284)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Re,{})})),Ae()}},[[282,1,2]]]);
//# sourceMappingURL=main.e2ffc271.chunk.js.map