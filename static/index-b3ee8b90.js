import{d as e,ag as t,r as l,Q as i,B as a,a as s,c as o,C as r,w as n,W as p,ah as d,a4 as u,F as m,k as c,q as f}from"./index-af1b0f7f.js";import{E as y}from"./el-dialog-eb6eea03.js";import"./el-overlay-064fc03e.js";import{E as g}from"./el-radio-9aa0f15b.js";import{E as v}from"./el-button-4c1bfddb.js";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang-f927f1c6.js";/* empty css                 *//* empty css               */import{E as h,a as x}from"./el-select-15637aa0.js";import"./el-scrollbar-122da2af.js";import"./el-popper-93d8741f.js";import{g as w}from"./index-7dd138a4.js";import"./index-0053bafd.js";import"./event-15d81b97.js";import"./scroll-9ad6d206.js";import"./focus-trap-1edd113c.js";import"./refs-b2772767.js";import"./index-6ff256e8.js";import"./use-form-item-c127ca03.js";import"./index-9e5f34e5.js";import"./index-b7e1e73a.js";import"./index-de5a0541.js";import"./strings-a26e2dce.js";import"./isEqual-b39ef673.js";import"./_Uint8Array-e7b42d57.js";import"./debounce-8a611c37.js";import"./index-8024eeb1.js";import"./validator-e168c632.js";const _={class:"app-container"},b=c("span",{class:"i-carbon-task-view mr-1"},null,-1),k=c("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),C=c("strong",null,"题目：",-1),q=e({name:"VxeTable"}),V=e({...q,setup(e){const q=t(),V=l(!1),z=l(null),E=[{id:"0",value:"判断题",type:""},{id:"1",value:"选择题",type:"success"}],R=l(),U=l(),A=i({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},formConfig:{items:[{field:"title",itemRender:{name:"$input",props:{placeholder:"请输入题目",clearable:!0}}},{field:"tag",itemRender:{name:"$input",props:{placeholder:"请输入相关知识点",clearable:!0}}},{field:"type",slots:{default:"type_item"}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"seq",width:"50px",title:"序号"},{field:"title",title:"题目",width:"370px"},{field:"score",title:"分数"},{field:"tag",title:"知识点"},{field:"createTime",title:"创建时间"},{field:"type",width:"80px",title:"题型",slots:{default:"row-type"}},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(A.loading=!0,new Promise((l=>{let i=0,a=[];const s=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(i=t.total),Array.isArray(t.records)&&(a=t.records)}A.loading=!1,l({total:i,result:a})},o={title:t.title||"",type:z.value||"",tag:t.tag||"",size:e.pageSize,current:e.currentPage};w(o).then(s).catch(s)})))}}});return(e,t)=>{const l=h,i=x,w=j,I=v,O=a("vxe-grid"),T=g,$=y;return s(),o("div",_,[r(O,m({ref_key:"xGridDom",ref:U},A),{type_item:n((()=>[r(i,{modelValue:z.value,"onUpdate:modelValue":t[0]||(t[0]=e=>z.value=e),clearable:"",placeholder:"请选择题型"},{default:n((()=>[(s(),o(p,null,d(E,(e=>r(l,{key:e.id,label:e.value,value:e.id},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),"row-type":n((({row:e})=>[r(w,{status:parseInt(e.type),"status-list":E},null,8,["status"])])),"row-operate":n((({row:e})=>[r(I,{link:"",type:"primary",onClick:t=>(e=>{V.value=!0,R.value=e})(e)},{default:n((()=>[b,u(" 预览题目 ")])),_:2},1032,["onClick"]),r(I,{link:"",type:"danger",onClick:t=>(e=>{q.push({path:0===(null==e?void 0:e.type)?"/sys-question/edit/trueFalse":"/sys-question/edit/singleChoice",query:{id:null==e?void 0:e.id}})})(e)},{default:n((()=>[k,u(" 编辑题目 ")])),_:2},1032,["onClick"])])),_:1},16),r($,{modelValue:V.value,"onUpdate:modelValue":t[1]||(t[1]=e=>V.value=e),"destroy-on-close":"",width:"370px",title:"题目预览"},{default:n((()=>{var e,t;return[c("h3",null,[C,u(" "+f(null==(e=R.value)?void 0:e.title),1)]),(s(!0),o(p,null,d(null==(t=R.value)?void 0:t.sysQuestionItemList,(e=>(s(),o("p",{key:e.id,class:"m-0"},[r(T,{label:e.id,size:"large"},{default:n((()=>[u(f(e.content),1)])),_:2},1032,["label"])])))),128))]})),_:1},8,["modelValue"])])}}});export{V as default};
