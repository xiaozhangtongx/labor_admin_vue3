import{aS as t,b8 as n}from"./index-54d43a61.js";import{d as e}from"./debounce-7e8deea5.js";const i=(n,e)=>{if(!t||!n||!e)return!1;const i=n.getBoundingClientRect();let o;return o=e instanceof Element?e.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},i.top<o.bottom&&i.bottom>o.top&&i.right>o.left&&i.left<o.right},o=t=>{let n=0,e=t;for(;e;)n+=e.offsetTop,e=e.offsetParent;return n},r=(t,n)=>Math.abs(o(t)-o(n));var a="Expected a function";function f(t,i,o){var r=!0,f=!0;if("function"!=typeof t)throw new TypeError(a);return n(o)&&(r="leading"in o?!!o.leading:r,f="trailing"in o?!!o.trailing:f),e(t,i,{leading:r,maxWait:i,trailing:f})}export{r as g,i,f as t};