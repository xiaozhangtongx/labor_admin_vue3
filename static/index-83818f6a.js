import{d as e,ad as l,r as a,b7 as s,Q as t,o,a as r,c as i,D as u,l as d,w as n,C as m,W as p,ah as c,a4 as g,q as f,k as y,an as V}from"./index-767da184.js";import{v as b}from"./el-loading-33c76387.js";import{E as v}from"./el-dialog-43e6a1da.js";import"./el-overlay-57158c24.js";import{E as j}from"./el-card-6cc15945.js";import{a as _,E as w}from"./el-form-item-fe019f9e.js";import{E as x}from"./el-button-54b31ba4.js";import{E as I}from"./el-input-number-d076ae12.js";/* empty css                 *//* empty css                       */import{E as h,a as q}from"./el-radio-b91e229b.js";import{g as C}from"./utils-6cebd9eb.js";import{a as U,e as k,b as Q}from"./index-404e910c.js";import{E as z}from"./index-42653005.js";import"./focus-trap-b48b5c02.js";import"./index-3bd3858b.js";import"./scroll-9d8dc3b9.js";import"./index-827f1ca0.js";import"./index-c18661a7.js";const E=y("strong",null,"题目：",-1),L=e({__name:"index",setup(e){const L=l(),D=a("default"),F=a(),Y=a(!1),H=a(!1),M=C(),T=s(new Date,"YYYY-MM-DD HH:mm:ss").value,O=t({id:M,title:"你喜欢加班吗",type:0,score:10,answerId:"",sort:0,tag:"测试",answerContent:"测试",sysQuestionItemList:[{id:C(),content:"喜欢",questionId:M,sort:"1",des:"",createTime:T},{id:C(),content:"不喜欢",questionId:M,sort:"2",des:"",createTime:T}]}),R=t({title:[{required:!0,message:"请输入题干信息",trigger:"blur"},{min:3,max:50,message:"字数在3-50内",trigger:"blur"}],sysQuestionItemList:[{type:"array",required:!0,message:"请添加相关选项",trigger:"change"}],answerId:[{required:!0,message:"请给出标准答案",trigger:"change"}],answerContent:[{required:!0,message:"给出题目解析",trigger:"blur"}],tag:[{required:!0,message:"给出题目知识点",trigger:"blur"}],score:[{required:!0,message:"给出题目分数",trigger:"blur"}]}),S=()=>{""!==L.query.id&&U(L.query.id).then((e=>Object.assign(O,e.data)))};return o((()=>{S()})),(e,l)=>{const a=z,s=_,t=h,o=q,C=I,U=x,M=w,T=j,W=v,X=b;return r(),i("div",null,[u((r(),d(T,{class:"app-container m-5"},{default:n((()=>[m(M,{ref_key:"singleChoiceFormRef",ref:F,model:O,rules:R,"label-width":"130px",class:"demo-singleChoiceForm",size:D.value,"status-icon":""},{default:n((()=>[m(s,{label:"题干",prop:"title"},{default:n((()=>[m(a,{modelValue:O.title,"onUpdate:modelValue":l[0]||(l[0]=e=>O.title=e)},null,8,["modelValue"])])),_:1}),m(s,{label:"题目选项"},{default:n((()=>[m(o,{modelValue:O.sysQuestionItemList[0].id,"onUpdate:modelValue":l[1]||(l[1]=e=>O.sysQuestionItemList[0].id=e),class:"flex flex-col"},{default:n((()=>[(r(!0),i(p,null,c(null==O?void 0:O.sysQuestionItemList,((e,l)=>(r(),i("li",{key:e.id,class:"m-0 flex"},[m(t,{label:l,size:"large",disabled:""},null,8,["label"]),m(a,{modelValue:e.content,"onUpdate:modelValue":l=>e.content=l,class:"w-100 m-2",size:"small"},null,8,["modelValue","onUpdate:modelValue"])])))),128))])),_:1},8,["modelValue"])])),_:1}),m(s,{label:"标准答案",prop:"answerId"},{default:n((()=>[m(o,{modelValue:O.answerId,"onUpdate:modelValue":l[2]||(l[2]=e=>O.answerId=e)},{default:n((()=>[(r(!0),i(p,null,c(null==O?void 0:O.sysQuestionItemList,(e=>(r(),d(t,{key:e.id,label:e.id,size:"large"},{default:n((()=>[g(f(e.content),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(s,{label:"分数",prop:"score"},{default:n((()=>[m(C,{modelValue:O.score,"onUpdate:modelValue":l[3]||(l[3]=e=>O.score=e),precision:2,step:.1,max:20,min:0},null,8,["modelValue","step"])])),_:1}),m(s,{label:"题目解析",prop:"answerContent"},{default:n((()=>[m(a,{modelValue:O.answerContent,"onUpdate:modelValue":l[4]||(l[4]=e=>O.answerContent=e),rows:3,type:"textarea"},null,8,["modelValue"])])),_:1}),m(s,{label:"知识点",prop:"tag"},{default:n((()=>[m(a,{modelValue:O.tag,"onUpdate:modelValue":l[5]||(l[5]=e=>O.tag=e)},null,8,["modelValue"])])),_:1}),m(s,null,{default:n((()=>[m(U,{type:"primary",onClick:l[6]||(l[6]=e=>(async e=>{e&&await e.validate((e=>{H.value=!0,e?""!==L.query.id?k(O).then((e=>V.success(e.msg))).catch((e=>V.error(e.msg))).finally((()=>{H.value=!1,S()})):Q(O).then((e=>V.success(e.msg))).catch((e=>V.error(e.msg))).finally((()=>{H.value=!1,F.value.resetFields()})):V.error("提交失败，请把数据补充完整"),H.value=!1}))})(F.value))},{default:n((()=>[g(" 提交 ")])),_:1}),m(U,{onClick:l[7]||(l[7]=e=>{var l;(l=F.value)&&l.resetFields()})},{default:n((()=>[g(" 重置 ")])),_:1}),m(U,{type:"success",onClick:l[8]||(l[8]=e=>Y.value=!0)},{default:n((()=>[g(" 预览 ")])),_:1})])),_:1})])),_:1},8,["model","rules","size"])])),_:1})),[[X,H.value]]),m(W,{modelValue:Y.value,"onUpdate:modelValue":l[9]||(l[9]=e=>Y.value=e),"destroy-on-close":"",width:"370px",title:"题目预览"},{default:n((()=>[y("h3",null,[E,g(" "+f(null==O?void 0:O.title),1)]),(r(!0),i(p,null,c(null==O?void 0:O.sysQuestionItemList,(e=>(r(),i("p",{key:e.id,class:"m-0"},[m(t,{label:e.id,size:"large"},{default:n((()=>[g(f(e.content),1)])),_:2},1032,["label"])])))),128))])),_:1},8,["modelValue"])])}}});export{L as default};
