import{h as e,y as o,b_ as a,f as l,j as n,r as t,ci as d,o as r,R as i,a3 as s,aH as u}from"./index-9a706b5e.js";const v=a=>{const l=e();return o((()=>{var e,o;return null==(o=null==(e=null==l?void 0:l.proxy)?void 0:e.$props)?void 0:o[a]}))},m={prefix:Math.floor(1e4*Math.random()),current:0},I=Symbol("elIdInjection"),p=()=>e()?n(I,m):m,c=e=>{const n=p(),t=a();return o((()=>l(e)||`${t.value}-id-${n.prefix}-${n.current++}`))},f=Symbol("formContextKey"),b=Symbol("formItemContextKey"),x=(e,a={})=>{const r=t(void 0),i=a.prop?r:v("size"),s=a.global?r:d(),u=a.form?{size:void 0}:n(f,void 0),m=a.formItem?{size:void 0}:n(b,void 0);return o((()=>i.value||l(e)||(null==m?void 0:m.size)||(null==u?void 0:u.size)||s.value||""))},y=e=>{const a=v("disabled"),t=n(f,void 0);return o((()=>a.value||l(e)||(null==t?void 0:t.disabled)||!1))},z=()=>({form:n(f,void 0),formItem:n(b,void 0)}),g=(e,{formItemContext:a,disableIdGeneration:l,disableIdManagement:n})=>{l||(l=t(!1)),n||(n=t(!1));const d=t();let v;const m=o((()=>{var o;return!!(!e.label&&a&&a.inputIds&&(null==(o=a.inputIds)?void 0:o.length)<=1)}));return r((()=>{v=i([s(e,"id"),l],(([e,o])=>{const l=null!=e?e:o?void 0:c().value;l!==d.value&&((null==a?void 0:a.removeInputId)&&(d.value&&a.removeInputId(d.value),(null==n?void 0:n.value)||o||!l||a.addInputId(l)),d.value=l)}),{immediate:!0})})),u((()=>{v&&v(),(null==a?void 0:a.removeInputId)&&d.value&&a.removeInputId(d.value)})),{isLabeledByFormItem:m,inputId:d}};export{x as a,g as b,y as c,c as d,p as e,b as f,f as g,z as u};
