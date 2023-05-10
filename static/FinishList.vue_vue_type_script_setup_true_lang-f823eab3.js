import{d as e,ac as l,r as a,Q as t,B as o,a as s,c as r,C as i,w as u,a4 as p,F as n,k as d,q as f}from"./index-9a706b5e.js";import{E as m}from"./el-dialog-94ce5d08.js";import"./el-overlay-d6f3b381.js";import{E as v}from"./el-scrollbar-c33e6783.js";import{E as c,a as _}from"./el-descriptions-item-2ae00c61.js";/* empty css               */import{E as w}from"./el-button-cb2bce56.js";import{g}from"./index-5f4cd0c2.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-ee812c46.js";import{E as y}from"./index-69566457.js";const T=d("span",{class:"i-carbon-task-view mr-1"},null,-1),I={class:"flow-leave"},h=e({name:"VxeTable"}),x=e({...h,setup(e){const h=l(),x=[{id:0,type:"",value:"工作日加班"},{id:1,type:"success",value:"休息日加班"},{id:2,type:"danger",value:"法定节假日加班"}],O=[{id:0,type:"success",value:"同意"},{id:1,type:"danger",value:"拒绝"}],j=a(),k=a(!1),z=a(),C=t({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},columns:[{type:"seq",width:"50px",title:"序号"},{field:"flowOverTimeInfo.proposer.username",title:"申请人"},{field:"applicationType",title:"申请类型",slots:{default:"application-type"}},{field:"approvalResult",title:"审批结果",slots:{default:"approval-result"}},{field:"flowOverTimeInfo.createTime",title:"申请时间"},{field:"updateTime",title:"处理时间"},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e})=>(C.loading=!0,new Promise((l=>{var a;let t=0,o=[];const s=e=>{if(e&&e.data){const l=e.data;Number.isInteger(l.total)&&(t=l.total),Array.isArray(l.records)&&(o=l.records)}C.loading=!1,l({total:t,result:o})},r={approverId:null==(a=h.userInfo)?void 0:a.id,status:0,applicationType:"2",size:e.pageSize,current:e.currentPage};g(r).then(s).catch(s)})))}}});return(e,l)=>{const a=w,t=o("vxe-grid"),g=c,h=y,E=_,q=v,R=m;return s(),r("div",null,[i(t,n({ref_key:"xGridDom",ref:z},C),{"application-type":u((({row:e})=>[i(b,{status:parseInt(e.applicationType),"status-list":x},null,8,["status"])])),"approval-result":u((({row:e})=>[i(b,{status:parseInt(e.approvalResult),"status-list":O},null,8,["status"])])),"row-operate":u((({row:e})=>[i(a,{link:"",type:"primary",onClick:l=>(e=>{j.value=e,k.value=!0})(e)},{default:u((()=>[T,p(" 查看详情 ")])),_:2},1032,["onClick"])])),_:1},16),i(R,{modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),title:"申请详情",width:"40%",draggable:"","destroy-on-close":""},{default:u((()=>[i(q,null,{default:u((()=>[d("div",I,[i(E,{title:"申请人信息",column:2,"label-align":"right"},{default:u((()=>[i(g,{label:"姓名"},{default:u((()=>[p(f(j.value.flowOverTimeInfo.proposer.username),1)])),_:1}),i(g,{label:"手机号码"},{default:u((()=>[p(f(j.value.flowOverTimeInfo.proposer.phoneNum),1)])),_:1}),i(g,{label:"部门"},{default:u((()=>[p(" Suzhou ")])),_:1}),i(g,{label:"职位"},{default:u((()=>[i(h,{size:"small"},{default:u((()=>[p(" School ")])),_:1})])),_:1})])),_:1}),i(E,{title:"申请表单",column:2,border:""},{default:u((()=>[i(g,{label:"申请时间"},{default:u((()=>[p(f(j.value.flowOverTimeInfo.createTime),1)])),_:1}),i(g,{label:"加班时长"},{default:u((()=>[p(f(j.value.flowOverTimeInfo.duration)+" 小时 ",1)])),_:1}),i(g,{label:"加班开始时间"},{default:u((()=>[p(f(j.value.flowOverTimeInfo.startTime),1)])),_:1}),i(g,{label:"加班结束时间"},{default:u((()=>[p(f(j.value.flowOverTimeInfo.endTime),1)])),_:1}),i(g,{label:"申请原因"},{default:u((()=>[p(f(j.value.flowOverTimeInfo.reason),1)])),_:1})])),_:1}),i(E,{title:"审批详情",column:2,class:"mt-3"},{default:u((()=>[i(g,{label:"审批结果"},{default:u((()=>[i(b,{status:parseInt(j.value.approvalResult),"status-list":O},null,8,["status"])])),_:1}),i(g,{label:"审批时间"},{default:u((()=>[p(f(j.value.updateTime),1)])),_:1}),i(g,{label:"审批意见"},{default:u((()=>[p(f(j.value.reason),1)])),_:1})])),_:1})])])),_:1})])),_:1},8,["modelValue"])])}}});export{x as _};
