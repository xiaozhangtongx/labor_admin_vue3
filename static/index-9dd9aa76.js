import{d as e,r as a,ac as l,Q as s,o as t,a as o,c as r,C as i,w as u,D as n,l as d,W as p,ah as f,n as m,k as v,q as c,a4 as _,H as j,an as I,ap as h,aq as y}from"./index-54d43a61.js";import{v as g}from"./el-loading-eb8e13a4.js";import{E as b,a as w,b as C,c as x}from"./el-main-de32e1ac.js";import{_ as k,E,a as T}from"./el-tab-pane-477f473a.js";import{a as z,E as V}from"./el-form-item-4bbbfcae.js";import{E as F}from"./el-button-4e282e2a.js";/* empty css                 */import{E as R,a as q}from"./el-descriptions-item-70583a0c.js";import{E as S}from"./el-tag-06926d13.js";import{E as U}from"./el-scrollbar-fd5d62a6.js";import{E as D}from"./el-divider-104f3cc9.js";import{E as H}from"./el-card-994f947f.js";import{_ as P}from"./index.vue_vue_type_script_setup_true_lang-b767b322.js";import{E as Q}from"./el-empty-0a11cab0.js";import{_ as W}from"./FinishList.vue_vue_type_script_setup_true_lang-f00156fb.js";import{g as A,s as B}from"./index-d35df3f7.js";import{u as G}from"./utils-6cebd9eb.js";/* empty css                 *//* empty css                   */import{E as J}from"./index-5840db25.js";import{_ as L}from"./_plugin-vue_export-helper-1b428a4d.js";import"./throttle-40498f70.js";import"./debounce-7e8deea5.js";import"./focus-trap-76f55607.js";import"./scroll-a36e7be0.js";import"./strings-db06011e.js";import"./el-overlay-8070be0f.js";import"./index-a30b1372.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-f625212c.js";import"./index-d4d16db7.js";import"./el-dialog-dfa357eb.js";import"./index-a201df34.js";const N=e=>(h("data-v-47246c07"),e=e(),y(),e),O={class:"app-container"},X={key:0},Z={key:1,class:"common-layout"},$={"infinite-scroll-immediate":!1,class:"infinite-list"},K={class:"flex justify-between w-60 text-gray-500"},M={class:"flow-leave"},Y=N((()=>v("h2",{class:"flex justify-center items-center"}," 审批表 ",-1))),ee=N((()=>v("h4",{class:"mt-2"}," 审批意见 ",-1))),ae=e({name:"ElementPlus"}),le=L(e({...ae,setup(e){var h,y;const L=a("todo"),N=l(),ae=a(),le=[{id:0,type:"",value:"病假"},{id:1,type:"success",value:"婚假"},{id:2,type:"info",value:"丧假"},{id:3,type:"warning",value:"产假"},{id:4,type:"danger",value:"其它"}],se=s({approverId:null==(h=N.userInfo)?void 0:h.id,status:1,applicationType:"1",current:0,size:5}),te=s({id:"",applicationId:"",approverId:(null==(y=N.userInfo)?void 0:y.id)||"",approvalResult:0,reason:"",applicationType:"1"}),oe=a([]),re=a(),ie=a(!0),ue=a(!1),ne=a(""),de=a(!1),pe=()=>{ie.value=!0,A(se).then((e=>{var a;const l=[...oe.value,...e.data.records];oe.value=[...G(l)],re.value=oe.value[0],ne.value=(null==(a=re.value)?void 0:a.id)||"",ie.value=!1,se.current+=se.size,e.data.total>=oe.value.length&&(ue.value=!0)}))},fe=()=>{pe()},me=e=>{oe.value=oe.value.filter((a=>a.id!==e))};return t((()=>{pe()})),(e,a)=>{const l=Q,s=P,t=H,h=D,y=U,A=b,G=k,N=R,se=S,pe=q,ve=J,ce=z,_e=F,je=V,Ie=w,he=C,ye=E,ge=T,be=x,we=g;return o(),r("div",O,[i(t,{shadow:"never"},{default:u((()=>[i(ge,{modelValue:L.value,"onUpdate:modelValue":a[3]||(a[3]=e=>L.value=e),class:"demo-tabs"},{default:u((()=>[i(ye,{label:"待审批",name:"todo"},{default:u((()=>["todo"===L.value?n((o(),r("div",X,[0===oe.value.length?(o(),d(l,{key:0,"image-size":200,class:"h-120",description:"你已经全部审批完了"})):(o(),r("div",Z,[i(he,null,{default:u((()=>[i(A,null,{default:u((()=>[i(y,{height:"480px"},{default:u((()=>[n((o(),r("div",$,[(o(!0),r(p,null,f(oe.value,(e=>(o(),d(t,{key:e.id,shadow:"hover",class:m([{activeCard:ne.value===e.id},"infinite-list-item cursor-pointer"]),onClick:a=>(e=>{re.value=e,ie.value=!1,ne.value=e.id,te.applicationId=e.applicationId,te.id=e.id})(e)},{default:u((()=>[v("h4",null,[i(s,{status:parseInt(e.flowCancelInfo.leaveInfo.leaveType),"status-list":le},null,8,["status"])]),v("h5",K,[v("span",null,c(e.flowCancelInfo.leaveInfo.proposer.username),1),v("span",null,c(e.flowCancelInfo.createTime),1)])])),_:2},1032,["class","onClick"])))),128)),ue.value?(o(),d(h,{key:0,"border-style":"dashed"},{default:u((()=>[_(" 加载完毕 ")])),_:1})):j("",!0)])),[[be,fe]])])),_:1})])),_:1}),i(Ie,null,{default:u((()=>[v("div",null,[i(G,{element:".flow-leave","open-tips":"审批表全屏",class:"absolute right-0"}),ie.value?(o(),d(l,{key:0,"image-size":200,description:"请点击左侧的待审批单查看数据"})):n((o(),d(y,{key:1,height:"450px"},{default:u((()=>[v("div",M,[Y,n((o(),d(pe,{title:"申请人信息",column:2,"label-align":"right"},{default:u((()=>[i(N,{label:"姓名"},{default:u((()=>[_(c(re.value.flowCancelInfo.leaveInfo.proposer.username),1)])),_:1}),i(N,{label:"手机号码"},{default:u((()=>[_(c(re.value.flowCancelInfo.leaveInfo.proposer.phoneNum),1)])),_:1}),i(N,{label:"部门"},{default:u((()=>[_(" Suzhou ")])),_:1}),i(N,{label:"职位"},{default:u((()=>[i(se,{size:"small"},{default:u((()=>[_(" School ")])),_:1})])),_:1})])),_:1})),[[we,ie.value]]),i(pe,{title:"请假表单",column:2,border:""},{default:u((()=>[i(N,{label:"申请时间"},{default:u((()=>[_(c(re.value.flowCancelInfo.leaveInfo.createTime),1)])),_:1}),i(N,{label:"请假时长"},{default:u((()=>[_(c(re.value.flowCancelInfo.leaveInfo.duration)+" 天 ",1)])),_:1}),i(N,{label:"请假开始时间"},{default:u((()=>[_(c(re.value.flowCancelInfo.leaveInfo.startTime),1)])),_:1}),i(N,{label:"请假结束时间"},{default:u((()=>[_(c(re.value.flowCancelInfo.leaveInfo.endTime),1)])),_:1}),i(N,{label:"请假原因"},{default:u((()=>[_(c(re.value.flowCancelInfo.leaveInfo.reason),1)])),_:1})])),_:1}),i(pe,{title:"销假表单",column:2,border:"",class:"mt-2"},{default:u((()=>[i(N,{label:"申请时间"},{default:u((()=>[_(c(re.value.flowCancelInfo.createTime),1)])),_:1}),i(N,{label:"更新时间"},{default:u((()=>[_(c(re.value.flowCancelInfo.updateTime||re.value.flowCancelInfo.createTime),1)])),_:1}),i(N,{label:"申请原因"},{default:u((()=>[_(c(re.value.flowCancelInfo.leaveInfo.reason),1)])),_:1})])),_:1}),ee,i(je,{ref_key:"formRef",ref:ae,model:te},{default:u((()=>[i(ce,{prop:"reason",rules:[{required:!0,message:"请输入审批意见",trigger:"blur"}]},{default:u((()=>[i(ve,{modelValue:te.reason,"onUpdate:modelValue":a[0]||(a[0]=e=>te.reason=e),rows:5,type:"textarea",placeholder:"请输入审批意见",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])),_:1}),i(ce,null,{default:u((()=>[i(_e,{type:"success",onClick:a[1]||(a[1]=e=>{var a;(a=ae.value)&&a.validate((e=>{e?(te.approvalResult=0,de.value=!0,B(te).then((e=>{I.success(e.msg),me(te.id)})).catch((e=>{I.error(e.msg)})).finally((()=>{de.value=!1,a.resetFields()}))):I.error("请输入审批意见")}))})},{default:u((()=>[_(" 通过 ")])),_:1}),i(_e,{type:"danger",onClick:a[2]||(a[2]=e=>{var a;(a=ae.value)&&a.validate((e=>{e?(de.value=!0,te.approvalResult=1,B(te).then((e=>{I.success(e.msg),me(te.id)})).catch((e=>{I.error(e.msg)})).finally((()=>{de.value=!1,a.resetFields()}))):I.error("请输入审批意见")}))})},{default:u((()=>[_(" 拒绝 ")])),_:1})])),_:1})])),_:1},8,["model"])])])),_:1})),[[we,de.value]])])])),_:1})])),_:1})]))])),[[we,ie.value]]):j("",!0)])),_:1}),i(ye,{label:"已审批",name:"done"},{default:u((()=>["done"===L.value?(o(),d(W,{key:0})):j("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}}),[["__scopeId","data-v-47246c07"]]);export{le as default};