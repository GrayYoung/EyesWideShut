(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,e=[],r.O=(n,t,f,c)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,f,c]=e[d],s=!0,i=0;i<t.length;i++)(!1&c||a>=c)&&Object.keys(r.O).every(p=>r.O[p](t[i]))?t.splice(i--,1):(s=!1,c<a&&(a=c));if(s){e.splice(d--,1);var b=f();void 0!==b&&(n=b)}}return n}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[t,f,c]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var c=Object.create(null);r.r(c);var d={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>d[s]=()=>t[s]);return d.default=()=>t,r.d(c,d),c}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{109:"7c5735f05b834711",144:"f040f73397d277ea",201:"22f2b075e7e1ba38",214:"c9eb3b38e892f5f0",354:"ae82537bd2158240",430:"5539bbe65c3ab3d0",431:"d8b22973abf6045c",455:"d789554273df268b",460:"70ad7f1bebf2bc0f",516:"4854ac544a6c896a",589:"c5eb153d9d521dcb",592:"c82f965f6fd413ce",640:"9b2bfc11da7fac7d",684:"4beb19280f85d3dd",685:"cca0093e089b3270",694:"c7f104dd8e176ffa",710:"8b9be696638cee7c",712:"2c5acff86b9080d7",715:"3207f057501da5af",735:"c464bfae85be1e88",742:"0d00d0ed2b7e2040",761:"d9354be9b5364384",832:"d165140001089097",903:"389966145575280a",964:"2ac710cc4feeca3d",981:"48e0d120edd9d94d",985:"0069f0ee62d633cb"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="bank:";r.l=(t,f,c,d)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==c)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var o=i[b];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==n+c){a=o;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+c),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,c)=>{var d=r.o(e,f)?e[f]:void 0;if(0!==d)if(d)c.push(d[2]);else if(666!=f){var a=new Promise((o,l)=>d=e[f]=[o,l]);c.push(d[2]=a);var s=r.p+r.u(f),i=new Error;r.l(s,o=>{if(r.o(e,f)&&(0!==(d=e[f])&&(e[f]=void 0),d)){var l=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,d[1](i)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,c)=>{var i,b,[d,a,s]=c,o=0;if(d.some(u=>0!==e[u])){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var l=s(r)}for(f&&f(c);o<d.length;o++)r.o(e,b=d[o])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkbank=self.webpackChunkbank||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();