import{b as e,br as a,V as l,a7 as o,a5 as s,r as n,j as r,y as d,d as t,u as i,a as u,c as m,k as p,D as b,cy as c,f as v,bo as f,n as y,e as g,a4 as h,q as k,G as S,_ as B,a2 as R,aa as V,o as _,p as x,Q as G,t as E,R as C,s as I,v as w}from"./index-2b9e942f.js";import{U as z,C as j,d as $}from"./event-15d81b97.js";import{a as F,c as K,d as N,u as U,b as q}from"./use-form-item-55331cc2.js";const A=e({size:a,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),D=e({...A,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),L={[z]:e=>l(e)||o(e)||s(e),[j]:e=>l(e)||o(e)||s(e)},Q=Symbol("radioGroupKey"),X=(e,a)=>{const l=n(),o=r(Q,void 0),s=d((()=>!!o)),t=d({get:()=>s.value?o.modelValue:e.modelValue,set(n){s.value?o.changeEvent(n):a&&a(z,n),l.value.checked=e.modelValue===e.label}}),i=F(d((()=>null==o?void 0:o.size))),u=K(d((()=>null==o?void 0:o.disabled))),m=n(!1),p=d((()=>u.value||s.value&&t.value!==e.label?-1:0));return{radioRef:l,isGroup:s,radioGroup:o,focus:m,size:i,disabled:u,tabIndex:p,modelValue:t}},Y=["value","name","disabled"],H=t({name:"ElRadio"});var J=B(t({...H,props:D,emits:L,setup(e,{emit:a}){const l=e,o=i("radio"),{radioRef:s,radioGroup:n,focus:r,size:d,disabled:t,modelValue:B}=X(l,a);function V(){R((()=>a("change",B.value)))}return(e,a)=>{var l;return u(),m("label",{class:y([v(o).b(),v(o).is("disabled",v(t)),v(o).is("focus",v(r)),v(o).is("bordered",e.border),v(o).is("checked",v(B)===e.label),v(o).m(v(d))])},[p("span",{class:y([v(o).e("input"),v(o).is("disabled",v(t)),v(o).is("checked",v(B)===e.label)])},[b(p("input",{ref_key:"radioRef",ref:s,"onUpdate:modelValue":a[0]||(a[0]=e=>f(B)?B.value=e:null),class:y(v(o).e("original")),value:e.label,name:e.name||(null==(l=v(n))?void 0:l.name),disabled:v(t),type:"radio",onFocus:a[1]||(a[1]=e=>r.value=!0),onBlur:a[2]||(a[2]=e=>r.value=!1),onChange:V},null,42,Y),[[c,v(B)]]),p("span",{class:y(v(o).e("inner"))},null,2)],2),p("span",{class:y(v(o).e("label")),onKeydown:a[3]||(a[3]=S((()=>{}),["stop"]))},[g(e.$slots,"default",{},(()=>[h(k(e.label),1)]))],34)],2)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const M=e({...A,name:{type:String,default:""}}),O=["value","name","disabled"],P=t({name:"ElRadioButton"});var T=B(t({...P,props:M,setup(e){const a=e,l=i("radio"),{radioRef:o,focus:s,size:n,disabled:r,modelValue:t,radioGroup:B}=X(a),R=d((()=>({backgroundColor:(null==B?void 0:B.fill)||"",borderColor:(null==B?void 0:B.fill)||"",boxShadow:(null==B?void 0:B.fill)?`-1px 0 0 0 ${B.fill}`:"",color:(null==B?void 0:B.textColor)||""})));return(e,a)=>{var d;return u(),m("label",{class:y([v(l).b("button"),v(l).is("active",v(t)===e.label),v(l).is("disabled",v(r)),v(l).is("focus",v(s)),v(l).bm("button",v(n))])},[b(p("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":a[0]||(a[0]=e=>f(t)?t.value=e:null),class:y(v(l).be("button","original-radio")),value:e.label,type:"radio",name:e.name||(null==(d=v(B))?void 0:d.name),disabled:v(r),onFocus:a[1]||(a[1]=e=>s.value=!0),onBlur:a[2]||(a[2]=e=>s.value=!1)},null,42,O),[[c,v(t)]]),p("span",{class:y(v(l).be("button","inner")),style:V(v(t)===e.label?v(R):{}),onKeydown:a[3]||(a[3]=S((()=>{}),["stop"]))},[g(e.$slots,"default",{},(()=>[h(k(e.label),1)]))],38)],2)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const W=e({id:{type:String,default:void 0},size:a,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),Z=L,ee=["id","aria-label","aria-labelledby"],ae=t({name:"ElRadioGroup"});var le=B(t({...ae,props:W,emits:Z,setup(e,{emit:a}){const l=e,o=i("radio"),s=N(),r=n(),{formItem:t}=U(),{inputId:p,isLabeledByFormItem:b}=q(l,{formItemContext:t});_((()=>{const e=r.value.querySelectorAll("[type=radio]"),a=e[0];!Array.from(e).some((e=>e.checked))&&a&&(a.tabIndex=0)}));const c=d((()=>l.name||s.value));return x(Q,G({...E(l),changeEvent:e=>{a(z,e),R((()=>a("change",e)))},name:c})),C((()=>l.modelValue),(()=>{l.validateEvent&&(null==t||t.validate("change").catch((e=>$())))})),(e,a)=>(u(),m("div",{id:v(p),ref_key:"radioGroupRef",ref:r,class:y(v(o).b("group")),role:"radiogroup","aria-label":v(b)?void 0:e.label||"radio-group","aria-labelledby":v(b)?v(t).labelId:void 0},[g(e.$slots,"default")],10,ee))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const oe=I(J,{RadioButton:T,RadioGroup:le}),se=w(le);w(T);export{oe as E,se as a};