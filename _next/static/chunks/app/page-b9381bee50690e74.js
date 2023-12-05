(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9106:function(n,t,r){Promise.resolve().then(r.bind(r,4166))},4166:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var e=r(7437),i=r(6931),o=r(230),l=r(787),c=r(6691),u=r.n(c);function a(){let n=(0,o._)(["\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 56px;\n  padding: 16px;\n  background-color: var(--color-float);\n  border-radius: 16px;\n  box-shadow: var(--shadow-lg);\n"]);return a=function(){return n},n}function d(){let n=(0,o._)(["\n  overflow: hidden;\n  border-radius: 100%;\n"]);return d=function(){return n},n}function f(){let n=(0,o._)(["\n  flex: 1;\n  font-weight: 600;\n"]);return f=function(){return n},n}let s=l.Z.div(a()),p=(0,l.Z)(u())(d()),Text=l.Z.span(f());function h(n){let{src:t,text:r,onClick:i}=n;return(0,e.jsxs)(s,{onClick:i,children:[(0,e.jsx)(p,{src:t,width:24,height:24,alt:"Icon",priority:!0}),(0,e.jsx)(Text,{children:r})]})}var x=r(2697),m=r(9364),g=r(1396),w=r.n(g);function j(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(i.default,{children:["기본에 충실한",(0,e.jsx)("br",{}),"문제 풀이"]}),(0,e.jsx)(x.Container,{children:(0,e.jsxs)(x.Section,{children:[(0,e.jsx)("h2",{children:"문제 풀이"}),(0,e.jsx)(x.Grid,{children:m.c.map(n=>(0,e.jsx)(w(),{href:"/solutions/".concat(n.id),children:(0,e.jsx)(h,{src:"/images/oj/".concat(n.id,".png"),text:n.name})},n.id))})]})})]})}},6931:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var e=r(230),i=r(7437),o=r(2697),l=r(787),c=r(6691),u=r.n(c);function a(){let n=(0,e._)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: ",";\n\n  @media (width < 1200px) {\n    height: ",";\n  }\n\n  @media (width < 810px) {\n    height: ",";\n  }\n"]);return a=function(){return n},n}function d(){let n=(0,e._)(["\n  object-fit: cover;\n  filter: brightness(0.9);\n"]);return d=function(){return n},n}function f(){let n=(0,e._)(["\n  mix-blend-mode: overlay;\n"]);return f=function(){return n},n}function s(){let n=(0,e._)(["\n  margin: 0;\n  font-size: ",";\n  font-weight: bold;\n  line-height: 1.4;\n  color: #fff;\n"]);return s=function(){return n},n}let p=l.Z.header(a(),n=>n.small?"auto":"360px",n=>n.small?"auto":"320px",n=>n.small?"auto":"240px"),h=(0,l.Z)(u())(d()),x=(0,l.Z)(o.Container)(f()),Text=l.Z.h1(s(),n=>n.small?"var(--text-2xl)":"var(--text-4xl)");function m(n){let{children:t,small:r}=n;return(0,i.jsxs)(p,{small:r,children:[(0,i.jsx)(h,{src:"https://source.unsplash.com/".concat("XUlsF9LYeVk"),alt:"Backdrop",priority:!0,fill:!0}),(0,i.jsx)(x,{children:(0,i.jsx)(Text,{small:r,children:t})})]})}},2697:function(n,t,r){"use strict";r.r(t),r.d(t,{Container:function(){return f},Description:function(){return x},Grid:function(){return h},List:function(){return p},Prose:function(){return m},Section:function(){return s}});var e=r(230),i=r(787);function o(){let n=(0,e._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 64px;\n  align-items: flex-start;\n  justify-content: center;\n  width: 1192px;\n  padding: 32px;\n\n  @media (width < 1200px) {\n    width: 100%;\n  }\n\n  @media (width < 810px) {\n    gap: 48px;\n    padding: 24px;\n  }\n"]);return o=function(){return n},n}function l(){let n=(0,e._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n"]);return l=function(){return n},n}function c(){let n=(0,e._)(["\n  @media (width < 810px) {\n    gap: 16px;\n  }\n"]);return c=function(){return n},n}function u(){let n=(0,e._)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-auto-rows: min-content;\n  gap: 24px;\n  width: 100%;\n\n  @media (width < 810px) {\n    gap: 16px;\n  }\n"]);return u=function(){return n},n}function a(){let n=(0,e._)(["\n  font-weight: 500;\n  color: var(--color-description);\n"]);return a=function(){return n},n}function d(){let n=(0,e._)(["\n  width: 100%;\n\n  h1 {\n    margin-bottom: 1.5rem;\n  }\n\n  h2 {\n    margin-bottom: 1.5rem;\n  }\n\n  h3 {\n    margin-bottom: 1.25rem;\n  }\n\n  p,\n  ul,\n  ol {\n    margin-top: -0.5rem;\n    margin-bottom: 1.5rem;\n    line-height: 2;\n    color: var(--color-paragraph);\n  }\n\n  ul,\n  ol {\n    padding-left: 2rem;\n  }\n\n  a strong {\n    text-decoration: underline wavy;\n    text-underline-offset: 1px;\n  }\n\n  [data-rehype-pretty-code-fragment] {\n    margin-bottom: 2rem; /* 32px */\n  }\n\n  & > :last-child {\n    margin-bottom: 0 !important;\n  }\n"]);return d=function(){return n},n}let f=i.Z.div(o()),s=i.Z.section(l()),p=(0,i.Z)(s)(c()),h=i.Z.div(u()),x=i.Z.span(a()),m=i.Z.article(d())},9364:function(n,t,r){"use strict";r.d(t,{c:function(){return e}});let e=[{id:"boj",name:"백준 온라인 저지",levels:[{id:"Bronze",color:"#a50"},{id:"Silver",color:"#457"},{id:"Gold",color:"#e90"},{id:"Platinum",color:"#2ea"},{id:"Diamond",color:"#0bf"},{id:"Ruby",color:"#f06"}]},{id:"programmers",name:"프로그래머스",levels:[{id:"0",color:"#28f"},{id:"1",color:"#1bf"},{id:"2",color:"#4c4"},{id:"3",color:"#fa0"},{id:"4",color:"#f61"},{id:"5",color:"#c5e"}]}]}},function(n){n.O(0,[288,396,691,971,472,744],function(){return n(n.s=9106)}),_N_E=n.O()}]);