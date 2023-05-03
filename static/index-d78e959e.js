import{bb as e,Q as t,a1 as n,d as o,u as d,j as a,U as r,_ as s,p as l,r as i,M as c,L as h,E as u,a9 as p,h as f,R as g,a2 as v,bZ as y,b7 as m,V as k,B as C,D as N,I as x,a as b,c as E,k as D,l as w,w as K,m as S,n as A,G as T,H as _,C as B,aa as I,W as L,ah as j,aL as M,o as O,ba as $,aB as z,K as q,i as P,z as R,y as F,q as U,ag as H,an as V,a4 as Q,F as W,f as G,bz as Y}from"./index-442db11c.js";import{E as Z}from"./el-dialog-86c454b9.js";import"./el-overlay-d1673d35.js";import{a as J,E as X}from"./el-form-item-644922ab.js";import{f as ee,E as te}from"./el-button-6cab2065.js";import{g as ne,u as oe,a as de,d as ae,b as re,c as se}from"./index-4bf3a8da.js";import{E as le}from"./index-654dfca9.js";import{_ as ie}from"./index-c85b0d5e.js";import{E as ce}from"./index-51c9533a.js";import"./index-5cf9a293.js";import"./focus-trap-1ae2c557.js";import"./scroll-327f18e0.js";import"./refs-384f660f.js";import"./index-78074203.js";import"./index-21a87288.js";import"./index-43c84df1.js";import"./index-b8912c04.js";import"./aria-49c72c55.js";import"./validator-fc4b1283.js";import"./isEqual-34ff0f4b.js";import"./flatten-f26fac34.js";const he="$treeNodeId",ue=function(e,t){t&&!t[he]&&Object.defineProperty(t,he,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},pe=function(e,t){return e?t[e]:t[he]},fe=(e,t,n)=>{const o=e.value.currentNode;n();const d=e.value.currentNode;o!==d&&t("current-change",d?d.data:null,d)},ge=e=>{let t=!0,n=!0,o=!0;for(let d=0,a=e.length;d<a;d++){const a=e[d];(!0!==a.checked||a.indeterminate)&&(t=!1,a.disabled||(o=!1)),(!1!==a.checked||a.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:o,half:!t&&!n}},ve=function(e){if(0===e.childNodes.length||e.loading)return;const{all:t,none:n,half:o}=ge(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):o?(e.checked=!1,e.indeterminate=!0):n&&(e.checked=!1,e.indeterminate=!1);const d=e.parent;d&&0!==d.level&&(e.store.checkStrictly||ve(d))},ye=function(e,t){const n=e.store.props,o=e.data||{},d=n[t];if("function"==typeof d)return d(o,e);if("string"==typeof d)return o[d];if(void 0===d){const e=o[t];return void 0===e?"":e}};let me=0;class ke{constructor(t){this.id=me++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in t)e(t,n)&&(this[n]=t[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const t=e.props;if(t&&void 0!==t.isLeaf){const e=ye(this,"isLeaf");"boolean"==typeof e&&(this.isLeafByUser=e)}if(!0!==e.lazy&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||ue(this,this.data),!this.data)return;const n=e.defaultExpandedKeys,o=e.key;o&&n&&n.includes(this.key)&&this.expand(null,e.autoExpandParent),o&&void 0!==e.currentNodeKey&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),!this.parent||1!==this.level&&!0!==this.parent.expanded||(this.canFocus=!0)}setData(e){let t;Array.isArray(e)||ue(this,e),this.data=e,this.childNodes=[],t=0===this.level&&Array.isArray(this.data)?this.data:ye(this,"children")||[];for(let n=0,o=t.length;n<o;n++)this.insertChild({data:t[n]})}get label(){return ye(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return ye(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}get previousSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}contains(e,t=!0){return(this.childNodes||[]).some((n=>n===e||t&&n.contains(e)))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,o){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof ke)){if(!o){const t=this.getChildren(!0);t.includes(e.data)||(void 0===n||n<0?t.push(e.data):t.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),(e=t(new ke(e)))instanceof ke&&e.initialize()}e.level=this.level+1,void 0===n||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,t){let n;t&&(n=this.childNodes.indexOf(t)),this.insertChild(e,n)}insertAfter(e,t){let n;t&&(n=this.childNodes.indexOf(t),-1!==n&&(n+=1)),this.insertChild(e,n)}removeChild(e){const t=this.getChildren()||[],n=t.indexOf(e.data);n>-1&&t.splice(n,1);const o=this.childNodes.indexOf(e);o>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(o,1)),this.updateLeafState()}removeChildByData(e){let t=null;for(let n=0;n<this.childNodes.length;n++)if(this.childNodes[n].data===e){t=this.childNodes[n];break}t&&this.removeChild(t)}expand(e,t){const n=()=>{if(t){let e=this.parent;for(;e.level>0;)e.expanded=!0,e=e.parent}this.expanded=!0,e&&e(),this.childNodes.forEach((e=>{e.canFocus=!0}))};this.shouldLoadData()?this.loadData((e=>{Array.isArray(e)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||ve(this),n())})):n()}doCreateChildren(e,t={}){e.forEach((e=>{this.insertChild(Object.assign({data:e},t),void 0,!0)}))}collapse(){this.expanded=!1,this.childNodes.forEach((e=>{e.canFocus=!1}))}shouldLoadData(){return!0===this.store.lazy&&this.store.load&&!this.loaded}updateLeafState(){if(!0===this.store.lazy&&!0!==this.loaded&&void 0!==this.isLeafByUser)return void(this.isLeaf=this.isLeafByUser);const e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}setChecked(e,t,n,o){if(this.indeterminate="half"===e,this.checked=!0===e,this.store.checkStrictly)return;if(!this.shouldLoadData()||this.store.checkDescendants){const{all:n,allWithoutDisable:d}=ge(this.childNodes);this.isLeaf||n||!d||(this.checked=!1,e=!1);const a=()=>{if(t){const n=this.childNodes;for(let r=0,s=n.length;r<s;r++){const d=n[r];o=o||!1!==e;const a=d.disabled?d.checked:o;d.setChecked(a,t,!0,o)}const{half:d,all:a}=ge(n);a||(this.checked=a,this.indeterminate=d)}};if(this.shouldLoadData())return void this.loadData((()=>{a(),ve(this)}),{checked:!1!==e});a()}const d=this.parent;d&&0!==d.level&&(n||ve(d))}getChildren(e=!1){if(0===this.level)return this.data;const t=this.data;if(!t)return null;const n=this.store.props;let o="children";return n&&(o=n.children||"children"),void 0===t[o]&&(t[o]=null),e&&!t[o]&&(t[o]=[]),t[o]}updateChildren(){const e=this.getChildren()||[],t=this.childNodes.map((e=>e.data)),n={},o=[];e.forEach(((e,d)=>{const a=e[he];!!a&&t.findIndex((e=>e[he]===a))>=0?n[a]={index:d,data:e}:o.push({index:d,data:e})})),this.store.lazy||t.forEach((e=>{n[e[he]]||this.removeChildByData(e)})),o.forEach((({index:e,data:t})=>{this.insertChild({data:t},e)})),this.updateLeafState()}loadData(e,t={}){if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(t).length)e&&e.call(this);else{this.loading=!0;const n=n=>{this.childNodes=[],this.doCreateChildren(n,t),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,n)}}}class Ce{constructor(t){this.currentNode=null,this.currentNodeKey=null;for(const n in t)e(t,n)&&(this[n]=t[n]);this.nodesMap={}}initialize(){if(this.root=new ke({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){(0,this.load)(this.root,(e=>{this.root.doCreateChildren(e),this._initDefaultCheckedNodes()}))}else this._initDefaultCheckedNodes()}filter(e){const t=this.filterNodeMethod,n=this.lazy,o=function(d){const a=d.root?d.root.childNodes:d.childNodes;if(a.forEach((n=>{n.visible=t.call(n,e,n.data,n),o(n)})),!d.visible&&a.length){let e=!0;e=!a.some((e=>e.visible)),d.root?d.root.visible=!1===e:d.visible=!1===e}e&&(!d.visible||d.isLeaf||n||d.expand())};o(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof ke)return e;const t=n(e)?pe(this.key,e):e;return this.nodesMap[t]||null}insertBefore(e,t){const n=this.getNode(t);n.parent.insertBefore({data:e},n)}insertAfter(e,t){const n=this.getNode(t);n.parent.insertAfter({data:e},n)}remove(e){const t=this.getNode(e);t&&t.parent&&(t===this.currentNode&&(this.currentNode=null),t.parent.removeChild(t))}append(e,t){const n=t?this.getNode(t):this.root;n&&n.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],t=this.nodesMap;e.forEach((e=>{const n=t[e];n&&n.setChecked(!0,!this.checkStrictly)}))}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const t=this.key;if(e&&e.data)if(t){void 0!==e.key&&(this.nodesMap[e.key]=e)}else this.nodesMap[e.id]=e}deregisterNode(e){this.key&&e&&e.data&&(e.childNodes.forEach((e=>{this.deregisterNode(e)})),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,t=!1){const n=[],o=function(d){(d.root?d.root.childNodes:d.childNodes).forEach((d=>{(d.checked||t&&d.indeterminate)&&(!e||e&&d.isLeaf)&&n.push(d.data),o(d)}))};return o(this),n}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map((e=>(e||{})[this.key]))}getHalfCheckedNodes(){const e=[],t=function(n){(n.root?n.root.childNodes:n.childNodes).forEach((n=>{n.indeterminate&&e.push(n.data),t(n)}))};return t(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map((e=>(e||{})[this.key]))}_getAllNodes(){const t=[],n=this.nodesMap;for(const o in n)e(n,o)&&t.push(n[o]);return t}updateChildren(e,t){const n=this.nodesMap[e];if(!n)return;const o=n.childNodes;for(let d=o.length-1;d>=0;d--){const e=o[d];this.remove(e.data)}for(let d=0,a=t.length;d<a;d++){const e=t[d];this.append(e,n.data)}}_setCheckedKeys(e,t=!1,n){const o=this._getAllNodes().sort(((e,t)=>t.level-e.level)),d=Object.create(null),a=Object.keys(n);o.forEach((e=>e.setChecked(!1,!1)));for(let r=0,s=o.length;r<s;r++){const n=o[r],s=n.data[e].toString();if(!a.includes(s)){n.checked&&!d[s]&&n.setChecked(!1,!1);continue}let l=n.parent;for(;l&&l.level>0;)d[l.data[e]]=!0,l=l.parent;if(n.isLeaf||this.checkStrictly)n.setChecked(!0,!1);else if(n.setChecked(!0,!0),t){n.setChecked(!1,!1);const e=function(t){t.childNodes.forEach((t=>{t.isLeaf||t.setChecked(!1,!1),e(t)}))};e(n)}}}setCheckedNodes(e,t=!1){const n=this.key,o={};e.forEach((e=>{o[(e||{})[n]]=!0})),this._setCheckedKeys(n,t,o)}setCheckedKeys(e,t=!1){this.defaultCheckedKeys=e;const n=this.key,o={};e.forEach((e=>{o[e]=!0})),this._setCheckedKeys(n,t,o)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach((e=>{const t=this.getNode(e);t&&t.expand(null,this.autoExpandParent)}))}setChecked(e,t,n){const o=this.getNode(e);o&&o.setChecked(!!t,n)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const t=this.currentNode;t&&(t.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,t=!0){const n=e[this.key],o=this.nodesMap[n];this.setCurrentNode(o),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,t=!0){if(null==e)return this.currentNode&&(this.currentNode.isCurrent=!1),void(this.currentNode=null);const n=this.getNode(e);n&&(this.setCurrentNode(n),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}var Ne=s(o({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(e){const t=d("tree"),n=a("NodeInstance"),o=a("RootTree");return()=>{const d=e.node,{data:a,store:s}=d;return e.renderContent?e.renderContent(r,{_self:n,node:d,data:a,store:s}):o.ctx.slots.default?o.ctx.slots.default({node:d,data:a}):r("span",{class:t.be("node","label")},[d.label])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function xe(e){const t=a("TreeNodeMap",null),n={treeNodeExpand:t=>{e.node!==t&&e.node.collapse()},children:[]};return t&&t.children.push(n),l("TreeNodeMap",n),{broadcastExpanded:t=>{if(e.accordion)for(const e of n.children)e.treeNodeExpand(t)}}}const be=Symbol("dragEvents");const Ee=o({name:"ElTreeNode",components:{ElCollapseTransition:ie,ElCheckbox:ce,NodeContent:Ne,ElIcon:u,Loading:p},props:{node:{type:ke,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(e,t){const n=d("tree"),{broadcastExpanded:o}=xe(e),r=a("RootTree"),s=i(!1),c=i(!1),h=i(null),u=i(null),p=i(null),C=a(be),N=f();l("NodeInstance",N),e.node.expanded&&(s.value=!0,c.value=!0);const x=r.props.children||"children";g((()=>{const t=e.node.data[x];return t&&[...t]}),(()=>{e.node.updateChildren()})),g((()=>e.node.indeterminate),(t=>{b(e.node.checked,t)})),g((()=>e.node.checked),(t=>{b(t,e.node.indeterminate)})),g((()=>e.node.expanded),(e=>{v((()=>s.value=e)),e&&(c.value=!0)}));const b=(t,n)=>{h.value===t&&u.value===n||r.ctx.emit("check-change",e.node.data,t,n),h.value=t,u.value=n},E=()=>{e.node.isLeaf||(s.value?(r.ctx.emit("node-collapse",e.node.data,e.node,N),e.node.collapse()):(e.node.expand(),t.emit("node-expand",e.node.data,e.node,N)))},D=(t,n)=>{e.node.setChecked(n.target.checked,!r.props.checkStrictly),v((()=>{const t=r.store.value;r.ctx.emit("check",e.node.data,{checkedNodes:t.getCheckedNodes(),checkedKeys:t.getCheckedKeys(),halfCheckedNodes:t.getHalfCheckedNodes(),halfCheckedKeys:t.getHalfCheckedKeys()})}))};return{ns:n,node$:p,tree:r,expanded:s,childNodeRendered:c,oldChecked:h,oldIndeterminate:u,getNodeKey:e=>pe(r.props.nodeKey,e.data),getNodeClass:t=>{const n=e.props.class;if(!n)return{};let o;if(m(n)){const{data:e}=t;o=n(e,t)}else o=n;return k(o)?{[o]:!0}:o},handleSelectChange:b,handleClick:t=>{fe(r.store,r.ctx.emit,(()=>r.store.value.setCurrentNode(e.node))),r.currentNode.value=e.node,r.props.expandOnClickNode&&E(),r.props.checkOnClickNode&&!e.node.disabled&&D(null,{target:{checked:!e.node.checked}}),r.ctx.emit("node-click",e.node.data,e.node,N,t)},handleContextMenu:t=>{r.instance.vnode.props.onNodeContextmenu&&(t.stopPropagation(),t.preventDefault()),r.ctx.emit("node-contextmenu",t,e.node.data,e.node,N)},handleExpandIconClick:E,handleCheckChange:D,handleChildNodeExpand:(e,t,n)=>{o(t),r.ctx.emit("node-expand",e,t,n)},handleDragStart:t=>{r.props.draggable&&C.treeNodeDragStart({event:t,treeNode:e})},handleDragOver:t=>{t.preventDefault(),r.props.draggable&&C.treeNodeDragOver({event:t,treeNode:{$el:p.value,node:e.node}})},handleDrop:e=>{e.preventDefault()},handleDragEnd:e=>{r.props.draggable&&C.treeNodeDragEnd(e)},CaretRight:y}}}),De=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],we=["aria-expanded"];var Ke=s(o({name:"ElTree",components:{ElTreeNode:s(Ee,[["render",function(e,t,n,o,d,a){const r=C("el-icon"),s=C("el-checkbox"),l=C("loading"),i=C("node-content"),c=C("el-tree-node"),h=C("el-collapse-transition");return N((b(),E("div",{ref:"node$",class:A([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:t[1]||(t[1]=T(((...t)=>e.handleClick&&e.handleClick(...t)),["stop"])),onContextmenu:t[2]||(t[2]=(...t)=>e.handleContextMenu&&e.handleContextMenu(...t)),onDragstart:t[3]||(t[3]=T(((...t)=>e.handleDragStart&&e.handleDragStart(...t)),["stop"])),onDragover:t[4]||(t[4]=T(((...t)=>e.handleDragOver&&e.handleDragOver(...t)),["stop"])),onDragend:t[5]||(t[5]=T(((...t)=>e.handleDragEnd&&e.handleDragEnd(...t)),["stop"])),onDrop:t[6]||(t[6]=T(((...t)=>e.handleDrop&&e.handleDrop(...t)),["stop"]))},[D("div",{class:A(e.ns.be("node","content")),style:I({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?(b(),w(r,{key:0,class:A([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:T(e.handleExpandIconClick,["stop"])},{default:K((()=>[(b(),w(S(e.tree.props.icon||e.CaretRight)))])),_:1},8,["class","onClick"])):_("v-if",!0),e.showCheckbox?(b(),w(s,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:t[0]||(t[0]=T((()=>{}),["stop"])),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):_("v-if",!0),e.node.loading?(b(),w(r,{key:2,class:A([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:K((()=>[B(l)])),_:1},8,["class"])):_("v-if",!0),B(i,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),B(h,null,{default:K((()=>[!e.renderAfterExpand||e.childNodeRendered?N((b(),E("div",{key:0,class:A(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[(b(!0),E(L,null,j(e.node.childNodes,(t=>(b(),w(c,{key:e.getNodeKey(t),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:t,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"])))),128))],10,we)),[[x,e.expanded]]):_("v-if",!0)])),_:1})],42,De)),[[x,e.node.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]])},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:P}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(e,t){const{t:n}=R(),o=d("tree"),a=i(new Ce({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));a.value.initialize();const r=i(a.value.root),s=i(null),u=i(null),p=i(null),{broadcastExpanded:v}=xe(e),{dragState:y}=function({props:e,ctx:t,el$:n,dropIndicator$:o,store:a}){const r=d("tree"),s=i({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return l(be,{treeNodeDragStart:({event:n,treeNode:o})=>{if("function"==typeof e.allowDrag&&!e.allowDrag(o.node))return n.preventDefault(),!1;n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain","")}catch(d){}s.value.draggingNode=o,t.emit("node-drag-start",o.node,n)},treeNodeDragOver:({event:d,treeNode:a})=>{const l=a,i=s.value.dropNode;i&&i!==l&&c(i.$el,r.is("drop-inner"));const u=s.value.draggingNode;if(!u||!l)return;let p=!0,f=!0,g=!0,v=!0;"function"==typeof e.allowDrop&&(p=e.allowDrop(u.node,l.node,"prev"),v=f=e.allowDrop(u.node,l.node,"inner"),g=e.allowDrop(u.node,l.node,"next")),d.dataTransfer.dropEffect=f||p||g?"move":"none",(p||f||g)&&i!==l&&(i&&t.emit("node-drag-leave",u.node,i.node,d),t.emit("node-drag-enter",u.node,l.node,d)),(p||f||g)&&(s.value.dropNode=l),l.node.nextSibling===u.node&&(g=!1),l.node.previousSibling===u.node&&(p=!1),l.node.contains(u.node,!1)&&(f=!1),(u.node===l.node||u.node.contains(l.node))&&(p=!1,f=!1,g=!1);const y=l.$el.getBoundingClientRect(),m=n.value.getBoundingClientRect();let k;const C=p?f?.25:g?.45:1:-1,N=g?f?.75:p?.55:0:1;let x=-9999;const b=d.clientY-y.top;k=b<y.height*C?"before":b>y.height*N?"after":f?"inner":"none";const E=l.$el.querySelector(`.${r.be("node","expand-icon")}`).getBoundingClientRect(),D=o.value;"before"===k?x=E.top-m.top:"after"===k&&(x=E.bottom-m.top),D.style.top=`${x}px`,D.style.left=E.right-m.left+"px","inner"===k?h(l.$el,r.is("drop-inner")):c(l.$el,r.is("drop-inner")),s.value.showDropIndicator="before"===k||"after"===k,s.value.allowDrop=s.value.showDropIndicator||v,s.value.dropType=k,t.emit("node-drag-over",u.node,l.node,d)},treeNodeDragEnd:e=>{const{draggingNode:n,dropType:o,dropNode:d}=s.value;if(e.preventDefault(),e.dataTransfer.dropEffect="move",n&&d){const s={data:n.node.data};"none"!==o&&n.node.remove(),"before"===o?d.node.parent.insertBefore(s,d.node):"after"===o?d.node.parent.insertAfter(s,d.node):"inner"===o&&d.node.insertChild(s),"none"!==o&&a.value.registerNode(s),c(d.$el,r.is("drop-inner")),t.emit("node-drag-end",n.node,d.node,o,e),"none"!==o&&t.emit("node-drop",n.node,d.node,o,e)}n&&!d&&t.emit("node-drag-end",n.node,null,o,e),s.value.showDropIndicator=!1,s.value.draggingNode=null,s.value.dropNode=null,s.value.allowDrop=!0}}),{dragState:s}}({props:e,ctx:t,el$:u,dropIndicator$:p,store:a});!function({el$:e},t){const n=d("tree"),o=M([]),a=M([]);O((()=>{r()})),$((()=>{o.value=Array.from(e.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"))})),g(a,(e=>{e.forEach((e=>{e.setAttribute("tabindex","-1")}))})),z(e,"keydown",(d=>{const a=d.target;if(!a.className.includes(n.b("node")))return;const r=d.code;o.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const s=o.value.indexOf(a);let l;if([q.up,q.down].includes(r)){if(d.preventDefault(),r===q.up){l=-1===s?0:0!==s?s-1:o.value.length-1;const e=l;for(;!t.value.getNode(o.value[l].dataset.key).canFocus;){if(l--,l===e){l=-1;break}l<0&&(l=o.value.length-1)}}else{l=-1===s?0:s<o.value.length-1?s+1:0;const e=l;for(;!t.value.getNode(o.value[l].dataset.key).canFocus;){if(l++,l===e){l=-1;break}l>=o.value.length&&(l=0)}}-1!==l&&o.value[l].focus()}[q.left,q.right].includes(r)&&(d.preventDefault(),a.click());const i=a.querySelector('[type="checkbox"]');[q.enter,q.space].includes(r)&&i&&(d.preventDefault(),i.click())}));const r=()=>{var t;o.value=Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(e.value.querySelectorAll("input[type=checkbox]"));const d=e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);d.length?d[0].setAttribute("tabindex","0"):null==(t=o.value[0])||t.setAttribute("tabindex","0")}}({el$:u},a);const m=F((()=>{const{childNodes:e}=r.value;return!e||0===e.length||e.every((({visible:e})=>!e))}));g((()=>e.currentNodeKey),(e=>{a.value.setCurrentNodeKey(e)})),g((()=>e.defaultCheckedKeys),(e=>{a.value.setDefaultCheckedKey(e)})),g((()=>e.defaultExpandedKeys),(e=>{a.value.setDefaultExpandedKeys(e)})),g((()=>e.data),(e=>{a.value.setData(e)}),{deep:!0}),g((()=>e.checkStrictly),(e=>{a.value.checkStrictly=e}));const k=()=>{const e=a.value.getCurrentNode();return e?e.data:null};return l("RootTree",{ctx:t,props:e,store:a,root:r,currentNode:s,instance:f()}),l(ee,void 0),{ns:o,store:a,root:r,currentNode:s,dragState:y,el$:u,dropIndicator$:p,isEmpty:m,filter:t=>{if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");a.value.filter(t)},getNodeKey:t=>pe(e.nodeKey,t.data),getNodePath:t=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const n=a.value.getNode(t);if(!n)return[];const o=[n.data];let d=n.parent;for(;d&&d!==r.value;)o.push(d.data),d=d.parent;return o.reverse()},getCheckedNodes:(e,t)=>a.value.getCheckedNodes(e,t),getCheckedKeys:e=>a.value.getCheckedKeys(e),getCurrentNode:k,getCurrentKey:()=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const t=k();return t?t[e.nodeKey]:null},setCheckedNodes:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");a.value.setCheckedNodes(t,n)},setCheckedKeys:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");a.value.setCheckedKeys(t,n)},setChecked:(e,t,n)=>{a.value.setChecked(e,t,n)},getHalfCheckedNodes:()=>a.value.getHalfCheckedNodes(),getHalfCheckedKeys:()=>a.value.getHalfCheckedKeys(),setCurrentNode:(n,o=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");fe(a,t.emit,(()=>a.value.setUserCurrentNode(n,o)))},setCurrentKey:(n,o=!0)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");fe(a,t.emit,(()=>a.value.setCurrentNodeKey(n,o)))},t:n,getNode:e=>a.value.getNode(e),remove:e=>{a.value.remove(e)},append:(e,t)=>{a.value.append(e,t)},insertBefore:(e,t)=>{a.value.insertBefore(e,t)},insertAfter:(e,t)=>{a.value.insertAfter(e,t)},handleNodeExpand:(e,n,o)=>{v(n),t.emit("node-expand",e,n,o)},updateKeyChildren:(t,n)=>{if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");a.value.updateChildren(t,n)}}}}),[["render",function(e,t,n,o,d,a){var r;const s=C("el-tree-node");return b(),E("div",{ref:"el$",class:A([e.ns.b(),e.ns.is("dragging",!!e.dragState.draggingNode),e.ns.is("drop-not-allow",!e.dragState.allowDrop),e.ns.is("drop-inner","inner"===e.dragState.dropType),{[e.ns.m("highlight-current")]:e.highlightCurrent}]),role:"tree"},[(b(!0),E(L,null,j(e.root.childNodes,(t=>(b(),w(s,{key:e.getNodeKey(t),node:t,props:e.props,accordion:e.accordion,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,"render-content":e.renderContent,onNodeExpand:e.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"])))),128)),e.isEmpty?(b(),E("div",{key:0,class:A(e.ns.e("empty-block"))},[D("span",{class:A(e.ns.e("empty-text"))},U(null!=(r=e.emptyText)?r:e.t("el.tree.emptyText")),3)],2)):_("v-if",!0),N(D("div",{ref:"dropIndicator$",class:A(e.ns.e("drop-indicator"))},null,2),[[x,e.dragState.showDropIndicator]])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);Ke.install=e=>{e.component(Ke.name,Ke)};const Se=Ke,Ae={class:"app-container"},Te=D("span",{class:"i-ph-pencil-line-light mr-1"},null,-1),_e=D("span",{class:"i-material-symbols-delete-outline-rounded mr-1"},null,-1),Be=D("span",{class:"i-icon-park-outline-permissions mr-1"},null,-1),Ie=o({name:"VxeTable"}),Le=o({...Ie,setup(e){const n=H(),o=i(!1),d=i(!1),a={children:"children",label:"menuTitle"},r=i(),s=t({menuIds:[],roleId:""}),l=i();O((()=>{(async()=>{o.value=!0;const{data:e}=await Y();o.value=!1,r.value=[...e]})()}));const c=i(),h=i(),u=i(),p=t({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return null==(e=h.value)||e.clearValidate(),Promise.resolve()}}),f=t({loading:!0,border:!0,autoResize:!0,showHeaderOverflow:!0,showOverflow:!0,keepSource:!0,columnConfig:{resizable:!0},pagerConfig:{align:"right"},printConfig:{columns:[{field:"username"},{field:"phoneNum"},{field:"roles"},{field:"avatar"}]},formConfig:{items:[{field:"roleName",itemRender:{name:"$input",props:{placeholder:"请输入角色名",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,export:!0,print:!0,zoom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},exportConfig:{modes:["current","selected","all"]},columns:[{type:"checkbox",width:"50px"},{field:"roleName",title:"角色名"},{field:"roleCode",title:"角色标识"},{field:"des",title:"角色描述"},{field:"createTime",title:"创建时间"},{field:"updateTime",title:"上次更新时间"},{title:"操作",width:"370px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(f.loading=!0,y.clearTable(),new Promise((n=>{let o=0,d=[];const a=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(o=t.total),Array.isArray(t.records)&&(d=t.records)}f.loading=!1,n({total:o,result:d})},r={roleName:t.roleName||"",size:e.pageSize,current:e.currentPage};ne(r).then(a).catch(a)})))}}}),g=t({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{id:"",roleName:"",roleCode:"",des:""},items:[{field:"roleName",title:"角色名",itemRender:{name:"$input",props:{placeholder:"请输入角色名"}}},{field:"roleCode",title:"角色标识",itemRender:{name:"$input",props:{placeholder:"请输入角色标识"}}},{field:"des",title:"角色描述",itemRender:{name:"$input",props:{placeholder:"请输入角色描述"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return null==(e=u.value)?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>y.onSubmitForm()}}]}}],rules:{roleName:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入角色名称")}],roleCode:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入角色标识")}]}}),y=t({isUpdate:!0,commitQuery:()=>{var e;return null==(e=c.value)?void 0:e.commitProxy("query")},clearTable:()=>{var e;return null==(e=c.value)?void 0:e.reloadData([])},onShowModal:e=>{var t;e?(y.isUpdate=!0,p.title="修改角色",g.data.id=e.id,g.data.roleName=e.roleName,g.data.roleCode=e.roleCode,g.data.des=e.des):(y.isUpdate=!1,p.title="新增角色"),null==(t=u.value)||t.open(),v((()=>{var e,t;!y.isUpdate&&(null==(e=h.value)||e.reset()),null==(t=h.value)||t.clearValidate()}))},onSubmitForm:()=>{var e;g.loading||null==(e=h.value)||e.validate((e=>{if(e)return;g.loading=!0;const t=e=>{var t;g.loading=!1,200===e.code&&(null==(t=u.value)||t.close(),V.success("操作成功"),!y.isUpdate&&y.afterInsert(),y.commitQuery())};y.isUpdate?oe(g.data).then((e=>t(e))).catch((e=>t(e))):de(g.data).then((e=>t(e))).catch((e=>t(e))),g.data={}}))},afterInsert:()=>{var e,t;const n=null==(t=null==(e=c.value)?void 0:e.getProxyInfo())?void 0:t.pager;if(n){n.currentPage*n.pageSize===n.total&&++n.currentPage}},onDelete:e=>{const t=`确定 <strong style='color:red;'>删除</strong><strong style='color:#409eff;'> ${e.roleName}</strong>这个角色吗 ？`;le.confirm(t,"提示",{type:"error",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{ae(e.id).then((()=>{V.success("删除成功"),y.afterDelete(),y.commitQuery()})).catch((()=>1))})).catch((()=>1))},onSetPermission:e=>{s.roleId=e.id,s.menuIds=[],e.menus.forEach((e=>{"0"!==e.parentId&&s.menuIds.push(e.id)})),d.value=!0},afterDelete:()=>{var e,t;const n=c.value.getData(),o=null==(t=null==(e=c.value)?void 0:e.getProxyInfo())?void 0:t.pager;o&&o.currentPage>1&&1===n.length&&--o.currentPage},onDeleteRoles:()=>{le.confirm("确定 <strong style='color:red;'>删除</strong> 这些角色吗？","提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{var e;const t=null==(e=c.value)?void 0:e.getCheckboxRecords().map((e=>e.id));re(t).then((e=>{V.success(e.msg)})).catch((e=>{V.error(e.msg)})).finally((()=>{y.afterDelete(),y.commitQuery()}))})).catch((()=>1))}});return(e,t)=>{const o=C("vxe-button"),i=te,v=C("vxe-grid"),m=C("vxe-form"),k=C("vxe-modal"),N=J,x=X,D=Z;return b(),E("div",Ae,[B(v,W({ref_key:"xGridDom",ref:c},f),{"toolbar-btns":K((()=>[B(o,{status:"primary",icon:"vxe-icon-add",onClick:t[0]||(t[0]=e=>y.onShowModal())},{default:K((()=>[Q(" 新增角色 ")])),_:1}),B(o,{status:"danger",icon:"vxe-icon-delete",onClick:t[1]||(t[1]=e=>y.onDeleteRoles())},{default:K((()=>[Q(" 批量删除 ")])),_:1})])),"row-operate":K((({row:e})=>[B(i,{link:"",type:"primary",onClick:t=>y.onShowModal(e)},{default:K((()=>[Te,Q(" 修改 ")])),_:2},1032,["onClick"]),B(i,{link:"",type:"danger",onClick:t=>y.onDelete(e)},{default:K((()=>[_e,Q(" 删除 ")])),_:2},1032,["onClick"]),B(i,{link:"",type:"info",onClick:t=>y.onSetPermission(e)},{default:K((()=>[Be,Q(" 分配权限 ")])),_:2},1032,["onClick"])])),_:1},16),B(k,W({ref_key:"xModalDom",ref:u},p),{default:K((()=>[B(m,W({ref_key:"xFormDom",ref:h},g),null,16)])),_:1},16),B(D,{modelValue:d.value,"onUpdate:modelValue":t[5]||(t[5]=e=>d.value=e),title:"分配权限",width:"600px"},{default:K((()=>[B(x,{model:s},{default:K((()=>[B(N,{modelValue:s.menuIds,"onUpdate:modelValue":t[2]||(t[2]=e=>s.menuIds=e)},{default:K((()=>[B(G(Se),{ref_key:"treeRef",ref:l,data:r.value,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":!0,"default-checked-keys":s.menuIds,props:a},null,8,["data","default-checked-keys"])])),_:1},8,["modelValue"]),B(N,null,{default:K((()=>[B(i,{type:"primary",onClick:t[3]||(t[3]=e=>(()=>{const e=l.value.getCheckedNodes(!1),t=[];e.forEach((e=>{t.push(e.id),t.push(e.parentId)}));const o=[...new Set(t)].filter((e=>"0"!==e));se(s.roleId,o).then((e=>{V.success(e.msg)})).catch((e=>{V.error(e.msg)})).finally((()=>{n.go(0),l.value.setCheckedKeys([],!1),d.value=!1}))})())},{default:K((()=>[Q(" 确定 ")])),_:1}),B(i,{onClick:t[4]||(t[4]=e=>(l.value.setCheckedKeys([],!1),void(d.value=!1)))},{default:K((()=>[Q(" 取消 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}});export{Le as default};
