import{d as e,r as l,Q as a,ag as t,o,B as r,D as u,a as d,c as s,C as i,w as m,a4 as n,q as p,l as c,k as f,n as b,H as h,W as _,ah as g,b8 as j,a2 as v,b9 as w,an as y,ba as V,bb as x,ap as k,aq as T}from"./index-1713f3be.js";import{v as U}from"./el-loading-14f9a8d4.js";import{E as I}from"./el-dialog-4ecabfaa.js";import"./el-overlay-7919f65d.js";import{E}from"./el-input-number-ad4d11fb.js";/* empty css                 *//* empty css                       */import{E as C,a as N}from"./el-radio-62218175.js";/* empty css               */import{E as P,a as q}from"./el-select-9774fffc.js";import"./el-scrollbar-caee5b30.js";import"./el-popper-90370b12.js";import{E as z,a as F}from"./el-table-column-52ed1e3e.js";/* empty css                    */import"./el-tooltip-4ed993c7.js";import{E as R}from"./el-divider-9e3da786.js";import{E as B}from"./el-button-1777eae9.js";import{a as L,E as O}from"./el-form-item-5a2ccd8a.js";import{E as $}from"./index-f29801d9.js";import{E as A}from"./index-152f0932.js";import{E as G}from"./index-3f18be1f.js";import{_ as H}from"./_plugin-vue_export-helper-1b428a4d.js";import"./focus-trap-6cc344c7.js";import"./event-15d81b97.js";import"./refs-0a43d458.js";import"./use-form-item-865a16c5.js";import"./scroll-e1940b97.js";import"./index-5c381d49.js";import"./strings-5db16fbd.js";import"./isEqual-5a787c40.js";import"./_Uint8Array-85531e68.js";import"./debounce-1af7bc8d.js";import"./index-ed51e79f.js";import"./validator-e67b7ad4.js";import"./_initCloneObject-a49b3841.js";import"./isArrayLikeObject-5ddbcf57.js";import"./_overRest-efb82212.js";import"./_baseFlatten-7b946638.js";import"./index-f62b9bb7.js";import"./flatten-5eec57a8.js";import"./aria-49c72c55.js";import"./index-d50292f6.js";const M=e=>(k("data-v-206c8c87"),e=e(),T(),e),Q={class:"app-container bg-white m-5"},S=M((()=>f("span",{class:"i-ph-pencil-line-light mr-1"},null,-1))),W=M((()=>f("span",{class:"i-material-symbols-delete-outline-rounded mr-1"},null,-1))),D=H(e({__name:"index",setup(e){const k=l(!1),T=l(),H=l(!1),M=l(!0),D=l(!0),J=l([]),X=l([]),Y=a({id:"",menuTitle:"",menuPerms:"",menuIcon:"",menuPath:"",component:"",menuType:0,status:0,orderNum:0,redirect:"",parentId:"",menuName:"",hidden:1}),K=t(),Z=async()=>{k.value=!0;const{data:e}=await j();J.value=[...e],X.value=[{id:"0",menuTitle:"根节点"},...e],k.value=!1},ee=async()=>{D.value=!1,M.value=!M.value,await v(),D.value=!0};o((()=>{Z()}));const le=a({parentId:[{required:!0,message:"请选择上级菜单",trigger:"blur"}],menuTitle:[{required:!0,message:"请输入名称",trigger:"blur"}],menuName:[{required:!0,message:"请输入标识",trigger:"blur"}],menuPerms:[{required:!0,message:"请输入权限编码",trigger:"blur"}],menuType:[{required:!0,message:"请选择状态",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}],hidden:[{required:!0,message:"请选择是否展示",trigger:"blur"}]});return(e,l)=>{const a=r("vxe-button"),t=L,o=O,j=z,v=A,ae=B,te=R,oe=F,re=P,ue=q,de=G,se=C,ie=N,me=E,ne=I,pe=U;return u((d(),s("div",Q,[i(o,{inline:!0},{default:m((()=>[i(t,null,{default:m((()=>[i(a,{status:"primary",icon:"vxe-icon-add",onClick:l[0]||(l[0]=e=>H.value=!0)},{default:m((()=>[n(" 新增菜单 ")])),_:1}),i(a,{status:"warning",onClick:ee},{default:m((()=>[n(p(M.value?"关闭所有":"展开所有"),1)])),_:1})])),_:1})])),_:1}),D.value?(d(),c(oe,{key:0,data:J.value,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"",stripe:"",lazy:"","max-height":"480","default-expand-all":M.value,"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:m((()=>[i(j,{prop:"menuTitle",label:"名称",sortable:"",width:"173"}),i(j,{prop:"menuName",label:"标识",width:"150"}),i(j,{prop:"menuPerms",label:"权限编码",sortable:"",width:"180"}),i(j,{prop:"menuIcon",label:"图标"},{default:m((e=>[f("span",{class:b(e.row.menuIcon)},null,2)])),_:1}),i(j,{prop:"menuType",label:"类型"},{default:m((e=>[0===e.row.menuType?(d(),c(v,{key:0,size:"small"},{default:m((()=>[n(" 目录 ")])),_:1})):1===e.row.menuType?(d(),c(v,{key:1,size:"small",type:"success"},{default:m((()=>[n(" 菜单 ")])),_:1})):h("",!0)])),_:1}),i(j,{prop:"menuPath",label:"菜单URL",width:"137"}),i(j,{prop:"redirect",width:"150",label:"重定向"}),i(j,{prop:"component",label:"菜单组件",width:"100"}),i(j,{prop:"orderNum",label:"排序",width:"53"}),i(j,{prop:"createTime",label:"创建时间",width:"173"}),i(j,{prop:"status",label:"状态",width:"73"},{default:m((e=>[0===e.row.status?(d(),c(v,{key:0,size:"small",type:"success"},{default:m((()=>[n(" 正常 ")])),_:1})):1===e.row.status?(d(),c(v,{key:1,size:"small",type:"danger"},{default:m((()=>[n(" 禁用 ")])),_:1})):h("",!0)])),_:1}),i(j,{prop:"hidden",label:"展示状态",width:"73"},{default:m((e=>[0===e.row.hidden?(d(),c(v,{key:0,size:"small",type:"danger"},{default:m((()=>[n(" 隐藏 ")])),_:1})):1===e.row.hidden?(d(),c(v,{key:1,size:"small",type:"success"},{default:m((()=>[n(" 展示 ")])),_:1})):h("",!0)])),_:1}),i(j,{prop:"icon",label:"操作",width:"170",fixed:"right"},{default:m((e=>[i(ae,{type:"primary",link:"",onClick:l=>{return a=e.row,H.value=!0,void Object.assign(Y,a);var a}},{default:m((()=>[S,n(" 编辑 ")])),_:2},1032,["onClick"]),i(te,{direction:"vertical"}),i(ae,{type:"danger",link:"",onClick:l=>{return a=e.row,void $.confirm(`正在删除：${a.menuTitle}，确认删除？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{w(a.id).then((e=>y.success(e.msg))).catch((e=>y.error(e.msg))).finally((()=>{K.go(0),Z()}))}));var a}},{default:m((()=>[W,n(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","default-expand-all"])):h("",!0),i(ne,{modelValue:H.value,"onUpdate:modelValue":l[15]||(l[15]=e=>H.value=e),title:"提示",width:"537","align-center":""},{default:m((()=>[i(o,{ref_key:"ruleFormRef",ref:T,model:Y,rules:le,"label-width":"100px",class:"demo-editForm","label-position":"left"},{default:m((()=>[i(t,{label:"上级菜单",prop:"parentId"},{default:m((()=>[i(ue,{modelValue:Y.parentId,"onUpdate:modelValue":l[1]||(l[1]=e=>Y.parentId=e),placeholder:"请选择上级菜单"},{default:m((()=>[(d(!0),s(_,null,g(X.value,(e=>(d(),s(_,{key:e.id},[i(re,{label:e.menuTitle,value:e.id},null,8,["label","value"]),(d(!0),s(_,null,g(e.children,(e=>(d(),c(re,{key:e.id,label:e.menuTitle,value:e.id},{default:m((()=>[f("span",null,p(`- ${e.menuTitle}`),1)])),_:2},1032,["label","value"])))),128))],64)))),128))])),_:1},8,["modelValue"])])),_:1}),i(t,{label:"菜单名称",prop:"menuTitle","label-width":"100px"},{default:m((()=>[i(de,{modelValue:Y.menuTitle,"onUpdate:modelValue":l[2]||(l[2]=e=>Y.menuTitle=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(t,{label:"菜单标识",prop:"menuName","label-width":"100px"},{default:m((()=>[i(de,{modelValue:Y.menuName,"onUpdate:modelValue":l[3]||(l[3]=e=>Y.menuName=e),autocomplete:"off",placeholder:"标识最好输入为英文"},null,8,["modelValue"])])),_:1}),i(t,{label:"权限编码",prop:"menuPerms","label-width":"100px"},{default:m((()=>[i(de,{modelValue:Y.menuPerms,"onUpdate:modelValue":l[4]||(l[4]=e=>Y.menuPerms=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(t,{label:"图标",prop:"menuIcon","label-width":"100px"},{default:m((()=>[i(de,{modelValue:Y.menuIcon,"onUpdate:modelValue":l[5]||(l[5]=e=>Y.menuIcon=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(t,{label:"菜单URL",prop:"menuPath","label-width":"100px"},{default:m((()=>[i(de,{modelValue:Y.menuPath,"onUpdate:modelValue":l[6]||(l[6]=e=>Y.menuPath=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(t,{label:"重定向",prop:"redirect","label-width":"100px"},{default:m((()=>[i(de,{modelValue:Y.redirect,"onUpdate:modelValue":l[7]||(l[7]=e=>Y.redirect=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(t,{label:"菜单组件",prop:"component","label-width":"100px"},{default:m((()=>[i(de,{modelValue:Y.component,"onUpdate:modelValue":l[8]||(l[8]=e=>Y.component=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(t,{label:"类型",prop:"menuType","label-width":"100px"},{default:m((()=>[i(ie,{modelValue:Y.menuType,"onUpdate:modelValue":l[9]||(l[9]=e=>Y.menuType=e)},{default:m((()=>[i(se,{label:0},{default:m((()=>[n(" 目录 ")])),_:1}),i(se,{label:1},{default:m((()=>[n(" 菜单 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(t,{label:"状态",prop:"status","label-width":"100px"},{default:m((()=>[i(ie,{modelValue:Y.status,"onUpdate:modelValue":l[10]||(l[10]=e=>Y.status=e)},{default:m((()=>[i(se,{label:0},{default:m((()=>[n(" 正常 ")])),_:1}),i(se,{label:1},{default:m((()=>[n(" 禁用 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(t,{label:"是否展示",prop:"hidden","label-width":"100px"},{default:m((()=>[i(ie,{modelValue:Y.hidden,"onUpdate:modelValue":l[11]||(l[11]=e=>Y.hidden=e)},{default:m((()=>[i(se,{label:1},{default:m((()=>[n(" 是 ")])),_:1}),i(se,{label:0},{default:m((()=>[n(" 否 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(t,{label:"排序号",prop:"orderNum","label-width":"100px"},{default:m((()=>[i(me,{modelValue:Y.orderNum,"onUpdate:modelValue":l[12]||(l[12]=e=>Y.orderNum=e),min:1,label:"排序号"},{default:m((()=>[n(" 1 ")])),_:1},8,["modelValue"])])),_:1}),i(t,null,{default:m((()=>[i(ae,{type:"primary",onClick:l[13]||(l[13]=e=>(async e=>{e&&(await e.validate(((e,l)=>{e?""===Y.id?V(Y).then((e=>{y.success(e.msg),Z()})):x(Y).then((e=>{y.success(e.msg),K.go(0),Z()})):y.error("error submit!")})),H.value=!1,e.resetFields())})(T.value))},{default:m((()=>[n(" 立即创建 ")])),_:1}),i(ae,{onClick:l[14]||(l[14]=e=>{var l;(l=T.value)&&l.resetFields()})},{default:m((()=>[n(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])),[[pe,k.value]])}}}),[["__scopeId","data-v-206c8c87"]]);export{D as default};