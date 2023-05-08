import{d as e,ad as s,r as l,aV as t,Q as a,o,a as i,c as r,D as n,l as d,w as u,C as m,W as p,ah as c,a4 as g,q as f,k as y,an as v}from"./index-78956fcc.js";import{v as V}from"./el-loading-e3add4cb.js";import{E as b}from"./el-dialog-f0dd44b3.js";import"./el-overlay-2f6180d2.js";import{E as _}from"./el-card-a8ee9b26.js";import{a as j,E as I}from"./el-form-item-12015adb.js";import{E as w}from"./el-input-number-9e3819a0.js";/* empty css                 *//* empty css                       */import{E as q}from"./el-button-4a1828ca.js";import{E as x,a as h}from"./el-radio-281a6a01.js";import{g as C}from"./utils-3f53292a.js";import{a as L,e as Q,b as k}from"./index-2f3333d8.js";import{E as U}from"./index-32820b17.js";import"./focus-trap-eb4c7635.js";import"./event-15d81b97.js";import"./index-33bc2dc9.js";import"./scroll-a180cd47.js";import"./index-545d9f9a.js";import"./index-746d99f4.js";const z=y("strong",null,"题目：",-1),E=e({__name:"index",setup(e){const E=s(),T=l("default"),D=l(),Y=l(!1),F=l(!1),H=C(),M=t(new Date,"YYYY-MM-DD HH:mm:ss").value,R=a({id:H,title:"您的学校是",type:1,score:10,answerId:"",sort:0,tag:"测试",answerContent:"测试",sysQuestionItemList:[{id:C(),content:"武汉大学",questionId:H,sort:"1",des:"",createTime:M},{id:C(),content:"武汉理工大学",questionId:H,sort:"2",des:"",createTime:M},{id:C(),content:"华中科技大学",questionId:H,sort:"3",des:"",createTime:M},{id:C(),content:"华中师范大学",questionId:H,sort:"4",des:"",createTime:M}]}),O=a({title:[{required:!0,message:"请输入题干信息",trigger:"blur"},{min:3,max:50,message:"字数在3-50内",trigger:"blur"}],sysQuestionItemList:[{type:"array",required:!0,message:"请添加相关选项",trigger:"change"}],answerId:[{required:!0,message:"请给出标准答案",trigger:"change"}],answerContent:[{required:!0,message:"给出题目解析",trigger:"blur"}],tag:[{required:!0,message:"给出题目知识点",trigger:"blur"}],score:[{required:!0,message:"给出题目分数",trigger:"blur"}]}),W=()=>{void 0!==E.query.id&&L(E.query.id).then((e=>Object.assign(R,e.data)))};return o((()=>{W()})),(e,s)=>{const l=U,t=j,a=x,o=q,L=h,H=w,X=I,Z=_,$=b,A=V;return i(),r("div",null,[n((i(),d(Z,{class:"app-container m-5"},{default:u((()=>[m(X,{ref_key:"singleChoiceFormRef",ref:D,model:R,rules:O,"label-width":"130px",class:"demo-singleChoiceForm",size:T.value,"status-icon":""},{default:u((()=>[m(t,{label:"题干",prop:"title"},{default:u((()=>[m(l,{modelValue:R.title,"onUpdate:modelValue":s[0]||(s[0]=e=>R.title=e)},null,8,["modelValue"])])),_:1}),m(t,{label:"题目选项",prop:"sysQuestionItemList"},{default:u((()=>[m(L,{modelValue:R.sysQuestionItemList[0].id,"onUpdate:modelValue":s[1]||(s[1]=e=>R.sysQuestionItemList[0].id=e),class:"flex flex-col"},{default:u((()=>[(i(!0),r(p,null,c(null==R?void 0:R.sysQuestionItemList,((e,s)=>(i(),r("li",{key:e.id,class:"m-0 flex"},[m(a,{label:s,size:"large",disabled:""},null,8,["label"]),m(l,{modelValue:e.content,"onUpdate:modelValue":s=>e.content=s,class:"w-100 m-2",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),m(o,{type:"danger",class:"ml-3 mt-2",size:"small",onClick:s=>{return l=e.id,void(R.sysQuestionItemList=R.sysQuestionItemList.filter((e=>e.id!==l)));var l}},{default:u((()=>[g(" 删除 ")])),_:2},1032,["onClick"])])))),128))])),_:1},8,["modelValue"])])),_:1}),m(t,{label:"标准答案",prop:"answerId"},{default:u((()=>[m(L,{modelValue:R.answerId,"onUpdate:modelValue":s[2]||(s[2]=e=>R.answerId=e)},{default:u((()=>[(i(!0),r(p,null,c(null==R?void 0:R.sysQuestionItemList,(e=>(i(),d(a,{key:e.id,label:e.id,size:"large"},{default:u((()=>[g(f(e.content),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(t,{label:"分数",prop:"score"},{default:u((()=>[m(H,{modelValue:R.score,"onUpdate:modelValue":s[3]||(s[3]=e=>R.score=e),precision:2,step:.1,max:20,min:0},null,8,["modelValue","step"])])),_:1}),m(t,{label:"题目解析",prop:"answerContent"},{default:u((()=>[m(l,{modelValue:R.answerContent,"onUpdate:modelValue":s[4]||(s[4]=e=>R.answerContent=e),rows:3,type:"textarea"},null,8,["modelValue"])])),_:1}),m(t,{label:"知识点",prop:"tag"},{default:u((()=>[m(l,{modelValue:R.tag,"onUpdate:modelValue":s[5]||(s[5]=e=>R.tag=e)},null,8,["modelValue"])])),_:1}),m(t,null,{default:u((()=>[m(o,{type:"primary",onClick:s[6]||(s[6]=e=>(async e=>{e&&await e.validate((e=>{F.value=!0,e?void 0!==E.query.id?Q(R).then((e=>v.success(e.msg))).catch((e=>v.error(e.msg))).finally((()=>{F.value=!1,W()})):k(R).then((e=>v.success(e.msg))).catch((e=>v.error(e.msg))).finally((()=>{F.value=!1,D.value.resetFields()})):v.error("提交失败，请把数据补充完整"),F.value=!1}))})(D.value))},{default:u((()=>[g(" 提交 ")])),_:1}),m(o,{onClick:s[7]||(s[7]=e=>{var s;(s=D.value)&&s.resetFields()})},{default:u((()=>[g(" 重置 ")])),_:1}),m(o,{type:"success",onClick:s[8]||(s[8]=e=>(()=>{const e={id:C(),content:"",questionId:R.id,sort:`${R.sysQuestionItemList.length+1}`,des:"",createTime:M};R.sysQuestionItemList.push(e)})())},{default:u((()=>[g(" 添加选项 ")])),_:1}),m(o,{type:"success",onClick:s[9]||(s[9]=e=>Y.value=!0)},{default:u((()=>[g(" 预览 ")])),_:1})])),_:1})])),_:1},8,["model","rules","size"])])),_:1})),[[A,F.value]]),m($,{modelValue:Y.value,"onUpdate:modelValue":s[10]||(s[10]=e=>Y.value=e),"destroy-on-close":"",width:"370px",title:"题目预览"},{default:u((()=>[y("h3",null,[z,g(" "+f(null==R?void 0:R.title),1)]),(i(!0),r(p,null,c(null==R?void 0:R.sysQuestionItemList,(e=>(i(),r("p",{key:e.id,class:"m-0"},[m(a,{label:e.id,size:"large"},{default:u((()=>[g(f(e.content),1)])),_:2},1032,["label"])])))),128))])),_:1},8,["modelValue"])])}}});export{E as default};
