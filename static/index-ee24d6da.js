import{bv as e,C as t,a4 as a,d as l,r as o,ag as r,Q as s,o as n,a2 as i,an as d,B as u,a as m,c,w as p,F as f,W as v,ah as g,l as h,q as y,k as w}from"./index-9a706b5e.js";import{E as x}from"./el-dialog-94ce5d08.js";import"./el-overlay-d6f3b381.js";import{a as b,E as k}from"./el-form-item-ea286b40.js";/* empty css                    *//* empty css                 */import{E as C}from"./el-button-cb2bce56.js";import{E as j}from"./index-b7204145.js";import{g as _,u as E,a as U,d as R,b as P,c as V}from"./index-13048bd1.js";import{e as M}from"./index-0fcf3fe2.js";import{b as S}from"./validate-8460febd.js";import{E as T}from"./index-c3db2d78.js";import{E as D}from"./index-e3536c2f.js";import{E as N,a as O}from"./index-e76db81e.js";import"./focus-trap-4f47c9e6.js";import"./event-15d81b97.js";import"./refs-b9a36019.js";import"./use-form-item-14a057db.js";import"./scroll-8c03f05f.js";import"./_Uint8Array-c1224f14.js";import"./_initCloneObject-ee341c84.js";import"./aria-49c72c55.js";import"./validator-1ce7f714.js";import"./index-c887b90a.js";import"./isEqual-8163224d.js";import"./flatten-0d005a2e.js";const $={default:({row:l})=>{const o=e(l.roles);if(0===o.length)return[t("span",{class:"el-tag el-tag--warning el-tag--plain"},[a("劳工")])];return o.map((e=>{const a="admin"===e.roleCode?"":"warning";return t("span",{class:`el-tag el-tag--${a} el-tag--plain`},[e.roleName])}))}},q={default:({row:e,column:a})=>{const l=e[a.field],o=[{id:0,type:"info",value:"不在线"},{id:1,type:"success",value:"在线"},{id:3,type:"primary",value:"已冻结"}],r=o[l].type,s=o[l].value;return[t("span",{class:`el-tag el-tag--${r} el-tag--plain`},[s])]}},I={default:({row:e,column:a})=>{const l=e[a.field];return[t(j,{src:l},null)]}},L={class:"app-container"},B=w("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),z=w("span",{class:"i-carbon-user-role mr-1"},null,-1),Q=w("span",{class:"i-material-symbols-delete-outline-rounded mr-1"},null,-1),A=w("span",{class:"i-material-symbols-lock-reset mr-1"},null,-1),F=l({name:"VxeTable"}),H=l({...F,setup(e){const l=o(),w=r(),j=o(!1),F=o(!1),H=s({roleList:[],userId:""}),G=()=>{V(H.userId,H.roleList).then((e=>{d.success(e.msg)})).catch((e=>{d.error(e.msg)})).finally((()=>{w.go(0),F.value=!1}))};n((()=>{(async e=>{j.value=!0;const t={roleName:e},{data:a}=await M(t);j.value=!1,l.value=[...a]})("")}));const W=o(),Y=o(),J=o(),K=s({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return null==(e=Y.value)||e.clearValidate(),Promise.resolve()}}),X=s({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},printConfig:{columns:[{field:"username"},{field:"phoneNum"},{field:"roles"},{field:"avatar"}]},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"请输入用户名",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,export:!0,print:!0,zoom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"checkbox",width:"50px"},{field:"avatar",title:"头像",width:"80px",slots:I},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:$},{field:"phoneNum",title:"手机号"},{field:"createTime",title:"创建时间"},{field:"status",width:"80px",title:"状态",slots:q},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(X.loading=!0,ee.clearTable(),new Promise((a=>{let l=0,o=[];const r=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(l=t.total),Array.isArray(t.records)&&(o=t.records)}X.loading=!1,a({total:l,result:o})},s={username:t.username||"",phone:t.phone||void 0,size:e.pageSize,current:e.currentPage};_(s).then(r).catch(r)})))}}}),Z=s({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{id:"",username:"",phoneNum:"",password:"",avatar:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入用户名"}}},{field:"phoneNum",title:"手机号",itemRender:{name:"$input",props:{placeholder:"请输入手机号"}}},{field:"password",title:"密码",slots:{default:"password_item"}},{field:"avatar",title:"头像链接",itemRender:{name:"$input",props:{placeholder:"请输入头像链接"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return null==(e=J.value)?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>ee.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入用户名")}],phoneNum:[{required:!0,validator:({itemValue:e})=>S(e)?e.trim()?void 0:new Error("空格无效"):new Error("请输入正确的手机号码")}],password:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入密码")}]}}),ee=s({isUpdate:!0,commitQuery:()=>{var e;return null==(e=W.value)?void 0:e.commitProxy("query")},clearTable:()=>{var e;return null==(e=W.value)?void 0:e.reloadData([])},onShowModal:e=>{var t,a,l,o,r;e?(ee.isUpdate=!0,K.title="修改用户",Z.data.id=e.id,Z.data.username=e.username,Z.data.phoneNum=e.phoneNum,Z.data.avatar=e.avatar,Z.data.password="傻子别看了，没有密码的"):(ee.isUpdate=!1,K.title="新增用户"),Z.items&&((null==(a=null==(t=Z.items[0])?void 0:t.itemRender)?void 0:a.props)&&(Z.items[0].itemRender.props.disabled=ee.isUpdate),(null==(o=null==(l=Z.items[2])?void 0:l.itemRender)?void 0:o.props)&&(Z.items[2].itemRender.props.disabled=ee.isUpdate)),null==(r=J.value)||r.open(),i((()=>{var e,t;!ee.isUpdate&&(null==(e=Y.value)||e.reset()),null==(t=Y.value)||t.clearValidate()}))},onSubmitForm:()=>{var e;Z.loading||null==(e=Y.value)||e.validate((e=>{if(e)return;Z.loading=!0;const t=e=>{var t;Z.loading=!1,200===e.code&&(null==(t=J.value)||t.close(),d.success("操作成功"),!ee.isUpdate&&ee.afterInsert(),ee.commitQuery())};ee.isUpdate?E(Z.data).then((e=>t(e))).catch((e=>t(e))):U(Z.data).then((e=>t(e))).catch((e=>t(e))),Z.data={}}))},afterInsert:()=>{var e,t;const a=null==(t=null==(e=W.value)?void 0:e.getProxyInfo())?void 0:t.pager;if(a){a.currentPage*a.pageSize===a.total&&++a.currentPage}},onDelete:e=>{const t=`确定 <strong style='color:red;'>删除</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> ？`;T.confirm(t,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{R(e.id).then((()=>{d.success("删除成功"),ee.afterDelete(),ee.commitQuery()})).catch((()=>1))})).catch((()=>1))},onResetPass:e=>{const t=`确定 <strong style='color:red;'>重置</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> 的密码？`;T.confirm(t,"提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{R(e.id).then((()=>{d.success("密码重置成功"),ee.afterDelete(),ee.commitQuery()})).catch((()=>1))})).catch((()=>1))},onSetRole:e=>{F.value=!0,H.userId=e.id,H.roleList=e.roles.map((e=>e.id))},onDeleteUsers:()=>{T.confirm("确定 <strong style='color:red;'>删除</strong> 这些用户吗？","提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{var e;const t=null==(e=W.value)?void 0:e.getCheckboxRecords().map((e=>e.id));P(t).then((e=>{d.success(e.msg)})).catch((e=>{d.error(e.msg)})).finally((()=>{ee.afterDelete(),ee.commitQuery()}))})).catch((()=>1))},afterDelete:()=>{var e,t;const a=W.value.getData(),l=null==(t=null==(e=W.value)?void 0:e.getProxyInfo())?void 0:t.pager;l&&l.currentPage>1&&1===a.length&&--l.currentPage},moreFunc:()=>{}});return(e,o)=>{const r=u("vxe-button"),s=C,n=u("vxe-grid"),i=D,d=u("vxe-form"),w=u("vxe-modal"),j=N,_=O,E=b,U=k,R=x;return m(),c("div",L,[t(n,f({ref_key:"xGridDom",ref:W},X),{"toolbar-btns":p((()=>[t(r,{status:"primary",icon:"vxe-icon-add",onClick:o[0]||(o[0]=e=>ee.onShowModal())},{default:p((()=>[a(" 新增用户 ")])),_:1}),t(r,{status:"danger",icon:"vxe-icon-delete",onClick:o[1]||(o[1]=e=>ee.onDeleteUsers())},{default:p((()=>[a(" 批量删除 ")])),_:1})])),"row-operate":p((({row:e})=>[t(s,{link:"",type:"primary",onClick:t=>ee.onShowModal(e)},{default:p((()=>[B,a(" 修改 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"info",onClick:t=>ee.onSetRole(e)},{default:p((()=>[z,a(" 分配角色 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"danger",onClick:t=>ee.onDelete(e)},{default:p((()=>[Q,a(" 注销 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"warning",onClick:t=>ee.onResetPass(e)},{default:p((()=>[A,a(" 重置密码 ")])),_:2},1032,["onClick"])])),_:1},16),t(w,f({ref_key:"xModalDom",ref:J},K),{default:p((()=>[t(d,f({ref_key:"xFormDom",ref:Y},Z),{password_item:p((()=>[t(i,{modelValue:Z.data.password,"onUpdate:modelValue":o[2]||(o[2]=e=>Z.data.password=e),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",tabindex:"2","show-password":"",disabled:ee.isUpdate},null,8,["modelValue","disabled"])])),_:1},16)])),_:1},16),t(R,{modelValue:F.value,"onUpdate:modelValue":o[5]||(o[5]=e=>F.value=e),title:"分配角色",width:"600px"},{default:p((()=>[t(U,{model:H},{default:p((()=>[t(E,null,{default:p((()=>[t(_,{modelValue:H.roleList,"onUpdate:modelValue":o[3]||(o[3]=e=>H.roleList=e)},{default:p((()=>[(m(!0),c(v,null,g(l.value,(e=>(m(),h(j,{key:e.id,label:e.id},{default:p((()=>[a(y(e.roleName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),t(E,null,{default:p((()=>[t(s,{type:"primary",onClick:G},{default:p((()=>[a(" 确定 ")])),_:1}),t(s,{onClick:o[4]||(o[4]=e=>F.value=!1)},{default:p((()=>[a(" 取消 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}});export{H as default};
