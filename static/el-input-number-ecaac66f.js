import{b as e,br as a,a7 as l,d as t,z as n,u as r,r as u,Q as s,y as i,aR as o,R as m,o as d,aZ as c,a as p,c as b,D as v,f,n as N,a8 as y,C as x,w as I,l as V,O as g,cx as h,E as S,H as w,b2 as E,bz as A,G as F,_ as k,V as _,s as B}from"./index-2b9e942f.js";import{E as K}from"./index-32efc5c0.js";import{C as O,I as j,i as z,U as C,d as M}from"./event-15d81b97.js";import{u as T,a as P,c as Y}from"./use-form-item-55331cc2.js";import{v as $}from"./index-6aa2818d.js";const D=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:a,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||l(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),G={[O]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[j]:e=>l(e)||z(e),[C]:e=>l(e)||z(e)},R=["aria-label","onKeydown"],H=["aria-label","onKeydown"],Q=t({name:"ElInputNumber"});const U=B(k(t({...Q,props:D,emits:G,setup(e,{expose:a,emit:t}){const k=e,{t:B}=n(),D=r("input-number"),G=u(),Q=s({currentValue:k.modelValue,userInput:null}),{formItem:U}=T(),W=i((()=>l(k.modelValue)&&k.modelValue<=k.min)),X=i((()=>l(k.modelValue)&&k.modelValue>=k.max)),Z=i((()=>{const e=le(k.step);return o(k.precision)?Math.max(le(k.modelValue),e):(k.precision,k.precision)})),q=i((()=>k.controls&&"right"===k.controlsPosition)),J=P(),L=Y(),ee=i((()=>{if(null!==Q.userInput)return Q.userInput;let e=Q.currentValue;if(z(e))return"";if(l(e)){if(Number.isNaN(e))return"";o(k.precision)||(e=e.toFixed(k.precision))}return e})),ae=(e,a)=>{if(o(a)&&(a=Z.value),0===a)return Math.round(e);let l=String(e);const t=l.indexOf(".");if(-1===t)return e;if(!l.replace(".","").split("")[t+a])return e;const n=l.length;return"5"===l.charAt(n-1)&&(l=`${l.slice(0,Math.max(0,n-1))}6`),Number.parseFloat(Number(l).toFixed(a))},le=e=>{if(z(e))return 0;const a=e.toString(),l=a.indexOf(".");let t=0;return-1!==l&&(t=a.length-l-1),t},te=(e,a=1)=>l(e)?ae(e+k.step*a):Q.currentValue,ne=()=>{if(k.readonly||L.value||X.value)return;const e=Number(ee.value)||0,a=te(e);se(a),t(j,Q.currentValue)},re=()=>{if(k.readonly||L.value||W.value)return;const e=Number(ee.value)||0,a=te(e,-1);se(a),t(j,Q.currentValue)},ue=(e,a)=>{const{max:l,min:n,step:r,precision:u,stepStrictly:s,valueOnClear:i}=k;let m=Number(e);if(z(e)||Number.isNaN(m))return null;if(""===e){if(null===i)return null;m=_(i)?{min:n,max:l}[i]:i}return s&&(m=ae(Math.round(m/r)*r,u)),o(u)||(m=ae(m,u)),(m>l||m<n)&&(m=m>l?l:n,a&&t(C,m)),m},se=(e,a=!0)=>{var l;const n=Q.currentValue,r=ue(e);a?n!==r&&(Q.userInput=null,t(C,r),t(O,r,n),k.validateEvent&&(null==(l=null==U?void 0:U.validate)||l.call(U,"change").catch((e=>M()))),Q.currentValue=r):t(C,r)},ie=e=>{Q.userInput=e;const a=""===e?null:Number(e);t(j,a),se(a,!1)},oe=e=>{const a=""!==e?Number(e):"";(l(a)&&!Number.isNaN(a)||""===e)&&se(a),Q.userInput=null},me=e=>{t("focus",e)},de=e=>{var a;t("blur",e),k.validateEvent&&(null==(a=null==U?void 0:U.validate)||a.call(U,"blur").catch((e=>M())))};return m((()=>k.modelValue),(e=>{const a=ue(Q.userInput),t=ue(e,!0);l(a)||a&&a===t||(Q.currentValue=t,Q.userInput=null)}),{immediate:!0}),d((()=>{var e;const{min:a,max:n,modelValue:r}=k,u=null==(e=G.value)?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(n)?u.setAttribute("aria-valuemax",String(n)):u.removeAttribute("aria-valuemax"),Number.isFinite(a)?u.setAttribute("aria-valuemin",String(a)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",String(Q.currentValue)),u.setAttribute("aria-disabled",String(L.value)),!l(r)&&null!=r){let e=Number(r);Number.isNaN(e)&&(e=null),t(C,e)}})),c((()=>{var e;const a=null==(e=G.value)?void 0:e.input;null==a||a.setAttribute("aria-valuenow",`${Q.currentValue}`)})),a({focus:()=>{var e,a;null==(a=null==(e=G.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=G.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(p(),b("div",{class:N([f(D).b(),f(D).m(f(J)),f(D).is("disabled",f(L)),f(D).is("without-controls",!e.controls),f(D).is("controls-right",f(q))]),onDragstart:a[1]||(a[1]=F((()=>{}),["prevent"]))},[e.controls?v((p(),b("span",{key:0,role:"button","aria-label":f(B)("el.inputNumber.decrease"),class:N([f(D).e("decrease"),f(D).is("disabled",f(W))]),onKeydown:y(re,["enter"])},[x(f(S),null,{default:I((()=>[f(q)?(p(),V(f(g),{key:0})):(p(),V(f(h),{key:1}))])),_:1})],42,R)),[[f($),re]]):w("v-if",!0),e.controls?v((p(),b("span",{key:1,role:"button","aria-label":f(B)("el.inputNumber.increase"),class:N([f(D).e("increase"),f(D).is("disabled",f(X))]),onKeydown:y(ne,["enter"])},[x(f(S),null,{default:I((()=>[f(q)?(p(),V(f(E),{key:0})):(p(),V(f(A),{key:1}))])),_:1})],42,H)),[[f($),ne]]):w("v-if",!0),x(f(K),{id:e.id,ref_key:"input",ref:G,type:"number",step:e.step,"model-value":f(ee),placeholder:e.placeholder,readonly:e.readonly,disabled:f(L),size:f(J),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=F((()=>{}),["prevent"])),onKeydown:[y(F(ne,["prevent"]),["up"]),y(F(re,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:ie,onChange:oe},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{U as E};