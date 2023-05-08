import{d as e,ad as s,r as l,aM as t,Q as a,o,a as r,c as i,D as n,l as d,w as u,C as m,W as p,ah as c,a4 as g,q as f,k as y,an as v}from"./index-7b11e248.js";import{v as V}from"./el-loading-e5ab3d73.js";import{E as j}from"./el-dialog-5e6def37.js";import"./el-overlay-2726d409.js";import{E as b}from"./el-card-9aff402c.js";import{a as _,E as I}from"./el-form-item-c47d647a.js";import{E as w}from"./el-input-number-4ea7d92c.js";/* empty css                 *//* empty css                       */import{E as h}from"./el-button-a9a247f8.js";import{E as q,a as x}from"./el-radio-63bed107.js";import{g as C}from"./utils-3f53292a.js";import{a as L,e as Q,b as k}from"./index-b9e07fe5.js";import{E as U}from"./index-26c376cb.js";import"./focus-trap-33e167f5.js";import"./event-22bc0892.js";import"./vnode-17b2c6a8.js";import"./error-c58402b8.js";import"./scroll-bcd1b381.js";import"./use-form-common-props-87a080ba.js";import"./index-6ae6714a.js";import"./index-42cd8a53.js";const z=y("strong",null,"题目：",-1),E=e({__name:"index",setup(e){const E=s(),T=l("default"),D=l(),F=l(!1),M=l(!1),Y=C(),H=t(new Date,"YYYY-MM-DD HH:mm:ss").value,$=a({id:Y,title:"您的学校是",type:1,score:10,answerId:"",sort:0,tag:"测试",answerContent:"测试",sysQuestionItemList:[{id:C(),content:"武汉大学",questionId:Y,sort:"1",des:"",createTime:H},{id:C(),content:"武汉理工大学",questionId:Y,sort:"2",des:"",createTime:H},{id:C(),content:"华中科技大学",questionId:Y,sort:"3",des:"",createTime:H},{id:C(),content:"华中师范大学",questionId:Y,sort:"4",des:"",createTime:H}]}),G=a({title:[{required:!0,message:"请输入题干信息",trigger:"blur"},{min:3,max:50,message:"字数在3-50内",trigger:"blur"}],sysQuestionItemList:[{type:"array",required:!0,message:"请添加相关选项",trigger:"change"}],answerId:[{required:!0,message:"请给出标准答案",trigger:"change"}],answerContent:[{required:!0,message:"给出题目解析",trigger:"blur"}],tag:[{required:!0,message:"给出题目知识点",trigger:"blur"}],score:[{required:!0,message:"给出题目分数",trigger:"blur"}]}),K=()=>{void 0!==E.query.id&&L(E.query.id).then((e=>Object.assign($,e.data)))};return o((()=>{K()})),(e,s)=>{const l=U,t=_,a=q,o=h,L=x,Y=w,N=I,O=b,R=j,S=V;return r(),i("div",null,[n((r(),d(O,{class:"app-container m-5"},{default:u((()=>[m(N,{ref_key:"singleChoiceFormRef",ref:D,model:$,rules:G,"label-width":"130px",class:"demo-singleChoiceForm",size:T.value,"status-icon":""},{default:u((()=>[m(t,{label:"题干",prop:"title"},{default:u((()=>[m(l,{modelValue:$.title,"onUpdate:modelValue":s[0]||(s[0]=e=>$.title=e)},null,8,["modelValue"])])),_:1}),m(t,{label:"题目选项",prop:"sysQuestionItemList"},{default:u((()=>[m(L,{modelValue:$.sysQuestionItemList[0].id,"onUpdate:modelValue":s[1]||(s[1]=e=>$.sysQuestionItemList[0].id=e),class:"flex flex-col"},{default:u((()=>[(r(!0),i(p,null,c(null==$?void 0:$.sysQuestionItemList,((e,s)=>(r(),i("li",{key:e.id,class:"m-0 flex"},[m(a,{label:s,size:"large",disabled:""},null,8,["label"]),m(l,{modelValue:e.content,"onUpdate:modelValue":s=>e.content=s,class:"w-100 m-2",size:"small"},null,8,["modelValue","onUpdate:modelValue"]),m(o,{type:"danger",class:"ml-3 mt-2",size:"small",onClick:s=>{return l=e.id,void($.sysQuestionItemList=$.sysQuestionItemList.filter((e=>e.id!==l)));var l}},{default:u((()=>[g(" 删除 ")])),_:2},1032,["onClick"])])))),128))])),_:1},8,["modelValue"])])),_:1}),m(t,{label:"标准答案",prop:"answerId"},{default:u((()=>[m(L,{modelValue:$.answerId,"onUpdate:modelValue":s[2]||(s[2]=e=>$.answerId=e)},{default:u((()=>[(r(!0),i(p,null,c(null==$?void 0:$.sysQuestionItemList,(e=>(r(),d(a,{key:e.id,label:e.id,size:"large"},{default:u((()=>[g(f(e.content),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(t,{label:"分数",prop:"score"},{default:u((()=>[m(Y,{modelValue:$.score,"onUpdate:modelValue":s[3]||(s[3]=e=>$.score=e),precision:2,step:.1,max:20,min:0},null,8,["modelValue","step"])])),_:1}),m(t,{label:"题目解析",prop:"answerContent"},{default:u((()=>[m(l,{modelValue:$.answerContent,"onUpdate:modelValue":s[4]||(s[4]=e=>$.answerContent=e),rows:3,type:"textarea"},null,8,["modelValue"])])),_:1}),m(t,{label:"知识点",prop:"tag"},{default:u((()=>[m(l,{modelValue:$.tag,"onUpdate:modelValue":s[5]||(s[5]=e=>$.tag=e)},null,8,["modelValue"])])),_:1}),m(t,null,{default:u((()=>[m(o,{type:"primary",onClick:s[6]||(s[6]=e=>(async e=>{e&&await e.validate((e=>{M.value=!0,e?void 0!==E.query.id?Q($).then((e=>v.success(e.msg))).catch((e=>v.error(e.msg))).finally((()=>{M.value=!1,K()})):k($).then((e=>v.success(e.msg))).catch((e=>v.error(e.msg))).finally((()=>{M.value=!1,D.value.resetFields()})):v.error("提交失败，请把数据补充完整"),M.value=!1}))})(D.value))},{default:u((()=>[g(" 提交 ")])),_:1}),m(o,{onClick:s[7]||(s[7]=e=>{var s;(s=D.value)&&s.resetFields()})},{default:u((()=>[g(" 重置 ")])),_:1}),m(o,{type:"success",onClick:s[8]||(s[8]=e=>(()=>{const e={id:C(),content:"",questionId:$.id,sort:`${$.sysQuestionItemList.length+1}`,des:"",createTime:H};$.sysQuestionItemList.push(e)})())},{default:u((()=>[g(" 添加选项 ")])),_:1}),m(o,{type:"success",onClick:s[9]||(s[9]=e=>F.value=!0)},{default:u((()=>[g(" 预览 ")])),_:1})])),_:1})])),_:1},8,["model","rules","size"])])),_:1})),[[S,M.value]]),m(R,{modelValue:F.value,"onUpdate:modelValue":s[10]||(s[10]=e=>F.value=e),"destroy-on-close":"",width:"370px",title:"题目预览"},{default:u((()=>[y("h3",null,[z,g(" "+f(null==$?void 0:$.title),1)]),(r(!0),i(p,null,c(null==$?void 0:$.sysQuestionItemList,(e=>(r(),i("p",{key:e.id,class:"m-0"},[m(a,{label:e.id,size:"large"},{default:u((()=>[g(f(e.content),1)])),_:2},1032,["label"])])))),128))])),_:1},8,["modelValue"])])}}});export{E as default};
