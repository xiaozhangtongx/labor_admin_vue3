import{b as e,bn as a,a7 as l,d as t,z as n,u as r,r as u,Q as s,y as i,a_ as o,R as m,o as d,aX as c,a as p,c as b,D as v,f,n as N,a8 as y,C as x,w as I,l as V,O as g,c3 as h,E as S,H as w,b1 as E,bz as A,G as F,_ as k,V as _,s as B}from"./index-54d43a61.js";import{E as K}from"./index-5840db25.js";import{C as O,I as j,i as z,U as C,d as M}from"./focus-trap-76f55607.js";import{a as T,b as P,d as $}from"./el-button-4e282e2a.js";import{v as D}from"./index-4769d171.js";const G=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:a,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||l(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),X={[O]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[j]:e=>l(e)||z(e),[C]:e=>l(e)||z(e)},Y=["aria-label","onKeydown"],H=["aria-label","onKeydown"],J=t({name:"ElInputNumber"});const Q=B(k(t({...J,props:G,emits:X,setup(e,{expose:a,emit:t}){const k=e,{t:B}=n(),G=r("input-number"),X=u(),J=s({currentValue:k.modelValue,userInput:null}),{formItem:Q}=T(),R=i((()=>l(k.modelValue)&&k.modelValue<=k.min)),U=i((()=>l(k.modelValue)&&k.modelValue>=k.max)),W=i((()=>{const e=le(k.step);return o(k.precision)?Math.max(le(k.modelValue),e):(k.precision,k.precision)})),q=i((()=>k.controls&&"right"===k.controlsPosition)),L=P(),Z=$(),ee=i((()=>{if(null!==J.userInput)return J.userInput;let e=J.currentValue;if(z(e))return"";if(l(e)){if(Number.isNaN(e))return"";o(k.precision)||(e=e.toFixed(k.precision))}return e})),ae=(e,a)=>{if(o(a)&&(a=W.value),0===a)return Math.round(e);let l=String(e);const t=l.indexOf(".");if(-1===t)return e;if(!l.replace(".","").split("")[t+a])return e;const n=l.length;return"5"===l.charAt(n-1)&&(l=`${l.slice(0,Math.max(0,n-1))}6`),Number.parseFloat(Number(l).toFixed(a))},le=e=>{if(z(e))return 0;const a=e.toString(),l=a.indexOf(".");let t=0;return-1!==l&&(t=a.length-l-1),t},te=(e,a=1)=>l(e)?ae(e+k.step*a):J.currentValue,ne=()=>{if(k.readonly||Z.value||U.value)return;const e=Number(ee.value)||0,a=te(e);se(a),t(j,J.currentValue)},re=()=>{if(k.readonly||Z.value||R.value)return;const e=Number(ee.value)||0,a=te(e,-1);se(a),t(j,J.currentValue)},ue=(e,a)=>{const{max:l,min:n,step:r,precision:u,stepStrictly:s,valueOnClear:i}=k;let m=Number(e);if(z(e)||Number.isNaN(m))return null;if(""===e){if(null===i)return null;m=_(i)?{min:n,max:l}[i]:i}return s&&(m=ae(Math.round(m/r)*r,u)),o(u)||(m=ae(m,u)),(m>l||m<n)&&(m=m>l?l:n,a&&t(C,m)),m},se=(e,a=!0)=>{var l;const n=J.currentValue,r=ue(e);a?n!==r&&(J.userInput=null,t(C,r),t(O,r,n),k.validateEvent&&(null==(l=null==Q?void 0:Q.validate)||l.call(Q,"change").catch((e=>M()))),J.currentValue=r):t(C,r)},ie=e=>{J.userInput=e;const a=""===e?null:Number(e);t(j,a),se(a,!1)},oe=e=>{const a=""!==e?Number(e):"";(l(a)&&!Number.isNaN(a)||""===e)&&se(a),J.userInput=null},me=e=>{t("focus",e)},de=e=>{var a;t("blur",e),k.validateEvent&&(null==(a=null==Q?void 0:Q.validate)||a.call(Q,"blur").catch((e=>M())))};return m((()=>k.modelValue),(e=>{const a=ue(J.userInput),t=ue(e,!0);l(a)||a&&a===t||(J.currentValue=t,J.userInput=null)}),{immediate:!0}),d((()=>{var e;const{min:a,max:n,modelValue:r}=k,u=null==(e=X.value)?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(n)?u.setAttribute("aria-valuemax",String(n)):u.removeAttribute("aria-valuemax"),Number.isFinite(a)?u.setAttribute("aria-valuemin",String(a)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",String(J.currentValue)),u.setAttribute("aria-disabled",String(Z.value)),!l(r)&&null!=r){let e=Number(r);Number.isNaN(e)&&(e=null),t(C,e)}})),c((()=>{var e;const a=null==(e=X.value)?void 0:e.input;null==a||a.setAttribute("aria-valuenow",`${J.currentValue}`)})),a({focus:()=>{var e,a;null==(a=null==(e=X.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=X.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(p(),b("div",{class:N([f(G).b(),f(G).m(f(L)),f(G).is("disabled",f(Z)),f(G).is("without-controls",!e.controls),f(G).is("controls-right",f(q))]),onDragstart:a[1]||(a[1]=F((()=>{}),["prevent"]))},[e.controls?v((p(),b("span",{key:0,role:"button","aria-label":f(B)("el.inputNumber.decrease"),class:N([f(G).e("decrease"),f(G).is("disabled",f(R))]),onKeydown:y(re,["enter"])},[x(f(S),null,{default:I((()=>[f(q)?(p(),V(f(g),{key:0})):(p(),V(f(h),{key:1}))])),_:1})],42,Y)),[[f(D),re]]):w("v-if",!0),e.controls?v((p(),b("span",{key:1,role:"button","aria-label":f(B)("el.inputNumber.increase"),class:N([f(G).e("increase"),f(G).is("disabled",f(U))]),onKeydown:y(ne,["enter"])},[x(f(S),null,{default:I((()=>[f(q)?(p(),V(f(E),{key:0})):(p(),V(f(A),{key:1}))])),_:1})],42,H)),[[f(D),ne]]):w("v-if",!0),x(f(K),{id:e.id,ref_key:"input",ref:X,type:"number",step:e.step,"model-value":f(ee),placeholder:e.placeholder,readonly:e.readonly,disabled:f(Z),size:f(L),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=F((()=>{}),["prevent"])),onKeydown:[y(F(ne,["prevent"]),["up"]),y(F(re,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:ie,onChange:oe},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{Q as E};