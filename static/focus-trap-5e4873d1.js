import{b7 as e,o as t,aS as n,S as o,K as s,r,d as a,p as u,R as c,f as d,_ as i,a2 as l,V as f,e as p}from"./index-5cd95c96.js";function v(e){return null==e}class m extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function E(e,t){throw new m(`[${e}] ${t}`)}function w(e,t){}const y=(...t)=>n=>{t.forEach((t=>{e(t)?t(n):t.value=n}))},h="update:modelValue",L="change",T="input";let b=[];const g=e=>{const t=e;t.key===s.esc&&b.forEach((e=>e(t)))},k="focus-trap.focus-after-trapped",R="focus-trap.focus-after-released",F={cancelable:!0,bubbles:!1},S={cancelable:!0,bubbles:!1},K="focusAfterTrapped",P="focusAfterReleased",N=Symbol("elFocusTrap"),I=r(),C=r(0),_=r(0);let x=0;const A=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0||e===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},O=(e,t)=>{for(const n of e)if(!j(n,t))return n},j=(e,t)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},D=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),_.value=window.performance.now(),e!==n&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&t&&e.select()}};function U(e,t){const n=[...e],o=e.indexOf(t);return-1!==o&&n.splice(o,1),n}const $=(()=>{let e=[];return{push:t=>{const n=e[0];n&&t!==n&&n.pause(),e=U(e,t),e.unshift(t)},remove:t=>{var n,o;e=U(e,t),null==(o=null==(n=e[0])?void 0:n.resume)||o.call(n)}}})(),q=()=>{I.value="pointer",C.value=window.performance.now()},B=()=>{I.value="keyboard",C.value=window.performance.now()},H=e=>new CustomEvent("focus-trap.focusout-prevented",{...S,detail:e});var M=i(a({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[K,P,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:a}){const i=r();let p,m;const{focusReason:E}=(t((()=>{0===x&&(document.addEventListener("mousedown",q),document.addEventListener("touchstart",q),document.addEventListener("keydown",B)),x++})),o((()=>{x--,x<=0&&(document.removeEventListener("mousedown",q),document.removeEventListener("touchstart",q),document.removeEventListener("keydown",B))})),{focusReason:I,lastUserFocusTimestamp:C,lastAutomatedFocusTimestamp:_});var w;w=t=>{e.trapped&&!y.paused&&a("release-requested",t)},t((()=>{0===b.length&&document.addEventListener("keydown",g),n&&b.push(w)})),o((()=>{b=b.filter((e=>e!==w)),0===b.length&&n&&document.removeEventListener("keydown",g)}));const y={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},h=t=>{if(!e.loop&&!e.trapped)return;if(y.paused)return;const{key:n,altKey:o,ctrlKey:r,metaKey:u,currentTarget:c,shiftKey:d}=t,{loop:i}=e,l=n===s.tab&&!o&&!r&&!u,f=document.activeElement;if(l&&f){const e=c,[n,o]=(e=>{const t=A(e);return[O(t,e),O(t.reverse(),e)]})(e);if(n&&o)if(d||f!==o){if(d&&[n,e].includes(f)){const e=H({focusReason:E.value});a("focusout-prevented",e),e.defaultPrevented||(t.preventDefault(),i&&D(o,!0))}}else{const e=H({focusReason:E.value});a("focusout-prevented",e),e.defaultPrevented||(t.preventDefault(),i&&D(n,!0))}else if(f===e){const e=H({focusReason:E.value});a("focusout-prevented",e),e.defaultPrevented||t.preventDefault()}}};u(N,{focusTrapRef:i,onKeydown:h}),c((()=>e.focusTrapEl),(e=>{e&&(i.value=e)}),{immediate:!0}),c([i],(([e],[t])=>{e&&(e.addEventListener("keydown",h),e.addEventListener("focusin",S),e.addEventListener("focusout",j)),t&&(t.removeEventListener("keydown",h),t.removeEventListener("focusin",S),t.removeEventListener("focusout",j))}));const L=e=>{a(K,e)},T=e=>a(P,e),S=t=>{const n=d(i);if(!n)return;const o=t.target,s=t.relatedTarget,r=o&&n.contains(o);if(!e.trapped){s&&n.contains(s)||(p=s)}r&&a("focusin",t),y.paused||e.trapped&&(r?m=o:D(m,!0))},j=t=>{const n=d(i);if(!y.paused&&n)if(e.trapped){const o=t.relatedTarget;v(o)||n.contains(o)||setTimeout((()=>{if(!y.paused&&e.trapped){const e=H({focusReason:E.value});a("focusout-prevented",e),e.defaultPrevented||D(m,!0)}}),0)}else{const e=t.target;e&&n.contains(e)||a("focusout",t)}};async function U(){await l();const t=d(i);if(t){$.push(y);const n=t.contains(document.activeElement)?p:document.activeElement;p=n;if(!t.contains(n)){const o=new Event(k,F);t.addEventListener(k,L),t.dispatchEvent(o),o.defaultPrevented||l((()=>{let o=e.focusStartEl;f(o)||(D(o),document.activeElement!==o&&(o="first")),"first"===o&&((e,t=!1)=>{const n=document.activeElement;for(const o of e)if(D(o,t),document.activeElement!==n)return})(A(t),!0),document.activeElement!==n&&"container"!==o||D(t)}))}}}function M(){const e=d(i);if(e){e.removeEventListener(k,L);const t=new CustomEvent(R,{...F,detail:{focusReason:E.value}});e.addEventListener(R,T),e.dispatchEvent(t),t.defaultPrevented||"keyboard"!=E.value&&C.value>_.value&&!e.contains(document.activeElement)||D(null!=p?p:document.body),e.removeEventListener(R,L),$.remove(y)}}return t((()=>{e.trapped&&U(),c((()=>e.trapped),(e=>{e?U():M()}))})),o((()=>{e.trapped&&M()})),{onKeydown:h}}}),[["render",function(e,t,n,o,s,r){return p(e.$slots,"default",{handleKeydown:e.onKeydown})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{L as C,M as E,N as F,T as I,h as U,y as c,w as d,v as i,E as t};
