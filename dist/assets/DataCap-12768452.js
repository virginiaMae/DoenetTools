import{e as s,s as n,G as g,a as d,F as m,j as i}from"./index-a1cd8b25.js";import{f as b,a as h}from"./util-043d2c70.js";function x(){const c=s(n("courseId")),l=s(n("tool"));let e=s(g(c));if(!e||Object.keys(e).length==0)return null;let a=e.color,o=e.image,u=e.label,r="course";o!="none"&&(r=b(o),o="url(/drive_pictures/"+o+")"),a!="none"&&(r=h(a),a="#"+a);let t="";return l=="navigation"?t="Course Navigation":l=="dashboard"?t="Dashboard":l=="data"&&(t="Data"),d(m,{children:[i("div",{style:{position:"relative",width:"100%",height:"165px",overflow:"hidden"},children:i("img",{"aria-label":r,style:{position:"absolute",width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:o,backgroundColor:a}})}),i("b",{children:t}),d("div",{style:{padding:"16px 12px"},children:[i("span",{style:{marginBottom:"15px"},children:u})," ",i("br",{})]})]})}export{x as default};
