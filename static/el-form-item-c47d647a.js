import{u as e,b as r,f as t}from"./use-form-common-props-87a080ba.js";import{a$ as n,b8 as a,cr as i,b7 as o,cc as s,cm as u,b2 as l,b as f,bW as c,g as d,aE as p,V as v,a5 as y,r as g,y as h,d as m,u as b,R as j,p as w,Q as q,t as F,a as O,c as x,e as A,n as E,f as P,_ as S,aV as k,j as R,o as $,S as I,aR as M,Z as B,C as W,W as _,a2 as V,br as D,cs as C,A as N,bf as z,w as L,l as T,m as U,aa as Z,a4 as J,q as G,H,k as Q,bN as Y,s as K,v as X}from"./index-7b11e248.js";import{d as ee,t as re}from"./error-c58402b8.js";import{c as te}from"./el-button-a9a247f8.js";import{l as ne,b as ae,m as ie,o as oe,k as se,n as ue,s as le,g as fe,p as ce,U as de,j as pe,q as ve,r as ye,c as ge,S as he,h as me}from"./index-26c376cb.js";var be=Object.create;const je=function(){function e(){}return function(r){if(!n(r))return{};if(be)return be(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function we(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function qe(e,r,t,n){var o=!t;t||(t={});for(var s=-1,u=r.length;++s<u;){var l=r[s],f=n?n(t[l],e[l],l,t,e):void 0;void 0===f&&(f=e[l]),o?a(t,l,f):i(t,l,f)}return t}var Fe=Object.prototype.hasOwnProperty;function Oe(e){if(!n(e))return function(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}(e);var r=ne(e),t=[];for(var a in e)("constructor"!=a||!r&&Fe.call(e,a))&&t.push(a);return t}function xe(e){return ae(e)?ie(e,!0):Oe(e)}const Ae=oe(Object.getPrototypeOf,Object);function Ee(){if(!arguments.length)return[];var e=arguments[0];return o(e)?e:[e]}var Pe="object"==typeof exports&&exports&&!exports.nodeType&&exports,Se=Pe&&"object"==typeof module&&module&&!module.nodeType&&module,ke=Se&&Se.exports===Pe?s.Buffer:void 0,Re=ke?ke.allocUnsafe:void 0;function $e(e,r){if(r)return e.slice();var t=e.length,n=Re?Re(t):new e.constructor(t);return e.copy(n),n}const Ie=Object.getOwnPropertySymbols?function(e){for(var r=[];e;)fe(r,ue(e)),e=Ae(e);return r}:le;function Me(e){return ce(e,xe,Ie)}var Be=Object.prototype.hasOwnProperty;function We(e){var r=new e.constructor(e.byteLength);return new de(r).set(new de(e)),r}var _e=/\w*$/;var Ve=u?u.prototype:void 0,De=Ve?Ve.valueOf:void 0;function Ce(e,r){var t=r?We(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Ne="[object Boolean]",ze="[object Date]",Le="[object Map]",Te="[object Number]",Ue="[object RegExp]",Ze="[object Set]",Je="[object String]",Ge="[object Symbol]",He="[object ArrayBuffer]",Qe="[object DataView]",Ye="[object Float32Array]",Ke="[object Float64Array]",Xe="[object Int8Array]",er="[object Int16Array]",rr="[object Int32Array]",tr="[object Uint8Array]",nr="[object Uint8ClampedArray]",ar="[object Uint16Array]",ir="[object Uint32Array]";function or(e,r,t){var n,a,i,o=e.constructor;switch(r){case He:return We(e);case Ne:case ze:return new o(+e);case Qe:return function(e,r){var t=r?We(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}(e,t);case Ye:case Ke:case Xe:case er:case rr:case tr:case nr:case ar:case ir:return Ce(e,t);case Le:return new o;case Te:case Je:return new o(e);case Ue:return(i=new(a=e).constructor(a.source,_e.exec(a))).lastIndex=a.lastIndex,i;case Ze:return new o;case Ge:return n=e,De?Object(De.call(n)):{}}}function sr(e){return"function"!=typeof e.constructor||ne(e)?{}:je(Ae(e))}var ur="[object Map]";var lr=ve&&ve.isMap;const fr=lr?ye(lr):function(e){return l(e)&&pe(e)==ur};var cr="[object Set]";var dr=ve&&ve.isSet;const pr=dr?ye(dr):function(e){return l(e)&&pe(e)==cr};var vr=1,yr=2,gr=4,hr="[object Arguments]",mr="[object Function]",br="[object GeneratorFunction]",jr="[object Object]",wr={};function qr(e,r,t,a,s,u){var l,f=r&vr,c=r&yr,d=r&gr;if(t&&(l=s?t(e,a,s,u):t(e)),void 0!==l)return l;if(!n(e))return e;var p=o(e);if(p){if(l=function(e){var r=e.length,t=new e.constructor(r);return r&&"string"==typeof e[0]&&Be.call(e,"index")&&(t.index=e.index,t.input=e.input),t}(e),!f)return we(e,l)}else{var v=pe(e),y=v==mr||v==br;if(ge(e))return $e(e,f);if(v==jr||v==hr||y&&!s){if(l=c||y?{}:sr(e),!f)return c?function(e,r){return qe(e,Ie(e),r)}(e,function(e,r){return e&&qe(r,xe(r),e)}(l,e)):function(e,r){return qe(e,ue(e),r)}(e,function(e,r){return e&&qe(r,se(r),e)}(l,e))}else{if(!wr[v])return s?e:{};l=or(e,v,f)}}u||(u=new he);var g=u.get(e);if(g)return g;u.set(e,l),pr(e)?e.forEach((function(n){l.add(qr(n,r,t,n,e,u))})):fr(e)&&e.forEach((function(n,a){l.set(a,qr(n,r,t,a,e,u))}));var h=p?void 0:(d?c?Me:me:c?xe:se)(e);return function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n&&!1!==r(e[t],t,e););}(h||e,(function(n,a){h&&(n=e[a=n]),i(l,a,qr(n,r,t,a,e,u))})),l}wr[hr]=wr["[object Array]"]=wr["[object ArrayBuffer]"]=wr["[object DataView]"]=wr["[object Boolean]"]=wr["[object Date]"]=wr["[object Float32Array]"]=wr["[object Float64Array]"]=wr["[object Int8Array]"]=wr["[object Int16Array]"]=wr["[object Int32Array]"]=wr["[object Map]"]=wr["[object Number]"]=wr[jr]=wr["[object RegExp]"]=wr["[object Set]"]=wr["[object String]"]=wr["[object Symbol]"]=wr["[object Uint8Array]"]=wr["[object Uint8ClampedArray]"]=wr["[object Uint16Array]"]=wr["[object Uint32Array]"]=!0,wr["[object Error]"]=wr[mr]=wr["[object WeakMap]"]=!1;var Fr=4;function Or(e){return qr(e,Fr)}const xr=f({size:{type:String,values:c},disabled:Boolean}),Ar=f({...xr,model:Object,rules:{type:d(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),Er={validate:(e,r,t)=>(p(e)||v(e))&&y(r)&&v(t)};function Pr(){const e=g([]),r=h((()=>{if(!e.value.length)return"0";const r=Math.max(...e.value);return r?`${r}px`:""}));function t(t){const n=e.value.indexOf(t);return-1===n&&r.value,n}return{autoLabelWidth:r,registerLabelWidth:function(r,n){if(r&&n){const a=t(n);e.value.splice(a,1,r)}else r&&e.value.push(r)},deregisterLabelWidth:function(r){const n=t(r);n>-1&&e.value.splice(n,1)}}}const Sr=(e,r)=>{const t=Ee(r);return t.length>0?e.filter((e=>e.prop&&t.includes(e.prop))):e},kr=m({name:"ElForm"});var Rr=S(m({...kr,props:Ar,emits:Er,setup(t,{expose:n,emit:a}){const i=t,o=[],s=e(),u=b("form"),l=h((()=>{const{labelPosition:e,inline:r}=i;return[u.b(),u.m(s.value||"default"),{[u.m(`label-${e}`)]:e,[u.m("inline")]:r}]})),f=(e=[])=>{i.model&&Sr(o,e).forEach((e=>e.resetField()))},c=(e=[])=>{Sr(o,e).forEach((e=>e.clearValidate()))},d=h((()=>!!i.model)),p=async e=>y(void 0,e),v=async(e=[])=>{if(!d.value)return!1;const r=(e=>{if(0===o.length)return[];const r=Sr(o,e);return r.length?r:[]})(e);if(0===r.length)return!0;let t={};for(const a of r)try{await a.validate("")}catch(n){t={...t,...n}}return 0===Object.keys(t).length||Promise.reject(t)},y=async(e=[],r)=>{const t=!k(r);try{const t=await v(e);return!0===t&&(null==r||r(t)),t}catch(n){if(n instanceof Error)throw n;const e=n;return i.scrollToError&&g(Object.keys(e)[0]),null==r||r(!1,e),t&&Promise.reject(e)}},g=e=>{var r;const t=Sr(o,e)[0];t&&(null==(r=t.$el)||r.scrollIntoView())};return j((()=>i.rules),(()=>{i.validateOnRuleChange&&p().catch((e=>ee()))}),{deep:!0}),w(r,q({...F(i),emit:a,resetFields:f,clearValidate:c,validateField:y,addField:e=>{o.push(e)},removeField:e=>{e.prop&&o.splice(o.indexOf(e),1)},...Pr()})),n({validate:p,validateField:y,resetFields:f,clearValidate:c,scrollToField:g}),(e,r)=>(O(),x("form",{class:E(P(l))},[A(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$r.apply(this,arguments)}function Ir(e){return(Ir=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Mr(e,r){return(Mr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e})(e,r)}function Br(e,r,t){return(Br=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,r,t){var n=[null];n.push.apply(n,r);var a=new(Function.bind.apply(e,n));return t&&Mr(a,t.prototype),a}).apply(null,arguments)}function Wr(e){var r="function"==typeof Map?new Map:void 0;return Wr=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return Br(e,arguments,Ir(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Mr(n,e)},Wr(e)}var _r=/%[sdj%]/g,Vr=function(){};function Dr(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function Cr(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=0,i=t.length;return"function"==typeof e?e.apply(null,t):"string"==typeof e?e.replace(_r,(function(e){if("%%"===e)return"%";if(a>=i)return e;switch(e){case"%s":return String(t[a++]);case"%d":return Number(t[a++]);case"%j":try{return JSON.stringify(t[a++])}catch(r){return"[Circular]"}break;default:return e}})):e}function Nr(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function zr(e,r,t){var n=0,a=e.length;!function i(o){if(o&&o.length)t(o);else{var s=n;n+=1,s<a?r(e[s],i):t([])}}([])}"undefined"!=typeof process&&process.env;var Lr=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,Mr(r,t),n}(Wr(Error));function Tr(e,r,t,n,a){if(r.first){var i=new Promise((function(r,i){var o=function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e);zr(o,t,(function(e){return n(e),e.length?i(new Lr(e,Dr(e))):r(a)}))}));return i.catch((function(e){return e})),i}var o=!0===r.firstFields?Object.keys(e):r.firstFields||[],s=Object.keys(e),u=s.length,l=0,f=[],c=new Promise((function(r,i){var c=function(e){if(f.push.apply(f,e),++l===u)return n(f),f.length?i(new Lr(f,Dr(f))):r(a)};s.length||(n(f),r(a)),s.forEach((function(r){var n=e[r];-1!==o.indexOf(r)?zr(n,t,c):function(e,r,t){var n=[],a=0,i=e.length;function o(e){n.push.apply(n,e||[]),++a===i&&t(n)}e.forEach((function(e){r(e,o)}))}(n,t,c)}))}));return c.catch((function(e){return e})),c}function Ur(e,r){return function(t){var n,a;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(a=t)&&void 0!==a.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function Zr(e,r){if(r)for(var t in r)if(r.hasOwnProperty(t)){var n=r[t];"object"==typeof n&&"object"==typeof e[t]?e[t]=$r({},e[t],n):e[t]=n}return e}var Jr,Gr=function(e,r,t,n,a,i){!e.required||t.hasOwnProperty(e.field)&&!Nr(r,i||e.type)||n.push(Cr(a.messages.required,e.fullField))},Hr=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,Qr=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,Yr={integer:function(e){return Yr.number(e)&&parseInt(e,10)===e},float:function(e){return Yr.number(e)&&!Yr.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(r){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!Yr.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(Hr)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(Jr)return Jr;var e="[a-fA-F\\d:]",r=function(r){return r&&r.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=("\n(?:\n(?:"+n+":){7}(?:"+n+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+n+":){6}(?:"+t+"|:"+n+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+n+":){5}(?::"+t+"|(?::"+n+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+n+"){0,5}:"+t+"|(?::"+n+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+t+"$)|(?:^"+a+"$)"),o=new RegExp("^"+t+"$"),s=new RegExp("^"+a+"$"),u=function(e){return e&&e.exact?i:new RegExp("(?:"+r(e)+t+r(e)+")|(?:"+r(e)+a+r(e)+")","g")};u.v4=function(e){return e&&e.exact?o:new RegExp(""+r(e)+t+r(e),"g")},u.v6=function(e){return e&&e.exact?s:new RegExp(""+r(e)+a+r(e),"g")};var l=u.v4().source,f=u.v6().source;return Jr=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+l+"|"+f+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(Qr)}},Kr="enum",Xr={required:Gr,whitespace:function(e,r,t,n,a){(/^\s+$/.test(r)||""===r)&&n.push(Cr(a.messages.whitespace,e.fullField))},type:function(e,r,t,n,a){if(e.required&&void 0===r)Gr(e,r,t,n,a);else{var i=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(i)>-1?Yr[i](r)||n.push(Cr(a.messages.types[i],e.fullField,e.type)):i&&typeof r!==e.type&&n.push(Cr(a.messages.types[i],e.fullField,e.type))}},range:function(e,r,t,n,a){var i="number"==typeof e.len,o="number"==typeof e.min,s="number"==typeof e.max,u=r,l=null,f="number"==typeof r,c="string"==typeof r,d=Array.isArray(r);if(f?l="number":c?l="string":d&&(l="array"),!l)return!1;d&&(u=r.length),c&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),i?u!==e.len&&n.push(Cr(a.messages[l].len,e.fullField,e.len)):o&&!s&&u<e.min?n.push(Cr(a.messages[l].min,e.fullField,e.min)):s&&!o&&u>e.max?n.push(Cr(a.messages[l].max,e.fullField,e.max)):o&&s&&(u<e.min||u>e.max)&&n.push(Cr(a.messages[l].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,a){e[Kr]=Array.isArray(e[Kr])?e[Kr]:[],-1===e[Kr].indexOf(r)&&n.push(Cr(a.messages[Kr],e.fullField,e[Kr].join(", ")))},pattern:function(e,r,t,n,a){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(Cr(a.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(Cr(a.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},et=function(e,r,t,n,a){var i=e.type,o=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r,i)&&!e.required)return t();Xr.required(e,r,n,o,a,i),Nr(r,i)||Xr.type(e,r,n,o,a)}t(o)},rt={string:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r,"string")&&!e.required)return t();Xr.required(e,r,n,i,a,"string"),Nr(r,"string")||(Xr.type(e,r,n,i,a),Xr.range(e,r,n,i,a),Xr.pattern(e,r,n,i,a),!0===e.whitespace&&Xr.whitespace(e,r,n,i,a))}t(i)},method:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a),void 0!==r&&Xr.type(e,r,n,i,a)}t(i)},number:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a),void 0!==r&&(Xr.type(e,r,n,i,a),Xr.range(e,r,n,i,a))}t(i)},boolean:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a),void 0!==r&&Xr.type(e,r,n,i,a)}t(i)},regexp:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a),Nr(r)||Xr.type(e,r,n,i,a)}t(i)},integer:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a),void 0!==r&&(Xr.type(e,r,n,i,a),Xr.range(e,r,n,i,a))}t(i)},float:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a),void 0!==r&&(Xr.type(e,r,n,i,a),Xr.range(e,r,n,i,a))}t(i)},array:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();Xr.required(e,r,n,i,a,"array"),null!=r&&(Xr.type(e,r,n,i,a),Xr.range(e,r,n,i,a))}t(i)},object:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a),void 0!==r&&Xr.type(e,r,n,i,a)}t(i)},enum:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a),void 0!==r&&Xr.enum(e,r,n,i,a)}t(i)},pattern:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r,"string")&&!e.required)return t();Xr.required(e,r,n,i,a),Nr(r,"string")||Xr.pattern(e,r,n,i,a)}t(i)},date:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r,"date")&&!e.required)return t();var o;if(Xr.required(e,r,n,i,a),!Nr(r,"date"))o=r instanceof Date?r:new Date(r),Xr.type(e,o,n,i,a),o&&Xr.range(e,o.getTime(),n,i,a)}t(i)},url:et,hex:et,email:et,required:function(e,r,t,n,a){var i=[],o=Array.isArray(r)?"array":typeof r;Xr.required(e,r,n,i,a,o),t(i)},any:function(e,r,t,n,a){var i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(Nr(r)&&!e.required)return t();Xr.required(e,r,n,i,a)}t(i)}};function tt(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var nt=tt(),at=function(){function e(e){this.rules=null,this._messages=nt,this.define(e)}var r=e.prototype;return r.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},r.messages=function(e){return e&&(this._messages=Zr(tt(),e)),this._messages},r.validate=function(r,t,n){var a=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var i=r,o=t,s=n;if("function"==typeof o&&(s=o,o={}),!this.rules||0===Object.keys(this.rules).length)return s&&s(null,i),Promise.resolve(i);if(o.messages){var u=this.messages();u===nt&&(u=tt()),Zr(u,o.messages),o.messages=u}else o.messages=this.messages();var l={};(o.keys||Object.keys(this.rules)).forEach((function(e){var t=a.rules[e],n=i[e];t.forEach((function(t){var o=t;"function"==typeof o.transform&&(i===r&&(i=$r({},i)),n=i[e]=o.transform(n)),(o="function"==typeof o?{validator:o}:$r({},o)).validator=a.getValidationMethod(o),o.validator&&(o.field=e,o.fullField=o.fullField||e,o.type=a.getType(o),l[e]=l[e]||[],l[e].push({rule:o,value:n,source:i,field:e}))}))}));var f={};return Tr(l,o,(function(r,t){var n,a=r.rule,s=!("object"!==a.type&&"array"!==a.type||"object"!=typeof a.fields&&"object"!=typeof a.defaultField);function u(e,r){return $r({},r,{fullField:a.fullField+"."+e,fullFields:a.fullFields?[].concat(a.fullFields,[e]):[e]})}function l(n){void 0===n&&(n=[]);var l=Array.isArray(n)?n:[n];!o.suppressWarning&&l.length&&e.warning("async-validator:",l),l.length&&void 0!==a.message&&(l=[].concat(a.message));var c=l.map(Ur(a,i));if(o.first&&c.length)return f[a.field]=1,t(c);if(s){if(a.required&&!r.value)return void 0!==a.message?c=[].concat(a.message).map(Ur(a,i)):o.error&&(c=[o.error(a,Cr(o.messages.required,a.field))]),t(c);var d={};a.defaultField&&Object.keys(r.value).map((function(e){d[e]=a.defaultField})),d=$r({},d,r.rule.fields);var p={};Object.keys(d).forEach((function(e){var r=d[e],t=Array.isArray(r)?r:[r];p[e]=t.map(u.bind(null,e))}));var v=new e(p);v.messages(o.messages),r.rule.options&&(r.rule.options.messages=o.messages,r.rule.options.error=o.error),v.validate(r.value,r.rule.options||o,(function(e){var r=[];c&&c.length&&r.push.apply(r,c),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(c)}if(s=s&&(a.required||!a.required&&r.value),a.field=r.field,a.asyncValidator)n=a.asyncValidator(a,r.value,l,r.source,o);else if(a.validator){try{n=a.validator(a,r.value,l,r.source,o)}catch(c){null==console.error||console.error(c),o.suppressValidatorError||setTimeout((function(){throw c}),0),l(c.message)}!0===n?l():!1===n?l("function"==typeof a.message?a.message(a.fullField||a.field):a.message||(a.fullField||a.field)+" fails"):n instanceof Array?l(n):n instanceof Error&&l(n.message)}n&&n.then&&n.then((function(){return l()}),(function(e){return l(e)}))}),(function(e){!function(e){for(var r,t,n=[],a={},o=0;o<e.length;o++)r=e[o],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(a=Dr(n),s(n,a)):s(null,i)}(e)}),i)},r.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!rt.hasOwnProperty(e.type))throw new Error(Cr("Unknown rule type %s",e.type));return e.type||"string"},r.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?rt.required:rt[this.getType(e)]||void 0},e}();at.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");rt[e]=r},at.warning=Vr,at.messages=nt,at.validators=rt;const it=f({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:d([String,Array])},required:{type:Boolean,default:void 0},rules:{type:d([Object,Array])},error:String,validateStatus:{type:String,values:["","error","validating","success"]},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:c}}),ot="ElLabelWrap";var st=m({name:ot,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(e,{slots:n}){const a=R(r,void 0),i=R(t);i||re(ot,"usage: <el-form-item><label-wrap /></el-form-item>");const o=b("form"),s=g(),u=g(0),l=(r="update")=>{V((()=>{n.default&&e.isAutoWidth&&("update"===r?u.value=(()=>{var e;if(null==(e=s.value)?void 0:e.firstElementChild){const e=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(e))}return 0})():"remove"===r&&(null==a||a.deregisterLabelWidth(u.value)))}))},f=()=>l("update");return $((()=>{f()})),I((()=>{l("remove")})),M((()=>f())),j(u,((r,t)=>{e.updateAll&&(null==a||a.registerLabelWidth(r,t))})),B(h((()=>{var e,r;return null!=(r=null==(e=s.value)?void 0:e.firstElementChild)?r:null})),f),()=>{var r,t;if(!n)return null;const{isAutoWidth:l}=e;if(l){const e=null==a?void 0:a.autoLabelWidth,t={};if((null==i?void 0:i.hasLabel)&&e&&"auto"!==e){const r=Math.max(0,Number.parseInt(e,10)-u.value),n="left"===a.labelPosition?"marginRight":"marginLeft";r&&(t[n]=`${r}px`)}return W("div",{ref:s,class:[o.be("item","label-wrap")],style:t},[null==(r=n.default)?void 0:r.call(n)])}return W(_,{ref:s},[null==(t=n.default)?void 0:t.call(n)])}}});const ut=["role","aria-labelledby"],lt=m({name:"ElFormItem"});var ft=S(m({...lt,props:it,setup(n,{expose:a}){const i=n,o=D(),s=R(r,void 0),u=R(t,void 0),l=e(void 0,{formItem:!1}),f=b("form-item"),c=te().value,d=g([]),p=g(""),m=C(p,100),S=g(""),M=g();let B,_=!1;const K=h((()=>{if("top"===(null==s?void 0:s.labelPosition))return{};const e=N(i.labelWidth||(null==s?void 0:s.labelWidth)||"");return e?{width:e}:{}})),X=h((()=>{if("top"===(null==s?void 0:s.labelPosition)||(null==s?void 0:s.inline))return{};if(!i.label&&!i.labelWidth&&ue)return{};const e=N(i.labelWidth||(null==s?void 0:s.labelWidth)||"");return i.label||o.label?{}:{marginLeft:e}})),ee=h((()=>[f.b(),f.m(l.value),f.is("error","error"===p.value),f.is("validating","validating"===p.value),f.is("success","success"===p.value),f.is("required",de.value||i.required),f.is("no-asterisk",null==s?void 0:s.hideRequiredAsterisk),"right"===(null==s?void 0:s.requireAsteriskPosition)?"asterisk-right":"asterisk-left",{[f.m("feedback")]:null==s?void 0:s.statusIcon}])),re=h((()=>y(i.inlineMessage)?i.inlineMessage:(null==s?void 0:s.inlineMessage)||!1)),ne=h((()=>[f.e("error"),{[f.em("error","inline")]:re.value}])),ae=h((()=>i.prop?v(i.prop)?i.prop:i.prop.join("."):"")),ie=h((()=>!(!i.label&&!o.label))),oe=h((()=>i.for||1===d.value.length?d.value[0]:void 0)),se=h((()=>!oe.value&&ie.value)),ue=!!u,le=h((()=>{const e=null==s?void 0:s.model;if(e&&i.prop)return z(e,i.prop).value})),fe=h((()=>{const{required:e}=i,r=[];i.rules&&r.push(...Ee(i.rules));const t=null==s?void 0:s.rules;if(t&&i.prop){const e=z(t,i.prop).value;e&&r.push(...Ee(e))}if(void 0!==e){const t=r.map(((e,r)=>[e,r])).filter((([e])=>Object.keys(e).includes("required")));if(t.length>0)for(const[n,a]of t)n.required!==e&&(r[a]={...n,required:e});else r.push({required:e})}return r})),ce=h((()=>fe.value.length>0)),de=h((()=>fe.value.some((e=>e.required)))),pe=h((()=>{var e;return"error"===m.value&&i.showMessage&&(null==(e=null==s?void 0:s.showMessage)||e)})),ve=h((()=>`${i.label||""}${(null==s?void 0:s.labelSuffix)||""}`)),ye=e=>{p.value=e},ge=async e=>{const r=ae.value;return new at({[r]:e}).validate({[r]:le.value},{firstFields:!0}).then((()=>(ye("success"),null==s||s.emit("validate",i.prop,!0,""),!0))).catch((e=>((e=>{var r,t;const{errors:n,fields:a}=e;n&&a||console.error(e),ye("error"),S.value=n?null!=(t=null==(r=null==n?void 0:n[0])?void 0:r.message)?t:`${i.prop} is required`:"",null==s||s.emit("validate",i.prop,!1,S.value)})(e),Promise.reject(e))))},he=async(e,r)=>{if(_||!i.prop)return!1;const t=k(r);if(!ce.value)return null==r||r(!1),!1;const n=(e=>fe.value.filter((r=>!r.trigger||!e||(Array.isArray(r.trigger)?r.trigger.includes(e):r.trigger===e))).map((({trigger:e,...r})=>r)))(e);return 0===n.length?(null==r||r(!0),!0):(ye("validating"),ge(n).then((()=>(null==r||r(!0),!0))).catch((e=>{const{fields:n}=e;return null==r||r(!1,n),!t&&Promise.reject(n)})))},me=()=>{ye(""),S.value="",_=!1},be=async()=>{const e=null==s?void 0:s.model;if(!e||!i.prop)return;const r=z(e,i.prop);_=!0,r.value=Or(B),await V(),me(),_=!1};j((()=>i.error),(e=>{S.value=e||"",ye(e?"error":"")}),{immediate:!0}),j((()=>i.validateStatus),(e=>ye(e||"")));const je=q({...F(i),$el:M,size:l,validateState:p,labelId:c,inputIds:d,isGroup:se,hasLabel:ie,addInputId:e=>{d.value.includes(e)||d.value.push(e)},removeInputId:e=>{d.value=d.value.filter((r=>r!==e))},resetField:be,clearValidate:me,validate:he});return w(t,je),$((()=>{i.prop&&(null==s||s.addField(je),B=Or(le.value))})),I((()=>{null==s||s.removeField(je)})),a({size:l,validateMessage:S,validateState:p,validate:he,clearValidate:me,resetField:be}),(e,r)=>{var t;return O(),x("div",{ref_key:"formItemRef",ref:M,class:E(P(ee)),role:P(se)?"group":void 0,"aria-labelledby":P(se)?P(c):void 0},[W(P(st),{"is-auto-width":"auto"===P(K).width,"update-all":"auto"===(null==(t=P(s))?void 0:t.labelWidth)},{default:L((()=>[P(ie)?(O(),T(U(P(oe)?"label":"div"),{key:0,id:P(c),for:P(oe),class:E(P(f).e("label")),style:Z(P(K))},{default:L((()=>[A(e.$slots,"label",{label:P(ve)},(()=>[J(G(P(ve)),1)]))])),_:3},8,["id","for","class","style"])):H("v-if",!0)])),_:3},8,["is-auto-width","update-all"]),Q("div",{class:E(P(f).e("content")),style:Z(P(X))},[A(e.$slots,"default"),W(Y,{name:`${P(f).namespace.value}-zoom-in-top`},{default:L((()=>[P(pe)?A(e.$slots,"error",{key:0,error:S.value},(()=>[Q("div",{class:E(P(ne))},G(S.value),3)])):H("v-if",!0)])),_:3},8,["name"])],6)],10,ut)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const ct=K(Rr,{FormItem:ft}),dt=X(ft);export{ct as E,dt as a,we as b,qe as c,$e as d,Ce as e,Ae as g,sr as i,xe as k};
