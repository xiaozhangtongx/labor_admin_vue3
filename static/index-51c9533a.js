import{c4 as e,c5 as a,bo as l,bj as n,bq as t,bp as o,c6 as i,a_ as u,V as s,a7 as r,a5 as d,j as c,y as b,b3 as v,h as m,R as h,a2 as f,r as p,aE as k,a1 as x,bJ as g,d as y,b4 as C,u as L,a as B,l as S,w as E,k as I,n as w,f as F,D as z,c as V,bu as j,c7 as D,e as _,W as N,a4 as O,q as G,H as $,m as R,_ as U,aa as A,b as q,g as M,p as W,t as H,s as J,v as K}from"./index-442db11c.js";import{U as P,d as Q}from"./focus-trap-1ae2c557.js";import{d as T,a as X,b as Y,c as Z}from"./el-button-6cab2065.js";import{i as ee}from"./isEqual-34ff0f4b.js";import{f as ae,e as le}from"./index-43c84df1.js";import{f as ne}from"./flatten-f26fac34.js";function te(e){return e}var oe=800,ie=16,ue=Date.now;var se=e?function(a,l){return e(a,"toString",{configurable:!0,enumerable:!1,value:(n=l,function(){return n}),writable:!0});var n}:te;var re,de,ce;const be=(re=se,de=0,ce=0,function(){var e=ue(),a=ie-(e-ce);if(ce=e,a>0){if(++de>=oe)return arguments[0]}else de=0;return re.apply(void 0,arguments)});var ve=Math.max;function me(e,a,l){return a=ve(void 0===a?e.length-1:a,0),function(){for(var n=arguments,t=-1,o=ve(n.length-a,0),i=Array(o);++t<o;)i[t]=n[a+t];t=-1;for(var u=Array(a+1);++t<a;)u[t]=n[t];return u[a]=l(i),function(e,a,l){switch(l.length){case 0:return e.call(a);case 1:return e.call(a,l[0]);case 2:return e.call(a,l[0],l[1]);case 3:return e.call(a,l[0],l[1],l[2])}return e.apply(a,l)}(e,this,u)}}function he(e,a){return null!=e&&a in Object(e)}function fe(e,o){return null!=e&&function(e,o,i){for(var u=-1,s=(o=a(o,e)).length,r=!1;++u<s;){var d=l(o[u]);if(!(r=null!=e&&i(e,d)))break;e=e[d]}return r||++u!=s?r:!!(s=null==e?0:e.length)&&ae(s)&&n(d,s)&&(t(e)||le(e))}(e,o,he)}function pe(e,l){return function(e,l,n){for(var t=-1,u=l.length,s={};++t<u;){var r=l[t],d=o(e,r);n(d,r)&&i(s,a(r,e),d)}return s}(e,l,(function(a,l){return fe(e,l)}))}var ke=function(e){return be(me(e,void 0,ne),e+"")}((function(e,a){return null==e?{}:pe(e,a)}));const xe=ke,ge={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:u,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ye={[P]:e=>s(e)||r(e)||d(e),change:e=>s(e)||r(e)||d(e)},Ce=Symbol("checkboxGroupContextKey"),Le=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:t,isLabeledByFormItem:o})=>{const i=c(Ce,void 0),{formItem:u}=X(),{emit:s}=m();function r(a){var l,n;return a===e.trueLabel||!0===a?null==(l=e.trueLabel)||l:null!=(n=e.falseLabel)&&n}const d=b((()=>(null==i?void 0:i.validateEvent)||e.validateEvent));return h((()=>e.modelValue),(()=>{d.value&&(null==u||u.validate("change").catch((e=>Q())))})),{handleChange:function(e){if(l.value)return;const a=e.target;s("change",r(a.checked),e)},onClickRoot:async function(i){if(!l.value&&!n.value&&!t.value&&o.value){i.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=r([!1,e.falseLabel].includes(a.value)),await f(),function(e,a){s("change",r(e),a)}(a.value,i))}}}},Be=(e,a)=>{const{formItem:l}=X(),{model:n,isGroup:t,isLimitExceeded:o}=(e=>{const a=p(!1),{emit:l}=m(),n=c(Ce,void 0),t=b((()=>!1===v(n))),o=p(!1);return{model:b({get(){var l,o;return t.value?null==(l=null==n?void 0:n.modelValue)?void 0:l.value:null!=(o=e.modelValue)?o:a.value},set(e){var i,u;t.value&&k(e)?(o.value=void 0!==(null==(i=null==n?void 0:n.max)?void 0:i.value)&&e.length>(null==n?void 0:n.max.value),!1===o.value&&(null==(u=null==n?void 0:n.changeEvent)||u.call(n,e))):(l(P,e),a.value=e)}}),isGroup:t,isLimitExceeded:o}})(e),{isFocused:i,isChecked:u,checkboxButtonSize:s,checkboxSize:r,hasOwnLabel:h}=((e,a,{model:l})=>{const n=c(Ce,void 0),t=p(!1),o=b((()=>{const a=l.value;return d(a)?a:k(a)?x(e.label)?a.map(g).some((a=>ee(a,e.label))):a.map(g).includes(e.label):null!=a?a===e.trueLabel:!!a}));return{checkboxButtonSize:Y(b((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value})),{prop:!0}),isChecked:o,isFocused:t,checkboxSize:Y(b((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value}))),hasOwnLabel:b((()=>!(!a.default&&!e.label)))}})(e,a,{model:n}),{isDisabled:f}=(({model:e,isChecked:a})=>{const l=c(Ce,void 0),n=b((()=>{var n,t;const o=null==(n=null==l?void 0:l.max)?void 0:n.value,i=null==(t=null==l?void 0:l.min)?void 0:t.value;return!v(o)&&e.value.length>=o&&!a.value||!v(i)&&e.value.length<=i&&a.value}));return{isDisabled:T(b((()=>(null==l?void 0:l.disabled.value)||n.value))),isLimitDisabled:n}})({model:n,isChecked:u}),{inputId:y,isLabeledByFormItem:C}=Z(e,{formItemContext:l,disableIdGeneration:h,disableIdManagement:t}),{handleChange:L,onClickRoot:B}=Le(e,{model:n,isLimitExceeded:o,hasOwnLabel:h,isDisabled:f,isLabeledByFormItem:C});return((e,{model:a})=>{e.checked&&(k(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:n}),{inputId:y,isLabeledByFormItem:C,isChecked:u,isDisabled:f,isFocused:i,checkboxButtonSize:s,checkboxSize:r,hasOwnLabel:h,model:n,handleChange:L,onClickRoot:B}},Se=["tabindex","role","aria-checked"],Ee=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Ie=["id","aria-hidden","disabled","value","name","tabindex"],we=y({name:"ElCheckbox"});var Fe=U(y({...we,props:ge,emits:ye,setup(e){const a=e,l=C(),{inputId:n,isLabeledByFormItem:t,isChecked:o,isDisabled:i,isFocused:u,checkboxSize:s,hasOwnLabel:r,model:d,handleChange:c,onClickRoot:v}=Be(a,l),m=L("checkbox"),h=b((()=>[m.b(),m.m(s.value),m.is("disabled",i.value),m.is("bordered",a.border),m.is("checked",o.value)])),f=b((()=>[m.e("input"),m.is("disabled",i.value),m.is("checked",o.value),m.is("indeterminate",a.indeterminate),m.is("focus",u.value)]));return(e,a)=>(B(),S(R(!F(r)&&F(t)?"span":"label"),{class:w(F(h)),"aria-controls":e.indeterminate?e.controls:null,onClick:F(v)},{default:E((()=>[I("span",{class:w(F(f)),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[e.trueLabel||e.falseLabel?z((B(),V("input",{key:0,id:F(n),"onUpdate:modelValue":a[0]||(a[0]=e=>j(d)?d.value=e:null),class:w(F(m).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:F(i),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>F(c)&&F(c)(...e)),onFocus:a[2]||(a[2]=e=>u.value=!0),onBlur:a[3]||(a[3]=e=>u.value=!1)},null,42,Ee)),[[D,F(d)]]):z((B(),V("input",{key:1,id:F(n),"onUpdate:modelValue":a[4]||(a[4]=e=>j(d)?d.value=e:null),class:w(F(m).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:F(i),value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...e)=>F(c)&&F(c)(...e)),onFocus:a[6]||(a[6]=e=>u.value=!0),onBlur:a[7]||(a[7]=e=>u.value=!1)},null,42,Ie)),[[D,F(d)]]),I("span",{class:w(F(m).e("inner"))},null,2)],10,Se),F(r)?(B(),V("span",{key:0,class:w(F(m).e("label"))},[_(e.$slots,"default"),e.$slots.default?$("v-if",!0):(B(),V(N,{key:0},[O(G(e.label),1)],64))],2)):$("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ze=["name","tabindex","disabled","true-value","false-value"],Ve=["name","tabindex","disabled","value"],je=y({name:"ElCheckboxButton"});var De=U(y({...je,props:ge,emits:ye,setup(e){const a=e,l=C(),{isFocused:n,isChecked:t,isDisabled:o,checkboxButtonSize:i,model:u,handleChange:s}=Be(a,l),r=c(Ce,void 0),d=L("checkbox"),v=b((()=>{var e,a,l,n;const t=null!=(a=null==(e=null==r?void 0:r.fill)?void 0:e.value)?a:"";return{backgroundColor:t,borderColor:t,color:null!=(n=null==(l=null==r?void 0:r.textColor)?void 0:l.value)?n:"",boxShadow:t?`-1px 0 0 0 ${t}`:void 0}})),m=b((()=>[d.b("button"),d.bm("button",i.value),d.is("disabled",o.value),d.is("checked",t.value),d.is("focus",n.value)]));return(e,a)=>(B(),V("label",{class:w(F(m))},[e.trueLabel||e.falseLabel?z((B(),V("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>j(u)?u.value=e:null),class:w(F(d).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:F(o),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>F(s)&&F(s)(...e)),onFocus:a[2]||(a[2]=e=>n.value=!0),onBlur:a[3]||(a[3]=e=>n.value=!1)},null,42,ze)),[[D,F(u)]]):z((B(),V("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=e=>j(u)?u.value=e:null),class:w(F(d).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:F(o),value:e.label,onChange:a[5]||(a[5]=(...e)=>F(s)&&F(s)(...e)),onFocus:a[6]||(a[6]=e=>n.value=!0),onBlur:a[7]||(a[7]=e=>n.value=!1)},null,42,Ve)),[[D,F(u)]]),e.$slots.default||e.label?(B(),V("span",{key:2,class:w(F(d).be("button","inner")),style:A(F(t)?F(v):void 0)},[_(e.$slots,"default",{},(()=>[O(G(e.label),1)]))],6)):$("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const _e=q({modelValue:{type:M(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:u,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Ne={[P]:e=>k(e),change:e=>k(e)},Oe=y({name:"ElCheckboxGroup"});var Ge=U(y({...Oe,props:_e,emits:Ne,setup(e,{emit:a}){const l=e,n=L("checkbox"),{formItem:t}=X(),{inputId:o,isLabeledByFormItem:i}=Z(l,{formItemContext:t}),u=async e=>{a(P,e),await f(),a("change",e)},s=b({get:()=>l.modelValue,set(e){u(e)}});return W(Ce,{...xe(H(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:s,changeEvent:u}),h((()=>l.modelValue),(()=>{l.validateEvent&&(null==t||t.validate("change").catch((e=>Q())))})),(e,a)=>{var l;return B(),S(R(e.tag),{id:F(o),class:w(F(n).b("group")),role:"group","aria-label":F(i)?void 0:e.label||"checkbox-group","aria-labelledby":F(i)?null==(l=F(t))?void 0:l.labelId:void 0},{default:E((()=>[_(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const $e=J(Fe,{CheckboxButton:De,CheckboxGroup:Ge});K(De);const Re=K(Ge);export{$e as E,Re as a,fe as h,te as i,me as o,be as s};
