import{bn as e,C as t,a4 as a,b5 as l,d as o,r,af as s,Q as n,o as i,a2 as d,am as u,B as c,a as m,c as p,w as f,F as v,W as g,ag as h,l as y,q as w,k as b}from"./index-93ba5881.js";import{E as x}from"./el-dialog-ed8dcbdc.js";import"./el-overlay-18efe7aa.js";import{a as C,b as k,E as _}from"./el-form-item-fb62bce8.js";/* empty css                    *//* empty css                 */import{E as j}from"./el-button-48d46b72.js";import{E as U,a as R}from"./validate-89c3ba57.js";import{e as E}from"./index-ddf1e5c7.js";import{d as P,E as V,e as D}from"./index-11acde4f.js";import"./focus-trap-c8e74f19.js";import"./index-81ef74b7.js";import"./scroll-6db31819.js";import"./index-7a4560bb.js";import"./validator-5afbb209.js";const M={default:({row:l})=>{const o=e(l.roles);if(0===o.length)return[t("span",{class:"el-tag el-tag--warning el-tag--plain"},[a("劳工")])];return o.map((e=>{const a="admin"===e.roleCode?"":"warning";return t("span",{class:`el-tag el-tag--${a} el-tag--plain`},[e.roleName])}))}},S={default:({row:e,column:a})=>{const l=e[a.field],o=[{id:0,type:"info",value:"不在线"},{id:1,type:"success",value:"在线"},{id:3,type:"primary",value:"已冻结"}],r=o[l].type,s=o[l].value;return[t("span",{class:`el-tag el-tag--${r} el-tag--plain`},[s])]}},T={default:({row:e,column:a})=>{const l=e[a.field];return[t(U,{src:l},null)]}};function $(e){return l({url:`sys-user/delete/${e}`,method:"delete"})}const N={class:"app-container"},I=b("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),O=b("span",{class:"i-carbon-user-role mr-1"},null,-1),L=b("span",{class:"i-material-symbols-delete-outline-rounded mr-1"},null,-1),q=b("span",{class:"i-material-symbols-lock-reset mr-1"},null,-1),B=o({name:"VxeTable"}),z=o({...B,setup(e){const o=r(),b=s(),U=r(!1),B=r(!1),z=n({roleList:[],userId:""}),Q=()=>{var e,t;(e=z.userId,t=z.roleList,l({url:`sys-user/role/${e}`,method:"post",data:t})).then((e=>{u.success(e.msg)})).catch((e=>{u.error(e.msg)})).finally((()=>{b.go(0),B.value=!1}))};i((()=>{(async e=>{U.value=!0;const t={roleName:e},{data:a}=await E(t);U.value=!1,o.value=[...a]})("")}));const F=r(),H=r(),A=r(),G=n({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return null==(e=H.value)||e.clearValidate(),Promise.resolve()}}),W=n({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},printConfig:{columns:[{field:"username"},{field:"phoneNum"},{field:"roles"},{field:"avatar"}]},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"请输入用户名",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,export:!0,print:!0,zoom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"checkbox",width:"50px"},{field:"avatar",title:"头像",width:"80px",slots:T},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:M},{field:"phoneNum",title:"手机号"},{field:"createTime",title:"创建时间"},{field:"status",width:"80px",title:"状态",slots:S},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(W.loading=!0,K.clearTable(),new Promise((a=>{let o=0,r=[];const s=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(o=t.total),Array.isArray(t.records)&&(r=t.records)}W.loading=!1,a({total:o,result:r})};(function(e){return l({url:"sys-user/list",method:"get",params:e})})({username:t.username||"",phone:t.phone||void 0,size:e.pageSize,current:e.currentPage}).then(s).catch(s)})))}}}),J=n({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{id:"",username:"",phoneNum:"",password:"",avatar:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入用户名"}}},{field:"phoneNum",title:"手机号",itemRender:{name:"$input",props:{placeholder:"请输入手机号"}}},{field:"password",title:"密码",slots:{default:"password_item"}},{field:"avatar",title:"头像链接",itemRender:{name:"$input",props:{placeholder:"请输入头像链接"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return null==(e=A.value)?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>K.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入用户名")}],phoneNum:[{required:!0,validator:({itemValue:e})=>R(e)?e.trim()?void 0:new Error("空格无效"):new Error("请输入正确的手机号码")}],password:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入密码")}]}}),K=n({isUpdate:!0,commitQuery:()=>{var e;return null==(e=F.value)?void 0:e.commitProxy("query")},clearTable:()=>{var e;return null==(e=F.value)?void 0:e.reloadData([])},onShowModal:e=>{var t,a,l,o,r;e?(K.isUpdate=!0,G.title="修改用户",J.data.id=e.id,J.data.username=e.username,J.data.phoneNum=e.phoneNum,J.data.avatar=e.avatar,J.data.password="傻子别看了，没有密码的"):(K.isUpdate=!1,G.title="新增用户"),J.items&&((null==(a=null==(t=J.items[0])?void 0:t.itemRender)?void 0:a.props)&&(J.items[0].itemRender.props.disabled=K.isUpdate),(null==(o=null==(l=J.items[2])?void 0:l.itemRender)?void 0:o.props)&&(J.items[2].itemRender.props.disabled=K.isUpdate)),null==(r=A.value)||r.open(),d((()=>{var e,t;!K.isUpdate&&(null==(e=H.value)||e.reset()),null==(t=H.value)||t.clearValidate()}))},onSubmitForm:()=>{var e;J.loading||null==(e=H.value)||e.validate((e=>{if(e)return;J.loading=!0;const t=e=>{var t;J.loading=!1,200===e.code&&(null==(t=A.value)||t.close(),u.success("操作成功"),!K.isUpdate&&K.afterInsert(),K.commitQuery())};var a;K.isUpdate?(a=J.data,l({url:"sys-user/update/info",method:"put",data:a})).then((e=>t(e))).catch((e=>t(e))):function(e){return l({url:"sys-user/add",method:"post",data:e})}(J.data).then((e=>t(e))).catch((e=>t(e))),J.data={}}))},afterInsert:()=>{var e,t;const a=null==(t=null==(e=F.value)?void 0:e.getProxyInfo())?void 0:t.pager;if(a){a.currentPage*a.pageSize===a.total&&++a.currentPage}},onDelete:e=>{const t=`确定 <strong style='color:red;'>删除</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> ？`;P.confirm(t,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{$(e.id).then((()=>{u.success("删除成功"),K.afterDelete(),K.commitQuery()})).catch((()=>1))})).catch((()=>1))},onResetPass:e=>{const t=`确定 <strong style='color:red;'>重置</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> 的密码？`;P.confirm(t,"提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{$(e.id).then((()=>{u.success("密码重置成功"),K.afterDelete(),K.commitQuery()})).catch((()=>1))})).catch((()=>1))},onSetRole:e=>{B.value=!0,z.userId=e.id,z.roleList=e.roles.map((e=>e.id))},onDeleteUsers:()=>{P.confirm("确定 <strong style='color:red;'>删除</strong> 这些用户吗？","提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{var e;const t=null==(e=F.value)?void 0:e.getCheckboxRecords().map((e=>e.id));var a;(a=t,l({url:"sys-user/delete",method:"post",data:a})).then((e=>{u.success(e.msg)})).catch((e=>{u.error(e.msg)})).finally((()=>{K.afterDelete(),K.commitQuery()}))})).catch((()=>1))},afterDelete:()=>{var e,t;const a=F.value.getData(),l=null==(t=null==(e=F.value)?void 0:e.getProxyInfo())?void 0:t.pager;l&&l.currentPage>1&&1===a.length&&--l.currentPage},moreFunc:()=>{}});return(e,l)=>{const r=c("vxe-button"),s=j,n=c("vxe-grid"),i=C,d=c("vxe-form"),u=c("vxe-modal"),b=V,U=D,R=k,E=_,P=x;return m(),p("div",N,[t(n,v({ref_key:"xGridDom",ref:F},W),{"toolbar-btns":f((()=>[t(r,{status:"primary",icon:"vxe-icon-add",onClick:l[0]||(l[0]=e=>K.onShowModal())},{default:f((()=>[a(" 新增用户 ")])),_:1}),t(r,{status:"danger",icon:"vxe-icon-delete",onClick:l[1]||(l[1]=e=>K.onDeleteUsers())},{default:f((()=>[a(" 批量删除 ")])),_:1})])),"row-operate":f((({row:e})=>[t(s,{link:"",type:"primary",onClick:t=>K.onShowModal(e)},{default:f((()=>[I,a(" 修改 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"info",onClick:t=>K.onSetRole(e)},{default:f((()=>[O,a(" 分配角色 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"danger",onClick:t=>K.onDelete(e)},{default:f((()=>[L,a(" 注销 ")])),_:2},1032,["onClick"]),t(s,{link:"",type:"warning",onClick:t=>K.onResetPass(e)},{default:f((()=>[q,a(" 重置密码 ")])),_:2},1032,["onClick"])])),_:1},16),t(u,v({ref_key:"xModalDom",ref:A},G),{default:f((()=>[t(d,v({ref_key:"xFormDom",ref:H},J),{password_item:f((()=>[t(i,{modelValue:J.data.password,"onUpdate:modelValue":l[2]||(l[2]=e=>J.data.password=e),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",tabindex:"2","show-password":"",disabled:K.isUpdate},null,8,["modelValue","disabled"])])),_:1},16)])),_:1},16),t(P,{modelValue:B.value,"onUpdate:modelValue":l[5]||(l[5]=e=>B.value=e),title:"分配角色",width:"600px"},{default:f((()=>[t(E,{model:z},{default:f((()=>[t(R,null,{default:f((()=>[t(U,{modelValue:z.roleList,"onUpdate:modelValue":l[3]||(l[3]=e=>z.roleList=e)},{default:f((()=>[(m(!0),p(g,null,h(o.value,(e=>(m(),y(b,{key:e.id,label:e.id},{default:f((()=>[a(w(e.roleName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),t(R,null,{default:f((()=>[t(s,{type:"primary",onClick:Q},{default:f((()=>[a(" 确定 ")])),_:1}),t(s,{onClick:l[4]||(l[4]=e=>B.value=!1)},{default:f((()=>[a(" 取消 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}});export{z as default};
