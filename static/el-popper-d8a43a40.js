import{aQ as e,g as t,h as n,y as r,aV as o,R as a,o as i,aO as s,a5 as l,f as p,aG as u,r as f,S as c,bY as d,bZ as v,av as m,b_ as g,b as h,a7 as y,p as b,d as w,e as x,_ as O,u as R,j as A,a as E,c as k,n as T,aa as S,bJ as C,D as j,b$ as B,a1 as M,W as P,c0 as F,bg as L,C as D,c1 as _,bX as I,l as H,w as $,F as W,H as q,bc as N,s as U,K as z,aE as V,a3 as K,I as Z,T as J,J as X,bB as Y,aA as G,bm as Q,q as ee}from"./index-95400b9a.js";import{i as te}from"./event-15d81b97.js";import{g as ne,f as re,e as oe}from"./el-button-aaeb9e0d.js";import{E as ae}from"./focus-trap-af580f15.js";const ie=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const o=null==e?void 0:e(r);if(!1===n||!o)return null==t?void 0:t(r)},se=e=>t=>"mouse"===t.pointerType?e(t):void 0;const le=e({type:t(Boolean),default:null}),pe=e({type:t(Function)}),ue=e=>{const t=`update:${e}`,p=`onUpdate:${e}`;return{useModelToggle:({indicator:u,toggleReason:f,shouldHideWhenRouteChanges:c,shouldProceed:d,onShow:v,onHide:m})=>{const g=n(),{emit:h}=g,y=g.props,b=r((()=>o(y[p]))),w=r((()=>null===y[e])),x=e=>{!0!==u.value&&(u.value=!0,f&&(f.value=e),o(v)&&v(e))},O=e=>{!1!==u.value&&(u.value=!1,f&&(f.value=e),o(m)&&m(e))},R=e=>{if(!0===y.disabled||o(d)&&!d())return;const n=b.value&&s;n&&h(t,!0),!w.value&&n||x(e)},A=e=>{if(!0===y.disabled||!s)return;const n=b.value&&s;n&&h(t,!1),!w.value&&n||O(e)},E=e=>{l(e)&&(y.disabled&&e?b.value&&h(t,!1):u.value!==e&&(e?x():O()))};return a((()=>y[e]),E),c&&void 0!==g.appContext.config.globalProperties.$route&&a((()=>({...g.proxy.$route})),(()=>{c.value&&u.value&&A()})),i((()=>{E(y[e])})),{hide:A,show:R,toggle:()=>{u.value?A():R()},hasUpdateHandler:b}},useModelToggleProps:{[e]:le,[p]:pe},useModelToggleEmits:[t]}};ue("modelValue");var fe="top",ce="bottom",de="right",ve="left",me="auto",ge=[fe,ce,de,ve],he="start",ye="end",be="clippingParents",we="viewport",xe="popper",Oe="reference",Re=ge.reduce((function(e,t){return e.concat([t+"-"+he,t+"-"+ye])}),[]),Ae=[].concat(ge,[me]).reduce((function(e,t){return e.concat([t,t+"-"+he,t+"-"+ye])}),[]),Ee=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ke(e){return e?(e.nodeName||"").toLowerCase():null}function Te(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Se(e){return e instanceof Te(e).Element||e instanceof Element}function Ce(e){return e instanceof Te(e).HTMLElement||e instanceof HTMLElement}function je(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Te(e).ShadowRoot||e instanceof ShadowRoot)}var Be={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];!Ce(o)||!ke(o)||(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!Ce(r)||!ke(r)||(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Me(e){return e.split("-")[0]}var Pe=Math.max,Fe=Math.min,Le=Math.round;function De(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(Ce(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(r=Le(n.width)/i||1),a>0&&(o=Le(n.height)/a||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function _e(e){var t=De(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Ie(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&je(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function He(e){return Te(e).getComputedStyle(e)}function $e(e){return["table","td","th"].indexOf(ke(e))>=0}function We(e){return((Se(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return"html"===ke(e)?e:e.assignedSlot||e.parentNode||(je(e)?e.host:null)||We(e)}function Ne(e){return Ce(e)&&"fixed"!==He(e).position?e.offsetParent:null}function Ue(e){for(var t=Te(e),n=Ne(e);n&&$e(n)&&"static"===He(n).position;)n=Ne(n);return n&&("html"===ke(n)||"body"===ke(n)&&"static"===He(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Ce(e)&&"fixed"===He(e).position)return null;var n=qe(e);for(je(n)&&(n=n.host);Ce(n)&&["html","body"].indexOf(ke(n))<0;){var r=He(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function ze(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ve(e,t,n){return Pe(e,Fe(t,n))}function Ke(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ze(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Je=function(e,t){return Ke("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ze(e,ge))};var Xe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Me(n.placement),l=ze(s),p=[ve,de].indexOf(s)>=0?"height":"width";if(a&&i){var u=Je(o.padding,n),f=_e(a),c="y"===l?fe:ve,d="y"===l?ce:de,v=n.rects.reference[p]+n.rects.reference[l]-i[l]-n.rects.popper[p],m=i[l]-n.rects.reference[l],g=Ue(a),h=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,y=v/2-m/2,b=u[c],w=h-f[p]-u[d],x=h/2-f[p]/2+y,O=Ve(b,x,w),R=l;n.modifiersData[r]=((t={})[R]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"==typeof r&&!(r=t.elements.popper.querySelector(r))||!Ie(t.elements.popper,r)||(t.elements.arrow=r))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ye(e){return e.split("-")[1]}var Ge={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Qe(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,f=e.isFixed,c=i.x,d=void 0===c?0:c,v=i.y,m=void 0===v?0:v,g="function"==typeof u?u({x:d,y:m}):{x:d,y:m};d=g.x,m=g.y;var h=i.hasOwnProperty("x"),y=i.hasOwnProperty("y"),b=ve,w=fe,x=window;if(p){var O=Ue(n),R="clientHeight",A="clientWidth";if(O===Te(n)&&("static"!==He(O=We(n)).position&&"absolute"===s&&(R="scrollHeight",A="scrollWidth")),o===fe||(o===ve||o===de)&&a===ye)w=ce,m-=(f&&O===x&&x.visualViewport?x.visualViewport.height:O[R])-r.height,m*=l?1:-1;if(o===ve||(o===fe||o===ce)&&a===ye)b=de,d-=(f&&O===x&&x.visualViewport?x.visualViewport.width:O[A])-r.width,d*=l?1:-1}var E,k=Object.assign({position:s},p&&Ge),T=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Le(t*r)/r||0,y:Le(n*r)/r||0}}({x:d,y:m}):{x:d,y:m};return d=T.x,m=T.y,l?Object.assign({},k,((E={})[w]=y?"0":"",E[b]=h?"0":"",E.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+m+"px)":"translate3d("+d+"px, "+m+"px, 0)",E)):Object.assign({},k,((t={})[w]=y?m+"px":"",t[b]=h?d+"px":"",t.transform="",t))}var et={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,l=void 0===s||s,p={placement:Me(t.placement),variation:Ye(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Qe(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qe(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},tt={passive:!0};var nt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,i=r.resize,s=void 0===i||i,l=Te(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,tt)})),s&&l.addEventListener("resize",n.update,tt),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,tt)})),s&&l.removeEventListener("resize",n.update,tt)}},data:{}},rt={left:"right",right:"left",bottom:"top",top:"bottom"};function ot(e){return e.replace(/left|right|bottom|top/g,(function(e){return rt[e]}))}var at={start:"end",end:"start"};function it(e){return e.replace(/start|end/g,(function(e){return at[e]}))}function st(e){var t=Te(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function lt(e){return De(We(e)).left+st(e).scrollLeft}function pt(e){var t=He(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ut(e){return["html","body","#document"].indexOf(ke(e))>=0?e.ownerDocument.body:Ce(e)&&pt(e)?e:ut(qe(e))}function ft(e,t){var n;void 0===t&&(t=[]);var r=ut(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=Te(r),i=o?[a].concat(a.visualViewport||[],pt(r)?r:[]):r,s=t.concat(i);return o?s:s.concat(ft(qe(i)))}function ct(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function dt(e,t){return t===we?ct(function(e){var t=Te(e),n=We(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,i=0,s=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,s=r.offsetTop)),{width:o,height:a,x:i+lt(e),y:s}}(e)):Se(t)?function(e){var t=De(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ct(function(e){var t,n=We(e),r=st(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=Pe(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Pe(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+lt(e),l=-r.scrollTop;return"rtl"===He(o||n).direction&&(s+=Pe(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(We(e)))}function vt(e,t,n){var r="clippingParents"===t?function(e){var t=ft(qe(e)),n=["absolute","fixed"].indexOf(He(e).position)>=0&&Ce(e)?Ue(e):e;return Se(n)?t.filter((function(e){return Se(e)&&Ie(e,n)&&"body"!==ke(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),a=o[0],i=o.reduce((function(t,n){var r=dt(e,n);return t.top=Pe(r.top,t.top),t.right=Fe(r.right,t.right),t.bottom=Fe(r.bottom,t.bottom),t.left=Pe(r.left,t.left),t}),dt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function mt(e){var t,n=e.reference,r=e.element,o=e.placement,a=o?Me(o):null,i=o?Ye(o):null,s=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(a){case fe:t={x:s,y:n.y-r.height};break;case ce:t={x:s,y:n.y+n.height};break;case de:t={x:n.x+n.width,y:l};break;case ve:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var p=a?ze(a):null;if(null!=p){var u="y"===p?"height":"width";switch(i){case he:t[p]=t[p]-(n[u]/2-r[u]/2);break;case ye:t[p]=t[p]+(n[u]/2-r[u]/2)}}return t}function gt(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,i=void 0===a?be:a,s=n.rootBoundary,l=void 0===s?we:s,p=n.elementContext,u=void 0===p?xe:p,f=n.altBoundary,c=void 0!==f&&f,d=n.padding,v=void 0===d?0:d,m=Ke("number"!=typeof v?v:Ze(v,ge)),g=u===xe?Oe:xe,h=e.rects.popper,y=e.elements[c?g:u],b=vt(Se(y)?y:y.contextElement||We(e.elements.popper),i,l),w=De(e.elements.reference),x=mt({reference:w,element:h,strategy:"absolute",placement:o}),O=ct(Object.assign({},h,x)),R=u===xe?O:w,A={top:b.top-R.top+m.top,bottom:R.bottom-b.bottom+m.bottom,left:b.left-R.left+m.left,right:R.right-b.right+m.right},E=e.modifiersData.offset;if(u===xe&&E){var k=E[o];Object.keys(A).forEach((function(e){var t=[de,ce].indexOf(e)>=0?1:-1,n=[fe,ce].indexOf(e)>=0?"y":"x";A[e]+=k[n]*t}))}return A}var ht={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=void 0===o||o,i=n.altAxis,s=void 0===i||i,l=n.fallbackPlacements,p=n.padding,u=n.boundary,f=n.rootBoundary,c=n.altBoundary,d=n.flipVariations,v=void 0===d||d,m=n.allowedAutoPlacements,g=t.options.placement,h=Me(g),y=l||(h===g||!v?[ot(g)]:function(e){if(Me(e)===me)return[];var t=ot(e);return[it(e),t,it(t)]}(g)),b=[g].concat(y).reduce((function(e,n){return e.concat(Me(n)===me?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,p=void 0===l?Ae:l,u=Ye(r),f=u?s?Re:Re.filter((function(e){return Ye(e)===u})):ge,c=f.filter((function(e){return p.indexOf(e)>=0}));0===c.length&&(c=f);var d=c.reduce((function(t,n){return t[n]=gt(e,{placement:n,boundary:o,rootBoundary:a,padding:i})[Me(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:f,padding:p,flipVariations:v,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,A=b[0],E=0;E<b.length;E++){var k=b[E],T=Me(k),S=Ye(k)===he,C=[fe,ce].indexOf(T)>=0,j=C?"width":"height",B=gt(t,{placement:k,boundary:u,rootBoundary:f,altBoundary:c,padding:p}),M=C?S?de:ve:S?ce:fe;w[j]>x[j]&&(M=ot(M));var P=ot(M),F=[];if(a&&F.push(B[T]<=0),s&&F.push(B[M]<=0,B[P]<=0),F.every((function(e){return e}))){A=k,R=!1;break}O.set(k,F)}if(R)for(var L=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},D=v?3:1;D>0;D--){if("break"===L(D))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function yt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function bt(e){return[fe,de,ce,ve].some((function(t){return e[t]>=0}))}var wt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=gt(t,{elementContext:"reference"}),s=gt(t,{altBoundary:!0}),l=yt(i,r),p=yt(s,o,a),u=bt(l),f=bt(p);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}};var xt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=void 0===o?[0,0]:o,i=Ae.reduce((function(e,n){return e[n]=function(e,t,n){var r=Me(e),o=[ve,fe].indexOf(r)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*o,[ve,de].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],l=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=i}};var Ot={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=mt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var Rt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=void 0===o||o,i=n.altAxis,s=void 0!==i&&i,l=n.boundary,p=n.rootBoundary,u=n.altBoundary,f=n.padding,c=n.tether,d=void 0===c||c,v=n.tetherOffset,m=void 0===v?0:v,g=gt(t,{boundary:l,rootBoundary:p,padding:f,altBoundary:u}),h=Me(t.placement),y=Ye(t.placement),b=!y,w=ze(h),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,R=t.rects.reference,A=t.rects.popper,E="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,k="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(O){if(a){var C,j="y"===w?fe:ve,B="y"===w?ce:de,M="y"===w?"height":"width",P=O[w],F=P+g[j],L=P-g[B],D=d?-A[M]/2:0,_=y===he?R[M]:A[M],I=y===he?-A[M]:-R[M],H=t.elements.arrow,$=d&&H?_e(H):{width:0,height:0},W=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},q=W[j],N=W[B],U=Ve(0,R[M],$[M]),z=b?R[M]/2-D-U-q-k.mainAxis:_-U-q-k.mainAxis,V=b?-R[M]/2+D+U+N+k.mainAxis:I+U+N+k.mainAxis,K=t.elements.arrow&&Ue(t.elements.arrow),Z=K?"y"===w?K.clientTop||0:K.clientLeft||0:0,J=null!=(C=null==T?void 0:T[w])?C:0,X=P+V-J,Y=Ve(d?Fe(F,P+z-J-Z):F,P,d?Pe(L,X):L);O[w]=Y,S[w]=Y-P}if(s){var G,Q="x"===w?fe:ve,ee="x"===w?ce:de,te=O[x],ne="y"===x?"height":"width",re=te+g[Q],oe=te-g[ee],ae=-1!==[fe,ve].indexOf(h),ie=null!=(G=null==T?void 0:T[x])?G:0,se=ae?re:te-R[ne]-A[ne]-ie+k.altAxis,le=ae?te+R[ne]+A[ne]-ie-k.altAxis:oe,pe=d&&ae?function(e,t,n){var r=Ve(e,t,n);return r>n?n:r}(se,te,le):Ve(d?se:re,te,d?le:oe);O[x]=pe,S[x]=pe-te}t.modifiersData[r]=S}},requiresIfExists:["offset"]};function At(e,t,n){void 0===n&&(n=!1);var r=Ce(t),o=Ce(t)&&function(e){var t=e.getBoundingClientRect(),n=Le(t.width)/e.offsetWidth||1,r=Le(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),a=We(t),i=De(e,o),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&(("body"!==ke(t)||pt(a))&&(s=function(e){return e!==Te(e)&&Ce(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):st(e)}(t)),Ce(t)?((l=De(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=lt(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Et(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function kt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var Tt={placement:"bottom",modifiers:[],strategy:"absolute"};function St(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Ct(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?Tt:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tt,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:o,setOptions:function(n){var s="function"==typeof n?n(o.options):n;p(),o.options=Object.assign({},a,o.options,s),o.scrollParents={reference:Se(e)?ft(e):e.contextElement?ft(e.contextElement):[],popper:ft(t)};var u=function(e){var t=Et(e);return Ee.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var s=a({state:o,name:t,instance:l,options:r}),p=function(){};i.push(s||p)}})),l.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(St(t,n)){o.rects={reference:At(t,Ue(n),"fixed"===o.options.strategy),popper:_e(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var a=o.orderedModifiers[r],i=a.fn,p=a.options,u=void 0===p?{}:p,f=a.name;"function"==typeof i&&(o=i({state:o,options:u,name:f,instance:l})||o)}else o.reset=!1,r=-1}}},update:kt((function(){return new Promise((function(e){l.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!St(e,t))return l;function p(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}Ct(),Ct({defaultModifiers:[nt,Ot,et,Be]});var jt=Ct({defaultModifiers:[nt,Ot,et,Be,xt,ht,Rt,Xe,wt]});const Bt=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=function(e){const t=Object.keys(e.elements),n=d(t.map((t=>[t,e.styles[t]||{}]))),r=d(t.map((t=>[t,e.attributes[t]])));return{styles:n,attributes:r}}(e);Object.assign(l.value,t)},requires:["computeStyles"]},i=r((()=>{const{onFirstUpdate:e,placement:t,strategy:r,modifiers:a}=p(n);return{onFirstUpdate:e,placement:t||"bottom",strategy:r||"absolute",modifiers:[...a||[],o,{name:"applyStyles",enabled:!1}]}})),s=u(),l=f({styles:{popper:{position:p(i).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),v=()=>{s.value&&(s.value.destroy(),s.value=void 0)};return a(i,(e=>{const t=p(s);t&&t.setOptions(e)}),{deep:!0}),a([e,t],(([e,t])=>{v(),e&&t&&(s.value=jt(e,t,p(i)))})),c((()=>{v()})),{state:r((()=>{var e;return{...(null==(e=p(s))?void 0:e.state)||{}}})),styles:r((()=>p(l).styles)),attributes:r((()=>p(l).attributes)),update:()=>{var e;return null==(e=p(s))?void 0:e.update()},forceUpdate:()=>{var e;return null==(e=p(s))?void 0:e.forceUpdate()},instanceRef:r((()=>p(s)))}};function Mt(){let e;const t=()=>window.clearTimeout(e);return v((()=>t())),{registerTimeout:(n,r)=>{t(),e=window.setTimeout(n,r)},cancelTimeout:t}}let Pt;const Ft=()=>{const e=g(),t=ne(),n=r((()=>`${e.value}-popper-container-${t.prefix}`)),o=r((()=>`#${n.value}`));return{id:n,selector:o}},Lt=()=>{const{id:e,selector:t}=Ft();return m((()=>{s&&(Pt||document.body.querySelector(t.value)||(Pt=(e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t})(e.value)))})),{id:e,selector:t}},Dt=h({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),_t=({showAfter:e,hideAfter:t,autoClose:n,open:r,close:o})=>{const{registerTimeout:a}=Mt(),{registerTimeout:i,cancelTimeout:s}=Mt();return{onOpen:t=>{a((()=>{r(t);const e=p(n);y(e)&&e>0&&i((()=>{o(t)}),e)}),p(e))},onClose:e=>{s(),a((()=>{o(e)}),p(t))}}},It=Symbol("elForwardRef"),Ht=Symbol("popper"),$t=Symbol("popperContent"),Wt=h({role:{type:String,values:["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],default:"tooltip"}}),qt=w({name:"ElPopper",inheritAttrs:!1});var Nt=O(w({...qt,props:Wt,setup(e,{expose:t}){const n=e,o={triggerRef:f(),popperInstanceRef:f(),contentRef:f(),referenceRef:f(),role:r((()=>n.role))};return t(o),b(Ht,o),(e,t)=>x(e.$slots,"default")}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Ut=h({arrowOffset:{type:Number,default:5}}),zt=w({name:"ElPopperArrow",inheritAttrs:!1});var Vt=O(w({...zt,props:Ut,setup(e,{expose:t}){const n=e,r=R("popper"),{arrowOffset:o,arrowRef:i,arrowStyle:s}=A($t,void 0);return a((()=>n.arrowOffset),(e=>{o.value=e})),c((()=>{i.value=void 0})),t({arrowRef:i}),(e,t)=>(E(),k("span",{ref_key:"arrowRef",ref:i,class:T(p(r).e("arrow")),style:S(p(s)),"data-popper-arrow":""},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const Kt=w({name:"ElOnlyChild",setup(e,{slots:t,attrs:n}){var r;const o=A(It),a=(i=null!=(r=null==o?void 0:o.setForwardRef)?r:C,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const r=null==(e=t.default)?void 0:e.call(t,n);if(!r)return null;if(r.length>1)return null;const o=Zt(r);return o?j(B(o,n),[[a]]):null}}});function Zt(e){if(!e)return null;const t=e;for(const n of t){if(M(n))switch(n.type){case L:continue;case F:case"svg":return Jt(n);case P:return Zt(n.children);default:return n}return Jt(n)}return null}function Jt(e){const t=R("only-child");return D("span",{class:t.e("content")},[e])}const Xt=h({virtualRef:{type:t(Object)},virtualTriggering:Boolean,onMouseenter:{type:t(Function)},onMouseleave:{type:t(Function)},onClick:{type:t(Function)},onKeydown:{type:t(Function)},onFocus:{type:t(Function)},onBlur:{type:t(Function)},onContextmenu:{type:t(Function)},id:String,open:Boolean}),Yt=w({name:"ElPopperTrigger",inheritAttrs:!1});var Gt=O(w({...Yt,props:Xt,setup(e,{expose:t}){const n=e,{role:o,triggerRef:s}=A(Ht,void 0);var l;l=s,b(It,{setForwardRef:e=>{l.value=e}});const u=r((()=>d.value?n.id:void 0)),f=r((()=>{if(o&&"tooltip"===o.value)return n.open&&n.id?n.id:void 0})),d=r((()=>{if(o&&"tooltip"!==o.value)return o.value})),v=r((()=>d.value?`${n.open}`:void 0));let m;return i((()=>{a((()=>n.virtualRef),(e=>{e&&(s.value=_(e))}),{immediate:!0}),a(s,((e,t)=>{null==m||m(),m=void 0,I(e)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach((r=>{var o;const a=n[r];a&&(e.addEventListener(r.slice(2).toLowerCase(),a),null==(o=null==t?void 0:t.removeEventListener)||o.call(t,r.slice(2).toLowerCase(),a))})),m=a([u,f,d,v],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((n,r)=>{te(t[r])?e.removeAttribute(n):e.setAttribute(n,t[r])}))}),{immediate:!0})),I(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),c((()=>{null==m||m(),m=void 0})),t({triggerRef:s}),(e,t)=>e.virtualTriggering?q("v-if",!0):(E(),H(p(Kt),W({key:0},e.$attrs,{"aria-controls":p(u),"aria-describedby":p(f),"aria-expanded":p(v),"aria-haspopup":p(d)}),{default:$((()=>[x(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);const Qt=h({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:t(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ae,default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),en=h({...Qt,id:String,style:{type:t([String,Array,Object])},className:{type:t([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:t([String,Array,Object])},popperStyle:{type:t([String,Array,Object])},referenceEl:{type:t(Object)},triggerTargetEl:{type:t(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),tn={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},nn=(e,t=[])=>{const{placement:n,strategy:r,popperOptions:o}=e,a={placement:n,strategy:r,...o,modifiers:[...rn(e),...t]};return function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==o?void 0:o.modifiers),a};function rn(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:r}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:r}},{name:"computeStyles",options:{gpuAcceleration:n}}]}const on=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:l}=A(Ht,void 0),u=f(),c=f(),d=r((()=>({name:"eventListeners",enabled:!!e.visible}))),v=r((()=>{var e;const t=p(u),n=null!=(e=p(c))?e:0;return{name:"arrow",enabled:(r=t,!(void 0===r)),options:{element:t,padding:n}};var r})),m=r((()=>({onFirstUpdate:()=>{w()},...nn(e,[p(v),p(d)])}))),g=r((()=>(e=>{if(s)return _(e)})(e.referenceEl)||p(o))),{attributes:h,state:y,styles:b,update:w,forceUpdate:x,instanceRef:O}=Bt(g,n,m);return a(O,(e=>t.value=e)),i((()=>{a((()=>{var e;return null==(e=p(g))?void 0:e.getBoundingClientRect()}),(()=>{w()}))})),{attributes:h,arrowRef:u,contentRef:n,instanceRef:O,state:y,styles:b,role:l,forceUpdate:x,update:w}},an=w({name:"ElPopperContent"});var sn=O(w({...an,props:en,emits:tn,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:s,trapped:l,onFocusAfterReleased:u,onFocusAfterTrapped:d,onFocusInTrap:v,onFocusoutPrevented:m,onReleaseRequested:g}=((e,t)=>{const n=f(!1),r=f();return{focusStartRef:r,trapped:n,onFocusAfterReleased:e=>{var n;"pointer"!==(null==(n=e.detail)?void 0:n.focusReason)&&(r.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:t=>{e.visible&&!n.value&&(t.target&&(r.value=t.target),n.value=!0)},onFocusoutPrevented:t=>{e.trapping||("pointer"===t.detail.focusReason&&t.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}})(o,n),{attributes:h,arrowRef:y,contentRef:w,styles:O,instanceRef:T,role:S,update:j}=on(o),{ariaModal:B,arrowStyle:M,contentAttrs:P,contentClass:F,contentStyle:L,updateZIndex:_}=((e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:a}=N(),i=R("popper"),s=r((()=>p(t).popper)),l=f(e.zIndex||a()),u=r((()=>[i.b(),i.is("pure",e.pure),i.is(e.effect),e.popperClass])),c=r((()=>[{zIndex:p(l)},e.popperStyle||{},p(n).popper]));return{ariaModal:r((()=>"dialog"===o.value?"false":void 0)),arrowStyle:r((()=>p(n).arrow||{})),contentAttrs:s,contentClass:u,contentStyle:c,contentZIndex:l,updateZIndex:()=>{l.value=e.zIndex||a()}}})(o,{styles:O,attributes:h,role:S}),H=A(re,void 0),q=f();let U;b($t,{arrowStyle:M,arrowRef:y,arrowOffset:q}),H&&(H.addInputId||H.removeInputId)&&b(re,{...H,addInputId:C,removeInputId:C});const z=(e=!0)=>{j(),e&&_()},V=()=>{z(!1),o.visible&&o.focusOnShow?l.value=!0:!1===o.visible&&(l.value=!1)};return i((()=>{a((()=>o.triggerTargetEl),((e,t)=>{null==U||U(),U=void 0;const n=p(e||w.value),r=p(t||w.value);I(n)&&(U=a([S,()=>o.ariaLabel,B,()=>o.id],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,r)=>{te(e[r])?n.removeAttribute(t):n.setAttribute(t,e[r])}))}),{immediate:!0})),r!==n&&I(r)&&["role","aria-label","aria-modal","id"].forEach((e=>{r.removeAttribute(e)}))}),{immediate:!0}),a((()=>o.visible),V,{immediate:!0})})),c((()=>{null==U||U(),U=void 0})),t({popperContentRef:w,popperInstanceRef:T,updatePopper:z,contentStyle:L}),(e,t)=>(E(),k("div",W({ref_key:"contentRef",ref:w},p(P),{style:p(L),class:p(F),tabindex:"-1",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouseenter",t)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouseleave",t))}),[D(p(ae),{trapped:p(l),"trap-on-focus-in":!0,"focus-trap-el":p(w),"focus-start-el":p(s),onFocusAfterTrapped:p(d),onFocusAfterReleased:p(u),onFocusin:p(v),onFocusoutPrevented:p(m),onReleaseRequested:p(g)},{default:$((()=>[x(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const ln=U(Nt),pn=Symbol("elTooltip"),un=h({...Dt,...en,appendTo:{type:t([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:t(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),fn=h({...Xt,disabled:Boolean,trigger:{type:t([String,Array]),default:"hover"},triggerKeys:{type:t(Array),default:()=>[z.enter,z.space]}}),{useModelToggleProps:cn,useModelToggleEmits:dn,useModelToggle:vn}=ue("visible"),mn=h({...Wt,...cn,...un,...fn,...Ut,showArrow:{type:Boolean,default:!0}}),gn=[...dn,"before-show","before-hide","show","hide","open","close"],hn=(e,t,n)=>r=>{((e,t)=>V(e)?e.includes(t):e===t)(p(e),t)&&n(r)},yn=w({name:"ElTooltipTrigger"});var bn=O(w({...yn,props:fn,setup(e,{expose:t}){const n=e,r=R("tooltip"),{controlled:o,id:a,open:i,onOpen:s,onClose:l,onToggle:u}=A(pn,void 0),c=f(null),d=()=>{if(p(o)||n.disabled)return!0},v=K(n,"trigger"),m=ie(d,hn(v,"hover",s)),g=ie(d,hn(v,"hover",l)),h=ie(d,hn(v,"click",(e=>{0===e.button&&u(e)}))),y=ie(d,hn(v,"focus",s)),b=ie(d,hn(v,"focus",l)),w=ie(d,hn(v,"contextmenu",(e=>{e.preventDefault(),u(e)}))),O=ie(d,(e=>{const{code:t}=e;n.triggerKeys.includes(t)&&(e.preventDefault(),u(e))}));return t({triggerRef:c}),(e,t)=>(E(),H(p(Gt),{id:p(a),"virtual-ref":e.virtualRef,open:p(i),"virtual-triggering":e.virtualTriggering,class:T(p(r).e("trigger")),onBlur:p(b),onClick:p(h),onContextmenu:p(w),onFocus:p(y),onMouseenter:p(m),onMouseleave:p(g),onKeydown:p(O)},{default:$((()=>[x(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const wn=w({name:"ElTooltipContent",inheritAttrs:!1});var xn=O(w({...wn,props:un,setup(e,{expose:t}){const n=e,{selector:o}=Ft(),i=R("tooltip"),s=f(null),l=f(!1),{controlled:u,id:d,open:v,trigger:m,onClose:g,onOpen:h,onShow:y,onHide:b,onBeforeShow:w,onBeforeHide:O}=A(pn,void 0),k=r((()=>n.transition||`${i.namespace.value}-fade-in-linear`)),T=r((()=>n.persistent));c((()=>{l.value=!0}));const S=r((()=>!!p(T)||p(v))),C=r((()=>!n.disabled&&p(v))),B=r((()=>n.appendTo||o.value)),M=r((()=>{var e;return null!=(e=n.style)?e:{}})),P=r((()=>!p(v))),F=()=>{b()},L=()=>{if(p(u))return!0},_=ie(L,(()=>{n.enterable&&"hover"===p(m)&&h()})),I=ie(L,(()=>{"hover"===p(m)&&g()})),N=()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.updatePopper)||t.call(e),null==w||w()},U=()=>{null==O||O()},z=()=>{y(),K=Y(r((()=>{var e;return null==(e=s.value)?void 0:e.popperContentRef})),(()=>{if(p(u))return;"hover"!==p(m)&&g()}))},V=()=>{n.virtualTriggering||g()};let K;return a((()=>p(v)),(e=>{e||null==K||K()}),{flush:"post"}),a((()=>n.content),(()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.updatePopper)||t.call(e)})),t({contentRef:s}),(e,t)=>(E(),H(X,{disabled:!e.teleported,to:p(B)},[D(J,{name:p(k),onAfterLeave:F,onBeforeEnter:N,onAfterEnter:z,onBeforeLeave:U},{default:$((()=>[p(S)?j((E(),H(p(sn),W({key:0,id:p(d),ref_key:"contentRef",ref:s},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":p(P),"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,p(M)],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:p(C),"z-index":e.zIndex,onMouseenter:p(_),onMouseleave:p(I),onBlur:V,onClose:p(g)}),{default:$((()=>[l.value?q("v-if",!0):x(e.$slots,"default",{key:0})])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Z,p(C)]]):q("v-if",!0)])),_:3},8,["name"])],8,["disabled","to"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const On=["innerHTML"],Rn={key:1},An=w({name:"ElTooltip"});const En=U(O(w({...An,props:mn,emits:gn,setup(e,{expose:t,emit:n}){const o=e;Lt();const i=oe(),s=f(),u=f(),c=()=>{var e;const t=p(s);t&&(null==(e=t.popperInstanceRef)||e.update())},d=f(!1),v=f(),{show:m,hide:g,hasUpdateHandler:h}=vn({indicator:d,toggleReason:v}),{onOpen:y,onClose:w}=_t({showAfter:K(o,"showAfter"),hideAfter:K(o,"hideAfter"),autoClose:K(o,"autoClose"),open:m,close:g}),O=r((()=>l(o.visible)&&!h.value));b(pn,{controlled:O,id:i,open:G(d),trigger:K(o,"trigger"),onOpen:e=>{y(e)},onClose:e=>{w(e)},onToggle:e=>{p(d)?w(e):y(e)},onShow:()=>{n("show",v.value)},onHide:()=>{n("hide",v.value)},onBeforeShow:()=>{n("before-show",v.value)},onBeforeHide:()=>{n("before-hide",v.value)},updatePopper:c}),a((()=>o.disabled),(e=>{e&&d.value&&(d.value=!1)}));return Q((()=>d.value&&g())),t({popperRef:s,contentRef:u,isFocusInsideContent:()=>{var e,t;const n=null==(t=null==(e=u.value)?void 0:e.contentRef)?void 0:t.popperContentRef;return n&&n.contains(document.activeElement)},updatePopper:c,onOpen:y,onClose:w,hide:g}),(e,t)=>(E(),H(p(ln),{ref_key:"popperRef",ref:s,role:e.role},{default:$((()=>[D(bn,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:$((()=>[e.$slots.default?x(e.$slots,"default",{key:0}):q("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),D(xn,{ref_key:"contentRef",ref:u,"aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.showAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:$((()=>[x(e.$slots,"content",{},(()=>[e.rawContent?(E(),k("span",{key:0,innerHTML:e.content},null,8,On)):(E(),k("span",Rn,ee(e.content),1))])),e.showArrow?(E(),H(p(Vt),{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):q("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]));export{En as E,Kt as O,pn as T,un as a,Ae as b,ie as c,_t as d,fn as u,se as w,jt as y};
