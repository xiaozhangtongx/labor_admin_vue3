import{d as e,ag as t,r as l,Q as a,B as s,a as i,c as r,C as o,w as n,W as p,ah as u,a4 as d,F as m,k as c,q as f}from"./index-1713f3be.js";import{E as g}from"./el-dialog-4ecabfaa.js";import"./el-overlay-7919f65d.js";import{E as y}from"./el-radio-62218175.js";import{E as v}from"./el-button-1777eae9.js";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang-06622adf.js";/* empty css                 *//* empty css               */import{E as h,a as w}from"./el-select-9774fffc.js";import"./el-scrollbar-caee5b30.js";import"./el-popper-90370b12.js";import{g as x}from"./index-5a33c4e7.js";import"./focus-trap-6cc344c7.js";import"./event-15d81b97.js";import"./refs-0a43d458.js";import"./use-form-item-865a16c5.js";import"./scroll-e1940b97.js";import"./index-152f0932.js";import"./index-3f18be1f.js";import"./index-d50292f6.js";import"./strings-5db16fbd.js";import"./isEqual-5a787c40.js";import"./_Uint8Array-85531e68.js";import"./debounce-1af7bc8d.js";import"./index-ed51e79f.js";import"./validator-e67b7ad4.js";const b={class:"app-container"},_=c("span",{class:"i-carbon-task-view mr-1"},null,-1),k=c("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),C=c("strong",null,"题目：",-1),q=e({name:"VxeTable"}),V=e({...q,setup(e){const q=t(),V=l(!1),z=l(null),E=[{id:"0",value:"判断题",type:""},{id:"1",value:"选择题",type:"success"}],R=l(),U=l(),I=a({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},formConfig:{items:[{field:"title",itemRender:{name:"$input",props:{placeholder:"请输入题目",clearable:!0}}},{field:"tag",itemRender:{name:"$input",props:{placeholder:"请输入相关知识点",clearable:!0}}},{field:"type",slots:{default:"type_item"}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"seq",width:"50px",title:"序号"},{field:"title",title:"题目",width:"370px"},{field:"score",title:"分数"},{field:"tag",title:"知识点"},{field:"createTime",title:"创建时间"},{field:"type",width:"80px",title:"题型",slots:{default:"row-type"}},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(I.loading=!0,new Promise((l=>{let a=0,s=[];const i=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(a=t.total),Array.isArray(t.records)&&(s=t.records)}I.loading=!1,l({total:a,result:s})},r={title:t.title||"",type:z.value||"",tag:t.tag||"",size:e.pageSize,current:e.currentPage};x(r).then(i).catch(i)})))}}});return(e,t)=>{const l=h,a=w,x=j,A=v,O=s("vxe-grid"),S=y,$=g;return i(),r("div",b,[o(O,m({ref_key:"xGridDom",ref:U},I),{type_item:n((()=>[o(a,{modelValue:z.value,"onUpdate:modelValue":t[0]||(t[0]=e=>z.value=e),clearable:"",placeholder:"请选择题型"},{default:n((()=>[(i(),r(p,null,u(E,(e=>o(l,{key:e.id,label:e.value,value:e.id},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),"row-type":n((({row:e})=>[o(x,{status:parseInt(e.type),"status-list":E},null,8,["status"])])),"row-operate":n((({row:e})=>[o(A,{link:"",type:"primary",onClick:t=>(e=>{V.value=!0,R.value=e})(e)},{default:n((()=>[_,d(" 预览题目 ")])),_:2},1032,["onClick"]),o(A,{link:"",type:"danger",onClick:t=>(e=>{q.push({path:0===(null==e?void 0:e.type)?"/sys-question/edit/trueFalse":"/sys-question/edit/singleChoice",query:{id:null==e?void 0:e.id}})})(e)},{default:n((()=>[k,d(" 编辑题目 ")])),_:2},1032,["onClick"])])),_:1},16),o($,{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=e=>V.value=e),"destroy-on-close":"",width:"370px",title:"题目预览"},{default:n((()=>{var e,t;return[c("h3",null,[C,d(" "+f(null==(e=R.value)?void 0:e.title),1)]),(i(!0),r(p,null,u(null==(t=R.value)?void 0:t.sysQuestionItemList,(e=>(i(),r("p",{key:e.id,class:"m-0"},[o(S,{label:e.id,size:"large"},{default:n((()=>[d(f(e.content),1)])),_:2},1032,["label"])])))),128))]})),_:1},8,["modelValue"])])}}});export{V as default};