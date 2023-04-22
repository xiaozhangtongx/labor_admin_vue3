import{r as e,Q as n,d as t,bF as o,aL as l,U as s,w as a,D as i,C as r,I as u,T as c,bG as d,t as v,M as b,aU as m,a2 as g,V as f,by as p,L as x,a1 as y,bn as C,bH as k}from"./index-c36cfae6.js";function w(m){let g;const f=e(!1),p=n({...m,originalPosition:"",originalOverflow:"",visible:!1});function x(){var e,n;null==(n=null==(e=w.$el)?void 0:e.parentNode)||n.removeChild(w.$el)}function y(){if(!f.value)return;const e=p.parent;f.value=!1,e.vLoadingAddClassList=void 0,function(){const e=p.parent,n=w.ns;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):(b(e,n.bm("parent","relative")),e.removeAttribute("loading-number")),b(e,n.bm("parent","hidden"))}x(),k.unmount()}()}const C=t({name:"ElLoading",setup(e,{expose:n}){const{ns:t}=o("loading"),d=l();return n({ns:t,zIndex:d}),()=>{const e=p.spinner||p.svg,n=s("svg",{class:"circular",viewBox:p.svgViewBox?p.svgViewBox:"0 0 50 50",...e?{innerHTML:e}:{}},[s("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),o=p.text?s("p",{class:t.b("text")},[p.text]):void 0;return s(c,{name:t.b("fade"),onAfterLeave:y},{default:a((()=>[i(r("div",{style:{backgroundColor:p.background||""},class:[t.b("mask"),p.customClass,p.fullscreen?"is-fullscreen":""]},[s("div",{class:t.b("spinner")},[n,o])]),[[u,p.visible]])]))})}}}),k=d(C),w=k.mount(document.createElement("div"));return{...v(p),setText:function(e){p.text=e},removeElLoadingChild:x,close:function(){var e;m.beforeClose&&!m.beforeClose()||(f.value=!0,clearTimeout(g),g=window.setTimeout(y,400),p.visible=!1,null==(e=m.closed)||e.call(m))},handleAfterLeave:y,vm:w,get $el(){return w.$el}}}let L;const h=function(e={}){if(!m)return;const n=A(e);if(n.fullscreen&&L)return L;const t=w({...n,closed:()=>{var e;null==(e=n.closed)||e.call(n),n.fullscreen&&(L=void 0)}});V(n,n.parent,t),$(n,n.parent,t),n.parent.vLoadingAddClassList=()=>$(n,n.parent,t);let o=n.parent.getAttribute("loading-number");return o=o?`${Number.parseInt(o)+1}`:"1",n.parent.setAttribute("loading-number",o),n.parent.appendChild(t.$el),g((()=>t.visible.value=n.visible)),n.fullscreen&&(L=t),t},A=e=>{var n,t,o,l;let s;return s=f(e.target)?null!=(n=document.querySelector(e.target))?n:document.body:e.target||document.body,{parent:s===document.body||e.body?document.body:s,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:s===document.body&&(null==(t=e.fullscreen)||t),lock:null!=(o=e.lock)&&o,customClass:e.customClass||"",visible:null==(l=e.visible)||l,target:s}},V=async(e,n,t)=>{const{nextZIndex:o}=t.vm.zIndex,l={};if(e.fullscreen)t.originalPosition.value=p(document.body,"position"),t.originalOverflow.value=p(document.body,"overflow"),l.zIndex=o();else if(e.parent===document.body){t.originalPosition.value=p(document.body,"position"),await g();for(const n of["top","left"]){const t="top"===n?"scrollTop":"scrollLeft";l[n]=e.target.getBoundingClientRect()[n]+document.body[t]+document.documentElement[t]-Number.parseInt(p(document.body,`margin-${n}`),10)+"px"}for(const n of["height","width"])l[n]=`${e.target.getBoundingClientRect()[n]}px`}else t.originalPosition.value=p(n,"position");for(const[s,a]of Object.entries(l))t.$el.style[s]=a},$=(e,n,t)=>{const o=t.vm.ns;["absolute","fixed","sticky"].includes(t.originalPosition.value)?b(n,o.bm("parent","relative")):x(n,o.bm("parent","relative")),e.fullscreen&&e.lock?x(n,o.bm("parent","hidden")):b(n,o.bm("parent","hidden"))},B=Symbol("ElLoading"),I=(n,t)=>{var o,l,s,a;const i=t.instance,r=e=>y(t.value)?t.value[e]:void 0,u=t=>(n=>{const t=f(n)&&(null==i?void 0:i[n])||n;return t?e(t):t})(r(t)||n.getAttribute(`element-loading-${k(t)}`)),c=null!=(o=r("fullscreen"))?o:t.modifiers.fullscreen,d={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:c,target:null!=(l=r("target"))?l:c?void 0:n,body:null!=(s=r("body"))?s:t.modifiers.body,lock:null!=(a=r("lock"))?a:t.modifiers.lock};n[B]={options:d,instance:h(d)}},T={mounted(e,n){n.value&&I(e,n)},updated(e,n){const t=e[B];n.oldValue!==n.value&&(n.value&&!n.oldValue?I(e,n):n.value&&n.oldValue?y(n.value)&&((e,n)=>{for(const t of Object.keys(n))C(n[t])&&(n[t].value=e[t])})(n.value,t.options):null==t||t.instance.close())},unmounted(e){var n;null==(n=e[B])||n.instance.close()}};export{T as v};
