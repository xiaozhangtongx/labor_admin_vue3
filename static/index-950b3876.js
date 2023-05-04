import{R as n,d as e,t,r as o,a2 as i,o as a,S as r,bu as l,bv as u,U as s,a as c,c as d,C as f,f as p,a4 as g,q as v}from"./index-54d43a61.js";var m,y=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],b=function(n){return-1!==y.map((function(n){return n.toLowerCase()})).indexOf(n.toLowerCase())},h=function(e,t,o,i,a,r){i.setContent(r()),o.attrs["onUpdate:modelValue"]&&function(e,t,o,i){var a=e.modelEvents?e.modelEvents:null,r=Array.isArray(a)?a.join(" "):a;n(i,(function(n,t){o&&"string"==typeof n&&n!==t&&n!==o.getContent({format:e.outputFormat})&&o.setContent(n)})),o.on(r||"change input undo redo",(function(){t.emit("update:modelValue",o.getContent({format:e.outputFormat}))}))}(t,o,i,a),function(n,e,t){Object.keys(e).filter(b).forEach((function(o){var i=e[o];"function"==typeof i&&("onInit"===o?i(n,t):t.on(o.substring(2),(function(n){return i(n,t)})))}))}(e,o.attrs,i)},C=0,S=function(n){var e=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++C+String(e)},w=function(n){return void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" ")},D=function(){return{listeners:[],scriptId:S("tiny-script"),scriptLoaded:!1}},E=(m=D(),{load:function(n,e,t){m.scriptLoaded?t():(m.listeners.push(t),n.getElementById(m.scriptId)||function(n,e,t,o){var i=e.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=n,i.src=t;var a=function(){i.removeEventListener("load",a),o()};i.addEventListener("load",a),e.head&&e.head.appendChild(i)}(m.scriptId,n,e,(function(){m.listeners.forEach((function(n){return n()})),m.scriptLoaded=!0})))},reinitialize:function(){m=D()}}),O=function(){var n="undefined"!=typeof window?window:global;return n&&n.tinymce?n.tinymce:null},j={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(n){return"html"===n||"text"===n}}},x=globalThis&&globalThis.__assign||function(){return x=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},x.apply(this,arguments)},A=e({props:j,setup:function(e,c){var d=e.init?x({},e.init):{},f=t(e),p=f.disabled,g=f.modelValue,v=f.tagName,m=o(null),y=null,b=e.id||S("tiny-vue"),C=e.init&&e.init.inline||e.inline,D=!!c.attrs["onUpdate:modelValue"],j=!0,A=e.initialValue?e.initialValue:"",M="",V=function(){var n,t,o,i=(n=j,D?function(){return(null==g?void 0:g.value)?g.value:""}:function(){return n?A:M}),a=x(x({},d),{readonly:e.disabled,target:m.value,plugins:(t=d.plugins,o=e.plugins,w(t).concat(w(o))),toolbar:e.toolbar||d.toolbar,inline:C,setup:function(n){y=n,n.on("init",(function(t){return h(t,e,c,n,g,i)})),"function"==typeof d.setup&&d.setup(n)}});(function(n){return null!==n&&"textarea"===n.tagName.toLowerCase()})(m.value)&&(m.value.style.visibility=""),O().init(a),j=!1};n(p,(function(n){var e;null!==y&&("function"==typeof(null===(e=y.mode)||void 0===e?void 0:e.set)?y.mode.set(n?"readonly":"design"):y.setMode(n?"readonly":"design"))})),n(v,(function(n){var e;D||(M=y.getContent()),null===(e=O())||void 0===e||e.remove(y),i((function(){return V()}))})),a((function(){if(null!==O())V();else if(m.value&&m.value.ownerDocument){var n=e.cloudChannel?e.cloudChannel:"6",t=e.apiKey?e.apiKey:"no-api-key",o=null==e.tinymceScriptSrc?"https://cdn.tiny.cloud/1/".concat(t,"/tinymce/").concat(n,"/tinymce.min.js"):e.tinymceScriptSrc;E.load(m.value.ownerDocument,o,V)}})),r((function(){null!==O()&&O().remove(y)})),C||(l((function(){j||V()})),u((function(){var n;D||(M=y.getContent()),null===(n=O())||void 0===n||n.remove(y)})));return c.expose({rerender:function(n){var e;M=y.getContent(),null===(e=O())||void 0===e||e.remove(y),d=x(x({},d),n),i((function(){return V()}))},getEditor:function(){return y}}),function(){return C?function(n,e,t,o){return n(o||"div",{id:e,ref:t})}(s,b,m,e.tagName):s("textarea",{id:b,visibility:"hidden",ref:m})}}});const M=e({__name:"index",setup(n){const e=o(""),t=o({plugins:"lists link image table code help wordcount a11ychecker",language_url:"tinymce/langs/zh-Hans.js",language:"zh-Hans",toolbar:"undo redo | styleselect | bold italic | link image a11ycheck | formatselect |  alignleft aligncenter alignright | bullist numlist outdent indent | help",branding:!1,a11y_advanced_options:!0,elementpath:!1,automatic_uploads:!0,file_picker_types:"image"});return(n,o)=>(c(),d("main",null,[f(p(A),{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),"api-key":"u7329yvue4st3dqwrb26xf5pcbw9oma45cp1p9lzev0b4oal",init:t.value},null,8,["modelValue","init"]),g(" "+v(e.value),1)]))}});export{M as default};