import{d as e,b4 as t,u as n,y as s,a as l,c as r,e as o,n as a,f as i,_ as c,aa as u,s as d,v as p,b7 as m,a2 as f}from"./index-b8a3a250.js";import{t as h,g as b}from"./throttle-6479db90.js";import{t as g}from"./focus-trap-304145bb.js";import{g as v}from"./scroll-1d64911d.js";const y=e({name:"ElContainer"});var E=c(e({...y,props:{direction:{type:String}},setup(e){const c=e,u=t(),d=n("container"),p=s((()=>{if("vertical"===c.direction)return!0;if("horizontal"===c.direction)return!1;if(u&&u.default){return u.default().some((e=>{const t=e.type.name;return"ElHeader"===t||"ElFooter"===t}))}return!1}));return(e,t)=>(l(),r("section",{class:a([i(d).b(),i(d).is("vertical",i(p))])},[o(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const w=e({name:"ElAside"});var k=c(e({...w,props:{width:{type:String,default:null}},setup(e){const t=e,c=n("aside"),d=s((()=>t.width?c.cssVarBlock({width:t.width}):{}));return(e,t)=>(l(),r("aside",{class:a(i(c).b()),style:u(i(d))},[o(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const H=e({name:"ElFooter"});var S=c(e({...H,props:{height:{type:String,default:null}},setup(e){const t=e,c=n("footer"),d=s((()=>t.height?c.cssVarBlock({height:t.height}):{}));return(e,t)=>(l(),r("footer",{class:a(i(c).b()),style:u(i(d))},[o(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const _=e({name:"ElHeader"});var T=c(e({..._,props:{height:{type:String,default:null}},setup(e){const t=e,c=n("header"),d=s((()=>t.height?c.cssVarBlock({height:t.height}):{}));return(e,t)=>(l(),r("header",{class:a(i(c).b()),style:u(i(d))},[o(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const $=e({name:"ElMain"});var j=c(e({...$,setup(e){const t=n("main");return(e,n)=>(l(),r("main",{class:a(i(t).b())},[o(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const B=d(E,{Aside:k,Footer:S,Header:T,Main:j}),N=p(k);p(S),p(T);const A=p(j),M="ElInfiniteScroll",F={delay:{type:Number,default:200},distance:{type:Number,default:0},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},L=(e,t)=>Object.entries(F).reduce(((n,[s,l])=>{var r,o;const{type:a,default:i}=l,c=e.getAttribute(`infinite-scroll-${s}`);let u=null!=(o=null!=(r=t[c])?r:c)?o:i;return u="false"!==u&&u,u=a(u),n[s]=Number.isNaN(u)?i:u,n}),{}),V=e=>{const{observer:t}=e[M];t&&(t.disconnect(),delete e[M].observer)},x=(e,t)=>{const{container:n,containerEl:s,instance:l,observer:r,lastScrollTop:o}=e[M],{disabled:a,distance:i}=L(e,l),{clientHeight:c,scrollHeight:u,scrollTop:d}=s,p=d-o;if(e[M].lastScrollTop=d,r||a||p<0)return;let m=!1;if(n===e)m=u-(c+d)<=i;else{const{clientTop:t,scrollHeight:n}=e;m=d+c>=b(e,s)+t+n-i}m&&t.call(l)};function I(e,t){const{containerEl:n,instance:s}=e[M],{disabled:l}=L(e,s);l||0===n.clientHeight||(n.scrollHeight<=n.clientHeight?t.call(s):V(e))}const O={async mounted(e,t){const{instance:n,value:s}=t;m(s)||g(M,"'v-infinite-scroll' binding value must be a function"),await f();const{delay:l,immediate:r}=L(e,n),o=v(e,!0),a=o===window?document.documentElement:o,i=h(x.bind(null,e,s),l);if(o){if(e[M]={instance:n,container:o,containerEl:a,delay:l,cb:s,onScroll:i,lastScrollTop:a.scrollTop},r){const t=new MutationObserver(h(I.bind(null,e,s),50));e[M].observer=t,t.observe(e,{childList:!0,subtree:!0}),I(e,s)}o.addEventListener("scroll",i)}},unmounted(e){const{container:t,onScroll:n}=e[M];null==t||t.removeEventListener("scroll",n),V(e)},async updated(e){if(e[M]){const{containerEl:t,cb:n,observer:s}=e[M];t.clientHeight&&s&&I(e,n)}else await f()},install:e=>{e.directive("InfiniteScroll",O)}},z=O,C=e=>{const t=new Map;return e.filter((e=>!t.has(e.id)&&t.set(e.id,1)))};export{N as E,A as a,B as b,z as c,C as u};