"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6738],{1901:function(e,a,n){n.d(a,{a:function(){return l}});function l(e){return{...e}}},6738:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(5489),s=n(1901);function t(e){let a={code:"code",h2:"h2",li:"li",p:"p",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h2,{children:"문제 설명"}),"\n",(0,l.jsxs)(a.p,{children:["정수 배열 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog"})})})]}),"가 주어집니다. 처음에 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog[0]"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog[0]"})})})]}),'에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.']}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:'"w" : 수에 1을 더한다.'}),"\n",(0,l.jsx)(a.li,{children:'"s" : 수에 1을 뺀다.'}),"\n",(0,l.jsx)(a.li,{children:'"d" : 수에 10을 더한다.'}),"\n",(0,l.jsx)(a.li,{children:'"a" : 수에 10을 뺀다.'}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog"})})})]}),"입니다. 즉, ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog[i]"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog[i]"})})})]}),"는 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog[0]"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog[0]"})})})]}),"로부터 총 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"i"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"i"})})})]}),"번의 조작을 가한 결과가 저장되어 있습니다."]}),"\n",(0,l.jsxs)(a.p,{children:["주어진 정수 배열 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog"})})})]}),"에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요."]}),"\n",(0,l.jsx)(a.h2,{children:"제한사항"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["2 ≤ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog"})})})]}),"의 길이 ≤ 100,000","\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["-100,000 ≤ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog[0]"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog[0]"})})})]})," ≤ 100,000"]}),"\n",(0,l.jsxs)(a.li,{children:["1 ≤ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"i"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"i"})})})]})," ≤ ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog"})})})]}),"의 길이인 모든 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"i"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"i"})})})]}),"에 대해 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"|numLog[i] - numLog[i - 1]|"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"|numLog[i] - numLog[i - 1]|"})})})]}),"의 값은 1 또는 10입니다."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(a.h2,{children:"입출력 예"}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"numLog"}),(0,l.jsx)(a.th,{children:"result"})]})}),(0,l.jsx)(a.tbody,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]"}),(0,l.jsx)(a.td,{children:'"wsdawsdassw"'})]})})]}),"\n",(0,l.jsx)(a.h2,{children:"입출력 예 설명"}),"\n",(0,l.jsx)(a.p,{children:"입출력 예 #1"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:['result인 "wsdawsdassw"를 따라 ',(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog[0]"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog[0]"})})})]}),"에서부터 시작해 조작을 하면 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog"})})})]}),'의 값과 순서대로 일치합니다. 따라서 "wsdawsdassw"를 return 합니다.']}),"\n"]}),"\n",(0,l.jsx)(a.h2,{children:"Hint"}),"\n",(0,l.jsxs)(a.p,{children:['"수 조작하기 1" 문제의 ',(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"n"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"n"})})})]}),"값이 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog[0]"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog[0]"})})})]}),"에 해당하며, 이 문제에서 주어진 ",(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"numLog"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"numLog"})})})]}),'에 따라 "수 조작하기 1" 문제의 ',(0,l.jsxs)(a.span,{"data-rehype-pretty-code-fragment":"",children:[(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#e1e4e8"},children:"control"})})}),(0,l.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",children:(0,l.jsx)(a.span,{className:"line",children:(0,l.jsx)(a.span,{style:{color:"#24292e"},children:"control"})})})]}),"을 구하는 문제라고 이해할 수 있습니다."]}),"\n",(0,l.jsx)(a.p,{children:'입출력 예 #1은 "수 조작하기 1" 문제의 입출력 예 #1과 같은 예시이므로 참고하시기 바랍니다.'})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},985:function(e,a,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,n){var l,t={},i=null,h=null;for(l in void 0!==n&&(i=""+n),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(h=a.ref),a)d.call(a,l)&&!c.hasOwnProperty(l)&&(t[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps)void 0===t[l]&&(t[l]=a[l]);return{$$typeof:s,type:e,key:i,ref:h,props:t,_owner:r.current}}a.Fragment=t,a.jsx=i,a.jsxs=i},5489:function(e,a,n){e.exports=n(985)}}]);