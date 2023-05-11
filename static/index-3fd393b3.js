import{bv as e,C as t,a4 as a,d as o,r as l,ag as r,Q as s,o as n,a2 as i,an as d,B as u,a as m,c,w as p,F as f,W as v,ah as g,l as h,q as y,k as w}from"./index-1f640676.js";import{E as x}from"./el-dialog-460e6df1.js";import"./el-overlay-ed666455.js";import{a as b,E as C}from"./el-form-item-5da3e9d6.js";/* empty css                    *//* empty css                 */import{E as k}from"./el-button-dbdb681c.js";import{E as j}from"./index-a558cde3.js";import{g as _,u as E,a as U,d as R,b as V,c as P}from"./index-aefc3c2d.js";import{e as S}from"./index-d9995aae.js";import{b as T}from"./validate-8460febd.js";import{E as D}from"./index-3824ad87.js";import{E as M}from"./index-07f388b7.js";import{E as N,a as O}from"./index-68de09ec.js";import"./focus-trap-b62d6901.js";import"./event-15d81b97.js";import"./refs-6a29fe35.js";import"./use-form-item-4dcc0e40.js";import"./scroll-72399e5e.js";import"./_Uint8Array-685b1d00.js";import"./_initCloneObject-c46729b5.js";import"./aria-49c72c55.js";import"./validator-02458b2a.js";import"./index-f9759984.js";import"./isEqual-5a3ddd8f.js";import"./flatten-b71c5478.js";const $={default:({row:o})=>{const l=e(o.roles);if(0===l.length)return[t("span",{class:"el-tag el-tag--warning el-tag--plain"},[a("劳工")])];return l.map((e=>{const a="admin"===e.roleCode?"":"warning";return t("span",{class:`el-tag el-tag--${a} el-tag--plain`},[e.roleName])}))}},L={default:({row:e,column:a})=>{const o=e[a.field],l=[{id:0,type:"info",value:"不在线"},{id:1,type:"success",value:"在线"},{id:3,type:"primary",value:"已冻结"}],r=l[o].type,s=l[o].value;return[t("span",{class:`el-tag el-tag--${r} el-tag--plain`},[s])]}},q={default:({row:e,column:a})=>{const o=e[a.field];return[t(j,{src:o},null)]}},I={class:"app-container"},z=w("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),B=w("span",{class:"i-carbon-user-role mr-1"},null,-1),Q=w("span",{class:"i-material-symbols-delete-outline-rounded mr-1"},null,-1),H=w("span",{class:"i-material-symbols-lock-reset mr-1"},null,-1),F=o({name:"VxeTable"}),A=o({...F,setup(e){const o=l(),w=r(),j=l(!1),F=l(!1),A=s({roleList:[],userId:""}),W=()=>{P(A.userId,A.roleList).then((e=>{d.success(e.msg)})).catch((e=>{d.error(e.msg)})).finally((()=>{w.go(0),F.value=!1}))};n((()=>{(async e=>{j.value=!0;const t={roleName:e},{data:a}=await S(t);j.value=!1,o.value=[...a]})("")}));const G=l(),K=l(),X=l(),Z=s({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return null==(e=K.value)||e.clearValidate(),Promise.resolve()}}),J=s({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},printConfig:{columns:[{field:"username"},{field:"phoneNum"},{field:"roles"},{field:"avatar"}]},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"请输入用户名",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,export:!0,print:!0,zoom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"checkbox",width:"50px"},{field:"avatar",title:"头像",width:"80px",slots:q},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:$},{field:"phoneNum",title:"手机号"},{field:"createTime",title:"创建时间"},{field:"status",width:"80px",title:"状态",slots:L},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(J.loading=!0,ee.clearTable(),new Promise((a=>{let o=0,l=[];const r=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(o=t.total),Array.isArray(t.records)&&(l=t.records)}J.loading=!1,a({total:o,result:l})},s={username:t.username||"",phone:t.phone||void 0,size:e.pageSize,current:e.currentPage};_(s).then(r).catch(r)})))}}}),Y=s({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{id:"",username:"",phoneNum:"",password:"",avatar:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入用户名"}}},{field:"phoneNum",title:"手机号",itemRender:{name:"$input",props:{placeholder:"请输入手机号"}}},{field:"password",title:"密码",slots:{default:"password_item"}},{field:"avatar",title:"头像链接",itemRender:{name:"$input",props:{placeholder:"请输入头像链接"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return null==(e=X.value)?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>ee.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入用户名")}],phoneNum:[{required:!0,validator:({itemValue:e})=>T(e)?e.trim()?void 0:new Error("空格无效"):new Error("请输入正确的手机号码")}],password:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入密码")}]}}),ee=s({isUpdate:!0,commitQuery:()=>{var e;return null==(e=G.value)?void 0:e.commitProxy("query")},clearTable:()=>{var e;return null==(e=G.value)?void 0:e.reloadData([])},onShowModal:e=>{var t,a,o,l,r;e?(ee.isUpdate=!0,Z.title="修改用户",Y.data.id=e.id,Y.data.username=e.username,Y.data.phoneNum=e.phoneNum,Y.data.avatar=e.avatar,Y.data.password="傻子别看了，没有密码的"):(ee.isUpdate=!1,Z.title="新增用户"),Y.items&&((null==(a=null==(t=Y.items[0])?void 0:t.itemRender)?void 0:a.props)&&(Y.items[0].itemRender.props.disabled=ee.isUpdate),(null==(l=null==(o=Y.items[2])?void 0:o.itemRender)?void 0:l.props)&&(Y.items[2].itemRender.props.disabled=ee.isUpdate)),null==(r=X.value)||r.open(),i((()=>{var e,t;!ee.isUpdate&&(null==(e=K.value)||e.reset()),null==(t=K.value)||t.clearValidate()}))},onSubmitForm:()=>{var e;Y.loading||null==(e=K.value)||e.validate((e=>{if(e)return;Y.loading=!0;const t=e=>{var t;Y.loading=!1,200===e.code&&(null==(t=X.value)||t.close(),d.success("操作成功"),!ee.isUpdate&&ee.afterInsert(),ee.commitQuery())};ee.isUpdate?E(Y.data).then((e=>t(e))).catch((e=>t(e))):U(Y.data).then((e=>t(e))).catch((e=>t(e))),Y.data={}}))},afterInsert:()=>{var e,t;const a=null==(t=null==(e=G.value)?void 0:e.getProxyInfo())?void 0:t.pager;if(a){a.currentPage*a.pageSize===a.total&&++a.currentPage}},onDelete:e=>{const t=`确定 <strong style='color:red;'>删除</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> ？`;D.confirm(t,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{R(e.id).then((()=>{d.success("删除成功"),ee.afterDelete(),ee.commitQuery()})).catch((()=>1))})).catch((()=>1))},onResetPass:e=>{const t=`确定 <strong style='color:red;'>重置</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> 的密码？`;D.confirm(t,"提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{R(e.id).then((()=>{d.success("密码重置成功"),ee.afterDelete(),ee.commitQuery()})).catch((()=>1))})).catch((()=>1))},onSetRole:e=>{F.value=!0,A.userId=e.id,A.roleList=e.roles.map((e=>e.id))},onDeleteUsers:()=>{D.confirm("确定 <strong style='color:red;'>删除</strong> 这些用户吗？","提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{var e;const t=null==(e=G.value)?void 0:e.getCheckboxRecords().map((e=>e.id));V(t).then((e=>{d.success(e.msg)})).catch((e=>{d.error(e.msg)})).finally((()=>{ee.afterDelete(),ee.commitQuery()}))})).catch((()=>1))},afterDelete:()=>{var e,t;const a=G.value.getData(),o=null==(t=null==(e=G.value)?void 0:e.getProxyInfo())?void 0:t.pager;o&&o.currentPage>1&&1===a.length&&--o.currentPage},moreFunc:()=>{}});return(e,l)=>{const r=u("vxe-button"),s=k,n=u("vxe-grid"),i=M,d=u("vxe-form"),w=u("vxe-modal"),j=N,_=O,E=b,U=C,R=x;return m(),c("div",I,[t(n,f({ref_key:"xGridDom",ref:G},J),{"toolbar-btns":p((()=>[t(r,{status:"primary",icon:"vxe-icon-add",onClick:l[0]||(l[0]=e=>ee.onShowModal())},{default:p((()=>[a(" 新增用户 ")])),_:1}),t(r,{status:"danger",icon:"vxe-icon-delete",onClick:l[1]||(l[1]=e=>ee.onDeleteUsers())},{default:p((()=>[a(" 批量删除 ")])),_:1})])),"row-operate":p((({row:e})=>[t(s,{link:"",type:"primary",onClick:t=>ee.onShowModal(e)},{default:p((()=>[z,a(" 修改 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"info",onClick:t=>ee.onSetRole(e)},{default:p((()=>[B,a(" 分配角色 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"danger",onClick:t=>ee.onDelete(e)},{default:p((()=>[Q,a(" 注销 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"warning",onClick:t=>ee.onResetPass(e)},{default:p((()=>[H,a(" 重置密码 ")])),_:2},1032,["onClick"])])),_:1},16),t(w,f({ref_key:"xModalDom",ref:X},Z),{default:p((()=>[t(d,f({ref_key:"xFormDom",ref:K},Y),{password_item:p((()=>[t(i,{modelValue:Y.data.password,"onUpdate:modelValue":l[2]||(l[2]=e=>Y.data.password=e),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",tabindex:"2","show-password":"",disabled:ee.isUpdate},null,8,["modelValue","disabled"])])),_:1},16)])),_:1},16),t(R,{modelValue:F.value,"onUpdate:modelValue":l[5]||(l[5]=e=>F.value=e),title:"分配角色",width:"600px"},{default:p((()=>[t(U,{model:A},{default:p((()=>[t(E,null,{default:p((()=>[t(_,{modelValue:A.roleList,"onUpdate:modelValue":l[3]||(l[3]=e=>A.roleList=e)},{default:p((()=>[(m(!0),c(v,null,g(o.value,(e=>(m(),h(j,{key:e.id,label:e.id},{default:p((()=>[a(y(e.roleName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),t(E,null,{default:p((()=>[t(s,{type:"primary",onClick:W},{default:p((()=>[a(" 确定 ")])),_:1}),t(s,{onClick:l[4]||(l[4]=e=>F.value=!1)},{default:p((()=>[a(" 取消 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}});export{A as default};