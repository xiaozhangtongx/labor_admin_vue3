import{b as s,bP as e,d as a,u as l,y as o,a as t,c as n,k as c,e as i,n as r,f as u,l as p,w as f,C as d,x as m,G as k,E as g,H as y,aa as b,T as v,_ as C,s as h}from"./index-1f640676.js";import{a as _}from"./use-form-item-4dcc0e40.js";const E=s({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:e,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),S={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},B=a({name:"ElTag"});const T=h(C(a({...B,props:E,emits:S,setup(s,{emit:e}){const a=s,C=_(),h=l("tag"),E=o((()=>{const{type:s,hit:e,effect:l,closable:o,round:t}=a;return[h.b(),h.is("closable",o),h.m(s),h.m(C.value),h.m(l),h.is("hit",e),h.is("round",t)]})),S=s=>{e("close",s)},B=s=>{e("click",s)};return(s,e)=>s.disableTransitions?(t(),n("span",{key:0,class:r(u(E)),style:b({backgroundColor:s.color}),onClick:B},[c("span",{class:r(u(h).e("content"))},[i(s.$slots,"default")],2),s.closable?(t(),p(u(g),{key:0,class:r(u(h).e("close")),onClick:k(S,["stop"])},{default:f((()=>[d(u(m))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),p(v,{key:1,name:`${u(h).namespace.value}-zoom-in-center`,appear:""},{default:f((()=>[c("span",{class:r(u(E)),style:b({backgroundColor:s.color}),onClick:B},[c("span",{class:r(u(h).e("content"))},[i(s.$slots,"default")],2),s.closable?(t(),p(u(g),{key:0,class:r(u(h).e("close")),onClick:k(S,["stop"])},{default:f((()=>[d(u(m))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{T as E,E as t};