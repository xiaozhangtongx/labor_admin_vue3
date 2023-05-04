import{aL as e,bw as t,b as a,g as l,a0 as n,d as s,h as r,j as o,u as i,r as u,R as c,a2 as d,Z as p,a as b,c as v,n as m,f,aa as h,_ as g,bx as y,by as w,y as x,o as E,aX as F,C as k,E as C,au as S,P,x as T,K as $,p as N,bz as B,e as _,a_ as R,V as j,a7 as q,bA as A,bB as z,Q as L,bl as K,D as M,I as V,H as D,s as H,v as I,w as O,an as U}from"./index-54d43a61.js";import{t as X,U as J}from"./focus-trap-76f55607.js";import{c as Q}from"./strings-db06011e.js";import{f as W}from"./el-overlay-8070be0f.js";import{u as Y}from"./el-button-4e282e2a.js";import"./el-tooltip-4ed993c7.js";import{E as Z}from"./el-popper-f625212c.js";import{_ as G}from"./index-d4d16db7.js";import{_ as ee}from"./_plugin-vue_export-helper-1b428a4d.js";const te=(a,l)=>{const n={},s=e([]);return{children:s,addChild:e=>{n[e.uid]=e,s.value=((e,a,l)=>W(e.subTree).filter((e=>{var l;return t(e)&&(null==(l=e.type)?void 0:l.name)===a&&!!e.component})).map((e=>e.component.uid)).map((e=>l[e])).filter((e=>!!e)))(a,l,n)},removeChild:e=>{delete n[e],s.value=s.value.filter((t=>t.uid!==e))}}},ae=Symbol("tabsRootContextKey"),le=a({tabs:{type:l(Array),default:()=>n([])}}),ne="ElTabBar",se=s({name:ne});var re=g(s({...se,props:le,setup(e,{expose:t}){const a=e,l=r(),n=o(ae);n||X(ne,"<el-tabs><el-tab-bar /></el-tabs>");const s=i("tabs"),g=u(),y=u(),w=()=>y.value=(()=>{let e=0,t=0;const s=["top","bottom"].includes(n.props.tabPosition)?"width":"height",r="width"===s?"x":"y",o="x"===r?"left":"top";return a.tabs.every((n=>{var r,i;const u=null==(i=null==(r=l.parent)?void 0:r.refs)?void 0:i[`tab-${n.uid}`];if(!u)return!1;if(!n.active)return!0;e=u[`offset${Q(o)}`],t=u[`client${Q(s)}`];const c=window.getComputedStyle(u);return"width"===s&&(a.tabs.length>1&&(t-=Number.parseFloat(c.paddingLeft)+Number.parseFloat(c.paddingRight)),e+=Number.parseFloat(c.paddingLeft)),!1})),{[s]:`${t}px`,transform:`translate${Q(r)}(${e}px)`}})();return c((()=>a.tabs),(async()=>{await d(),w()}),{immediate:!0}),p(g,(()=>w())),t({ref:g,update:w}),(e,t)=>(b(),v("div",{ref_key:"barRef",ref:g,class:m([f(s).e("active-bar"),f(s).is(f(n).props.tabPosition)]),style:h(y.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const oe=a({panes:{type:l(Array),default:()=>n([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),ie="ElTabNav",ue=s({name:ie,props:oe,emits:{tabClick:(e,t,a)=>a instanceof Event,tabRemove:(e,t)=>t instanceof Event},setup(e,{expose:t,emit:a}){const l=r(),n=o(ae);n||X(ie,"<el-tabs><tab-nav /></el-tabs>");const s=i("tabs"),b=y(),v=w(),m=u(),f=u(),h=u(),g=u(),N=u(!1),B=u(0),_=u(!1),R=u(!0),j=x((()=>["top","bottom"].includes(n.props.tabPosition)?"width":"height")),q=x((()=>({transform:`translate${"width"===j.value?"X":"Y"}(-${B.value}px)`}))),A=()=>{if(!m.value)return;const e=m.value[`offset${Q(j.value)}`],t=B.value;if(!t)return;const a=t>e?t-e:0;B.value=a},z=()=>{if(!m.value||!f.value)return;const e=f.value[`offset${Q(j.value)}`],t=m.value[`offset${Q(j.value)}`],a=B.value;if(e-a<=t)return;const l=e-a>2*t?a+t:e-t;B.value=l},L=async()=>{const e=f.value;if(!(N.value&&h.value&&m.value&&e))return;await d();const t=h.value.querySelector(".is-active");if(!t)return;const a=m.value,l=["top","bottom"].includes(n.props.tabPosition),s=t.getBoundingClientRect(),r=a.getBoundingClientRect(),o=l?e.offsetWidth-r.width:e.offsetHeight-r.height,i=B.value;let u=i;l?(s.left<r.left&&(u=i-(r.left-s.left)),s.right>r.right&&(u=i+s.right-r.right)):(s.top<r.top&&(u=i-(r.top-s.top)),s.bottom>r.bottom&&(u=i+(s.bottom-r.bottom))),u=Math.max(u,0),B.value=Math.min(u,o)},K=()=>{var t;if(!f.value||!m.value)return;e.stretch&&(null==(t=g.value)||t.update());const a=f.value[`offset${Q(j.value)}`],l=m.value[`offset${Q(j.value)}`],n=B.value;l<a?(N.value=N.value||{},N.value.prev=n,N.value.next=n+l<a,a-n<l&&(B.value=a-l)):(N.value=!1,n>0&&(B.value=0))},M=e=>{const t=e.code,{up:a,down:l,left:n,right:s}=$;if(![a,l,n,s].includes(t))return;const r=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),o=r.indexOf(e.target);let i;i=t===n||t===a?0===o?r.length-1:o-1:o<r.length-1?o+1:0,r[i].focus({preventScroll:!0}),r[i].click(),V()},V=()=>{R.value&&(_.value=!0)},D=()=>_.value=!1;return c(b,(e=>{"hidden"===e?R.value=!1:"visible"===e&&setTimeout((()=>R.value=!0),50)})),c(v,(e=>{e?setTimeout((()=>R.value=!0),50):R.value=!1})),p(h,K),E((()=>setTimeout((()=>L()),0))),F((()=>K())),t({scrollToActiveTab:L,removeFocus:D}),c((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const t=N.value?[k("span",{class:[s.e("nav-prev"),s.is("disabled",!N.value.prev)],onClick:A},[k(C,null,{default:()=>[k(S,null,null)]})]),k("span",{class:[s.e("nav-next"),s.is("disabled",!N.value.next)],onClick:z},[k(C,null,{default:()=>[k(P,null,null)]})])]:null,l=e.panes.map(((t,l)=>{var r,o,i,u;const c=t.uid,d=t.props.disabled,p=null!=(o=null!=(r=t.props.name)?r:t.index)?o:`${l}`,b=!d&&(t.isClosable||e.editable);t.index=`${l}`;const v=b?k(C,{class:"is-icon-close",onClick:e=>a("tabRemove",t,e)},{default:()=>[k(T,null,null)]}):null,m=(null==(u=(i=t.slots).label)?void 0:u.call(i))||t.props.label,f=!d&&t.active?0:-1;return k("div",{ref:`tab-${c}`,class:[s.e("item"),s.is(n.props.tabPosition),s.is("active",t.active),s.is("disabled",d),s.is("closable",b),s.is("focus",_.value)],id:`tab-${p}`,key:`tab-${c}`,"aria-controls":`pane-${p}`,role:"tab","aria-selected":t.active,tabindex:f,onFocus:()=>V(),onBlur:()=>D(),onClick:e=>{D(),a("tabClick",t,p,e)},onKeydown:e=>{!b||e.code!==$.delete&&e.code!==$.backspace||a("tabRemove",t,e)}},[m,v])}));return k("div",{ref:h,class:[s.e("nav-wrap"),s.is("scrollable",!!N.value),s.is(n.props.tabPosition)]},[t,k("div",{class:s.e("nav-scroll"),ref:m},[k("div",{class:[s.e("nav"),s.is(n.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(n.props.tabPosition))],ref:f,style:q.value,role:"tablist",onKeydown:M},[e.type?null:k(re,{ref:g,tabs:[...e.panes]},null),l])])])}}}),ce=a({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:l(Function),default:()=>!0},stretch:Boolean}),de=e=>j(e)||q(e);var pe=s({name:"ElTabs",props:ce,emits:{[J]:e=>de(e),tabClick:(e,t)=>t instanceof Event,tabChange:e=>de(e),edit:(e,t)=>["remove","add"].includes(t),tabRemove:e=>de(e),tabAdd:()=>!0},setup(e,{emit:t,slots:a,expose:l}){var n,s;const o=i("tabs"),{children:p,addChild:b,removeChild:v}=te(r(),"ElTabPane"),m=u(),f=u(null!=(s=null!=(n=e.modelValue)?n:e.activeName)?s:"0"),h=async a=>{var l,n,s;if(f.value!==a&&!R(a))try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,a,f.value))&&((e=>{f.value=e,t(J,e),t("tabChange",e)})(a),null==(s=null==(n=m.value)?void 0:n.removeFocus)||s.call(n))}catch(r){}},g=(e,a,l)=>{e.props.disabled||(h(a),t("tabClick",e,l))},y=(e,a)=>{e.props.disabled||R(e.props.name)||(a.stopPropagation(),t("edit",e.props.name,"remove"),t("tabRemove",e.props.name))},w=()=>{t("edit",void 0,"add"),t("tabAdd")};return Y({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},x((()=>!!e.activeName))),c((()=>e.activeName),(e=>h(e))),c((()=>e.modelValue),(e=>h(e))),c(f,(async()=>{var e;await d(),null==(e=m.value)||e.scrollToActiveTab()})),N(ae,{props:e,currentName:f,registerPane:b,unregisterPane:v}),l({currentName:f}),()=>{const t=e.editable||e.addable?k("span",{class:o.e("new-tab"),tabindex:"0",onClick:w,onKeydown:e=>{e.code===$.enter&&w()}},[k(C,{class:o.is("icon-plus")},{default:()=>[k(B,null,null)]})]):null,l=k("div",{class:[o.e("header"),o.is(e.tabPosition)]},[t,k(ue,{ref:m,currentName:f.value,editable:e.editable,type:e.type,panes:p.value,stretch:e.stretch,onTabClick:g,onTabRemove:y},null)]),n=k("div",{class:o.e("content")},[_(a,"default")]);return k("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:"card"===e.type,[o.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,n]:[n,l]])}}});const be=a({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ve=["id","aria-hidden","aria-labelledby"],me="ElTabPane",fe=s({name:me});var he=g(s({...fe,props:be,setup(e){const t=e,a=r(),l=A(),n=o(ae);n||X(me,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const s=i("tab-pane"),d=u(),p=x((()=>t.closable||n.props.closable)),h=z((()=>{var e;return n.currentName.value===(null!=(e=t.name)?e:d.value)})),g=u(h.value),y=x((()=>{var e;return null!=(e=t.name)?e:d.value})),w=z((()=>!t.lazy||g.value||h.value));c(h,(e=>{e&&(g.value=!0)}));const F=L({uid:a.uid,slots:l,props:t,paneName:y,active:h,index:d,isClosable:p});return E((()=>{n.registerPane(F)})),K((()=>{n.unregisterPane(F.uid)})),(e,t)=>f(w)?M((b(),v("div",{key:0,id:`pane-${f(y)}`,class:m(f(s).b()),role:"tabpanel","aria-hidden":!f(h),"aria-labelledby":`tab-${f(y)}`},[_(e.$slots,"default")],10,ve)),[[V,f(h)]]):D("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ge=H(pe,{TabPane:he}),ye=I(he),we=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],xe=(()=>{if("undefined"==typeof document)return!1;const e=we[0],t={};for(const a of we){if((null==a?void 0:a[1])in document){for(const[l,n]of a.entries())t[e[l]]=n;return t}}return!1})(),Ee={change:xe.fullscreenchange,error:xe.fullscreenerror};let Fe={request:(e=document.documentElement,t)=>new Promise(((a,l)=>{const n=()=>{Fe.off("change",n),a()};Fe.on("change",n);const s=e[xe.requestFullscreen](t);s instanceof Promise&&s.then(n).catch(l)})),exit:()=>new Promise(((e,t)=>{if(!Fe.isFullscreen)return void e();const a=()=>{Fe.off("change",a),e()};Fe.on("change",a);const l=document[xe.exitFullscreen]();l instanceof Promise&&l.then(a).catch(t)})),toggle:(e,t)=>Fe.isFullscreen?Fe.exit():Fe.request(e,t),onchange(e){Fe.on("change",e)},onerror(e){Fe.on("error",e)},on(e,t){const a=Ee[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=Ee[e];a&&document.removeEventListener(a,t,!1)},raw:xe};Object.defineProperties(Fe,{isFullscreen:{get:()=>Boolean(document[xe.fullscreenElement])},element:{enumerable:!0,get:()=>document[xe.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[xe.fullscreenEnabled])}}),xe||(Fe={isEnabled:!1});const ke=Fe,Ce=ee(s({__name:"index",props:{element:{type:String,default:"html"},openTips:{type:String,default:"全屏"},exitTips:{type:String,default:"退出全屏"}},setup(e){const t=e,a=u(t.openTips),l=u(!1),n=()=>{const e=document.querySelector(t.element)||void 0;ke.isEnabled?ke.toggle(e):U.warning("您的浏览器无法工作")},s=()=>{l.value=ke.isFullscreen,a.value=ke.isFullscreen?t.exitTips:t.openTips};return ke.on("change",s),K((()=>{ke.isEnabled&&ke.off("change",s)})),(e,t)=>{const s=G,r=Z;return b(),v("div",{onClick:n},[k(r,{effect:"dark",content:a.value,placement:"bottom"},{default:O((()=>[k(s,{name:l.value?"i-ri-fullscreen-exit-fill":"i-ri-fullscreen-fill"},null,8,["name"])])),_:1},8,["content"])])}}}),[["__scopeId","data-v-1fab323e"]]);export{ye as E,Ce as _,ge as a};
