import{aE as e,bl as o,aK as t,cr as l,b6 as n,u as a,cs as s,aG as u,N as c,R as d,b9 as r,L as p,ct as i,M as f,bG as y,b as m,g as v,d as E,C as b,e as S,U as C,i as T,a5 as A,h,b8 as M,r as g,cu as D,cv as x,y as L,A as B,a2 as N,o as O,X as k}from"./index-78956fcc.js";import{t as I,U as F}from"./event-15d81b97.js";import{u as R}from"./index-33bc2dc9.js";import{a as P}from"./scroll-a180cd47.js";var w=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(w||{});const _=e=>{if(!o(e))return{};const n=e.props||{},a=(o(e.type)?e.type.props:void 0)||{},s={};return Object.keys(a).forEach((e=>{t(a[e],"default")&&(s[e]=a[e].default)})),Object.keys(n).forEach((e=>{s[l(e)]=n[e]})),s},Y=t=>{const l=e(t)?t:[t],n=[];return l.forEach((t=>{var l;e(t)?n.push(...Y(t)):o(t)&&e(t.children)?n.push(...Y(t.children)):(n.push(t),o(t)&&(null==(l=t.component)?void 0:l.subTree)&&n.push(...Y(t.component.subTree)))})),n},z=(e,o={})=>{n(e)||I("[useLockscreen]","You need to pass a ref param to this function");const t=o.ns||a("popup"),l=s((()=>t.bm("parent","hidden")));if(!u||c(document.body,l.value))return;let y=0,m=!1,v="0";const E=()=>{setTimeout((()=>{f(null==document?void 0:document.body,l.value),m&&document&&(document.body.style.width=v)}),200)};d(e,(e=>{if(!e)return void E();m=!c(document.body,l.value),m&&(v=document.body.style.width),y=P(t.namespace.value);const o=document.documentElement.clientHeight<document.body.scrollHeight,n=r(document.body,"overflowY");y>0&&(o||"scroll"===n)&&m&&(document.body.style.width=`calc(100% - ${y}px)`),p(document.body,l.value)})),i((()=>E()))},G=e=>{if(!e)return{onClick:y,onMousedown:y,onMouseup:y};let o=!1,t=!1;return{onClick:l=>{o&&t&&e(l),o=t=!1},onMousedown:e=>{o=e.target===e.currentTarget},onMouseup:e=>{t=e.target===e.currentTarget}}},H=m({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:v([String,Array,Object])},zIndex:{type:v([String,Number])}});const j=E({name:"ElOverlay",props:H,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:o,emit:t}){const l=a("overlay"),{onClick:n,onMousedown:s,onMouseup:u}=G(e.customMaskEvent?void 0:e=>{t("click",e)});return()=>e.mask?b("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:n,onMousedown:s,onMouseup:u},[S(o,"default")],w.STYLE|w.CLASS|w.PROPS,["onClick","onMouseup","onMousedown"]):C("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[S(o,"default")])}}),U=m({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:T},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),K={close:()=>!0},V=m({...U,appendToBody:{type:Boolean,default:!1},beforeClose:{type:v(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),$={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[F]:e=>A(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},X=(e,o)=>{const t=h().emit,{nextZIndex:l}=M();let n="";const a=R(),s=R(),c=g(!1),r=g(!1),p=g(!1),i=g(e.zIndex||l());let f,y;const m=D("namespace",x),v=L((()=>{const o={},t=`--${m.value}-dialog`;return e.fullscreen||(e.top&&(o[`${t}-margin-top`]=e.top),e.width&&(o[`${t}-width`]=B(e.width))),o})),E=L((()=>e.alignCenter?{display:"flex"}:{}));function b(){null==y||y(),null==f||f(),e.openDelay&&e.openDelay>0?({stop:f}=k((()=>T()),e.openDelay)):T()}function S(){null==f||f(),null==y||y(),e.closeDelay&&e.closeDelay>0?({stop:y}=k((()=>A()),e.closeDelay)):A()}function C(){e.beforeClose?e.beforeClose((function(e){e||(r.value=!0,c.value=!1)})):S()}function T(){u&&(c.value=!0)}function A(){c.value=!1}return e.lockScroll&&z(c),d((()=>e.modelValue),(n=>{n?(r.value=!1,b(),p.value=!0,i.value=e.zIndex?i.value++:l(),N((()=>{t("open"),o.value&&(o.value.scrollTop=0)}))):c.value&&S()})),d((()=>e.fullscreen),(e=>{o.value&&(e?(n=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=n)})),O((()=>{e.modelValue&&(c.value=!0,p.value=!0,b())})),{afterEnter:function(){t("opened")},afterLeave:function(){t("closed"),t(F,!1),e.destroyOnClose&&(p.value=!1)},beforeLeave:function(){t("close")},handleClose:C,onModalClick:function(){e.closeOnClickModal&&C()},close:S,doClose:A,onOpenAutoFocus:function(){t("openAutoFocus")},onCloseAutoFocus:function(){t("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&C()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:a,bodyId:s,closed:r,style:v,overlayDialogStyle:E,rendered:p,visible:c,zIndex:i}};export{j as E,$ as a,z as b,G as c,V as d,U as e,Y as f,_ as g,K as h,X as u};
