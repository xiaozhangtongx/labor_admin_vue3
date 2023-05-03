import{d as e,z as s,j as o,y as a,a as l,c as t,k as r,e as n,n as i,f as d,q as c,C as u,w as f,l as m,m as p,E as g,H as b,aa as y,_ as v,cg as h,b4 as C,u as k,r as R,p as $,D as A,F as _,ar as F,I as w,T as I,J as j,s as x}from"./index-442db11c.js";import{E,a as M}from"./index-5cf9a293.js";import{b as L,c as T,d as q,a as z,u as D}from"./el-overlay-d1673d35.js";import{F as S,E as B}from"./focus-trap-1ae2c557.js";import{c as P}from"./refs-384f660f.js";import{u as H}from"./index-78074203.js";import{u as U}from"./el-button-6cab2065.js";const G=Symbol("dialogInjectionKey"),J=["aria-label"],K=["id"],N=e({name:"ElDialogContent"});var O=v(e({...N,props:L,emits:T,setup(e){const v=e,{t:C}=s(),{Close:k}=h,{dialogRef:R,headerRef:$,bodyId:A,ns:_,style:F}=o(G),{focusTrapRef:w}=o(S),I=P(w,R),j=a((()=>v.draggable));return H(R,$,j),(e,s)=>(l(),t("div",{ref:d(I),class:i([d(_).b(),d(_).is("fullscreen",e.fullscreen),d(_).is("draggable",d(j)),d(_).is("align-center",e.alignCenter),{[d(_).m("center")]:e.center},e.customClass]),style:y(d(F)),tabindex:"-1"},[r("header",{ref_key:"headerRef",ref:$,class:i(d(_).e("header"))},[n(e.$slots,"header",{},(()=>[r("span",{role:"heading",class:i(d(_).e("title"))},c(e.title),3)])),e.showClose?(l(),t("button",{key:0,"aria-label":d(C)("el.dialog.close"),class:i(d(_).e("headerbtn")),type:"button",onClick:s[0]||(s[0]=s=>e.$emit("close"))},[u(d(g),{class:i(d(_).e("close"))},{default:f((()=>[(l(),m(p(e.closeIcon||d(k))))])),_:1},8,["class"])],10,J)):b("v-if",!0)],2),r("div",{id:d(A),class:i(d(_).e("body"))},[n(e.$slots,"default")],10,K),e.$slots.footer?(l(),t("footer",{key:0,class:i(d(_).e("footer"))},[n(e.$slots,"footer")],2)):b("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const Z=["aria-label","aria-labelledby","aria-describedby"],Q=e({name:"ElDialog",inheritAttrs:!1});const V=x(v(e({...Q,props:q,emits:z,setup(e,{expose:s}){const o=e,t=C();U({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},a((()=>!!t.title))),U({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},a((()=>!!o.customClass)));const c=k("dialog"),p=R(),g=R(),v=R(),{visible:h,titleId:x,bodyId:L,style:T,overlayDialogStyle:q,rendered:z,zIndex:S,afterEnter:P,afterLeave:H,beforeLeave:J,handleClose:K,onModalClick:N,onOpenAutoFocus:Q,onCloseAutoFocus:V,onCloseRequested:W,onFocusoutPrevented:X}=D(o,p);$(G,{dialogRef:p,headerRef:g,bodyId:L,ns:c,rendered:z,style:T});const Y=M(N),ee=a((()=>o.draggable&&!o.fullscreen));return s({visible:h,dialogContentRef:v}),(e,s)=>(l(),m(j,{to:"body",disabled:!e.appendToBody},[u(I,{name:"dialog-fade",onAfterEnter:d(P),onAfterLeave:d(H),onBeforeLeave:d(J),persisted:""},{default:f((()=>[A(u(d(E),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":d(S)},{default:f((()=>[r("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:d(x),"aria-describedby":d(L),class:i(`${d(c).namespace.value}-overlay-dialog`),style:y(d(q)),onClick:s[0]||(s[0]=(...e)=>d(Y).onClick&&d(Y).onClick(...e)),onMousedown:s[1]||(s[1]=(...e)=>d(Y).onMousedown&&d(Y).onMousedown(...e)),onMouseup:s[2]||(s[2]=(...e)=>d(Y).onMouseup&&d(Y).onMouseup(...e))},[u(d(B),{loop:"",trapped:d(h),"focus-start-el":"container",onFocusAfterTrapped:d(Q),onFocusAfterReleased:d(V),onFocusoutPrevented:d(X),onReleaseRequested:d(W)},{default:f((()=>[d(z)?(l(),m(O,_({key:0,ref_key:"dialogContentRef",ref:v},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:d(ee),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,onClose:d(K)}),F({header:f((()=>[e.$slots.title?n(e.$slots,"title",{key:1}):n(e.$slots,"header",{key:0,close:d(K),titleId:d(x),titleClass:d(c).e("title")})])),default:f((()=>[n(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:f((()=>[n(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):b("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Z)])),_:3},8,["mask","overlay-class","z-index"]),[[w,d(h)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]));export{V as E};