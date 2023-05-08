import{g as e,f as l}from"./el-overlay-2f6180d2.js";import{d as t,j as s,A as a,u as n,U as r,b as i,f as o,a as c,c as p,k as u,W as d,ah as y,l as m,C as b,_ as v,ba as h,bp as g,p as f,y as S,n as k,e as w,a4 as $,q as x,H as D,s as N,v as E}from"./index-78956fcc.js";import{i as j}from"./event-15d81b97.js";import{b as A}from"./el-button-4a1828ca.js";const _=Symbol("elDescriptions");var C=t({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:s(_,{})}),render(){var l,t,s,i,o,c;const p=e(this.cell),{border:u,direction:d}=this.descriptions,y="vertical"===d,m=(null==(s=null==(t=null==(l=this.cell)?void 0:l.children)?void 0:t.label)?void 0:s.call(t))||p.label,b=null==(c=null==(o=null==(i=this.cell)?void 0:i.children)?void 0:o.default)?void 0:c.call(o),v=p.span,h=p.align?`is-${p.align}`:"",g=p.labelAlign?`is-${p.labelAlign}`:h,f=p.className,S=p.labelClassName,k={width:a(p.width),minWidth:a(p.minWidth)},w=n("descriptions");switch(this.type){case"label":return r(this.tag,{style:k,class:[w.e("cell"),w.e("label"),w.is("bordered-label",u),w.is("vertical-label",y),g,S],colSpan:y?v:1},m);case"content":return r(this.tag,{style:k,class:[w.e("cell"),w.e("content"),w.is("bordered-content",u),w.is("vertical-content",y),h,f],colSpan:y?v:2*v-1},b);default:return r("td",{style:k,class:[w.e("cell"),h],colSpan:v},[j(m)?void 0:r("span",{class:[w.e("label"),S]},m),r("span",{class:[w.e("content"),f]},b)])}}});const W=i({row:{type:Array,default:()=>[]}}),z={key:1},I=t({name:"ElDescriptionsRow"});var q=v(t({...I,props:W,setup(e){const l=s(_,{});return(e,t)=>"vertical"===o(l).direction?(c(),p(d,{key:0},[u("tr",null,[(c(!0),p(d,null,y(e.row,((e,l)=>(c(),m(o(C),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),u("tr",null,[(c(!0),p(d,null,y(e.row,((e,l)=>(c(),m(o(C),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(c(),p("tr",z,[(c(!0),p(d,null,y(e.row,((e,t)=>(c(),p(d,{key:`tr3-${t}`},[o(l).border?(c(),p(d,{key:0},[b(o(C),{cell:e,tag:"td",type:"label"},null,8,["cell"]),b(o(C),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(c(),m(o(C),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const B=i({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:h,title:{type:String,default:""},extra:{type:String,default:""}}),H=t({name:"ElDescriptions"});var L=v(t({...H,props:B,setup(e){const t=e,s=n("descriptions"),a=A(),r=g();f(_,t);const i=S((()=>[s.b(),s.m(a.value)])),b=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e),v=()=>{var e;const s=l(null==(e=r.default)?void 0:e.call(r)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),a=[];let n=[],i=t.column,o=0;return s.forEach(((e,l)=>{var r;const c=(null==(r=e.props)?void 0:r.span)||1;if(l<s.length-1&&(o+=c>i?i:c),l===s.length-1){const l=t.column-o%t.column;return n.push(b(e,l,i,!0)),void a.push(n)}c<i?(i-=c,n.push(e)):(n.push(b(e,c,i)),a.push(n),i=t.column,n=[])})),a};return(e,l)=>(c(),p("div",{class:k(o(i))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(c(),p("div",{key:0,class:k(o(s).e("header"))},[u("div",{class:k(o(s).e("title"))},[w(e.$slots,"title",{},(()=>[$(x(e.title),1)]))],2),u("div",{class:k(o(s).e("extra"))},[w(e.$slots,"extra",{},(()=>[$(x(e.extra),1)]))],2)],2)):D("v-if",!0),u("div",{class:k(o(s).e("body"))},[u("table",{class:k([o(s).e("table"),o(s).is("bordered",e.border)])},[u("tbody",null,[(c(!0),p(d,null,y(v(),((e,l)=>(c(),m(q,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),O=t({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const R=N(L,{DescriptionsItem:O}),U=E(O);export{U as E,R as a};
