import{d as e,ag as a,r as t,Q as l,a2 as r,o,B as i,a as s,c as d,C as n,w as u,a4 as m,F as p,W as c,ah as f,l as v,k as g,an as h}from"./index-1713f3be.js";/* empty css                 *//* empty css               */import{E as b,a as y}from"./el-select-9774fffc.js";import"./el-scrollbar-caee5b30.js";import"./el-popper-90370b12.js";import{E as x}from"./el-divider-9e3da786.js";import{E as w}from"./el-button-1777eae9.js";import{c as j,d as k,e as C}from"./index-bead964b.js";import{g as _}from"./index-6c1f274e.js";import"./index-3f18be1f.js";import"./event-15d81b97.js";import"./index-d50292f6.js";import"./use-form-item-865a16c5.js";import"./index-152f0932.js";import"./strings-5db16fbd.js";import"./scroll-e1940b97.js";import"./isEqual-5a787c40.js";import"./_Uint8Array-85531e68.js";import"./debounce-1af7bc8d.js";import"./index-ed51e79f.js";import"./validator-e67b7ad4.js";import"./focus-trap-6cc344c7.js";const I={class:"app-container"},N=g("span",{class:"i-mdi-clipboard-search-outline"},null,-1),U=g("span",{class:"i-ph-pencil-line-light"},null,-1),V=g("span",{class:"i-fluent-people-team-24-filled"},null,-1),q=e({name:"VxeTable"}),S=e({...q,setup(e){const g=a(),q=t(),S=t(),E=t(),z=t(),P=t(),T=t(!1),G=async e=>{var a;T.value=!0;const t=l({username:e||(null==(a=P.value)?void 0:a.username)||"",size:20,current:0}),{data:r}=await _(t);T.value=!1,z.value=r.records.map((e=>({id:e.id,label:e.username,value:e})))},M=l({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return null==(e=S.value)||e.clearValidate(),Promise.resolve()}}),R=l({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},formConfig:{items:[{field:"deptName",itemRender:{name:"$input",props:{placeholder:"请输入部门名称",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,export:!0,print:!0,zoom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"seq",title:"序号",width:"50px"},{field:"deptName",title:"部门名"},{field:"des",title:"部门职责"},{field:"createTime",title:"创建时间"},{field:"updateTime",title:"上次更新时间"},{title:"操作",width:"370px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:a})=>(R.loading=!0,D.clearTable(),new Promise((t=>{let l=0,r=[];const o=e=>{if(e&&e.data){const a=e.data;Number.isInteger(a.total)&&(l=a.total),Array.isArray(a.records)&&(r=a.records)}R.loading=!1,t({total:l,result:r})},i={deptName:a.deptName||"",size:e.pageSize,current:e.currentPage};j(i).then(o).catch(o)})))}}}),$=l({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{id:"",deptName:"",des:"",leader:null,leaderId:""},items:[{field:"deptName",title:"部门名称",itemRender:{name:"$input",props:{placeholder:"请输入部门名"}}},{field:"des",title:"部门职责",itemRender:{name:"$input",props:{placeholder:"请输入部门职责"}}},{field:"leaderId",title:"部门主管",slots:{default:"leader_item"}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return null==(e=E.value)?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>D.onSubmitForm()}}]}}],rules:{deptName:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入部门名称")}],des:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入部门职责")}]}}),D=l({isUpdate:!0,commitQuery:()=>{var e;return null==(e=q.value)?void 0:e.commitProxy("query")},clearTable:()=>{var e;return null==(e=q.value)?void 0:e.reloadData([])},onShowModal:e=>{var a;e?(D.isUpdate=!0,M.title="修改部门",$.data.id=e.id,$.data.deptName=e.deptName,$.data.des=e.des,$.data.leader=e.leader):(D.isUpdate=!1,M.title="新增部门"),null==(a=E.value)||a.open(),r((()=>{var e,a;!D.isUpdate&&(null==(e=S.value)||e.reset()),null==(a=S.value)||a.clearValidate()}))},onSubmitForm:e=>{var a;$.loading||null==(a=S.value)||a.validate((e=>{if(e)return;$.loading=!0;const a=e=>{var a;$.loading=!1,200===e.code&&(null==(a=E.value)||a.close(),h.success("操作成功"),$.data.leader=null,!D.isUpdate&&D.afterInsert(),D.commitQuery())};$.data.leaderId=$.data.leader.id,D.isUpdate?k($.data).then((e=>a(e))).catch((e=>a(e))):C($.data).then((e=>a(e))).catch((e=>a(e))),$.data={}}))},onGoInfo:e=>{g.push({path:"/sys/dept/info",query:{id:null==e?void 0:e.id}})},onGoTeam:e=>{g.push({path:"/sys/team",query:{id:null==e?void 0:e.id}})},afterInsert:()=>{var e,a;const t=null==(a=null==(e=q.value)?void 0:e.getProxyInfo())?void 0:a.pager;if(t){t.currentPage*t.pageSize===t.total&&++t.currentPage}}});return o((()=>{G("")})),(e,a)=>{const t=i("vxe-button"),l=w,r=x,o=i("vxe-grid"),g=b,h=y,j=i("vxe-form"),k=i("vxe-modal");return s(),d("div",I,[n(o,p({ref_key:"xGridDom",ref:q},R),{"toolbar-btns":u((()=>[n(t,{status:"primary",icon:"vxe-icon-add",onClick:a[0]||(a[0]=e=>D.onShowModal())},{default:u((()=>[m(" 新增部门 ")])),_:1})])),"row-operate":u((({row:e})=>[n(l,{link:"",type:"primary",onClick:a=>D.onGoInfo(e)},{default:u((()=>[N,m(" 查看详情 ")])),_:2},1032,["onClick"]),n(r,{direction:"vertical"}),n(l,{link:"",type:"warning",onClick:a=>D.onShowModal(e)},{default:u((()=>[U,m(" 信息修改 ")])),_:2},1032,["onClick"]),n(r,{direction:"vertical"}),n(l,{link:"",type:"danger",onClick:a=>D.onGoTeam(e)},{default:u((()=>[V,m(" 下属小组 ")])),_:2},1032,["onClick"])])),_:1},16),n(k,p({ref_key:"xModalDom",ref:E},M),{default:u((()=>[n(j,p({ref_key:"xFormDom",ref:S},$),{leader_item:u((({data:e})=>[n(h,{modelValue:e.leader,"onUpdate:modelValue":a=>e.leader=a,"value-key":"id","remote-show-suffix":"",filterable:"",remote:"",clearable:"","reserve-keyword":"",placeholder:"请输入主管的姓名","remote-method":G,loading:T.value},{default:u((()=>[(s(!0),d(c,null,f(z.value,(e=>(s(),v(g,{key:e.id,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","loading"])])),_:1},16)])),_:1},16)])}}});export{S as default};