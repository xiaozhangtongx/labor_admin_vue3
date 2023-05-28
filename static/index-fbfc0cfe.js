import{d as e,ad as s,r as l,aV as t,Q as a,o,a as i,c as r,D as n,l as d,w as u,C as m,W as p,ah as c,a4 as f,q as g,k as y,an as v}from"./index-1713f3be.js";import{v as V}from"./el-loading-14f9a8d4.js";import{E as b}from"./el-dialog-4ecabfaa.js";import"./el-overlay-7919f65d.js";import{E as j}from"./el-card-020fefc8.js";import{a as _,E as I}from"./el-form-item-5a2ccd8a.js";import{E as w}from"./el-input-number-ad4d11fb.js";/* empty css                 *//* empty css                       */import{E as x}from"./el-button-1777eae9.js";import{E as h,a as q}from"./el-radio-62218175.js";import{a as C}from"./utils-4a6237ef.js";import{a as Q,e as L,b as k}from"./index-5a33c4e7.js";import{E as U}from"./index-3f18be1f.js";import"./focus-trap-6cc344c7.js";import"./event-15d81b97.js";import"./refs-0a43d458.js";import"./use-form-item-865a16c5.js";import"./scroll-e1940b97.js";import"./_Uint8Array-85531e68.js";import"./_initCloneObject-a49b3841.js";import"./index-5c381d49.js";import"./index-d50292f6.js";const z=y("strong",null,"题目：",-1),E=e({__name:"index",setup(e){const E=s(),T=l("default"),D=l(),F=l(!1),M=l(!1),Y=C(),R=t(new Date,"YYYY-MM-DD HH:mm:ss").value,H=a({id:Y,title:"您的学校是",type:1,score:10,answerId:"",sort:0,tag:"测试",answerContent:"测试",sysQuestionItemList:[{id:C(),content:"武汉大学",questionId:Y,sort:"1",des:"",createTime:R},{id:C(),content:"武汉理工大学",questionId:Y,sort:"2",des:"",createTime:R},{id:C(),content:"华中科技大学",questionId:Y,sort:"3",des:"",createTime:R},{id:C(),content:"华中师范大学",questionId:Y,sort:"4",des:"",createTime:R}]}),O=a({title:[{required:!0,message:"请输入题干信息",trigger:"blur"},{min:3,max:50,message:"字数在3-50内",trigger:"blur"}],sysQuestionItemList:[{type:"array",required:!0,message:"请添加相关选项",trigger:"change"}],answerId:[{required:!0,message:"请给出标准答案",trigger:"change"}],answerContent:[{required:!0,message:"给出题目解析",trigger:"blur"}],tag:[{required:!0,message:"给出题目知识点",trigger:"blur"}],score:[{required:!0,message:"给出题目分数",trigger:"blur"}]}),W=()=>{void 0!==E.query.id&&Q(E.query.id).then((e=>Object.assign(H,e.data)))};return o((()=>{W()})),(e,s)=>{const l=U,t=_,a=h,o=x,Q=q,Y=w,A=I,G=j,X=b,$=V;return i(),r("div",null,[n((i(),d(G,{class:"app-container m-5"},{default:u((()=>[m(A,{ref_key:"singleChoiceFormRef",ref:D,model:H,rules:O,"label-width":"130px",class:"demo-singleChoiceForm",size:T.value,"status-icon":""},{default:u((()=>[m(t,{label:"题干",prop:"title"},{default:u((()=>[m(l,{modelValue:H.title,"onUpdate:modelValue":s[0]||(s[0]=e=>H.title=e)},null,8,["modelValue"])])),_:1}),m(t,{label:"题目选项",prop:"sysQuestionItemList"},{default:u((()=>[m(Q,{modelValue:H.sysQuestionItemList[0].id,"onUpdate:modelValue":s[1]||(s[1]=e=>H.sysQuestionItemList[0].id=e),class:"flex flex-col"},{default:u((()=>[(i(!0),r(p,null,c(null==H?void 0:H.sysQuestionItemList,((e,s)=>(i(),r("li",{key:e.id,class:"m-0 flex"},[m(a,{label:s,size:"large",disabled:""},null,8,["label"]),m(l,{modelValue:e.content,"onUpdate:modelValue":s=>e.content=s,class:"w-100 m-2",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),m(o,{type:"danger",class:"ml-3 mt-2",size:"small",onClick:s=>{return l=e.id,void(H.sysQuestionItemList=H.sysQuestionItemList.filter((e=>e.id!==l)));var l}},{default:u((()=>[f(" 删除 ")])),_:2},1032,["onClick"])])))),128))])),_:1},8,["modelValue"])])),_:1}),m(t,{label:"标准答案",prop:"answerId"},{default:u((()=>[m(Q,{modelValue:H.answerId,"onUpdate:modelValue":s[2]||(s[2]=e=>H.answerId=e)},{default:u((()=>[(i(!0),r(p,null,c(null==H?void 0:H.sysQuestionItemList,(e=>(i(),d(a,{key:e.id,label:e.id,size:"large"},{default:u((()=>[f(g(e.content),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(t,{label:"分数",prop:"score"},{default:u((()=>[m(Y,{modelValue:H.score,"onUpdate:modelValue":s[3]||(s[3]=e=>H.score=e),precision:2,step:.1,max:20,min:0},null,8,["modelValue","step"])])),_:1}),m(t,{label:"题目解析",prop:"answerContent"},{default:u((()=>[m(l,{modelValue:H.answerContent,"onUpdate:modelValue":s[4]||(s[4]=e=>H.answerContent=e),rows:3,type:"textarea"},null,8,["modelValue"])])),_:1}),m(t,{label:"知识点",prop:"tag"},{default:u((()=>[m(l,{modelValue:H.tag,"onUpdate:modelValue":s[5]||(s[5]=e=>H.tag=e)},null,8,["modelValue"])])),_:1}),m(t,null,{default:u((()=>[m(o,{type:"primary",onClick:s[6]||(s[6]=e=>(async e=>{e&&await e.validate((e=>{M.value=!0,e?void 0!==E.query.id?L(H).then((e=>v.success(e.msg))).catch((e=>v.error(e.msg))).finally((()=>{M.value=!1,W()})):k(H).then((e=>v.success(e.msg))).catch((e=>v.error(e.msg))).finally((()=>{M.value=!1,D.value.resetFields()})):v.error("提交失败，请把数据补充完整"),M.value=!1}))})(D.value))},{default:u((()=>[f(" 提交 ")])),_:1}),m(o,{onClick:s[7]||(s[7]=e=>{var s;(s=D.value)&&s.resetFields()})},{default:u((()=>[f(" 重置 ")])),_:1}),m(o,{type:"success",onClick:s[8]||(s[8]=e=>(()=>{const e={id:C(),content:"",questionId:H.id,sort:`${H.sysQuestionItemList.length+1}`,des:"",createTime:R};H.sysQuestionItemList.push(e)})())},{default:u((()=>[f(" 添加选项 ")])),_:1}),m(o,{type:"success",onClick:s[9]||(s[9]=e=>F.value=!0)},{default:u((()=>[f(" 预览 ")])),_:1})])),_:1})])),_:1},8,["model","rules","size"])])),_:1})),[[$,M.value]]),m(X,{modelValue:F.value,"onUpdate:modelValue":s[10]||(s[10]=e=>F.value=e),"destroy-on-close":"",width:"370px",title:"题目预览"},{default:u((()=>[y("h3",null,[z,f(" "+g(null==H?void 0:H.title),1)]),(i(!0),r(p,null,c(null==H?void 0:H.sysQuestionItemList,(e=>(i(),r("p",{key:e.id,class:"m-0"},[m(a,{label:e.id,size:"large"},{default:u((()=>[f(g(e.content),1)])),_:2},1032,["label"])])))),128))])),_:1},8,["modelValue"])])}}});export{E as default};
