import{ao as re,bl as te,r as u,bw as ne,j as X,F as H,bJ as oe,a as ce,bm as ie}from"./index-a1cd8b25.js";import{BoardContext as ue,LINE_LAYER_OFFSET as N,VERTEX_LAYER_OFFSET as z}from"./graph-36cd2399.js";import"./css-14ccef8c.js";const fe=re.memo(function D(K){let{name:p,id:j,SVs:e,actions:c,sourceOfUpdate:A,callAction:i}=te(K);D.ignoreActionsWithoutCore=()=>!0;const l=u.useContext(ue);let r=u.useRef({}),f=u.useRef({}),d=u.useRef({}),b=u.useRef(null),M=u.useRef(null),S=u.useRef(!1),w=u.useRef(!1),n=u.useRef(!1),o=u.useRef(!1),V=u.useRef(null),m=u.useRef(null),k=u.useRef(null),I=u.useRef(null),W=u.useRef(null),R=u.useRef(!1),F=u.useRef(!1),G=u.useRef(!0),J=u.useRef(!0);W.current=e.numericalEndpoints,R.current=e.fixed,F.current=!e.draggable||e.fixLocation||e.fixed,J.current=e.tailDraggable&&!e.fixed&&!e.fixLocation,G.current=e.headDraggable&&!e.fixed&&!e.fixLocation;const{darkMode:Y}=u.useContext(ne)||{};u.useEffect(()=>()=>{Object.keys(r.current).length!==0&&B(),l&&l.off("move",U)},[]),u.useEffect(()=>{l&&l.on("move",U)},[l]);function Q(){if(e.numericalEndpoints.length!==2||e.numericalEndpoints.some(t=>t.length!==2)){r.current={},f.current={},d.current={};return}let s=10*e.layer+N,a=10*e.layer+z,C=Y==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor;var h={name:e.labelForGraph,visible:!e.hidden,withLabel:e.labelForGraph!=="",fixed:R.current,layer:s,strokeColor:C,strokeOpacity:e.selectedStyle.lineOpacity,highlightStrokeColor:C,highlightStrokeOpacity:e.selectedStyle.lineOpacity*.5,strokeWidth:e.selectedStyle.lineWidth,highlightStrokeWidth:e.selectedStyle.lineWidth,dash:q(e.selectedStyle.lineStyle),highlight:!F.current,lastArrow:{type:1,size:3,highlightSize:3}};let E=[[...e.numericalEndpoints[0]],[...e.numericalEndpoints[1]]],O=Object.assign({},h);Object.assign(O,{withLabel:!1,fixed:!1,highlight:!0,fillColor:"none",strokeColor:"none",highlightStrokeColor:"none",highlightFillColor:getComputedStyle(document.documentElement).getPropertyValue("--mainGray"),layer:a,showInfoBox:e.showCoordsWhenDragging});let x=Object.assign({},O),L=J.current&&!e.hidden;x.visible=L;let g=l.create("point",E[0],x),v=Object.assign({},O),ee=G.current&&!e.hidden;v.visible=ee;let P=l.create("point",E[1],v);h.label={highlight:!1},e.labelHasLatex&&(h.label.useMathJax=!0),e.applyStyleToLabel?h.label.strokeColor=C:h.label.strokeColor="var(--canvastext)";let y=l.create("arrow",[g,P],h);y.isDraggable=!F.current,g.on("drag",t=>_(t,0)),P.on("drag",t=>_(t,1)),y.on("drag",t=>_(t,-1)),g.on("up",t=>{!n.current&&o.current?i({action:c.moveVector,args:{tailcoords:k.current}}):!w.current&&!R.current&&i({action:c.vectorClicked,args:{name:p}}),V.current=null,S.current=!1}),P.on("up",t=>{n.current&&!o.current?i({action:c.moveVector,args:{headcoords:m.current}}):!w.current&&!R.current&&i({action:c.vectorClicked,args:{name:p}}),V.current=null,S.current=!1}),y.on("up",t=>{n.current&&o.current?i({action:c.moveVector,args:{headcoords:m.current,tailcoords:k.current}}):!w.current&&V.current===null&&!R.current&&i({action:c.vectorClicked,args:{name:p}}),S.current=!1}),g.on("keyfocusout",t=>{!n.current&&o.current&&i({action:c.moveVector,args:{tailcoords:k.current}}),n.current=!1,o.current=!1}),P.on("keyfocusout",t=>{n.current&&!o.current&&i({action:c.moveVector,args:{headcoords:m.current}}),n.current=!1,o.current=!1}),y.on("keyfocusout",t=>{n.current&&o.current&&i({action:c.moveVector,args:{headcoords:m.current,tailcoords:k.current}}),n.current=!1,o.current=!1}),g.on("down",function(t){n.current=!1,o.current=!1,b.current=[t.x,t.y],V.current=1,S.current=!0,w.current=!1,J.current&&i({action:c.vectorFocused,args:{name:p}})}),g.on("hit",function(t){n.current=!1,o.current=!1,i({action:c.vectorFocused,args:{name:p}})}),P.on("down",function(t){n.current=!1,o.current=!1,b.current=[t.x,t.y],V.current=2,S.current=!0,w.current=!1,G.current&&i({action:c.vectorFocused,args:{name:p}})}),P.on("hit",function(t){n.current=!1,o.current=!1,i({action:c.vectorFocused,args:{name:p}})}),y.on("down",function(t){n.current=!1,o.current=!1,b.current=[t.x,t.y],M.current=[[...y.point1.coords.scrCoords],[...y.point2.coords.scrCoords]],S.current=!0,w.current=!1,R.current||i({action:c.vectorFocused,args:{name:p}})}),y.on("hit",function(t){n.current=!1,o.current=!1,i({action:c.vectorFocused,args:{name:p}})}),g.on("keydown",t=>{t.key==="Enter"&&(!n.current&&o.current&&i({action:c.moveVector,args:{tailcoords:k.current}}),n.current=!1,o.current=!1,i({action:c.vectorClicked,args:{name:p}}))}),P.on("keydown",t=>{t.key==="Enter"&&(n.current&&!o.current&&i({action:c.moveVector,args:{headcoords:m.current}}),n.current=!1,o.current=!1,i({action:c.vectorClicked,args:{name:p}}))}),y.on("keydown",t=>{t.key==="Enter"&&(n.current&&o.current&&i({action:c.moveVector,args:{headcoords:m.current,tailcoords:k.current}}),n.current=!1,o.current=!1,i({action:c.vectorClicked,args:{name:p}}))}),r.current=y,f.current=g,d.current=P}function U(s){S.current&&(Math.abs(s.x-b.current[0])>.1||Math.abs(s.y-b.current[1])>.1)&&(w.current=!0)}function _(s,a){if(!(s.type==="pointermove")||Math.abs(s.x-b.current[0])>.1||Math.abs(s.y-b.current[1])>.1){a===0?o.current=!0:a===1?n.current=!0:(n.current=!0,o.current=!0);let h={transient:!0,skippable:!0};n.current&&(a===-1?m.current=T(s,1):m.current=[r.current.point2.X(),r.current.point2.Y()],h.headcoords=m.current),o.current&&(a===-1?k.current=T(s,0):k.current=[r.current.point1.X(),r.current.point1.Y()],h.tailcoords=k.current),(a===0||a===1)&&(h.sourceDetails={vertex:a}),i({action:c.moveVector,args:h}),r.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,W.current[0]),r.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,W.current[1]),a===0?l.updateInfobox(f.current):a===1&&l.updateInfobox(d.current)}}function B(){r.current.off("drag"),r.current.off("down"),r.current.off("hit"),r.current.off("up"),r.current.off("keyfocusout"),r.current.off("keydown"),l.removeObject(r.current),r.current={},f.current.off("drag"),f.current.off("down"),f.current.off("hit"),f.current.off("up"),f.current.off("keyfocusout"),f.current.off("keydown"),l.removeObject(f.current),f.current={},d.current.off("drag"),d.current.off("down"),d.current.off("hit"),d.current.off("up"),d.current.off("keyfocusout"),d.current.off("keydown"),l.removeObject(d.current),d.current={}}function T(s,a){if(s.type==="pointermove"){var h=l.origin.scrCoords;let E=(M.current[a][1]+s.x-b.current[0]-h[1])/l.unitX,O=(h[2]-(M.current[a][2]+s.y-b.current[1]))/l.unitY;return[E,O]}else return a==0?[r.current.point1.X(),r.current.point1.Y()]:[r.current.point2.X(),r.current.point2.Y()]}if(l){if(Object.keys(r.current).length===0)Q();else if(e.numericalEndpoints.length!==2||e.numericalEndpoints.some(s=>s.length!==2))B();else{let s=!0;for(let v of[e.numericalEndpoints[0],e.numericalEndpoints[1]])Number.isFinite(v[0])||(s=!1),Number.isFinite(v[1])||(s=!1);r.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,e.numericalEndpoints[0]),r.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,e.numericalEndpoints[1]);let a=!e.hidden&&s,C=J.current&&a,h=G.current&&a;if(r.current.visProp.fixed=R.current,r.current.visProp.highlight=!F.current,r.current.isDraggable=!F.current,r.current.visProp.visible=a,r.current.visPropCalc.visible=a,f.current.visProp.visible=C,f.current.visPropCalc.visible=C,d.current.visProp.visible=h,d.current.visPropCalc.visible=h,f.current.visProp.showinfobox=e.showCoordsWhenDragging,d.current.visProp.showinfobox=e.showCoordsWhenDragging,A.sourceInformation&&p in A.sourceInformation){let v=A.sourceInformation[p];v.vertex===0?l.updateInfobox(f.current):v.vertex===1&&l.updateInfobox(d.current)}let E=10*e.layer+N;if(r.current.visProp.layer!==E){let v=10*e.layer+z;r.current.setAttribute({layer:E}),f.current.setAttribute({layer:v}),d.current.setAttribute({layer:v})}let x=Y==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor;r.current.visProp.strokecolor!==x&&(r.current.visProp.strokecolor=x,r.current.visProp.highlightstrokecolor=x),r.current.visProp.strokewidth!==e.selectedStyle.lineWidth&&(r.current.visProp.strokewidth=e.selectedStyle.lineWidth,r.current.visProp.highlightstrokewidth=e.selectedStyle.lineWidth),r.current.visProp.strokeopacity!==e.selectedStyle.lineOpacity&&(r.current.visProp.strokeopacity=e.selectedStyle.lineOpacity,r.current.visProp.highlightstrokeopacity=e.selectedStyle.lineOpacity*.5);let L=q(e.selectedStyle.lineStyle);r.current.visProp.dash!==L&&(r.current.visProp.dash=L),r.current.name=e.labelForGraph;let g=e.labelForGraph!=="";g!=I.current&&(r.current.setAttribute({withlabel:g}),I.current=g),r.current.needsUpdate=!0,r.current.update(),r.current.hasLabel&&(e.applyStyleToLabel?r.current.label.visProp.strokecolor=x:r.current.label.visProp.strokecolor="var(--canvastext)",r.current.label.needsUpdate=!0,r.current.label.update()),f.current.needsUpdate=!0,f.current.update(),d.current.needsUpdate=!0,d.current.update(),l.updateRenderer()}return X(H,{children:X("a",{name:j})})}if(e.hidden)return null;let Z="\\("+e.latex+"\\)",$=oe(Y,e.selectedStyle);return ce(H,{children:[X("a",{name:j}),X("span",{id:j,style:$,children:X(ie.MathJax,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:Z})})]})});function q(D){return D==="solid"?0:D==="dashed"?2:D==="dotted"?1:0}export{fe as default};
