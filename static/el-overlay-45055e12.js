import{b as e,i as o,g as l,a5 as a,h as t,bp as n,r as s,bL as u,y as c,A as d,R as r,a2 as p,o as f,bU as i,X as y,aA as v}from"./index-2b9e942f.js";import{U as m}from"./event-15d81b97.js";import{d as C}from"./use-form-item-55331cc2.js";import{u as b}from"./index-d57c4075.js";const B=e({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:o},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),g={close:()=>!0},x=e({...B,appendToBody:{type:Boolean,default:!1},beforeClose:{type:l(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),D={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[m]:e=>a(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{const l=t().emit,{nextZIndex:a}=n();let B="";const g=C(),x=C(),D=s(!1),F=s(!1),A=s(!1),I=s(e.zIndex||a());let S,h;const O=u("namespace",i),k=c((()=>{const o={},l=`--${O.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=d(e.width))),o})),w=c((()=>e.alignCenter?{display:"flex"}:{}));function j(){null==h||h(),null==S||S(),e.openDelay&&e.openDelay>0?({stop:S}=y((()=>E()),e.openDelay)):E()}function z(){null==S||S(),null==h||h(),e.closeDelay&&e.closeDelay>0?({stop:h}=y((()=>L()),e.closeDelay)):L()}function N(){e.beforeClose?e.beforeClose((function(e){e||(F.value=!0,D.value=!1)})):z()}function E(){v&&(D.value=!0)}function L(){D.value=!1}return e.lockScroll&&b(D),r((()=>e.modelValue),(t=>{t?(F.value=!1,j(),A.value=!0,I.value=e.zIndex?I.value++:a(),p((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):D.value&&z()})),r((()=>e.fullscreen),(e=>{o.value&&(e?(B=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=B)})),f((()=>{e.modelValue&&(D.value=!0,A.value=!0,j())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(m,!1),e.destroyOnClose&&(A.value=!1)},beforeLeave:function(){l("close")},handleClose:N,onModalClick:function(){e.closeOnClickModal&&N()},close:z,doClose:L,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&N()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:g,bodyId:x,closed:F,style:k,overlayDialogStyle:w,rendered:A,visible:D,zIndex:I}};export{D as a,B as b,g as c,x as d,F as u};