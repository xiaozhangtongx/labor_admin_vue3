import{d as e,ag as t,r as l,Q as s,B as o,a as r,c as a,C as i,w as n,W as u,ah as d,a4 as p,F as c,k as m,q as f,an as g}from"./index-2b9e942f.js";import{E as v}from"./el-dialog-73760f8c.js";import"./el-overlay-45055e12.js";import{E as y}from"./el-scrollbar-a8bdb3de.js";import{E as j}from"./el-divider-d5133940.js";import{E as x}from"./el-button-4ba8563a.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang-fb9ecaf4.js";/* empty css                 *//* empty css               */import{E as w,a as _}from"./el-select-a4cfa4aa.js";import"./el-popper-b2d759cd.js";import{g as b,d as k}from"./index-e6e7f2ce.js";import{E as C}from"./index-b50974fd.js";import"./index-d57c4075.js";import"./event-15d81b97.js";import"./scroll-92931c15.js";import"./focus-trap-e29a6647.js";import"./refs-872a5d31.js";import"./index-9dedcc78.js";import"./use-form-item-55331cc2.js";import"./index-910faca8.js";import"./index-32efc5c0.js";import"./index-d63fe3b9.js";import"./strings-77b070ee.js";import"./isEqual-456ab519.js";import"./_Uint8Array-fb59223e.js";import"./debounce-8e1f8eac.js";import"./index-17735892.js";import"./validator-6dddb1ee.js";import"./aria-49c72c55.js";const T={class:"app-container"},E=m("span",{class:"i-carbon-task-view mr-1"},null,-1),V=m("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),q=m("span",{class:"i-material-symbols-delete-outline-rounded"},null,-1),O={class:"text-center"},z={class:"text-center"},H=m("strong",null,"发布者：",-1),M={class:"text-blue-400"},U=m("strong",{class:"ml-30px"},"发布时间：",-1),$=m("strong",{class:"ml-30px"},"类型：",-1),A=["innerHTML"],B=e({name:"VxeTable"}),L=e({...B,setup(e){const B=t(),L=l(!1),P=l(null),R=[{id:"0",value:"安全公告",type:""},{id:"1",value:"学习公告",type:"success"},{id:"2",value:"考试公告",type:"danger"}],S=l(),W=l(),D=s({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},formConfig:{items:[{field:"title",itemRender:{name:"$input",props:{placeholder:"请输入公告标题",clearable:!0}}},{field:"status",slots:{default:"type_item"}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"seq",width:"50px",title:"序号"},{field:"title",title:"公告标题",width:"370px"},{field:"creator.username",title:"发布者"},{field:"createTime",title:"创建时间"},{field:"updateTime",title:"最后更新时间"},{width:"80px",title:"公告类型",slots:{default:"row-type"}},{title:"操作",width:"210px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(D.loading=!0,new Promise((l=>{let s=0,o=[];const r=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(s=t.total),Array.isArray(t.records)&&(o=t.records)}D.loading=!1,l({total:s,result:o})},a={title:t.title||"",type:P.value||"",size:e.pageSize,current:e.currentPage};b(a).then(r).catch(r)})))}}});return(e,t)=>{const l=w,s=_,b=h,F=x,G=o("vxe-grid"),I=j,J=y,K=v;return r(),a("div",T,[i(G,c({ref_key:"xGridDom",ref:W},D),{type_item:n((()=>[i(s,{modelValue:P.value,"onUpdate:modelValue":t[0]||(t[0]=e=>P.value=e),clearable:"",placeholder:"请选择公告类型"},{default:n((()=>[(r(),a(u,null,d(R,(e=>i(l,{key:e.id,label:e.value,value:e.id},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),"row-type":n((({row:e})=>[i(b,{status:e.type,"status-list":R},null,8,["status"])])),"row-operate":n((({row:e})=>[i(F,{link:"",type:"primary",onClick:t=>(e=>{L.value=!0,S.value=e})(e)},{default:n((()=>[E,p(" 预览 ")])),_:2},1032,["onClick"]),i(F,{link:"",type:"warning",onClick:t=>(e=>{B.push({path:"/sys-notice/edit",query:{id:null==e?void 0:e.id}})})(e)},{default:n((()=>[V,p(" 编辑 ")])),_:2},1032,["onClick"]),i(F,{link:"",type:"danger",onClick:t=>(e=>{const t=`确定 <strong style='color:red;'>删除</strong> 公告 <strong style='color:#409eff;'>${e.title}</strong> ？`;C.confirm(t,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{k(e.id).then((()=>{g.success("删除成功"),B.go(0)})).catch((()=>1))})).catch((()=>1))})(e)},{default:n((()=>[q,p(" 删除 ")])),_:2},1032,["onClick"])])),_:1},16),i(K,{modelValue:L.value,"onUpdate:modelValue":t[1]||(t[1]=e=>L.value=e),"destroy-on-close":"",width:"70%",title:"公告预览"},{default:n((()=>[i(J,{height:"400px"},{default:n((()=>{var e,t,l,s,o;return[m("h2",O,f(null==(e=S.value)?void 0:e.title),1),m("h4",z,[H,p(),m("span",M,f(null==(t=S.value)?void 0:t.creator.username),1),U,p(f(null==(l=S.value)?void 0:l.createTime)+" ",1),$,p(),i(b,{status:null==(s=S.value)?void 0:s.type,"status-list":R},null,8,["status"])]),i(I,{"border-style":"dotted"},{default:n((()=>[p(" 正文 ")])),_:1}),m("section",{class:"flex flex-col justify-center items-center",innerHTML:null==(o=S.value)?void 0:o.content},null,8,A)]})),_:1})])),_:1},8,["modelValue"])])}}});export{L as default};
