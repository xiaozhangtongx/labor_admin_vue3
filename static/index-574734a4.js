import{bD as e,C as a,a4 as t,d as l,r,ag as o,Q as s,o as i,a2 as n,an as d,B as u,a as m,c,w as p,F as v,f,bz as g,k as h,q as y,H as w,W as x,ah as b,l as C,E as j}from"./index-2b9e942f.js";import{a as k,E as _}from"./el-form-item-9ef50f22.js";/* empty css                    */import{E as U}from"./el-dialog-73760f8c.js";import"./el-overlay-45055e12.js";import{g as E,a as P,E as V,r as M,c as R,o as D}from"./oss-6aad74f0.js";/* empty css                *//* empty css                 */import{E as N}from"./el-button-4ba8563a.js";import{E as S}from"./index-8b73bf9b.js";import{g as T,u as $,a as O,d as q,r as z,b as L,c as I}from"./index-2a3e646a.js";import{e as B}from"./index-b80da48d.js";import{b as F}from"./validate-8460febd.js";import{E as H}from"./index-b50974fd.js";import{E as Q}from"./index-32efc5c0.js";import{E as W,a as A}from"./index-9510a6c0.js";import"./use-form-item-55331cc2.js";import"./event-15d81b97.js";import"./_Uint8Array-fb59223e.js";import"./_initCloneObject-211d1c84.js";import"./index-d57c4075.js";import"./scroll-92931c15.js";import"./focus-trap-e29a6647.js";import"./refs-872a5d31.js";import"./index-9dedcc78.js";import"./aria-49c72c55.js";import"./validator-6dddb1ee.js";import"./index-d63fe3b9.js";import"./isEqual-456ab519.js";import"./flatten-7f530804.js";import"./_baseFlatten-b41864b9.js";import"./_overRest-eaaa482f.js";const G={default:({row:l})=>{const r=e(l.roles);if(0===r.length)return[a("span",{class:"el-tag el-tag--warning el-tag--plain"},[t("劳工")])];return r.map((e=>{const t="admin"===e.roleCode?"":"warning";return a("span",{class:`el-tag el-tag--${t} el-tag--plain`},[e.roleName])}))}},J={default:({row:e,column:t})=>{const l=e[t.field],r=[{id:0,type:"info",value:"不在线"},{id:1,type:"success",value:"在线"},{id:3,type:"primary",value:"已冻结"}],o=r[l].type,s=r[l].value;return[a("span",{class:`el-tag el-tag--${o} el-tag--plain`},[s])]}},K={default:({row:e,column:t})=>{const l=e[t.field];return[a(S,{src:l},null)]}},X={class:"app-container"},Y=h("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),Z=h("span",{class:"i-carbon-user-role mr-1"},null,-1),ee=h("span",{class:"i-material-symbols-delete-outline-rounded mr-1"},null,-1),ae=h("span",{class:"i-material-symbols-lock-reset mr-1"},null,-1),te={key:0,class:"ml-4"},le={class:"upload-progress"},re=["src"],oe=l({name:"VxeTable"}),se=l({...oe,setup(e){const l=r(),S=r([]),oe=o(),se=r(),ie=r(0),ne=r(!1),de=r(!1),ue=r(),me=r(!1),ce=r(""),pe=r(!1),ve=r(!1),fe=s({roleList:[],userId:""}),ge=s({coverUrl:""}),he=s({fileName:"",type:"",size:0,url:""}),ye=()=>{I(fe.userId,fe.roleList).then((e=>{d.success(e.msg)})).catch((e=>{d.error(e.msg)})).finally((()=>{oe.go(0),ve.value=!1}))},we=e=>{const a=`/laboradmin/${M}.${e.name.split(".")[1]}`;(e=>ne.value?(d.warning("当前有文件正在上传，请稍后再试"),!1):(de.value=!0,ie.value=0,ce.value="正在上传...",se.value=e,he.fileName=e.name,he.type=e.type,he.size=e.size,!0))(e.raw)&&R.multipartUpload(a,e.raw,{progress(e){ie.value=Math.floor(100*e)}},{...D}).then((e=>{200===e.res.statusCode&&(S.value.push({url:e.res.requestUrls[0].split("?")[0],name:a}),ge.coverUrl=e.res.requestUrls[0].split("?")[0],ce.value="上传完成",de.value=!1,ie.value=100)})).catch((e=>{d.error(e.message),ge.coverUrl="",ce.value="上传失败",de.value=!1}))},xe=e=>{we(e)},be=e=>{ue.value.clearFiles();const a=e[0];a.uid=E(),ue.value.handleStart(a)},Ce=(e,a)=>{S.value=[],ge.coverUrl=""},je=e=>{ge.coverUrl=e.url,me.value=!0};i((()=>{(async e=>{pe.value=!0;const a={roleName:e},{data:t}=await B(a);pe.value=!1,l.value=[...t]})("")}));const ke=r(),_e=r(),Ue=r(),Ee=s({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return null==(e=_e.value)||e.clearValidate(),Promise.resolve()}}),Pe=s({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},printConfig:{columns:[{field:"username"},{field:"phoneNum"},{field:"roles"},{field:"avatar"}]},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"请输入用户名",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,export:!0,print:!0,zoom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"checkbox",width:"50px"},{field:"avatar",title:"头像",width:"80px",slots:K},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:G},{field:"phoneNum",title:"手机号"},{field:"createTime",title:"创建时间"},{field:"status",width:"80px",title:"状态",slots:J},{title:"操作",width:"200px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:a})=>(Pe.loading=!0,Me.clearTable(),new Promise((t=>{let l=0,r=[];const o=e=>{if(e&&e.data){const a=e.data;Number.isInteger(a.total)&&(l=a.total),Array.isArray(a.records)&&(r=a.records)}Pe.loading=!1,t({total:l,result:r})},s={username:a.username||"",phone:a.phone||void 0,size:e.pageSize,current:e.currentPage};T(s).then(o).catch(o)})))}}}),Ve=s({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{id:"",username:"",phoneNum:"",password:"",avatar:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入用户名"}}},{field:"phoneNum",title:"手机号",itemRender:{name:"$input",props:{placeholder:"请输入手机号"}}},{field:"password",title:"密码",slots:{default:"password_item"}},{field:"avatar",title:"用户头像",slots:{default:"avatar_item"}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return null==(e=Ue.value)?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>Me.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入用户名")}],phoneNum:[{required:!0,validator:({itemValue:e})=>F(e)?e.trim()?void 0:new Error("空格无效"):new Error("请输入正确的手机号码")}],password:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入密码")}]}}),Me=s({isUpdate:!0,commitQuery:()=>{var e;return null==(e=ke.value)?void 0:e.commitProxy("query")},clearTable:()=>{var e;return null==(e=ke.value)?void 0:e.reloadData([])},onShowModal:e=>{var a,t,l,r,o;e?(Me.isUpdate=!0,Ee.title="修改用户",Ve.data.id=e.id,Ve.data.username=e.username,Ve.data.phoneNum=e.phoneNum,Ve.data.avatar=e.avatar,ge.coverUrl=e.avatar,S.value=[{url:ge.coverUrl,name:ge.coverUrl}],Ve.data.password="傻子别看了，没有密码的"):(Me.isUpdate=!1,Ee.title="新增用户"),Ve.items&&((null==(t=null==(a=Ve.items[0])?void 0:a.itemRender)?void 0:t.props)&&(Ve.items[0].itemRender.props.disabled=Me.isUpdate),(null==(r=null==(l=Ve.items[2])?void 0:l.itemRender)?void 0:r.props)&&(Ve.items[2].itemRender.props.disabled=Me.isUpdate)),null==(o=Ue.value)||o.open(),n((()=>{var e,a;!Me.isUpdate&&(null==(e=_e.value)||e.reset()),null==(a=_e.value)||a.clearValidate()}))},onSubmitForm:()=>{var e;Ve.loading||null==(e=_e.value)||e.validate((e=>{if(e)return;Ve.loading=!0;const a=e=>{var a;Ve.loading=!1,200===e.code&&(null==(a=Ue.value)||a.close(),d.success("操作成功"),!Me.isUpdate&&Me.afterInsert(),Me.commitQuery())};Ve.data.avatar=ge.coverUrl,Me.isUpdate?$(Ve.data).then((e=>a(e))).catch((e=>a(e))):O(Ve.data).then((e=>a(e))).catch((e=>a(e))),Ve.data={}}))},afterInsert:()=>{var e,a;const t=null==(a=null==(e=ke.value)?void 0:e.getProxyInfo())?void 0:a.pager;if(t){t.currentPage*t.pageSize===t.total&&++t.currentPage}},onDelete:e=>{const a=`确定 <strong style='color:red;'>删除</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> ？`;H.confirm(a,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{q(e.id).then((()=>{d.success("删除成功"),Me.afterDelete(),Me.commitQuery()})).catch((()=>1))})).catch((()=>1))},onResetPass:e=>{const a=`确定 <strong style='color:red;'>重置</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> 的密码？`;H.confirm(a,"提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{z(e).then((()=>{d.success("密码重置成功"),Me.afterDelete(),Me.commitQuery()})).catch((()=>1))})).catch((()=>1))},onSetRole:e=>{ve.value=!0,fe.userId=e.id,fe.roleList=e.roles.map((e=>e.id))},onDeleteUsers:()=>{H.confirm("确定 <strong style='color:red;'>删除</strong> 这些用户吗？","提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{var e;const a=null==(e=ke.value)?void 0:e.getCheckboxRecords().map((e=>e.id));L(a).then((e=>{d.success(e.msg)})).catch((e=>{d.error(e.msg)})).finally((()=>{Me.afterDelete(),Me.commitQuery()}))})).catch((()=>1))},afterDelete:()=>{var e,a;const t=ke.value.getData(),l=null==(a=null==(e=ke.value)?void 0:e.getProxyInfo())?void 0:a.pager;l&&l.currentPage>1&&1===t.length&&--l.currentPage},moreFunc:()=>{}});return(e,r)=>{const o=u("vxe-button"),s=N,i=u("vxe-grid"),n=Q,d=j,E=P,M=V,R=U,D=u("vxe-form"),T=u("vxe-modal"),$=W,O=A,q=k,z=_;return m(),c("div",X,[a(i,v({ref_key:"xGridDom",ref:ke},Pe),{"toolbar-btns":p((()=>[a(o,{status:"primary",icon:"vxe-icon-add",onClick:r[0]||(r[0]=e=>Me.onShowModal())},{default:p((()=>[t(" 新增用户 ")])),_:1}),a(o,{status:"danger",icon:"vxe-icon-delete",onClick:r[1]||(r[1]=e=>Me.onDeleteUsers())},{default:p((()=>[t(" 批量删除 ")])),_:1})])),"row-operate":p((({row:e})=>[a(s,{link:"",type:"primary",onClick:a=>Me.onShowModal(e)},{default:p((()=>[Y,t(" 修改 ")])),_:2},1032,["onClick"]),a(s,{link:"",type:"info",onClick:a=>Me.onSetRole(e)},{default:p((()=>[Z,t(" 分配角色 ")])),_:2},1032,["onClick"]),a(s,{link:"",type:"danger",onClick:a=>Me.onDelete(e)},{default:p((()=>[ee,t(" 注销 ")])),_:2},1032,["onClick"]),a(s,{link:"",type:"warning",onClick:a=>Me.onResetPass(e)},{default:p((()=>[ae,t(" 重置密码 ")])),_:2},1032,["onClick"])])),_:1},16),a(T,v({ref_key:"xModalDom",ref:Ue},Ee),{default:p((()=>[a(D,v({ref_key:"xFormDom",ref:_e},Ve),{password_item:p((()=>[a(n,{modelValue:Ve.data.password,"onUpdate:modelValue":r[2]||(r[2]=e=>Ve.data.password=e),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",tabindex:"2","show-password":"",disabled:Me.isUpdate},null,8,["modelValue","disabled"])])),avatar_item:p((()=>[a(E,{ref_key:"uploadCover",ref:ue,"file-list":S.value,"onUpdate:fileList":r[3]||(r[3]=e=>S.value=e),class:"upload-Cover",action:"",multiple:"","auto-upload":!1,accept:".jpg,.jpeg,.png,JPG,.PNG",data:he,"list-type":"picture-card",limit:1,"on-exceed":be,"on-change":xe,"on-remove":Ce,"on-preview":je},{default:p((()=>[a(d,null,{default:p((()=>[a(f(g))])),_:1})])),_:1},8,["file-list","data"]),de.value?(m(),c("div",te,[h("div",le,[a(M,{percentage:ie.value},null,8,["percentage"])]),h("div",null,y(ce.value),1)])):w("",!0),t(" "+y()+" ",1),a(R,{modelValue:me.value,"onUpdate:modelValue":r[4]||(r[4]=e=>me.value=e)},{default:p((()=>[h("img",{"w-full":"",src:ge.coverUrl,alt:"Preview Image"},null,8,re)])),_:1},8,["modelValue"])])),_:1},16)])),_:1},16),a(R,{modelValue:ve.value,"onUpdate:modelValue":r[7]||(r[7]=e=>ve.value=e),title:"分配角色",width:"600px"},{default:p((()=>[a(z,{model:fe},{default:p((()=>[a(q,null,{default:p((()=>[a(O,{modelValue:fe.roleList,"onUpdate:modelValue":r[5]||(r[5]=e=>fe.roleList=e)},{default:p((()=>[(m(!0),c(x,null,b(l.value,(e=>(m(),C($,{key:e.id,label:e.id},{default:p((()=>[t(y(e.roleName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),a(q,null,{default:p((()=>[a(s,{type:"primary",onClick:ye},{default:p((()=>[t(" 确定 ")])),_:1}),a(s,{onClick:r[6]||(r[6]=e=>ve.value=!1)},{default:p((()=>[t(" 取消 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}});export{se as default};
