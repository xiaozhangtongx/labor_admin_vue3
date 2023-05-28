import{d as e,ag as l,r as t,Q as s,B as r,a as i,c as o,C as a,w as n,W as u,ah as c,a4 as p,F as d,k as m,q as f,H as v,l as y,an as x}from"./index-1713f3be.js";import{E as g}from"./el-dialog-4ecabfaa.js";import"./el-overlay-7919f65d.js";import{E as h}from"./el-scrollbar-caee5b30.js";import{E as j}from"./el-divider-9e3da786.js";import{E as w}from"./el-button-1777eae9.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang-06622adf.js";import{E as k}from"./el-image-viewer-0d269eb0.js";/* empty css                 *//* empty css               */import{E as _,a as C}from"./el-select-9774fffc.js";import"./el-popper-90370b12.js";import{b as U,d as E}from"./index-9f6e2e42.js";import{E as z}from"./index-f29801d9.js";import"./focus-trap-6cc344c7.js";import"./event-15d81b97.js";import"./refs-0a43d458.js";import"./use-form-item-865a16c5.js";import"./scroll-e1940b97.js";import"./index-152f0932.js";import"./throttle-3d84947d.js";import"./debounce-1af7bc8d.js";import"./index-d50292f6.js";import"./index-3f18be1f.js";import"./strings-5db16fbd.js";import"./isEqual-5a787c40.js";import"./_Uint8Array-85531e68.js";import"./index-ed51e79f.js";import"./validator-e67b7ad4.js";import"./aria-49c72c55.js";const T={class:"app-container"},V=m("span",{class:"i-carbon-task-view mr-1"},null,-1),q=m("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),M=m("span",{class:"i-material-symbols-delete-outline-rounded"},null,-1),O={class:"text-center"},$={class:"text-center"},H=m("strong",null,"发布者：",-1),L={class:"text-blue-400"},S=m("strong",{class:"ml-30px"},"发布时间：",-1),R=m("strong",{class:"ml-30px"},"类型：",-1),A=["innerHTML"],B={class:"flex flex-col justify-center items-center w-full h-full"},I={key:0,class:"w-226px h-173px"},P={key:0,class:"w-226px h-173px flex flex-col justify-center items-center"},G=["href"],W=["src"],X=e({name:"VxeTable"}),D=e({...X,setup(e){const X=l(),D=t(!1),F=t(null);t([]);const J=[{id:"0",value:"文档",type:""},{id:"1",value:"视频",type:"success"},{id:"2",value:"图片",type:"danger"}],N=t(),Q=t(),Y=s({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},formConfig:{items:[{field:"title",itemRender:{name:"$input",props:{placeholder:"请输入资料名称",clearable:!0}}},{field:"content",itemRender:{name:"$input",props:{placeholder:"请输入资料描述",clearable:!0}}},{field:"status",slots:{default:"type_item"}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"seq",width:"50px",title:"序号"},{field:"title",title:"资料标题",width:"370px"},{field:"content",title:"资料描述"},{title:"资料封面",slots:{default:"row-cover"}},{field:"creator.username",title:"发布者"},{field:"createTime",title:"发布时间"},{width:"80px",title:"资料类型",slots:{default:"row-type"}},{title:"操作",width:"210px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:l})=>(Y.loading=!0,new Promise((t=>{let s=0,r=[];const i=e=>{if(e&&e.data){const l=e.data;Number.isInteger(l.total)&&(s=l.total),Array.isArray(l.records)&&(r=l.records,r.map((e=>Object.assign(e,{srcList:[e.coverUrl]}))))}Y.loading=!1,t({total:s,result:r})},o={title:l.title||"",type:F.value||"",size:e.pageSize,current:e.currentPage,content:l.content||""};U(o).then(i).catch(i)})))}}});return(e,l)=>{const t=_,s=C,U=k,K=b,Z=w,ee=r("vxe-grid"),le=j,te=h,se=g;return i(),o("div",T,[a(ee,d({ref_key:"xGridDom",ref:Q},Y),{type_item:n((()=>[a(s,{modelValue:F.value,"onUpdate:modelValue":l[0]||(l[0]=e=>F.value=e),clearable:"",placeholder:"请选择资料类型"},{default:n((()=>[(i(),o(u,null,c(J,(e=>a(t,{key:e.id,label:e.value,value:e.id},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),"row-cover":n((({row:e})=>[a(U,{style:{width:"60px",height:"40px"},src:e.coverUrl,"zoom-rate":1.2,fit:"contain",lazy:"","preview-src-list":e.srcList,"initial-index":0},null,8,["src","zoom-rate","preview-src-list"])])),"row-type":n((({row:e})=>[a(K,{status:e.type,"status-list":J},null,8,["status"])])),"row-operate":n((({row:e})=>[a(Z,{link:"",type:"primary",onClick:l=>(e=>{D.value=!0,N.value=e})(e)},{default:n((()=>[V,p(" 预览 ")])),_:2},1032,["onClick"]),a(Z,{link:"",type:"warning",onClick:l=>(e=>{X.push({path:"/sys-study/edit",query:{id:null==e?void 0:e.id}})})(e)},{default:n((()=>[q,p(" 编辑 ")])),_:2},1032,["onClick"]),a(Z,{link:"",type:"danger",onClick:l=>(e=>{const l=`确定 <strong style='color:red;'>删除</strong> 资料 <strong style='color:#409eff;'>${e.title}</strong> ？`;z.confirm(l,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{E(e.id).then((()=>{x.success("删除成功"),X.go(0)})).catch((()=>1))})).catch((()=>1))})(e)},{default:n((()=>[M,p(" 删除 ")])),_:2},1032,["onClick"])])),_:1},16),a(se,{modelValue:D.value,"onUpdate:modelValue":l[1]||(l[1]=e=>D.value=e),"destroy-on-close":"",width:"70%",title:"资料预览"},{default:n((()=>[a(te,{height:"400px"},{default:n((()=>{var e,l,t,s,r,u,c,d,x,g,h,j,w,b,k;return[m("h2",O,f(null==(e=N.value)?void 0:e.title),1),m("h4",$,[H,p(),m("span",L,f(null==(l=N.value)?void 0:l.creator.username),1),S,p(f(null==(t=N.value)?void 0:t.createTime)+" ",1),R,p(),a(K,{status:null==(s=N.value)?void 0:s.type,"status-list":J},null,8,["status"])]),a(le,{"border-style":"dotted"},{default:n((()=>[p(" 正文 ")])),_:1}),m("section",{class:"flex flex-col justify-center items-center",innerHTML:null==(r=N.value)?void 0:r.content},null,8,A),m("section",B,[0===(null==(u=N.value)?void 0:u.type)&&(null==(c=N.value)?void 0:c.fileUrl)?(i(),o("div",I,[0===N.value.type&&(null==(d=N.value)?void 0:d.fileUrl)?(i(),o("div",P,[p(" pdf文件暂时无法展示，请直接下载 "),m("a",{target:"_blank",href:`${null==(x=N.value)?void 0:x.fileUrl}`},[a(Z,{type:"primary",link:""},{default:n((()=>[p(" 下载 ")])),_:1})],8,G)])):v("",!0)])):v("",!0),1===(null==(g=N.value)?void 0:g.type)&&(null==(h=N.value)?void 0:h.fileUrl)?(i(),o("video",{key:1,class:"w-60 h-40",src:null==(j=N.value)?void 0:j.fileUrl,controls:""},null,8,W)):v("",!0),2===(null==(w=N.value)?void 0:w.type)&&(null==(b=N.value)?void 0:b.fileUrl)?(i(),y(U,{key:2,class:"w-226px h-173px",src:null==(k=N.value)?void 0:k.fileUrl,lazy:"","preview-src-list":"[studyInfo?.fileUrl]","initial-index":0,fit:"contain"},null,8,["src"])):v("",!0)])]})),_:1})])),_:1},8,["modelValue"])])}}});export{D as default};
