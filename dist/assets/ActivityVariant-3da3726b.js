import{l as m,N as u,R as d,p,j as r}from"./index-a1cd8b25.js";import{I as c}from"./IncrementMenu-54a2d7c6.js";function V(o){const[n,s]=m(u),l=d(p);function t(){l(a=>{let e={...a};return e.params?e.params={...e.params}:e.params={},e.params.requestedVariant=n.index&&Number.isFinite(Number(n.index))?Number(n.index):1,e})}return r("div",{style:o.style,children:r(c,{min:1,value:n.index,onBlur:()=>t(),onKeyDown:a=>{a.key==="Enter"&&t()},onChange:a=>{s(e=>{let i={...e};return i.index=a,i})}})})}export{V as default};
