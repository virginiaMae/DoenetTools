import{ao as Y,bl as G,r as g,bK as J,j as R,F as X}from"./index-a1cd8b25.js";import{BoardContext as w}from"./graph-36cd2399.js";import"./css-14ccef8c.js";const F=Y.memo(function(B){let{name:W,id:_,SVs:n}=G(B);const a=g.useContext(w);let c=g.useRef([]),d=g.useRef([]),b=g.useRef(null),E=g.useRef(null),U=g.useRef(null);g.useEffect(()=>()=>{v()},[]);function L(){let{xmin:f,xmax:m,ymin:x,ymax:S}=n.graphLimits,s=(S-x)*.06,i=(m-f)*.05,C=(m-f)*.02,t=f+(m-f)*.05,O;n.position.slice(0,5)==="upper"?O=x+(S-x)*.95:O=x+(S-x)*.05+s*n.legendElements.length;let y=n.position.slice(n.position.length-5,n.position.length)==="right";c.current=[],d.current=[];let u=0,D=!1;for(let[o,e]of n.legendElements.entries())if(e.label){let r=O-o*s,l={fixed:!0,highlight:!1};e.label.hasLatex&&(l.useMathJax=!0,l.parse=!1,D=!0);let p=a.create("text",[t+i+C,r,e.label.value],l);d.current.push(p),u=Math.max(u,p.rendNode.offsetWidth)}u/=a.unitX,y&&(t=Math.max(t,m-i-3*C-u));for(let[o,e]of n.legendElements.entries()){let r=O-o*s;if(e.swatchType==="marker"){let l={fillColor:e.markerColor,fillOpacity:e.lineOpacity,strokeColor:"none",size:e.markerSize,face:M(e.markerStyle),fixed:!0,highlight:!1,withLabel:!1,showInfoBox:!1},p=a.create("point",[t+i/2,r],l);c.current.push(p)}else if(e.swatchType==="rectangle"){let l={fillColor:e.filled?e.fillColor:"none",fillOpacity:e.fillOpacity,fixed:!0,highlight:!1,vertices:{visible:!1},borders:{strokeColor:e.lineColor,strokeWidth:e.lineWidth,strokeOpacity:e.lineOpacity,dash:k(e.lineStyle),fixed:!0,highlight:!1}},p=a.create("polygon",[[t,r+s/4],[t+i,r+s/4],[t+i,r-s/4],[t,r-s/4]],l);c.current.push(p)}else{let l={strokeColor:e.lineColor,strokeWidth:e.lineWidth,strokeOpacity:e.lineOpacity,dash:k(e.lineStyle),fixed:!0,highlight:!1},p=a.create("segment",[[t,r],[t+i,r]],l);c.current.push(p)}y&&e.label&&d.current[o].coords.setCoordinates(JXG.COORDS_BY_USER,[t+i+C,r])}y&&D&&MathJax.Hub.Queue(()=>{u=0;for(let o of d.current)u=Math.max(u,o.rendNode.offsetWidth);u/=a.unitX,t=Math.max(t,m-i-3*C-u);for(let[o,e]of c.current.entries()){let r=O-o*s;if(e.elType==="point")e.coords.setCoordinates(JXG.COORDS_BY_USER,[t+i/2,r]),e.needsUpdate=!0,e.update();else if(e.elType==="polygon"){e.vertices[0].coords.setCoordinates(JXG.COORDS_BY_USER,[t,r+s/4]),e.vertices[1].coords.setCoordinates(JXG.COORDS_BY_USER,[t+i,r+s/4]),e.vertices[2].coords.setCoordinates(JXG.COORDS_BY_USER,[t+i,r-s/4]),e.vertices[3].coords.setCoordinates(JXG.COORDS_BY_USER,[t,r-s/4]);for(let l=0;l<4;l++)e.vertices[l].needsUpdate=!0,e.vertices[l].update(),e.borders[l].needsUpdate=!0,e.borders[l].update();e.needsUpdate=!0,e.update()}else e.point1.coords.setCoordinates(JXG.COORDS_BY_USER,[t,r]),e.point2.coords.setCoordinates(JXG.COORDS_BY_USER,[t+i,r]),e.needsUpdate=!0,e.update();d.current[o]&&(d.current[o].coords.setCoordinates(JXG.COORDS_BY_USER,[t+i+C,r]),d.current[o].needsUpdate=!0,d.current[o].update())}a.updateRenderer()})}function v(){for(let f of c.current)a.removeObject(f);for(let f of d.current)a.removeObject(f);c.current=[],d.current=[]}return a?((!J(b.current,n.legendElements)||!J(U.current,n.graphLimits)||E.current!==n.position)&&(c.current.length>0&&v(),L()),b.current=[...n.legendElements],U.current=Object.assign({},n.graphLimits),E.current=n.position,R(X,{children:R("a",{name:_})})):n.hidden?null:R(X,{children:R("a",{name:_})})});function k(h){return h==="dashed"?2:h==="solid"?0:h==="dotted"?1:0}function M(h){return h==="triangle"?"triangleup":h}export{F as default};
