import{bZ as e,b_ as a,bh as t,b$ as n,ba as l,bb as o,c0 as s,be as r,b9 as i,bg as u,c1 as c,o as d,Y as v,S as f,A as p,R as m,bn as b,a2 as h,K as g,aY as y,V as C,a7 as k,a5 as x,j as E,y as w,b5 as B,h as L,r as _,aG as I,a1 as S,bq as M,d as R,aX as A,u as z,a as $,l as j,w as T,k as F,n as O,f as V,D,c as P,c2 as U,e as q,W as H,a4 as K,q as N,H as G,m as Y,_ as X,aa as W,b as Z,g as J,p as Q,t as ee,s as ae,v as te,z as ne,C as le,E as oe,c3 as se,F as re,ar as ie,I as ue,T as ce,J as de,c4 as ve,bF as fe,Q as pe,c5 as me,B as be,G as he,a8 as ge,aU as ye,b0 as Ce,c6 as ke,bx as xe,aZ as Ee,aV as we}from"./index-c36cfae6.js";import{U as Be,d as Le,F as _e,E as Ie}from"./focus-trap-1ea331f5.js";import{d as Se,a as Me,b as Re,c as Ae,u as ze,E as $e}from"./el-button-ec153427.js";import{m as je,p as Te,U as Fe,q as Oe,r as Ve,e as De,S as Pe,f as Ue,s as qe,a as He}from"./el-form-item-ada4d124.js";import{o as Ke,b as Ne,c as Ge,d as Ye,a as Xe,u as We,E as Ze,e as Je,i as Qe,f as ea}from"./el-overlay-1386f6f1.js";import{c as aa}from"./refs-26a382c6.js";import{u as ta}from"./index-d9e26d1a.js";function na(e){return e}var la=800,oa=16,sa=Date.now;var ra=e?function(a,t){return e(a,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n}:na;var ia,ua,ca;const da=(ia=ra,ua=0,ca=0,function(){var e=sa(),a=oa-(e-ca);if(ca=e,a>0){if(++ua>=la)return arguments[0]}else ua=0;return ia.apply(void 0,arguments)});var va=Math.max;function fa(e,a,t){return a=va(void 0===a?e.length-1:a,0),function(){for(var n=arguments,l=-1,o=va(n.length-a,0),s=Array(o);++l<o;)s[l]=n[a+l];l=-1;for(var r=Array(a+1);++l<a;)r[l]=n[l];return r[a]=t(s),function(e,a,t){switch(t.length){case 0:return e.call(a);case 1:return e.call(a,t[0]);case 2:return e.call(a,t[0],t[1]);case 3:return e.call(a,t[0],t[1],t[2])}return e.apply(a,t)}(e,this,r)}}var pa=a?a.isConcatSpreadable:void 0;function ma(e){return t(e)||je(e)||!!(pa&&e&&e[pa])}function ba(e,a,t,n,l){var o=-1,s=e.length;for(t||(t=ma),l||(l=[]);++o<s;){var r=e[o];a>0&&t(r)?a>1?ba(r,a-1,t,n,l):Te(l,r):n||(l[l.length]=r)}return l}function ha(e){return(null==e?0:e.length)?ba(e,1):[]}var ga="__lodash_hash_undefined__";function ya(e){var a=-1,t=null==e?0:e.length;for(this.__data__=new n;++a<t;)this.add(e[a])}function Ca(e,a){for(var t=-1,n=null==e?0:e.length;++t<n;)if(a(e[t],t,e))return!0;return!1}ya.prototype.add=ya.prototype.push=function(e){return this.__data__.set(e,ga),this},ya.prototype.has=function(e){return this.__data__.has(e)};var ka=1,xa=2;function Ea(e,a,t,n,l,o){var s=t&ka,r=e.length,i=a.length;if(r!=i&&!(s&&i>r))return!1;var u=o.get(e),c=o.get(a);if(u&&c)return u==a&&c==e;var d=-1,v=!0,f=t&xa?new ya:void 0;for(o.set(e,a),o.set(a,e);++d<r;){var p=e[d],m=a[d];if(n)var b=s?n(m,p,d,a,e,o):n(p,m,d,e,a,o);if(void 0!==b){if(b)continue;v=!1;break}if(f){if(!Ca(a,(function(e,a){if(s=a,!f.has(s)&&(p===e||l(p,e,t,n,o)))return f.push(a);var s}))){v=!1;break}}else if(p!==m&&!l(p,m,t,n,o)){v=!1;break}}return o.delete(e),o.delete(a),v}function wa(e){var a=-1,t=Array(e.size);return e.forEach((function(e,n){t[++a]=[n,e]})),t}function Ba(e){var a=-1,t=Array(e.size);return e.forEach((function(e){t[++a]=e})),t}var La=1,_a=2,Ia="[object Boolean]",Sa="[object Date]",Ma="[object Error]",Ra="[object Map]",Aa="[object Number]",za="[object RegExp]",$a="[object Set]",ja="[object String]",Ta="[object Symbol]",Fa="[object ArrayBuffer]",Oa="[object DataView]",Va=a?a.prototype:void 0,Da=Va?Va.valueOf:void 0;var Pa=1,Ua=Object.prototype.hasOwnProperty;var qa=1,Ha="[object Arguments]",Ka="[object Array]",Na="[object Object]",Ga=Object.prototype.hasOwnProperty;function Ya(e,a,n,o,s,r){var i=t(e),u=t(a),c=i?Ka:Ve(e),d=u?Ka:Ve(a),v=(c=c==Ha?Na:c)==Na,f=(d=d==Ha?Na:d)==Na,p=c==d;if(p&&De(e)){if(!De(a))return!1;i=!0,v=!1}if(p&&!v)return r||(r=new Pe),i||Ue(e)?Ea(e,a,n,o,s,r):function(e,a,t,n,o,s,r){switch(t){case Oa:if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case Fa:return!(e.byteLength!=a.byteLength||!s(new Fe(e),new Fe(a)));case Ia:case Sa:case Aa:return l(+e,+a);case Ma:return e.name==a.name&&e.message==a.message;case za:case ja:return e==a+"";case Ra:var i=wa;case $a:var u=n&La;if(i||(i=Ba),e.size!=a.size&&!u)return!1;var c=r.get(e);if(c)return c==a;n|=_a,r.set(e,a);var d=Ea(i(e),i(a),n,o,s,r);return r.delete(e),d;case Ta:if(Da)return Da.call(e)==Da.call(a)}return!1}(e,a,c,n,o,s,r);if(!(n&qa)){var m=v&&Ga.call(e,"__wrapped__"),b=f&&Ga.call(a,"__wrapped__");if(m||b){var h=m?e.value():e,g=b?a.value():a;return r||(r=new Pe),s(h,g,n,o,r)}}return!!p&&(r||(r=new Pe),function(e,a,t,n,l,o){var s=t&Pa,r=Oe(e),i=r.length;if(i!=Oe(a).length&&!s)return!1;for(var u=i;u--;){var c=r[u];if(!(s?c in a:Ua.call(a,c)))return!1}var d=o.get(e),v=o.get(a);if(d&&v)return d==a&&v==e;var f=!0;o.set(e,a),o.set(a,e);for(var p=s;++u<i;){var m=e[c=r[u]],b=a[c];if(n)var h=s?n(b,m,c,a,e,o):n(m,b,c,e,a,o);if(!(void 0===h?m===b||l(m,b,t,n,o):h)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var g=e.constructor,y=a.constructor;g==y||!("constructor"in e)||!("constructor"in a)||"function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y||(f=!1)}return o.delete(e),o.delete(a),f}(e,a,n,o,s,r))}function Xa(e,a,t,n,l){return e===a||(null==e||null==a||!o(e)&&!o(a)?e!=e&&a!=a:Ya(e,a,t,n,Xa,l))}function Wa(e,a){return null!=e&&a in Object(e)}function Za(e,a){return null!=e&&function(e,a,n){for(var l=-1,o=(a=s(a,e)).length,u=!1;++l<o;){var c=r(a[l]);if(!(u=null!=e&&n(e,c)))break;e=e[c]}return u||++l!=o?u:!!(o=null==e?0:e.length)&&qe(o)&&i(c,o)&&(t(e)||je(e))}(e,a,Wa)}function Ja(e,a){return Xa(e,a)}function Qa(e,a){return function(e,a,t){for(var n=-1,l=a.length,o={};++n<l;){var r=a[n],i=u(e,r);t(i,r)&&c(o,s(r,e),i)}return o}(e,a,(function(a,t){return Za(e,t)}))}var et=function(e){return da(fa(e,void 0,ha),e+"")}((function(e,a){return null==e?{}:Qa(e,a)}));const at=et,tt=(e,a,t)=>{let n={offsetX:0,offsetY:0};const l=a=>{const t=a.clientX,l=a.clientY,{offsetX:o,offsetY:s}=n,r=e.value.getBoundingClientRect(),i=r.left,u=r.top,c=r.width,d=r.height,v=document.documentElement.clientWidth,f=document.documentElement.clientHeight,m=-i+o,b=-u+s,h=v-i-c+o,g=f-u-d+s,y=a=>{const r=Math.min(Math.max(o+a.clientX-t,m),h),i=Math.min(Math.max(s+a.clientY-l,b),g);n={offsetX:r,offsetY:i},e.value.style.transform=`translate(${p(r)}, ${p(i)})`},C=()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",y),document.addEventListener("mouseup",C)},o=()=>{a.value&&e.value&&a.value.removeEventListener("mousedown",l)};d((()=>{v((()=>{t.value?a.value&&e.value&&a.value.addEventListener("mousedown",l):o()}))})),f((()=>{o()}))},nt="_trap-focus-children",lt=[],ot=e=>{if(0===lt.length)return;const a=lt[lt.length-1][nt];if(a.length>0&&e.code===g.tab){if(1===a.length)return e.preventDefault(),void(document.activeElement!==a[0]&&a[0].focus());const t=e.shiftKey,n=e.target===a[0],l=e.target===a[a.length-1];n&&t&&(e.preventDefault(),a[a.length-1].focus()),l&&!t&&(e.preventDefault(),a[0].focus())}},st={beforeMount(e){e[nt]=Ke(e),lt.push(e),lt.length<=1&&document.addEventListener("keydown",ot)},updated(e){h((()=>{e[nt]=Ke(e)}))},unmounted(){lt.shift(),0===lt.length&&document.removeEventListener("keydown",ot)}},rt={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:y,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},it={[Be]:e=>C(e)||k(e)||x(e),change:e=>C(e)||k(e)||x(e)},ut=Symbol("checkboxGroupContextKey"),ct=(e,{model:a,isLimitExceeded:t,hasOwnLabel:n,isDisabled:l,isLabeledByFormItem:o})=>{const s=E(ut,void 0),{formItem:r}=Me(),{emit:i}=L();function u(a){var t,n;return a===e.trueLabel||!0===a?null==(t=e.trueLabel)||t:null!=(n=e.falseLabel)&&n}const c=w((()=>(null==s?void 0:s.validateEvent)||e.validateEvent));return m((()=>e.modelValue),(()=>{c.value&&(null==r||r.validate("change").catch((e=>Le())))})),{handleChange:function(e){if(t.value)return;const a=e.target;i("change",u(a.checked),e)},onClickRoot:async function(s){if(!t.value&&!n.value&&!l.value&&o.value){s.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=u([!1,e.falseLabel].includes(a.value)),await h(),function(e,a){i("change",u(e),a)}(a.value,s))}}}},dt=(e,a)=>{const{formItem:t}=Me(),{model:n,isGroup:l,isLimitExceeded:o}=(e=>{const a=_(!1),{emit:t}=L(),n=E(ut,void 0),l=w((()=>!1===B(n))),o=_(!1);return{model:w({get(){var t,o;return l.value?null==(t=null==n?void 0:n.modelValue)?void 0:t.value:null!=(o=e.modelValue)?o:a.value},set(e){var s,r;l.value&&I(e)?(o.value=void 0!==(null==(s=null==n?void 0:n.max)?void 0:s.value)&&e.length>(null==n?void 0:n.max.value),!1===o.value&&(null==(r=null==n?void 0:n.changeEvent)||r.call(n,e))):(t(Be,e),a.value=e)}}),isGroup:l,isLimitExceeded:o}})(e),{isFocused:s,isChecked:r,checkboxButtonSize:i,checkboxSize:u,hasOwnLabel:c}=((e,a,{model:t})=>{const n=E(ut,void 0),l=_(!1),o=w((()=>{const a=t.value;return x(a)?a:I(a)?S(e.label)?a.map(M).some((a=>Ja(a,e.label))):a.map(M).includes(e.label):null!=a?a===e.trueLabel:!!a}));return{checkboxButtonSize:Re(w((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value})),{prop:!0}),isChecked:o,isFocused:l,checkboxSize:Re(w((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value}))),hasOwnLabel:w((()=>!(!a.default&&!e.label)))}})(e,a,{model:n}),{isDisabled:d}=(({model:e,isChecked:a})=>{const t=E(ut,void 0),n=w((()=>{var n,l;const o=null==(n=null==t?void 0:t.max)?void 0:n.value,s=null==(l=null==t?void 0:t.min)?void 0:l.value;return!B(o)&&e.value.length>=o&&!a.value||!B(s)&&e.value.length<=s&&a.value}));return{isDisabled:Se(w((()=>(null==t?void 0:t.disabled.value)||n.value))),isLimitDisabled:n}})({model:n,isChecked:r}),{inputId:v,isLabeledByFormItem:f}=Ae(e,{formItemContext:t,disableIdGeneration:c,disableIdManagement:l}),{handleChange:p,onClickRoot:m}=ct(e,{model:n,isLimitExceeded:o,hasOwnLabel:c,isDisabled:d,isLabeledByFormItem:f});return((e,{model:a})=>{e.checked&&(I(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:n}),{inputId:v,isLabeledByFormItem:f,isChecked:r,isDisabled:d,isFocused:s,checkboxButtonSize:i,checkboxSize:u,hasOwnLabel:c,model:n,handleChange:p,onClickRoot:m}},vt=["tabindex","role","aria-checked"],ft=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],pt=["id","aria-hidden","disabled","value","name","tabindex"],mt=R({name:"ElCheckbox"});var bt=X(R({...mt,props:rt,emits:it,setup(e){const a=e,t=A(),{inputId:n,isLabeledByFormItem:l,isChecked:o,isDisabled:s,isFocused:r,checkboxSize:i,hasOwnLabel:u,model:c,handleChange:d,onClickRoot:v}=dt(a,t),f=z("checkbox"),p=w((()=>[f.b(),f.m(i.value),f.is("disabled",s.value),f.is("bordered",a.border),f.is("checked",o.value)])),m=w((()=>[f.e("input"),f.is("disabled",s.value),f.is("checked",o.value),f.is("indeterminate",a.indeterminate),f.is("focus",r.value)]));return(e,a)=>($(),j(Y(!V(u)&&V(l)?"span":"label"),{class:O(V(p)),"aria-controls":e.indeterminate?e.controls:null,onClick:V(v)},{default:T((()=>[F("span",{class:O(V(m)),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[e.trueLabel||e.falseLabel?D(($(),P("input",{key:0,id:V(n),"onUpdate:modelValue":a[0]||(a[0]=e=>b(c)?c.value=e:null),class:O(V(f).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:V(s),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>V(d)&&V(d)(...e)),onFocus:a[2]||(a[2]=e=>r.value=!0),onBlur:a[3]||(a[3]=e=>r.value=!1)},null,42,ft)),[[U,V(c)]]):D(($(),P("input",{key:1,id:V(n),"onUpdate:modelValue":a[4]||(a[4]=e=>b(c)?c.value=e:null),class:O(V(f).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:V(s),value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...e)=>V(d)&&V(d)(...e)),onFocus:a[6]||(a[6]=e=>r.value=!0),onBlur:a[7]||(a[7]=e=>r.value=!1)},null,42,pt)),[[U,V(c)]]),F("span",{class:O(V(f).e("inner"))},null,2)],10,vt),V(u)?($(),P("span",{key:0,class:O(V(f).e("label"))},[q(e.$slots,"default"),e.$slots.default?G("v-if",!0):($(),P(H,{key:0},[K(N(e.label),1)],64))],2)):G("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ht=["name","tabindex","disabled","true-value","false-value"],gt=["name","tabindex","disabled","value"],yt=R({name:"ElCheckboxButton"});var Ct=X(R({...yt,props:rt,emits:it,setup(e){const a=e,t=A(),{isFocused:n,isChecked:l,isDisabled:o,checkboxButtonSize:s,model:r,handleChange:i}=dt(a,t),u=E(ut,void 0),c=z("checkbox"),d=w((()=>{var e,a,t,n;const l=null!=(a=null==(e=null==u?void 0:u.fill)?void 0:e.value)?a:"";return{backgroundColor:l,borderColor:l,color:null!=(n=null==(t=null==u?void 0:u.textColor)?void 0:t.value)?n:"",boxShadow:l?`-1px 0 0 0 ${l}`:void 0}})),v=w((()=>[c.b("button"),c.bm("button",s.value),c.is("disabled",o.value),c.is("checked",l.value),c.is("focus",n.value)]));return(e,a)=>($(),P("label",{class:O(V(v))},[e.trueLabel||e.falseLabel?D(($(),P("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>b(r)?r.value=e:null),class:O(V(c).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:V(o),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>V(i)&&V(i)(...e)),onFocus:a[2]||(a[2]=e=>n.value=!0),onBlur:a[3]||(a[3]=e=>n.value=!1)},null,42,ht)),[[U,V(r)]]):D(($(),P("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=e=>b(r)?r.value=e:null),class:O(V(c).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:V(o),value:e.label,onChange:a[5]||(a[5]=(...e)=>V(i)&&V(i)(...e)),onFocus:a[6]||(a[6]=e=>n.value=!0),onBlur:a[7]||(a[7]=e=>n.value=!1)},null,42,gt)),[[U,V(r)]]),e.$slots.default||e.label?($(),P("span",{key:2,class:O(V(c).be("button","inner")),style:W(V(l)?V(d):void 0)},[q(e.$slots,"default",{},(()=>[K(N(e.label),1)]))],6)):G("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const kt=Z({modelValue:{type:J(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:y,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),xt={[Be]:e=>I(e),change:e=>I(e)},Et=R({name:"ElCheckboxGroup"});var wt=X(R({...Et,props:kt,emits:xt,setup(e,{emit:a}){const t=e,n=z("checkbox"),{formItem:l}=Me(),{inputId:o,isLabeledByFormItem:s}=Ae(t,{formItemContext:l}),r=async e=>{a(Be,e),await h(),a("change",e)},i=w({get:()=>t.modelValue,set(e){r(e)}});return Q(ut,{...at(ee(t),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:i,changeEvent:r}),m((()=>t.modelValue),(()=>{t.validateEvent&&(null==l||l.validate("change").catch((e=>Le())))})),(e,a)=>{var t;return $(),j(Y(e.tag),{id:V(o),class:O(V(n).b("group")),role:"group","aria-label":V(s)?void 0:e.label||"checkbox-group","aria-labelledby":V(s)?null==(t=V(l))?void 0:t.labelId:void 0},{default:T((()=>[q(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Bt=ae(bt,{CheckboxButton:Ct,CheckboxGroup:wt});te(Ct);const Lt=te(wt),_t=Symbol("dialogInjectionKey"),It=["aria-label"],St=["id"],Mt=R({name:"ElDialogContent"});var Rt=X(R({...Mt,props:Ne,emits:Ge,setup(e){const a=e,{t:t}=ne(),{Close:n}=se,{dialogRef:l,headerRef:o,bodyId:s,ns:r,style:i}=E(_t),{focusTrapRef:u}=E(_e),c=aa(u,l),d=w((()=>a.draggable));return tt(l,o,d),(e,a)=>($(),P("div",{ref:V(c),class:O([V(r).b(),V(r).is("fullscreen",e.fullscreen),V(r).is("draggable",V(d)),V(r).is("align-center",e.alignCenter),{[V(r).m("center")]:e.center},e.customClass]),style:W(V(i)),tabindex:"-1"},[F("header",{ref_key:"headerRef",ref:o,class:O(V(r).e("header"))},[q(e.$slots,"header",{},(()=>[F("span",{role:"heading",class:O(V(r).e("title"))},N(e.title),3)])),e.showClose?($(),P("button",{key:0,"aria-label":V(t)("el.dialog.close"),class:O(V(r).e("headerbtn")),type:"button",onClick:a[0]||(a[0]=a=>e.$emit("close"))},[le(V(oe),{class:O(V(r).e("close"))},{default:T((()=>[($(),j(Y(e.closeIcon||V(n))))])),_:1},8,["class"])],10,It)):G("v-if",!0)],2),F("div",{id:V(s),class:O(V(r).e("body"))},[q(e.$slots,"default")],10,St),e.$slots.footer?($(),P("footer",{key:0,class:O(V(r).e("footer"))},[q(e.$slots,"footer")],2)):G("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const At=["aria-label","aria-labelledby","aria-describedby"],zt=R({name:"ElDialog",inheritAttrs:!1});const $t=ae(X(R({...zt,props:Ye,emits:Xe,setup(e,{expose:a}){const t=e,n=A();ze({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},w((()=>!!n.title))),ze({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},w((()=>!!t.customClass)));const l=z("dialog"),o=_(),s=_(),r=_(),{visible:i,titleId:u,bodyId:c,style:d,overlayDialogStyle:v,rendered:f,zIndex:p,afterEnter:m,afterLeave:b,beforeLeave:h,handleClose:g,onModalClick:y,onOpenAutoFocus:C,onCloseAutoFocus:k,onCloseRequested:x,onFocusoutPrevented:E}=We(t,o);Q(_t,{dialogRef:o,headerRef:s,bodyId:c,ns:l,rendered:f,style:d});const B=Je(y),L=w((()=>t.draggable&&!t.fullscreen));return a({visible:i,dialogContentRef:r}),(e,a)=>($(),j(de,{to:"body",disabled:!e.appendToBody},[le(ce,{name:"dialog-fade",onAfterEnter:V(m),onAfterLeave:V(b),onBeforeLeave:V(h),persisted:""},{default:T((()=>[D(le(V(Ze),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":V(p)},{default:T((()=>[F("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:V(u),"aria-describedby":V(c),class:O(`${V(l).namespace.value}-overlay-dialog`),style:W(V(v)),onClick:a[0]||(a[0]=(...e)=>V(B).onClick&&V(B).onClick(...e)),onMousedown:a[1]||(a[1]=(...e)=>V(B).onMousedown&&V(B).onMousedown(...e)),onMouseup:a[2]||(a[2]=(...e)=>V(B).onMouseup&&V(B).onMouseup(...e))},[le(V(Ie),{loop:"",trapped:V(i),"focus-start-el":"container",onFocusAfterTrapped:V(C),onFocusAfterReleased:V(k),onFocusoutPrevented:V(E),onReleaseRequested:V(x)},{default:T((()=>[V(f)?($(),j(Rt,re({key:0,ref_key:"dialogContentRef",ref:r},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:V(L),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,onClose:V(g)}),ie({header:T((()=>[e.$slots.title?q(e.$slots,"title",{key:1}):q(e.$slots,"header",{key:0,close:V(g),titleId:V(u),titleClass:V(l).e("title")})])),default:T((()=>[q(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:T((()=>[q(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):G("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,At)])),_:3},8,["mask","overlay-class","z-index"]),[[ue,V(i)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]])),jt=R({name:"ElMessageBox",directives:{TrapFocus:st},components:{ElButton:$e,ElFocusTrap:Ie,ElInput:He,ElOverlay:Ze,ElIcon:oe,...ve},inheritAttrs:!1,props:{buttonSize:{type:String,validator:Qe},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:a}){const{locale:t,zIndex:n,ns:l,size:o}=fe("message-box",w((()=>e.buttonSize))),{t:s}=t,{nextZIndex:r}=n,i=_(!1),u=pe({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:r()}),c=w((()=>{const e=u.type;return{[l.bm("icon",e)]:e&&me[e]}})),v=ta(),p=ta(),g=w((()=>u.icon||me[u.type]||"")),y=w((()=>!!u.message)),C=_(),k=_(),x=_(),E=_(),B=_(),L=w((()=>u.confirmButtonClass));m((()=>u.inputValue),(async a=>{await h(),"prompt"===e.boxType&&null!==a&&z()}),{immediate:!0}),m((()=>i.value),(a=>{var t,n;a&&("prompt"!==e.boxType&&(u.autofocus?x.value=null!=(n=null==(t=B.value)?void 0:t.$el)?n:C.value:x.value=C.value),u.zIndex=r()),"prompt"===e.boxType&&(a?h().then((()=>{var e;E.value&&E.value.$el&&(u.autofocus?x.value=null!=(e=$())?e:C.value:x.value=C.value)})):(u.editorErrorMessage="",u.validateError=!1))}));const I=w((()=>e.draggable));function S(){i.value&&(i.value=!1,h((()=>{u.action&&a("action",u.action)})))}tt(C,k,I),d((async()=>{await h(),e.closeOnHashChange&&window.addEventListener("hashchange",S)})),f((()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",S)}));const M=()=>{e.closeOnClickModal&&A(u.distinguishCancelAndClose?"close":"cancel")},R=Je(M),A=a=>{var t;("prompt"!==e.boxType||"confirm"!==a||z())&&(u.action=a,u.beforeClose?null==(t=u.beforeClose)||t.call(u,a,u,S):S())},z=()=>{if("prompt"===e.boxType){const e=u.inputPattern;if(e&&!e.test(u.inputValue||""))return u.editorErrorMessage=u.inputErrorMessage||s("el.messagebox.error"),u.validateError=!0,!1;const a=u.inputValidator;if("function"==typeof a){const e=a(u.inputValue);if(!1===e)return u.editorErrorMessage=u.inputErrorMessage||s("el.messagebox.error"),u.validateError=!0,!1;if("string"==typeof e)return u.editorErrorMessage=e,u.validateError=!0,!1}}return u.editorErrorMessage="",u.validateError=!1,!0},$=()=>{const e=E.value.$refs;return e.input||e.textarea},j=()=>{A("close")};return e.lockScroll&&ea(i),((e,a)=>{let t;m((()=>e.value),(e=>{var n,l;e?(t=document.activeElement,b(a)&&(null==(l=(n=a.value).focus)||l.call(n))):t.focus()}))})(i),{...ee(u),ns:l,overlayEvent:R,visible:i,hasMessage:y,typeClass:c,contentId:v,inputId:p,btnSize:o,iconComponent:g,confirmButtonClasses:L,rootRef:C,focusStartRef:x,headerRef:k,inputRef:E,confirmRef:B,doClose:S,handleClose:j,onCloseRequested:()=>{e.closeOnPressEscape&&j()},handleWrapperClick:M,handleInputEnter:e=>{if("textarea"!==u.inputType)return e.preventDefault(),A("confirm")},handleAction:A,t:s}}}),Tt=["aria-label","aria-describedby"],Ft=["aria-label"],Ot=["id"];var Vt=X(jt,[["render",function(e,a,t,n,l,o){const s=be("el-icon"),r=be("close"),i=be("el-input"),u=be("el-button"),c=be("el-focus-trap"),d=be("el-overlay");return $(),j(ce,{name:"fade-in-linear",onAfterLeave:a[11]||(a[11]=a=>e.$emit("vanish")),persisted:""},{default:T((()=>[D(le(d,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:T((()=>[F("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:O(`${e.ns.namespace.value}-overlay-message-box`),onClick:a[8]||(a[8]=(...a)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...a)),onMousedown:a[9]||(a[9]=(...a)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...a)),onMouseup:a[10]||(a[10]=(...a)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...a))},[le(c,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:T((()=>[F("div",{ref:"rootRef",class:O([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:W(e.customStyle),tabindex:"-1",onClick:a[7]||(a[7]=he((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?($(),P("div",{key:0,ref:"headerRef",class:O(e.ns.e("header"))},[F("div",{class:O(e.ns.e("title"))},[e.iconComponent&&e.center?($(),j(s,{key:0,class:O([e.ns.e("status"),e.typeClass])},{default:T((()=>[($(),j(Y(e.iconComponent)))])),_:1},8,["class"])):G("v-if",!0),F("span",null,N(e.title),1)],2),e.showClose?($(),P("button",{key:0,type:"button",class:O(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:a[0]||(a[0]=a=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:a[1]||(a[1]=ge(he((a=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[le(s,{class:O(e.ns.e("close"))},{default:T((()=>[le(r)])),_:1},8,["class"])],42,Ft)):G("v-if",!0)],2)):G("v-if",!0),F("div",{id:e.contentId,class:O(e.ns.e("content"))},[F("div",{class:O(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?($(),j(s,{key:0,class:O([e.ns.e("status"),e.typeClass])},{default:T((()=>[($(),j(Y(e.iconComponent)))])),_:1},8,["class"])):G("v-if",!0),e.hasMessage?($(),P("div",{key:1,class:O(e.ns.e("message"))},[q(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?($(),j(Y(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):($(),j(Y(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:T((()=>[K(N(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):G("v-if",!0)],2),D(F("div",{class:O(e.ns.e("input"))},[le(i,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":a[2]||(a[2]=a=>e.inputValue=a),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:O({invalid:e.validateError}),onKeydown:ge(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),F("div",{class:O(e.ns.e("errormsg")),style:W({visibility:e.editorErrorMessage?"visible":"hidden"})},N(e.editorErrorMessage),7)],2),[[ue,e.showInput]])],10,Ot),F("div",{class:O(e.ns.e("btns"))},[e.showCancelButton?($(),j(u,{key:0,loading:e.cancelButtonLoading,class:O([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:a[3]||(a[3]=a=>e.handleAction("cancel")),onKeydown:a[4]||(a[4]=ge(he((a=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:T((()=>[K(N(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):G("v-if",!0),D(le(u,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:O([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:a[5]||(a[5]=a=>e.handleAction("confirm")),onKeydown:a[6]||(a[6]=ge(he((a=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:T((()=>[K(N(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[ue,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Tt)])),_:3},8,["z-index","overlay-class","mask"]),[[ue,e.visible]])])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const Dt=new Map,Pt=(e,a,t=null)=>{const n=le(Vt,e,Ee(e.message)||Ce(e.message)?{default:Ee(e.message)?e.message:()=>e.message}:null);return n.appContext=t,ke(n,a),(e=>{let a=document.body;return e.appendTo&&(C(e.appendTo)&&(a=document.querySelector(e.appendTo)),we(e.appendTo)&&(a=e.appendTo),we(a)||(a=document.body)),a})(e).appendChild(a.firstElementChild),n.component},Ut=(e,a)=>{const t=document.createElement("div");e.onVanish=()=>{ke(null,t),Dt.delete(l)},e.onAction=a=>{const t=Dt.get(l);let o;o=e.showInput?{value:l.inputValue,action:a}:a,e.callback?e.callback(o,n.proxy):"cancel"===a||"close"===a?e.distinguishCancelAndClose&&"cancel"!==a?t.reject("close"):t.reject("cancel"):t.resolve(o)};const n=Pt(e,t,a),l=n.proxy;for(const o in e)xe(e,o)&&!xe(l.$props,o)&&(l[o]=e[o]);return l.visible=!0,l};function qt(e,a=null){if(!ye)return Promise.reject();let t;return C(e)||Ce(e)?e={message:e}:t=e.callback,new Promise(((n,l)=>{const o=Ut(e,null!=a?a:qt._context);Dt.set(o,{options:e,callback:t,resolve:n,reject:l})}))}const Ht={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{qt[e]=function(e){return(a,t,n,l)=>{let o="";return S(t)?(n=t,o=""):o=B(t)?"":t,qt(Object.assign({title:o,message:a,type:"",...Ht[e]},n,{boxType:e}),l)}}(e)})),qt.close=()=>{Dt.forEach(((e,a)=>{a.doClose()})),Dt.clear()},qt._context=null;const Kt=qt;Kt.install=e=>{Kt._context=e._context,e.config.globalProperties.$msgbox=Kt,e.config.globalProperties.$messageBox=Kt,e.config.globalProperties.$alert=Kt.alert,e.config.globalProperties.$confirm=Kt.confirm,e.config.globalProperties.$prompt=Kt.prompt};const Nt=Kt;export{Bt as E,ba as a,Xa as b,Ja as c,Nt as d,$t as e,Lt as f,Za as h,na as i,fa as o,da as s};
