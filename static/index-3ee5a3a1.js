import{b as s,bB as a,aa as e,a as t,h as r,d as c,u as n,r as l,D as i,Z as o,G as u,W as p,c as m,e as v,B as f,g as d,m as y,w as g,q as S,E as h,f as k,n as b,_ as E,x as z}from"./index-1fff8c1c.js";const _=s({size:{type:[Number,String],values:a,default:"",validator:s=>e(s)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:t},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:r(String),default:"cover"}}),x={error:s=>s instanceof Event},B=["src","alt","srcset"],j=c({name:"ElAvatar"});const q=z(E(c({...j,props:_,emits:x,setup(s,{emit:a}){const t=s,r=n("avatar"),c=l(!1),E=i((()=>{const{size:s,icon:a,shape:e}=t,c=[r.b()];return o(s)&&c.push(r.m(s)),a&&c.push(r.m("icon")),e&&c.push(r.m(e)),c})),z=i((()=>{const{size:s}=t;return e(s)?r.cssVarBlock({size:u(s)||""}):void 0})),_=i((()=>({objectFit:t.fit})));function x(s){c.value=!0,a("error",s)}return p((()=>t.src),(()=>c.value=!1)),(s,a)=>(m(),v("span",{class:b(d(E)),style:f(d(z))},[!s.src&&!s.srcSet||c.value?s.icon?(m(),y(d(h),{key:1},{default:g((()=>[(m(),y(S(s.icon)))])),_:1})):k(s.$slots,"default",{key:2}):(m(),v("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:f(d(_)),onError:x},null,44,B))],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]));export{q as E};
