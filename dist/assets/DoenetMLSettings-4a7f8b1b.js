import{e as a,a7 as l,v as r,s as c,j as o,a as e,av as m,w as p,H as s,aw as h}from"./index-a1cd8b25.js";import{f as v}from"./index-47ca4f11.js";function I(t){const n=a(l),i=`http://${window.location.host}/content/#/?doenetId=${n}`,d=r();return a(c("doenetId"))!==n?o("div",{style:t.style}):e("div",{style:t.style,children:[o("div",{children:"DonetML Name (soon)"}),o("div",{children:"Load time (soon) "}),o("div",{children:"Most recent release "}),e("div",{children:[o(m.CopyToClipboard,{onCopy:()=>d("Link copied to clipboard!",p.SUCCESS),text:i,children:e("button",{onClick:()=>{},children:["copy link ",o(s,{icon:v})]})}),e("button",{onClick:()=>window.open(i,"_blank"),children:["visit ",o(s,{icon:h})]})]})]})}export{I as default};
