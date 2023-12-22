"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2327],{1901:function(e,a,n){n.d(a,{a:function(){return t}});function t(e){return{...e}}},4393:function(e,a,n){n.r(a),n.d(a,{default:function(){return r}});var t=n(5489),l=n(1901);function d(e){let a={code:"code",div:"div",h2:"h2",img:"img",p:"p",pre:"pre",span:"span",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{children:"문제"}),"\n",(0,t.jsx)(a.p,{children:'흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.'}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/14681/1.png",alt:""})}),"\n",(0,t.jsx)(a.p,{children:"예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다."}),"\n",(0,t.jsx)(a.p,{children:"점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다."}),"\n",(0,t.jsx)(a.h2,{children:"입력"}),"\n",(0,t.jsx)(a.p,{children:"첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)"}),"\n",(0,t.jsx)(a.h2,{children:"출력"}),"\n",(0,t.jsx)(a.p,{children:"점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다."}),"\n",(0,t.jsx)(a.h2,{children:"예제 입력 1"}),"\n",(0,t.jsxs)(a.div,{"data-rehype-pretty-code-fragment":"",children:[(0,t.jsx)(a.pre,{className:"github-dark",tabIndex:"0","data-language":"plaintext","data-theme":"dark",children:(0,t.jsxs)(a.code,{"data-language":"plaintext","data-theme":"dark",style:{display:"grid"},children:[(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#e1e4e8"},children:"12"})}),"\n",(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#e1e4e8"},children:"5"})})]})}),(0,t.jsx)(a.pre,{className:"github-light",tabIndex:"0","data-language":"plaintext","data-theme":"light",children:(0,t.jsxs)(a.code,{"data-language":"plaintext","data-theme":"light",style:{display:"grid"},children:[(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#24292e"},children:"12"})}),"\n",(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#24292e"},children:"5"})})]})})]}),"\n",(0,t.jsx)(a.h2,{children:"예제 출력 1"}),"\n",(0,t.jsxs)(a.div,{"data-rehype-pretty-code-fragment":"",children:[(0,t.jsx)(a.pre,{className:"github-dark",tabIndex:"0","data-language":"plaintext","data-theme":"dark",children:(0,t.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",style:{display:"grid"},children:(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#e1e4e8"},children:"1"})})})}),(0,t.jsx)(a.pre,{className:"github-light",tabIndex:"0","data-language":"plaintext","data-theme":"light",children:(0,t.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",style:{display:"grid"},children:(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#24292e"},children:"1"})})})})]}),"\n",(0,t.jsx)(a.h2,{children:"예제 입력 2"}),"\n",(0,t.jsxs)(a.div,{"data-rehype-pretty-code-fragment":"",children:[(0,t.jsx)(a.pre,{className:"github-dark",tabIndex:"0","data-language":"plaintext","data-theme":"dark",children:(0,t.jsxs)(a.code,{"data-language":"plaintext","data-theme":"dark",style:{display:"grid"},children:[(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#e1e4e8"},children:"9"})}),"\n",(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#e1e4e8"},children:"-13"})})]})}),(0,t.jsx)(a.pre,{className:"github-light",tabIndex:"0","data-language":"plaintext","data-theme":"light",children:(0,t.jsxs)(a.code,{"data-language":"plaintext","data-theme":"light",style:{display:"grid"},children:[(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#24292e"},children:"9"})}),"\n",(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#24292e"},children:"-13"})})]})})]}),"\n",(0,t.jsx)(a.h2,{children:"예제 출력 2"}),"\n",(0,t.jsxs)(a.div,{"data-rehype-pretty-code-fragment":"",children:[(0,t.jsx)(a.pre,{className:"github-dark",tabIndex:"0","data-language":"plaintext","data-theme":"dark",children:(0,t.jsx)(a.code,{"data-language":"plaintext","data-theme":"dark",style:{display:"grid"},children:(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#e1e4e8"},children:"4"})})})}),(0,t.jsx)(a.pre,{className:"github-light",tabIndex:"0","data-language":"plaintext","data-theme":"light",children:(0,t.jsx)(a.code,{"data-language":"plaintext","data-theme":"light",style:{display:"grid"},children:(0,t.jsx)(a.span,{"data-line":"",children:(0,t.jsx)(a.span,{style:{color:"#24292e"},children:"4"})})})})]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},985:function(e,a,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=n(2265),l=Symbol.for("react.element"),d=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,n){var t,d={},c=null,h=null;for(t in void 0!==n&&(c=""+n),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(h=a.ref),a)r.call(a,t)&&!i.hasOwnProperty(t)&&(d[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===d[t]&&(d[t]=a[t]);return{$$typeof:l,type:e,key:c,ref:h,props:d,_owner:s.current}}a.Fragment=d,a.jsx=c,a.jsxs=c},5489:function(e,a,n){e.exports=n(985)}}]);