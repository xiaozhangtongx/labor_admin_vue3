import{d as e,ag as t,r as l,Q as s,B as a,a as o,c as r,C as i,w as n,W as u,ah as d,a4 as p,F as c,k as m,q as f,an as g}from"./index-2b9e942f.js";import{E as v}from"./el-dialog-73760f8c.js";import"./el-overlay-45055e12.js";import{E as h}from"./el-scrollbar-a8bdb3de.js";import{E as y}from"./el-radio-371ff127.js";import{E as j}from"./el-button-4ba8563a.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-fb9ecaf4.js";/* empty css                 *//* empty css               */import{E as w,a as b}from"./el-select-a4cfa4aa.js";import"./el-popper-b2d759cd.js";import{b as _,g as k,d as C}from"./index-8a17d1f0.js";import{E}from"./index-b50974fd.js";import"./index-d57c4075.js";import"./event-15d81b97.js";import"./scroll-92931c15.js";import"./focus-trap-e29a6647.js";import"./refs-872a5d31.js";import"./index-9dedcc78.js";import"./use-form-item-55331cc2.js";import"./index-910faca8.js";import"./index-32efc5c0.js";import"./index-d63fe3b9.js";import"./strings-77b070ee.js";import"./isEqual-456ab519.js";import"./_Uint8Array-fb59223e.js";import"./debounce-8e1f8eac.js";import"./index-17735892.js";import"./validator-6dddb1ee.js";import"./aria-49c72c55.js";const V={class:"app-container"},q=m("span",{class:"i-carbon-task-view mr-1"},null,-1),T=m("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),z=m("span",{class:"i-material-symbols-delete-outline-rounded"},null,-1),O={class:"text-center"},U={class:"text-center"},$=m("strong",null,"注意事项：",-1),R={class:"text-center"},A=m("strong",null,"开始时间：",-1),B=m("strong",null,"结束时间：",-1),H=e({name:"VxeTable"}),I=e({...H,setup(e){const H=t(),I=l(!1),M=l(null),P=[{id:"0",value:"未开始",type:""},{id:"1",value:"正在进行",type:"success"},{id:"2",value:"已过期",type:"info"}],S=l(),W=l(),L=s({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},formConfig:{items:[{field:"title",itemRender:{name:"$input",props:{placeholder:"请输入试卷标题",clearable:!0}}},{field:"creator",itemRender:{name:"$input",props:{placeholder:"请输入相关组卷人",clearable:!0}}},{field:"status",slots:{default:"type_item"}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"seq",width:"50px",title:"序号"},{field:"title",title:"试卷名称",width:"370px"},{field:"duration",title:"考试时长（h）"},{field:"creator",title:"组卷人"},{field:"createTime",title:"创建时间"},{width:"80px",title:"状态",slots:{default:"row-type"}},{title:"操作",width:"210px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(L.loading=!0,new Promise((l=>{let s=0,a=[];const o=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(s=t.total),Array.isArray(t.records)&&(a=t.records)}L.loading=!1,l({total:s,result:a})},r={title:t.title||"",status:M.value||"",creator:t.creator||"",size:e.pageSize,current:e.currentPage};_(r).then(o).catch(o)})))}}});return(e,t)=>{const l=w,s=b,_=x,Q=j,Z=a("vxe-grid"),D=y,F=h,G=v;return o(),r("div",V,[i(Z,c({ref_key:"xGridDom",ref:W},L),{type_item:n((()=>[i(s,{modelValue:M.value,"onUpdate:modelValue":t[0]||(t[0]=e=>M.value=e),clearable:"",placeholder:"请选择试卷状态"},{default:n((()=>[(o(),r(u,null,d(P,(e=>i(l,{key:e.id,label:e.value,value:e.id},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),"row-type":n((({row:e})=>[i(_,{status:parseInt(e.status||"0"),"status-list":P},null,8,["status"])])),"row-operate":n((({row:e})=>[i(Q,{link:"",type:"primary",onClick:t=>(e=>{I.value=!0,k((null==e?void 0:e.id)||null).then((e=>{S.value=e.data}))})(e)},{default:n((()=>[q,p(" 预览 ")])),_:2},1032,["onClick"]),i(Q,{link:"",type:"warning",onClick:t=>(e=>{H.push({path:"/sys-paper/edit",query:{id:null==e?void 0:e.id}})})(e)},{default:n((()=>[T,p(" 编辑 ")])),_:2},1032,["onClick"]),i(Q,{link:"",type:"danger",onClick:t=>(e=>{const t=`确定 <strong style='color:red;'>删除</strong> 试卷 <strong style='color:#409eff;'>${e.title}</strong> ？`;E.confirm(t,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{C(e.id).then((()=>{g.success("删除成功"),H.go(0)})).catch((()=>1))})).catch((()=>1))})(e)},{default:n((()=>[z,p(" 删除 ")])),_:2},1032,["onClick"])])),_:1},16),i(G,{modelValue:I.value,"onUpdate:modelValue":t[1]||(t[1]=e=>I.value=e),"destroy-on-close":"",width:"70%",title:"试卷预览"},{default:n((()=>[i(F,{height:"400px"},{default:n((()=>{var e,t,l,s,a;return[m("h1",O,f(null==(e=S.value)?void 0:e.title),1),m("h3",U,[$,p(" "+f(null==(t=S.value)?void 0:t.des),1)]),m("h3",R,[A,p(" "+f(null==(l=S.value)?void 0:l.startTime)+" ",1),B,p(" "+f(null==(s=S.value)?void 0:s.endTime),1)]),(o(!0),r(u,null,d(null==(a=S.value)?void 0:a.questions,((e,t)=>(o(),r("h4",{key:e.id,class:"m-0"},[m("h3",null,[m("strong",null,"题目"+f(t+1)+"：",1),p(" "+f(null==e?void 0:e.title),1)]),(o(!0),r(u,null,d(e.sysQuestionItemList,(e=>(o(),r("p",{key:e.id,class:"m-0"},[i(D,{label:e.id,size:"large"},{default:n((()=>[p(f(e.content),1)])),_:2},1032,["label"])])))),128))])))),128))]})),_:1})])),_:1},8,["modelValue"])])}}});export{I as default};