import{d as e,r as a,ac as l,y as s,Q as o,o as t,a as r,c as i,C as u,w as n,D as d,l as m,f as p,W as f,ah as v,n as c,k as _,a4 as j,q as h,H as g,an as y,ap as k,aq as b}from"./index-2b9e942f.js";import{v as w}from"./el-loading-3c10908a.js";import{E as x}from"./el-infinite-scroll-a44b317d.js";import{E as I,a as T}from"./el-tab-pane-4bb55d66.js";import{a as E,b as W,E as C}from"./el-main-0442344d.js";import{a as V,E as z}from"./el-form-item-9ef50f22.js";import{E as R}from"./el-button-4ba8563a.js";/* empty css                 */import{E as q,a as U}from"./el-descriptions-item-b1e67eab.js";import{_ as D}from"./index-8c8ed89c.js";import{E as F}from"./el-scrollbar-a8bdb3de.js";import{E as H}from"./el-divider-d5133940.js";import{E as L}from"./el-card-ffa2c3c9.js";/* empty css               */import{E as N}from"./el-empty-17f0997c.js";import{_ as O}from"./FinishList.vue_vue_type_script_setup_true_lang-e2deaed2.js";import{g as P,s as Q}from"./index-a312e660.js";import{u as S}from"./utils-2993afc8.js";import{E as $}from"./index-910faca8.js";import{E as A}from"./index-32efc5c0.js";import{_ as G}from"./_plugin-vue_export-helper-1b428a4d.js";import"./throttle-cf917d8a.js";import"./debounce-8e1f8eac.js";import"./event-15d81b97.js";import"./scroll-92931c15.js";import"./strings-77b070ee.js";import"./index-5c90ac9b.js";import"./index-d57c4075.js";import"./use-form-item-55331cc2.js";import"./_Uint8Array-fb59223e.js";import"./_initCloneObject-211d1c84.js";import"./el-tooltip-4ed993c7.js";import"./el-popper-b2d759cd.js";import"./focus-trap-e29a6647.js";import"./index-c62277e2.js";import"./el-dialog-73760f8c.js";import"./el-overlay-45055e12.js";import"./refs-872a5d31.js";import"./index-9dedcc78.js";import"./index.vue_vue_type_script_setup_true_lang-fb9ecaf4.js";import"./index-d63fe3b9.js";const J=e=>(k("data-v-7e386afc"),e=e(),b(),e),K={class:"app-container"},X={key:0},Y={key:1,class:"common-layout"},Z=["infinite-scroll-disabled"],B={class:"flex justify-between w-60 text-gray-500"},M={class:"flow-leave"},ee=J((()=>_("h2",{class:"flex justify-center items-center"}," 审批表 ",-1))),ae=J((()=>_("h4",{class:"mt-2"}," 审批意见 ",-1))),le=e({name:"ElementPlus"}),se=G(e({...le,setup(e){var k,b;const G=a("todo"),J=l(),le=a(),se=s((()=>ue.value||ne.value)),oe=o({approverId:null==(k=J.userInfo)?void 0:k.id,status:1,applicationType:"3",current:0,size:5}),te=o({id:"",applicationId:"",approverId:(null==(b=J.userInfo)?void 0:b.id)||"",approvalResult:0,reason:"",applicationType:"3"}),re=a([]),ie=a(),ue=a(!0),ne=a(!1),de=a(""),me=a(!1),pe=()=>{ue.value=!0,P(oe).then((e=>{var a;const l=[...re.value,...e.data.records];re.value=[...S(l)],ie.value=re.value[0],de.value=(null==(a=ie.value)?void 0:a.id)||"",ue.value=!1,oe.current++,e.data.total<=re.value.length&&(ne.value=!0)}))},fe=()=>{pe()},ve=e=>{re.value=re.value.filter((a=>a.id!==e))};return t((()=>{pe()})),(e,a)=>{const l=N,s=$,o=L,t=H,k=F,b=E,P=D,S=q,J=U,oe=A,pe=V,ce=R,_e=z,je=W,he=C,ge=I,ye=T,ke=x,be=w;return r(),i("div",K,[u(o,{shadow:"never"},{default:n((()=>[u(ye,{modelValue:G.value,"onUpdate:modelValue":a[3]||(a[3]=e=>G.value=e),class:"demo-tabs"},{default:n((()=>[u(ge,{label:"待审批",name:"todo"},{default:n((()=>["todo"===G.value?d((r(),i("div",X,[0===re.value.length?(r(),m(l,{key:0,"image-size":200,class:"h-120",description:"你已经全部审批完了"})):(r(),i("div",Y,[u(he,null,{default:n((()=>[u(b,null,{default:n((()=>[u(k,{height:"480px"},{default:n((()=>[d((r(),i("div",{"infinite-scroll-disabled":p(se),class:"infinite-list"},[(r(!0),i(f,null,v(re.value,(e=>(r(),m(o,{key:e.id,shadow:"hover",class:c([{activeCard:de.value===e.id},"infinite-list-item cursor-pointer"]),onClick:a=>(e=>{ie.value=e,ue.value=!1,de.value=e.id,te.applicationId=e.applicationId,te.id=e.id})(e)},{default:n((()=>[_("h4",null,[u(s,{type:"danger"},{default:n((()=>[j(h(e.flowWorkTimeInfo.reason>8?`${e.flowWorkTimeInfo.reason.substring(0,8)}...`:e.flowWorkTimeInfo.reason),1)])),_:2},1024)]),_("h5",B,[_("span",null,h(e.flowWorkTimeInfo.proposer.username),1),_("span",null,h(e.flowWorkTimeInfo.createTime),1)])])),_:2},1032,["class","onClick"])))),128)),ue.value?(r(),m(t,{key:0,"border-style":"dashed"},{default:n((()=>[j(" Loading... ")])),_:1})):g("",!0),ne.value?(r(),m(t,{key:1,"border-style":"dashed"},{default:n((()=>[j(" 加载完毕 ")])),_:1})):g("",!0)],8,Z)),[[ke,fe]])])),_:1})])),_:1}),u(je,null,{default:n((()=>[_("div",null,[u(P,{element:".flow-leave","open-tips":"审批表全屏",class:"absolute right-0"}),ue.value?(r(),m(l,{key:0,"image-size":200,description:"请点击左侧的待审批单查看数据"})):d((r(),m(k,{key:1,height:"450px"},{default:n((()=>[_("div",M,[ee,d((r(),m(J,{title:"申请人信息",column:2,"label-align":"right"},{default:n((()=>[u(S,{label:"姓名"},{default:n((()=>[j(h(ie.value.flowWorkTimeInfo.proposer.username),1)])),_:1}),u(S,{label:"手机号码"},{default:n((()=>[j(h(ie.value.flowWorkTimeInfo.proposer.phoneNum),1)])),_:1}),u(S,{label:"部门"},{default:n((()=>[j(" Suzhou ")])),_:1}),u(S,{label:"职位"},{default:n((()=>[u(s,{size:"small"},{default:n((()=>[j(" School ")])),_:1})])),_:1})])),_:1})),[[be,ue.value]]),u(J,{title:"申请表单",column:2,border:""},{default:n((()=>[u(S,{label:"补充日期"},{default:n((()=>[j(h(ie.value.flowWorkTimeInfo.workDate),1)])),_:1}),u(S,{label:"申请时长"},{default:n((()=>[j(h(ie.value.flowWorkTimeInfo.workDuration)+" 小时 ",1)])),_:1}),u(S,{label:"申请原因"},{default:n((()=>[j(h(ie.value.flowWorkTimeInfo.reason),1)])),_:1})])),_:1}),ae,u(_e,{ref_key:"formRef",ref:le,model:te},{default:n((()=>[u(pe,{prop:"reason",rules:[{required:!0,message:"请输入审批意见",trigger:"blur"}]},{default:n((()=>[u(oe,{modelValue:te.reason,"onUpdate:modelValue":a[0]||(a[0]=e=>te.reason=e),rows:5,type:"textarea",placeholder:"请输入审批意见",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])),_:1}),u(pe,null,{default:n((()=>[u(ce,{type:"success",onClick:a[1]||(a[1]=e=>{var a;(a=le.value)&&a.validate((e=>{e?(te.approvalResult=0,me.value=!0,Q(te).then((e=>{y.success(e.msg),ve(te.id)})).catch((e=>{y.error(e.msg)})).finally((()=>{me.value=!1,a.resetFields()}))):y.error("请输入审批意见")}))})},{default:n((()=>[j(" 通过 ")])),_:1}),u(ce,{type:"danger",onClick:a[2]||(a[2]=e=>{var a;(a=le.value)&&a.validate((e=>{e?(me.value=!0,te.approvalResult=1,Q(te).then((e=>{y.success(e.msg),ve(te.id)})).catch((e=>{y.error(e.msg)})).finally((()=>{me.value=!1,a.resetFields()}))):y.error("请输入审批意见")}))})},{default:n((()=>[j(" 拒绝 ")])),_:1})])),_:1})])),_:1},8,["model"])])])),_:1})),[[be,me.value]])])])),_:1})])),_:1})]))])),[[be,ue.value]]):g("",!0)])),_:1}),u(ge,{label:"已审批",name:"done"},{default:n((()=>["done"===G.value?(r(),m(O,{key:0})):g("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}}),[["__scopeId","data-v-7e386afc"]]);export{se as default};
