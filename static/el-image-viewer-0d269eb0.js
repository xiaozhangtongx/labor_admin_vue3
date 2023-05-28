import{b as e,g as a,a0 as l,a7 as t,d as s,b$ as n,c0 as o,c1 as i,z as r,u as c,bp as u,r as d,c2 as v,aP as f,y as p,R as m,a2 as y,o as g,a as b,l as k,C as w,w as h,k as z,n as x,f as I,aa as C,G as _,H as O,E as N,x as T,c as A,W as L,au as E,P as S,c3 as R,c4 as $,m as Y,c5 as B,c6 as X,ah as j,D as F,I as M,e as P,T as D,J as H,_ as V,K as W,ay as q,c7 as G,s as K,bC as J,aA as Z,F as Q,q as U,aC as ee,V as ae,c8 as le}from"./index-1713f3be.js";import{t as te,i as se}from"./throttle-3d84947d.js";import{u as ne}from"./index-d50292f6.js";import{g as oe}from"./scroll-e1940b97.js";const ie=e({urlList:{type:a(Array),default:()=>l([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),re={close:()=>!0,switch:e=>t(e)},ce=["src"],ue=s({name:"ElImageViewer"});const de=K(V(s({...ue,props:ie,emits:re,setup(e,{expose:a,emit:l}){const s=e,V={CONTAIN:{name:"contain",icon:n(o)},ORIGINAL:{name:"original",icon:n(i)}},{t:K}=r(),J=c("image-viewer"),{nextZIndex:Z}=u(),Q=d(),U=d([]),ee=v(),ae=d(!0),le=d(s.initialIndex),se=f(V.CONTAIN),ne=d({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),oe=p((()=>{const{urlList:e}=s;return e.length<=1})),ie=p((()=>0===le.value)),re=p((()=>le.value===s.urlList.length-1)),ue=p((()=>s.urlList[le.value])),de=p((()=>{const{scale:e,deg:a,offsetX:l,offsetY:t,enableTransition:s}=ne.value;let n=l/e,o=t/e;switch(a%360){case 90:case-270:[n,o]=[o,-n];break;case 180:case-180:[n,o]=[-n,-o];break;case 270:case-90:[n,o]=[-o,n]}const i={transform:`scale(${e}) rotate(${a}deg) translate(${n}px, ${o}px)`,transition:s?"transform .3s":""};return se.value.name===V.CONTAIN.name&&(i.maxWidth=i.maxHeight="100%"),i})),ve=p((()=>t(s.zIndex)?s.zIndex:Z()));function fe(){ee.stop(),l("close")}function pe(){ae.value=!1}function me(e){ae.value=!1,e.target.alt=K("el.image.error")}function ye(e){if(ae.value||0!==e.button||!Q.value)return;ne.value.enableTransition=!1;const{offsetX:a,offsetY:l}=ne.value,t=e.pageX,s=e.pageY,n=te((e=>{ne.value={...ne.value,offsetX:a+e.pageX-t,offsetY:l+e.pageY-s}})),o=q(document,"mousemove",n);q(document,"mouseup",(()=>{o()})),e.preventDefault()}function ge(){ne.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function be(){if(ae.value)return;const e=G(V),a=Object.values(V),l=se.value.name,t=(a.findIndex((e=>e.name===l))+1)%e.length;se.value=V[e[t]],ge()}function ke(e){const a=s.urlList.length;le.value=(e+a)%a}function we(){ie.value&&!s.infinite||ke(le.value-1)}function he(){re.value&&!s.infinite||ke(le.value+1)}function ze(e,a={}){if(ae.value)return;const{zoomRate:l,rotateDeg:t,enableTransition:n}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ne.value.scale>.2&&(ne.value.scale=Number.parseFloat((ne.value.scale/l).toFixed(3)));break;case"zoomIn":ne.value.scale<7&&(ne.value.scale=Number.parseFloat((ne.value.scale*l).toFixed(3)));break;case"clockwise":ne.value.deg+=t;break;case"anticlockwise":ne.value.deg-=t}ne.value.enableTransition=n}return m(ue,(()=>{y((()=>{const e=U.value[0];(null==e?void 0:e.complete)||(ae.value=!0)}))})),m(le,(e=>{ge(),l("switch",e)})),g((()=>{var e,a;!function(){const e=te((e=>{switch(e.code){case W.esc:s.closeOnPressEscape&&fe();break;case W.space:be();break;case W.left:we();break;case W.up:ze("zoomIn");break;case W.right:he();break;case W.down:ze("zoomOut")}})),a=te((e=>{ze((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})}));ee.run((()=>{q(document,"keydown",e),q(document,"wheel",a)}))}(),null==(a=null==(e=Q.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:ke}),(e,a)=>(b(),k(H,{to:"body",disabled:!e.teleported},[w(D,{name:"viewer-fade",appear:""},{default:h((()=>[z("div",{ref_key:"wrapper",ref:Q,tabindex:-1,class:x(I(J).e("wrapper")),style:C({zIndex:I(ve)})},[z("div",{class:x(I(J).e("mask")),onClick:a[0]||(a[0]=_((a=>e.hideOnClickModal&&fe()),["self"]))},null,2),O(" CLOSE "),z("span",{class:x([I(J).e("btn"),I(J).e("close")]),onClick:fe},[w(I(N),null,{default:h((()=>[w(I(T))])),_:1})],2),O(" ARROW "),I(oe)?O("v-if",!0):(b(),A(L,{key:0},[z("span",{class:x([I(J).e("btn"),I(J).e("prev"),I(J).is("disabled",!e.infinite&&I(ie))]),onClick:we},[w(I(N),null,{default:h((()=>[w(I(E))])),_:1})],2),z("span",{class:x([I(J).e("btn"),I(J).e("next"),I(J).is("disabled",!e.infinite&&I(re))]),onClick:he},[w(I(N),null,{default:h((()=>[w(I(S))])),_:1})],2)],64)),O(" ACTIONS "),z("div",{class:x([I(J).e("btn"),I(J).e("actions")])},[z("div",{class:x(I(J).e("actions__inner"))},[w(I(N),{onClick:a[1]||(a[1]=e=>ze("zoomOut"))},{default:h((()=>[w(I(R))])),_:1}),w(I(N),{onClick:a[2]||(a[2]=e=>ze("zoomIn"))},{default:h((()=>[w(I($))])),_:1}),z("i",{class:x(I(J).e("actions__divider"))},null,2),w(I(N),{onClick:be},{default:h((()=>[(b(),k(Y(I(se).icon)))])),_:1}),z("i",{class:x(I(J).e("actions__divider"))},null,2),w(I(N),{onClick:a[3]||(a[3]=e=>ze("anticlockwise"))},{default:h((()=>[w(I(B))])),_:1}),w(I(N),{onClick:a[4]||(a[4]=e=>ze("clockwise"))},{default:h((()=>[w(I(X))])),_:1})],2)],2),O(" CANVAS "),z("div",{class:x(I(J).e("canvas"))},[(b(!0),A(L,null,j(e.urlList,((e,a)=>F((b(),A("img",{ref_for:!0,ref:e=>U.value[a]=e,key:e,src:e,style:C(I(de)),class:x(I(J).e("img")),onLoad:pe,onError:me,onMousedown:ye},null,46,ce)),[[M,a===le.value]]))),128))],2),P(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]])),ve=e({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:a([String,Object])},previewSrcList:{type:a(Array),default:()=>l([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),fe={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>t(e),close:()=>!0,show:()=>!0},pe=["src","loading"],me={key:0},ye=s({name:"ElImage",inheritAttrs:!1});const ge=K(V(s({...ye,props:ve,emits:fe,setup(e,{emit:a}){const l=e;let t="";const{t:s}=r(),n=c("image"),o=J(),i=ne(),u=d(),v=d(!1),f=d(!0),w=d(!1),_=d(),N=d(),T=Z&&"loading"in HTMLImageElement.prototype;let E,S;const R=p((()=>o.style)),$=p((()=>{const{fit:e}=l;return Z&&e?{objectFit:e}:{}})),Y=p((()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0})),B=p((()=>{const{previewSrcList:e,initialIndex:a}=l;let t=a;return a>e.length-1&&(t=0),t})),X=p((()=>"eager"!==l.loading&&(!T&&"lazy"===l.loading||l.lazy))),j=()=>{Z&&(f.value=!0,v.value=!1,u.value=l.src)};function F(e){f.value=!1,v.value=!1,a("load",e)}function M(e){f.value=!1,v.value=!0,a("error",e)}function D(){se(_.value,N.value)&&(j(),W())}const H=le(D,200);async function V(){var e;if(!Z)return;await y();const{scrollContainer:a}=l;ee(a)?N.value=a:ae(a)&&""!==a?N.value=null!=(e=document.querySelector(a))?e:void 0:_.value&&(N.value=oe(_.value)),N.value&&(E=q(N,"scroll",H),setTimeout((()=>D()),100))}function W(){Z&&N.value&&H&&(null==E||E(),N.value=void 0)}function G(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function K(){Y.value&&(S=q("wheel",G,{passive:!1}),t=document.body.style.overflow,document.body.style.overflow="hidden",w.value=!0,a("show"))}function te(){null==S||S(),document.body.style.overflow=t,w.value=!1,a("close")}function ie(e){a("switch",e)}return m((()=>l.src),(()=>{X.value?(f.value=!0,v.value=!1,W(),V()):j()})),g((()=>{X.value?V():j()})),(e,a)=>(b(),A("div",{ref_key:"container",ref:_,class:x([I(n).b(),e.$attrs.class]),style:C(I(R))},[void 0===u.value||v.value?O("v-if",!0):(b(),A("img",Q({key:0},I(i),{src:u.value,loading:e.loading,style:I($),class:[I(n).e("inner"),I(Y)&&I(n).e("preview"),f.value&&I(n).is("loading")],onClick:K,onLoad:F,onError:M}),null,16,pe)),f.value||v.value?(b(),A("div",{key:1,class:x(I(n).e("wrapper"))},[f.value?P(e.$slots,"placeholder",{key:0},(()=>[z("div",{class:x(I(n).e("placeholder"))},null,2)])):v.value?P(e.$slots,"error",{key:1},(()=>[z("div",{class:x(I(n).e("error"))},U(I(s)("el.image.error")),3)])):O("v-if",!0)],2)):O("v-if",!0),I(Y)?(b(),A(L,{key:2},[w.value?(b(),k(I(de),{key:0,"z-index":e.zIndex,"initial-index":I(B),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:te,onSwitch:ie},{default:h((()=>[e.$slots.viewer?(b(),A("div",me,[P(e.$slots,"viewer")])):O("v-if",!0)])),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):O("v-if",!0)],64)):O("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]));export{ge as E};