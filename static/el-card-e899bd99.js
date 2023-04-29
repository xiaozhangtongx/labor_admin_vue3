import{aL as e,aX as a,b as t,g as l,d as n,u as s,a as r,c as o,n as u,f as i,e as c,a4 as d,q as p,H as v,k as b,aa as m,_ as f,s as h,a0 as g,h as y,j as w,r as k,R as x,a2 as E,Z as F,aY as S,aZ as C,y as $,o as P,a_ as T,C as N,E as _,au as R,P as B,x as j,K as q,p as A,a$ as z,b0 as L,V as K,a7 as V,aV as M,b1 as O,Q as H,b2 as I,D as U,I as X,v as Y,w as Z,am as D}from"./index-93ba5881.js";import{t as Q,U as W}from"./focus-trap-c8e74f19.js";import{c as G}from"./strings-40ce1ac8.js";import{f as J}from"./el-overlay-18efe7aa.js";import{u as ee}from"./el-button-48d46b72.js";import{E as ae}from"./el-tooltip-3d29d588.js";import{_ as te}from"./index-124101df.js";import{_ as le}from"./_plugin-vue_export-helper-1b428a4d.js";const ne=(t,l)=>{const n={},s=e([]);return{children:s,addChild:e=>{n[e.uid]=e,s.value=((e,t,l)=>J(e.subTree).filter((e=>{var l;return a(e)&&(null==(l=e.type)?void 0:l.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>l[e])).filter((e=>!!e)))(t,l,n)},removeChild:e=>{delete n[e],s.value=s.value.filter((a=>a.uid!==e))}}},se=t({header:{type:String,default:""},bodyStyle:{type:l([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),re=n({name:"ElCard"});const oe=h(f(n({...re,props:se,setup(e){const a=s("card");return(e,t)=>(r(),o("div",{class:u([i(a).b(),i(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),o("div",{key:0,class:u(i(a).e("header"))},[c(e.$slots,"header",{},(()=>[d(p(e.header),1)]))],2)):v("v-if",!0),b("div",{class:u(i(a).e("body")),style:m(e.bodyStyle)},[c(e.$slots,"default")],6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]])),ue=Symbol("tabsRootContextKey"),ie=t({tabs:{type:l(Array),default:()=>g([])}}),ce="ElTabBar",de=n({name:ce});var pe=f(n({...de,props:ie,setup(e,{expose:a}){const t=e,l=y(),n=w(ue);n||Q(ce,"<el-tabs><el-tab-bar /></el-tabs>");const c=s("tabs"),d=k(),p=k(),v=()=>p.value=(()=>{let e=0,a=0;const s=["top","bottom"].includes(n.props.tabPosition)?"width":"height",r="width"===s?"x":"y",o="x"===r?"left":"top";return t.tabs.every((n=>{var r,u;const i=null==(u=null==(r=l.parent)?void 0:r.refs)?void 0:u[`tab-${n.uid}`];if(!i)return!1;if(!n.active)return!0;e=i[`offset${G(o)}`],a=i[`client${G(s)}`];const c=window.getComputedStyle(i);return"width"===s&&(t.tabs.length>1&&(a-=Number.parseFloat(c.paddingLeft)+Number.parseFloat(c.paddingRight)),e+=Number.parseFloat(c.paddingLeft)),!1})),{[s]:`${a}px`,transform:`translate${G(r)}(${e}px)`}})();return x((()=>t.tabs),(async()=>{await E(),v()}),{immediate:!0}),F(d,(()=>v())),a({ref:d,update:v}),(e,a)=>(r(),o("div",{ref_key:"barRef",ref:d,class:u([i(c).e("active-bar"),i(c).is(i(n).props.tabPosition)]),style:m(p.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const ve=t({panes:{type:l(Array),default:()=>g([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),be="ElTabNav",me=n({name:be,props:ve,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=y(),n=w(ue);n||Q(be,"<el-tabs><tab-nav /></el-tabs>");const r=s("tabs"),o=S(),u=C(),i=k(),c=k(),d=k(),p=k(),v=k(!1),b=k(0),m=k(!1),f=k(!0),h=$((()=>["top","bottom"].includes(n.props.tabPosition)?"width":"height")),g=$((()=>({transform:`translate${"width"===h.value?"X":"Y"}(-${b.value}px)`}))),A=()=>{if(!i.value)return;const e=i.value[`offset${G(h.value)}`],a=b.value;if(!a)return;const t=a>e?a-e:0;b.value=t},z=()=>{if(!i.value||!c.value)return;const e=c.value[`offset${G(h.value)}`],a=i.value[`offset${G(h.value)}`],t=b.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;b.value=l},L=async()=>{const e=c.value;if(!(v.value&&d.value&&i.value&&e))return;await E();const a=d.value.querySelector(".is-active");if(!a)return;const t=i.value,l=["top","bottom"].includes(n.props.tabPosition),s=a.getBoundingClientRect(),r=t.getBoundingClientRect(),o=l?e.offsetWidth-r.width:e.offsetHeight-r.height,u=b.value;let p=u;l?(s.left<r.left&&(p=u-(r.left-s.left)),s.right>r.right&&(p=u+s.right-r.right)):(s.top<r.top&&(p=u-(r.top-s.top)),s.bottom>r.bottom&&(p=u+(s.bottom-r.bottom))),p=Math.max(p,0),b.value=Math.min(p,o)},K=()=>{var a;if(!c.value||!i.value)return;e.stretch&&(null==(a=p.value)||a.update());const t=c.value[`offset${G(h.value)}`],l=i.value[`offset${G(h.value)}`],n=b.value;l<t?(v.value=v.value||{},v.value.prev=n,v.value.next=n+l<t,t-n<l&&(b.value=t-l)):(v.value=!1,n>0&&(b.value=0))},V=e=>{const a=e.code,{up:t,down:l,left:n,right:s}=q;if(![t,l,n,s].includes(a))return;const r=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),o=r.indexOf(e.target);let u;u=a===n||a===t?0===o?r.length-1:o-1:o<r.length-1?o+1:0,r[u].focus({preventScroll:!0}),r[u].click(),M()},M=()=>{f.value&&(m.value=!0)},O=()=>m.value=!1;return x(o,(e=>{"hidden"===e?f.value=!1:"visible"===e&&setTimeout((()=>f.value=!0),50)})),x(u,(e=>{e?setTimeout((()=>f.value=!0),50):f.value=!1})),F(d,K),P((()=>setTimeout((()=>L()),0))),T((()=>K())),a({scrollToActiveTab:L,removeFocus:O}),x((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const a=v.value?[N("span",{class:[r.e("nav-prev"),r.is("disabled",!v.value.prev)],onClick:A},[N(_,null,{default:()=>[N(R,null,null)]})]),N("span",{class:[r.e("nav-next"),r.is("disabled",!v.value.next)],onClick:z},[N(_,null,{default:()=>[N(B,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var s,o,u,i;const c=a.uid,d=a.props.disabled,p=null!=(o=null!=(s=a.props.name)?s:a.index)?o:`${l}`,v=!d&&(a.isClosable||e.editable);a.index=`${l}`;const b=v?N(_,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[N(j,null,null)]}):null,f=(null==(i=(u=a.slots).label)?void 0:i.call(u))||a.props.label,h=!d&&a.active?0:-1;return N("div",{ref:`tab-${c}`,class:[r.e("item"),r.is(n.props.tabPosition),r.is("active",a.active),r.is("disabled",d),r.is("closable",v),r.is("focus",m.value)],id:`tab-${p}`,key:`tab-${c}`,"aria-controls":`pane-${p}`,role:"tab","aria-selected":a.active,tabindex:h,onFocus:()=>M(),onBlur:()=>O(),onClick:e=>{O(),t("tabClick",a,p,e)},onKeydown:e=>{!v||e.code!==q.delete&&e.code!==q.backspace||t("tabRemove",a,e)}},[f,b])}));return N("div",{ref:d,class:[r.e("nav-wrap"),r.is("scrollable",!!v.value),r.is(n.props.tabPosition)]},[a,N("div",{class:r.e("nav-scroll"),ref:i},[N("div",{class:[r.e("nav"),r.is(n.props.tabPosition),r.is("stretch",e.stretch&&["top","bottom"].includes(n.props.tabPosition))],ref:c,style:g.value,role:"tablist",onKeydown:V},[e.type?null:N(pe,{ref:p,tabs:[...e.panes]},null),l])])])}}}),fe=t({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:l(Function),default:()=>!0},stretch:Boolean}),he=e=>K(e)||V(e);var ge=n({name:"ElTabs",props:fe,emits:{[W]:e=>he(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>he(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>he(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var n,r;const o=s("tabs"),{children:u,addChild:i,removeChild:d}=ne(y(),"ElTabPane"),p=k(),v=k(null!=(r=null!=(n=e.modelValue)?n:e.activeName)?r:"0"),b=async t=>{var l,n,s;if(v.value!==t&&!L(t))try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,v.value))&&((e=>{v.value=e,a(W,e),a("tabChange",e)})(t),null==(s=null==(n=p.value)?void 0:n.removeFocus)||s.call(n))}catch(r){}},m=(e,t,l)=>{e.props.disabled||(b(t),a("tabClick",e,l))},f=(e,t)=>{e.props.disabled||L(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},h=()=>{a("edit",void 0,"add"),a("tabAdd")};return ee({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},$((()=>!!e.activeName))),x((()=>e.activeName),(e=>b(e))),x((()=>e.modelValue),(e=>b(e))),x(v,(async()=>{var e;await E(),null==(e=p.value)||e.scrollToActiveTab()})),A(ue,{props:e,currentName:v,registerPane:i,unregisterPane:d}),l({currentName:v}),()=>{const a=e.editable||e.addable?N("span",{class:o.e("new-tab"),tabindex:"0",onClick:h,onKeydown:e=>{e.code===q.enter&&h()}},[N(_,{class:o.is("icon-plus")},{default:()=>[N(z,null,null)]})]):null,l=N("div",{class:[o.e("header"),o.is(e.tabPosition)]},[a,N(me,{ref:p,currentName:v.value,editable:e.editable,type:e.type,panes:u.value,stretch:e.stretch,onTabClick:m,onTabRemove:f},null)]),n=N("div",{class:o.e("content")},[c(t,"default")]);return N("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:"card"===e.type,[o.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,n]:[n,l]])}}});const ye=t({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),we=["id","aria-hidden","aria-labelledby"],ke="ElTabPane",xe=n({name:ke});var Ee=f(n({...xe,props:ye,setup(e){const a=e,t=y(),l=M(),n=w(ue);n||Q(ke,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const d=s("tab-pane"),p=k(),b=$((()=>a.closable||n.props.closable)),m=O((()=>{var e;return n.currentName.value===(null!=(e=a.name)?e:p.value)})),f=k(m.value),h=$((()=>{var e;return null!=(e=a.name)?e:p.value})),g=O((()=>!a.lazy||f.value||m.value));x(m,(e=>{e&&(f.value=!0)}));const E=H({uid:t.uid,slots:l,props:a,paneName:h,active:m,index:p,isClosable:b});return P((()=>{n.registerPane(E)})),I((()=>{n.unregisterPane(E.uid)})),(e,a)=>i(g)?U((r(),o("div",{key:0,id:`pane-${i(h)}`,class:u(i(d).b()),role:"tabpanel","aria-hidden":!i(m),"aria-labelledby":`tab-${i(h)}`},[c(e.$slots,"default")],10,we)),[[X,i(m)]]):v("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const Fe=h(ge,{TabPane:Ee}),Se=Y(Ee),Ce=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],$e=(()=>{if("undefined"==typeof document)return!1;const e=Ce[0],a={};for(const t of Ce){if((null==t?void 0:t[1])in document){for(const[l,n]of t.entries())a[e[l]]=n;return a}}return!1})(),Pe={change:$e.fullscreenchange,error:$e.fullscreenerror};let Te={request:(e=document.documentElement,a)=>new Promise(((t,l)=>{const n=()=>{Te.off("change",n),t()};Te.on("change",n);const s=e[$e.requestFullscreen](a);s instanceof Promise&&s.then(n).catch(l)})),exit:()=>new Promise(((e,a)=>{if(!Te.isFullscreen)return void e();const t=()=>{Te.off("change",t),e()};Te.on("change",t);const l=document[$e.exitFullscreen]();l instanceof Promise&&l.then(t).catch(a)})),toggle:(e,a)=>Te.isFullscreen?Te.exit():Te.request(e,a),onchange(e){Te.on("change",e)},onerror(e){Te.on("error",e)},on(e,a){const t=Pe[e];t&&document.addEventListener(t,a,!1)},off(e,a){const t=Pe[e];t&&document.removeEventListener(t,a,!1)},raw:$e};Object.defineProperties(Te,{isFullscreen:{get:()=>Boolean(document[$e.fullscreenElement])},element:{enumerable:!0,get:()=>document[$e.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[$e.fullscreenEnabled])}}),$e||(Te={isEnabled:!1});const Ne=Te,_e=le(n({__name:"index",props:{element:{type:String,default:"html"},openTips:{type:String,default:"全屏"},exitTips:{type:String,default:"退出全屏"}},setup(e){const a=e,t=k(a.openTips),l=k(!1),n=()=>{const e=document.querySelector(a.element)||void 0;Ne.isEnabled?Ne.toggle(e):D.warning("您的浏览器无法工作")},s=()=>{l.value=Ne.isFullscreen,t.value=Ne.isFullscreen?a.exitTips:a.openTips};return Ne.on("change",s),I((()=>{Ne.isEnabled&&Ne.off("change",s)})),(e,a)=>{const s=te,u=ae;return r(),o("div",{onClick:n},[N(u,{effect:"dark",content:t.value,placement:"bottom"},{default:Z((()=>[N(s,{name:l.value?"i-ri-fullscreen-exit-fill":"i-ri-fullscreen-fill"},null,8,["name"])])),_:1},8,["content"])])}}}),[["__scopeId","data-v-1fab323e"]]);export{oe as E,_e as _,Se as a,Fe as b};
