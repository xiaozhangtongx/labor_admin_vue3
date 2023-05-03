import{_ as e,d as o,e as n,r as t,p as l,j as r,o as a,f as i,S as s,b as u,g as d,K as c,y as p,aA as m,a3 as f,R as v,aB as g,B as b,a as w,l as h,w as y,C as I,aC as E,aD as C,a2 as k,i as _,E as F,O as T,h as S,u as x,z as R,A as B,aE as O,c as $,ar as D,F as M,n as K,H as L,k as N,m as P,G,W as A,aa as z,s as j,v as H,ah as J,aF as Y,q as U}from"./index-442db11c.js";import{E as W,b as q}from"./el-button-6cab2065.js";import{c as V,u as Q,a as X,E as Z,O as ee,w as oe}from"./el-popper-f2b04c8d.js";import{E as ne}from"./el-scrollbar-8102c0d4.js";import"./el-tooltip-4ed993c7.js";import{_ as te}from"./index-4cf5760a.js";import{u as le}from"./index-21a87288.js";import{c as re}from"./refs-384f660f.js";import{F as ae}from"./focus-trap-1ae2c557.js";var ie=e(o({inheritAttrs:!1}),[["render",function(e,o,t,l,r,a){return n(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var se=e(o({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,o,t,l,r,a){return n(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const ue="data-el-collection-item",de=e=>{const o=`El${e}Collection`,n=`${o}Item`,u=Symbol(o),d=Symbol(n),c={...ie,name:o,setup(){const e=t(null),o=new Map;l(u,{itemMap:o,getItems:()=>{const n=i(e);if(!n)return[];const t=Array.from(n.querySelectorAll(`[${ue}]`));return[...o.values()].sort(((e,o)=>t.indexOf(e.ref)-t.indexOf(o.ref)))},collectionRef:e})}},p={...se,name:n,setup(e,{attrs:o}){const n=t(null),c=r(u,void 0);l(d,{collectionItemRef:n}),a((()=>{const e=i(n);e&&c.itemMap.set(e,{ref:e,...o})})),s((()=>{const e=i(n);c.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:u,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:c,ElCollectionItem:p}},ce=u({style:{type:d([String,Array,Object])},currentTabId:{type:d(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:d(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:pe,ElCollectionItem:me,COLLECTION_INJECTION_KEY:fe,COLLECTION_ITEM_INJECTION_KEY:ve}=de("RovingFocusGroup"),ge=Symbol("elRovingFocusGroup"),be=Symbol("elRovingFocusGroupItem"),we={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},he=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case c.right:return c.left;case c.left:return c.right;default:return e}})(e.key,n);if(!("vertical"===o&&[c.left,c.right].includes(t)||"horizontal"===o&&[c.up,c.down].includes(t)))return we[t]},ye=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},Ie="currentTabIdChange",Ee="rovingFocusGroup.entryFocus",Ce={bubbles:!1,cancelable:!0},ke=o({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:ce,emits:[Ie,"entryFocus"],setup(e,{emit:o}){var n;const a=t(null!=(n=e.currentTabId||e.defaultCurrentTabId)?n:null),s=t(!1),u=t(!1),d=t(null),{getItems:c}=r(fe,void 0),b=p((()=>[{outline:"none"},e.style])),w=V((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{u.value=!0})),h=V((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!i(u),{target:n,currentTarget:t}=e;if(n===t&&o&&!i(s)){const e=new Event(Ee,Ce);if(null==t||t.dispatchEvent(e),!e.defaultPrevented){const e=c().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===i(a))),...e].filter(Boolean).map((e=>e.ref));ye(o)}}u.value=!1})),y=V((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{s.value=!1}));l(ge,{currentTabbedId:m(a),loop:f(e,"loop"),tabIndex:p((()=>i(s)?-1:0)),rovingFocusGroupRef:d,rovingFocusGroupRootStyle:b,orientation:f(e,"orientation"),dir:f(e,"dir"),onItemFocus:e=>{o(Ie,e)},onItemShiftTab:()=>{s.value=!0},onBlur:y,onFocus:h,onMousedown:w}),v((()=>e.currentTabId),(e=>{a.value=null!=e?e:null})),g(d,Ee,((...e)=>{o("entryFocus",...e)}))}});var _e=e(o({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:pe,ElRovingFocusGroupImpl:e(ke,[["render",function(e,o,t,l,r,a){return n(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,o,t,l,r,a){const i=b("el-roving-focus-group-impl"),s=b("el-focus-group-collection");return w(),h(s,null,{default:y((()=>[I(i,E(C(e.$attrs)),{default:y((()=>[n(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Fe=e(o({components:{ElRovingFocusCollectionItem:me},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:n,loop:a,onItemFocus:s,onItemShiftTab:u}=r(ge,void 0),{getItems:d}=r(fe,void 0),m=le(),f=t(null),v=V((e=>{o("mousedown",e)}),(o=>{e.focusable?s(i(m)):o.preventDefault()})),g=V((e=>{o("focus",e)}),(()=>{s(i(m))})),b=V((e=>{o("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:t,currentTarget:l}=e;if(o===c.tab&&n)return void u();if(t!==l)return;const r=he(e);if(r){e.preventDefault();let o=d().filter((e=>e.focusable)).map((e=>e.ref));switch(r){case"last":o.reverse();break;case"prev":case"next":{"prev"===r&&o.reverse();const e=o.indexOf(l);o=a.value?(s=e+1,(i=o).map(((e,o)=>i[(o+s)%i.length]))):o.slice(e+1);break}}k((()=>{ye(o)}))}var i,s})),w=p((()=>n.value===i(m)));return l(be,{rovingFocusGroupItemRef:f,tabIndex:p((()=>i(w)?0:-1)),handleMousedown:v,handleFocus:g,handleKeydown:b}),{id:m,handleKeydown:b,handleFocus:g,handleMousedown:v}}}),[["render",function(e,o,t,l,r,a){const i=b("el-roving-focus-collection-item");return w(),h(i,{id:e.id,focusable:e.focusable,active:e.active},{default:y((()=>[n(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Te=u({trigger:Q.trigger,effect:{...X.effect,default:"light"},type:{type:d(String)},placement:{type:d(String),default:"bottom"},popperOptions:{type:d(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:d([Number,String]),default:0},maxHeight:{type:d([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:d(Object)},teleported:X.teleported}),Se=u({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:_}}),xe=u({onKeydown:{type:d(Function)}}),Re=[c.down,c.pageDown,c.home],Be=[c.up,c.pageUp,c.end],Oe=[...Re,...Be],{ElCollection:$e,ElCollectionItem:De,COLLECTION_INJECTION_KEY:Me,COLLECTION_ITEM_INJECTION_KEY:Ke}=de("Dropdown"),Le=Symbol("elDropdown"),{ButtonGroup:Ne}=W;var Pe=e(o({name:"ElDropdown",components:{ElButton:W,ElButtonGroup:Ne,ElScrollbar:ne,ElDropdownCollection:$e,ElTooltip:Z,ElRovingFocusGroup:_e,ElOnlyChild:ee,ElIcon:F,ArrowDown:T},props:Te,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=S(),r=x("dropdown"),{t:a}=R(),u=t(),d=t(),m=t(null),g=t(null),b=t(null),w=t(null),h=t(!1),y=[c.enter,c.space,c.down],I=p((()=>({maxHeight:B(e.maxHeight)}))),E=p((()=>[r.m(F.value)])),C=le().value,k=p((()=>e.id||C));function _(){var e;null==(e=m.value)||e.onClose()}v([u,f(e,"trigger")],(([e,o],[n])=>{var t,l,r;const a=O(o)?o:[o];(null==(t=null==n?void 0:n.$el)?void 0:t.removeEventListener)&&n.$el.removeEventListener("pointerenter",T),(null==(l=null==e?void 0:e.$el)?void 0:l.removeEventListener)&&e.$el.removeEventListener("pointerenter",T),(null==(r=null==e?void 0:e.$el)?void 0:r.addEventListener)&&a.includes("hover")&&e.$el.addEventListener("pointerenter",T)}),{immediate:!0}),s((()=>{var e,o;(null==(o=null==(e=u.value)?void 0:e.$el)?void 0:o.removeEventListener)&&u.value.$el.removeEventListener("pointerenter",T)}));const F=q();function T(){var e,o;null==(o=null==(e=u.value)?void 0:e.$el)||o.focus()}l(Le,{contentRef:g,role:p((()=>e.role)),triggerId:k,isUsingKeyboard:h,onItemEnter:function(){},onItemLeave:function(){const e=i(g);null==e||e.focus(),w.value=null}}),l("elDropdown",{instance:n,dropdownSize:F,handleClick:function(){_()},commandHandler:function(...e){o("command",...e)},trigger:f(e,"trigger"),hideOnClick:f(e,"hideOnClick")});return{t:a,ns:r,scrollbar:b,wrapStyle:I,dropdownTriggerKls:E,dropdownSize:F,triggerId:k,triggerKeys:y,currentTabId:w,handleCurrentTabIdChange:function(e){w.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){h.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:_,handleOpen:function(){var e;null==(e=m.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&g.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=g.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:m,contentRef:g,triggeringElementRef:u,referenceElementRef:d}}}),[["render",function(e,o,t,l,r,a){var i;const s=b("el-dropdown-collection"),u=b("el-roving-focus-group"),d=b("el-scrollbar"),c=b("el-only-child"),p=b("el-tooltip"),m=b("el-button"),f=b("arrow-down"),v=b("el-icon"),g=b("el-button-group");return w(),$("div",{class:K([e.ns.b(),e.ns.is("disabled",e.disabled)])},[I(p,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(i=e.referenceElementRef)?void 0:i.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},D({content:y((()=>[I(d,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:y((()=>[I(u,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:y((()=>[I(s,null,{default:y((()=>[n(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:y((()=>[I(c,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:y((()=>[n(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(w(),h(g,{key:0},{default:y((()=>[I(m,M({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:y((()=>[n(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),I(m,M({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:y((()=>[I(v,{class:K(e.ns.e("icon"))},{default:y((()=>[I(f)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):L("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Ge=o({name:"DropdownItemImpl",components:{ElIcon:F},props:Se,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const n=x("dropdown"),{role:t}=r(Le,void 0),{collectionItemRef:l}=r(Ke,void 0),{collectionItemRef:a}=r(ve,void 0),{rovingFocusGroupItemRef:i,tabIndex:s,handleFocus:u,handleKeydown:d,handleMousedown:m}=r(be,void 0),f=re(l,a,i),v=p((()=>"menu"===t.value?"menuitem":"navigation"===t.value?"link":"button")),g=V((e=>{const{code:n}=e;if(n===c.enter||n===c.space)return e.preventDefault(),e.stopImmediatePropagation(),o("clickimpl",e),!0}),d);return{ns:n,itemRef:f,dataset:{[ue]:""},role:v,tabIndex:s,handleFocus:u,handleKeydown:g,handleMousedown:m}}}),Ae=["aria-disabled","tabindex","role"];const ze=()=>{const e=r("elDropdown",{}),o=p((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var je=e(o({name:"ElDropdownItem",components:{ElDropdownCollectionItem:De,ElRovingFocusItem:Fe,ElDropdownItemImpl:e(Ge,[["render",function(e,o,t,l,r,a){const i=b("el-icon");return w(),$(A,null,[e.divided?(w(),$("li",M({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):L("v-if",!0),N("li",M({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=G(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(w(),h(i,{key:0},{default:y((()=>[(w(),h(P(e.icon)))])),_:1})):L("v-if",!0),n(e.$slots,"default")],16,Ae)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:Se,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:n}){const{elDropdown:l}=ze(),a=S(),s=t(null),u=p((()=>{var e,o;return null!=(o=null==(e=i(s))?void 0:e.textContent)?o:""})),{onItemEnter:d,onItemLeave:c}=r(Le,void 0),m=V((e=>(o("pointermove",e),e.defaultPrevented)),oe((o=>{if(e.disabled)return void c(o);const n=o.currentTarget;n===document.activeElement||n.contains(document.activeElement)||(d(o),o.defaultPrevented||null==n||n.focus())}))),f=V((e=>(o("pointerleave",e),e.defaultPrevented)),oe((e=>{c(e)})));return{handleClick:V((n=>{if(!e.disabled)return o("click",n),"keydown"!==n.type&&n.defaultPrevented}),(o=>{var n,t,r;e.disabled?o.stopImmediatePropagation():((null==(n=null==l?void 0:l.hideOnClick)?void 0:n.value)&&(null==(t=l.handleClick)||t.call(l)),null==(r=l.commandHandler)||r.call(l,e.command,a,o))})),handlePointerMove:m,handlePointerLeave:f,textContent:u,propsAndAttrs:p((()=>({...e,...n})))}}}),[["render",function(e,o,t,l,r,a){var i;const s=b("el-dropdown-item-impl"),u=b("el-roving-focus-item"),d=b("el-dropdown-collection-item");return w(),h(d,{disabled:e.disabled,"text-value":null!=(i=e.textValue)?i:e.textContent},{default:y((()=>[I(u,{focusable:!e.disabled},{default:y((()=>[I(s,M(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:y((()=>[n(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const He=o({name:"ElDropdownMenu",props:xe,setup(e){const o=x("dropdown"),{_elDropdownSize:n}=ze(),t=n.value,{focusTrapRef:l,onKeydown:a}=r(ae,void 0),{contentRef:s,role:u,triggerId:d}=r(Le,void 0),{collectionRef:m,getItems:f}=r(Me,void 0),{rovingFocusGroupRef:v,rovingFocusGroupRootStyle:g,tabIndex:b,onBlur:w,onFocus:h,onMousedown:y}=r(ge,void 0),{collectionRef:I}=r(fe,void 0),E=p((()=>[o.b("menu"),o.bm("menu",null==t?void 0:t.value)])),C=re(s,m,l,v,I),k=V((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),c.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==i(s))return;if(!Oe.includes(n))return;const l=f().filter((e=>!e.disabled)).map((e=>e.ref));Be.includes(n)&&l.reverse(),ye(l)}));return{size:t,rovingFocusGroupRootStyle:g,tabIndex:b,dropdownKls:E,role:u,triggerId:d,dropdownListWrapperRef:C,handleKeydown:e=>{k(e),a(e)},onBlur:w,onFocus:h,onMousedown:y}}}),Je=["role","aria-labelledby"];var Ye=e(He,[["render",function(e,o,t,l,r,a){return w(),$("ul",{ref:e.dropdownListWrapperRef,class:K(e.dropdownKls),style:z(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=G(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=G(((...o)=>e.onMousedown&&e.onMousedown(...o)),["self"]))},[n(e.$slots,"default")],46,Je)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Ue=j(Pe,{DropdownItem:je,DropdownMenu:Ye}),We=H(je),qe=H(Ye),Ve=o({__name:"index",setup(e){const{themeList:o,activeThemeName:n,setTheme:t}=Y(),l=e=>{t(e)};return(e,t)=>{const r=te,a=Z,s=We,u=qe,d=Ue;return w(),h(d,{trigger:"click",onCommand:l},{dropdown:y((()=>[I(u,null,{default:y((()=>[(w(!0),$(A,null,J(i(o),((e,o)=>(w(),h(s,{key:o,disabled:i(n)===e.name,command:e.name},{default:y((()=>[N("span",null,U(e.title),1)])),_:2},1032,["disabled","command"])))),128))])),_:1})])),default:y((()=>[N("div",null,[I(a,{effect:"dark",content:"主题模式",placement:"bottom"},{default:y((()=>[I(r,{name:"i-icon-park-outline-theme text-xl"})])),_:1})])])),_:1})}}});export{We as E,Ve as _,qe as a,Ue as b,Te as d};
