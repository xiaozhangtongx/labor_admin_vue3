import{d as e,ag as l,r as t,Q as s,B as r,a,c as i,C as o,w as n,W as u,ah as c,a4 as d,F as p,k as m,q as f,H as v,l as y,an as h}from"./index-95400b9a.js";import{E as x}from"./el-dialog-98b37143.js";import"./el-overlay-d977f354.js";import{E as g}from"./el-scrollbar-38cebd92.js";import{E as w}from"./el-divider-6568e5ac.js";import{E as j}from"./el-button-aaeb9e0d.js";import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-84599fd2.js";import{E as b}from"./el-image-viewer-16ac897c.js";/* empty css                 */import"./el-tag-7153a2d7.js";import{E as _,a as C}from"./el-select-e61de454.js";import"./el-popper-d8a43a40.js";import{b as U,d as z}from"./index-c2f4e981.js";import{E}from"./index-ce68c564.js";import"./focus-trap-af580f15.js";import"./event-15d81b97.js";import"./scroll-86ca40b0.js";import"./throttle-2f597f33.js";import"./debounce-e07a4378.js";import"./index-18c267d7.js";import"./index-cf93d9ae.js";import"./strings-93afa9b8.js";import"./isEqual-ea70734d.js";import"./index-944ee666.js";import"./validator-73914e6a.js";import"./aria-49c72c55.js";const T={class:"app-container"},V=m("span",{class:"i-carbon-task-view mr-1"},null,-1),q=m("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),O=m("span",{class:"i-material-symbols-delete-outline-rounded"},null,-1),$={class:"text-center"},H={class:"text-center"},L=m("strong",null,"发布者：",-1),M={class:"text-blue-400"},R=m("strong",{class:"ml-30px"},"发布时间：",-1),P=m("strong",{class:"ml-30px"},"类型：",-1),S=["innerHTML"],B={class:"flex flex-col justify-center items-center w-full h-full"},I={key:0,class:"w-226px h-173px"},A={key:0,class:"w-226px h-173px flex flex-col justify-center items-center"},G=["href"],N=["src"],D=e({name:"VxeTable"}),F=e({...D,setup(e){const D=l(),F=t(!1),J=t(null);t([]);const K=[{id:"0",value:"文档",type:""},{id:"1",value:"视频",type:"success"},{id:"2",value:"图片",type:"danger"}],Q=t(),W=t(),X=s({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},formConfig:{items:[{field:"title",itemRender:{name:"$input",props:{placeholder:"请输入资料名称",clearable:!0}}},{field:"content",itemRender:{name:"$input",props:{placeholder:"请输入资料描述",clearable:!0}}},{field:"status",slots:{default:"type_item"}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"seq",width:"50px",title:"序号"},{field:"title",title:"资料标题",width:"370px"},{field:"content",title:"资料描述"},{title:"资料封面",slots:{default:"row-cover"}},{field:"creator.username",title:"发布者"},{field:"createTime",title:"发布时间"},{width:"80px",title:"资料类型",slots:{default:"row-type"}},{title:"操作",width:"210px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:l})=>(X.loading=!0,new Promise((t=>{let s=0,r=[];const a=e=>{if(e&&e.data){const l=e.data;Number.isInteger(l.total)&&(s=l.total),Array.isArray(l.records)&&(r=l.records,r.map((e=>Object.assign(e,{srcList:[e.coverUrl]}))))}X.loading=!1,t({total:s,result:r})},i={title:l.title||"",type:J.value||"",size:e.pageSize,current:e.currentPage,content:l.content||""};U(i).then(a).catch(a)})))}}});return(e,l)=>{const t=_,s=C,U=b,Y=k,Z=j,ee=r("vxe-grid"),le=w,te=g,se=x;return a(),i("div",T,[o(ee,p({ref_key:"xGridDom",ref:W},X),{type_item:n((()=>[o(s,{modelValue:J.value,"onUpdate:modelValue":l[0]||(l[0]=e=>J.value=e),clearable:"",placeholder:"请选择资料类型"},{default:n((()=>[(a(),i(u,null,c(K,(e=>o(t,{key:e.id,label:e.value,value:e.id},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),"row-cover":n((({row:e})=>[o(U,{style:{width:"60px",height:"40px"},src:e.coverUrl,"zoom-rate":1.2,fit:"contain",lazy:"","preview-src-list":e.srcList,"initial-index":0},null,8,["src","zoom-rate","preview-src-list"])])),"row-type":n((({row:e})=>[o(Y,{status:e.type,"status-list":K},null,8,["status"])])),"row-operate":n((({row:e})=>[o(Z,{link:"",type:"primary",onClick:l=>(e=>{F.value=!0,Q.value=e})(e)},{default:n((()=>[V,d(" 预览 ")])),_:2},1032,["onClick"]),o(Z,{link:"",type:"warning",onClick:l=>(e=>{D.push({path:"/sys-study/edit",query:{id:null==e?void 0:e.id}})})(e)},{default:n((()=>[q,d(" 编辑 ")])),_:2},1032,["onClick"]),o(Z,{link:"",type:"danger",onClick:l=>(e=>{const l=`确定 <strong style='color:red;'>删除</strong> 资料 <strong style='color:#409eff;'>${e.title}</strong> ？`;E.confirm(l,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{z(e.id).then((()=>{h.success("删除成功"),D.go(0)})).catch((()=>1))})).catch((()=>1))})(e)},{default:n((()=>[O,d(" 删除 ")])),_:2},1032,["onClick"])])),_:1},16),o(se,{modelValue:F.value,"onUpdate:modelValue":l[1]||(l[1]=e=>F.value=e),"destroy-on-close":"",width:"70%",title:"资料预览"},{default:n((()=>[o(te,{height:"400px"},{default:n((()=>{var e,l,t,s,r,u,c,p,h,x,g,w,j,k,b;return[m("h2",$,f(null==(e=Q.value)?void 0:e.title),1),m("h4",H,[L,d(),m("span",M,f(null==(l=Q.value)?void 0:l.creator.username),1),R,d(f(null==(t=Q.value)?void 0:t.createTime)+" ",1),P,d(),o(Y,{status:null==(s=Q.value)?void 0:s.type,"status-list":K},null,8,["status"])]),o(le,{"border-style":"dotted"},{default:n((()=>[d(" 正文 ")])),_:1}),m("section",{class:"flex flex-col justify-center items-center",innerHTML:null==(r=Q.value)?void 0:r.content},null,8,S),m("section",B,[0===(null==(u=Q.value)?void 0:u.type)&&(null==(c=Q.value)?void 0:c.fileUrl)?(a(),i("div",I,[0===Q.value.type&&(null==(p=Q.value)?void 0:p.fileUrl)?(a(),i("div",A,[d(" pdf文件暂时无法展示，请直接下载 "),m("a",{target:"_blank",href:`${null==(h=Q.value)?void 0:h.fileUrl}`},[o(Z,{type:"primary",link:""},{default:n((()=>[d(" 下载 ")])),_:1})],8,G)])):v("",!0)])):v("",!0),1===(null==(x=Q.value)?void 0:x.type)&&(null==(g=Q.value)?void 0:g.fileUrl)?(a(),i("video",{key:1,class:"w-60 h-40",src:null==(w=Q.value)?void 0:w.fileUrl,controls:""},null,8,N)):v("",!0),2===(null==(j=Q.value)?void 0:j.type)&&(null==(k=Q.value)?void 0:k.fileUrl)?(a(),y(U,{key:2,class:"w-226px h-173px",src:null==(b=Q.value)?void 0:b.fileUrl,lazy:"","preview-src-list":"[studyInfo?.fileUrl]","initial-index":0,fit:"contain"},null,8,["src"])):v("",!0)])]})),_:1})])),_:1},8,["modelValue"])])}}});export{F as default};
