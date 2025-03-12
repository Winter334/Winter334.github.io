import{a as u}from"./chunk-W2VEVISB.js";import{a as O}from"./chunk-3QQAZZI6.js";import"./chunk-WIQECBEN.js";O();var r=e=>Array.isArray(e)?u.random(e[0],e[1]):e,C=(e,t)=>{for(t=t.toUpperCase();e;){if(e.nodeName===t)return!0;e=e.parentNode}return!1},L=(e,t)=>{let i=t.move.indexOf("emit");if(i>=0){let{emitRadius:s=[50,180]}=t.moveOptions[i]||{},n=u.random(0,360)*Math.PI/180,o=[-1,1][u.random(0,1)]*r(s);e.endPos={x:e.x+o*Math.cos(n),y:e.y+o*Math.sin(n)}}},R=(e,t)=>{let i=t.move.indexOf("rotate");if(i>=0){let{angle:s=[-180,180]}=t.moveOptions[i]||{};e.endRotation=r(s)}},E=e=>Array.isArray(e)?e.map(t=>t*100):[e*100,e*100],g=class{constructor(t,i,s,n,o,a,l){this.ctx=t,this.x=i,this.y=s,this.color=n,this.radius=o,this.alpha=a,this.lineWidth=l,this.rotation=0}draw(){let{ctx:t,x:i,y:s}=this;t.save(),t.translate(i,s),t.rotate(this.rotation*(Math.PI/180)),t.globalAlpha=this.alpha,this.paint(),this.lineWidth?(t.lineWidth=this.lineWidth,t.strokeStyle=this.color,t.stroke()):(t.fillStyle=this.color,t.fill()),t.globalAlpha=1,t.restore()}},w=class extends g{paint(){let{ctx:t}=this;t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI),t.closePath()}},x=class extends g{constructor(t,i,s,n,o,a,l,c){super(t,i,s,n,o,a,c),this.sides=l}paint(){let{ctx:t,sides:i,radius:s}=this;t.beginPath(),t.moveTo(s*Math.cos(0),s*Math.sin(0));for(let n=1;n<=i;n++){let o=n*2*Math.PI/i;t.lineTo(s*Math.cos(o),s*Math.sin(o))}t.closePath()}},y=class extends g{constructor(t,i,s,n,o,a,l,c){super(t,i,s,n,o,a,c),this.spikes=l}paint(){let{ctx:t,spikes:i,radius:s}=this;t.beginPath(),t.moveTo(0,-s);for(let n=0;n<i*2;n++){let o=n*Math.PI/i-Math.PI/2,a=n%2===0?s:s*.5,l=Math.cos(o)*a,c=Math.sin(o)*a;t.lineTo(l,c)}t.closePath()}},z={circle:w,polygon:x,star:y},Y=(e,t,i,s)=>{let n=z[s.shape],{shapeOptions:o,colors:a,number:l}=s,{radius:c,alpha:h=1,lineWidth:f}=o;return h=E(h),Array.from({length:r(l)},()=>{let m=a[u.random(0,a.length-1)],P=[e,t,i,m,r(c),r(h)/100];n===y?P.push(r(o.spikes)):n===x&&P.push(r(o.sides));let A=new n(...P,r(f));return L(A,s),R(A,s),A})},d=document.createElement("canvas");d.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(d);var p=d.getContext("2d"),T=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?"touchstart":"click",I=0,W=0,M=()=>{if(!p)return;let{clientWidth:e,clientHeight:t}=document.documentElement;d.width=e*2,d.height=t*2,d.style.width=e+"px",d.style.height=t+"px",p.setTransform(1,0,0,1,0,0),p.scale(2,2)},D=e=>{var t,i;I=(t=e.clientX)!==null&&t!==void 0?t:e.touches&&e.touches[0].clientX,W=(i=e.clientY)!==null&&i!==void 0?i:e.touches&&e.touches[0].clientY},N=e=>{let{move:t,moveOptions:i}=e,s={};return t.forEach((n,o)=>{if(n==="emit"){let{radius:a=.1,alphaChange:l=!1,alphaEasing:c="linear",alphaDuration:h=[600,800],alpha:f=0}=i[o]||{};s={x:m=>m.endPos.x,y:m=>m.endPos.y,radius:r(a)},l&&(s.alpha={value:r(E(f))/100,easing:c,duration:r(h)})}else if(n==="diffuse"){let{diffuseRadius:a=[80,160],lineWidth:l=0,alphaEasing:c="linear",alphaDuration:h=[600,800],alpha:f=0}=i[o]||{};s={radius:r(a),lineWidth:r(l),alpha:{value:r(E(f))/100,easing:c,duration:r(h)}}}else n==="rotate"&&(s.rotation=a=>a.endRotation)}),s},S=e=>{for(let t of e)t.draw()},X=u({duration:1/0,update(){p&&p.clearRect(0,0,d.width,d.height)}}),v=null,b=null,k=e=>{b=e,v&&document.removeEventListener(T,v,!1),v=t=>{e.excludeElements.some(i=>C(t.target,i))||(X.play(),D(t),_(I,W))},document.addEventListener(T,v,!1),M(),window.removeEventListener("resize",M,!1),window.addEventListener("resize",M,!1)},_=(e,t)=>{if(!b||!p)return;let{particles:i}=b,s=u().timeline();i.forEach(n=>{let{move:o,moveOptions:a}=n;n.move=Array.isArray(o)?o:[o],n.moveOptions=a?Array.isArray(a)?a:[a]:[],s.add({targets:Y(p,e,t,n),duration:r(n.duration),easing:n.easing||"linear",update:S,...N(n)})}),s.play()},U=e=>{document.readyState==="loading"?window.addEventListener("DOMContentLoaded",()=>k(e),{passive:!0}):k(e)};export{U as default};
