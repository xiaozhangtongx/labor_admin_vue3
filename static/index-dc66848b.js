import{cg as e,c0 as t,bs as a,bl as o,bm as n,ch as r,bq as s,bj as l,ci as i,cj as u,cc as c,ck as p,aS as d,r as f,a7 as v,b,a_ as y,g as m,i as h,a0 as g,V as x,d as w,aR as j,b4 as _,y as S,u as k,aL as z,bd as A,cl as I,cm as C,Z as O,R as E,a2 as P,o as F,a3 as M,D as $,I as B,a as V,c as R,H as T,W as N,n as W,f as U,e as D,k as H,l as q,w as L,m as K,E as Z,F as G,C as J,aZ as Q,G as X,bW as Y,q as ee,aa as te,_ as ae,a1 as oe,s as ne}from"./index-b8a3a250.js";import{U as re,i as se,d as le}from"./focus-trap-304145bb.js";import{u as ie}from"./index-a127c8ab.js";import{a as ue,c as ce,b as pe,d as de}from"./el-button-7231a80e.js";const fe=e(t,"WeakMap");var ve=9007199254740991;function be(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=ve}function ye(e){return null!=e&&be(e.length)&&!a(e)}var me=Object.prototype;function he(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||me)}var ge="[object Arguments]";function xe(e){return o(e)&&n(e)==ge}var we=Object.prototype,je=we.hasOwnProperty,_e=we.propertyIsEnumerable;const Se=xe(function(){return arguments}())?xe:function(e){return o(e)&&je.call(e,"callee")&&!_e.call(e,"callee")};var ke="object"==typeof exports&&exports&&!exports.nodeType&&exports,ze=ke&&"object"==typeof module&&module&&!module.nodeType&&module,Ae=ze&&ze.exports===ke?t.Buffer:void 0;const Ie=(Ae?Ae.isBuffer:void 0)||function(){return!1};var Ce={};function Oe(e){return function(t){return e(t)}}Ce["[object Float32Array]"]=Ce["[object Float64Array]"]=Ce["[object Int8Array]"]=Ce["[object Int16Array]"]=Ce["[object Int32Array]"]=Ce["[object Uint8Array]"]=Ce["[object Uint8ClampedArray]"]=Ce["[object Uint16Array]"]=Ce["[object Uint32Array]"]=!0,Ce["[object Arguments]"]=Ce["[object Array]"]=Ce["[object ArrayBuffer]"]=Ce["[object Boolean]"]=Ce["[object DataView]"]=Ce["[object Date]"]=Ce["[object Error]"]=Ce["[object Function]"]=Ce["[object Map]"]=Ce["[object Number]"]=Ce["[object Object]"]=Ce["[object RegExp]"]=Ce["[object Set]"]=Ce["[object String]"]=Ce["[object WeakMap]"]=!1;var Ee="object"==typeof exports&&exports&&!exports.nodeType&&exports,Pe=Ee&&"object"==typeof module&&module&&!module.nodeType&&module,Fe=Pe&&Pe.exports===Ee&&r.process;const Me=function(){try{var e=Pe&&Pe.require&&Pe.require("util").types;return e||Fe&&Fe.binding&&Fe.binding("util")}catch(t){}}();var $e=Me&&Me.isTypedArray;const Be=$e?Oe($e):function(e){return o(e)&&be(e.length)&&!!Ce[n(e)]};var Ve=Object.prototype.hasOwnProperty;function Re(e,t){var a=s(e),o=!a&&Se(e),n=!a&&!o&&Ie(e),r=!a&&!o&&!n&&Be(e),i=a||o||n||r,u=i?function(e,t){for(var a=-1,o=Array(e);++a<e;)o[a]=t(a);return o}(e.length,String):[],c=u.length;for(var p in e)!t&&!Ve.call(e,p)||i&&("length"==p||n&&("offset"==p||"parent"==p)||r&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||l(p,c))||u.push(p);return u}function Te(e,t){return function(a){return e(t(a))}}const Ne=Te(Object.keys,Object);var We=Object.prototype.hasOwnProperty;function Ue(e){return ye(e)?Re(e):function(e){if(!he(e))return Ne(e);var t=[];for(var a in Object(e))We.call(e,a)&&"constructor"!=a&&t.push(a);return t}(e)}function De(e,t){for(var a=-1,o=t.length,n=e.length;++a<o;)e[n+a]=t[a];return e}var He=200;function qe(e){var t=this.__data__=new i(e);this.size=t.size}function Le(){return[]}qe.prototype.clear=function(){this.__data__=new i,this.size=0},qe.prototype.delete=function(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a},qe.prototype.get=function(e){return this.__data__.get(e)},qe.prototype.has=function(e){return this.__data__.has(e)},qe.prototype.set=function(e,t){var a=this.__data__;if(a instanceof i){var o=a.__data__;if(!u||o.length<He-1)return o.push([e,t]),this.size=++a.size,this;a=this.__data__=new c(o)}return a.set(e,t),this.size=a.size,this};var Ke=Object.prototype.propertyIsEnumerable,Ze=Object.getOwnPropertySymbols;const Ge=Ze?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var a=-1,o=null==e?0:e.length,n=0,r=[];++a<o;){var s=e[a];t(s,a,e)&&(r[n++]=s)}return r}(Ze(e),(function(t){return Ke.call(e,t)})))}:Le;function Je(e,t,a){var o=t(e);return s(e)?o:De(o,a(e))}function Qe(e){return Je(e,Ue,Ge)}const Xe=e(t,"DataView");const Ye=e(t,"Promise");const et=e(t,"Set");var tt="[object Map]",at="[object Promise]",ot="[object Set]",nt="[object WeakMap]",rt="[object DataView]",st=p(Xe),lt=p(u),it=p(Ye),ut=p(et),ct=p(fe),pt=n;(Xe&&pt(new Xe(new ArrayBuffer(1)))!=rt||u&&pt(new u)!=tt||Ye&&pt(Ye.resolve())!=at||et&&pt(new et)!=ot||fe&&pt(new fe)!=nt)&&(pt=function(e){var t=n(e),a="[object Object]"==t?e.constructor:void 0,o=a?p(a):"";if(o)switch(o){case st:return rt;case lt:return tt;case it:return at;case ut:return ot;case ct:return nt}return t});const dt=pt;const ft=t.Uint8Array,vt=()=>d&&/firefox/i.test(window.navigator.userAgent),bt=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e);let yt;const mt=`\n  height:0 !important;\n  visibility:hidden !important;\n  ${vt()?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,ht=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function gt(e,t=1,a){var o;yt||(yt=document.createElement("textarea"),document.body.appendChild(yt));const{paddingSize:n,borderSize:r,boxSizing:s,contextStyle:l}=function(e){const t=window.getComputedStyle(e),a=t.getPropertyValue("box-sizing"),o=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),n=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:ht.map((e=>`${e}:${t.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:n,boxSizing:a}}(e);yt.setAttribute("style",`${l};${mt}`),yt.value=e.value||e.placeholder||"";let i=yt.scrollHeight;const u={};"border-box"===s?i+=r:"content-box"===s&&(i-=n),yt.value="";const c=yt.scrollHeight-n;if(v(t)){let e=c*t;"border-box"===s&&(e=e+n+r),i=Math.max(e,i),u.minHeight=`${e}px`}if(v(a)){let e=c*a;"border-box"===s&&(e=e+n+r),i=Math.min(e,i)}return u.height=`${i}px`,null==(o=yt.parentNode)||o.removeChild(yt),yt=void 0,u}const xt=b({id:{type:String,default:void 0},size:y,disabled:Boolean,modelValue:{type:m([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:m([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:h},prefixIcon:{type:h},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:m([Object,Array,String]),default:()=>g({})}}),wt={[re]:e=>x(e),input:e=>x(e),change:e=>x(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},jt=["role"],_t=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],St=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],kt=w({name:"ElInput",inheritAttrs:!1});const zt=ne(ae(w({...kt,props:xt,emits:wt,setup(e,{expose:t,emit:a}){const o=e,n=j(),r=_(),s=S((()=>{const e={};return"combobox"===o.containerRole&&(e["aria-haspopup"]=n["aria-haspopup"],e["aria-owns"]=n["aria-owns"],e["aria-expanded"]=n["aria-expanded"]),e})),l=S((()=>["textarea"===o.type?h.b():m.b(),m.m(b.value),m.is("disabled",y.value),m.is("exceed",Ie.value),{[m.b("group")]:r.prepend||r.append,[m.bm("group","append")]:r.append,[m.bm("group","prepend")]:r.prepend,[m.m("prefix")]:r.prefix||o.prefixIcon,[m.m("suffix")]:r.suffix||o.suffixIcon||o.clearable||o.showPassword,[m.bm("suffix","password-clear")]:Se.value&&ke.value},n.class])),i=S((()=>[m.e("wrapper"),m.is("focus",w.value)])),u=ie({excludeKeys:S((()=>Object.keys(s.value)))}),{form:c,formItem:p}=ue(),{inputId:v}=ce(o,{formItemContext:p}),b=pe(),y=de(),m=k("input"),h=k("textarea"),g=z(),x=z(),w=f(!1),ae=f(!1),ne=f(!1),fe=f(!1),ve=f(),be=z(o.inputStyle),ye=S((()=>g.value||x.value)),me=S((()=>{var e;return null!=(e=null==c?void 0:c.statusIcon)&&e})),he=S((()=>(null==p?void 0:p.validateState)||"")),ge=S((()=>he.value&&A[he.value])),xe=S((()=>fe.value?I:C)),we=S((()=>[n.style,o.inputStyle])),je=S((()=>[o.inputStyle,be.value,{resize:o.resize}])),_e=S((()=>se(o.modelValue)?"":String(o.modelValue))),Se=S((()=>o.clearable&&!y.value&&!o.readonly&&!!_e.value&&(w.value||ae.value))),ke=S((()=>o.showPassword&&!y.value&&!o.readonly&&!!_e.value&&(!!_e.value||w.value))),ze=S((()=>o.showWordLimit&&!!u.value.maxlength&&("text"===o.type||"textarea"===o.type)&&!y.value&&!o.readonly&&!o.showPassword)),Ae=S((()=>_e.value.length)),Ie=S((()=>!!ze.value&&Ae.value>Number(u.value.maxlength))),Ce=S((()=>!!r.suffix||!!o.suffixIcon||Se.value||o.showPassword||ze.value||!!he.value&&me.value)),[Oe,Ee]=function(e){const t=f();return[function(){if(null==e.value)return;const{selectionStart:a,selectionEnd:o,value:n}=e.value;if(null==a||null==o)return;const r=n.slice(0,Math.max(0,a)),s=n.slice(Math.max(0,o));t.value={selectionStart:a,selectionEnd:o,value:n,beforeTxt:r,afterTxt:s}},function(){if(null==e.value||null==t.value)return;const{value:a}=e.value,{beforeTxt:o,afterTxt:n,selectionStart:r}=t.value;if(null==o||null==n||null==r)return;let s=a.length;if(a.endsWith(n))s=a.length-n.length;else if(a.startsWith(o))s=o.length;else{const e=o[r-1],t=a.indexOf(e,r-1);-1!==t&&(s=t+1)}e.value.setSelectionRange(s,s)}]}(g);O(x,(e=>{if(!ze.value||"both"!==o.resize)return;const t=e[0],{width:a}=t.contentRect;ve.value={right:`calc(100% - ${a+15+6}px)`}}));const Pe=()=>{const{type:e,autosize:t}=o;if(d&&"textarea"===e&&x.value)if(t){const e=oe(t)?t.minRows:void 0,a=oe(t)?t.maxRows:void 0;be.value={...gt(x.value,e,a)}}else be.value={minHeight:gt(x.value).minHeight}},Fe=()=>{const e=ye.value;e&&e.value!==_e.value&&(e.value=_e.value)},Me=async e=>{Oe();let{value:t}=e.target;o.formatter&&(t=o.parser?o.parser(t):t,t=o.formatter(t)),ne.value||(t!==_e.value?(a(re,t),a("input",t),await P(),Fe(),Ee()):Fe())},$e=e=>{a("change",e.target.value)},Be=e=>{a("compositionstart",e),ne.value=!0},Ve=e=>{var t;a("compositionupdate",e);const o=null==(t=e.target)?void 0:t.value,n=o[o.length-1]||"";ne.value=!bt(n)},Re=e=>{a("compositionend",e),ne.value&&(ne.value=!1,Me(e))},Te=()=>{fe.value=!fe.value,Ne()},Ne=async()=>{var e;await P(),null==(e=ye.value)||e.focus()},We=e=>{w.value=!0,a("focus",e)},Ue=e=>{var t;w.value=!1,a("blur",e),o.validateEvent&&(null==(t=null==p?void 0:p.validate)||t.call(p,"blur").catch((e=>le())))},De=e=>{ae.value=!1,a("mouseleave",e)},He=e=>{ae.value=!0,a("mouseenter",e)},qe=e=>{a("keydown",e)},Le=()=>{a(re,""),a("change",""),a("clear"),a("input","")};return E((()=>o.modelValue),(()=>{var e;P((()=>Pe())),o.validateEvent&&(null==(e=null==p?void 0:p.validate)||e.call(p,"change").catch((e=>le())))})),E(_e,(()=>Fe())),E((()=>o.type),(async()=>{await P(),Fe(),Pe()})),F((()=>{!o.formatter&&o.parser,Fe(),P(Pe)})),t({input:g,textarea:x,ref:ye,textareaStyle:je,autosize:M(o,"autosize"),focus:Ne,blur:()=>{var e;return null==(e=ye.value)?void 0:e.blur()},select:()=>{var e;null==(e=ye.value)||e.select()},clear:Le,resizeTextarea:Pe}),(e,t)=>$((V(),R("div",G(U(s),{class:U(l),style:U(we),role:e.containerRole,onMouseenter:He,onMouseleave:De}),[T(" input "),"textarea"!==e.type?(V(),R(N,{key:0},[T(" prepend slot "),e.$slots.prepend?(V(),R("div",{key:0,class:W(U(m).be("group","prepend"))},[D(e.$slots,"prepend")],2)):T("v-if",!0),H("div",{class:W(U(i))},[T(" prefix slot "),e.$slots.prefix||e.prefixIcon?(V(),R("span",{key:0,class:W(U(m).e("prefix"))},[H("span",{class:W(U(m).e("prefix-inner")),onClick:Ne},[D(e.$slots,"prefix"),e.prefixIcon?(V(),q(U(Z),{key:0,class:W(U(m).e("icon"))},{default:L((()=>[(V(),q(K(e.prefixIcon)))])),_:1},8,["class"])):T("v-if",!0)],2)],2)):T("v-if",!0),H("input",G({id:U(v),ref_key:"input",ref:g,class:U(m).e("inner")},U(u),{type:e.showPassword?fe.value?"text":"password":e.type,disabled:U(y),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:o.form,onCompositionstart:Be,onCompositionupdate:Ve,onCompositionend:Re,onInput:Me,onFocus:We,onBlur:Ue,onChange:$e,onKeydown:qe}),null,16,_t),T(" suffix slot "),U(Ce)?(V(),R("span",{key:1,class:W(U(m).e("suffix"))},[H("span",{class:W(U(m).e("suffix-inner")),onClick:Ne},[U(Se)&&U(ke)&&U(ze)?T("v-if",!0):(V(),R(N,{key:0},[D(e.$slots,"suffix"),e.suffixIcon?(V(),q(U(Z),{key:0,class:W(U(m).e("icon"))},{default:L((()=>[(V(),q(K(e.suffixIcon)))])),_:1},8,["class"])):T("v-if",!0)],64)),U(Se)?(V(),q(U(Z),{key:1,class:W([U(m).e("icon"),U(m).e("clear")]),onMousedown:X(U(Y),["prevent"]),onClick:Le},{default:L((()=>[J(U(Q))])),_:1},8,["class","onMousedown"])):T("v-if",!0),U(ke)?(V(),q(U(Z),{key:2,class:W([U(m).e("icon"),U(m).e("password")]),onClick:Te},{default:L((()=>[(V(),q(K(U(xe))))])),_:1},8,["class"])):T("v-if",!0),U(ze)?(V(),R("span",{key:3,class:W(U(m).e("count"))},[H("span",{class:W(U(m).e("count-inner"))},ee(U(Ae))+" / "+ee(U(u).maxlength),3)],2)):T("v-if",!0),U(he)&&U(ge)&&U(me)?(V(),q(U(Z),{key:4,class:W([U(m).e("icon"),U(m).e("validateIcon"),U(m).is("loading","validating"===U(he))])},{default:L((()=>[(V(),q(K(U(ge))))])),_:1},8,["class"])):T("v-if",!0)],2)],2)):T("v-if",!0)],2),T(" append slot "),e.$slots.append?(V(),R("div",{key:1,class:W(U(m).be("group","append"))},[D(e.$slots,"append")],2)):T("v-if",!0)],64)):(V(),R(N,{key:1},[T(" textarea "),H("textarea",G({id:U(v),ref_key:"textarea",ref:x,class:U(h).e("inner")},U(u),{tabindex:e.tabindex,disabled:U(y),readonly:e.readonly,autocomplete:e.autocomplete,style:U(je),"aria-label":e.label,placeholder:e.placeholder,form:o.form,onCompositionstart:Be,onCompositionupdate:Ve,onCompositionend:Re,onInput:Me,onFocus:We,onBlur:Ue,onChange:$e,onKeydown:qe}),null,16,St),U(ze)?(V(),R("span",{key:0,style:te(ve.value),class:W(U(m).e("count"))},ee(U(Ae))+" / "+ee(U(u).maxlength),7)):T("v-if",!0)],64))],16,jt)),[[B,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{zt as E,qe as S,ft as U,bt as a,ye as b,Ie as c,Be as d,Se as e,be as f,De as g,Qe as h,vt as i,dt as j,Ue as k,he as l,Re as m,Ge as n,Te as o,Je as p,Me as q,Oe as r,Le as s};