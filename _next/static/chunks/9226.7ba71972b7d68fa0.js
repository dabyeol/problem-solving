"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9226],{1901:function(e,a,n){n.d(a,{a:function(){return l}});function l(e){return{...e}}},9226:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(5489),s=n(1901);function t(e){let a={code:"code",h2:"h2",li:"li",p:"p",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h2,{children:"문제 설명"}),"\n",(0,l.jsx)(a.p,{children:"연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다."}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"12 ⊕ 3 = 123"}),"\n",(0,l.jsx)(a.li,{children:"3 ⊕ 12 = 312"}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["양의 정수 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]}),"와 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]}),"가 주어졌을 때, ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]}),"와 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]})," 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요."]}),"\n",(0,l.jsxs)(a.p,{children:["단, ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]}),"와 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]}),"가 같다면 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]}),"를 return 합니다."]}),"\n",(0,l.jsx)(a.h2,{children:"제한사항"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["1 ≤ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]}),", ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]})," < 10,000"]}),"\n"]}),"\n",(0,l.jsx)(a.h2,{children:"입출력 예"}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"a"}),(0,l.jsx)(a.th,{children:"b"}),(0,l.jsx)(a.th,{children:"result"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"9"}),(0,l.jsx)(a.td,{children:"91"}),(0,l.jsx)(a.td,{children:"991"})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"89"}),(0,l.jsx)(a.td,{children:"8"}),(0,l.jsx)(a.td,{children:"898"})]})]})]}),"\n",(0,l.jsx)(a.h2,{children:"입출력 예 설명"}),"\n",(0,l.jsx)(a.p,{children:"입출력 예 #1"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]})," = 991 이고, ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]})," = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다."]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:"입출력 예 #2"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]})," = 898 이고, ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"b"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"b"})})})]})," ⊕ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"a"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"a"})})})]})," = 889 입니다. 둘 중 더 큰 값은 898 이므로 898을 return 합니다."]}),"\n"]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},985:function(e,a,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,n){var l,t={},i=null,h=null;for(l in void 0!==n&&(i=""+n),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(h=a.ref),a)d.call(a,l)&&!c.hasOwnProperty(l)&&(t[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps)void 0===t[l]&&(t[l]=a[l]);return{$$typeof:s,type:e,key:i,ref:h,props:t,_owner:r.current}}a.Fragment=t,a.jsx=i,a.jsxs=i},5489:function(e,a,n){e.exports=n(985)}}]);