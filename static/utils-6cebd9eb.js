let t;const o=new Uint8Array(16);function n(){if(!t&&(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!t))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(o)}const r=[];for(let i=0;i<256;++i)r.push((i+256).toString(16).slice(1));const e={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function u(t,o,u){if(e.randomUUID&&!o&&!t)return e.randomUUID();const d=(t=t||{}).random||(t.rng||n)();if(d[6]=15&d[6]|64,d[8]=63&d[8]|128,o){u=u||0;for(let t=0;t<16;++t)o[u+t]=d[t];return o}return function(t,o=0){return(r[t[o+0]]+r[t[o+1]]+r[t[o+2]]+r[t[o+3]]+"-"+r[t[o+4]]+r[t[o+5]]+"-"+r[t[o+6]]+r[t[o+7]]+"-"+r[t[o+8]]+r[t[o+9]]+"-"+r[t[o+10]]+r[t[o+11]]+r[t[o+12]]+r[t[o+13]]+r[t[o+14]]+r[t[o+15]]).toLowerCase()}(d)}const d=t=>{const o=new Map;return t.filter((t=>!o.has(t.id)&&o.set(t.id,1)))},s=()=>u().split("-").join("");export{s as g,d as u};
