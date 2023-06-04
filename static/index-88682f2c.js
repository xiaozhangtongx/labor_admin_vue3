import{d as e,ad as l,ac as a,r,Q as s,o as t,a as i,c as o,C as u,w as n,a4 as p,q as d,k as c,H as m,l as v,an as f}from"./index-2b9e942f.js";import{E as g}from"./el-card-ffa2c3c9.js";import{a as y,E as h}from"./el-form-item-9ef50f22.js";import{E as U}from"./el-image-viewer-aa99c159.js";import{g as x,E as j,a as w,r as _,c as b,o as k}from"./oss-6aad74f0.js";import{E as q}from"./el-button-4ba8563a.js";/* empty css                 */import{g as z,e as C,a as F}from"./index-5af316b4.js";import{E as $}from"./index-32efc5c0.js";import"./use-form-item-55331cc2.js";import"./event-15d81b97.js";import"./_Uint8Array-fb59223e.js";import"./_initCloneObject-211d1c84.js";import"./throttle-cf917d8a.js";import"./debounce-8e1f8eac.js";import"./index-d63fe3b9.js";import"./scroll-92931c15.js";const E={class:"app-container"},N={key:0,class:"ml-4"},V={class:"upload-progress"},P={key:1,class:"ml-10"},G=["src"],D={key:0,class:"ml-4"},M={class:"upload-progress"},T={key:1,class:"ml-4"},H={key:0,class:"w-226px h-173px flex flex-col justify-center items-center"},I=["href"],J=["src"],O=e({__name:"index",setup(e){var O;const S=l(),A=a(),B=r(),Q=r(),R=r("default"),X=r(!1),Y=r(!1),K=r(""),L=r(""),W=r(),Z=r(0),ee=r(0),le=r(),ae=r();r([]);const re=s({fileName:"",type:"",size:0,url:""}),se=s({fileName:"",type:"",size:0,url:""}),te=s({id:"",creatorId:(null==(O=A.userInfo)?void 0:O.id)||"",title:"",content:"",type:0,fileUrl:"",coverUrl:"",createTime:"",updateTime:""}),ie=s({title:[{required:!0,message:"请输入题干信息",trigger:"blur"},{min:3,max:50,message:"字数在3-50内",trigger:"blur"}],content:[{required:!0,message:"请输入资料描述",trigger:"blur"},{min:3,max:100,message:"字数在3-50内",trigger:"blur"}],coverUrl:[{required:!0,message:"请上传封面",trigger:"change"}],fileUrl:[{required:!0,message:"上传资料",trigger:"change"}]}),oe=()=>{void 0!==S.query.id&&z(S.query.id).then((e=>Object.assign(te,e.data)))},ue=e=>{const l=[],a=`/laboradmin/${_}.${e.name.split(".")[1]}`;(e=>X.value?(f.warning("当前有文件正在上传，请稍后再试"),!1):(Y.value=!0,ee.value=0,L.value="正在上传...",ae.value=e,se.fileName=e.name,se.type=e.type,se.size=e.size,!0))(e.raw)&&b.multipartUpload(a,e.raw,{progress(e){ee.value=Math.floor(100*e)}},{...k}).then((e=>{200===e.res.statusCode&&(l.push({fileUrl:e.res.requestUrls[0].split("?")[0]}),te.coverUrl=e.res.requestUrls[0].split("?")[0],L.value="上传完成",Y.value=!1,ee.value=100)})).catch((e=>{f.error(e.message),te.coverUrl="",L.value="上传失败",Y.value=!1}))},ne=e=>{ue(e)},pe=e=>{Q.value.clearFiles();const l=e[0];l.uid=x(),Q.value.handleStart(l)},de=e=>{const l=[],a=`/laboradmin/${_}.${e.name.split(".")[1]}`;(e=>{if(X.value)return f.warning("当前有文件正在上传，请稍后再试"),!1;const l="application/pdf"===e.type,a=e.type.includes("video/"),r=e.type.includes("image/"),s=e.size/1024/1024<30;if(l)re.type=0;else if(a)re.type=1;else{if(!r)return f.error("只能上传PDF、视频和图片文件"),!1;re.type=2}return a&&!s?(f.error("上传视频文件不能超过30MB"),!1):(X.value=!0,Z.value=0,K.value="正在上传...",le.value=e,re.fileName=e.name,re.size=e.size,te.type=re.type,!0)})(e.raw)&&b.multipartUpload(a,e.raw,{progress(e){Z.value=Math.floor(100*e)}},{...k}).then((e=>{200===e.res.statusCode&&(l.push({fileUrl:e.res.requestUrls[0].split("?")[0]}),te.fileUrl=e.res.requestUrls[0].split("?")[0],K.value="上传完成",X.value=!1,Z.value=100)})).catch((e=>{f.error(e.message),te.fileUrl="",K.value="上传失败",X.value=!1}))},ce=e=>{B.value.clearFiles();const l=e[0];l.uid=x(),B.value.handleStart(l)},me=e=>{de(e)};return t((()=>{oe()})),(e,l)=>{const a=$,r=y,s=q,t=j,x=w,_=U,b=h,k=g;return i(),o("div",E,[u(k,null,{default:n((()=>[u(b,{ref_key:"studyDataFormRef",ref:W,model:te,rules:ie,"label-width":"130px",class:"demo-studyDataForm",size:R.value,"status-icon":""},{default:n((()=>[u(r,{label:"资料名称",prop:"title"},{default:n((()=>[u(a,{modelValue:te.title,"onUpdate:modelValue":l[0]||(l[0]=e=>te.title=e),"show-word-limit":"",maxlength:"50",minlength:"3"},null,8,["modelValue"])])),_:1}),u(r,{label:"资料描述",prop:"content"},{default:n((()=>[u(a,{modelValue:te.content,"onUpdate:modelValue":l[1]||(l[1]=e=>te.content=e),"show-word-limit":"",maxlength:"100",minlength:"3"},null,8,["modelValue"])])),_:1}),u(r,{label:"封面",class:"h-173px",prop:"coverUrl"},{default:n((()=>[u(x,{ref_key:"uploadCover",ref:Q,class:"upload-Cover",action:"",multiple:"","auto-upload":!1,accept:".jpg,.jpeg,.png,JPG,.PNG",data:se,"show-file-list":!1,"on-exceed":pe,"on-change":ne},{default:n((()=>[u(s,{type:"primary"},{default:n((()=>[p(d(Y.value?"上传中...":"点击上传封面"),1)])),_:1}),Y.value?(i(),o("div",N,[c("div",V,[u(t,{percentage:ee.value},null,8,["percentage"])]),c("div",null,d(L.value),1)])):(i(),o("div",P,[te.coverUrl?(i(),o("img",{key:0,class:"w-226px h-173px",src:te.coverUrl,controls:""},null,8,G)):m("",!0)]))])),_:1},8,["data"])])),_:1}),u(r,{label:"资料",class:"h-173px",prop:"fileUrl"},{default:n((()=>[u(x,{ref_key:"upload",ref:B,class:"upload-demo",action:"",accept:".jpg,.jpeg,.png,JPG,.PNG,.pdf,.mp4",data:re,multiple:"","show-file-list":!1,"on-exceed":ce,"on-change":me,limit:1,"auto-upload":!1},{default:n((()=>[u(s,{type:"primary"},{default:n((()=>[p(d(X.value?"上传中...":"点击上传材料"),1)])),_:1}),X.value?(i(),o("div",D,[c("div",M,[u(t,{percentage:Z.value},null,8,["percentage"])]),c("div",null,d(K.value),1)])):(i(),o("div",T,[0===te.type&&te.fileUrl?(i(),o("div",H,[p(" pdf文件暂时无法展示，请直接下载 "),c("a",{target:"_blank",href:`${te.fileUrl}`},[u(s,{type:"primary",link:""},{default:n((()=>[p(" 下载 ")])),_:1})],8,I)])):m("",!0),1===te.type&&te.fileUrl?(i(),o("video",{key:1,class:"w-226px h-173px",src:te.fileUrl,controls:""},null,8,J)):m("",!0),2===te.type&&te.fileUrl?(i(),v(_,{key:2,class:"w-226px h-173px",src:te.fileUrl,lazy:"","preview-src-list":[`${te.fileUrl}`],"initial-index":0,fit:"contain"},null,8,["src","preview-src-list"])):m("",!0)]))])),_:1},8,["data"])])),_:1}),u(r,null,{default:n((()=>[u(s,{type:"primary",disabled:X.value||Y.value,onClick:l[2]||(l[2]=e=>(async e=>{e&&await e.validate((e=>{e?void 0!==S.query.id?C(te).then((e=>f.success(e.msg))).catch((e=>f.error(e.msg))).finally((()=>{oe()})):F(te).then((e=>f.success(e.msg))).catch((e=>f.error(e.msg))).finally((()=>{W.value.resetFields()})):f.error("提交失败，请把数据补充完整")}))})(W.value))},{default:n((()=>[p(d(X.value||Y.value?"上传中...":"提交"),1)])),_:1},8,["disabled"]),u(s,{onClick:l[3]||(l[3]=e=>{var l;(l=W.value)&&l.resetFields()})},{default:n((()=>[p(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model","rules","size"])])),_:1})])}}});export{O as default};