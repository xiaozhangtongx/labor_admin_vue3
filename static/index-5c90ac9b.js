import{f as e}from"./index-d57c4075.js";import{aP as r,aB as a}from"./index-2b9e942f.js";const i=(i,t)=>{const n={},o=r([]);return{children:o,addChild:r=>{n[r.uid]=r,o.value=((r,i,t)=>e(r.subTree).filter((e=>{var r;return a(e)&&(null==(r=e.type)?void 0:r.name)===i&&!!e.component})).map((e=>e.component.uid)).map((e=>t[e])).filter((e=>!!e)))(i,t,n)},removeChild:e=>{delete n[e],o.value=o.value.filter((r=>r.uid!==e))}}};export{i as u};