import{ct as e,bi as a,bd as l,bk as n,bj as o,cu as t,br as i,V as s,a7 as u,a5 as d,j as r,y as c,aR as b,h as v,R as m,a2 as h,r as p,aN as f,a1 as k,bD as x,d as g,bA as y,u as C,a as L,l as B,w as S,k as E,n as I,f as F,D as w,c as z,bo as V,cv as j,e as _,W as D,a4 as N,q as O,H as R,m as G,_ as U,aa as $,b as A,g as q,p as K,t as H,s as M,v as P}from"./index-2b9e942f.js";import{U as W,d as X}from"./event-15d81b97.js";import{c as Y,u as J,a as Q,b as T}from"./use-form-item-55331cc2.js";import{i as Z}from"./isEqual-456ab519.js";import{q as ee,d as ae}from"./_Uint8Array-fb59223e.js";import{f as le}from"./flatten-7f530804.js";import{s as ne,o as oe}from"./_overRest-eaaa482f.js";function te(e,a){return null!=e&&a in Object(e)}function ie(o,t){return null!=o&&function(o,t,i){for(var s=-1,u=(t=e(t,o)).length,d=!1;++s<u;){var r=a(t[s]);if(!(d=null!=o&&i(o,r)))break;o=o[r]}return d||++s!=u?d:!!(u=null==o?0:o.length)&&ee(u)&&l(r,u)&&(n(o)||ae(o))}(o,t,te)}function se(a,l){return function(a,l,n){for(var i=-1,s=l.length,u={};++i<s;){var d=l[i],r=o(a,d);n(r,d)&&t(u,e(d,a),r)}return u}(a,l,(function(e,l){return ie(a,l)}))}var ue;const de=ne(oe(ue=function(e,a){return null==e?{}:se(e,a)},void 0,le),ue+""),re={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:i,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ce={[W]:e=>s(e)||u(e)||d(e),change:e=>s(e)||u(e)||d(e)},be=Symbol("checkboxGroupContextKey"),ve=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:o,isLabeledByFormItem:t})=>{const i=r(be,void 0),{formItem:s}=J(),{emit:u}=v();function d(a){var l,n;return a===e.trueLabel||!0===a?null==(l=e.trueLabel)||l:null!=(n=e.falseLabel)&&n}const b=c((()=>(null==i?void 0:i.validateEvent)||e.validateEvent));return m((()=>e.modelValue),(()=>{b.value&&(null==s||s.validate("change").catch((e=>X())))})),{handleChange:function(e){if(l.value)return;const a=e.target;u("change",d(a.checked),e)},onClickRoot:async function(i){if(!l.value&&!n.value&&!o.value&&t.value){i.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=d([!1,e.falseLabel].includes(a.value)),await h(),function(e,a){u("change",d(e),a)}(a.value,i))}}}},me=(e,a)=>{const{formItem:l}=J(),{model:n,isGroup:o,isLimitExceeded:t}=(e=>{const a=p(!1),{emit:l}=v(),n=r(be,void 0),o=c((()=>!1===b(n))),t=p(!1);return{model:c({get(){var l,t;return o.value?null==(l=null==n?void 0:n.modelValue)?void 0:l.value:null!=(t=e.modelValue)?t:a.value},set(e){var i,s;o.value&&f(e)?(t.value=void 0!==(null==(i=null==n?void 0:n.max)?void 0:i.value)&&e.length>(null==n?void 0:n.max.value),!1===t.value&&(null==(s=null==n?void 0:n.changeEvent)||s.call(n,e))):(l(W,e),a.value=e)}}),isGroup:o,isLimitExceeded:t}})(e),{isFocused:i,isChecked:s,checkboxButtonSize:u,checkboxSize:m,hasOwnLabel:h}=((e,a,{model:l})=>{const n=r(be,void 0),o=p(!1),t=c((()=>{const a=l.value;return d(a)?a:f(a)?k(e.label)?a.map(x).some((a=>Z(a,e.label))):a.map(x).includes(e.label):null!=a?a===e.trueLabel:!!a}));return{checkboxButtonSize:Q(c((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value})),{prop:!0}),isChecked:t,isFocused:o,checkboxSize:Q(c((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value}))),hasOwnLabel:c((()=>!(!a.default&&!e.label)))}})(e,a,{model:n}),{isDisabled:g}=(({model:e,isChecked:a})=>{const l=r(be,void 0),n=c((()=>{var n,o;const t=null==(n=null==l?void 0:l.max)?void 0:n.value,i=null==(o=null==l?void 0:l.min)?void 0:o.value;return!b(t)&&e.value.length>=t&&!a.value||!b(i)&&e.value.length<=i&&a.value}));return{isDisabled:Y(c((()=>(null==l?void 0:l.disabled.value)||n.value))),isLimitDisabled:n}})({model:n,isChecked:s}),{inputId:y,isLabeledByFormItem:C}=T(e,{formItemContext:l,disableIdGeneration:h,disableIdManagement:o}),{handleChange:L,onClickRoot:B}=ve(e,{model:n,isLimitExceeded:t,hasOwnLabel:h,isDisabled:g,isLabeledByFormItem:C});return((e,{model:a})=>{e.checked&&(f(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:n}),{inputId:y,isLabeledByFormItem:C,isChecked:s,isDisabled:g,isFocused:i,checkboxButtonSize:u,checkboxSize:m,hasOwnLabel:h,model:n,handleChange:L,onClickRoot:B}},he=["tabindex","role","aria-checked"],pe=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],fe=["id","aria-hidden","disabled","value","name","tabindex"],ke=g({name:"ElCheckbox"});var xe=U(g({...ke,props:re,emits:ce,setup(e){const a=e,l=y(),{inputId:n,isLabeledByFormItem:o,isChecked:t,isDisabled:i,isFocused:s,checkboxSize:u,hasOwnLabel:d,model:r,handleChange:b,onClickRoot:v}=me(a,l),m=C("checkbox"),h=c((()=>[m.b(),m.m(u.value),m.is("disabled",i.value),m.is("bordered",a.border),m.is("checked",t.value)])),p=c((()=>[m.e("input"),m.is("disabled",i.value),m.is("checked",t.value),m.is("indeterminate",a.indeterminate),m.is("focus",s.value)]));return(e,a)=>(L(),B(G(!F(d)&&F(o)?"span":"label"),{class:I(F(h)),"aria-controls":e.indeterminate?e.controls:null,onClick:F(v)},{default:S((()=>[E("span",{class:I(F(p)),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[e.trueLabel||e.falseLabel?w((L(),z("input",{key:0,id:F(n),"onUpdate:modelValue":a[0]||(a[0]=e=>V(r)?r.value=e:null),class:I(F(m).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:F(i),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>F(b)&&F(b)(...e)),onFocus:a[2]||(a[2]=e=>s.value=!0),onBlur:a[3]||(a[3]=e=>s.value=!1)},null,42,pe)),[[j,F(r)]]):w((L(),z("input",{key:1,id:F(n),"onUpdate:modelValue":a[4]||(a[4]=e=>V(r)?r.value=e:null),class:I(F(m).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:F(i),value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...e)=>F(b)&&F(b)(...e)),onFocus:a[6]||(a[6]=e=>s.value=!0),onBlur:a[7]||(a[7]=e=>s.value=!1)},null,42,fe)),[[j,F(r)]]),E("span",{class:I(F(m).e("inner"))},null,2)],10,he),F(d)?(L(),z("span",{key:0,class:I(F(m).e("label"))},[_(e.$slots,"default"),e.$slots.default?R("v-if",!0):(L(),z(D,{key:0},[N(O(e.label),1)],64))],2)):R("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ge=["name","tabindex","disabled","true-value","false-value"],ye=["name","tabindex","disabled","value"],Ce=g({name:"ElCheckboxButton"});var Le=U(g({...Ce,props:re,emits:ce,setup(e){const a=e,l=y(),{isFocused:n,isChecked:o,isDisabled:t,checkboxButtonSize:i,model:s,handleChange:u}=me(a,l),d=r(be,void 0),b=C("checkbox"),v=c((()=>{var e,a,l,n;const o=null!=(a=null==(e=null==d?void 0:d.fill)?void 0:e.value)?a:"";return{backgroundColor:o,borderColor:o,color:null!=(n=null==(l=null==d?void 0:d.textColor)?void 0:l.value)?n:"",boxShadow:o?`-1px 0 0 0 ${o}`:void 0}})),m=c((()=>[b.b("button"),b.bm("button",i.value),b.is("disabled",t.value),b.is("checked",o.value),b.is("focus",n.value)]));return(e,a)=>(L(),z("label",{class:I(F(m))},[e.trueLabel||e.falseLabel?w((L(),z("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>V(s)?s.value=e:null),class:I(F(b).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:F(t),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>F(u)&&F(u)(...e)),onFocus:a[2]||(a[2]=e=>n.value=!0),onBlur:a[3]||(a[3]=e=>n.value=!1)},null,42,ge)),[[j,F(s)]]):w((L(),z("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=e=>V(s)?s.value=e:null),class:I(F(b).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:F(t),value:e.label,onChange:a[5]||(a[5]=(...e)=>F(u)&&F(u)(...e)),onFocus:a[6]||(a[6]=e=>n.value=!0),onBlur:a[7]||(a[7]=e=>n.value=!1)},null,42,ye)),[[j,F(s)]]),e.$slots.default||e.label?(L(),z("span",{key:2,class:I(F(b).be("button","inner")),style:$(F(o)?F(v):void 0)},[_(e.$slots,"default",{},(()=>[N(O(e.label),1)]))],6)):R("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Be=A({modelValue:{type:q(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:i,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Se={[W]:e=>f(e),change:e=>f(e)},Ee=g({name:"ElCheckboxGroup"});var Ie=U(g({...Ee,props:Be,emits:Se,setup(e,{emit:a}){const l=e,n=C("checkbox"),{formItem:o}=J(),{inputId:t,isLabeledByFormItem:i}=T(l,{formItemContext:o}),s=async e=>{a(W,e),await h(),a("change",e)},u=c({get:()=>l.modelValue,set(e){s(e)}});return K(be,{...de(H(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:u,changeEvent:s}),m((()=>l.modelValue),(()=>{l.validateEvent&&(null==o||o.validate("change").catch((e=>X())))})),(e,a)=>{var l;return L(),B(G(e.tag),{id:F(t),class:I(F(n).b("group")),role:"group","aria-label":F(i)?void 0:e.label||"checkbox-group","aria-labelledby":F(i)?null==(l=F(o))?void 0:l.labelId:void 0},{default:S((()=>[_(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Fe=M(xe,{CheckboxButton:Le,CheckboxGroup:Ie});P(Le);const we=P(Ie);export{Fe as E,we as a,ie as h};