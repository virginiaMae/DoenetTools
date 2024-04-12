import{ao as B,bl as W,r as S,j as o,bn as I,a as R,F as V,h as j,B as w}from"./index-a1cd8b25.js";const E=j.svg`
  border: "2px solid red";
  margin: 2px;
  outline: none;
`,P=B.memo(function k(e){let{name:u,id:t,SVs:a,actions:l,callAction:r}=W(e),x=a.selectedRowIndex-1,y=a.selectedBoxIndex-1;k.ignoreActionsWithoutCore=()=>!0;let c=S.createRef(a.fixed);c.current=a.fixed;let h=i=>{r({action:l.recordVisibilityChange,args:{isVisible:i}})};if(S.useEffect(()=>()=>{r({action:l.recordVisibilityChange,args:{isVisible:!1}})},[]),a.hidden)return null;function f(i){c.current||r({action:l.selectRow,args:{index:Number(i)+1}})}function g(i,s){c.current||(s!==void 0&&r({action:l.selectRow,args:{index:Number(s)+1}}),r({action:l.selectBox,args:{index:Number(i)+1}}))}function n(i){c.current||r({action:l.updateRowText,args:{newValue:i}})}function d(i){var s,b,v,T,m,C,D,O,A,U;((s=i.relatedTarget)==null?void 0:s.id)!==`orbitaladdrow${t}`&&((b=i.relatedTarget)==null?void 0:b.id)!==`orbitalremoverow${t}`&&((v=i.relatedTarget)==null?void 0:v.id)!==`orbitaladdbox${t}`&&((T=i.relatedTarget)==null?void 0:T.id)!==`orbitaladduparrow${t}`&&((m=i.relatedTarget)==null?void 0:m.id)!==`orbitaladddownarrow${t}`&&((C=i.relatedTarget)==null?void 0:C.id)!==`orbitalremovearrow${t}`&&((D=i.relatedTarget)==null?void 0:D.id)!==`orbitalremovebox${t}`&&(((O=i.relatedTarget)==null?void 0:O.id)!==`OrbitalText${x}${t}`&&((A=i.relatedTarget)==null?void 0:A.id)!==`OrbitalRow${x}${t}`&&((U=i.relatedTarget)==null?void 0:U.id.substring(0,10+t.length))!==`orbitalbox${t}`&&f(-1),g(-1))}let p=[];for(let[i,s]of Object.entries(a.rows)){let b=a.rows.length-i-1;p.push(o(J,{updateRowText:n,rowNumber:b,selectedRow:x,setSelectedRow:f,orbitalText:s.orbitalText,boxes:s.boxes,selectedBox:y,setSelectedBox:g,deselect:d,name:t},`OrbitalRow${b}`))}let $=null;return a.fixed||($=R("div",{children:[o("div",{style:{display:"inline-block",marginRight:"4px"},children:o(w,{id:`orbitaladdrow${t}`,onBlur:i=>{d(i)},onClick:()=>{r({action:l.addRow})},value:"Add Row"})}),o("div",{style:{display:"inline-block",marginRight:"4px"},children:o(w,{id:`orbitalremoverow${t}`,onClick:()=>{r({action:l.removeRow})},value:"Remove Row"})}),o("div",{style:{display:"inline-block",marginRight:"4px"},children:o(w,{id:`orbitaladdbox${t}`,onBlur:i=>{d(i)},onClick:()=>{r({action:l.addBox})},value:"Add Box"})}),o("div",{style:{display:"inline-block",marginRight:"4px"},children:o(w,{id:`orbitalremovebox${t}`,onBlur:i=>{d(i)},onClick:()=>{r({action:l.removeBox})},value:"Remove Box"})}),o("div",{style:{display:"inline-block",marginRight:"4px"},children:o(w,{id:`orbitaladduparrow${t}`,onBlur:i=>{d(i)},onClick:()=>{r({action:l.addUpArrow})},value:"Add Up Arrow"})}),o("div",{style:{display:"inline-block",marginRight:"4px"},children:o(w,{id:`orbitaladddownarrow${t}`,onBlur:i=>{d(i)},onClick:()=>{r({action:l.addDownArrow})},value:"Add Down Arrow"})}),o("div",{style:{display:"inline-block",marginRight:"4px"},children:o(w,{id:`orbitalremovearrow${t}`,onBlur:i=>{d(i)},onClick:()=>{r({action:l.removeArrow})},value:"Remove Arrow"})})]})),o(I,{partialVisibility:!0,onChange:h,children:R(V,{children:[$,p]})})}),J=B.memo(function({rowNumber:e,updateRowText:u,selectedRow:t,setSelectedRow:a,orbitalText:l,boxes:r,selectedBox:x,setSelectedBox:y,deselect:c,name:h}){let f={width:"800px",height:"44px",display:"flex",backgroundColor:"#E2E2E2",marginTop:"2px",marginBottom:"2px",padding:"2px",border:"white solid 2px"};t===e&&(f.border="#1A5A99 solid 2px");let g=[];for(let[n,d]of Object.entries(r)){let p=!1;t==e&&x==n&&(p=!0),g.push(o(F,{boxNum:n,rowNumber:e,arrows:d,isSelected:p,setSelectedBox:y,name:h},`OrbitalBox${e}-${n}`))}return R("div",{id:`OrbitalRow${e}${h}`,tabIndex:"-1",onClick:()=>{t!==e&&a(e)},onBlur:n=>{c(n)},style:f,children:[o(X,{orbitalText:l,rowNumber:e,updateRowText:u,name:h}),g]},`OrbitalRow${e}`)}),X=B.memo(function({rowNumber:e,updateRowText:u,orbitalText:t,name:a}){return o("input",{id:`OrbitalText${e}${a}`,style:{marginRight:"4px",height:"14px"},type:"text",size:"4",value:t,onChange:l=>{let r=l.target.value;u(r)}})}),F=B.memo(function({boxNum:e,arrows:u="",setSelectedBox:t,isSelected:a,rowNumber:l,name:r}){const x=o("polyline",{id:`firstUp${e}`,points:"6,14 12,6 18,14 12,6 12,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxfirstUp${e}`),y=o("polyline",{id:`firstDown${e}`,points:"6,26 12,34 18,26 12,34 12,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxfirstDown${e}`),c=o("polyline",{id:`secondUp${e}`,points:"22,14 28,6 34,14 28,6 28,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxsecondUp${e}`),h=o("polyline",{id:`secondDown${e}`,points:"22,26 28,34 34,26 28,34 28,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxsecondDown${e}`),f=o("polyline",{id:`thirdUp${e}`,points:"38,14 44,6 50,14 44,6 44,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxthirdUp${e}`),g=o("polyline",{id:`thirdDown${e}`,points:"38,26 44,34 50,26 44,34 44,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxthirdDown${e}`);let n=[],[d,p,$]=u.split("");d=="U"&&n.push(x),d=="D"&&n.push(y),p=="U"&&n.push(c),p=="D"&&n.push(h),$=="U"&&n.push(f),$=="D"&&n.push(g);let i=40;$&&(i=56);let s="black",b="2px";return a&&(s="#1A5A99",b="6px"),R(E,{id:`orbitalbox${r}${l}-${e}`,tabIndex:"-1",onClick:v=>{t(e,l),v.stopPropagation()},width:i,height:"40",children:[o("rect",{x:"0",y:"0",rx:"4",ry:"4",width:i,height:"40",style:{fill:"white",stroke:s,strokeWidth:b,fillOpacity:"1",strokeOpacity:"1"}}),n]},`orbitalbox${e}`)});export{P as default};
