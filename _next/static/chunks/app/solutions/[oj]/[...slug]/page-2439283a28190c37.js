(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{8980:function(n,e,t){var r={"./boj/1000/c.mdx":[9476,476],"./boj/1000/js.mdx":[6055,55],"./boj/1000/question.mdx":[303,303],"./boj/1001/question.mdx":[7477,477],"./boj/2557/c.mdx":[7829,829],"./boj/2557/js.mdx":[5237,237],"./boj/2557/question.mdx":[4723,723]};function i(n){if(!t.o(r,n))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=r[n],i=e[0];return t.e(e[1]).then(function(){return t(i)})}i.keys=function(){return Object.keys(r)},i.id=8980,n.exports=i},6459:function(n,e,t){Promise.resolve().then(t.bind(t,7222)),Promise.resolve().then(t.bind(t,3420)),Promise.resolve().then(t.bind(t,1078)),Promise.resolve().then(t.t.bind(t,3699,23)),Promise.resolve().then(t.bind(t,1520))},7222:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var r=t(230),i=t(7437),o=t(787);function u(){let n=(0,r._)(["\n  width: ",";\n  height: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: ",";\n  background-color: var(\n    ","\n  );\n  padding: 0px ",";\n  border-radius: ",";\n  color: var(",");\n  border: none;\n  cursor: pointer;\n\n  @media (max-width: 809px) {\n    height: ",";\n    padding: 0px ",";\n  }\n"]);return u=function(){return n},n}function l(){let n=(0,r._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  font-weight: ",";\n\n  & > svg {\n    width: 1rem; // 16px\n    height: 1rem; // 16px\n  }\n\n  @media (max-width: 809px) {\n    gap: 6px;\n    font-size: ","; // 16px, 14px\n\n    & > svg {\n      width: 0.875rem; // 14px\n      height: 0.875rem; // 14px\n    }\n  }\n"]);return l=function(){return n},n}t(2265);let a=o.Z.button(u(),n=>n.large?"100%":"auto",n=>n.large?"56px":"40px",n=>n.primary?n.large?"0px 2px 8px 0px rgba(0, 0, 0, 0.25)":"0px 1px 4px 0px rgba(0, 0, 0, 0.25)":"none",n=>n.primary?"--primary":"--secondary",n=>n.large?"48px":"24px",n=>n.large?"16px":"8px",n=>n.primary?"--text-primary":"--text",n=>n.large?"56px":"36px",n=>n.large?"32px":"20px"),c=o.Z.span(l(),n=>n.primary?"600":"500",n=>n.large?"1rem":"0.875rem");function d(n){let{onClick:e,children:t,primary:r,type:o,large:u}=n;return(0,i.jsx)(a,{onClick:e,type:o,primary:r,large:u,children:(0,i.jsx)(c,{primary:r,large:u,children:t})})}var f=t(1520);function s(){let n=(0,r._)(["\n  font-size: var(--text-4xl);\n  font-weight: 700;\n"]);return s=function(){return n},n}function p(){let n=(0,r._)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n"]);return p=function(){return n},n}let x=o.Z.h1(s()),m=o.Z.div(p());function h(n){let{data:e,children:t}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.Wrapper,{children:(0,i.jsxs)(f.Section,{children:[(0,i.jsx)(x,{children:e.title}),(0,i.jsx)(m,{children:e.tags.map(n=>(0,i.jsx)(d,{children:n},n))})]})}),(0,i.jsx)(f.Prose,{children:t})]})}},3420:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var r=t(230),i=t(7437),o=t(8864),u=t.n(o),l=t(1520),a=t(787),c=t(6691),d=t.n(c),f=t(1396),s=t.n(f),p=t(4033);function x(){let n=(0,r._)(["\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n"]);return x=function(){return n},n}function m(){let n=(0,r._)(["\n  border-radius: 100%;\n  ","\n"]);return m=function(){return n},n}let h=a.Z.div(x()),g=(0,a.Z)(d())(m(),n=>{let{disabled:e}=n;return e&&"filter: contrast(50%) opacity(50%);"});function j(n){let{params:e,languages:r}=n,o=(0,p.useSearchParams)(),a=r.find(n=>n===o.get("language")),c=[e.oj,...e.slug].join("/"),d=a?u()(()=>t(8980)("./".concat(c,"/").concat(a,".mdx")),{ssr:!1}):null;return(0,i.jsxs)(l.Wrapper,{children:[(0,i.jsxs)(l.Section,{children:[(0,i.jsx)("h1",{children:"풀이"}),r.length>0?(0,i.jsx)(h,{children:r.map(n=>(0,i.jsx)(s(),{href:"?language=".concat(n),scroll:!1,replace:!0,children:(0,i.jsx)(g,{src:"/images/languages/".concat(n,".png"),width:32,height:32,alt:n,priority:!0,disabled:n!==a})},n))}):(0,i.jsx)("p",{children:"아직 풀이가 없어요."})]}),r.length>0&&(0,i.jsx)(l.Prose,{children:d?(0,i.jsx)(d,{}):(0,i.jsx)("p",{children:"언어를 선택해주세요."})})]})}},1078:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var r=t(230),i=t(7437),o=t(1520),u=t(787),l=t(6691),a=t.n(l);function c(){let n=(0,r._)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return c=function(){return n},n}function d(){let n=(0,r._)(["\n  object-fit: cover;\n"]);return d=function(){return n},n}function f(){let n=(0,r._)(["\n  color: #ffffff;\n  font-size: var(--text-2xl);\n  margin: 0;\n"]);return f=function(){return n},n}let s=u.Z.header(c()),p=(0,u.Z)(a())(d()),x=u.Z.h1(f());function m(n){let{children:e}=n;return(0,i.jsxs)(s,{children:[(0,i.jsx)(p,{src:"/images/backdrop.jpg",alt:"Backdrop",priority:!0,fill:!0}),(0,i.jsx)(o.Container,{children:(0,i.jsx)(x,{children:e})})]})}},1520:function(n,e,t){"use strict";t.r(e),t.d(e,{Caption:function(){return g},Container:function(){return s},Description:function(){return h},Grid:function(){return m},Prose:function(){return j},Section:function(){return x},Wrapper:function(){return p}});var r=t(230),i=t(787);function o(){let n=(0,r._)(["\n  width: 1176px;\n  display: flex;\n  flex-direction: ",";\n  justify-content: center;\n  align-items: flex-start;\n  padding: 24px;\n  gap: 24px;\n  z-index: 1;\n\n  @media (max-width: 1199px) {\n    width: 100%;\n  }\n\n  @media (max-width: 809px) {\n    padding: 16px;\n    gap: 16px;\n  }\n"]);return o=function(){return n},n}function u(){let n=(0,r._)(["\n  width: ",";\n  display: flex;\n  flex-direction: ",";\n  justify-content: center;\n  align-items: flex-start;\n  gap: ",";\n\n  @media (max-width: 1199px) {\n    width: 100%;\n  }\n\n  @media (max-width: 809px) {\n    gap: ",";\n  }\n"]);return u=function(){return n},n}function l(){let n=(0,r._)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 16px;\n\n  @media (max-width: 809px) {\n    gap: 12px;\n  }\n"]);return l=function(){return n},n}function a(){let n=(0,r._)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-auto-rows: min-content;\n  gap: 24px;\n\n  @media (max-width: 809px) {\n    gap: 16px;\n  }\n"]);return a=function(){return n},n}function c(){let n=(0,r._)(["\n  font-weight: 500;\n  color: var(--text-secondary);\n"]);return c=function(){return n},n}function d(){let n=(0,r._)(["\n  font-size: 0.875rem; // 14px\n\n  @media (max-width: 809px) {\n    font-size: 0.75rem; // 12px\n  }\n"]);return d=function(){return n},n}function f(){let n=(0,r._)(["\n  width: 100%;\n\n  & > :last-child {\n    margin-bottom: 0 !important;\n  }\n\n  @media (max-width: 1199px) {\n    width: 100%;\n  }\n"]);return f=function(){return n},n}let s=i.Z.div(o(),n=>{let{row:e}=n;return e?"row":"column"}),p=i.Z.div(u(),n=>{let{column:e}=n;return e?"".concat(72*e+(e-1)*24,"px"):"100%"},n=>{let{row:e}=n;return e?"row":"column"},n=>{let{loose:e}=n;return e?"48px":"24px"},n=>{let{loose:e}=n;return e?"32px":"16px"}),x=i.Z.section(l()),m=i.Z.div(a()),h=i.Z.span(c()),g=i.Z.div(d()),j=i.Z.article(f())},8864:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return u}});let r=t(1024);t(2265);let i=r._(t(533));function o(n){return{default:(null==n?void 0:n.default)||n}}function u(n,e){let t=i.default,r={loading:n=>{let{error:e,isLoading:t,pastDelay:r}=n;return null}};"function"==typeof n&&(r.loader=n),Object.assign(r,e);let u=r.loader;return t({...r,loader:()=>null!=u?u().then(o):Promise.resolve(o(()=>null))})}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)},3699:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(n,e){for(var t in e)Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}(e,{suspense:function(){return i},NoSSR:function(){return o}}),t(1024),t(2265);let r=t(7669);function i(){let n=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw n.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,n}function o(n){let{children:e}=n;return e}},533:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return u}});let r=t(1024),i=r._(t(2265)),o=t(3699),u=function(n){let e=Object.assign({loader:null,loading:null,ssr:!0},n);function t(n){let t=e.loading,r=i.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),u=e.ssr?i.default.Fragment:o.NoSSR,l=e.lazy;return i.default.createElement(i.default.Suspense,{fallback:r},i.default.createElement(u,null,i.default.createElement(l,n)))}return e.lazy=i.default.lazy(e.loader),t.displayName="LoadableComponent",t}},4033:function(n,e,t){n.exports=t(8165)}},function(n){n.O(0,[95,691,971,596,744],function(){return n(n.s=6459)}),_N_E=n.O()}]);