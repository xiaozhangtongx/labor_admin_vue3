import{d as e,r as a,ac as l,Q as s,o as t,a as o,c as r,C as i,w as u,D as d,l as n,W as p,ah as m,n as f,k as v,q as c,a4 as _,H as j,an as h,ap as y,aq as g}from"./index-442db11c.js";import{v as b}from"./el-loading-51a0e880.js";import{E as w,a as x,b as I,c as T}from"./el-main-9127b7fc.js";import{_ as k,E,a as O}from"./el-tab-pane-144583aa.js";import{a as z,E as C}from"./el-form-item-644922ab.js";import{E as V}from"./el-button-6cab2065.js";/* empty css                 */import{E as R,a as q}from"./el-descriptions-item-0e68857e.js";import{E as F}from"./el-tag-011e2015.js";import{E as S}from"./el-scrollbar-8102c0d4.js";import{E as U}from"./el-divider-2ba72cc5.js";import{E as D}from"./el-card-013e48ed.js";import{E as H}from"./el-empty-f242d87a.js";import{_ as N}from"./FinishList.vue_vue_type_script_setup_true_lang-83e946d0.js";import{g as P,s as W}from"./index-cf387ecb.js";import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-9f553fa8.js";import{u as G}from"./utils-6cebd9eb.js";import{E as L}from"./index-43c84df1.js";import{_ as M}from"./_plugin-vue_export-helper-1b428a4d.js";import"./throttle-f8a59523.js";import"./debounce-7bbe3209.js";import"./focus-trap-1ae2c557.js";import"./scroll-327f18e0.js";import"./strings-929788f0.js";import"./index-5cf9a293.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-f2b04c8d.js";import"./index-21a87288.js";import"./index-4cf5760a.js";import"./el-dialog-86c454b9.js";import"./el-overlay-d1673d35.js";import"./refs-384f660f.js";import"./index-78074203.js";import"./index-b8912c04.js";const Q=e=>(y("data-v-5137ef41"),e=e(),g(),e),Y={class:"app-container"},Z={key:0},$={key:1,class:"common-layout"},B={"infinite-scroll-immediate":!1,class:"infinite-list"},J={class:"flex justify-between w-60 text-gray-500"},K={class:"flow-leave"},X=Q((()=>v("h2",{class:"flex justify-center items-center"}," 审批表 ",-1))),ee=Q((()=>v("h4",{class:"mt-2"}," 审批意见 ",-1))),ae=e({name:"ElementPlus"}),le=M(e({...ae,setup(e){var y,g;const M=a("todo"),Q=l(),ae=a(),le=[{id:0,type:"",value:"工作日加班"},{id:1,type:"success",value:"休息日加班"},{id:2,type:"danger",value:"法定节假日加班"}],se=s({approverId:null==(y=Q.userInfo)?void 0:y.id,status:1,applicationType:"2",current:0,size:5}),te=s({id:"",applicationId:"",approverId:(null==(g=Q.userInfo)?void 0:g.id)||"",approvalResult:0,reason:"",applicationType:"2"}),oe=a([]),re=a(),ie=a(!0),ue=a(!1),de=a(""),ne=a(!1),pe=()=>{ie.value=!0,P(se).then((e=>{var a;const l=[...oe.value,...e.data.records];oe.value=[...G(l)],re.value=oe.value[0],de.value=(null==(a=re.value)?void 0:a.id)||"",ie.value=!1,se.current+=se.size,e.data.total>=oe.value.length&&(ue.value=!0)}))},me=()=>{pe()},fe=e=>{oe.value=oe.value.filter((a=>a.id!==e))};return t((()=>{pe()})),(e,a)=>{const l=H,s=D,t=U,y=S,g=w,P=k,G=R,Q=F,se=q,pe=L,ve=z,ce=V,_e=C,je=x,he=I,ye=E,ge=O,be=T,we=b;return o(),r("div",Y,[i(s,{shadow:"never"},{default:u((()=>[i(ge,{modelValue:M.value,"onUpdate:modelValue":a[3]||(a[3]=e=>M.value=e),class:"demo-tabs"},{default:u((()=>[i(ye,{label:"待审批",name:"todo"},{default:u((()=>["todo"===M.value?d((o(),r("div",Z,[0===oe.value.length?(o(),n(l,{key:0,"image-size":200,class:"h-120",description:"你已经全部审批完了"})):(o(),r("div",$,[i(he,null,{default:u((()=>[i(g,null,{default:u((()=>[i(y,{height:"480px"},{default:u((()=>[d((o(),r("div",B,[(o(!0),r(p,null,m(oe.value,(e=>(o(),n(s,{key:e.id,shadow:"hover",class:f([{activeCard:de.value===e.id},"infinite-list-item cursor-pointer"]),onClick:a=>(e=>{re.value=e,ie.value=!1,de.value=e.id,te.applicationId=e.applicationId,te.id=e.id})(e)},{default:u((()=>[v("h4",null,[i(A,{status:parseInt(e.applicationType),"status-list":le},null,8,["status"])]),v("h5",J,[v("span",null,c(e.flowOverTimeInfo.proposer.username),1),v("span",null,c(e.flowOverTimeInfo.createTime),1)])])),_:2},1032,["class","onClick"])))),128)),ue.value?(o(),n(t,{key:0,"border-style":"dashed"},{default:u((()=>[_(" 加载完毕 ")])),_:1})):j("",!0)])),[[be,me]])])),_:1})])),_:1}),i(je,null,{default:u((()=>[v("div",null,[i(P,{element:".flow-leave","open-tips":"审批表全屏",class:"absolute right-0"}),ie.value?(o(),n(l,{key:0,"image-size":200,description:"请点击左侧的待审批单查看数据"})):d((o(),n(y,{key:1,height:"450px"},{default:u((()=>[v("div",K,[X,d((o(),n(se,{title:"申请人信息",column:2,"label-align":"right"},{default:u((()=>[i(G,{label:"姓名"},{default:u((()=>[_(c(re.value.flowOverTimeInfo.proposer.username),1)])),_:1}),i(G,{label:"手机号码"},{default:u((()=>[_(c(re.value.flowOverTimeInfo.proposer.phoneNum),1)])),_:1}),i(G,{label:"部门"},{default:u((()=>[_(" Suzhou ")])),_:1}),i(G,{label:"职位"},{default:u((()=>[i(Q,{size:"small"},{default:u((()=>[_(" School ")])),_:1})])),_:1})])),_:1})),[[we,ie.value]]),i(se,{title:"申请表单",column:2,border:""},{default:u((()=>[i(G,{label:"申请时间"},{default:u((()=>[_(c(re.value.flowOverTimeInfo.createTime),1)])),_:1}),i(G,{label:"加班时长"},{default:u((()=>[_(c(re.value.flowOverTimeInfo.duration)+" 小时 ",1)])),_:1}),i(G,{label:"加班开始时间"},{default:u((()=>[_(c(re.value.flowOverTimeInfo.startTime),1)])),_:1}),i(G,{label:"加班结束时间"},{default:u((()=>[_(c(re.value.flowOverTimeInfo.endTime),1)])),_:1}),i(G,{label:"申请原因"},{default:u((()=>[_(c(re.value.flowOverTimeInfo.reason),1)])),_:1})])),_:1}),ee,i(_e,{ref_key:"formRef",ref:ae,model:te},{default:u((()=>[i(ve,{prop:"reason",rules:[{required:!0,message:"请输入审批意见",trigger:"blur"}]},{default:u((()=>[i(pe,{modelValue:te.reason,"onUpdate:modelValue":a[0]||(a[0]=e=>te.reason=e),rows:5,type:"textarea",placeholder:"请输入审批意见",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])),_:1}),i(ve,null,{default:u((()=>[i(ce,{type:"success",onClick:a[1]||(a[1]=e=>{var a;(a=ae.value)&&a.validate((e=>{e?(te.approvalResult=0,ne.value=!0,W(te).then((e=>{h.success(e.msg),fe(te.id)})).catch((e=>{h.error(e.msg)})).finally((()=>{ne.value=!1,a.resetFields()}))):h.error("请输入审批意见")}))})},{default:u((()=>[_(" 通过 ")])),_:1}),i(ce,{type:"danger",onClick:a[2]||(a[2]=e=>{var a;(a=ae.value)&&a.validate((e=>{e?(ne.value=!0,te.approvalResult=1,W(te).then((e=>{h.success(e.msg),fe(te.id)})).catch((e=>{h.error(e.msg)})).finally((()=>{ne.value=!1,a.resetFields()}))):h.error("请输入审批意见")}))})},{default:u((()=>[_(" 拒绝 ")])),_:1})])),_:1})])),_:1},8,["model"])])])),_:1})),[[we,ne.value]])])])),_:1})])),_:1})]))])),[[we,ie.value]]):j("",!0)])),_:1}),i(ye,{label:"已审批",name:"done"},{default:u((()=>["done"===M.value?(o(),n(N,{key:0})):j("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}}),[["__scopeId","data-v-5137ef41"]]);export{le as default};