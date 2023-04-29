import{d as e,ao as l,r as a,Q as t,B as o,a as s,c as r,C as u,w as n,a4 as i,F as f,k as d,q as p}from"./index-5cd95c96.js";import{E as c}from"./el-dialog-550286b2.js";import"./el-overlay-e674941e.js";import{E as v}from"./el-scrollbar-dfa5a1fc.js";import{g as m,_,E as w,a as I}from"./index.vue_vue_type_script_setup_true_lang-2c3ac2ce.js";import{E as b}from"./el-tag-e29fba55.js";import{E as g}from"./el-button-991a0e97.js";const y=d("span",{class:"i-carbon-task-view mr-1"},null,-1),C={class:"flow-leave"},h=e({name:"VxeTable"}),T=e({...h,setup(e){const h=l(),T=[{id:0,type:"",value:"病假"},{id:1,type:"success",value:"婚假"},{id:2,type:"info",value:"丧假"},{id:3,type:"warning",value:"产假"},{id:4,type:"danger",value:"其它"}],x=[{id:0,type:"success",value:"同意"},{id:1,type:"danger",value:"拒绝"}],j=a(),k=a(!1),z=a(),E=t({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},columns:[{type:"seq",width:"50px",title:"序号"},{field:"flowCancelInfo.leaveInfo.proposer.username",title:"申请人"},{field:"applicationType",title:"申请销假类型",slots:{default:"application-type"}},{field:"approvalResult",title:"审批结果",slots:{default:"approval-result"}},{field:"flowCancelInfo.createTime",title:"申请时间"},{field:"updateTime",title:"处理时间"},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e})=>(E.loading=!0,new Promise((l=>{var a;let t=0,o=[];const s=e=>{if(e&&e.data){const l=e.data;Number.isInteger(l.total)&&(t=l.total),Array.isArray(l.records)&&(o=l.records)}E.loading=!1,l({total:t,result:o})},r={approverId:null==(a=h.userInfo)?void 0:a.id,status:0,applicationType:"1",size:e.pageSize,current:e.currentPage};m(r).then(s).catch(s)})))}}});return(e,l)=>{const a=g,t=o("vxe-grid"),m=w,h=b,q=I,R=v,S=c;return s(),r("div",null,[u(t,f({ref_key:"xGridDom",ref:z},E),{"application-type":n((({row:e})=>[u(_,{status:parseInt(e.applicationType),"status-list":T},null,8,["status"])])),"approval-result":n((({row:e})=>[u(_,{status:parseInt(e.approvalResult),"status-list":x},null,8,["status"])])),"row-operate":n((({row:e})=>[u(a,{link:"",type:"primary",onClick:l=>(e=>{j.value=e,k.value=!0})(e)},{default:n((()=>[y,i(" 查看详情 ")])),_:2},1032,["onClick"])])),_:1},16),u(S,{modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),title:"申请详情",width:"40%",draggable:"","destroy-on-close":""},{default:n((()=>[u(R,null,{default:n((()=>[d("div",C,[u(q,{title:"申请人信息",column:2,"label-align":"right"},{default:n((()=>[u(m,{label:"姓名"},{default:n((()=>[i(p(j.value.flowCancelInfo.leaveInfo.proposer.username),1)])),_:1}),u(m,{label:"手机号码"},{default:n((()=>[i(p(j.value.flowCancelInfo.leaveInfo.proposer.phoneNum),1)])),_:1}),u(m,{label:"部门"},{default:n((()=>[i(" Suzhou ")])),_:1}),u(m,{label:"职位"},{default:n((()=>[u(h,{size:"small"},{default:n((()=>[i(" School ")])),_:1})])),_:1})])),_:1}),u(q,{title:"请假表单",column:2,border:""},{default:n((()=>[u(m,{label:"申请时间"},{default:n((()=>[i(p(j.value.flowCancelInfo.leaveInfo.createTime),1)])),_:1}),u(m,{label:"请假时长"},{default:n((()=>[i(p(j.value.flowCancelInfo.leaveInfo.duration)+" 天 ",1)])),_:1}),u(m,{label:"请假开始时间"},{default:n((()=>[i(p(j.value.flowCancelInfo.leaveInfo.startTime),1)])),_:1}),u(m,{label:"请假结束时间"},{default:n((()=>[i(p(j.value.flowCancelInfo.leaveInfo.endTime),1)])),_:1}),u(m,{label:"请假原因"},{default:n((()=>[i(p(j.value.flowCancelInfo.leaveInfo.reason),1)])),_:1})])),_:1}),u(q,{title:"销假表单",column:2,border:"",class:"mt-2"},{default:n((()=>[u(m,{label:"申请时间"},{default:n((()=>[i(p(j.value.flowCancelInfo.createTime),1)])),_:1}),u(m,{label:"更新时间"},{default:n((()=>[i(p(j.value.flowCancelInfo.updateTime||j.value.flowCancelInfo.createTime),1)])),_:1}),u(m,{label:"申请原因"},{default:n((()=>[i(p(j.value.flowCancelInfo.leaveInfo.reason),1)])),_:1})])),_:1}),u(q,{title:"审批详情",column:2,class:"mt-3"},{default:n((()=>[u(m,{label:"审批结果"},{default:n((()=>[u(_,{status:parseInt(j.value.approvalResult),"status-list":x},null,8,["status"])])),_:1}),u(m,{label:"审批时间"},{default:n((()=>[i(p(j.value.updateTime),1)])),_:1}),u(m,{label:"审批意见"},{default:n((()=>[i(p(j.value.reason),1)])),_:1})])),_:1})])])),_:1})])),_:1},8,["modelValue"])])}}});export{T as _};
