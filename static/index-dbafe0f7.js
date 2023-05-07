import{d as e,ad as l,r as a,b7 as s,Q as t,o,a as r,c as i,D as d,l as u,w as n,C as m,W as p,ah as c,a4 as g,q as f,k as y,an as V}from"./index-22e38512.js";import{v as b}from"./el-loading-e6abfc02.js";import{E as v}from"./el-dialog-c28ae1e4.js";import"./el-overlay-d29f53f3.js";import{E as j}from"./el-card-3c96e3ec.js";import{a as _,E as w}from"./el-form-item-712376b9.js";import{E as x}from"./el-button-2ae5a5e8.js";import{E as h}from"./el-input-number-f757bb7c.js";/* empty css                 *//* empty css                       */import{E as I,a as q}from"./el-radio-48d6838c.js";import{g as C}from"./utils-6cebd9eb.js";import{a as U,e as Q,b as k}from"./index-c63a50eb.js";import{E}from"./index-2d9f9132.js";import"./focus-trap-770ade5f.js";import"./index-9598789a.js";import"./scroll-6da8933e.js";import"./index-6c4344ba.js";import"./index-72d1bf3a.js";const L=y("strong",null,"题目：",-1),z=e({__name:"index",setup(e){const z=l(),F=a("default"),D=a(),Y=a(!1),H=a(!1),M=C(),O=s(new Date,"YYYY-MM-DD HH:mm:ss").value,T=t({id:M,title:"你喜欢加班吗",type:0,score:10,answerId:"",sort:0,tag:"测试",answerContent:"测试",sysQuestionItemList:[{id:C(),content:"喜欢",questionId:M,sort:"1",des:"",createTime:O},{id:C(),content:"不喜欢",questionId:M,sort:"2",des:"",createTime:O}]}),W=t({title:[{required:!0,message:"请输入题干信息",trigger:"blur"},{min:3,max:50,message:"字数在3-50内",trigger:"blur"}],sysQuestionItemList:[{type:"array",required:!0,message:"请添加相关选项",trigger:"change"}],answerId:[{required:!0,message:"请给出标准答案",trigger:"change"}],answerContent:[{required:!0,message:"给出题目解析",trigger:"blur"}],tag:[{required:!0,message:"给出题目知识点",trigger:"blur"}],score:[{required:!0,message:"给出题目分数",trigger:"blur"}]}),B=()=>{void 0!==z.query.id&&U(z.query.id).then((e=>Object.assign(T,e.data)))};return o((()=>{B()})),(e,l)=>{const a=E,s=_,t=I,o=q,C=h,U=x,M=w,O=j,J=v,R=b;return r(),i("div",null,[d((r(),u(O,{class:"app-container m-5"},{default:n((()=>[m(M,{ref_key:"singleChoiceFormRef",ref:D,model:T,rules:W,"label-width":"130px",class:"demo-singleChoiceForm",size:F.value,"status-icon":""},{default:n((()=>[m(s,{label:"题干",prop:"title"},{default:n((()=>[m(a,{modelValue:T.title,"onUpdate:modelValue":l[0]||(l[0]=e=>T.title=e)},null,8,["modelValue"])])),_:1}),m(s,{label:"题目选项"},{default:n((()=>[m(o,{modelValue:T.sysQuestionItemList[0].id,"onUpdate:modelValue":l[1]||(l[1]=e=>T.sysQuestionItemList[0].id=e),class:"flex flex-col"},{default:n((()=>[(r(!0),i(p,null,c(null==T?void 0:T.sysQuestionItemList,((e,l)=>(r(),i("li",{key:e.id,class:"m-0 flex"},[m(t,{label:l,size:"large",disabled:""},null,8,["label"]),m(a,{modelValue:e.content,"onUpdate:modelValue":l=>e.content=l,class:"w-100 m-2",size:"small"},null,8,["modelValue","onUpdate:modelValue"])])))),128))])),_:1},8,["modelValue"])])),_:1}),m(s,{label:"标准答案",prop:"answerId"},{default:n((()=>[m(o,{modelValue:T.answerId,"onUpdate:modelValue":l[2]||(l[2]=e=>T.answerId=e)},{default:n((()=>[(r(!0),i(p,null,c(null==T?void 0:T.sysQuestionItemList,(e=>(r(),u(t,{key:e.id,label:e.id,size:"large"},{default:n((()=>[g(f(e.content),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(s,{label:"分数",prop:"score"},{default:n((()=>[m(C,{modelValue:T.score,"onUpdate:modelValue":l[3]||(l[3]=e=>T.score=e),precision:2,step:.1,max:20,min:0},null,8,["modelValue","step"])])),_:1}),m(s,{label:"题目解析",prop:"answerContent"},{default:n((()=>[m(a,{modelValue:T.answerContent,"onUpdate:modelValue":l[4]||(l[4]=e=>T.answerContent=e),rows:3,type:"textarea"},null,8,["modelValue"])])),_:1}),m(s,{label:"知识点",prop:"tag"},{default:n((()=>[m(a,{modelValue:T.tag,"onUpdate:modelValue":l[5]||(l[5]=e=>T.tag=e)},null,8,["modelValue"])])),_:1}),m(s,null,{default:n((()=>[m(U,{type:"primary",onClick:l[6]||(l[6]=e=>(async e=>{e&&await e.validate((e=>{H.value=!0,e?void 0!==z.query.id?Q(T).then((e=>V.success(e.msg))).catch((e=>V.error(e.msg))).finally((()=>{H.value=!1,B()})):k(T).then((e=>V.success(e.msg))).catch((e=>V.error(e.msg))).finally((()=>{H.value=!1,D.value.resetFields()})):V.error("提交失败，请把数据补充完整"),H.value=!1}))})(D.value))},{default:n((()=>[g(" 提交 ")])),_:1}),m(U,{onClick:l[7]||(l[7]=e=>{var l;(l=D.value)&&l.resetFields()})},{default:n((()=>[g(" 重置 ")])),_:1}),m(U,{type:"success",onClick:l[8]||(l[8]=e=>Y.value=!0)},{default:n((()=>[g(" 预览 ")])),_:1})])),_:1})])),_:1},8,["model","rules","size"])])),_:1})),[[R,H.value]]),m(J,{modelValue:Y.value,"onUpdate:modelValue":l[9]||(l[9]=e=>Y.value=e),"destroy-on-close":"",width:"370px",title:"题目预览"},{default:n((()=>[y("h3",null,[L,g(" "+f(null==T?void 0:T.title),1)]),(r(!0),i(p,null,c(null==T?void 0:T.sysQuestionItemList,(e=>(r(),i("p",{key:e.id,class:"m-0"},[m(t,{label:e.id,size:"large"},{default:n((()=>[g(f(e.content),1)])),_:2},1032,["label"])])))),128))])),_:1},8,["modelValue"])])}}});export{z as default};
