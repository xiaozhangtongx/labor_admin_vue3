import{d as e,ac as l,r as a,Q as t,B as o,a as r,c as s,C as i,w as u,a4 as n,F as d,k as f,q as p}from"./index-2b9e942f.js";import{E as m}from"./el-dialog-73760f8c.js";import"./el-overlay-45055e12.js";import{E as c}from"./el-scrollbar-a8bdb3de.js";import{E as v,a as w}from"./el-descriptions-item-b1e67eab.js";/* empty css               */import{E as _}from"./el-button-4ba8563a.js";import{g}from"./index-a312e660.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-fb9ecaf4.js";import{E as k}from"./index-910faca8.js";const h=f("span",{class:"i-carbon-task-view mr-1"},null,-1),y={class:"flow-leave"},I=e({name:"VxeTable"}),T=e({...I,setup(e){const I=l(),T=[{id:0,type:"success",value:"同意"},{id:1,type:"danger",value:"拒绝"}],x=a(),j=a(!1),W=a(),z=t({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},columns:[{type:"seq",width:"50px",title:"序号"},{field:"flowWorkTimeInfo.proposer.username",title:"申请人"},{field:"approvalResult",title:"审批结果",slots:{default:"approval-result"}},{field:"flowWorkTimeInfo.workDate",title:"申请补充日期"},{field:"flowWorkTimeInfo.workDuration",title:"申请时长"},{field:"flowWorkTimeInfo.createTime",title:"申请时间"},{field:"updateTime",title:"处理时间"},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e})=>(z.loading=!0,new Promise((l=>{var a;let t=0,o=[];const r=e=>{if(e&&e.data){const l=e.data;Number.isInteger(l.total)&&(t=l.total),Array.isArray(l.records)&&(o=l.records)}z.loading=!1,l({total:t,result:o})},s={approverId:null==(a=I.userInfo)?void 0:a.id,status:0,applicationType:"3",size:e.pageSize,current:e.currentPage};g(s).then(r).catch(r)})))}}});return(e,l)=>{const a=_,t=o("vxe-grid"),g=v,I=k,C=w,q=c,D=m;return r(),s("div",null,[i(t,d({ref_key:"xGridDom",ref:W},z),{"approval-result":u((({row:e})=>[i(b,{status:parseInt(e.approvalResult),"status-list":T},null,8,["status"])])),"row-operate":u((({row:e})=>[i(a,{link:"",type:"primary",onClick:l=>(e=>{x.value=e,j.value=!0})(e)},{default:u((()=>[h,n(" 查看详情 ")])),_:2},1032,["onClick"])])),_:1},16),i(D,{modelValue:j.value,"onUpdate:modelValue":l[0]||(l[0]=e=>j.value=e),title:"申请详情",width:"40%",draggable:"","destroy-on-close":""},{default:u((()=>[i(q,null,{default:u((()=>[f("div",y,[i(C,{title:"申请人信息",column:2,"label-align":"right"},{default:u((()=>[i(g,{label:"姓名"},{default:u((()=>[n(p(x.value.flowWorkTimeInfo.proposer.username),1)])),_:1}),i(g,{label:"手机号码"},{default:u((()=>[n(p(x.value.flowWorkTimeInfo.proposer.phoneNum),1)])),_:1}),i(g,{label:"部门"},{default:u((()=>[n(" Suzhou ")])),_:1}),i(g,{label:"职位"},{default:u((()=>[i(I,{size:"small"},{default:u((()=>[n(" School ")])),_:1})])),_:1})])),_:1}),i(C,{title:"申请表单",column:2,border:""},{default:u((()=>[i(g,{label:"补充日期"},{default:u((()=>[n(p(x.value.flowWorkTimeInfo.workDate),1)])),_:1}),i(g,{label:"申请时长"},{default:u((()=>[n(p(x.value.flowWorkTimeInfo.workDuration)+" 小时 ",1)])),_:1}),i(g,{label:"申请原因"},{default:u((()=>[n(p(x.value.flowWorkTimeInfo.reason),1)])),_:1})])),_:1}),i(C,{title:"审批详情",column:2,class:"mt-3"},{default:u((()=>[i(g,{label:"审批结果"},{default:u((()=>[i(b,{status:parseInt(x.value.approvalResult),"status-list":T},null,8,["status"])])),_:1}),i(g,{label:"审批时间"},{default:u((()=>[n(p(x.value.updateTime),1)])),_:1}),i(g,{label:"审批意见"},{default:u((()=>[n(p(x.value.reason),1)])),_:1})])),_:1})])])),_:1})])),_:1},8,["modelValue"])])}}});export{T as _};