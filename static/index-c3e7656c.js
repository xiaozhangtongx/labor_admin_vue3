import{bn as e,u as t,bS as o,aN as n,U as s,w as a,bx as d,R as u,bT as r,S as l,bU as i,b as c,d as m,e as p,K as b,q as y,Z as f}from"./index-f84eb1d7.js";import{t as v}from"./event-538c9b76.js";import{a as x}from"./scroll-89521e5b.js";import{P as E}from"./vnode-fdd2fca2.js";const h=e=>Array.from(e.querySelectorAll('a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])')).filter((e=>M(e)&&(e=>"fixed"!==getComputedStyle(e).position&&null!==e.offsetParent)(e))),M=e=>{if(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex"))return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return!("hidden"===e.type||"file"===e.type);case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},k=function(e,t,...o){let n;n=t.includes("mouse")||t.includes("click")?"MouseEvents":t.includes("key")?"KeyboardEvent":"HTMLEvents";const s=document.createEvent(n);return s.initEvent(t,...o),e.dispatchEvent(s),e},g=(i,c={})=>{e(i)||v("[useLockscreen]","You need to pass a ref param to this function");const m=c.ns||t("popup"),p=o((()=>m.bm("parent","hidden")));if(!n||s(document.body,p.value))return;let b=0,y=!1,f="0";const E=()=>{setTimeout((()=>{l(null==document?void 0:document.body,p.value),y&&document&&(document.body.style.width=f)}),200)};a(i,(e=>{if(!e)return void E();y=!s(document.body,p.value),y&&(f=document.body.style.width),b=x(m.namespace.value);const t=document.documentElement.clientHeight<document.body.scrollHeight,o=d(document.body,"overflowY");b>0&&(t||"scroll"===o)&&y&&(document.body.style.width=`calc(100% - ${b}px)`),u(document.body,p.value)})),r((()=>E()))},T=e=>{if(!e)return{onClick:i,onMousedown:i,onMouseup:i};let t=!1,o=!1;return{onClick:n=>{t&&o&&e(n),t=o=!1},onMousedown:e=>{t=e.target===e.currentTarget},onMouseup:e=>{o=e.target===e.currentTarget}}},w=c({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:m([String,Array,Object])},zIndex:{type:m([String,Number])}});const C=p({name:"ElOverlay",props:w,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:o,emit:n}){const s=t("overlay"),{onClick:a,onMousedown:d,onMouseup:u}=T(e.customMaskEvent?void 0:e=>{n("click",e)});return()=>e.mask?b("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:d,onMouseup:u},[y(o,"default")],E.STYLE|E.CLASS|E.PROPS,["onClick","onMouseup","onMousedown"]):f("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[y(o,"default")])}});export{C as E,g as a,h as o,k as t,T as u};
