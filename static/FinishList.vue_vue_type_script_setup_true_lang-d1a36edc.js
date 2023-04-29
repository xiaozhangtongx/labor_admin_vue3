import{d as e,ao as a,r as l,Q as t,B as o,a as s,c as r,C as u,w as i,a4 as n,F as p,k as d,q as f}from"./index-5cd95c96.js";import{E as v}from"./el-dialog-550286b2.js";import"./el-overlay-e674941e.js";import{E as c}from"./el-scrollbar-dfa5a1fc.js";import{g as m,_,E as w,a as g}from"./index.vue_vue_type_script_setup_true_lang-2c3ac2ce.js";import{E as y}from"./el-tag-e29fba55.js";import{E as b}from"./el-button-991a0e97.js";const I=d("span",{class:"i-carbon-task-view mr-1"},null,-1),h={class:"flow-leave"},x=e({name:"VxeTable"}),L=e({...x,setup(e){const x=a(),L=[{id:0,type:"",value:"病假"},{id:1,type:"success",value:"婚假"},{id:2,type:"info",value:"丧假"},{id:3,type:"warning",value:"产假"},{id:4,type:"danger",value:"其它"}],T=[{id:0,type:"success",value:"同意"},{id:1,type:"danger",value:"拒绝"}],j=l(),k=l(!1),z=l(),C=t({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},columns:[{type:"seq",width:"50px",title:"序号"},{field:"flowLeaveInfo.proposer.username",title:"申请人"},{field:"applicationType",title:"申请类型",slots:{default:"application-type"}},{field:"approvalResult",title:"审批结果",slots:{default:"approval-result"}},{field:"flowLeaveInfo.createTime",title:"申请时间"},{field:"updateTime",title:"处理时间"},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e})=>(C.loading=!0,new Promise((a=>{var l;let t=0,o=[];const s=e=>{if(e&&e.data){const a=e.data;Number.isInteger(a.total)&&(t=a.total),Array.isArray(a.records)&&(o=a.records)}C.loading=!1,a({total:t,result:o})},r={approverId:null==(l=x.userInfo)?void 0:l.id,status:0,applicationType:"0",size:e.pageSize,current:e.currentPage};m(r).then(s).catch(s)})))}}});return(e,a)=>{const l=b,t=o("vxe-grid"),m=w,x=y,E=g,q=c,R=v;return s(),r("div",null,[u(t,p({ref_key:"xGridDom",ref:z},C),{"application-type":i((({row:e})=>[u(_,{status:parseInt(e.applicationType),"status-list":L},null,8,["status"])])),"approval-result":i((({row:e})=>[u(_,{status:parseInt(e.approvalResult),"status-list":T},null,8,["status"])])),"row-operate":i((({row:e})=>[u(l,{link:"",type:"primary",onClick:a=>(e=>{j.value=e,k.value=!0})(e)},{default:i((()=>[I,n(" 查看详情 ")])),_:2},1032,["onClick"])])),_:1},16),u(R,{modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e),title:"申请详情",width:"40%",draggable:"","destroy-on-close":""},{default:i((()=>[u(q,null,{default:i((()=>[d("div",h,[u(E,{title:"申请人信息",column:2,"label-align":"right"},{default:i((()=>[u(m,{label:"姓名"},{default:i((()=>[n(f(j.value.flowLeaveInfo.proposer.username),1)])),_:1}),u(m,{label:"手机号码"},{default:i((()=>[n(f(j.value.flowLeaveInfo.proposer.phoneNum),1)])),_:1}),u(m,{label:"部门"},{default:i((()=>[n(" Suzhou ")])),_:1}),u(m,{label:"职位"},{default:i((()=>[u(x,{size:"small"},{default:i((()=>[n(" School ")])),_:1})])),_:1})])),_:1}),u(E,{title:"申请表单",column:2,border:""},{default:i((()=>[u(m,{label:"申请时间"},{default:i((()=>[n(f(j.value.flowLeaveInfo.createTime),1)])),_:1}),u(m,{label:"请假时长"},{default:i((()=>[n(f(j.value.flowLeaveInfo.duration)+" 天 ",1)])),_:1}),u(m,{label:"请假开始时间"},{default:i((()=>[n(f(j.value.flowLeaveInfo.startTime),1)])),_:1}),u(m,{label:"请假结束时间"},{default:i((()=>[n(f(j.value.flowLeaveInfo.endTime),1)])),_:1}),u(m,{label:"申请原因"},{default:i((()=>[n(f(j.value.flowLeaveInfo.reason),1)])),_:1})])),_:1}),u(E,{title:"审批详情",column:2,class:"mt-3"},{default:i((()=>[u(m,{label:"审批结果"},{default:i((()=>[u(_,{status:parseInt(j.value.approvalResult),"status-list":T},null,8,["status"])])),_:1}),u(m,{label:"审批时间"},{default:i((()=>[n(f(j.value.updateTime),1)])),_:1}),u(m,{label:"审批意见"},{default:i((()=>[n(f(j.value.reason),1)])),_:1})])),_:1})])])),_:1})])),_:1},8,["modelValue"])])}}});export{L as _};
