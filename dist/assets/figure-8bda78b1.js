import{ao as V,bl as A,r as h,j as t,bn as H,a as m}from"./index-a1cd8b25.js";import{M as E}from"./index.esm-1c81c270.js";const S=V.memo(function(g){var u;let{name:R,id:r,SVs:a,children:o,actions:c,callAction:d}=A(g),y=e=>{d({action:c.recordVisibilityChange,args:{isVisible:e}})};if(h.useEffect(()=>()=>{d({action:c.recordVisibilityChange,args:{isVisible:!1}})},[]),a.hidden||!o)return null;let f=o,s=null,l=null;if(a.captionChildName){let e;for(let[i,n]of o.entries())if(((u=n==null?void 0:n.props)==null?void 0:u.componentInstructions.componentName)===a.captionChildName){e=i;break}l=o[e],f.splice(e,1)}if(a.suppressFigureNameInCaption)l&&(s=t("div",{children:l}));else{let e=t("strong",{children:a.figureName});l?s=m("div",{children:[e,": ",l]}):s=t("div",{children:e})}const[C,p]=h.useState("center");function v(e){var i=document.createElement(e.nodeName),n;return i.setAttribute("style","margin:0; padding:0; font-family:"+(e.style.fontFamily||"inherit")+"; font-size:"+(e.style.fontSize||"inherit")),i.innerHTML="A",e.parentNode.appendChild(i),n=i.clientHeight,i.parentNode.removeChild(i),n}function b(){var e=document.getElementById(r+"_caption"),i=e.offsetHeight,n=v(document.getElementById(r+"_caption")),x=Math.round(i/n);return x}function N(){b()>=2?p("left"):p("center")}return t(H,{partialVisibility:!0,onChange:y,children:m("figure",{id:r,style:{margin:"12px 0"},children:[t("a",{name:r}),f,t("figcaption",{id:r+"_caption",children:t(E,{onResize:N,children:({measureRef:e})=>t("div",{ref:e,style:{textAlign:C},children:s})})})]})})});export{S as default};
