import{D as e,b0 as o,i as t,bC as n,u as l,bK as a,aQ as s,U as u,Y as d,bL as c,R as r,bM as i,S as p,aV as f,b as y,j as m,d as v,G as E,g as b,$ as T,a as S,aa as C,k as A,a$ as h,r as x,bN as M,F as g,K as D,a8 as I,o as N,bO as L,a2 as B}from"./index-3b6e6a2e.js";import{t as k,U as O}from"./focus-trap-b26888f9.js";import{a as F}from"./index-785a425d.js";import{a as P}from"./scroll-efe5f2e1.js";const R=e=>Array.from(e.querySelectorAll('a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])')).filter((e=>w(e)&&(e=>"fixed"!==getComputedStyle(e).position&&null!==e.offsetParent)(e))),w=e=>{if(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex"))return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return!("hidden"===e.type||"file"===e.type);case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},Y=function(e,o,...t){let n;n=o.includes("mouse")||o.includes("click")?"MouseEvents":o.includes("key")?"KeyboardEvent":"HTMLEvents";const l=document.createEvent(n);return l.initEvent(o,...t),e.dispatchEvent(l),e},_=o=>["",...e].includes(o);var z=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(z||{});const H=e=>{const n=o(e)?e:[e],l=[];return n.forEach((e=>{var n;o(e)?l.push(...H(e)):t(e)&&o(e.children)?l.push(...H(e.children)):(l.push(e),t(e)&&(null==(n=e.component)?void 0:n.subTree)&&l.push(...H(e.component.subTree)))})),l},U=(e,o={})=>{n(e)||k("[useLockscreen]","You need to pass a ref param to this function");const t=o.ns||l("popup"),f=a((()=>t.bm("parent","hidden")));if(!s||u(document.body,f.value))return;let y=0,m=!1,v="0";const E=()=>{setTimeout((()=>{p(null==document?void 0:document.body,f.value),m&&document&&(document.body.style.width=v)}),200)};d(e,(e=>{if(!e)return void E();m=!u(document.body,f.value),m&&(v=document.body.style.width),y=P(t.namespace.value);const o=document.documentElement.clientHeight<document.body.scrollHeight,n=c(document.body,"overflowY");y>0&&(o||"scroll"===n)&&m&&(document.body.style.width=`calc(100% - ${y}px)`),r(document.body,f.value)})),i((()=>E()))},j=e=>{if(!e)return{onClick:f,onMousedown:f,onMouseup:f};let o=!1,t=!1;return{onClick:n=>{o&&t&&e(n),o=t=!1},onMousedown:e=>{o=e.target===e.currentTarget},onMouseup:e=>{t=e.target===e.currentTarget}}},G=y({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:m([String,Array,Object])},zIndex:{type:m([String,Number])}});const K=v({name:"ElOverlay",props:G,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:o,emit:t}){const n=l("overlay"),{onClick:a,onMousedown:s,onMouseup:u}=j(e.customMaskEvent?void 0:e=>{t("click",e)});return()=>e.mask?E("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:s,onMouseup:u},[b(o,"default")],z.STYLE|z.CLASS|z.PROPS,["onClick","onMouseup","onMousedown"]):T("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[b(o,"default")])}}),V=y({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:S},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),$={close:()=>!0},X=y({...V,appendToBody:{type:Boolean,default:!1},beforeClose:{type:m(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),q={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[O]:e=>C(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Q=(e,o)=>{const t=A().emit,{nextZIndex:n}=h();let l="";const a=F(),u=F(),c=x(!1),r=x(!1),i=x(!1),p=x(e.zIndex||n());let f,y;const m=M("namespace",L),v=g((()=>{const o={},t=`--${m.value}-dialog`;return e.fullscreen||(e.top&&(o[`${t}-margin-top`]=e.top),e.width&&(o[`${t}-width`]=D(e.width))),o})),E=g((()=>e.alignCenter?{display:"flex"}:{}));function b(){null==y||y(),null==f||f(),e.openDelay&&e.openDelay>0?({stop:f}=B((()=>C()),e.openDelay)):C()}function T(){null==f||f(),null==y||y(),e.closeDelay&&e.closeDelay>0?({stop:y}=B((()=>k()),e.closeDelay)):k()}function S(){e.beforeClose?e.beforeClose((function(e){e||(r.value=!0,c.value=!1)})):T()}function C(){s&&(c.value=!0)}function k(){c.value=!1}return e.lockScroll&&U(c),d((()=>e.modelValue),(l=>{l?(r.value=!1,b(),i.value=!0,p.value=e.zIndex?p.value++:n(),I((()=>{t("open"),o.value&&(o.value.scrollTop=0)}))):c.value&&T()})),d((()=>e.fullscreen),(e=>{o.value&&(e?(l=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=l)})),N((()=>{e.modelValue&&(c.value=!0,i.value=!0,b())})),{afterEnter:function(){t("opened")},afterLeave:function(){t("closed"),t(O,!1),e.destroyOnClose&&(i.value=!1)},beforeLeave:function(){t("close")},handleClose:S,onModalClick:function(){e.closeOnClickModal&&S()},close:T,doClose:k,onOpenAutoFocus:function(){t("openAutoFocus")},onCloseAutoFocus:function(){t("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&S()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:a,bodyId:u,closed:r,style:v,overlayDialogStyle:E,rendered:i,visible:c,zIndex:p}};export{K as E,q as a,V as b,$ as c,X as d,j as e,H as f,U as g,_ as i,R as o,Y as t,Q as u};
