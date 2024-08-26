import{$ as _,A as At,B as bt,H as zt,I as Ft,N as Zt,P as _t,Q as yt,R as mt,S as Nt,_ as pt,aa as N,ba as ht,o as Dt,q as k,r as lt,s as kt,z as Ot}from"./chunk-5GEKUOPM.js";import{$ as Ct,f as D,ta as Lt,z as vt}from"./chunk-FPVVTWH7.js";import{k as ct,x as xt}from"./chunk-VEGMBXJ5.js";import{Bd as st,D as V,Eb as St,F as It,J as K,Ja as gt,Kc as Mt,Ma as rt,a as jt,bd as Rt,g as wt,gb as P,ia as v,ja as C,la as Q,lb as Tt,na as tt,oc as it,pa as et,qa as ot,sa as nt,t as Et,ta as L,tb as at}from"./chunk-V2NSBNR3.js";import"./chunk-XGK45UGL.js";import{a as F,b as Z}from"./chunk-NQUV66Z4.js";function Vt(n){return n.k}function Kt(n){return[n.x,n.y]}function Yt(n){return function(){return n}}function Pt(){let n=0,M=0,e=960,t=500,o=!0,a=!0,r=256,p=Vt,c=Kt,s=0;function m(){let l=+p.apply(this,arguments),d=c.apply(this,arguments),g=Math.log2(l/r),u=Math.round(Math.max(g+s,0)),i=Math.pow(2,g-u)*r,f=+d[0]-l/2,h=+d[1]-l/2,y=Math.max(o?0:-1/0,Math.floor((n-f)/i)),j=Math.min(o?1<<u:1/0,Math.ceil((e-f)/i)),b=Math.max(a?0:-1/0,Math.floor((M-h)/i)),E=Math.min(a?1<<u:1/0,Math.ceil((t-h)/i)),R=[];for(let z=b;z<E;++z)for(let I=y;I<j;++I)R.push([I,z,u]);return R.translate=[f/i,h/i],R.scale=i,R}return m.size=function(l){return arguments.length?(n=M=0,e=+l[0],t=+l[1],m):[e-n,t-M]},m.extent=function(l){return arguments.length?(n=+l[0][0],M=+l[0][1],e=+l[1][0],t=+l[1][1],m):[[n,M],[e,t]]},m.scale=function(l){return arguments.length?(p=typeof l=="function"?l:Yt(+l),m):p},m.translate=function(l){return arguments.length?(c=typeof l=="function"?l:Yt([+l[0],+l[1]]),m):c},m.zoomDelta=function(l){return arguments.length?(s=+l,m):s},m.tileSize=function(l){return arguments.length?(r=+l,m):r},m.clamp=function(l){return arguments.length?(o=a=!!l,m):o&&a},m.clampX=function(l){return arguments.length?(o=!!l,m):o},m.clampY=function(l){return arguments.length?(a=!!l,m):a},m}function O([n,M,e]){let t=1<<e;return[n-Math.floor(n/t)*t,M-Math.floor(M/t)*t,e]}var w=Math.PI/180,ut=180/Math.PI;var Y=new Q("MAP_PROJECTION");function Qt(n,M){return[n[1]*M[2]-n[2]*M[1],n[2]*M[0]-n[0]*M[2],n[0]*M[1]-n[1]*M[0]]}function Bt(n,M){let e=0,t=0;for(;n.length>e;++e)t+=n[e]*M[e];return t}var T=(()=>{class n{get d3Projection(){return this._projection}get geoPath(){return this._path}_projection;_path;constructor(e){this._projection=e,this._path=At().projection(e)}fromLatLngToPoint(e){return this._projection(e)}fromPointToLatLng(e,t=!1){return this._projection.invert(e)}fromLatLngToRotate(e){let t=e[0]*w,o=e[1]*w,a=Math.cos(o)*Math.cos(t),r=Math.cos(o)*Math.sin(t),p=Math.sin(o);return[a,r,p]}getCenter(){return[-this.wrapLong(this._projection.rotate()[0]),-this.wrapLat(this._projection.rotate()[1])]}getZoom(){return Math.round(Math.max(Math.log2(this.getRadius()*(2*Math.PI)/this.getTileSize()),0))}getRadius(){return this._projection.scale()}setRadius(e){this._projection.scale(e/(2*Math.PI))}getTileSize(){return 256}setDimension(e,t){this._projection.translate([e/2,t/2])}wrapLat(e,t=-90,o=90){let a=o-t,r=Math.pow(-1,Math.floor(e/a));return e=Math.abs(e%a)*r,e>=t&&e<=o||(e=(a-e*r)*r),e}wrapLong(e,t=-180,o=180){return e>=t&&e<o||(o-=t,e=((e-t)%o+o)%o+t),e}eulerAngles(e,t,o){let a=.5*o[0]*w,r=.5*o[1]*w,p=.5*o[2]*w,c=Math.sin(a),s=Math.cos(a),m=Math.sin(r),l=Math.cos(r),d=Math.sin(p),g=Math.cos(p),u=[s*l*g+c*m*d,c*l*g-s*m*d,s*m*g+c*l*d,s*l*d-c*m*g],i=this.fromLatLngToRotate(e),f=this.fromLatLngToRotate(t),h=Qt(i,f),y=Math.sqrt(Bt(h,h));if(y===0)return o;let j=.5*Math.acos(Math.max(-1,Math.min(1,Bt(i,f)))),b=h[2]*Math.sin(j)/y,E=-h[1]*Math.sin(j)/y,R=h[0]*Math.sin(j)/y,z=Math.cos(j),I=j&&[z,b,E,R],$=u[0],U=u[1],X=u[2],G=u[3],W=I[0],q=I[1],J=I[2],H=I[3],x=[$*W-U*q-X*J-G*H,U*W+$*q+X*H-G*J,$*J-U*H+X*W+G*q,$*H+U*J-X*q+G*W];return[Math.atan2(2*(x[0]*x[1]+x[2]*x[3]),1-2*(x[1]*x[1]+x[2]*x[2]))*ut,Math.asin(Math.max(-1,Math.min(1,2*(x[0]*x[2]-x[3]*x[1]))))*ut,Math.atan2(2*(x[0]*x[3]+x[1]*x[2]),1-2*(x[2]*x[2]+x[3]*x[3]))*ut]}static \u0275fac=function(t){return new(t||n)(tt(Y))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();function te(n,M){return n}var Ut={provide:Y,deps:[[new et,new ot,Y]],useFactory:te};var A=new Q("MAP_SOURCE"),ee=(()=>{class n{locale;constructor(e){this.locale=e}url(e,t,o){return`https://khms1.googleapis.com/kh?v=917&hl=${this.locale}&x=${e}&y=${t}&z=${o}`}static \u0275fac=function(t){return new(t||n)(tt(Mt))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();function oe(n,M){return n||new ee(M)}var ft={provide:A,deps:[[new et,new ot,A],Mt],useFactory:oe};var dt=(()=>{class n{constructor(){}mapMatrixToSphere(e,t,o,a,r,p){let c=t[0]*w,s=o[0]*w,m=t[1]*w,l=o[1]*w,d=new Uint8ClampedArray(p*p*4),g,u,i;a=[a[0]*w,a[1]*w,a[2]*w];for(let f=0;f<p;f++)for(let h=0;h<p;h++)g=this.mapPoint([f,h],c,s,m,l,a,r,p),u=(f+h*p)*4,i=(g[0]+r+(g[1]+r)*p)*4,d[i]=e[u],d[i+1]=e[u+1],d[i+2]=e[u+2],d[i+3]=e[u+3];return d}mapPoint(e,t,o,a,r,p,c,s){let m=this.mapCoordinate(0,s-1,o,t,e[0]),l=this.mapCoordinate(0,s-1,a,r,e[1]),d=c*Math.sin(l)*Math.cos(m),g=c*Math.sin(l)*Math.sin(m),u=c*Math.cos(l),i;return i=this.rotate(p[0],g,u),g=i.r1,u=i.r2,i=this.rotate(p[1],d,u),d=i.r1,u=i.r2,[d,g,u]}mapCoordinate(e,t,o,a,r){return(r-e)/(t-e)*(a-o)+o}rotate(e,t,o){return{r1:t*Math.cos(e)-o*Math.sin(e),r2:t*Math.sin(e)+o*Math.cos(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();var Gt=(()=>{class n extends ht{elementRef;renderer;document;viewportRuler;mapSource;mapProjection;sphereSurface;hostClassList="d-flex flex-column flex-nowrap w-100 h-100";mapZoomEvent=new wt(null);zoom;drag;content;surfaceContext;subscription=new jt;constructor(e,t,o,a,r,p,c,s){super(e),this.elementRef=t,this.renderer=o,this.document=a,this.viewportRuler=r,this.mapSource=p,this.mapProjection=c,this.sphereSurface=s,this.setTitle("Demo d3 Earth")}ngOnInit(){this.zoom=N().on("zoom",t=>{this.mapZoomEvent.next(t)}),this.drag=kt().on("drag",t=>{let o=this.mapProjection.d3Projection.rotate();if(t.dx!==0&&t.dy!==0){let a=this.mapProjection.fromPointToLatLng([t.x,t.y]),r=this.mapProjection.fromPointToLatLng([t.x-t.dx,t.y-t.dy]);this.mapProjection.d3Projection.rotate(this.mapProjection.eulerAngles(r,a,o)),this.mapZoomEvent.next({sourceEvent:t.sourceEvent,target:null,type:t.type,transform:this.mapZoomEvent.value?.transform})}}),this.mapZoomEvent.next({sourceEvent:{},target:null,type:"",transform:_});let e=this.renderer.createElement("canvas");this.renderer.setStyle(e,"position","absolute"),this.renderer.setStyle(e,"top","0"),this.renderer.setStyle(e,"left","0"),this.renderer.setStyle(e,"width","100%"),this.renderer.setStyle(e,"height","100%"),this.renderer.appendChild(D(this.elementRef),e),this.surfaceContext=e.getContext("2d")}ngAfterViewInit(){let e=D(this.elementRef),t=lt("svg"),o=t.append("g").attr("class","map-content"),a=o.append("path").attr("class","view-edge").attr("fill-opacity",.3).attr("fill","green").attr("stroke-width",0),r=o.append("g").attr("class","map-sphere").attr("fill","transparent").attr("stroke-width",1).attr("stroke","#888888"),p=r.append("path").attr("class","map-graticule");this.content=t,t.append("clipPath").attr("id","rect-clip").append("rect").attr("x",0).attr("y",0),e.appendChild(t.node()),this.setViewDimension(),t.call(this.zoom).call(this.zoom.transform,this.mapZoomEvent.value.transform),r.call(this.drag),r.on("click",c=>{console.log(this.mapProjection.fromPointToLatLng([c.offsetX,c.offsetY]))}),this.mapZoomEvent.pipe(It(c=>c!==null),K(c=>{let s=c.sourceEvent?.type;return V(s==="mousemove"||s==="touchmove"?0:100)}),Et(c=>{let s=this.mapProjection,m=this.getDimension(),l=this.zoom.scaleExtent(),d=Math.min(l[1],Math.max(l[0],Math.ceil(c.transform.k))),g=m.width>>1,u=m.height>>1;return s.d3Projection.translate([g,u]),s.setRadius(d),Z(F({},c),{transform:new pt(d,g,u)})})).subscribe(c=>{console.log(c),this.render(c.transform)}),this.subscription.add(this.viewportRuler.change(100).subscribe(()=>{console.log("viewportRuler => change"),this.setViewDimension()}))}ngOnDestroy(){super.ngOnDestroy(),this.mapZoomEvent.complete(),this.subscription.unsubscribe()}setViewDimension(){let e=this.getDimension(),t=e.width,o=e.height,a=this.mapProjection.getTileSize(),r=Math.floor(Math.min(t,o)*Math.PI*.618),p=a<<18,c=this.mapZoomEvent.value.transform;this.content.attr("viewBox",[0,0,t,o]),this.content.select("clipPath > rect").attr("width",t).attr("height",o),this.zoom.extent([[0,0],[t,o]]).scaleExtent([r,p]),c=c.translate(t>>1,o>>1),c.k<r&&(c=c.scale(r)),this.mapZoomEvent.next(Z(F({},this.mapZoomEvent.value),{transform:c}))}render(e){let t=this.mapProjection;console.log(`transform: ${e}`),console.log(t.getRadius());let o=t.getZoom(),a=1<<o,r=360/a,p=180/a,c=t.getCenter(),s=this.getDimension(),m=s.width,l=s.height,d=this.content.select(".map-graticule"),g=0,u=m,i=0,f=l,h;g=0,u=m,i=0,f=l,h=[t.fromPointToLatLng([g,i]),t.fromPointToLatLng([u,i]),t.fromPointToLatLng([u,f]),t.fromPointToLatLng([g,f]),t.fromPointToLatLng([g,i])],h[0]=h[4]=[t.wrapLong(Math.floor(h[0][0]/r)*r),t.wrapLat(Math.ceil(h[0][1]/p)*p)],h[1]=[t.wrapLong(Math.ceil(h[1][0]/r)*r),t.wrapLat(Math.ceil(h[1][1]/p)*p)],h[2]=[t.wrapLong(Math.ceil(h[2][0]/r)*r),t.wrapLat(Math.floor(h[2][1]/p)*p)],h[3]=[t.wrapLong(Math.floor(h[3][0]/r)*r),t.wrapLat(Math.floor(h[3][1]/p)*p)];let j=Ot().step([r,p]).precision(p)();console.log(`stepDegX: ${r} | stepDegY: ${p}`),d.attr("d",t.geoPath(j)),console.log(h),console.log(`center: ${c}`),console.log(`${o} <=> ${a}`),this.content.select(".view-edge").attr("d",t.geoPath({type:"Polygon",coordinates:[h]})),this.showGuideline(h,r,p),this.brushTiles(h,r,p,o,a)}brushTiles(e,t,o,a,r){let p=this.mapSource,c=this.mapProjection,s=this.sphereSurface,m=this.mapProjection.getTileSize(),l=this.document.createElement("canvas"),d=l.getContext("2d"),g=this.surfaceContext,u=[];l.width=l.height=m;for(let i=e[0][0];i<=e[2][0];i=c.wrapLong(i+t)){for(let f=e[2][1];f<=e[0][1]&&(u.push([i,f]),Lt(p.url.apply(p,O([i/t,f/o,a])),{crossOrigin:"anonymous"}).then(h=>{d.drawImage(h,0,0,m,m),g.putImageData(new ImageData(s.mapMatrixToSphere(d.getImageData(0,0,m,m).data,[i,f],[c.wrapLong(i+t),c.wrapLat(f+o)],c.d3Projection.rotate(),c.getRadius(),m),m,m),0,0)}),!(u.length>=r));f=c.wrapLat(f+o));if(u.length>=r)break}}showGuideline(e,t,o){let a=this.mapProjection,r=zt().domain([-180,-91,-90,-1,1,89,90,180]).range(["blue","blue","green","green","black","red","red","yellow"]),p=[],c=this.content.select(".map-sphere");c.selectAll(".bounds-point").data(e).join("path").attr("class","bounds-point").attr("stroke","black").attr("stroke-width",2).attr("d",s=>a.geoPath({type:"Point",coordinates:s})).on("click",function(s){console.log(k(s.target).data()[0]),s.stopPropagation()});for(let s=-180;s<=180;s+=t)p.push([s,0]);for(let s=-90;s<=90;s+=o)p.push([0,s]);c.selectAll(".grid-point").data(p).join("path").attr("class","grid-point").attr("fill",function(s){return r(s[0]||s[1])}).attr("stroke-width",0).attr("d",s=>a.geoPath({type:"Point",coordinates:s})).on("click",function(s){console.log(k(s.target).data()[0]),s.stopPropagation()})}getDimension(){return D(this.elementRef).getBoundingClientRect()}static \u0275fac=function(t){return new(t||n)(P(ct),P(rt),P(Tt),P(Rt),P(vt),P(A),P(T),P(dt))};static \u0275cmp=nt({type:n,selectors:[["app-earth"]],hostVars:2,hostBindings:function(t,o){t&2&&St(o.hostClassList)},features:[it([ft,{provide:Y,useValue:bt()},T]),at],decls:0,vars:0,template:function(t,o){},encapsulation:2})}return n})();var ae=1e3,Wt=ae*60,ie=Wt*60,B=ie*24,Ge=B*7,We=B*30,qe=B*365,se=mt("%d"),ce=mt("%B"),le=mt("%Y"),qt=(()=>{class n extends ht{elementRef;dateAdapter;mapSource;mapProjection;mapZoomEvent=new gt;axisZoomEvent=new gt;useScaleType="year";constructor(e,t,o,a,r){super(e),this.elementRef=t,this.dateAdapter=o,this.mapSource=a,this.mapProjection=r,this.setTitle("Demo d3 Map")}ngAfterViewInit(){let e=D(this.elementRef),t=e.getBoundingClientRect(),o=t.width,a=t.height,r=lt("svg").attr("viewBox",[0,0,o,a]);r.append("clipPath").attr("id","rect-clip").append("rect").attr("x",0).attr("y",0).attr("width",o).attr("height",a),this.createMapTiles(r,o,a),this.createXAxis(r,o,a),e.appendChild(r.node())}ngOnDestroy(){super.ngOnDestroy(),this.mapZoomEvent.complete(),this.axisZoomEvent.complete()}createMapTiles(e,t,o){let a=this.mapSource,r=this.mapProjection,p=r.getTileSize(),c=[-100,-2,-1,0],s=[Math.min(t,o),p<<18],m=Pt().extent([[0,0],[t,o]]).tileSize(p).clampX(!1).clampY(!1),l=_.translate(t>>1,o>>1).scale(4096),d=N().scaleExtent(s).extent([[0,0],[t,o]]).on("zoom",i=>{let f=i.transform.k,h=i.transform.x,y=i.transform.y,j;f<=s[0]&&(f=s[0],y=o/2),f=Math.round(f),h=Math.round(h),y=Math.round(y),j=new pt(f,h,y),r.d3Projection.translate([h,y]),r.setRadius(f),this.mapZoomEvent.next(Z(F({},i),{transform:j}))}),g=e.append("g").attr("class","map-content"),u=g.selectAll("g").data(c).join("g").attr("class","map-layer");this.mapZoomEvent.pipe(K(i=>{let f=i.sourceEvent?.type;return V(f==="mousemove"||f==="touchmove"?0:100)})).subscribe(i=>{let f=r.getTileSize(),h;u.each((y,j,b)=>{h=m.zoomDelta(y)(i.transform),f=h.scale,k(b[j]).selectAll("image").data(h).join("image").attr("xlink:href",E=>a.url.apply(a,O(E))).attr("x",E=>(E[0]+h.translate[0])*f).attr("y",E=>(E[1]+h.translate[1])*f).attr("width",f).attr("height",f).attr("class","map-tile").on("error",function(){k(this).style("opacity",0)})})}),g.call(d).call(d.transform,l).on("click",i=>{console.log(r.fromPointToLatLng([i.offsetX,i.offsetY]))})}createXAxis(e,t,o){let a=this.dateAdapter.today(),r=this.dateAdapter.addCalendarYears(a,-20),p=Math.ceil((a.valueOf()-r.valueOf())/B),c=e.append("g").attr("clip-path","url(#rect-clip)"),s=Nt().domain([r,a]).rangeRound([0,t]).nice(yt),m=30,l=[[0,0],[t,m]],d=N().scaleExtent([1,Math.max(t/40,Math.min(365,p))]).translateExtent(l).extent(l).on("zoom",i=>{this.axisZoomEvent.next(i)}),g=Dt(s).tickSize(8).tickPadding(5).ticks(t/80).tickFormat(i=>(_t(i)<i?se:yt(i)<i?ce:le)(i)),u=_.scale(t/(s(a)-s(r))).translate(-s(r),0);this.axisZoomEvent.subscribe(i=>{u=i.transform,u.k<=12?this.useScaleType="year":u.k<=30?this.useScaleType="month":this.useScaleType="day",c.select(".x-axis").call(g.scale(u.rescaleX(s)))}),c.append("rect").attr("fill","white").attr("x",0).attr("y",o-m).attr("width",t).attr("height",m),c.append("g").attr("class","x-axis").attr("transform",`translate(0,${o-m})`).style("user-select","none").call(g),c.call(d).transition().duration(1500).call(d.transform,u),c.on("click",i=>{console.log(Zt(u.rescaleX(s).invert(i.offsetX)))})}createTimeInterval(e){return Ft(t=>{switch(this.useScaleType){case"year":t.setMonth(0,1);break;case"month":t.setDate(1);break}t.setHours(0,0,0,0)},(t,o)=>{switch(this.useScaleType){case"year":t.setFullYear(t.getFullYear()+o);break;case"month":t.setMonth(t.getMonth()+o);break;default:t.setDate(t.getDate()+o)}},(t,o)=>{let a=(o.valueOf()-t.valueOf()-(o.getTimezoneOffset()-t.getTimezoneOffset())*Wt)/B;return console.log(a),a<=60?e/60:e/80},t=>{switch(this.useScaleType){case"year":return t.getFullYear();case"month":return t.getMonth();default:return t.getDate()-1}})}static \u0275fac=function(t){return new(t||n)(P(ct),P(rt),P(Ct),P(A),P(T))};static \u0275cmp=nt({type:n,selectors:[["app-map"]],hostAttrs:[1,"d-flex","flex-column","flex-nowrap","w-100","h-100"],features:[it([ft,Ut,T]),at],decls:0,vars:0,template:function(t,o){},encapsulation:2})}return n})();var me=[{path:"earth",component:Gt},{path:"map",component:qt},{path:"",redirectTo:"map",pathMatch:"full"},{path:"**",redirectTo:"map"}],Jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=C({imports:[xt.forChild(me),xt]})}return n})();var Ht=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=C({providers:[dt],imports:[st]})}return n})();var lo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=L({type:n});static \u0275inj=C({imports:[st,Jt,Ht]})}return n})();export{lo as DemoModule};
/**i18n:4ec78395217facedd742edef8dfa814b1ea6af3fbb33fa1f9a497a05293d0698*/