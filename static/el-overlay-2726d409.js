import{bb as e,u as o,cu as t,aO as l,N as n,R as a,bd as s,L as u,cv as c,M as d,bJ as r,b as i,g as p,d as f,C as y,e as m,U as v,i as b,a5 as C,h as g,bc as x,r as M,cw as k,cx as w,y as B,A as h,a2 as S,o as I,X as O}from"./index-7b11e248.js";import{P as D}from"./vnode-17b2c6a8.js";import{U as E}from"./event-22bc0892.js";import{c as z}from"./el-button-a9a247f8.js";import{t as A}from"./error-c58402b8.js";import{a as F}from"./scroll-bcd1b381.js";const j=(r,i={})=>{e(r)||A("[useLockscreen]","You need to pass a ref param to this function");const p=i.ns||o("popup"),f=t((()=>p.bm("parent","hidden")));if(!l||n(document.body,f.value))return;let y=0,m=!1,v="0";const b=()=>{setTimeout((()=>{d(null==document?void 0:document.body,f.value),m&&document&&(document.body.style.width=v)}),200)};a(r,(e=>{if(!e)return void b();m=!n(document.body,f.value),m&&(v=document.body.style.width),y=F(p.namespace.value);const o=document.documentElement.clientHeight<document.body.scrollHeight,t=s(document.body,"overflowY");y>0&&(o||"scroll"===t)&&m&&(document.body.style.width=`calc(100% - ${y}px)`),u(document.body,f.value)})),c((()=>b()))},L=e=>{if(!e)return{onClick:r,onMousedown:r,onMouseup:r};let o=!1,t=!1;return{onClick:l=>{o&&t&&e(l),o=t=!1},onMousedown:e=>{o=e.target===e.currentTarget},onMouseup:e=>{t=e.target===e.currentTarget}}},N=i({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:p([String,Array,Object])},zIndex:{type:p([String,Number])}});const P=f({name:"ElOverlay",props:N,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:t,emit:l}){const n=o("overlay"),{onClick:a,onMousedown:s,onMouseup:u}=L(e.customMaskEvent?void 0:e=>{l("click",e)});return()=>e.mask?y("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:s,onMouseup:u},[m(t,"default")],D.STYLE|D.CLASS|D.PROPS,["onClick","onMouseup","onMousedown"]):v("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[m(t,"default")])}}),T=i({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:b},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),R={close:()=>!0},V=i({...T,appendToBody:{type:Boolean,default:!1},beforeClose:{type:p(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),$={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[E]:e=>C(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Y=(e,o)=>{const t=g().emit,{nextZIndex:n}=x();let s="";const u=z(),c=z(),d=M(!1),r=M(!1),i=M(!1),p=M(e.zIndex||n());let f,y;const m=k("namespace",w),v=B((()=>{const o={},t=`--${m.value}-dialog`;return e.fullscreen||(e.top&&(o[`${t}-margin-top`]=e.top),e.width&&(o[`${t}-width`]=h(e.width))),o})),b=B((()=>e.alignCenter?{display:"flex"}:{}));function C(){null==y||y(),null==f||f(),e.openDelay&&e.openDelay>0?({stop:f}=O((()=>F()),e.openDelay)):F()}function D(){null==f||f(),null==y||y(),e.closeDelay&&e.closeDelay>0?({stop:y}=O((()=>L()),e.closeDelay)):L()}function A(){e.beforeClose?e.beforeClose((function(e){e||(r.value=!0,d.value=!1)})):D()}function F(){l&&(d.value=!0)}function L(){d.value=!1}return e.lockScroll&&j(d),a((()=>e.modelValue),(l=>{l?(r.value=!1,C(),i.value=!0,p.value=e.zIndex?p.value++:n(),S((()=>{t("open"),o.value&&(o.value.scrollTop=0)}))):d.value&&D()})),a((()=>e.fullscreen),(e=>{o.value&&(e?(s=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=s)})),I((()=>{e.modelValue&&(d.value=!0,i.value=!0,C())})),{afterEnter:function(){t("opened")},afterLeave:function(){t("closed"),t(E,!1),e.destroyOnClose&&(i.value=!1)},beforeLeave:function(){t("close")},handleClose:A,onModalClick:function(){e.closeOnClickModal&&A()},close:D,doClose:L,onOpenAutoFocus:function(){t("openAutoFocus")},onCloseAutoFocus:function(){t("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&A()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:u,bodyId:c,closed:r,style:v,overlayDialogStyle:b,rendered:i,visible:d,zIndex:p}};export{P as E,$ as a,j as b,L as c,V as d,T as e,R as f,Y as u};
