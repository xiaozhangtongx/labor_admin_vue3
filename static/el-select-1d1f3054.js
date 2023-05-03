import{bI as e,aS as t,aT as l,j as o,y as n,h as a,bJ as s,bc as i,R as r,f as u,d as p,u as c,Q as d,t as v,S as h,a2 as m,_ as f,D as b,I as g,a as y,c as S,e as C,k as O,q as x,n as L,G as w,r as I,o as T,Z as M,aa as E,z as P,aL as V,b7 as k,bK as B,a7 as z,bL as D,a1 as q,V as W,K as A,E as F,i as K,aZ as H,O as j,p as R,bM as _,B as $,bf as Q,C as N,w as G,l as U,T as Z,W as J,ah as X,H as Y,a8 as ee,be as te,ar as le,m as oe,s as ne,v as ae}from"./index-442db11c.js";import{E as se,a as ie,b as re}from"./el-popper-f2b04c8d.js";import{a as ue,E as pe}from"./index-43c84df1.js";import{E as ce}from"./el-scrollbar-8102c0d4.js";import{E as de,t as ve}from"./el-tag-011e2015.js";import{e as he}from"./strings-929788f0.js";import{u as me,a as fe,b as be}from"./el-button-6cab2065.js";import{d as ge,U as ye,C as Se}from"./focus-trap-1ae2c557.js";import{s as Ce}from"./scroll-327f18e0.js";import{i as Oe}from"./isEqual-34ff0f4b.js";import{d as xe}from"./debounce-7bbe3209.js";import{i as Le}from"./validator-fc4b1283.js";const we=new Map;let Ie;function Te(e,t){let o=[];return Array.isArray(t.arg)?o=t.arg:l(t.arg)&&o.push(t.arg),function(l,n){const a=t.instance.popperRef,s=l.target,i=null==n?void 0:n.target,r=!t||!t.instance,u=!s||!i,p=e.contains(s)||e.contains(i),c=e===s,d=o.length&&o.some((e=>null==e?void 0:e.contains(s)))||o.length&&o.includes(i),v=a&&(a.contains(s)||a.contains(i));r||u||p||c||d||v||t.value(l,n)}}t&&(document.addEventListener("mousedown",(e=>Ie=e)),document.addEventListener("mouseup",(e=>{for(const t of we.values())for(const{documentHandler:l}of t)l(e,Ie)})));const Me={beforeMount(e,t){we.has(e)||we.set(e,[]),we.get(e).push({documentHandler:Te(e,t),bindingFn:t.value})},updated(e,t){we.has(e)||we.set(e,[]);const l=we.get(e),o=l.findIndex((e=>e.bindingFn===t.oldValue)),n={documentHandler:Te(e,t),bindingFn:t.value};o>=0?l.splice(o,1,n):l.push(n)},unmounted(e){we.delete(e)}},Ee=Symbol("ElSelectGroup"),Pe=Symbol("ElSelect");var Ve=f(p({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const t=c("select"),l=d({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:p,itemSelected:f,isDisabled:b,select:g,hoverItem:y}=function(e,t){const l=o(Pe),p=o(Ee,{disabled:!1}),c=n((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),d=n((()=>l.props.multiple?g(l.props.modelValue,e.value):y(e.value,l.props.modelValue))),v=n((()=>{if(l.props.multiple){const e=l.props.modelValue||[];return!d.value&&e.length>=l.props.multipleLimit&&l.props.multipleLimit>0}return!1})),h=n((()=>e.label||(c.value?"":e.value))),m=n((()=>e.value||e.label||"")),f=n((()=>e.disabled||t.groupDisabled||v.value)),b=a(),g=(e=[],t)=>{if(c.value){const o=l.props.valueKey;return e&&e.some((e=>s(i(e,o))===i(t,o)))}return e&&e.includes(t)},y=(e,t)=>{if(c.value){const{valueKey:o}=l.props;return i(e,o)===i(t,o)}return e===t};r((()=>h.value),(()=>{e.created||l.props.remote||l.setSelected()})),r((()=>e.value),((t,o)=>{const{remote:n,valueKey:a}=l.props;if(Object.is(t,o)||(l.onOptionDestroy(o,b.proxy),l.onOptionCreate(b.proxy)),!e.created&&!n){if(a&&"object"==typeof t&&"object"==typeof o&&t[a]===o[a])return;l.setSelected()}})),r((()=>p.disabled),(()=>{t.groupDisabled=p.disabled}),{immediate:!0});const{queryChange:S}=s(l);return r(S,(o=>{const{query:n}=u(o),a=new RegExp(he(n),"i");t.visible=a.test(h.value)||e.created,t.visible||l.filteredOptionsCount--}),{immediate:!0}),{select:l,currentLabel:h,currentValue:m,itemSelected:d,isDisabled:f,hoverItem:()=>{e.disabled||p.disabled||(l.hoverIndex=l.optionsArray.indexOf(b.proxy))}}}(e,l),{visible:S,hover:C}=v(l),O=a().proxy;return g.onOptionCreate(O),h((()=>{const e=O.value,{selected:t}=g,l=(g.props.multiple?t:[t]).some((e=>e.value===O.value));m((()=>{g.cachedOptions.get(e)!==O||l||g.cachedOptions.delete(e)})),g.onOptionDestroy(e,O)})),{ns:t,currentLabel:p,itemSelected:f,isDisabled:b,select:g,hoverItem:y,visible:S,hover:C,selectOptionClick:function(){!0!==e.disabled&&!0!==l.groupDisabled&&g.handleOptionSelect(O,!0)},states:l}}}),[["render",function(e,t,l,o,n,a){return b((y(),S("li",{class:L([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:t[0]||(t[0]=(...t)=>e.hoverItem&&e.hoverItem(...t)),onClick:t[1]||(t[1]=w(((...t)=>e.selectOptionClick&&e.selectOptionClick(...t)),["stop"]))},[C(e.$slots,"default",{},(()=>[O("span",null,x(e.currentLabel),1)]))],34)),[[g,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);var ke=f(p({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=o(Pe),t=c("select"),l=n((()=>e.props.popperClass)),a=n((()=>e.props.multiple)),s=n((()=>e.props.fitInputWidth)),i=I("");function r(){var t;i.value=`${null==(t=e.selectWrapper)?void 0:t.offsetWidth}px`}return T((()=>{r(),M(e.selectWrapper,r)})),{ns:t,minWidth:i,popperClass:l,isMultiple:a,isFitInputWidth:s}}}),[["render",function(e,t,l,o,n,a){return y(),S("div",{class:L([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:E({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[C(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);const Be=(l,o,a)=>{const{t:u}=P(),p=c("select");me({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},n((()=>!1===l.suffixTransition)));const d=I(null),v=I(null),h=I(null),f=I(null),b=I(null),g=I(null),y=I(null),S=I(-1),C=V({query:""}),O=V(""),x=I([]);let L=0;const{form:w,formItem:T}=fe(),M=n((()=>!l.filterable||l.multiple||!o.visible)),E=n((()=>l.disabled||(null==w?void 0:w.disabled))),F=n((()=>{const e=l.multiple?Array.isArray(l.modelValue)&&l.modelValue.length>0:void 0!==l.modelValue&&null!==l.modelValue&&""!==l.modelValue;return l.clearable&&!E.value&&o.inputHovering&&e})),K=n((()=>l.remote&&l.filterable&&!l.remoteShowSuffix?"":l.suffixIcon)),H=n((()=>p.is("reverse",K.value&&o.visible&&l.suffixTransition))),j=n((()=>l.remote?300:0)),R=n((()=>l.loading?l.loadingText||u("el.select.loading"):(!l.remote||""!==o.query||0!==o.options.size)&&(l.filterable&&o.query&&o.options.size>0&&0===o.filteredOptionsCount?l.noMatchText||u("el.select.noMatch"):0===o.options.size?l.noDataText||u("el.select.noData"):null))),_=n((()=>{const e=Array.from(o.options.values()),t=[];return x.value.forEach((l=>{const o=e.findIndex((e=>e.currentLabel===l));o>-1&&t.push(e[o])})),t.length?t:e})),$=n((()=>Array.from(o.cachedOptions.values()))),Q=n((()=>{const e=_.value.filter((e=>!e.created)).some((e=>e.currentLabel===o.query));return l.filterable&&l.allowCreate&&""!==o.query&&!e})),N=be(),G=n((()=>["small"].includes(N.value)?"small":"default")),U=n({get:()=>o.visible&&!1!==R.value,set(e){o.visible=e}});r([()=>E.value,()=>N.value,()=>null==w?void 0:w.size],(()=>{m((()=>{Z()}))})),r((()=>l.placeholder),(e=>{o.cachedPlaceHolder=o.currentPlaceholder=e})),r((()=>l.modelValue),((e,t)=>{l.multiple&&(Z(),e&&e.length>0||v.value&&""!==o.query?o.currentPlaceholder="":o.currentPlaceholder=o.cachedPlaceHolder,l.filterable&&!l.reserveKeyword&&(o.query="",J(o.query))),ee(),l.filterable&&!l.multiple&&(o.inputLength=20),!Oe(e,t)&&l.validateEvent&&(null==T||T.validate("change").catch((e=>ge())))}),{flush:"post",deep:!0}),r((()=>o.visible),(e=>{var t,n,s,i,r;e?(null==(n=null==(t=f.value)?void 0:t.updatePopper)||n.call(t),l.filterable&&(o.filteredOptionsCount=o.optionsCount,o.query=l.remote?"":o.selectedLabel,null==(i=null==(s=h.value)?void 0:s.focus)||i.call(s),l.multiple?null==(r=v.value)||r.focus():o.selectedLabel&&(o.currentPlaceholder=`${o.selectedLabel}`,o.selectedLabel=""),J(o.query),l.multiple||l.remote||(C.value.query="",B(C),B(O)))):(l.filterable&&(k(l.filterMethod)&&l.filterMethod(""),k(l.remoteMethod)&&l.remoteMethod("")),v.value&&v.value.blur(),o.query="",o.previousQuery=null,o.selectedLabel="",o.inputLength=20,o.menuVisibleOnFocus=!1,le(),m((()=>{v.value&&""===v.value.value&&0===o.selected.length&&(o.currentPlaceholder=o.cachedPlaceHolder)})),l.multiple||(o.selected&&(l.filterable&&l.allowCreate&&o.createdSelected&&o.createdLabel?o.selectedLabel=o.createdLabel:o.selectedLabel=o.selected.currentLabel,l.filterable&&(o.query=o.selectedLabel)),l.filterable&&(o.currentPlaceholder=o.cachedPlaceHolder))),a.emit("visible-change",e)})),r((()=>o.options.entries()),(()=>{var e,n,a;if(!t)return;null==(n=null==(e=f.value)?void 0:e.updatePopper)||n.call(e),l.multiple&&Z();const s=(null==(a=g.value)?void 0:a.querySelectorAll("input"))||[];Array.from(s).includes(document.activeElement)||ee(),l.defaultFirstOption&&(l.filterable||l.remote)&&o.filteredOptionsCount&&Y()}),{flush:"post"}),r((()=>o.hoverIndex),(e=>{z(e)&&e>-1?S.value=_.value[e]||{}:S.value={},_.value.forEach((e=>{e.hover=S.value===e}))}));const Z=()=>{m((()=>{var t,l;if(!d.value)return;const n=d.value.$el.querySelector("input");L=L||(n.clientHeight>0?n.clientHeight+2:0);const a=b.value,s=(i=N.value||(null==w?void 0:w.size),e[i||"default"]);var i;const r=s===L||L<=0?s:L;!(null===n.offsetParent)&&(n.style.height=(0===o.selected.length?r:Math.max(a?a.clientHeight+(a.clientHeight>r?6:0):0,r))-2+"px"),o.tagInMultiLine=Number.parseFloat(n.style.height)>=r,o.visible&&!1!==R.value&&(null==(l=null==(t=f.value)?void 0:t.updatePopper)||l.call(t))}))},J=async e=>{o.previousQuery===e||o.isOnComposition||(null!==o.previousQuery||!k(l.filterMethod)&&!k(l.remoteMethod)?(o.previousQuery=e,m((()=>{var e,t;o.visible&&(null==(t=null==(e=f.value)?void 0:e.updatePopper)||t.call(e))})),o.hoverIndex=-1,l.multiple&&l.filterable&&m((()=>{const e=15*v.value.value.length+20;o.inputLength=l.collapseTags?Math.min(50,e):e,X(),Z()})),l.remote&&k(l.remoteMethod)?(o.hoverIndex=-1,l.remoteMethod(e)):k(l.filterMethod)?(l.filterMethod(e),B(O)):(o.filteredOptionsCount=o.optionsCount,C.value.query=e,B(C),B(O)),l.defaultFirstOption&&(l.filterable||l.remote)&&o.filteredOptionsCount&&(await m(),Y())):o.previousQuery=e)},X=()=>{""!==o.currentPlaceholder&&(o.currentPlaceholder=v.value.value?"":o.cachedPlaceHolder)},Y=()=>{const e=_.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),t=e.find((e=>e.created)),l=e[0];o.hoverIndex=pe(_.value,t||l)},ee=()=>{var e;if(!l.multiple){const t=te(l.modelValue);return(null==(e=t.props)?void 0:e.created)?(o.createdLabel=t.props.value,o.createdSelected=!0):o.createdSelected=!1,o.selectedLabel=t.currentLabel,o.selected=t,void(l.filterable&&(o.query=o.selectedLabel))}o.selectedLabel="";const t=[];Array.isArray(l.modelValue)&&l.modelValue.forEach((e=>{t.push(te(e))})),o.selected=t,m((()=>{Z()}))},te=e=>{let t;const n="object"===D(e).toLowerCase(),a="null"===D(e).toLowerCase(),s="undefined"===D(e).toLowerCase();for(let u=o.cachedOptions.size-1;u>=0;u--){const o=$.value[u];if(n?i(o.value,l.valueKey)===i(e,l.valueKey):o.value===e){t={value:e,currentLabel:o.currentLabel,isDisabled:o.isDisabled};break}}if(t)return t;const r={value:e,currentLabel:n?e.label:a||s?"":e};return l.multiple&&(r.hitState=!1),r},le=()=>{setTimeout((()=>{const e=l.valueKey;l.multiple?o.selected.length>0?o.hoverIndex=Math.min.apply(null,o.selected.map((t=>_.value.findIndex((l=>i(l,e)===i(t,e)))))):o.hoverIndex=-1:o.hoverIndex=_.value.findIndex((e=>Le(e)===Le(o.selected)))}),300)},oe=()=>{var e;o.inputWidth=null==(e=d.value)?void 0:e.$el.offsetWidth},ne=xe((()=>{l.filterable&&o.query!==o.selectedLabel&&(o.query=o.selectedLabel,J(o.query))}),j.value),ae=xe((e=>{J(e.target.value)}),j.value),se=e=>{Oe(l.modelValue,e)||a.emit(Se,e)},ie=e=>{e.stopPropagation();const t=l.multiple?[]:"";if(!W(t))for(const l of o.selected)l.isDisabled&&t.push(l.value);a.emit(ye,t),se(t),o.hoverIndex=-1,o.visible=!1,a.emit("clear")},re=(e,t)=>{var n;if(l.multiple){const t=(l.modelValue||[]).slice(),s=pe(t,e.value);s>-1?t.splice(s,1):(l.multipleLimit<=0||t.length<l.multipleLimit)&&t.push(e.value),a.emit(ye,t),se(t),e.created&&(o.query="",J(""),o.inputLength=20),l.filterable&&(null==(n=v.value)||n.focus())}else a.emit(ye,e.value),se(e.value),o.visible=!1;o.isSilentBlur=t,ce(),o.visible||m((()=>{de(e)}))},pe=(e=[],t)=>{if(!q(t))return e.indexOf(t);const o=l.valueKey;let n=-1;return e.some(((e,l)=>s(i(e,o))===i(t,o)&&(n=l,!0))),n},ce=()=>{o.softFocus=!0;const e=v.value||d.value;e&&(null==e||e.focus())},de=e=>{var t,l,o,n,a;const s=Array.isArray(e)?e[0]:e;let i=null;if(null==s?void 0:s.value){const e=_.value.filter((e=>e.value===s.value));e.length>0&&(i=e[0].$el)}if(f.value&&i){const e=null==(n=null==(o=null==(l=null==(t=f.value)?void 0:t.popperRef)?void 0:l.contentRef)?void 0:o.querySelector)?void 0:n.call(o,`.${p.be("dropdown","wrap")}`);e&&Ce(e,i)}null==(a=y.value)||a.handleScroll()},ve=e=>{if(!Array.isArray(o.selected))return;const t=o.selected[o.selected.length-1];return t?!0===e||!1===e?(t.hitState=e,e):(t.hitState=!t.hitState,t.hitState):void 0},he=e=>{var t;e&&!o.mouseEnter||E.value||(o.menuVisibleOnFocus?o.menuVisibleOnFocus=!1:f.value&&f.value.isFocusInsideContent()||(o.visible=!o.visible),o.visible&&(null==(t=v.value||d.value)||t.focus()))},Le=e=>q(e.value)?i(e.value,l.valueKey):e.value,we=n((()=>_.value.filter((e=>e.visible)).every((e=>e.disabled)))),Ie=n((()=>o.selected.slice(0,l.maxCollapseTags))),Te=n((()=>o.selected.slice(l.maxCollapseTags))),Me=e=>{if(o.visible){if(0!==o.options.size&&0!==o.filteredOptionsCount&&!o.isOnComposition&&!we.value){"next"===e?(o.hoverIndex++,o.hoverIndex===o.options.size&&(o.hoverIndex=0)):"prev"===e&&(o.hoverIndex--,o.hoverIndex<0&&(o.hoverIndex=o.options.size-1));const t=_.value[o.hoverIndex];!0!==t.disabled&&!0!==t.states.groupDisabled&&t.visible||Me(e),m((()=>de(S.value)))}}else o.visible=!0};return{optionList:x,optionsArray:_,selectSize:N,handleResize:()=>{var e,t;oe(),null==(t=null==(e=f.value)?void 0:e.updatePopper)||t.call(e),l.multiple&&Z()},debouncedOnInputChange:ne,debouncedQueryChange:ae,deletePrevTag:e=>{if(e.target.value.length<=0&&!ve()){const e=l.modelValue.slice();e.pop(),a.emit(ye,e),se(e)}1===e.target.value.length&&0===l.modelValue.length&&(o.currentPlaceholder=o.cachedPlaceHolder)},deleteTag:(e,t)=>{const n=o.selected.indexOf(t);if(n>-1&&!E.value){const e=l.modelValue.slice();e.splice(n,1),a.emit(ye,e),se(e),a.emit("remove-tag",t.value)}e.stopPropagation()},deleteSelected:ie,handleOptionSelect:re,scrollToOption:de,readonly:M,resetInputHeight:Z,showClose:F,iconComponent:K,iconReverse:H,showNewOption:Q,collapseTagSize:G,setSelected:ee,managePlaceholder:X,selectDisabled:E,emptyText:R,toggleLastOptionHitState:ve,resetInputState:e=>{e.code!==A.backspace&&ve(!1),o.inputLength=15*v.value.value.length+20,Z()},handleComposition:e=>{const t=e.target.value;if("compositionend"===e.type)o.isOnComposition=!1,m((()=>J(t)));else{const e=t[t.length-1]||"";o.isOnComposition=!ue(e)}},onOptionCreate:e=>{o.optionsCount++,o.filteredOptionsCount++,o.options.set(e.value,e),o.cachedOptions.set(e.value,e)},onOptionDestroy:(e,t)=>{o.options.get(e)===t&&(o.optionsCount--,o.filteredOptionsCount--,o.options.delete(e))},handleMenuEnter:()=>{m((()=>de(o.selected)))},handleFocus:e=>{o.softFocus?o.softFocus=!1:((l.automaticDropdown||l.filterable)&&(l.filterable&&!o.visible&&(o.menuVisibleOnFocus=!0),o.visible=!0),a.emit("focus",e))},blur:()=>{var e,t,l;o.visible=!1,null==(e=d.value)||e.blur(),null==(l=null==(t=h.value)?void 0:t.blur)||l.call(t)},handleBlur:e=>{m((()=>{o.isSilentBlur?o.isSilentBlur=!1:a.emit("blur",e)})),o.softFocus=!1},handleClearClick:e=>{ie(e)},handleClose:()=>{o.visible=!1},handleKeydownEscape:e=>{o.visible&&(e.preventDefault(),e.stopPropagation(),o.visible=!1)},toggleMenu:he,selectOption:()=>{o.visible?_.value[o.hoverIndex]&&re(_.value[o.hoverIndex],void 0):he()},getValueKey:Le,navigateOptions:Me,dropMenuVisible:U,queryChange:C,groupQueryChange:O,showTagList:Ie,collapseTagList:Te,reference:d,input:v,iOSInput:h,tooltipRef:f,tags:b,selectWrapper:g,scrollbar:y,handleMouseEnter:()=>{o.mouseEnter=!0},handleMouseLeave:()=>{o.mouseEnter=!1}}};var ze=p({name:"ElOptions",emits:["update-options"],setup(e,{slots:t,emit:l}){let o=[];return()=>{var e,n;const a=null==(e=t.default)?void 0:e.call(t),s=[];return a.length&&function e(t){Array.isArray(t)&&t.forEach((t=>{var l,o,n,a;const i=null==(l=(null==t?void 0:t.type)||{})?void 0:l.name;"ElOptionGroup"===i?e(W(t.children)||Array.isArray(t.children)||!k(null==(o=t.children)?void 0:o.default)?t.children:null==(n=t.children)?void 0:n.default()):"ElOption"===i?s.push(null==(a=t.props)?void 0:a.label):Array.isArray(t.children)&&e(t.children)}))}(null==(n=a[0])?void 0:n.children),function(e,t){if(e.length!==t.length)return!1;for(const[l]of e.entries())if(e[l]!=t[l])return!1;return!0}(s,o)||(o=s,l("update-options",s)),a}}});const De="ElSelect",qe=p({name:De,componentName:De,components:{ElInput:pe,ElSelectMenu:ke,ElOption:Ve,ElOptions:ze,ElTag:de,ElScrollbar:ce,ElTooltip:se,ElIcon:F},directives:{ClickOutside:Me},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Le},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:ie.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:K,default:H},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:K,default:j},tagType:{...ve.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:re,default:"bottom-start"}},emits:[ye,Se,"remove-tag","clear","visible-change","focus","blur"],setup(e,t){const l=c("select"),o=c("input"),{t:a}=P(),s=function(e){const{t:t}=P();return d({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:t("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}(e),{optionList:i,optionsArray:r,selectSize:p,readonly:h,handleResize:f,collapseTagSize:b,debouncedOnInputChange:g,debouncedQueryChange:y,deletePrevTag:S,deleteTag:C,deleteSelected:O,handleOptionSelect:x,scrollToOption:L,setSelected:w,resetInputHeight:I,managePlaceholder:E,showClose:V,selectDisabled:k,iconComponent:B,iconReverse:z,showNewOption:D,emptyText:q,toggleLastOptionHitState:W,resetInputState:A,handleComposition:F,onOptionCreate:K,onOptionDestroy:H,handleMenuEnter:j,handleFocus:$,blur:Q,handleBlur:N,handleClearClick:G,handleClose:U,handleKeydownEscape:Z,toggleMenu:J,selectOption:X,getValueKey:Y,navigateOptions:ee,dropMenuVisible:te,reference:le,input:oe,iOSInput:ne,tooltipRef:ae,tags:se,selectWrapper:ie,scrollbar:re,queryChange:ue,groupQueryChange:pe,handleMouseEnter:ce,handleMouseLeave:de,showTagList:ve,collapseTagList:he}=Be(e,s,t),{focus:me}=(fe=le,{focus:()=>{var e,t;null==(t=null==(e=fe.value)?void 0:e.focus)||t.call(e)}});var fe;const{inputWidth:be,selected:ge,inputLength:Se,filteredOptionsCount:Ce,visible:Oe,softFocus:xe,selectedLabel:Le,hoverIndex:we,query:Ie,inputHovering:Te,currentPlaceholder:Me,menuVisibleOnFocus:Ee,isOnComposition:Ve,isSilentBlur:ke,options:ze,cachedOptions:De,optionsCount:qe,prefixWidth:We,tagInMultiLine:Ae}=v(s),Fe=n((()=>{const t=[l.b()],o=u(p);return o&&t.push(l.m(o)),e.disabled&&t.push(l.m("disabled")),t})),Ke=n((()=>({maxWidth:u(be)-32+"px",width:"100%"}))),He=n((()=>({maxWidth:`${u(be)>123?u(be)-123:u(be)-75}px`})));R(Pe,d({props:e,options:ze,optionsArray:r,cachedOptions:De,optionsCount:qe,filteredOptionsCount:Ce,hoverIndex:we,handleOptionSelect:x,onOptionCreate:K,onOptionDestroy:H,selectWrapper:ie,selected:ge,setSelected:w,queryChange:ue,groupQueryChange:pe})),T((()=>{s.cachedPlaceHolder=Me.value=e.placeholder||(()=>a("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Me.value=""),M(ie,f),e.remote&&e.multiple&&I(),m((()=>{const e=le.value&&le.value.$el;if(e&&(be.value=e.getBoundingClientRect().width,t.slots.prefix)){const t=e.querySelector(`.${o.e("prefix")}`);We.value=Math.max(t.getBoundingClientRect().width+5,30)}})),w()})),e.multiple&&!Array.isArray(e.modelValue)&&t.emit(ye,[]),!e.multiple&&Array.isArray(e.modelValue)&&t.emit(ye,"");const je=n((()=>{var e,t;return null==(t=null==(e=ae.value)?void 0:e.popperRef)?void 0:t.contentRef}));return{isIOS:_,onOptionsRendered:e=>{i.value=e},tagInMultiLine:Ae,prefixWidth:We,selectSize:p,readonly:h,handleResize:f,collapseTagSize:b,debouncedOnInputChange:g,debouncedQueryChange:y,deletePrevTag:S,deleteTag:C,deleteSelected:O,handleOptionSelect:x,scrollToOption:L,inputWidth:be,selected:ge,inputLength:Se,filteredOptionsCount:Ce,visible:Oe,softFocus:xe,selectedLabel:Le,hoverIndex:we,query:Ie,inputHovering:Te,currentPlaceholder:Me,menuVisibleOnFocus:Ee,isOnComposition:Ve,isSilentBlur:ke,options:ze,resetInputHeight:I,managePlaceholder:E,showClose:V,selectDisabled:k,iconComponent:B,iconReverse:z,showNewOption:D,emptyText:q,toggleLastOptionHitState:W,resetInputState:A,handleComposition:F,handleMenuEnter:j,handleFocus:$,blur:Q,handleBlur:N,handleClearClick:G,handleClose:U,handleKeydownEscape:Z,toggleMenu:J,selectOption:X,getValueKey:Y,navigateOptions:ee,dropMenuVisible:te,focus:me,reference:le,input:oe,iOSInput:ne,tooltipRef:ae,popperPaneRef:je,tags:se,selectWrapper:ie,scrollbar:re,wrapperKls:Fe,selectTagsStyle:Ke,nsSelect:l,tagTextStyle:He,handleMouseEnter:ce,handleMouseLeave:de,showTagList:ve,collapseTagList:he}}}),We=["disabled","autocomplete"],Ae=["disabled"],Fe={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var Ke=f(qe,[["render",function(e,t,l,o,n,a){const s=$("el-tag"),i=$("el-tooltip"),r=$("el-icon"),u=$("el-input"),p=$("el-option"),c=$("el-options"),d=$("el-scrollbar"),v=$("el-select-menu"),h=Q("click-outside");return b((y(),S("div",{ref:"selectWrapper",class:L(e.wrapperKls),onMouseenter:t[21]||(t[21]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:t[22]||(t[22]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:t[23]||(t[23]=w(((...t)=>e.toggleMenu&&e.toggleMenu(...t)),["stop"]))},[N(i,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:G((()=>[O("div",{class:"select-trigger",onMouseenter:t[19]||(t[19]=t=>e.inputHovering=!0),onMouseleave:t[20]||(t[20]=t=>e.inputHovering=!1)},[e.multiple?(y(),S("div",{key:0,ref:"tags",class:L(e.nsSelect.e("tags")),style:E(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(y(),U(Z,{key:0,onAfterLeave:e.resetInputHeight},{default:G((()=>[O("span",{class:L([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(y(!0),S(J,null,X(e.showTagList,(t=>(y(),U(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:l=>e.deleteTag(l,t)},{default:G((()=>[O("span",{class:L(e.nsSelect.e("tags-text")),style:E(e.tagTextStyle)},x(t.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128)),e.selected.length>e.maxCollapseTags?(y(),U(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:G((()=>[e.collapseTagsTooltip?(y(),U(i,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:G((()=>[O("span",{class:L(e.nsSelect.e("tags-text"))},"+ "+x(e.selected.length-e.maxCollapseTags),3)])),content:G((()=>[O("div",{class:L(e.nsSelect.e("collapse-tags"))},[(y(!0),S(J,null,X(e.collapseTagList,(t=>(y(),S("div",{key:e.getValueKey(t),class:L(e.nsSelect.e("collapse-tag"))},[N(s,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:l=>e.deleteTag(l,t)},{default:G((()=>[O("span",{class:L(e.nsSelect.e("tags-text")),style:E({maxWidth:e.inputWidth-75+"px"})},x(t.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):(y(),S("span",{key:1,class:L(e.nsSelect.e("tags-text"))},"+ "+x(e.selected.length-e.maxCollapseTags),3))])),_:1},8,["size","type"])):Y("v-if",!0)],2)])),_:1},8,["onAfterLeave"])):Y("v-if",!0),e.collapseTags?Y("v-if",!0):(y(),U(Z,{key:1,onAfterLeave:e.resetInputHeight},{default:G((()=>[O("span",{class:L([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(y(!0),S(J,null,X(e.selected,(t=>(y(),U(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:l=>e.deleteTag(l,t)},{default:G((()=>[O("span",{class:L(e.nsSelect.e("tags-text")),style:E({maxWidth:e.inputWidth-75+"px"})},x(t.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],2)])),_:1},8,["onAfterLeave"])),e.filterable?b((y(),S("input",{key:2,ref:"input","onUpdate:modelValue":t[0]||(t[0]=t=>e.query=t),type:"text",class:L([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:E({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:e.inputLength/(e.inputWidth-32)+"%",maxWidth:e.inputWidth-42+"px"}),onFocus:t[1]||(t[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:t[3]||(t[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[t[4]||(t[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),t[5]||(t[5]=ee(w((t=>e.navigateOptions("next")),["prevent"]),["down"])),t[6]||(t[6]=ee(w((t=>e.navigateOptions("prev")),["prevent"]),["up"])),t[7]||(t[7]=ee(((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t)),["esc"])),t[8]||(t[8]=ee(w(((...t)=>e.selectOption&&e.selectOption(...t)),["stop","prevent"]),["enter"])),t[9]||(t[9]=ee(((...t)=>e.deletePrevTag&&e.deletePrevTag(...t)),["delete"])),t[10]||(t[10]=ee((t=>e.visible=!1),["tab"]))],onCompositionstart:t[11]||(t[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:t[12]||(t[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:t[13]||(t[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:t[14]||(t[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,We)),[[te,e.query]]):Y("v-if",!0)],6)):Y("v-if",!0),Y(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(y(),S("input",{key:1,ref:"iOSInput",class:L([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,Ae)):Y("v-if",!0),N(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":t[15]||(t[15]=t=>e.selectedLabel=t),type:"text",placeholder:"function"==typeof e.currentPlaceholder?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:L([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[t[16]||(t[16]=ee(w((t=>e.navigateOptions("next")),["stop","prevent"]),["down"])),t[17]||(t[17]=ee(w((t=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),ee(w(e.selectOption,["stop","prevent"]),["enter"]),ee(e.handleKeydownEscape,["esc"]),t[18]||(t[18]=ee((t=>e.visible=!1),["tab"]))]},le({suffix:G((()=>[e.iconComponent&&!e.showClose?(y(),U(r,{key:0,class:L([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:G((()=>[(y(),U(oe(e.iconComponent)))])),_:1},8,["class"])):Y("v-if",!0),e.showClose&&e.clearIcon?(y(),U(r,{key:1,class:L([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:G((()=>[(y(),U(oe(e.clearIcon)))])),_:1},8,["class","onClick"])):Y("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:G((()=>[O("div",Fe,[C(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)])),content:G((()=>[N(v,null,{default:G((()=>[b(N(d,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:L([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&0===e.filteredOptionsCount)])},{default:G((()=>[e.showNewOption?(y(),U(p,{key:0,value:e.query,created:!0},null,8,["value"])):Y("v-if",!0),N(c,{onUpdateOptions:e.onOptionsRendered},{default:G((()=>[C(e.$slots,"default")])),_:3},8,["onUpdateOptions"])])),_:3},8,["wrap-class","view-class","class"]),[[g,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(y(),S(J,{key:0},[e.$slots.empty?C(e.$slots,"empty",{key:0}):(y(),S("p",{key:1,class:L(e.nsSelect.be("dropdown","empty"))},x(e.emptyText),3))],64)):Y("v-if",!0)])),_:3})])),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[h,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var He=f(p({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const t=c("select"),l=I(!0),n=a(),i=I([]);R(Ee,d({...v(e)}));const u=o(Pe);T((()=>{i.value=p(n.subTree)}));const p=e=>{const t=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var l;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?t.push(e.component.proxy):(null==(l=e.children)?void 0:l.length)&&t.push(...p(e))})),t},{groupQueryChange:h}=s(u);return r(h,(()=>{l.value=i.value.some((e=>!0===e.visible))}),{flush:"post"}),{visible:l,ns:t}}}),[["render",function(e,t,l,o,n,a){return b((y(),S("ul",{class:L(e.ns.be("group","wrap"))},[O("li",{class:L(e.ns.be("group","title"))},x(e.label),3),O("li",null,[O("ul",{class:L(e.ns.b("group"))},[C(e.$slots,"default")],2)])],2)),[[g,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const je=ne(Ke,{Option:Ve,OptionGroup:He}),Re=ae(Ve);ae(He);export{Me as C,Re as E,je as a};
