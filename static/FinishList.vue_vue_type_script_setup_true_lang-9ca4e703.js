import{d as e,ao as a,r as l,Q as t,B as o,a as s,c as r,C as u,w as i,a4 as p,F as n,k as d,q as f}from"./index-b8a3a250.js";import{E as v}from"./el-dialog-8b7d2a0c.js";import"./el-overlay-0dacbd3f.js";import{E as m}from"./el-scrollbar-8ab6b49e.js";import{_ as c,E as _,a as w}from"./index.vue_vue_type_script_setup_true_lang-3bb72ae8.js";import{E as g}from"./el-tag-c40b19de.js";import{E as y}from"./el-button-7231a80e.js";import{g as b}from"./index-f0a6f388.js";const I=d("span",{class:"i-carbon-task-view mr-1"},null,-1),h={class:"flow-leave"},x=e({name:"VxeTable"}),T=e({...x,setup(e){const x=a(),T=[{id:0,type:"",value:"病假"},{id:1,type:"success",value:"婚假"},{id:2,type:"info",value:"丧假"},{id:3,type:"warning",value:"产假"},{id:4,type:"danger",value:"其它"}],j=[{id:0,type:"success",value:"同意"},{id:1,type:"danger",value:"拒绝"}],L=l(),k=l(!1),z=l(),C=t({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},columns:[{type:"seq",width:"50px",title:"序号"},{field:"flowLeaveInfo.proposer.username",title:"申请人"},{field:"applicationType",title:"申请类型",slots:{default:"application-type"}},{field:"approvalResult",title:"审批结果",slots:{default:"approval-result"}},{field:"flowLeaveInfo.createTime",title:"申请时间"},{field:"updateTime",title:"处理时间"},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e})=>(C.loading=!0,new Promise((a=>{var l;let t=0,o=[];const s=e=>{if(e&&e.data){const a=e.data;Number.isInteger(a.total)&&(t=a.total),Array.isArray(a.records)&&(o=a.records)}C.loading=!1,a({total:t,result:o})},r={approverId:null==(l=x.userInfo)?void 0:l.id,status:0,applicationType:"0",size:e.pageSize,current:e.currentPage};b(r).then(s).catch(s)})))}}});return(e,a)=>{const l=y,t=o("vxe-grid"),b=_,x=g,E=w,R=m,S=v;return s(),r("div",null,[u(t,n({ref_key:"xGridDom",ref:z},C),{"application-type":i((({row:e})=>[u(c,{status:parseInt(e.applicationType),"status-list":T},null,8,["status"])])),"approval-result":i((({row:e})=>[u(c,{status:parseInt(e.approvalResult),"status-list":j},null,8,["status"])])),"row-operate":i((({row:e})=>[u(l,{link:"",type:"primary",onClick:a=>(e=>{L.value=e,k.value=!0})(e)},{default:i((()=>[I,p(" 查看详情 ")])),_:2},1032,["onClick"])])),_:1},16),u(S,{modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e),title:"申请详情",width:"40%",draggable:"","destroy-on-close":""},{default:i((()=>[u(R,null,{default:i((()=>[d("div",h,[u(E,{title:"申请人信息",column:2,"label-align":"right"},{default:i((()=>[u(b,{label:"姓名"},{default:i((()=>[p(f(L.value.flowLeaveInfo.proposer.username),1)])),_:1}),u(b,{label:"手机号码"},{default:i((()=>[p(f(L.value.flowLeaveInfo.proposer.phoneNum),1)])),_:1}),u(b,{label:"部门"},{default:i((()=>[p(" Suzhou ")])),_:1}),u(b,{label:"职位"},{default:i((()=>[u(x,{size:"small"},{default:i((()=>[p(" School ")])),_:1})])),_:1})])),_:1}),u(E,{title:"申请表单",column:2,border:""},{default:i((()=>[u(b,{label:"申请时间"},{default:i((()=>[p(f(L.value.flowLeaveInfo.createTime),1)])),_:1}),u(b,{label:"请假时长"},{default:i((()=>[p(f(L.value.flowLeaveInfo.duration)+" 天 ",1)])),_:1}),u(b,{label:"请假开始时间"},{default:i((()=>[p(f(L.value.flowLeaveInfo.startTime),1)])),_:1}),u(b,{label:"请假结束时间"},{default:i((()=>[p(f(L.value.flowLeaveInfo.endTime),1)])),_:1}),u(b,{label:"申请原因"},{default:i((()=>[p(f(L.value.flowLeaveInfo.reason),1)])),_:1})])),_:1}),u(E,{title:"审批详情",column:2,class:"mt-3"},{default:i((()=>[u(b,{label:"审批结果"},{default:i((()=>[u(c,{status:parseInt(L.value.approvalResult),"status-list":j},null,8,["status"])])),_:1}),u(b,{label:"审批时间"},{default:i((()=>[p(f(L.value.updateTime),1)])),_:1}),u(b,{label:"审批意见"},{default:i((()=>[p(f(L.value.reason),1)])),_:1})])),_:1})])])),_:1})])),_:1},8,["modelValue"])])}}});export{T as _};
