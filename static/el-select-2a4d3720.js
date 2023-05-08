import{bO as e,j as l,y as t,h as o,bs as a,aN as n,R as s,f as i,d as r,u,Q as p,t as c,S as d,a2 as v,_ as h,D as m,I as f,a as b,c as g,e as y,k as S,q as C,n as O,G as x,r as L,o as w,Z as I,aa as T,z as M,bk as E,aO as P,bP as V,aG as k,a7 as B,bQ as z,a1 as D,V as q,K as W,E as A,i as F,aL as K,O as H,p as j,bR as R,B as _,aS as $,C as Q,w as N,l as G,T as U,W as Z,ah as J,H as X,a8 as Y,aR as ee,ar as le,m as te,s as oe,v as ae}from"./index-78956fcc.js";import{E as ne,a as se,b as ie}from"./el-popper-4ff7a8cc.js";import{a as re,E as ue}from"./index-32820b17.js";import{E as pe}from"./el-scrollbar-79acc8cb.js";import{E as ce,t as de}from"./el-tag-d1cb1578.js";import{e as ve}from"./strings-940b9913.js";import{u as he,a as me,b as fe}from"./el-button-4a1828ca.js";import{d as be,U as ge,C as ye}from"./event-15d81b97.js";import{s as Se}from"./scroll-a180cd47.js";import{i as Ce}from"./isEqual-ec0bc15f.js";import{d as Oe}from"./debounce-e641ad72.js";import{C as xe}from"./index-48b98b2e.js";import{i as Le}from"./validator-42a77338.js";const we=Symbol("ElSelectGroup"),Ie=Symbol("ElSelect");var Te=h(r({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const r=u("select"),h=p({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:m,itemSelected:f,isDisabled:b,select:g,hoverItem:y}=function(e,r){const u=l(Ie),p=l(we,{disabled:!1}),c=t((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),d=t((()=>u.props.multiple?g(u.props.modelValue,e.value):y(e.value,u.props.modelValue))),v=t((()=>{if(u.props.multiple){const e=u.props.modelValue||[];return!d.value&&e.length>=u.props.multipleLimit&&u.props.multipleLimit>0}return!1})),h=t((()=>e.label||(c.value?"":e.value))),m=t((()=>e.value||e.label||"")),f=t((()=>e.disabled||r.groupDisabled||v.value)),b=o(),g=(e=[],l)=>{if(c.value){const t=u.props.valueKey;return e&&e.some((e=>a(n(e,t))===n(l,t)))}return e&&e.includes(l)},y=(e,l)=>{if(c.value){const{valueKey:t}=u.props;return n(e,t)===n(l,t)}return e===l};s((()=>h.value),(()=>{e.created||u.props.remote||u.setSelected()})),s((()=>e.value),((l,t)=>{const{remote:o,valueKey:a}=u.props;if(Object.is(l,t)||(u.onOptionDestroy(t,b.proxy),u.onOptionCreate(b.proxy)),!e.created&&!o){if(a&&"object"==typeof l&&"object"==typeof t&&l[a]===t[a])return;u.setSelected()}})),s((()=>p.disabled),(()=>{r.groupDisabled=p.disabled}),{immediate:!0});const{queryChange:S}=a(u);return s(S,(l=>{const{query:t}=i(l),o=new RegExp(ve(t),"i");r.visible=o.test(h.value)||e.created,r.visible||u.filteredOptionsCount--}),{immediate:!0}),{select:u,currentLabel:h,currentValue:m,itemSelected:d,isDisabled:f,hoverItem:()=>{e.disabled||p.disabled||(u.hoverIndex=u.optionsArray.indexOf(b.proxy))}}}(e,h),{visible:S,hover:C}=c(h),O=o().proxy;return g.onOptionCreate(O),d((()=>{const e=O.value,{selected:l}=g,t=(g.props.multiple?l:[l]).some((e=>e.value===O.value));v((()=>{g.cachedOptions.get(e)!==O||t||g.cachedOptions.delete(e)})),g.onOptionDestroy(e,O)})),{ns:r,currentLabel:m,itemSelected:f,isDisabled:b,select:g,hoverItem:y,visible:S,hover:C,selectOptionClick:function(){!0!==e.disabled&&!0!==h.groupDisabled&&g.handleOptionSelect(O,!0)},states:h}}}),[["render",function(e,l,t,o,a,n){return m((b(),g("li",{class:O([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:l[1]||(l[1]=x(((...l)=>e.selectOptionClick&&e.selectOptionClick(...l)),["stop"]))},[y(e.$slots,"default",{},(()=>[S("span",null,C(e.currentLabel),1)]))],34)),[[f,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);var Me=h(r({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=l(Ie),o=u("select"),a=t((()=>e.props.popperClass)),n=t((()=>e.props.multiple)),s=t((()=>e.props.fitInputWidth)),i=L("");function r(){var l;i.value=`${null==(l=e.selectWrapper)?void 0:l.offsetWidth}px`}return w((()=>{r(),I(e.selectWrapper,r)})),{ns:o,minWidth:i,popperClass:a,isMultiple:n,isFitInputWidth:s}}}),[["render",function(e,l,t,o,a,n){return b(),g("div",{class:O([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:T({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[y(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);const Ee=(l,o,i)=>{const{t:r}=M(),p=u("select");he({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},t((()=>!1===l.suffixTransition)));const c=L(null),d=L(null),h=L(null),m=L(null),f=L(null),b=L(null),g=L(null),y=L(-1),S=E({query:""}),C=E(""),O=L([]);let x=0;const{form:w,formItem:I}=me(),T=t((()=>!l.filterable||l.multiple||!o.visible)),A=t((()=>l.disabled||(null==w?void 0:w.disabled))),F=t((()=>{const e=l.multiple?Array.isArray(l.modelValue)&&l.modelValue.length>0:void 0!==l.modelValue&&null!==l.modelValue&&""!==l.modelValue;return l.clearable&&!A.value&&o.inputHovering&&e})),K=t((()=>l.remote&&l.filterable&&!l.remoteShowSuffix?"":l.suffixIcon)),H=t((()=>p.is("reverse",K.value&&o.visible&&l.suffixTransition))),j=t((()=>l.remote?300:0)),R=t((()=>l.loading?l.loadingText||r("el.select.loading"):(!l.remote||""!==o.query||0!==o.options.size)&&(l.filterable&&o.query&&o.options.size>0&&0===o.filteredOptionsCount?l.noMatchText||r("el.select.noMatch"):0===o.options.size?l.noDataText||r("el.select.noData"):null))),_=t((()=>{const e=Array.from(o.options.values()),l=[];return O.value.forEach((t=>{const o=e.findIndex((e=>e.currentLabel===t));o>-1&&l.push(e[o])})),l.length?l:e})),$=t((()=>Array.from(o.cachedOptions.values()))),Q=t((()=>{const e=_.value.filter((e=>!e.created)).some((e=>e.currentLabel===o.query));return l.filterable&&l.allowCreate&&""!==o.query&&!e})),N=fe(),G=t((()=>["small"].includes(N.value)?"small":"default")),U=t({get:()=>o.visible&&!1!==R.value,set(e){o.visible=e}});s([()=>A.value,()=>N.value,()=>null==w?void 0:w.size],(()=>{v((()=>{Z()}))})),s((()=>l.placeholder),(e=>{o.cachedPlaceHolder=o.currentPlaceholder=e})),s((()=>l.modelValue),((e,t)=>{l.multiple&&(Z(),e&&e.length>0||d.value&&""!==o.query?o.currentPlaceholder="":o.currentPlaceholder=o.cachedPlaceHolder,l.filterable&&!l.reserveKeyword&&(o.query="",J(o.query))),ee(),l.filterable&&!l.multiple&&(o.inputLength=20),!Ce(e,t)&&l.validateEvent&&(null==I||I.validate("change").catch((e=>be())))}),{flush:"post",deep:!0}),s((()=>o.visible),(e=>{var t,a,n,s,r;e?(null==(a=null==(t=m.value)?void 0:t.updatePopper)||a.call(t),l.filterable&&(o.filteredOptionsCount=o.optionsCount,o.query=l.remote?"":o.selectedLabel,null==(s=null==(n=h.value)?void 0:n.focus)||s.call(n),l.multiple?null==(r=d.value)||r.focus():o.selectedLabel&&(o.currentPlaceholder=`${o.selectedLabel}`,o.selectedLabel=""),J(o.query),l.multiple||l.remote||(S.value.query="",V(S),V(C)))):(l.filterable&&(P(l.filterMethod)&&l.filterMethod(""),P(l.remoteMethod)&&l.remoteMethod("")),d.value&&d.value.blur(),o.query="",o.previousQuery=null,o.selectedLabel="",o.inputLength=20,o.menuVisibleOnFocus=!1,te(),v((()=>{d.value&&""===d.value.value&&0===o.selected.length&&(o.currentPlaceholder=o.cachedPlaceHolder)})),l.multiple||(o.selected&&(l.filterable&&l.allowCreate&&o.createdSelected&&o.createdLabel?o.selectedLabel=o.createdLabel:o.selectedLabel=o.selected.currentLabel,l.filterable&&(o.query=o.selectedLabel)),l.filterable&&(o.currentPlaceholder=o.cachedPlaceHolder))),i.emit("visible-change",e)})),s((()=>o.options.entries()),(()=>{var e,t,a;if(!k)return;null==(t=null==(e=m.value)?void 0:e.updatePopper)||t.call(e),l.multiple&&Z();const n=(null==(a=b.value)?void 0:a.querySelectorAll("input"))||[];Array.from(n).includes(document.activeElement)||ee(),l.defaultFirstOption&&(l.filterable||l.remote)&&o.filteredOptionsCount&&Y()}),{flush:"post"}),s((()=>o.hoverIndex),(e=>{B(e)&&e>-1?y.value=_.value[e]||{}:y.value={},_.value.forEach((e=>{e.hover=y.value===e}))}));const Z=()=>{v((()=>{var l,t;if(!c.value)return;const a=c.value.$el.querySelector("input");x=x||(a.clientHeight>0?a.clientHeight+2:0);const n=f.value,s=(i=N.value||(null==w?void 0:w.size),e[i||"default"]);var i;const r=s===x||x<=0?s:x;!(null===a.offsetParent)&&(a.style.height=(0===o.selected.length?r:Math.max(n?n.clientHeight+(n.clientHeight>r?6:0):0,r))-2+"px"),o.tagInMultiLine=Number.parseFloat(a.style.height)>=r,o.visible&&!1!==R.value&&(null==(t=null==(l=m.value)?void 0:l.updatePopper)||t.call(l))}))},J=async e=>{o.previousQuery===e||o.isOnComposition||(null!==o.previousQuery||!P(l.filterMethod)&&!P(l.remoteMethod)?(o.previousQuery=e,v((()=>{var e,l;o.visible&&(null==(l=null==(e=m.value)?void 0:e.updatePopper)||l.call(e))})),o.hoverIndex=-1,l.multiple&&l.filterable&&v((()=>{const e=15*d.value.value.length+20;o.inputLength=l.collapseTags?Math.min(50,e):e,X(),Z()})),l.remote&&P(l.remoteMethod)?(o.hoverIndex=-1,l.remoteMethod(e)):P(l.filterMethod)?(l.filterMethod(e),V(C)):(o.filteredOptionsCount=o.optionsCount,S.value.query=e,V(S),V(C)),l.defaultFirstOption&&(l.filterable||l.remote)&&o.filteredOptionsCount&&(await v(),Y())):o.previousQuery=e)},X=()=>{""!==o.currentPlaceholder&&(o.currentPlaceholder=d.value.value?"":o.cachedPlaceHolder)},Y=()=>{const e=_.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),t=e[0];o.hoverIndex=pe(_.value,l||t)},ee=()=>{var e;if(!l.multiple){const t=le(l.modelValue);return(null==(e=t.props)?void 0:e.created)?(o.createdLabel=t.props.value,o.createdSelected=!0):o.createdSelected=!1,o.selectedLabel=t.currentLabel,o.selected=t,void(l.filterable&&(o.query=o.selectedLabel))}o.selectedLabel="";const t=[];Array.isArray(l.modelValue)&&l.modelValue.forEach((e=>{t.push(le(e))})),o.selected=t,v((()=>{Z()}))},le=e=>{let t;const a="object"===z(e).toLowerCase(),s="null"===z(e).toLowerCase(),i="undefined"===z(e).toLowerCase();for(let u=o.cachedOptions.size-1;u>=0;u--){const o=$.value[u];if(a?n(o.value,l.valueKey)===n(e,l.valueKey):o.value===e){t={value:e,currentLabel:o.currentLabel,isDisabled:o.isDisabled};break}}if(t)return t;const r={value:e,currentLabel:a?e.label:s||i?"":e};return l.multiple&&(r.hitState=!1),r},te=()=>{setTimeout((()=>{const e=l.valueKey;l.multiple?o.selected.length>0?o.hoverIndex=Math.min.apply(null,o.selected.map((l=>_.value.findIndex((t=>n(t,e)===n(l,e)))))):o.hoverIndex=-1:o.hoverIndex=_.value.findIndex((e=>Le(e)===Le(o.selected)))}),300)},oe=()=>{var e;o.inputWidth=null==(e=c.value)?void 0:e.$el.offsetWidth},ae=Oe((()=>{l.filterable&&o.query!==o.selectedLabel&&(o.query=o.selectedLabel,J(o.query))}),j.value),ne=Oe((e=>{J(e.target.value)}),j.value),se=e=>{Ce(l.modelValue,e)||i.emit(ye,e)},ie=e=>{e.stopPropagation();const t=l.multiple?[]:"";if(!q(t))for(const l of o.selected)l.isDisabled&&t.push(l.value);i.emit(ge,t),se(t),o.hoverIndex=-1,o.visible=!1,i.emit("clear")},ue=(e,t)=>{var a;if(l.multiple){const t=(l.modelValue||[]).slice(),n=pe(t,e.value);n>-1?t.splice(n,1):(l.multipleLimit<=0||t.length<l.multipleLimit)&&t.push(e.value),i.emit(ge,t),se(t),e.created&&(o.query="",J(""),o.inputLength=20),l.filterable&&(null==(a=d.value)||a.focus())}else i.emit(ge,e.value),se(e.value),o.visible=!1;o.isSilentBlur=t,ce(),o.visible||v((()=>{de(e)}))},pe=(e=[],t)=>{if(!D(t))return e.indexOf(t);const o=l.valueKey;let s=-1;return e.some(((e,l)=>a(n(e,o))===n(t,o)&&(s=l,!0))),s},ce=()=>{o.softFocus=!0;const e=d.value||c.value;e&&(null==e||e.focus())},de=e=>{var l,t,o,a,n;const s=Array.isArray(e)?e[0]:e;let i=null;if(null==s?void 0:s.value){const e=_.value.filter((e=>e.value===s.value));e.length>0&&(i=e[0].$el)}if(m.value&&i){const e=null==(a=null==(o=null==(t=null==(l=m.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:o.querySelector)?void 0:a.call(o,`.${p.be("dropdown","wrap")}`);e&&Se(e,i)}null==(n=g.value)||n.handleScroll()},ve=e=>{if(!Array.isArray(o.selected))return;const l=o.selected[o.selected.length-1];return l?!0===e||!1===e?(l.hitState=e,e):(l.hitState=!l.hitState,l.hitState):void 0},xe=e=>{var l;e&&!o.mouseEnter||A.value||(o.menuVisibleOnFocus?o.menuVisibleOnFocus=!1:m.value&&m.value.isFocusInsideContent()||(o.visible=!o.visible),o.visible&&(null==(l=d.value||c.value)||l.focus()))},Le=e=>D(e.value)?n(e.value,l.valueKey):e.value,we=t((()=>_.value.filter((e=>e.visible)).every((e=>e.disabled)))),Ie=t((()=>o.selected.slice(0,l.maxCollapseTags))),Te=t((()=>o.selected.slice(l.maxCollapseTags))),Me=e=>{if(o.visible){if(0!==o.options.size&&0!==o.filteredOptionsCount&&!o.isOnComposition&&!we.value){"next"===e?(o.hoverIndex++,o.hoverIndex===o.options.size&&(o.hoverIndex=0)):"prev"===e&&(o.hoverIndex--,o.hoverIndex<0&&(o.hoverIndex=o.options.size-1));const l=_.value[o.hoverIndex];!0!==l.disabled&&!0!==l.states.groupDisabled&&l.visible||Me(e),v((()=>de(y.value)))}}else o.visible=!0};return{optionList:O,optionsArray:_,selectSize:N,handleResize:()=>{var e,t;oe(),null==(t=null==(e=m.value)?void 0:e.updatePopper)||t.call(e),l.multiple&&Z()},debouncedOnInputChange:ae,debouncedQueryChange:ne,deletePrevTag:e=>{if(e.target.value.length<=0&&!ve()){const e=l.modelValue.slice();e.pop(),i.emit(ge,e),se(e)}1===e.target.value.length&&0===l.modelValue.length&&(o.currentPlaceholder=o.cachedPlaceHolder)},deleteTag:(e,t)=>{const a=o.selected.indexOf(t);if(a>-1&&!A.value){const e=l.modelValue.slice();e.splice(a,1),i.emit(ge,e),se(e),i.emit("remove-tag",t.value)}e.stopPropagation()},deleteSelected:ie,handleOptionSelect:ue,scrollToOption:de,readonly:T,resetInputHeight:Z,showClose:F,iconComponent:K,iconReverse:H,showNewOption:Q,collapseTagSize:G,setSelected:ee,managePlaceholder:X,selectDisabled:A,emptyText:R,toggleLastOptionHitState:ve,resetInputState:e=>{e.code!==W.backspace&&ve(!1),o.inputLength=15*d.value.value.length+20,Z()},handleComposition:e=>{const l=e.target.value;if("compositionend"===e.type)o.isOnComposition=!1,v((()=>J(l)));else{const e=l[l.length-1]||"";o.isOnComposition=!re(e)}},onOptionCreate:e=>{o.optionsCount++,o.filteredOptionsCount++,o.options.set(e.value,e),o.cachedOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{o.options.get(e)===l&&(o.optionsCount--,o.filteredOptionsCount--,o.options.delete(e))},handleMenuEnter:()=>{v((()=>de(o.selected)))},handleFocus:e=>{o.softFocus?o.softFocus=!1:((l.automaticDropdown||l.filterable)&&(l.filterable&&!o.visible&&(o.menuVisibleOnFocus=!0),o.visible=!0),i.emit("focus",e))},blur:()=>{var e,l,t;o.visible=!1,null==(e=c.value)||e.blur(),null==(t=null==(l=h.value)?void 0:l.blur)||t.call(l)},handleBlur:e=>{v((()=>{o.isSilentBlur?o.isSilentBlur=!1:i.emit("blur",e)})),o.softFocus=!1},handleClearClick:e=>{ie(e)},handleClose:()=>{o.visible=!1},handleKeydownEscape:e=>{o.visible&&(e.preventDefault(),e.stopPropagation(),o.visible=!1)},toggleMenu:xe,selectOption:()=>{o.visible?_.value[o.hoverIndex]&&ue(_.value[o.hoverIndex],void 0):xe()},getValueKey:Le,navigateOptions:Me,dropMenuVisible:U,queryChange:S,groupQueryChange:C,showTagList:Ie,collapseTagList:Te,reference:c,input:d,iOSInput:h,tooltipRef:m,tags:f,selectWrapper:b,scrollbar:g,handleMouseEnter:()=>{o.mouseEnter=!0},handleMouseLeave:()=>{o.mouseEnter=!1}}};var Pe=r({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:t}){let o=[];return()=>{var e,a;const n=null==(e=l.default)?void 0:e.call(l),s=[];return n.length&&function e(l){Array.isArray(l)&&l.forEach((l=>{var t,o,a,n;const i=null==(t=(null==l?void 0:l.type)||{})?void 0:t.name;"ElOptionGroup"===i?e(q(l.children)||Array.isArray(l.children)||!P(null==(o=l.children)?void 0:o.default)?l.children:null==(a=l.children)?void 0:a.default()):"ElOption"===i?s.push(null==(n=l.props)?void 0:n.label):Array.isArray(l.children)&&e(l.children)}))}(null==(a=n[0])?void 0:a.children),function(e,l){if(e.length!==l.length)return!1;for(const[t]of e.entries())if(e[t]!=l[t])return!1;return!0}(s,o)||(o=s,t("update-options",s)),n}}});const Ve="ElSelect",ke=r({name:Ve,componentName:Ve,components:{ElInput:ue,ElSelectMenu:Me,ElOption:Te,ElOptions:Pe,ElTag:ce,ElScrollbar:pe,ElTooltip:ne,ElIcon:A},directives:{ClickOutside:xe},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Le},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:se.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:F,default:K},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:F,default:H},tagType:{...de.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:ie,default:"bottom-start"}},emits:[ge,ye,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const o=u("select"),a=u("input"),{t:n}=M(),s=function(e){const{t:l}=M();return p({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}(e),{optionList:r,optionsArray:d,selectSize:h,readonly:m,handleResize:f,collapseTagSize:b,debouncedOnInputChange:g,debouncedQueryChange:y,deletePrevTag:S,deleteTag:C,deleteSelected:O,handleOptionSelect:x,scrollToOption:L,setSelected:T,resetInputHeight:E,managePlaceholder:P,showClose:V,selectDisabled:k,iconComponent:B,iconReverse:z,showNewOption:D,emptyText:q,toggleLastOptionHitState:W,resetInputState:A,handleComposition:F,onOptionCreate:K,onOptionDestroy:H,handleMenuEnter:_,handleFocus:$,blur:Q,handleBlur:N,handleClearClick:G,handleClose:U,handleKeydownEscape:Z,toggleMenu:J,selectOption:X,getValueKey:Y,navigateOptions:ee,dropMenuVisible:le,reference:te,input:oe,iOSInput:ae,tooltipRef:ne,tags:se,selectWrapper:ie,scrollbar:re,queryChange:ue,groupQueryChange:pe,handleMouseEnter:ce,handleMouseLeave:de,showTagList:ve,collapseTagList:he}=Ee(e,s,l),{focus:me}=(fe=te,{focus:()=>{var e,l;null==(l=null==(e=fe.value)?void 0:e.focus)||l.call(e)}});var fe;const{inputWidth:be,selected:ye,inputLength:Se,filteredOptionsCount:Ce,visible:Oe,softFocus:xe,selectedLabel:Le,hoverIndex:we,query:Te,inputHovering:Me,currentPlaceholder:Pe,menuVisibleOnFocus:Ve,isOnComposition:ke,isSilentBlur:Be,options:ze,cachedOptions:De,optionsCount:qe,prefixWidth:We,tagInMultiLine:Ae}=c(s),Fe=t((()=>{const l=[o.b()],t=i(h);return t&&l.push(o.m(t)),e.disabled&&l.push(o.m("disabled")),l})),Ke=t((()=>({maxWidth:i(be)-32+"px",width:"100%"}))),He=t((()=>({maxWidth:`${i(be)>123?i(be)-123:i(be)-75}px`})));j(Ie,p({props:e,options:ze,optionsArray:d,cachedOptions:De,optionsCount:qe,filteredOptionsCount:Ce,hoverIndex:we,handleOptionSelect:x,onOptionCreate:K,onOptionDestroy:H,selectWrapper:ie,selected:ye,setSelected:T,queryChange:ue,groupQueryChange:pe})),w((()=>{s.cachedPlaceHolder=Pe.value=e.placeholder||(()=>n("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Pe.value=""),I(ie,f),e.remote&&e.multiple&&E(),v((()=>{const e=te.value&&te.value.$el;if(e&&(be.value=e.getBoundingClientRect().width,l.slots.prefix)){const l=e.querySelector(`.${a.e("prefix")}`);We.value=Math.max(l.getBoundingClientRect().width+5,30)}})),T()})),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(ge,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(ge,"");const je=t((()=>{var e,l;return null==(l=null==(e=ne.value)?void 0:e.popperRef)?void 0:l.contentRef}));return{isIOS:R,onOptionsRendered:e=>{r.value=e},tagInMultiLine:Ae,prefixWidth:We,selectSize:h,readonly:m,handleResize:f,collapseTagSize:b,debouncedOnInputChange:g,debouncedQueryChange:y,deletePrevTag:S,deleteTag:C,deleteSelected:O,handleOptionSelect:x,scrollToOption:L,inputWidth:be,selected:ye,inputLength:Se,filteredOptionsCount:Ce,visible:Oe,softFocus:xe,selectedLabel:Le,hoverIndex:we,query:Te,inputHovering:Me,currentPlaceholder:Pe,menuVisibleOnFocus:Ve,isOnComposition:ke,isSilentBlur:Be,options:ze,resetInputHeight:E,managePlaceholder:P,showClose:V,selectDisabled:k,iconComponent:B,iconReverse:z,showNewOption:D,emptyText:q,toggleLastOptionHitState:W,resetInputState:A,handleComposition:F,handleMenuEnter:_,handleFocus:$,blur:Q,handleBlur:N,handleClearClick:G,handleClose:U,handleKeydownEscape:Z,toggleMenu:J,selectOption:X,getValueKey:Y,navigateOptions:ee,dropMenuVisible:le,focus:me,reference:te,input:oe,iOSInput:ae,tooltipRef:ne,popperPaneRef:je,tags:se,selectWrapper:ie,scrollbar:re,wrapperKls:Fe,selectTagsStyle:Ke,nsSelect:o,tagTextStyle:He,handleMouseEnter:ce,handleMouseLeave:de,showTagList:ve,collapseTagList:he}}}),Be=["disabled","autocomplete"],ze=["disabled"],De={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var qe=h(ke,[["render",function(e,l,t,o,a,n){const s=_("el-tag"),i=_("el-tooltip"),r=_("el-icon"),u=_("el-input"),p=_("el-option"),c=_("el-options"),d=_("el-scrollbar"),v=_("el-select-menu"),h=$("click-outside");return m((b(),g("div",{ref:"selectWrapper",class:O(e.wrapperKls),onMouseenter:l[21]||(l[21]=(...l)=>e.handleMouseEnter&&e.handleMouseEnter(...l)),onMouseleave:l[22]||(l[22]=(...l)=>e.handleMouseLeave&&e.handleMouseLeave(...l)),onClick:l[23]||(l[23]=x(((...l)=>e.toggleMenu&&e.toggleMenu(...l)),["stop"]))},[Q(i,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:N((()=>[S("div",{class:"select-trigger",onMouseenter:l[19]||(l[19]=l=>e.inputHovering=!0),onMouseleave:l[20]||(l[20]=l=>e.inputHovering=!1)},[e.multiple?(b(),g("div",{key:0,ref:"tags",class:O(e.nsSelect.e("tags")),style:T(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(b(),G(U,{key:0,onAfterLeave:e.resetInputHeight},{default:N((()=>[S("span",{class:O([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(b(!0),g(Z,null,J(e.showTagList,(l=>(b(),G(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:N((()=>[S("span",{class:O(e.nsSelect.e("tags-text")),style:T(e.tagTextStyle)},C(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128)),e.selected.length>e.maxCollapseTags?(b(),G(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:N((()=>[e.collapseTagsTooltip?(b(),G(i,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:N((()=>[S("span",{class:O(e.nsSelect.e("tags-text"))},"+ "+C(e.selected.length-e.maxCollapseTags),3)])),content:N((()=>[S("div",{class:O(e.nsSelect.e("collapse-tags"))},[(b(!0),g(Z,null,J(e.collapseTagList,(l=>(b(),g("div",{key:e.getValueKey(l),class:O(e.nsSelect.e("collapse-tag"))},[Q(s,{class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:t=>e.deleteTag(t,l)},{default:N((()=>[S("span",{class:O(e.nsSelect.e("tags-text")),style:T({maxWidth:e.inputWidth-75+"px"})},C(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):(b(),g("span",{key:1,class:O(e.nsSelect.e("tags-text"))},"+ "+C(e.selected.length-e.maxCollapseTags),3))])),_:1},8,["size","type"])):X("v-if",!0)],2)])),_:1},8,["onAfterLeave"])):X("v-if",!0),e.collapseTags?X("v-if",!0):(b(),G(U,{key:1,onAfterLeave:e.resetInputHeight},{default:N((()=>[S("span",{class:O([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(b(!0),g(Z,null,J(e.selected,(l=>(b(),G(s,{key:e.getValueKey(l),closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,hit:l.hitState,type:e.tagType,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:N((()=>[S("span",{class:O(e.nsSelect.e("tags-text")),style:T({maxWidth:e.inputWidth-75+"px"})},C(l.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],2)])),_:1},8,["onAfterLeave"])),e.filterable?m((b(),g("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=l=>e.query=l),type:"text",class:O([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:T({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:e.inputLength/(e.inputWidth-32)+"%",maxWidth:e.inputWidth-42+"px"}),onFocus:l[1]||(l[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:l[2]||(l[2]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onKeyup:l[3]||(l[3]=(...l)=>e.managePlaceholder&&e.managePlaceholder(...l)),onKeydown:[l[4]||(l[4]=(...l)=>e.resetInputState&&e.resetInputState(...l)),l[5]||(l[5]=Y(x((l=>e.navigateOptions("next")),["prevent"]),["down"])),l[6]||(l[6]=Y(x((l=>e.navigateOptions("prev")),["prevent"]),["up"])),l[7]||(l[7]=Y(((...l)=>e.handleKeydownEscape&&e.handleKeydownEscape(...l)),["esc"])),l[8]||(l[8]=Y(x(((...l)=>e.selectOption&&e.selectOption(...l)),["stop","prevent"]),["enter"])),l[9]||(l[9]=Y(((...l)=>e.deletePrevTag&&e.deletePrevTag(...l)),["delete"])),l[10]||(l[10]=Y((l=>e.visible=!1),["tab"]))],onCompositionstart:l[11]||(l[11]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionupdate:l[12]||(l[12]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionend:l[13]||(l[13]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onInput:l[14]||(l[14]=(...l)=>e.debouncedQueryChange&&e.debouncedQueryChange(...l))},null,46,Be)),[[ee,e.query]]):X("v-if",!0)],6)):X("v-if",!0),X(" fix: https://github.com/element-plus/element-plus/issues/11415 "),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(b(),g("input",{key:1,ref:"iOSInput",class:O([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize),e.nsSelect.em("input","iOS")]),disabled:e.selectDisabled,type:"text"},null,10,ze)):X("v-if",!0),Q(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[15]||(l[15]=l=>e.selectedLabel=l),type:"text",placeholder:"function"==typeof e.currentPlaceholder?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:O([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[16]||(l[16]=Y(x((l=>e.navigateOptions("next")),["stop","prevent"]),["down"])),l[17]||(l[17]=Y(x((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),Y(x(e.selectOption,["stop","prevent"]),["enter"]),Y(e.handleKeydownEscape,["esc"]),l[18]||(l[18]=Y((l=>e.visible=!1),["tab"]))]},le({suffix:N((()=>[e.iconComponent&&!e.showClose?(b(),G(r,{key:0,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:N((()=>[(b(),G(te(e.iconComponent)))])),_:1},8,["class"])):X("v-if",!0),e.showClose&&e.clearIcon?(b(),G(r,{key:1,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:N((()=>[(b(),G(te(e.clearIcon)))])),_:1},8,["class","onClick"])):X("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:N((()=>[S("div",De,[y(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)])),content:N((()=>[Q(v,null,{default:N((()=>[m(Q(d,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:O([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&0===e.filteredOptionsCount)])},{default:N((()=>[e.showNewOption?(b(),G(p,{key:0,value:e.query,created:!0},null,8,["value"])):X("v-if",!0),Q(c,{onUpdateOptions:e.onOptionsRendered},{default:N((()=>[y(e.$slots,"default")])),_:3},8,["onUpdateOptions"])])),_:3},8,["wrap-class","view-class","class"]),[[f,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(b(),g(Z,{key:0},[e.$slots.empty?y(e.$slots,"empty",{key:0}):(b(),g("p",{key:1,class:O(e.nsSelect.be("dropdown","empty"))},C(e.emptyText),3))],64)):X("v-if",!0)])),_:3})])),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[h,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var We=h(r({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const t=u("select"),n=L(!0),i=o(),r=L([]);j(we,p({...c(e)}));const d=l(Ie);w((()=>{r.value=v(i.subTree)}));const v=e=>{const l=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var t;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?l.push(e.component.proxy):(null==(t=e.children)?void 0:t.length)&&l.push(...v(e))})),l},{groupQueryChange:h}=a(d);return s(h,(()=>{n.value=r.value.some((e=>!0===e.visible))}),{flush:"post"}),{visible:n,ns:t}}}),[["render",function(e,l,t,o,a,n){return m((b(),g("ul",{class:O(e.ns.be("group","wrap"))},[S("li",{class:O(e.ns.be("group","title"))},C(e.label),3),S("li",null,[S("ul",{class:O(e.ns.b("group"))},[y(e.$slots,"default")],2)])],2)),[[f,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Ae=oe(qe,{Option:Te,OptionGroup:We}),Fe=ae(Te);ae(We);export{Fe as E,Ae as a};
