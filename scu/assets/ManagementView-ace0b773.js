import{_ as z}from"./scu-brand-e95377c9.js";import{y as D,r as d,w as A,z as s,A as a,B as e,T as w,a0 as g,C as U,a1 as i,a2 as L,a3 as K,t as k,$ as I,_ as N,K as E,a4 as Y,a5 as q,D as y,E as F,X as f,u as H,J,a6 as Q,a7 as B,a8 as W,M as X,N as G,L as C,V as O,Q as P,R as Z}from"./index-0f2da851.js";const ee={class:"p-3","aria-label":"breadcrumb"},se={class:"breadcrumb mb-0"},te=D({__name:"Breadcrumb",setup(u){const S=L,r=d(new Array(2)),v=K(),b=k(I);return A(()=>v.path,p=>{const l=new Array(2);S.some(t=>(l[0]=t,t.children.some(o=>(l[1]=o,p.endsWith(`/${o.path}`))))),r.value=l,b.value=l.map(t=>t==null?void 0:t.label).reverse().join(" - ")},{immediate:!0}),(p,l)=>(s(),a("nav",ee,[e("ol",se,[(s(!0),a(w,null,g(r.value,(t,o)=>(s(),a("li",{class:U(["breadcrumb-item",{active:o===r.value.length-1}]),key:o},i(t==null?void 0:t.label),3))),128))])]))}});const ae=N(te,[["__scopeId","data-v-4d875ba9"]]),m=u=>(X("data-v-dfa88f52"),u=u(),G(),u),oe={class:"d-flex flex-row flex-nowrap vw-100 vh-100 p-3"},ne={class:"h-100"},le={class:"d-flex flex-row flex-nowrap sticky-top"},ce={class:"avatar text-secondary"},re={class:"flex-fill d-flex flex-column justify-content-center align-items-start mb-0"},ie={class:"text-secondary"},ue={class:"text-muted"},_e={class:"mb-0 text-nowrap"},de={class:"nav flex-column"},pe={class:"text-nowrap"},he=["href"],fe={class:"text-nowrap"},me=m(()=>e("div",{class:"ps-3"},null,-1)),ve={class:"h-100 flex-fill d-flex flex-column flex-nowrap overflow-hidden container-content"},be={class:"d-flex flex-row flex-nowrap justify-content-start align-items-center rounded-3 px-3 py-2 mb-3 text-secondary"},xe=m(()=>e("h1",{class:"mb-0 fs-6 text-truncate"},[e("img",{alt:"",src:z,height:"32"}),e("span",{class:"ms-2"},"高等教育自学考试学生管理系统")],-1)),ye=m(()=>e("span",{class:"flex-fill"},null,-1)),we=["disabled"],ge={key:0,class:"spinner-grow text-primary",role:"status"},ke=m(()=>e("span",{class:"visually-hidden"},"Loading...",-1)),Se=[ke],Ve={class:"flex-fill rounded-3 overflow-auto"},Ee=D({__name:"ManagementView",setup(u){const r=d(L),v=k(O),b=k(P),p=E().user,l=new Y(v),t=d(E().user),o=d(!1),V=d(null),M=()=>{o.value=!0,b.logout().pipe(J(()=>{p.name=""})).subscribe(()=>{},()=>{o.value=!1})};return l.getGraduationStudySource().subscribe(_=>{r.value.some(h=>h.children.some(c=>c.name==="g-study"?(c.path=_.body.source,!0):!1))}),q(()=>{const _=V.value.querySelector("a.router-link-active");_&&_.scrollIntoView({behavior:"smooth",block:"nearest"})}),(_,h)=>{const c=C("Icon"),T=C("router-link"),$=Z("tooltip");return s(),a("main",oe,[e("section",{class:"h-100 rounded-3 overflow-hidden container-nav",ref_key:"navList",ref:V},[e("div",ne,[e("header",le,[e("div",ce,[y(c,{name:"face"})]),e("h2",re,[e("span",ie,i(t.value.name),1),e("small",ue,i(t.value.email),1)])]),(s(!0),a(w,null,g(r.value,(x,R)=>(s(),a("section",{key:R},[e("header",null,[e("h3",_e,i(x.label),1)]),e("ul",de,[(s(!0),a(w,null,g(x.children,(n,j)=>(s(),a("li",{class:"nav-item",key:j},[n.component?(s(),f(T,{key:0,class:"nav-link text-truncate",to:"/system/"+n.path},{default:Q(()=>[n.icon?(s(),f(c,{key:0,name:n.icon},null,8,["name"])):B("",!0),e("span",pe,i(n.label),1)]),_:2},1032,["to"])):(s(),a("a",{key:1,class:"nav-link text-truncate",target:"_blank",href:n.path},[n.icon?(s(),f(c,{key:0,name:n.icon},null,8,["name"])):B("",!0),e("span",fe,i(n.label),1)],8,he))]))),128))])]))),128))])],512),me,e("section",ve,[e("header",be,[xe,ye,e("span",null,[F((s(),a("button",{type:"button",class:"btn btn-icon text-secondary",disabled:o.value,"data-bs-toggle":"tooltip",title:"退出",onClick:h[0]||(h[0]=x=>M())},[o.value?(s(),a("div",ge,Se)):(s(),f(c,{key:1,name:"logout"}))],8,we)),[[$]])])]),e("div",Ve,[y(ae,{class:"sticky-top"}),y(H(W))])])])}}});const De=N(Ee,[["__scopeId","data-v-dfa88f52"]]);export{De as default};
//# sourceMappingURL=ManagementView-ace0b773.js.map