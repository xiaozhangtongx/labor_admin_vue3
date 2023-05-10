import{d as e,r as a,ac as l,Q as s,y as t,o,a as r,c as i,C as u,w as d,D as n,l as p,f as m,W as f,ah as v,n as c,k as _,q as j,a4 as y,H as h,an as g,ap as b,aq as w}from"./index-9a706b5e.js";import{v as I}from"./el-loading-9a7b0add.js";import{E as x}from"./el-infinite-scroll-d3dc43a2.js";import{_ as k,E,a as L}from"./el-tab-pane-e518be7b.js";import{a as C,b as T,E as V}from"./el-main-01042501.js";import{a as z,E as F}from"./el-form-item-ea286b40.js";import{E as R}from"./el-button-cb2bce56.js";/* empty css                 */import{E as q,a as U}from"./el-descriptions-item-2ae00c61.js";/* empty css               */import{E as A}from"./el-scrollbar-c33e6783.js";import{E as D}from"./el-divider-333d043c.js";import{E as H}from"./el-card-1dc32f2e.js";import{E as N}from"./el-empty-b0b44d58.js";import{_ as O}from"./FinishList.vue_vue_type_script_setup_true_lang-a47da41e.js";import{g as P,s as Q}from"./index-5f4cd0c2.js";import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-ee812c46.js";import{u as W}from"./utils-bb4bb7e7.js";import{E as G}from"./index-69566457.js";import{E as J}from"./index-e3536c2f.js";import{_ as K}from"./_plugin-vue_export-helper-1b428a4d.js";import"./throttle-3e85fe79.js";import"./debounce-de061bf0.js";import"./event-15d81b97.js";import"./scroll-8c03f05f.js";import"./strings-0eeb67c0.js";import"./index-e896acad.js";import"./el-overlay-d6f3b381.js";import"./use-form-item-14a057db.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-9f38ba83.js";import"./focus-trap-4f47c9e6.js";import"./index-e0de4d31.js";import"./_Uint8Array-c1224f14.js";import"./_initCloneObject-ee341c84.js";import"./el-dialog-94ce5d08.js";import"./refs-b9a36019.js";import"./index-c887b90a.js";const X=e=>(b("data-v-e961caad"),e=e(),w(),e),Y={class:"app-container"},$={key:0},B={key:1,class:"common-layout"},M=["infinite-scroll-disabled"],Z={class:"flex justify-between w-60 text-gray-500"},ee={class:"flow-leave"},ae=X((()=>_("h2",{class:"flex justify-center items-center"}," 审批表 ",-1))),le=X((()=>_("h4",{class:"mt-2"}," 审批意见 ",-1))),se=e({name:"ElementPlus"}),te=K(e({...se,setup(e){var b,w;const K=a("todo"),X=l(),se=a(),te=[{id:0,type:"",value:"病假"},{id:1,type:"success",value:"婚假"},{id:2,type:"info",value:"丧假"},{id:3,type:"warning",value:"产假"},{id:4,type:"danger",value:"其它"}],oe=s({approverId:null==(b=X.userInfo)?void 0:b.id,status:1,applicationType:"0",current:0,size:5}),re=s({id:"",applicationId:"",approverId:(null==(w=X.userInfo)?void 0:w.id)||"",approvalResult:0,reason:"",applicationType:"0"}),ie=a([]),ue=a(),de=a(!0),ne=a(!1),pe=a(""),me=a(!1),fe=t((()=>de.value||ne.value)),ve=()=>{de.value=!0,P(oe).then((e=>{var a;const l=[...ie.value,...e.data.records];ie.value=[...W(l)],ue.value=ie.value[0],pe.value=(null==(a=ue.value)?void 0:a.id)||"",de.value=!1,oe.current++,e.data.total<=ie.value.length&&(ne.value=!0)}))},ce=()=>{ve()},_e=e=>{ie.value=ie.value.filter((a=>a.id!==e))};return o((()=>{ve()})),(e,a)=>{const l=N,s=H,t=D,o=A,b=C,w=k,P=q,W=G,X=U,oe=J,ve=z,je=R,ye=F,he=T,ge=V,be=E,we=L,Ie=x,xe=I;return r(),i("div",Y,[u(s,{shadow:"never"},{default:d((()=>[u(we,{modelValue:K.value,"onUpdate:modelValue":a[3]||(a[3]=e=>K.value=e),class:"demo-tabs"},{default:d((()=>[u(be,{label:"待审批",name:"todo"},{default:d((()=>["todo"===K.value?n((r(),i("div",$,[0===ie.value.length?(r(),p(l,{key:0,"image-size":200,class:"h-120",description:"你已经全部审批完了"})):(r(),i("div",B,[u(ge,null,{default:d((()=>[u(b,null,{default:d((()=>[u(o,{height:"480px"},{default:d((()=>[n((r(),i("div",{"infinite-scroll-disabled":m(fe),class:"infinite-list"},[(r(!0),i(f,null,v(ie.value,(e=>(r(),p(s,{key:e.id,shadow:"hover",class:c([{activeCard:pe.value===e.id},"infinite-list-item cursor-pointer"]),onClick:a=>(e=>{ue.value=e,de.value=!1,pe.value=e.id,re.applicationId=e.applicationId,re.id=e.id})(e)},{default:d((()=>[_("h4",null,[u(S,{status:parseInt(e.applicationType),"status-list":te},null,8,["status"])]),_("h5",Z,[_("span",null,j(e.flowLeaveInfo.proposer.username),1),_("span",null,j(e.flowLeaveInfo.createTime),1)])])),_:2},1032,["class","onClick"])))),128)),de.value?(r(),p(t,{key:0,"border-style":"dashed"},{default:d((()=>[y(" Loading... ")])),_:1})):h("",!0),ne.value?(r(),p(t,{key:1,"border-style":"dashed"},{default:d((()=>[y(" 加载完毕 ")])),_:1})):h("",!0)],8,M)),[[Ie,ce]])])),_:1})])),_:1}),u(he,null,{default:d((()=>[_("div",null,[u(w,{element:".flow-leave","open-tips":"审批表全屏",class:"absolute right-0"}),de.value?(r(),p(l,{key:0,"image-size":200,description:"请点击左侧的待审批单查看数据"})):n((r(),p(o,{key:1,height:"450px"},{default:d((()=>[_("div",ee,[ae,n((r(),p(X,{title:"申请人信息",column:2,"label-align":"right"},{default:d((()=>[u(P,{label:"姓名"},{default:d((()=>[y(j(ue.value.flowLeaveInfo.proposer.username),1)])),_:1}),u(P,{label:"手机号码"},{default:d((()=>[y(j(ue.value.flowLeaveInfo.proposer.phoneNum),1)])),_:1}),u(P,{label:"部门"},{default:d((()=>[y(" Suzhou ")])),_:1}),u(P,{label:"职位"},{default:d((()=>[u(W,{size:"small"},{default:d((()=>[y(" School ")])),_:1})])),_:1})])),_:1})),[[xe,de.value]]),u(X,{title:"申请表单",column:2,border:""},{default:d((()=>[u(P,{label:"申请时间"},{default:d((()=>[y(j(ue.value.flowLeaveInfo.createTime),1)])),_:1}),u(P,{label:"请假时长"},{default:d((()=>[y(j(ue.value.flowLeaveInfo.duration)+" 天 ",1)])),_:1}),u(P,{label:"请假开始时间"},{default:d((()=>[y(j(ue.value.flowLeaveInfo.startTime),1)])),_:1}),u(P,{label:"请假结束时间"},{default:d((()=>[y(j(ue.value.flowLeaveInfo.endTime),1)])),_:1}),u(P,{label:"申请原因"},{default:d((()=>[y(j(ue.value.flowLeaveInfo.reason),1)])),_:1})])),_:1}),le,u(ye,{ref_key:"formRef",ref:se,model:re},{default:d((()=>[u(ve,{prop:"reason",rules:[{required:!0,message:"请输入审批意见",trigger:"blur"}]},{default:d((()=>[u(oe,{modelValue:re.reason,"onUpdate:modelValue":a[0]||(a[0]=e=>re.reason=e),rows:5,type:"textarea",placeholder:"请输入审批意见",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])),_:1}),u(ve,null,{default:d((()=>[u(je,{type:"success",onClick:a[1]||(a[1]=e=>{var a;(a=se.value)&&a.validate((e=>{e?(re.approvalResult=0,me.value=!0,Q(re).then((e=>{g.success(e.msg),_e(re.id)})).catch((e=>{g.error(e.msg)})).finally((()=>{me.value=!1,a.resetFields()}))):g.error("请输入审批意见")}))})},{default:d((()=>[y(" 通过 ")])),_:1}),u(je,{type:"danger",onClick:a[2]||(a[2]=e=>{var a;(a=se.value)&&a.validate((e=>{e?(me.value=!0,re.approvalResult=1,Q(re).then((e=>{g.success(e.msg),_e(re.id)})).catch((e=>{g.error(e.msg)})).finally((()=>{me.value=!1,a.resetFields()}))):g.error("请输入审批意见")}))})},{default:d((()=>[y(" 拒绝 ")])),_:1})])),_:1})])),_:1},8,["model"])])])),_:1})),[[xe,me.value]])])])),_:1})])),_:1})]))])),[[xe,de.value]]):h("",!0)])),_:1}),u(be,{label:"已审批",name:"done"},{default:d((()=>["done"===K.value?(r(),p(O,{key:0})):h("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}}),[["__scopeId","data-v-e961caad"]]);export{te as default};
