import{ao as u,bl as b,r as h,j as t,a as o,F as p}from"./index-a1cd8b25.js";const y=u.memo(function(a){let{name:g,id:n,SVs:e}=b(a,!1),[r,l]=h.useState(!1);if(e.hidden)return null;const i={padding:"10px",borderRadius:"5px",backgroundColor:"#e2e2e2",display:"static"};let s="";r&&(s=t("div",{style:i,children:e.text}));const d={backgroundColor:"white",border:"none"},c={textDecoration:"none",color:"#1A5A99"};return o(p,{children:[o("span",{id:n,children:[t("a",{name:n}),t("sup",{children:t("button",{style:d,onClick:()=>l(f=>!f),children:o("a",{href:"#",title:e.text,style:c,children:["[",e.footnoteTag,"]"]})})})]}),s]})});export{y as default};
