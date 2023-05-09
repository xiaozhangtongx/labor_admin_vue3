import{b as e,g as t,d as a,u as s,y as l,bG as r,bH as o,aT as n,bI as i,x as u,aV as d,V as c,a as p,c as f,n as v,f as m,k as y,aa as g,e as h,q as b,H as k,l as w,w as x,m as $,E as F,_,s as U,a0 as E,bJ as R,z as T,r as S,W as j,ah as C,a8 as L,G as P,C as D,bK as z,bL as N,bM as q,bN as O,aE as B,j as A,aG as M,bO as V,bP as H,R as I,br as W,S as G,p as K,a3 as J,ar as X,F as Q,ad as Y,ac as Z,Q as ee,o as te,bQ as ae,a4 as se,an as le}from"./index-95400b9a.js";import{E as re}from"./el-card-e80d523d.js";import{a as oe,E as ne}from"./el-form-item-92d0badd.js";import{E as ie}from"./el-image-viewer-16ac897c.js";import{d as ue,E as de}from"./el-button-aaeb9e0d.js";/* empty css                 */import{g as ce,e as pe,a as fe}from"./index-c2f4e981.js";import{t as ve,i as me,d as ye}from"./event-15d81b97.js";import{E as ge}from"./index-cf93d9ae.js";import"./throttle-2f597f33.js";import"./debounce-e07a4378.js";import"./index-18c267d7.js";import"./scroll-86ca40b0.js";const he=e({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:t(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:t([String,Array,Function]),default:""},format:{type:t(Function),default:e=>`${e}%`}}),be=["aria-valuenow"],ke={viewBox:"0 0 100 100"},we=["d","stroke","stroke-width"],xe=["d","stroke","opacity","stroke-linecap","stroke-width"],$e={key:0},Fe=a({name:"ElProgress"});const _e=U(_(a({...Fe,props:he,setup(e){const t=e,a={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},_=s("progress"),U=l((()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:O(t.percentage)}))),E=l((()=>(t.strokeWidth/t.width*100).toFixed(1))),R=l((()=>["circle","dashboard"].includes(t.type)?Number.parseInt(""+(50-Number.parseFloat(E.value)/2),10):0)),T=l((()=>{const e=R.value,a="dashboard"===t.type;return`\n          M 50 50\n          m 0 ${a?"":"-"}${e}\n          a ${e} ${e} 0 1 1 0 ${a?"-":""}${2*e}\n          a ${e} ${e} 0 1 1 0 ${a?"":"-"}${2*e}\n          `})),S=l((()=>2*Math.PI*R.value)),j=l((()=>"dashboard"===t.type?.75:1)),C=l((()=>`${-1*S.value*(1-j.value)/2}px`)),L=l((()=>({strokeDasharray:`${S.value*j.value}px, ${S.value}px`,strokeDashoffset:C.value}))),P=l((()=>({strokeDasharray:`${S.value*j.value*(t.percentage/100)}px, ${S.value}px`,strokeDashoffset:C.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"}))),D=l((()=>{let e;return e=t.color?O(t.percentage):a[t.status]||a.default,e})),z=l((()=>"warning"===t.status?r:"line"===t.type?"success"===t.status?o:n:"success"===t.status?i:u)),N=l((()=>"line"===t.type?12+.4*t.strokeWidth:.111111*t.width+2)),q=l((()=>t.format(t.percentage)));const O=e=>{var a;const{color:s}=t;if(d(s))return s(e);if(c(s))return s;{const t=function(e){const t=100/e.length;return e.map(((e,a)=>c(e)?{color:e,percentage:(a+1)*t}:e)).sort(((e,t)=>e.percentage-t.percentage))}(s);for(const a of t)if(a.percentage>e)return a.color;return null==(a=t[t.length-1])?void 0:a.color}};return(e,t)=>(p(),f("div",{class:v([m(_).b(),m(_).m(e.type),m(_).is(e.status),{[m(_).m("without-text")]:!e.showText,[m(_).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},["line"===e.type?(p(),f("div",{key:0,class:v(m(_).b("bar"))},[y("div",{class:v(m(_).be("bar","outer")),style:g({height:`${e.strokeWidth}px`})},[y("div",{class:v([m(_).be("bar","inner"),{[m(_).bem("bar","inner","indeterminate")]:e.indeterminate}]),style:g(m(U))},[(e.showText||e.$slots.default)&&e.textInside?(p(),f("div",{key:0,class:v(m(_).be("bar","innerText"))},[h(e.$slots,"default",{percentage:e.percentage},(()=>[y("span",null,b(m(q)),1)]))],2)):k("v-if",!0)],6)],6)],2)):(p(),f("div",{key:1,class:v(m(_).b("circle")),style:g({height:`${e.width}px`,width:`${e.width}px`})},[(p(),f("svg",ke,[y("path",{class:v(m(_).be("circle","track")),d:m(T),stroke:`var(${m(_).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":m(E),fill:"none",style:g(m(L))},null,14,we),y("path",{class:v(m(_).be("circle","path")),d:m(T),stroke:m(D),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":m(E),style:g(m(P))},null,14,xe)]))],6)),!e.showText&&!e.$slots.default||e.textInside?k("v-if",!0):(p(),f("div",{key:2,class:v(m(_).e("text")),style:g({fontSize:`${m(N)}px`})},[h(e.$slots,"default",{percentage:e.percentage},(()=>[e.status?(p(),w(m(F),{key:1},{default:x((()=>[(p(),w($(m(z))))])),_:1})):(p(),f("span",$e,b(m(q)),1))]))],6))],10,be))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]])),Ue=Symbol("uploadContextKey");class Ee extends Error{constructor(e,t,a,s){super(e),this.name="UploadAjaxError",this.status=t,this.method=a,this.url=s}}function Re(e,t,a){let s;return s=a.response?`${a.response.error||a.response}`:a.responseText?`${a.responseText}`:`fail to ${t.method} ${e} ${a.status}`,new Ee(s,a.status,t.method,e)}const Te=["text","picture","picture-card"];let Se=1;const je=()=>Date.now()+Se++,Ce=e({action:{type:String,default:"#"},headers:{type:t(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>E({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:t(Array),default:()=>E([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:Te,default:"text"},httpRequest:{type:t(Function),default:e=>{"undefined"==typeof XMLHttpRequest&&ve("ElUpload","XMLHttpRequest is undefined");const t=new XMLHttpRequest,a=e.action;t.upload&&t.upload.addEventListener("progress",(t=>{const a=t;a.percent=t.total>0?t.loaded/t.total*100:0,e.onProgress(a)}));const s=new FormData;if(e.data)for(const[r,o]of Object.entries(e.data))Array.isArray(o)?s.append(r,...o):s.append(r,o);s.append(e.filename,e.file,e.file.name),t.addEventListener("error",(()=>{e.onError(Re(a,e,t))})),t.addEventListener("load",(()=>{if(t.status<200||t.status>=300)return e.onError(Re(a,e,t));e.onSuccess(function(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(a){return t}}(t))})),t.open(e.method,a,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const l=e.headers||{};if(l instanceof Headers)l.forEach(((e,a)=>t.setRequestHeader(a,e)));else for(const[r,o]of Object.entries(l))me(o)||t.setRequestHeader(r,String(o));return t.send(s),t}},disabled:Boolean,limit:Number}),Le=e({...Ce,beforeUpload:{type:t(Function),default:R},beforeRemove:{type:t(Function)},onRemove:{type:t(Function),default:R},onChange:{type:t(Function),default:R},onPreview:{type:t(Function),default:R},onSuccess:{type:t(Function),default:R},onProgress:{type:t(Function),default:R},onError:{type:t(Function),default:R},onExceed:{type:t(Function),default:R}}),Pe=e({files:{type:t(Array),default:()=>E([])},disabled:{type:Boolean,default:!1},handlePreview:{type:t(Function),default:R},listType:{type:String,values:Te,default:"text"}}),De=["onKeydown"],ze=["src"],Ne=["onClick"],qe=["onClick"],Oe=["onClick"],Be=a({name:"ElUploadList"});var Ae=_(a({...Be,props:Pe,emits:{remove:e=>!!e},setup(e,{emit:t}){const{t:a}=T(),l=s("upload"),r=s("icon"),n=s("list"),d=ue(),c=S(!1),$=e=>{t("remove",e)};return(e,t)=>(p(),w(O,{tag:"ul",class:v([m(l).b("list"),m(l).bm("list",e.listType),m(l).is("disabled",m(d))]),name:m(n).b()},{default:x((()=>[(p(!0),f(j,null,C(e.files,(s=>(p(),f("li",{key:s.uid||s.name,class:v([m(l).be("list","item"),m(l).is(s.status),{focusing:c.value}]),tabindex:"0",onKeydown:L((e=>!m(d)&&$(s)),["delete"]),onFocus:t[0]||(t[0]=e=>c.value=!0),onBlur:t[1]||(t[1]=e=>c.value=!1),onClick:t[2]||(t[2]=e=>c.value=!1)},[h(e.$slots,"default",{file:s},(()=>["picture"===e.listType||"uploading"!==s.status&&"picture-card"===e.listType?(p(),f("img",{key:0,class:v(m(l).be("list","item-thumbnail")),src:s.url,alt:""},null,10,ze)):k("v-if",!0),"uploading"===s.status||"picture-card"!==e.listType?(p(),f("div",{key:1,class:v(m(l).be("list","item-info"))},[y("a",{class:v(m(l).be("list","item-name")),onClick:P((t=>e.handlePreview(s)),["prevent"])},[D(m(F),{class:v(m(r).m("document"))},{default:x((()=>[D(m(z))])),_:1},8,["class"]),y("span",{class:v(m(l).be("list","item-file-name"))},b(s.name),3)],10,Ne),"uploading"===s.status?(p(),w(m(_e),{key:0,type:"picture-card"===e.listType?"circle":"line","stroke-width":"picture-card"===e.listType?6:2,percentage:Number(s.percentage),style:g("picture-card"===e.listType?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),y("label",{class:v(m(l).be("list","item-status-label"))},["text"===e.listType?(p(),w(m(F),{key:0,class:v([m(r).m("upload-success"),m(r).m("circle-check")])},{default:x((()=>[D(m(o))])),_:1},8,["class"])):["picture-card","picture"].includes(e.listType)?(p(),w(m(F),{key:1,class:v([m(r).m("upload-success"),m(r).m("check")])},{default:x((()=>[D(m(i))])),_:1},8,["class"])):k("v-if",!0)],2),m(d)?k("v-if",!0):(p(),w(m(F),{key:2,class:v(m(r).m("close")),onClick:e=>$(s)},{default:x((()=>[D(m(u))])),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),m(d)?k("v-if",!0):(p(),f("i",{key:3,class:v(m(r).m("close-tip"))},b(m(a)("el.upload.deleteTip")),3)),"picture-card"===e.listType?(p(),f("span",{key:4,class:v(m(l).be("list","item-actions"))},[y("span",{class:v(m(l).be("list","item-preview")),onClick:t=>e.handlePreview(s)},[D(m(F),{class:v(m(r).m("zoom-in"))},{default:x((()=>[D(m(N))])),_:1},8,["class"])],10,qe),m(d)?k("v-if",!0):(p(),f("span",{key:0,class:v(m(l).be("list","item-delete")),onClick:e=>$(s)},[D(m(F),{class:v(m(r).m("delete"))},{default:x((()=>[D(m(q))])),_:1},8,["class"])],10,Oe))],2)):k("v-if",!0)]))],42,De)))),128)),h(e.$slots,"append")])),_:3},8,["class","name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const Me=e({disabled:{type:Boolean,default:!1}}),Ve={file:e=>B(e)},He=["onDrop","onDragover"],Ie="ElUploadDrag",We=a({name:Ie});var Ge=_(a({...We,props:Me,emits:Ve,setup(e,{emit:t}){const a=A(Ue);a||ve(Ie,"usage: <el-upload><el-upload-dragger /></el-upload>");const l=s("upload"),r=S(!1),o=ue(),n=e=>{if(o.value)return;r.value=!1,e.stopPropagation();const s=Array.from(e.dataTransfer.files),l=a.accept.value;if(!l)return void t("file",s);const n=s.filter((e=>{const{type:t,name:a}=e,s=a.includes(".")?`.${a.split(".").pop()}`:"",r=t.replace(/\/.*$/,"");return l.split(",").map((e=>e.trim())).filter((e=>e)).some((e=>e.startsWith(".")?s===e:/\/\*$/.test(e)?r===e.replace(/\/\*$/,""):!!/^[^/]+\/[^/]+$/.test(e)&&t===e))}));t("file",n)},i=()=>{o.value||(r.value=!0)};return(e,t)=>(p(),f("div",{class:v([m(l).b("dragger"),m(l).is("dragover",r.value)]),onDrop:P(n,["prevent"]),onDragover:P(i,["prevent"]),onDragleave:t[0]||(t[0]=P((e=>r.value=!1),["prevent"]))},[h(e.$slots,"default")],42,He))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Ke=e({...Ce,beforeUpload:{type:t(Function),default:R},onRemove:{type:t(Function),default:R},onStart:{type:t(Function),default:R},onSuccess:{type:t(Function),default:R},onProgress:{type:t(Function),default:R},onError:{type:t(Function),default:R},onExceed:{type:t(Function),default:R}}),Je=["onKeydown"],Xe=["name","multiple","accept"],Qe=a({name:"ElUploadContent",inheritAttrs:!1});var Ye=_(a({...Qe,props:Ke,setup(e,{expose:t}){const a=e,l=s("upload"),r=ue(),o=M({}),n=M(),i=e=>{if(0===e.length)return;const{autoUpload:t,limit:s,fileList:l,multiple:r,onStart:o,onExceed:n}=a;if(s&&l.length+e.length>s)n(e,l);else{r||(e=e.slice(0,1));for(const a of e){const e=a;e.uid=je(),o(e),t&&u(e)}}},u=async e=>{if(n.value.value="",!a.beforeUpload)return d(e);let t;try{t=await a.beforeUpload(e)}catch(l){t=!1}if(!1===t)return void a.onRemove(e);let s=e;t instanceof Blob&&(s=t instanceof File?t:new File([t],e.name,{type:e.type})),d(Object.assign(s,{uid:e.uid}))},d=e=>{const{headers:t,data:s,method:l,withCredentials:r,name:n,action:i,onProgress:u,onSuccess:d,onError:c,httpRequest:p}=a,{uid:f}=e,v={headers:t||{},withCredentials:r,file:e,data:s,method:l,filename:n,action:i,onProgress:t=>{u(t,e)},onSuccess:t=>{d(t,e),delete o.value[f]},onError:t=>{c(t,e),delete o.value[f]}},m=p(v);o.value[f]=m,m instanceof Promise&&m.then(v.onSuccess,v.onError)},c=e=>{const t=e.target.files;t&&i(Array.from(t))},g=()=>{r.value||(n.value.value="",n.value.click())},b=()=>{g()};return t({abort:e=>{V(o.value).filter(e?([t])=>String(e.uid)===t:()=>!0).forEach((([e,t])=>{t instanceof XMLHttpRequest&&t.abort(),delete o.value[e]}))},upload:u}),(e,t)=>(p(),f("div",{class:v([m(l).b(),m(l).m(e.listType),m(l).is("drag",e.drag)]),tabindex:"0",onClick:g,onKeydown:L(P(b,["self"]),["enter","space"])},[e.drag?(p(),w(Ge,{key:0,disabled:m(r),onFile:i},{default:x((()=>[h(e.$slots,"default")])),_:3},8,["disabled"])):h(e.$slots,"default",{key:1}),y("input",{ref_key:"inputRef",ref:n,class:v(m(l).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:c,onClick:t[0]||(t[0]=P((()=>{}),["stop"]))},null,42,Xe)],42,Je))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const Ze="ElUpload",et=(e,t)=>{const a=H(e,"fileList",void 0,{passive:!0}),s=e=>a.value.find((t=>t.uid===e.uid));function l(e){var a;null==(a=t.value)||a.abort(e)}return I((()=>e.listType),(t=>{"picture-card"!==t&&"picture"!==t||(a.value=a.value.map((t=>{const{raw:s,url:l}=t;if(!l&&s)try{t.url=URL.createObjectURL(s)}catch(r){e.onError(r,t,a.value)}return t})))})),I(a,(e=>{for(const t of e)t.uid||(t.uid=je()),t.status||(t.status="success")}),{immediate:!0,deep:!0}),{uploadFiles:a,abort:l,clearFiles:function(e=["ready","uploading","success","fail"]){a.value=a.value.filter((t=>!e.includes(t.status)))},handleError:(t,l)=>{const r=s(l);r&&(console.error(t),r.status="fail",a.value.splice(a.value.indexOf(r),1),e.onError(t,r,a.value),e.onChange(r,a.value))},handleProgress:(t,l)=>{const r=s(l);r&&(e.onProgress(t,r,a.value),r.status="uploading",r.percentage=Math.round(t.percent))},handleStart:t=>{me(t.uid)&&(t.uid=je());const s={name:t.name,percentage:0,status:"ready",size:t.size,raw:t,uid:t.uid};if("picture-card"===e.listType||"picture"===e.listType)try{s.url=URL.createObjectURL(t)}catch(l){ye(Ze,l.message),e.onError(l,s,a.value)}a.value=[...a.value,s],e.onChange(s,a.value)},handleSuccess:(t,l)=>{const r=s(l);r&&(r.status="success",r.response=t,e.onSuccess(t,r,a.value),e.onChange(r,a.value))},handleRemove:async t=>{const r=t instanceof File?s(t):t;r||ve(Ze,"file to be removed not found");const o=t=>{l(t);const s=a.value;s.splice(s.indexOf(t),1),e.onRemove(t,s),(e=>{var t;(null==(t=e.url)?void 0:t.startsWith("blob:"))&&URL.revokeObjectURL(e.url)})(t)};if(e.beforeRemove){!1!==await e.beforeRemove(r,a.value)&&o(r)}else o(r)},submit:function(){a.value.filter((({status:e})=>"ready"===e)).forEach((({raw:e})=>{var a;return e&&(null==(a=t.value)?void 0:a.upload(e))}))}}},tt=a({name:"ElUpload"});const at=U(_(a({...tt,props:Le,setup(e,{expose:t}){const a=e,s=W(),r=ue(),o=M(),{abort:n,submit:i,clearFiles:u,uploadFiles:d,handleStart:c,handleError:v,handleRemove:y,handleSuccess:g,handleProgress:b}=et(a,o),$=l((()=>"picture-card"===a.listType)),F=l((()=>({...a,fileList:d.value,onStart:c,onProgress:b,onSuccess:g,onError:v,onRemove:y})));return G((()=>{d.value.forEach((({url:e})=>{(null==e?void 0:e.startsWith("blob:"))&&URL.revokeObjectURL(e)}))})),K(Ue,{accept:J(a,"accept")}),t({abort:n,submit:i,clearFiles:u,handleStart:c,handleRemove:y}),(e,t)=>(p(),f("div",null,[m($)&&e.showFileList?(p(),w(Ae,{key:0,disabled:m(r),"list-type":e.listType,files:m(d),"handle-preview":e.onPreview,onRemove:m(y)},X({append:x((()=>[D(Ye,Q({ref_key:"uploadRef",ref:o},m(F)),{default:x((()=>[m(s).trigger?h(e.$slots,"trigger",{key:0}):k("v-if",!0),!m(s).trigger&&m(s).default?h(e.$slots,"default",{key:1}):k("v-if",!0)])),_:3},16)])),_:2},[e.$slots.file?{name:"default",fn:x((({file:t})=>[h(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0),!m($)||m($)&&!e.showFileList?(p(),w(Ye,Q({key:1,ref_key:"uploadRef",ref:o},m(F)),{default:x((()=>[m(s).trigger?h(e.$slots,"trigger",{key:0}):k("v-if",!0),!m(s).trigger&&m(s).default?h(e.$slots,"default",{key:1}):k("v-if",!0)])),_:3},16)):k("v-if",!0),e.$slots.trigger?h(e.$slots,"default",{key:2}):k("v-if",!0),h(e.$slots,"tip"),!m($)&&e.showFileList?(p(),w(Ae,{key:3,disabled:m(r),"list-type":e.listType,files:m(d),"handle-preview":e.onPreview,onRemove:m(y)},X({_:2},[e.$slots.file?{name:"default",fn:x((({file:t})=>[h(e.$slots,"file",{file:t})]))}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0)]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]])),st={class:"app-container"},lt={key:0,class:"ml-4"},rt={class:"upload-progress"},ot={key:1,class:"ml-10"},nt=["src"],it={key:0,class:"ml-4"},ut={class:"upload-progress"},dt={key:1,class:"ml-4"},ct={key:0,class:"w-226px h-173px flex flex-col justify-center items-center"},pt=["href"],ft=["src"],vt=a({__name:"index",setup(e){var t;const a=Y(),s=Z(),l=S(),r=S(),o=S("default"),n=S(!1),i=S(!1),u=S(""),d=S(""),c=S(),v=S(0),g=S(0),h=S(),$=S(),F=ee({fileName:"",type:"",size:0,url:""}),_=ee({fileName:"",type:"",size:0,url:""}),U=ee({id:"",creatorId:(null==(t=s.userInfo)?void 0:t.id)||"",title:"",content:"",type:0,fileUrl:"",coverUrl:"",createTime:"",updateTime:""}),E=ee({title:[{required:!0,message:"请输入题干信息",trigger:"blur"},{min:3,max:50,message:"字数在3-50内",trigger:"blur"}],content:[{required:!0,message:"请输入资料描述",trigger:"blur"},{min:3,max:100,message:"字数在3-50内",trigger:"blur"}],coverUrl:[{required:!0,message:"请上传封面",trigger:"change"}],fileUrl:[{required:!0,message:"上传资料",trigger:"change"}]}),R=()=>{void 0!==a.query.id&&ce(a.query.id).then((e=>Object.assign(U,e.data)))},T=e=>n.value?(le.warning("当前有文件正在上传，请稍后再试"),!1):(i.value=!0,g.value=0,d.value="正在上传...",$.value=e,_.fileName=e.name,_.type=e.type,_.size=e.size,!0),j=e=>{U.coverUrl=e.data,d.value="上传完成",i.value=!1,g.value=100},C=e=>{U.coverUrl="",d.value="上传失败",i.value=!1,console.error(e)},L=e=>{r.value.clearFiles();e[0].uid=je(),r.value.submit()},P=e=>{g.value=Math.floor(e.loaded/e.total*100)},z=e=>{if(n.value)return le.warning("当前有文件正在上传，请稍后再试"),!1;const t="application/pdf"===e.type,a=e.type.includes("video/"),s=e.type.includes("image/"),l=e.size/1024/1024<30;if(t)F.type=0;else if(a)F.type=1;else{if(!s)return le.error("只能上传PDF、视频和图片文件"),!1;F.type=2}return a&&!l?(le.error("上传视频文件不能超过30MB"),!1):(n.value=!0,v.value=0,u.value="正在上传...",h.value=e,F.fileName=e.name,F.size=e.size,U.type=F.type,!0)},N=e=>{U.fileUrl=e.data,u.value="上传完成",n.value=!1,v.value=100},q=e=>{U.fileUrl="",u.value="上传失败",n.value=!1,console.error(e)},O=e=>{l.value.clearFiles();e[0].uid=je(),l.value.submit()},B=e=>{v.value=Math.floor(e.loaded/e.total*100)};return te((()=>{R()})),(e,t)=>{const s=ge,h=oe,$=de,S=_e,A=at,M=ie,V=ne,H=re;return p(),f("div",st,[D(H,null,{default:x((()=>[D(V,{ref_key:"studyDataFormRef",ref:c,model:U,rules:E,"label-width":"130px",class:"demo-studyDataForm",size:o.value,"status-icon":""},{default:x((()=>[D(h,{label:"资料名称",prop:"title"},{default:x((()=>[D(s,{modelValue:U.title,"onUpdate:modelValue":t[0]||(t[0]=e=>U.title=e),"show-word-limit":"",maxlength:"50",minlength:"3"},null,8,["modelValue"])])),_:1}),D(h,{label:"资料描述",prop:"content"},{default:x((()=>[D(s,{modelValue:U.content,"onUpdate:modelValue":t[1]||(t[1]=e=>U.content=e),"show-word-limit":"",maxlength:"100",minlength:"3"},null,8,["modelValue"])])),_:1}),D(h,{label:"封面",class:"h-173px",prop:"coverUrl"},{default:x((()=>[D(A,{ref_key:"uploadCover",ref:r,class:"upload-Cover",action:"api/v1/sys-upload/file",accept:".jpg,.jpeg,.png,JPG,.PNG",data:_,"before-upload":T,"on-success":j,"on-error":C,"on-progress":P,"show-file-list":!1,"on-exceed":L,headers:{Authorization:`${m(ae)()}`}},{default:x((()=>[D($,{type:"primary"},{default:x((()=>[se(b(i.value?"上传中...":"点击上传封面"),1)])),_:1}),i.value?(p(),f("div",lt,[y("div",rt,[D(S,{percentage:g.value},null,8,["percentage"])]),y("div",null,b(d.value),1)])):(p(),f("div",ot,[U.coverUrl?(p(),f("img",{key:0,class:"w-226px h-173px",src:U.coverUrl,controls:""},null,8,nt)):k("",!0)]))])),_:1},8,["data","headers"])])),_:1}),D(h,{label:"资料",class:"h-173px",prop:"fileUrl"},{default:x((()=>[D(A,{ref_key:"upload",ref:l,class:"upload-demo",action:"api/v1/sys-upload/file",accept:".jpg,.jpeg,.png,JPG,.PNG,.pdf,.mp4",data:F,"before-upload":z,"on-success":N,"on-error":q,"on-progress":B,"show-file-list":!1,"on-exceed":O,headers:{Authorization:`${m(ae)()}`}},{default:x((()=>[D($,{type:"primary"},{default:x((()=>[se(b(n.value?"上传中...":"点击上传材料"),1)])),_:1}),n.value?(p(),f("div",it,[y("div",ut,[D(S,{percentage:v.value},null,8,["percentage"])]),y("div",null,b(u.value),1)])):(p(),f("div",dt,[0===U.type&&U.fileUrl?(p(),f("div",ct,[se(" pdf文件暂时无法展示，请直接下载 "),y("a",{target:"_blank",href:`${U.fileUrl}`},[D($,{type:"primary",link:""},{default:x((()=>[se(" 下载 ")])),_:1})],8,pt)])):k("",!0),1===U.type&&U.fileUrl?(p(),f("video",{key:1,class:"w-226px h-173px",src:U.fileUrl,controls:""},null,8,ft)):k("",!0),2===U.type&&U.fileUrl?(p(),w(M,{key:2,class:"w-226px h-173px",src:U.fileUrl,lazy:"","preview-src-list":"[studyDataForm.fileUrl]","initial-index":0,fit:"contain"},null,8,["src"])):k("",!0)]))])),_:1},8,["data","headers"])])),_:1}),D(h,null,{default:x((()=>[D($,{type:"primary",disabled:n.value||i.value,onClick:t[2]||(t[2]=e=>(async e=>{e&&await e.validate((e=>{e?void 0!==a.query.id?pe(U).then((e=>le.success(e.msg))).catch((e=>le.error(e.msg))).finally((()=>{R()})):fe(U).then((e=>le.success(e.msg))).catch((e=>le.error(e.msg))).finally((()=>{c.value.resetFields()})):le.error("提交失败，请把数据补充完整")}))})(c.value))},{default:x((()=>[se(b(n.value||i.value?"上传中...":"提交"),1)])),_:1},8,["disabled"]),D($,{onClick:t[3]||(t[3]=e=>{var t;(t=c.value)&&t.resetFields()})},{default:x((()=>[se(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model","rules","size"])])),_:1})])}}});export{vt as default};
