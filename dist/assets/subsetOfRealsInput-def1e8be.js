import{h as F,r as m,ao as V,j as t,b9 as _,bl as H,bn as K,a as v,F as B,aR as S}from"./index-a1cd8b25.js";import{A as O}from"./ActionButtonGroup-24932f5c.js";import{T as R}from"./ToggleButton-1b007c9e.js";const D=F.div`
  display: ${r=>r.vertical?"static":"flex"};
  width: ${r=>r.width=="menu"?"var(--menuWidth)":""};
  // height: 'fit-content';
  // margin: 2px 0px 2px 0px ;
  /* flex-wrap: wrap; */
  overflow: clip;
`,z={margin:"0px -2px 0px -2px",borderRadius:"0",padding:"0px 12px 0px 10px"},N={margin:"-2px 4px -2px 4px",borderRadius:"0",padding:"0px 10px 0px 10px"},U=r=>{const[k,T]=m.useState(0),P=p=>{T(p),r.onClick&&r.onClick(p)};let d=r.vertical?"first_vert":"first",s=r.vertical?"last_vert":"last",o=V.Children.toArray(r.children),h=o.map((p,g)=>{let l={index:g,isSelected:g===k,onClick:P};return g===0?l.num=d:g===o.length-1&&(l.num=s),V.cloneElement(p,l)});return t(D,{style:{height:"fit-content"},vertical:r.vertical,width:r.width,role:"group",children:t(_,{theme:r.vertical?N:z,children:h})})},q=F.text`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`,Z=V.memo(function(k){let{name:T,id:P,SVs:d,actions:s,callAction:o}=H(k,!1),[h,p]=m.useState("add remove points"),g=m.useRef(null),l=m.useRef(null),G=e=>{o({action:s.recordVisibilityChange,args:{isVisible:e}})};if(m.useEffect(()=>()=>{o({action:s.recordVisibilityChange,args:{isVisible:!1}})},[]),d.hidden)return null;function j(e){e===0?(console.log(e),p("add remove points")):e===1?(console.log(e),p("toggle")):e===2&&(console.log(e),p("move points"))}let W=null;d.fixed||(W=v(B,{children:[v(U,{onClick:j,children:[t(R,{value:"Add/Remove points"}),t(R,{value:"Toggle points and intervals"}),t(R,{value:"Move Points"})]}),v(O,{children:[t(S,{onClick:()=>o({action:s.clear}),value:"Clear"}),t(S,{onClick:()=>o({action:s.setToR}),value:"R"})]})]}));let w=40,C=36,A=[],M=[];for(let e=-10;e<=10;e++)M.push(e);let X=[];for(let e=w;e<780;e=e+C){A.push(t("line",{x1:e,y1:"35",x2:e,y2:"45",style:{stroke:"black",strokeWidth:"1"},shapeRendering:"geometricPrecision"},"hash"+e));let n=M.shift();X.push(t(q,{x:e,y:"66",textAnchor:"middle",children:n},"label"+e))}let x=[];for(let e of d.points){let n=e.inSubset,a=I(e.value),i="var(--mainPurple)";n||(i="white");let c=`point-${a}`;x.push(t("circle",{cx:a,cy:"40",r:"6",stroke:"black",strokeWidth:"1",fill:i},c))}let L=[];for(let e of d.intervals){if(e.right<e.left||!e.inSubset)continue;let n=I(e.left),a=I(e.right);const i=`lowerIntervalPoint${n}`,c=`higherIntervalPoint${a}`,u=`line${n}-${a}`;let f="var(--mainPurple)",y=n,$=a;n<38&&(y=20,x.push(t("polygon",{points:"5,40 20,46 20,34",style:{fill:f,stroke:f,strokeWidth:"1"}},i))),a>778&&($=782,x.push(t("polygon",{points:"795,40 780,46 780,34",style:{fill:f,stroke:f,strokeWidth:"1"}},c))),L.push(t("line",{x1:y,y1:"40",x2:$,y2:"40",style:{stroke:f,strokeWidth:"8"}},u))}function I(e){let n=10,a=1,i=e+n;return w+i/a*C}function E(e){let n=e-w,a=10,i=1,c=n/C*i;return c=c-a,c}async function b(e,n){let a=e.clientX-g.current.offsetLeft,i=E(a),c=.2;if(n==="up"){if(h==="move points"&&l.current!==null&&(o({action:s.movePoint,args:{pointInd:l.current,value:i,transient:!1}}),l.current=null),h==="add remove points")l.current!==null?o({action:s.deletePoint,args:{pointInd:l.current}}):d.points.map(u=>u.value).includes(i)||o({action:s.addPoint,args:{value:i}});else if(h==="toggle")if(l.current!==null)o({action:s.togglePoint,args:{pointInd:l.current}});else{let u=0;for(let f of d.points)f.value<i&&u++;o({action:s.toggleInterval,args:{intervalInd:u}})}}else if(n==="down"){let u=null;for(let[f,y]of d.points.entries())if(Math.abs(y.value-i)<c){u=f;break}u!==null?l.current=u:l.current=null}else n==="move"?h==="move points"&&l.current!==null&&o({action:s.movePoint,args:{pointInd:l.current,value:i,transient:!0}}):n=="leave"&&h==="move points"&&l.current!==null&&(o({action:s.movePoint,args:{pointInd:l.current,value:i,transient:!1}}),l.current=null)}return t(K,{partialVisibility:!0,onChange:G,children:v(B,{children:[t("a",{name:P}),t("div",{ref:g,style:{display:"flex",gap:"12px"},children:W}),v("svg",{width:"808",height:"80",style:{backgroundColor:"white"},onMouseDown:e=>{b(e,"down")},onMouseUp:e=>{b(e,"up")},onMouseMove:e=>{b(e,"move")},onMouseLeave:e=>{b(e,"leave")},children:[t("polygon",{points:"5,40 20,50 20,30",style:{fill:"black",stroke:"black",strokeWidth:"1"}}),t("polygon",{points:"795,40 780,50 780,30",style:{fill:"black",stroke:"black",strokeWidth:"1"}}),L,A,t("line",{x1:"20",y1:"40",x2:"780",y2:"40",style:{stroke:"black",strokeWidth:"2"}}),x,X]})]})})});export{Z as default};
