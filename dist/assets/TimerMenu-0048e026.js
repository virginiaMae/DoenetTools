import{e as a,s as d,r as t,g as D,M as S,j as h}from"./index-a1cd8b25.js";import{l as w}from"./CourseToolHandler-ceca1b11.js";import{currentAttemptNumber as x}from"./AssignmentViewer-5a072986.js";import"./index-47ca4f11.js";import"./index.esm-1c81c270.js";/* empty css             */import"./RoleDropdown-6cbb7a86.js";import"./DropdownMenu-3b5a6419.js";function R(){const s=a(d("doenetId")),o=a(x),{timeLimit:m}=a(w(s));let[u,r]=t.useState("Unlimited");const[n,l]=t.useState(null),[c,f]=t.useState(new Date);let p=t.useRef(null);return t.useEffect(()=>{let i=new Date;D.get("/api/loadAttemptStartTime.php",{params:{doenetId:s,attemptNumber:o}}).then(({data:e})=>{e.attemptStart!==null&&(i=S(e.attemptStart));let T=new Date(i.getTime()+m*6e4*e.timeLimitMultiplier);l(T)}).catch(console.error)},[o,m,s,l]),t.useEffect(()=>{if(clearTimeout(p.current),m>0){let i=Math.floor((n-new Date)/6e4),e=(n-new Date)/6e4;e<=0?r("Time's Up"):(e<1?r("< 1 Min"):r(i===1?"1 Min":`${i} Mins`),p.current=setTimeout(()=>{e>=0&&f(new Date)},1e4))}},[c,n]),h("div",{style:{fontSize:"40px",textAlign:"center"},children:u})}export{R as default};
