import{d as e,r as l,Q as a,ag as t,o,B as r,D as u,a as m,c as n,C as d,w as s,a4 as i,q as p,l as c,k as f,n as b,H as h,W as _,ah as v,a$ as g,a2 as j,b0 as y,an as w,b1 as V,b2 as x,ap as T,aq as k}from"./index-1f640676.js";import{v as P}from"./el-loading-f0a1890f.js";import{E as I}from"./el-dialog-460e6df1.js";import"./el-overlay-ed666455.js";import{E as U}from"./el-input-number-f949784c.js";/* empty css                 *//* empty css                       */import{E as N,a as E}from"./el-radio-3101e7ad.js";/* empty css               */import{E as C,a as q}from"./el-select-273c0000.js";import"./el-scrollbar-0093c299.js";import"./el-popper-2430518e.js";import{E as z,a as F}from"./el-table-column-6c239ae5.js";/* empty css                    */import"./el-tooltip-4ed993c7.js";import{E as R}from"./el-divider-bf7ac035.js";import{E as B}from"./el-button-dbdb681c.js";import{a as H,E as L}from"./el-form-item-5da3e9d6.js";import{E as $}from"./index-3824ad87.js";import{E as D}from"./index-94503ad8.js";import{E as G}from"./index-07f388b7.js";import{_ as O}from"./_plugin-vue_export-helper-1b428a4d.js";import"./focus-trap-b62d6901.js";import"./event-15d81b97.js";import"./refs-6a29fe35.js";import"./use-form-item-4dcc0e40.js";import"./scroll-72399e5e.js";import"./index-fa99bc53.js";import"./strings-f7f4cb74.js";import"./isEqual-5a3ddd8f.js";import"./_Uint8Array-685b1d00.js";import"./debounce-2aaaf21a.js";import"./index-853a7518.js";import"./validator-02458b2a.js";import"./_initCloneObject-c46729b5.js";import"./index-68de09ec.js";import"./flatten-b71c5478.js";import"./aria-49c72c55.js";import"./index-f9759984.js";const Q=e=>(T("data-v-c05cf6fb"),e=e(),k(),e),A={class:"app-container bg-white m-5"},K=Q((()=>f("span",{class:"i-ph-pencil-line-light mr-1"},null,-1))),S=Q((()=>f("span",{class:"i-material-symbols-delete-outline-rounded mr-1"},null,-1))),W=O(e({__name:"index",setup(e){const T=l(!1),k=l(),O=l(!1),Q=l(!0),W=l(!0),X=l([]),Z=l([]),J=a({id:"",menuTitle:"",menuPerms:"",menuIcon:"",menuPath:"",component:"",menuType:0,status:0,orderNum:0,redirect:"",parentId:"",menuName:""}),M=t(),Y=async()=>{T.value=!0;const{data:e}=await g();X.value=[...e],Z.value=[{id:"0",menuTitle:"根节点"},...e],T.value=!1},ee=async()=>{W.value=!1,Q.value=!Q.value,await j(),W.value=!0};o((()=>{Y()}));const le=a({parentId:[{required:!0,message:"请选择上级菜单",trigger:"blur"}],menuTitle:[{required:!0,message:"请输入名称",trigger:"blur"}],menuName:[{required:!0,message:"请输入标识",trigger:"blur"}],menuPerms:[{required:!0,message:"请输入权限编码",trigger:"blur"}],menuType:[{required:!0,message:"请选择状态",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}]});return(e,l)=>{const a=r("vxe-button"),t=H,o=L,g=z,j=D,ae=B,te=R,oe=F,re=C,ue=q,me=G,ne=N,de=E,se=U,ie=I,pe=P;return u((m(),n("div",A,[d(o,{inline:!0},{default:s((()=>[d(t,null,{default:s((()=>[d(a,{status:"primary",icon:"vxe-icon-add",onClick:l[0]||(l[0]=e=>O.value=!0)},{default:s((()=>[i(" 新增菜单 ")])),_:1}),d(a,{status:"warning",onClick:ee},{default:s((()=>[i(p(Q.value?"关闭所有":"展开所有"),1)])),_:1})])),_:1})])),_:1}),W.value?(m(),c(oe,{key:0,data:X.value,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"",stripe:"",lazy:"","max-height":"480","default-expand-all":Q.value,"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:s((()=>[d(g,{prop:"menuTitle",label:"名称",sortable:"",width:"173"}),d(g,{prop:"menuName",label:"标识",width:"150"}),d(g,{prop:"menuPerms",label:"权限编码",sortable:"",width:"180"}),d(g,{prop:"menuIcon",label:"图标"},{default:s((e=>[f("span",{class:b(e.row.menuIcon)},null,2)])),_:1}),d(g,{prop:"menuType",label:"类型"},{default:s((e=>[0===e.row.menuType?(m(),c(j,{key:0,size:"small"},{default:s((()=>[i(" 目录 ")])),_:1})):1===e.row.menuType?(m(),c(j,{key:1,size:"small",type:"success"},{default:s((()=>[i(" 菜单 ")])),_:1})):h("",!0)])),_:1}),d(g,{prop:"menuPath",label:"菜单URL",width:"137"}),d(g,{prop:"redirect",width:"150",label:"重定向"}),d(g,{prop:"component",label:"菜单组件",width:"100"}),d(g,{prop:"orderNum",label:"排序",width:"53"}),d(g,{prop:"createTime",label:"创建时间",width:"173"}),d(g,{prop:"status",label:"状态",width:"73"},{default:s((e=>[0===e.row.status?(m(),c(j,{key:0,size:"small",type:"success"},{default:s((()=>[i(" 正常 ")])),_:1})):1===e.row.status?(m(),c(j,{key:1,size:"small",type:"danger"},{default:s((()=>[i(" 禁用 ")])),_:1})):h("",!0)])),_:1}),d(g,{prop:"icon",label:"操作",width:"170",fixed:"right"},{default:s((e=>[d(ae,{type:"primary",link:"",onClick:l=>{return a=e.row,O.value=!0,J.id=a.id,J.menuPath=a.menuPath,J.menuTitle=a.menuTitle,J.menuPerms=a.menuPerms,J.menuIcon=a.menuIcon||"",J.menuPath=a.menuPath,J.menuType=a.menuType,J.status=a.status,J.orderNum=a.orderNum||0,J.redirect=a.redirect||"",J.parentId=a.parentId,J.component=a.component,void(J.menuName=a.menuName);var a}},{default:s((()=>[K,i(" 编辑 ")])),_:2},1032,["onClick"]),d(te,{direction:"vertical"}),d(ae,{type:"danger",link:"",onClick:l=>{return a=e.row,void $.confirm(`正在删除：${a.menuTitle}，确认删除？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{y(a.id).then((e=>w.success(e.msg))).catch((e=>w.error(e.msg))).finally((()=>{M.go(0),Y()}))}));var a}},{default:s((()=>[S,i(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","default-expand-all"])):h("",!0),d(ie,{modelValue:O.value,"onUpdate:modelValue":l[14]||(l[14]=e=>O.value=e),title:"提示",width:"537","align-center":""},{default:s((()=>[d(o,{ref_key:"ruleFormRef",ref:k,model:J,rules:le,"label-width":"100px",class:"demo-editForm"},{default:s((()=>[d(t,{label:"上级菜单",prop:"parentId"},{default:s((()=>[d(ue,{modelValue:J.parentId,"onUpdate:modelValue":l[1]||(l[1]=e=>J.parentId=e),placeholder:"请选择上级菜单"},{default:s((()=>[(m(!0),n(_,null,v(Z.value,(e=>(m(),n(_,{key:e.id},[d(re,{label:e.menuTitle,value:e.id},null,8,["label","value"]),(m(!0),n(_,null,v(e.children,(e=>(m(),c(re,{key:e.id,label:e.menuTitle,value:e.id},{default:s((()=>[f("span",null,p(`- ${e.menuTitle}`),1)])),_:2},1032,["label","value"])))),128))],64)))),128))])),_:1},8,["modelValue"])])),_:1}),d(t,{label:"菜单名称",prop:"menuTitle","label-width":"100px"},{default:s((()=>[d(me,{modelValue:J.menuTitle,"onUpdate:modelValue":l[2]||(l[2]=e=>J.menuTitle=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(t,{label:"菜单标识",prop:"menuName","label-width":"100px"},{default:s((()=>[d(me,{modelValue:J.menuName,"onUpdate:modelValue":l[3]||(l[3]=e=>J.menuName=e),autocomplete:"off",placeholder:"标识最好输入为英文"},null,8,["modelValue"])])),_:1}),d(t,{label:"权限编码",prop:"menuPerms","label-width":"100px"},{default:s((()=>[d(me,{modelValue:J.menuPerms,"onUpdate:modelValue":l[4]||(l[4]=e=>J.menuPerms=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(t,{label:"图标",prop:"menuIcon","label-width":"100px"},{default:s((()=>[d(me,{modelValue:J.menuIcon,"onUpdate:modelValue":l[5]||(l[5]=e=>J.menuIcon=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(t,{label:"菜单URL",prop:"menuPath","label-width":"100px"},{default:s((()=>[d(me,{modelValue:J.menuPath,"onUpdate:modelValue":l[6]||(l[6]=e=>J.menuPath=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(t,{label:"重定向",prop:"redirect","label-width":"100px"},{default:s((()=>[d(me,{modelValue:J.redirect,"onUpdate:modelValue":l[7]||(l[7]=e=>J.redirect=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(t,{label:"菜单组件",prop:"component","label-width":"100px"},{default:s((()=>[d(me,{modelValue:J.component,"onUpdate:modelValue":l[8]||(l[8]=e=>J.component=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),d(t,{label:"类型",prop:"menuType","label-width":"100px"},{default:s((()=>[d(de,{modelValue:J.menuType,"onUpdate:modelValue":l[9]||(l[9]=e=>J.menuType=e)},{default:s((()=>[d(ne,{label:0},{default:s((()=>[i(" 目录 ")])),_:1}),d(ne,{label:1},{default:s((()=>[i(" 菜单 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(t,{label:"状态",prop:"status","label-width":"100px"},{default:s((()=>[d(de,{modelValue:J.status,"onUpdate:modelValue":l[10]||(l[10]=e=>J.status=e)},{default:s((()=>[d(ne,{label:0},{default:s((()=>[i(" 正常 ")])),_:1}),d(ne,{label:1},{default:s((()=>[i(" 禁用 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),d(t,{label:"排序号",prop:"orderNum","label-width":"100px"},{default:s((()=>[d(se,{modelValue:J.orderNum,"onUpdate:modelValue":l[11]||(l[11]=e=>J.orderNum=e),min:1,label:"排序号"},{default:s((()=>[i(" 1 ")])),_:1},8,["modelValue"])])),_:1}),d(t,null,{default:s((()=>[d(ae,{type:"primary",onClick:l[12]||(l[12]=e=>(async e=>{e&&(await e.validate(((e,l)=>{e?""===J.id?V(J).then((e=>{w.success(e.msg),Y()})):x(J).then((e=>{w.success(e.msg),M.go(0),Y()})):w.error("error submit!")})),O.value=!1,e.resetFields())})(k.value))},{default:s((()=>[i(" 立即创建 ")])),_:1}),d(ae,{onClick:l[13]||(l[13]=e=>{var l;(l=k.value)&&l.resetFields()})},{default:s((()=>[i(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])),[[pe,T.value]])}}}),[["__scopeId","data-v-c05cf6fb"]]);export{W as default};