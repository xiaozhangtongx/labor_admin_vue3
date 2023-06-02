import{g as e,f as l}from"./index-0053bafd.js";import{d as t,j as s,A as a,u as n,U as r,b as i,f as o,a as c,c as p,k as u,W as d,ah as m,l as y,C as b,_ as v,br as h,bA as f,p as g,y as S,n as k,e as w,a4 as x,q as $,H as N,s as D,v as E}from"./index-af1b0f7f.js";import{i as j}from"./event-15d81b97.js";import{a as A}from"./use-form-item-c127ca03.js";const W=Symbol("elDescriptions");var _=t({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:s(W,{})}),render(){var l,t,s,i,o,c;const p=e(this.cell),{border:u,direction:d}=this.descriptions,m="vertical"===d,y=(null==(s=null==(t=null==(l=this.cell)?void 0:l.children)?void 0:t.label)?void 0:s.call(t))||p.label,b=null==(c=null==(o=null==(i=this.cell)?void 0:i.children)?void 0:o.default)?void 0:c.call(o),v=p.span,h=p.align?`is-${p.align}`:"",f=p.labelAlign?`is-${p.labelAlign}`:h,g=p.className,S=p.labelClassName,k={width:a(p.width),minWidth:a(p.minWidth)},w=n("descriptions");switch(this.type){case"label":return r(this.tag,{style:k,class:[w.e("cell"),w.e("label"),w.is("bordered-label",u),w.is("vertical-label",m),f,S],colSpan:m?v:1},y);case"content":return r(this.tag,{style:k,class:[w.e("cell"),w.e("content"),w.is("bordered-content",u),w.is("vertical-content",m),h,g],colSpan:m?v:2*v-1},b);default:return r("td",{style:k,class:[w.e("cell"),h],colSpan:v},[j(y)?void 0:r("span",{class:[w.e("label"),S]},y),r("span",{class:[w.e("content"),g]},b)])}}});const C=i({row:{type:Array,default:()=>[]}}),z={key:1},I=t({name:"ElDescriptionsRow"});var q=v(t({...I,props:C,setup(e){const l=s(W,{});return(e,t)=>"vertical"===o(l).direction?(c(),p(d,{key:0},[u("tr",null,[(c(!0),p(d,null,m(e.row,((e,l)=>(c(),y(o(_),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),u("tr",null,[(c(!0),p(d,null,m(e.row,((e,l)=>(c(),y(o(_),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(c(),p("tr",z,[(c(!0),p(d,null,m(e.row,((e,t)=>(c(),p(d,{key:`tr3-${t}`},[o(l).border?(c(),p(d,{key:0},[b(o(_),{cell:e,tag:"td",type:"label"},null,8,["cell"]),b(o(_),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(c(),y(o(_),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const B=i({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:h,title:{type:String,default:""},extra:{type:String,default:""}}),H=t({name:"ElDescriptions"});var O=v(t({...H,props:B,setup(e){const t=e,s=n("descriptions"),a=A(),r=f();g(W,t);const i=S((()=>[s.b(),s.m(a.value)])),b=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e),v=()=>{var e;const s=l(null==(e=r.default)?void 0:e.call(r)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),a=[];let n=[],i=t.column,o=0;return s.forEach(((e,l)=>{var r;const c=(null==(r=e.props)?void 0:r.span)||1;if(l<s.length-1&&(o+=c>i?i:c),l===s.length-1){const l=t.column-o%t.column;return n.push(b(e,l,i,!0)),void a.push(n)}c<i?(i-=c,n.push(e)):(n.push(b(e,c,i)),a.push(n),i=t.column,n=[])})),a};return(e,l)=>(c(),p("div",{class:k(o(i))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(c(),p("div",{key:0,class:k(o(s).e("header"))},[u("div",{class:k(o(s).e("title"))},[w(e.$slots,"title",{},(()=>[x($(e.title),1)]))],2),u("div",{class:k(o(s).e("extra"))},[w(e.$slots,"extra",{},(()=>[x($(e.extra),1)]))],2)],2)):N("v-if",!0),u("div",{class:k(o(s).e("body"))},[u("table",{class:k([o(s).e("table"),o(s).is("bordered",e.border)])},[u("tbody",null,[(c(!0),p(d,null,m(v(),((e,l)=>(c(),y(q,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),R=t({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const U=D(O,{DescriptionsItem:R}),X=E(R);export{X as E,U as a};
