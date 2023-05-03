import{R as e,bk as n,a2 as o,K as t,d as a,E as s,c9 as l,b$ as r,y as i,r as c,Q as u,ca as d,o as p,S as f,t as m,_ as v,B as g,a as y,l as b,w as h,D as C,C as E,k as x,n as B,aa as w,G as k,c as M,m as T,H as I,q as S,a8 as R,e as _,a4 as z,I as A,T as V,aS as j,V as L,bu as P,cb as $,aY as O,a1 as H,a_ as K,b0 as D,aT as q}from"./index-e788a3f8.js";import{E as U}from"./el-button-efa99a94.js";import{E as F}from"./index-7b62eb04.js";import{E as G,b as Q,c as W}from"./el-overlay-8aeb2e4b.js";import{o as X}from"./aria-49c72c55.js";import{E as Y}from"./focus-trap-3f54cbc3.js";import{i as Z}from"./validator-90e9dbd3.js";import{u as J}from"./index-5003a482.js";import{u as N}from"./el-dialog-da1d6a43.js";const ee="_trap-focus-children",ne=[],oe=e=>{if(0===ne.length)return;const n=ne[ne.length-1][ee];if(n.length>0&&e.code===t.tab){if(1===n.length)return e.preventDefault(),void(document.activeElement!==n[0]&&n[0].focus());const o=e.shiftKey,t=e.target===n[0],a=e.target===n[n.length-1];t&&o&&(e.preventDefault(),n[n.length-1].focus()),a&&!o&&(e.preventDefault(),n[0].focus())}},te=a({name:"ElMessageBox",directives:{TrapFocus:{beforeMount(e){e[ee]=X(e),ne.push(e),ne.length<=1&&document.addEventListener("keydown",oe)},updated(e){o((()=>{e[ee]=X(e)}))},unmounted(){ne.shift(),0===ne.length&&document.removeEventListener("keydown",oe)}}},components:{ElButton:U,ElFocusTrap:Y,ElInput:F,ElOverlay:G,ElIcon:s,...l},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Z},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(t,{emit:a}){const{locale:s,zIndex:l,ns:v,size:g}=r("message-box",i((()=>t.buttonSize))),{t:y}=s,{nextZIndex:b}=l,h=c(!1),C=u({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:b()}),E=i((()=>{const e=C.type;return{[v.bm("icon",e)]:e&&d[e]}})),x=J(),B=J(),w=i((()=>C.icon||d[C.type]||"")),k=i((()=>!!C.message)),M=c(),T=c(),I=c(),S=c(),R=c(),_=i((()=>C.confirmButtonClass));e((()=>C.inputValue),(async e=>{await o(),"prompt"===t.boxType&&null!==e&&P()}),{immediate:!0}),e((()=>h.value),(e=>{var n,a;e&&("prompt"!==t.boxType&&(C.autofocus?I.value=null!=(a=null==(n=R.value)?void 0:n.$el)?a:M.value:I.value=M.value),C.zIndex=b()),"prompt"===t.boxType&&(e?o().then((()=>{var e;S.value&&S.value.$el&&(C.autofocus?I.value=null!=(e=$())?e:M.value:I.value=M.value)})):(C.editorErrorMessage="",C.validateError=!1))}));const z=i((()=>t.draggable));function A(){h.value&&(h.value=!1,o((()=>{C.action&&a("action",C.action)})))}N(M,T,z),p((async()=>{await o(),t.closeOnHashChange&&window.addEventListener("hashchange",A)})),f((()=>{t.closeOnHashChange&&window.removeEventListener("hashchange",A)}));const V=()=>{t.closeOnClickModal&&L(C.distinguishCancelAndClose?"close":"cancel")},j=W(V),L=e=>{var n;("prompt"!==t.boxType||"confirm"!==e||P())&&(C.action=e,C.beforeClose?null==(n=C.beforeClose)||n.call(C,e,C,A):A())},P=()=>{if("prompt"===t.boxType){const e=C.inputPattern;if(e&&!e.test(C.inputValue||""))return C.editorErrorMessage=C.inputErrorMessage||y("el.messagebox.error"),C.validateError=!0,!1;const n=C.inputValidator;if("function"==typeof n){const e=n(C.inputValue);if(!1===e)return C.editorErrorMessage=C.inputErrorMessage||y("el.messagebox.error"),C.validateError=!0,!1;if("string"==typeof e)return C.editorErrorMessage=e,C.validateError=!0,!1}}return C.editorErrorMessage="",C.validateError=!1,!0},$=()=>{const e=S.value.$refs;return e.input||e.textarea},O=()=>{L("close")};return t.lockScroll&&Q(h),((o,t)=>{let a;e((()=>o.value),(e=>{var o,s;e?(a=document.activeElement,n(t)&&(null==(s=(o=t.value).focus)||s.call(o))):a.focus()}))})(h),{...m(C),ns:v,overlayEvent:j,visible:h,hasMessage:k,typeClass:E,contentId:x,inputId:B,btnSize:g,iconComponent:w,confirmButtonClasses:_,rootRef:M,focusStartRef:I,headerRef:T,inputRef:S,confirmRef:R,doClose:A,handleClose:O,onCloseRequested:()=>{t.closeOnPressEscape&&O()},handleWrapperClick:V,handleInputEnter:e=>{if("textarea"!==C.inputType)return e.preventDefault(),L("confirm")},handleAction:L,t:y}}}),ae=["aria-label","aria-describedby"],se=["aria-label"],le=["id"];var re=v(te,[["render",function(e,n,o,t,a,s){const l=g("el-icon"),r=g("close"),i=g("el-input"),c=g("el-button"),u=g("el-focus-trap"),d=g("el-overlay");return y(),b(V,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=n=>e.$emit("vanish")),persisted:""},{default:h((()=>[C(E(d,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:h((()=>[x("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:B(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...n)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...n)),onMousedown:n[9]||(n[9]=(...n)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...n)),onMouseup:n[10]||(n[10]=(...n)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...n))},[E(u,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:h((()=>[x("div",{ref:"rootRef",class:B([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:w(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=k((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?(y(),M("div",{key:0,ref:"headerRef",class:B(e.ns.e("header"))},[x("div",{class:B(e.ns.e("title"))},[e.iconComponent&&e.center?(y(),b(l,{key:0,class:B([e.ns.e("status"),e.typeClass])},{default:h((()=>[(y(),b(T(e.iconComponent)))])),_:1},8,["class"])):I("v-if",!0),x("span",null,S(e.title),1)],2),e.showClose?(y(),M("button",{key:0,type:"button",class:B(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=n=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=R(k((n=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[E(l,{class:B(e.ns.e("close"))},{default:h((()=>[E(r)])),_:1},8,["class"])],42,se)):I("v-if",!0)],2)):I("v-if",!0),x("div",{id:e.contentId,class:B(e.ns.e("content"))},[x("div",{class:B(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(y(),b(l,{key:0,class:B([e.ns.e("status"),e.typeClass])},{default:h((()=>[(y(),b(T(e.iconComponent)))])),_:1},8,["class"])):I("v-if",!0),e.hasMessage?(y(),M("div",{key:1,class:B(e.ns.e("message"))},[_(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(y(),b(T(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(y(),b(T(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:h((()=>[z(S(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):I("v-if",!0)],2),C(x("div",{class:B(e.ns.e("input"))},[E(i,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=n=>e.inputValue=n),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:B({invalid:e.validateError}),onKeydown:R(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),x("div",{class:B(e.ns.e("errormsg")),style:w({visibility:e.editorErrorMessage?"visible":"hidden"})},S(e.editorErrorMessage),7)],2),[[A,e.showInput]])],10,le),x("div",{class:B(e.ns.e("btns"))},[e.showCancelButton?(y(),b(c,{key:0,loading:e.cancelButtonLoading,class:B([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=n=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=R(k((n=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:h((()=>[z(S(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):I("v-if",!0),C(E(c,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:B([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=n=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=R(k((n=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:h((()=>[z(S(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[A,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,ae)])),_:3},8,["z-index","overlay-class","mask"]),[[A,e.visible]])])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const ie=new Map,ce=(e,n,o=null)=>{const t=E(re,e,D(e.message)||P(e.message)?{default:D(e.message)?e.message:()=>e.message}:null);return t.appContext=o,$(t,n),(e=>{let n=document.body;return e.appendTo&&(L(e.appendTo)&&(n=document.querySelector(e.appendTo)),q(e.appendTo)&&(n=e.appendTo),q(n)||(n=document.body)),n})(e).appendChild(n.firstElementChild),t.component},ue=(e,n)=>{const o=document.createElement("div");e.onVanish=()=>{$(null,o),ie.delete(a)},e.onAction=n=>{const o=ie.get(a);let s;s=e.showInput?{value:a.inputValue,action:n}:n,e.callback?e.callback(s,t.proxy):"cancel"===n||"close"===n?e.distinguishCancelAndClose&&"cancel"!==n?o.reject("close"):o.reject("cancel"):o.resolve(s)};const t=ce(e,o,n),a=t.proxy;for(const s in e)O(e,s)&&!O(a.$props,s)&&(a[s]=e[s]);return a.visible=!0,a};function de(e,n=null){if(!j)return Promise.reject();let o;return L(e)||P(e)?e={message:e}:o=e.callback,new Promise(((t,a)=>{const s=ue(e,null!=n?n:de._context);ie.set(s,{options:e,callback:o,resolve:t,reject:a})}))}const pe={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{de[e]=function(e){return(n,o,t,a)=>{let s="";return H(o)?(t=o,s=""):s=K(o)?"":o,de(Object.assign({title:s,message:n,type:"",...pe[e]},t,{boxType:e}),a)}}(e)})),de.close=()=>{ie.forEach(((e,n)=>{n.doClose()})),ie.clear()},de._context=null;const fe=de;fe.install=e=>{fe._context=e._context,e.config.globalProperties.$msgbox=fe,e.config.globalProperties.$messageBox=fe,e.config.globalProperties.$alert=fe.alert,e.config.globalProperties.$confirm=fe.confirm,e.config.globalProperties.$prompt=fe.prompt};const me=fe;export{me as E};
