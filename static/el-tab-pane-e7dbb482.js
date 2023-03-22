import{aU as e,bP as a,b as t,d as l,a4 as s,e as o,y as n,z as r,u as i,r as u,w as d,a6 as c,a2 as v,o as p,j as b,s as m,k as f,n as h,_ as y,cm as g,cn as x,f as w,x as C,bw as $,K as k,E as P,ay as N,W as T,H as B,Q as S,v as E,co as R,q as A,bk as F,g as j,i as _,bm as K,cp as L,X as z,ao as q,L as U,O as V,N as H,t as M,D as O}from"./index-f84eb1d7.js";import{t as W,U as X}from"./event-538c9b76.js";import{c as D}from"./strings-26cd39f6.js";import{f as Q}from"./vnode-fdd2fca2.js";import{u as Y}from"./index-6d810c7d.js";const G=(t,l)=>{const s={},o=e([]);return{children:o,addChild:e=>{s[e.uid]=e,o.value=((e,t,l)=>Q(e.subTree).filter((e=>{var l;return a(e)&&(null==(l=e.type)?void 0:l.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>l[e])).filter((e=>!!e)))(t,l,s)},removeChild:e=>{delete s[e],o.value=o.value.filter((a=>a.uid!==e))}}},I=Symbol("tabsRootContextKey"),J=t({tabs:{type:l(Array),default:()=>s([])}}),Z="ElTabBar",ee=o({name:Z});var ae=y(o({...ee,props:J,setup(e,{expose:a}){const t=e,l=n(),s=r(I);s||W(Z,"<el-tabs><el-tab-bar /></el-tabs>");const o=i("tabs"),y=u(),g=u(),x=()=>g.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((s=>{var n,i;const u=null==(i=null==(n=l.parent)?void 0:n.refs)?void 0:i[`tab-${s.uid}`];if(!u)return!1;if(!s.active)return!0;e=u[`offset${D(r)}`],a=u[`client${D(o)}`];const d=window.getComputedStyle(u);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(d.paddingLeft)+Number.parseFloat(d.paddingRight)),e+=Number.parseFloat(d.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${D(n)}(${e}px)`}})();return d((()=>t.tabs),(async()=>{await c(),x()}),{immediate:!0}),v(y,(()=>x())),a({ref:y,update:x}),(e,a)=>(p(),b("div",{ref_key:"barRef",ref:y,class:m([f(o).e("active-bar"),f(o).is(f(s).props.tabPosition)]),style:h(g.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const te=t({panes:{type:l(Array),default:()=>s([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),le="ElTabNav",se=o({name:le,props:te,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=n(),s=r(I);s||W(le,"<el-tabs><tab-nav /></el-tabs>");const o=i("tabs"),p=g(),b=x(),m=u(),f=u(),h=u(),y=u(),E=u(!1),R=u(0),A=u(!1),F=u(!0),j=w((()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height")),_=w((()=>({transform:`translate${"width"===j.value?"X":"Y"}(-${R.value}px)`}))),K=()=>{if(!m.value)return;const e=m.value[`offset${D(j.value)}`],a=R.value;if(!a)return;const t=a>e?a-e:0;R.value=t},L=()=>{if(!m.value||!f.value)return;const e=f.value[`offset${D(j.value)}`],a=m.value[`offset${D(j.value)}`],t=R.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;R.value=l},z=async()=>{const e=f.value;if(!(E.value&&h.value&&m.value&&e))return;await c();const a=h.value.querySelector(".is-active");if(!a)return;const t=m.value,l=["top","bottom"].includes(s.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=R.value;let u=i;l?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),R.value=Math.min(u,r)},q=()=>{var a;if(!f.value||!m.value)return;e.stretch&&(null==(a=y.value)||a.update());const t=f.value[`offset${D(j.value)}`],l=m.value[`offset${D(j.value)}`],s=R.value;l<t?(E.value=E.value||{},E.value.prev=s,E.value.next=s+l<t,t-s<l&&(R.value=t-l)):(E.value=!1,s>0&&(R.value=0))},U=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=S;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),V()},V=()=>{F.value&&(A.value=!0)},H=()=>A.value=!1;return d(p,(e=>{"hidden"===e?F.value=!1:"visible"===e&&setTimeout((()=>F.value=!0),50)})),d(b,(e=>{e?setTimeout((()=>F.value=!0),50):F.value=!1})),v(h,q),C((()=>setTimeout((()=>z()),0))),$((()=>q())),a({scrollToActiveTab:z,removeFocus:H}),d((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const a=E.value?[k("span",{class:[o.e("nav-prev"),o.is("disabled",!E.value.prev)],onClick:K},[k(P,null,{default:()=>[k(N,null,null)]})]),k("span",{class:[o.e("nav-next"),o.is("disabled",!E.value.next)],onClick:L},[k(P,null,{default:()=>[k(T,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var n,r,i,u;const d=a.uid,c=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:`${l}`,p=!c&&(a.isClosable||e.editable);a.index=`${l}`;const b=p?k(P,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[k(B,null,null)]}):null,m=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,f=!c&&a.active?0:-1;return k("div",{ref:`tab-${d}`,class:[o.e("item"),o.is(s.props.tabPosition),o.is("active",a.active),o.is("disabled",c),o.is("closable",p),o.is("focus",A.value)],id:`tab-${v}`,key:`tab-${d}`,"aria-controls":`pane-${v}`,role:"tab","aria-selected":a.active,tabindex:f,onFocus:()=>V(),onBlur:()=>H(),onClick:e=>{H(),t("tabClick",a,v,e)},onKeydown:e=>{!p||e.code!==S.delete&&e.code!==S.backspace||t("tabRemove",a,e)}},[m,b])}));return k("div",{ref:h,class:[o.e("nav-wrap"),o.is("scrollable",!!E.value),o.is(s.props.tabPosition)]},[a,k("div",{class:o.e("nav-scroll"),ref:m},[k("div",{class:[o.e("nav"),o.is(s.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:f,style:_.value,role:"tablist",onKeydown:U},[e.type?null:k(ae,{ref:y,tabs:[...e.panes]},null),l])])])}}}),oe=t({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:l(Function),default:()=>!0},stretch:Boolean}),ne=e=>j(e)||_(e);var re=o({name:"ElTabs",props:oe,emits:{[X]:e=>ne(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ne(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ne(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s,o;const r=i("tabs"),{children:v,addChild:p,removeChild:b}=G(n(),"ElTabPane"),m=u(),f=u(null!=(o=null!=(s=e.modelValue)?s:e.activeName)?o:"0"),h=async t=>{var l,s,o;if(f.value!==t&&!F(t))try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,f.value))&&((e=>{f.value=e,a(X,e),a("tabChange",e)})(t),null==(o=null==(s=m.value)?void 0:s.removeFocus)||o.call(s))}catch(n){}},y=(e,t,l)=>{e.props.disabled||(h(t),a("tabClick",e,l))},g=(e,t)=>{e.props.disabled||F(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},x=()=>{a("edit",void 0,"add"),a("tabAdd")};return Y({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},w((()=>!!e.activeName))),d((()=>e.activeName),(e=>h(e))),d((()=>e.modelValue),(e=>h(e))),d(f,(async()=>{var e;await c(),null==(e=m.value)||e.scrollToActiveTab()})),E(I,{props:e,currentName:f,registerPane:p,unregisterPane:b}),l({currentName:f}),()=>{const a=e.editable||e.addable?k("span",{class:r.e("new-tab"),tabindex:"0",onClick:x,onKeydown:e=>{e.code===S.enter&&x()}},[k(P,{class:r.is("icon-plus")},{default:()=>[k(R,null,null)]})]):null,l=k("div",{class:[r.e("header"),r.is(e.tabPosition)]},[a,k(se,{ref:m,currentName:f.value,editable:e.editable,type:e.type,panes:v.value,stretch:e.stretch,onTabClick:y,onTabRemove:g},null)]),s=k("div",{class:r.e("content")},[A(t,"default")]);return k("div",{class:[r.b(),r.m(e.tabPosition),{[r.m("card")]:"card"===e.type,[r.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,s]:[s,l]])}}});const ie=t({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ue=["id","aria-hidden","aria-labelledby"],de="ElTabPane",ce=o({name:de});var ve=y(o({...ce,props:ie,setup(e){const a=e,t=n(),l=K(),s=r(I);s||W(de,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=i("tab-pane"),c=u(),v=w((()=>a.closable||s.props.closable)),h=L((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:c.value)})),y=u(h.value),g=w((()=>{var e;return null!=(e=a.name)?e:c.value})),x=L((()=>!a.lazy||y.value||h.value));d(h,(e=>{e&&(y.value=!0)}));const $=z({uid:t.uid,slots:l,props:a,paneName:g,active:h,index:c,isClosable:v});return C((()=>{s.registerPane($)})),q((()=>{s.unregisterPane($.uid)})),(e,a)=>f(x)?U((p(),b("div",{key:0,id:`pane-${f(g)}`,class:m(f(o).b()),role:"tabpanel","aria-hidden":!f(h),"aria-labelledby":`tab-${f(g)}`},[A(e.$slots,"default")],10,ue)),[[V,f(h)]]):H("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const pe=M(re,{TabPane:ve}),be=O(ve);export{be as E,pe as a};
