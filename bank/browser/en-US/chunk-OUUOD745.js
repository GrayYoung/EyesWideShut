import{a as Vt,b as le}from"./chunk-HIEQ3UKT.js";import{a as $t,b as Dt}from"./chunk-FZ5VZCDA.js";import{d as ae}from"./chunk-OOYEASF4.js";import{a as yt,b as Lt,c as xt}from"./chunk-KWXJS43J.js";import{b as Ft,c as Ut}from"./chunk-NXN2TYJG.js";import{$a as ie,A as Qe,Aa as gt,Da as Ct,Eb as wt,Fb as vt,Gb as Nt,Hb as Tt,I as Ye,Lb as At,M as Ze,N as Ke,P as ne,Qa as Mt,R as Je,Ra as Et,S as et,Sa as Pt,Ta as ht,Y as tt,Z as nt,_a as St,aa as ct,fa as _t,ga as dt,ja as mt,jb as bt,kb as O,lb as oe,oa as pt,ra as ut,va as ft,wb as re,xb as Ot,yb as Rt,zb as It}from"./chunk-TR53RVVY.js";import{z as st}from"./chunk-FPVVTWH7.js";import{s as it,t as ot,u as rt,v as at,w as lt,x as fe}from"./chunk-VEGMBXJ5.js";import"./chunk-B5CQEDI6.js";import"./chunk-NM3VG7M7.js";import"./chunk-Z5IRLV5N.js";import"./chunk-E2CVKBY2.js";import{$ as v,A as Ue,Ab as s,Ba as d,Bd as He,Ca as m,Cb as pe,Eb as ue,F as W,H as V,K as me,Kb as a,Lb as r,M as j,Ma as De,Mb as I,Nb as P,Ob as h,Q as k,Qb as b,Tb as g,Wb as E,Yb as f,a as U,ac as G,bc as X,bd as We,cc as z,da as $e,f as ce,fb as l,fc as S,g as Fe,gb as M,gc as w,hc as T,ja as B,lb as Q,lc as A,mc as y,nc as L,o as F,oc as Ve,od as Z,p as D,pd as K,q as _e,qc as ke,qd as J,rc as x,rd as ee,sa as N,sc as Ge,sd as te,t as de,ta as H,td as je,uc as Xe,ud as Be,vc as ze,xc as qe,yb as C,zb as Y}from"./chunk-V2NSBNR3.js";import"./chunk-XGK45UGL.js";import{a as xe}from"./chunk-NQUV66Z4.js";var Yt=()=>[],Zt=n=>({primary:n,secondary:null}),Kt=n=>({outlets:n}),Jt=(n,_)=>["/admin",n,_];function en(n,_){if(n&1&&I(0,"i",10),n&2){let e=f(2).$implicit;ue(e.icon);}}function tn(n,_){if(n&1&&(a(0,"span",11),w(1),r()),n&2){let e=f(2).$implicit;l(),T(e.description);}}function nn(n,_){if(n&1){let e=b();a(0,"a",6),E("click",function(){d(e);let t=f(2);return m(t.onMouseLeave());}),C(1,en,1,2,"i",7),a(2,"span",8)(3,"span"),w(4),r(),C(5,tn,2,1,"span",9),r()();}if(n&2){let e=f().$implicit,i=f();s("routerLink",Ge(10,Jt,e.url.split("/")[0],x(8,Kt,x(6,Zt,e.url?e.url.split("/").slice(1):ke(5,Yt)))))("relativeTo",i.route.firstChild),l(),s("ngIf",e.icon),l(3),T(e.title),l(),s("ngIf",e.description);}}function on(n,_){if(n&1&&I(0,"i",10),n&2){let e=f(2).$implicit;ue(e.icon);}}function rn(n,_){if(n&1&&(a(0,"span",11),w(1),r()),n&2){let e=f(2).$implicit;l(),T(e.description);}}function an(n,_){if(n&1&&(a(0,"a",12),C(1,on,1,2,"i",7),a(2,"span",8)(3,"span"),w(4),r(),C(5,rn,2,1,"span",9),r(),I(6,"span",13),r()),n&2){let e=f().$implicit;l(),s("ngIf",e.icon),l(3),T(e.title),l(),s("ngIf",e.description);}}function ln(n,_){if(n&1){let e=b();a(0,"li",3),E("mouseenter",function(t){let o=d(e).$implicit,p=f();return m(p.onMouseEnterItem(t,o));})("mouseleave",function(t){let o=d(e).$implicit,p=f();return m(p.onMouseLeaveItem(t,o));}),C(1,nn,6,13,"a",4)(2,an,7,3,"a",5),r();}if(n&2){let e=_.$implicit;s("ngSwitch",!!e.children&&e.children.length>0),l(),s("ngSwitchCase",!1);}}var kt=(()=>{class n{route;elementRef;renderer;viewportRuler;overlay;items;mouseEntered=!1;overlayRef;parentMenu;childMenu;scrollbar;liElement;openCommand$=new ce();closeCommand$=new ce();subscription=new U();constructor(e,i,t,o,p){this.route=e,this.elementRef=i,this.renderer=t,this.viewportRuler=o,this.overlay=p;}ngOnInit(){let e=this.overlay.position().flexibleConnectedTo(this.elementRef);e.withPositions([{offsetX:-1,offsetY:0,originX:"end",originY:"top",overlayX:"start",overlayY:"top"}]),this.overlayRef=this.overlay.create({backdropClass:"cdk-overlay-invisible-backdrop",disposeOnNavigation:!0,hasBackdrop:!1,positionStrategy:e,scrollStrategy:this.overlay.scrollStrategies.noop(),width:330}),this.scrollbar=this.renderer.createElement("div"),this.renderer.addClass(this.scrollbar,"scrollbar");}ngAfterViewInit(){setTimeout(()=>{this.detectScrollbar();},100),this.subscription.add(this.viewportRuler.change(100).subscribe(()=>{this.detectScrollbar();})),this.subscription.add(this.openCommand$.pipe(me(11)).subscribe(e=>{this.openMenu(e);})),this.subscription.add(this.closeCommand$.pipe(me(10)).subscribe(()=>{this.isAbleToCloseMenu()&&(this.closeMenu(),this.clearMenu(this.parentMenu));}));}ngOnDestroy(){this.closeCommand$.complete(),this.subscription.unsubscribe();}onMouseEnter(){this.mouseEntered=!0;}onMouseLeave(){this.mouseEntered=!1,this.closeCommand$.next(null);}onMouseEnterItem(e,i){this.toggleActiveClass(!1),this.liElement=this.getParentLi(e.target),this.openCommand$.next(i);}onMouseLeaveItem(e,i){this.liElement=this.getParentLi(e.target),this.closeCommand$.next(i);}onScroll(e){let i=e.scrollTop/e.scrollHeight*e.clientHeight;this.renderer.setStyle(this.scrollbar,"top",i+"px");}openMenu(e){let i=e.children;if(this.closeMenu(),i&&i.length){this.overlayRef.updateSize({height:this.elementRef.nativeElement.offsetHeight});let t=new ct(n),o=this.overlayRef.attach(t);o.instance.items=i,o.instance.parentMenu=this,this.childMenu=o.instance,this.toggleActiveClass(!0);}}closeMenu(){this.overlayRef.detach(),this.childMenu=void 0,this.toggleActiveClass(!1);}clearMenu(e){e&&e.isAbleToCloseMenu()&&(e.overlayRef.detach(),e.childMenu=void 0,e.toggleActiveClass(!1),e.parentMenu&&e.clearMenu(e.parentMenu));}isAbleToCloseMenu(){return this.childMenu?!this.childMenu.mouseEntered&&this.childMenu.isAbleToCloseMenu():!0;}detectScrollbar(){let e=this.elementRef.nativeElement.children[0],i=e.scrollHeight,t=e.offsetHeight;i>t?(this.renderer.addClass(e,"with-scrollbar"),this.renderer.appendChild(this.elementRef.nativeElement,this.scrollbar),this.renderer.setStyle(this.scrollbar,"height",t*(t/i)+"px")):(this.renderer.removeClass(e,"with-scrollbar"),this.renderer.removeChild(this.elementRef.nativeElement,this.scrollbar));}getParentLi(e){if(e){let i=(e.tagName||"").toLowerCase();return i==="li"?e:i==="ul"||i==="body"?null:this.getParentLi(e.parentElement);}}toggleActiveClass(e){this.liElement&&(e?this.renderer.addClass(this.liElement,"open"):this.renderer.removeClass(this.liElement,"open"));}static ɵfac=function(i){return new(i||n)(M(it),M(De),M(Q),M(st),M(_t));};static ɵcmp=N({type:n,selectors:[["app-navigation-menu"]],hostBindings:function(i,t){i&1&&E("mouseenter",function(){return t.onMouseEnter();})("mouseleave",function(){return t.onMouseLeave();});},inputs:{items:"items"},decls:3,vars:1,consts:[["container",""],[3,"scroll"],[3,"ngSwitch","mouseenter","mouseleave",4,"ngFor","ngForOf"],[3,"mouseenter","mouseleave","ngSwitch"],["routerLinkActive","active","class","d-flex flex-row text-underline",3,"routerLink","relativeTo","click",4,"ngSwitchCase"],["class","d-flex flex-row","href","javascript:void(0)",4,"ngSwitchDefault"],["routerLinkActive","active",1,"d-flex","flex-row","text-underline",3,"click","routerLink","relativeTo"],["aria-hidden","true",3,"class",4,"ngIf"],[1,"d-flex","flex-column","content"],["class","content-description",4,"ngIf"],["aria-hidden","true"],[1,"content-description"],["href","javascript:void(0)",1,"d-flex","flex-row"],[1,"arrow"]],template:function(i,t){if(i&1){let o=b();a(0,"ul",1,0),E("scroll",function(){d(o);let c=S(1);return m(t.onScroll(c));}),C(2,ln,3,2,"li",2),r();}i&2&&(l(2),s("ngForOf",t.items));},dependencies:[at,lt,Z,K,J,ee,te],styles:["[_nghost-%COMP%]{display:flex;width:330px;height:100%;overflow:hidden;box-shadow:-5px 0 10px #00000040}.arrow[_ngcontent-%COMP%]{display:block;position:absolute;right:2.25rem;top:50%;width:15px;height:15px;border:solid 1px #ffffff;border-width:1px 1px 0 0;margin-top:-7px;transform:rotate(45deg)}.scrollbar[_ngcontent-%COMP%]{position:absolute;top:0;right:.25rem;width:7px;border-radius:7px;border:solid 1px #3a525e;background-color:#435f6c;pointer-events:none}ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0 -20px 0 0;width:350px;height:100%;overflow-y:auto;border-color:#62808e;background-color:#587380}li[_ngcontent-%COMP%]{position:relative;margin-right:20px;border-top:solid 1px #70929e;border-bottom:solid 1px #5e7a88;margin-bottom:1px;box-shadow:0 1px 0 1px #3b5059}li[_ngcontent-%COMP%]:nth-child(2n){background-color:#5d7987}li[_ngcontent-%COMP%]:last-child{box-shadow:0 1px 0 1px #4f6c78}li[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%]:focus, li.open[_ngcontent-%COMP%]{background-color:#0598d2!important;border-bottom-color:#09b3d9!important;box-shadow:0 0 15px #068cc1 inset!important;transition:background-color cubic-bezier(.075,.82,.165,1) .5s}li[_ngcontent-%COMP%]:hover   .content-description[_ngcontent-%COMP%], li[_ngcontent-%COMP%]:focus   .content-description[_ngcontent-%COMP%], li.open[_ngcontent-%COMP%]   .content-description[_ngcontent-%COMP%]{color:#78cbeb!important}li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:block;padding:1rem 1.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.75rem;color:#fff}li[_ngcontent-%COMP%] > a.text-underline[_ngcontent-%COMP%]{text-decoration:underline}li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus{background-color:#0699d2!important}ul.with-scrollbar[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{margin-right:0}.top-level[_nghost-%COMP%], .top-level   [_nghost-%COMP%]{border-right:solid 1px #DEE1F9;box-shadow:0 0 10px 1px #606a83}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{height:110px;overflow:hidden}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(2n), .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(2n){background-color:transparent}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{flex:1 1 auto;height:100%;text-shadow:1px 1px 1px #444444;text-decoration:none;font-size:.875rem}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after, .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after{content:none}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus{background-color:transparent!important}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .icon[_ngcontent-%COMP%], .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .icon[_ngcontent-%COMP%]{flex:0 0 auto}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%], .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{padding-left:15px}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .arrow[_ngcontent-%COMP%], .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > .arrow[_ngcontent-%COMP%]{display:none}.top-level[_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .content-description[_ngcontent-%COMP%], .top-level   [_nghost-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .content-description[_ngcontent-%COMP%]{display:block;flex:1 1 auto;padding-top:.5rem;margin-bottom:0;overflow:hidden;text-overflow:ellipsis;white-space:normal;word-break:break-word;color:#9ab3c0;font-size:.75rem;-webkit-display:box;-webkit-line-clamp:2;-webkit-box-orient:vertical}"]});}return n;})();var dn=["leftSide"],mn=["rightSide"],Gt=(()=>{class n{router;renderer;document;authService;communication;notification;storage;className="d-flex flex-column flex-nowrap align-items-center justify-content-center w-100 h-100";menuItems=[];leftSidenav;rightSidenav;secondaryOutletState=new Fe(!1);subscription=new U();constructor(e,i,t,o,p,c,R){this.router=e,this.renderer=i,this.document=t,this.authService=o,this.communication=p,this.notification=c,this.storage=R;}ngOnInit(){this.renderer.addClass(this.document.body,"with-nav-menu"),this.menuItems=this.authService.getMenu().map(e=>xe({},e)),this.subscription.add(Ue(window,"unload").subscribe(()=>{this.storage.set("redirectUrl",this.router.routerState.snapshot.url);}));}ngAfterViewInit(){setTimeout(()=>{this.subscription.add(this.secondaryOutletState.subscribe(e=>{e?this.rightSidenav.open():this.rightSidenav.close();})),this.subscription.add(this.communication.acceptFullScreenCommand().subscribe(e=>{e?this.leftSidenav.close():this.leftSidenav.open();}));});}ngOnDestroy(){this.renderer.removeClass(this.document.body,"with-nav-menu"),this.subscription.unsubscribe();}onSecondaryOutletActivate(e){this.secondaryOutletState.next(!0);}onSecondaryOutletDeactivate(e){this.secondaryOutletState.next(!1);}static ɵfac=function(i){return new(i||n)(M(rt),M(Q),M(We),M(re),M(St),M(ie),M(bt));};static ɵcmp=N({type:n,selectors:[["app-admin"]],viewQuery:function(i,t){if(i&1&&(G(dn,5),G(mn,5)),i&2){let o;X(o=z())&&(t.leftSidenav=o.first),X(o=z())&&(t.rightSidenav=o.first);}},hostVars:1,hostBindings:function(i,t){i&2&&Y("class",t.className);},decls:11,vars:1,consts:[["leftSide",""],["rightSide",""],["hasBackdrop","false",1,"w-100","h-100"],["mode","side","opened",""],[1,"top-level",3,"items"],["mode","over","position","end","autoFocus","false"],["name","secondary",3,"activate","deactivate"],[1,"d-flex","w-100","h-100","overflow-hidden","container-content"]],template:function(i,t){if(i&1){let o=b();I(0,"app-management-header"),a(1,"mat-sidenav-container",2)(2,"mat-sidenav",3,0),I(4,"app-navigation-menu",4),r(),a(5,"mat-sidenav",5,1)(7,"router-outlet",6),E("activate",function(c){return d(o),m(t.onSecondaryOutletActivate(c));})("deactivate",function(c){return d(o),m(t.onSecondaryOutletDeactivate(c));}),r()(),a(8,"div",7),I(9,"router-outlet"),r()(),I(10,"app-management-footer");}i&2&&(l(4),s("items",t.menuItems));},dependencies:[ot,Mt,Et,Rt,Ot,kt],styles:["[_nghost-%COMP%]{flex:0 0 100%}.mat-drawer[_ngcontent-%COMP%]{max-width:100%}"]});}return n;})();var Xt=(()=>{class n{constructor(){}ngOnInit(){}static ɵfac=function(i){return new(i||n)();};static ɵcmp=N({type:n,selectors:[["app-start"]],hostAttrs:[1,"logo-large"],decls:0,vars:0,template:function(i,t){},styles:["[_nghost-%COMP%]{display:flex;width:100%;height:100%}"]});}return n;})();var zt=(()=>{class n{constructor(){}ngOnInit(){}static ɵfac=function(i){return new(i||n)();};static ɵcmp=N({type:n,selectors:[["app-four-zero-four"]],hostAttrs:[1,"d-flex","align-items-center","justify-content-center","w-100","h-100"],decls:2,vars:0,template:function(i,t){i&1&&(a(0,"p"),w(1,"404"),r());}});}return n;})();var q=n=>({ctrl:n});function pn(n,_){if(n&1){let e=b();a(0,"button",56),E("click",function(){d(e);let t=f();return m(t.userInfoEditable=!0);}),P(1),g(2,18),h(),r();}}function un(n,_){if(n&1){let e=b();a(0,"button",56),E("click",function(){d(e);let t=f(),o=S(4);return t.userInfoEditable=!1,m(t.revertInfo(o));}),P(1),g(2,19),h(),r();}}function fn(n,_){}function gn(n,_){}function Cn(n,_){}function Mn(n,_){}function En(n,_){}function Pn(n,_){if(n&1){let e=b();a(0,"button",56),E("click",function(){d(e);let t=f(2);return m(t.patientInfoEditable=!0);}),P(1),g(2,23),h(),r();}}function hn(n,_){if(n&1){let e=b();a(0,"button",56),E("click",function(){d(e),f();let t=S(3),o=f();return o.patientInfoEditable=!1,m(o.revertInfo(t));}),P(1),g(2,24),h(),r();}}function Sn(n,_){if(n&1){let e=b();a(0,"mat-tab-group",57)(1,"mat-tab",58)(2,"form",59,6),E("ngSubmit",function(){d(e);let t=S(3),o=f();return m(o.editPatientInfo(t));}),a(4,"div",33)(5,"div",34)(6,"label",35),P(7),g(8,20),h(),r(),a(9,"div",36)(10,"mat-form-field",37)(11,"input",60,7),L("ngModelChange",function(t){d(e);let o=f();return y(o.user.cardNo,t)||(o.user.cardNo=t),m(t);}),r()(),C(13,Mn,0,0,"ng-template",47),r()(),a(14,"div",34)(15,"label",35),P(16),g(17,21),h(),r(),a(18,"div",36)(19,"mat-form-field",37)(20,"input",61,8),L("ngModelChange",function(t){d(e);let o=f();return y(o.user.wxid,t)||(o.user.wxid=t),m(t);}),r()(),C(22,En,0,0,"ng-template",47),r()()(),a(23,"div",41)(24,"button",42),P(25),g(26,22),h(),r(),C(27,Pn,3,0,"button",43)(28,hn,3,0,"button",44),r()()()();}if(n&2){let e=S(12),i=S(21),t=f(),o=S(77);l(2),pe("form-disabled",!t.patientInfoEditable),l(9),s("disabled",!t.patientInfoEditable),A("ngModel",t.user.cardNo),l(2),s("ngTemplateOutlet",o)("ngTemplateOutletContext",x(13,q,e)),l(7),s("disabled",!t.patientInfoEditable),A("ngModel",t.user.wxid),l(2),s("ngTemplateOutlet",o)("ngTemplateOutletContext",x(15,q,i)),l(),s("ngSwitch",t.patientInfoEditable),l(),s("disabled",!t.patientInfoEditable),l(3),s("ngSwitchCase",!1);}}function bn(n,_){n&1&&I(0,"mat-progress-spinner",65);}function On(n,_){if(n&1){let e=b();P(0),a(1,"div",33)(2,"div",34)(3,"label",35),I(4,"mat-icon",62),w(5),r(),a(6,"div",36)(7,"mat-slide-toggle",63),E("toggleChange",function(){let t=d(e).$implicit,o=f();return m(o.toggleAnotherAccount(t));}),L("ngModelChange",function(t){let o=d(e).$implicit;return y(o.state,t)||(o.state=t),m(t);}),r(),C(8,bn,1,0,"mat-progress-spinner",64),r()()(),h();}if(n&2){let e=_.$implicit;l(4),s("svgIcon",e.iconName),l(),T(e.label),l(2),s("name",e.formName),A("ngModel",e.state),l(),s("ngIf",e.requesting);}}function Rn(n,_){n&1&&(a(0,"mat-error"),P(1),g(2,25),h(),r());}function In(n,_){n&1&&(a(0,"mat-error"),P(1),g(2,26),h(),r());}function wn(n,_){n&1&&(a(0,"mat-error"),P(1),g(2,27),h(),r());}function vn(n,_){n&1&&(a(0,"mat-error"),P(1),g(2,28),h(),r());}function Nn(n,_){if(n&1&&C(0,Rn,3,0,"mat-error",66)(1,In,3,0,"mat-error",66)(2,wn,3,0,"mat-error",66)(3,vn,3,0,"mat-error",66),n&2){let e=_.ctrl;s("ngIf",e.hasError("required")),l(),s("ngIf",e.hasError("email")),l(),s("ngIf",e.hasError("passwordDiff")),l(),s("ngIf",e.hasError("minlength")||e.hasError("maxlength"));}}var qt=(()=>{class n{authService;fireAuth;notification;hospitalDb;hostClassName="d-flex flex-column flex-nowrap w-100 h-100";hostId="containerProfile";breads=[{title:"\u8D26\u53F7\u8BBE\u7F6E"}];user={};isPatient=!1;passwordGroup={origPassword:null,newPassword:null,cfmPassword:null};signInOptions;requesting=!1;userInfoEditable=!1;patientInfoEditable=!1;passwordEditable=!0;forms;subscription=new U();constructor(e,i,t,o){this.authService=e,this.fireAuth=i,this.notification=t,this.hospitalDb=o,this.signInOptions=e.getDefaultAuthMethods().pipe(v(p=>F(this.fireAuth.fetchSignInMethodsForEmail(e.user.account)).pipe(de(c=>p.map(R=>(R.state=c.includes(R.provider.providerId),R.requesting=!1,R))))));}ngOnInit(){let e=this.authService;this.subscription.add(e.getProfile().pipe(v(i=>{let t=e.getAuthConfig()?.id===O.PATIENT;return t=t&&i.roles?.some(o=>o===O.PATIENT||o===O.ADMIN),this.isPatient=t,this.user=i,D(i);})).subscribe());}ngOnDestroy(){this.subscription.unsubscribe(),this.notification.dismiss(),this.notification.hideLoading();}editInfo(e){if(e.valid){let i=this.notification,t=e.form.value;this.userInfoEditable=!1,this.requesting=!0,i.showLoading(),this.fireAuth.user.pipe(j(1),v(o=>F(o.updateProfile({displayName:t.name})).pipe(v(()=>F(this.authService.storeUser({name:t.name}))))),V(o=>(i.openError("\u4FEE\u6539\u5931\u8D25\u3002"),this.userInfoEditable=!0,_e(()=>o))),k(()=>{this.requesting=!1,i.hideLoading();})).subscribe(()=>{i.openSuccess("\u4FEE\u6539\u6210\u529F\u3002");});}}editPatientInfo(e){if(e.valid){let i=this.notification,t=e.form.value;if(t.cardNo=t.cardNo?.trim()||"",t.wxid=t.wxid?.trim()||"",!t.cardNo||!t.wxid){i.openError("\u4FE1\u606F\u6709\u8BEF\u3002");return;}this.patientInfoEditable=!1,this.requesting=!0,i.showLoading(),this.hospitalDb.getUserInfo(t.wxid).pipe(de(o=>t.wxid==o?.wxid&&t.cardNo==o?.patientId),W(o=>(o||(i.openError("\u4FE1\u606F\u4E0D\u5339\u914D\uFF0C\u8BF7\u4FEE\u6539\u540E\u91CD\u8BD5\u3002"),this.patientInfoEditable=!0),o)),v(()=>F(this.authService.storeUser({cardNo:t.cardNo,wxid:t.wxid})).pipe(V(o=>(i.openError("\u4FEE\u6539\u5931\u8D25\u3002"),_e(()=>o))))),k(()=>{this.requesting=!1,i.hideLoading();})).subscribe(()=>{i.openSuccess("\u4FEE\u6539\u6210\u529F\u3002");});}}revertInfo(e){e.form.markAsPending(),e.form.markAsUntouched(),e.resetForm(),this.authService.storeUser({_update_time:Date.now()});}modifyPassword(e){if(e.valid){let i=this.notification,t=e.form.value;this.passwordEditable=!1,this.requesting=!0,i.showLoading(),F(this.fireAuth.signInWithEmailAndPassword(this.user.account,t.origPassword)).pipe(V(o=>{switch(o.code){case oe.INVALID_PASSWORD:i.openError("\u5BC6\u7801\u9519\u8BEF!");break;default:i.openError(i.stripMessage(o.message));}return this.passwordEditable=!0,D(!1);}),W(o=>o!==!1),v(()=>this.fireAuth.user.pipe(j(1))),v(o=>F(o.updatePassword(t.newPassword))),k(()=>{this.requesting=!1,i.hideLoading();})).subscribe(()=>{i.openSuccess("\u5BC6\u7801\u4FEE\u6539\u6210\u529F\u3002"),e.resetForm();});}}revertPasswordForm(e){e.form.markAsPending(),e.form.markAsUntouched(),e.resetForm();}toggleAnotherAccount(e){let i=this.notification,t=e.state;D(null).pipe($e(()=>{e.requesting=!0,this.forms.last.control.disable(),i.openInfo("\u6B63\u5728\u8FDE\u63A5...",{duration:3e3});}),v(()=>this.fireAuth.user.pipe(j(1))),v(o=>F(t?Dt(o,e.provider.providerId):$t(o,e.provider))),V(o=>{switch(o.code){case oe.POPUP_CLOSED_BY_USER:i.openError("\u8D26\u53F7\u8FDE\u63A5\u5F02\u5E38\u4E2D\u65AD\u3002");break;case oe.CREDENTIAL_ALREADY_IN_USE:i.openError("\u8BE5\u7B2C\u4E09\u65B9\u8D26\u53F7\u5DF2\u7ECF\u4E0E\u5176\u5B83\u8D26\u53F7\u5173\u8054\u3002");break;default:i.openError(i.stripMessage(o.message));}return e.state=t,D(!1);}),W(o=>o!==!1),k(()=>{e.requesting=!1,this.forms.last.control.enable();})).subscribe(()=>{i.openSuccess(t?"\u5DF2\u89E3\u9664\u5173\u8054\u3002":"\u5DF2\u5173\u8054\u6210\u529F\u3002");});}static ɵfac=function(i){return new(i||n)(M(re),M(Qe),M(ie),M(le));};static ɵcmp=N({type:n,selectors:[["app-user-profile"]],viewQuery:function(i,t){if(i&1&&G(ne,5),i&2){let o;X(o=z())&&(t.forms=o);}},hostVars:2,hostBindings:function(i,t){i&2&&Y("class",t.hostClassName)("id",t.hostId);},features:[Ve([Vt,le])],decls:78,vars:34,consts:()=>{let e;e="Account information";let i;i="Modify password";let t;t="Third bridge accounts";let o;o="Name";let p;p="Email";let c;c="Unique ID";let R;R="Roles";let Ce;Ce="Confirm";let Me;Me="New passowrd";let Ee;Ee="Confirmation password";let Pe;Pe="Old password";let he;he="Modify";let Se;Se="Modify";let be;be="Cancel";let Oe;Oe="Patient information";let Re;Re="Patient ID";let Ie;Ie="WeChat ID";let we;we="Confirm";let ve;ve="Modify";let Ne;Ne="Cancel";let Te;Te="Required.";let Ae;Ae="Incorrect email format.";let ye;ye="Different passwords.";let Le;return Le="It's a weak password, the password must contain at least 8 characters and no more than 16 characters, and include at least one upper or lower case letter, at least one number, at least one symbol or special character (_-+!.@#$%^&*) and no spaces.",[["userForm","ngForm"],["passwordForm","ngForm"],["newPasswordCtrl","ngModel"],["cfmPasswordCtrl","ngModel"],["origPasswordCtrl","ngModel"],["templateInputMsg",""],["patientForm","ngForm"],["cardNoCtrl","ngModel"],["wxidCtrl","ngModel"],o,p,c,R,Ce,Me,Ee,Pe,he,Se,be,Re,Ie,we,ve,Ne,Te,Ae,ye,Le,[3,"items"],["color","primary","dynamicHeight","",1,"mx-2","mt-2","mb-4"],["label",e],[1,"d-block","w-100",3,"ngSubmit"],["appFieldRow",""],["appFieldGroup",""],["appFieldLabel",""],["appFieldControl",""],["appearance","outline"],["name","name","type","text","autocomplete","off","matInput","","required","",3,"ngModelChange","disabled","ngModel"],["name","account","type","email","autocomplete","off","matInput","","email","true","readonly","",3,"ngModelChange","ngModel"],[1,"mat-mdc-form-field"],[1,"d-flex","flex-wrap","align-items-center","justify-content-center","p-2","container-btns",3,"ngSwitch"],["type","submit","mat-flat-button","","color","primary",3,"disabled"],["type","button","class","ms-2","mat-flat-button","","color","accent",3,"click",4,"ngSwitchCase"],["type","button","class","ms-2","mat-flat-button","","color","accent",3,"click",4,"ngSwitchDefault"],["label",i],["name","newPassword","type","password","autocomplete","off","required","","matInput","",3,"ngModelChange","disabled","ngModel"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["name","cfmPassword","type","password","autocomplete","off","required","","matInput","",3,"ngModelChange","disabled","ngModel"],["name","origPassword","type","password","autocomplete","off","required","","matInput","",3,"ngModelChange","disabled","ngModel"],[1,"d-flex","flex-wrap","align-items-center","justify-content-center","p-2","container-btns"],["color","primary","class","px-2 pt-2 mb-4",4,"ngIf"],["color","primary",1,"px-2","pb-2"],["label",t],[1,"d-block","w-100"],[4,"ngFor","ngForOf"],["type","button","mat-flat-button","","color","accent",1,"ms-2",3,"click"],["color","primary",1,"px-2","pt-2","mb-4"],["label",Oe],[1,"w-100",3,"ngSubmit"],["name","cardNo","type","text","autocomplete","off","matInput","","required","",3,"ngModelChange","disabled","ngModel"],["name","wxid","type","text","autocomplete","off","matInput","","required","",3,"ngModelChange","disabled","ngModel"],[1,"me-2",3,"svgIcon"],["color","primary",3,"toggleChange","ngModelChange","name","ngModel"],["diameter","24","mode","indeterminate","class","d-inline-block align-middle ms-3",4,"ngIf"],["diameter","24","mode","indeterminate",1,"d-inline-block","align-middle","ms-3"],[4,"ngIf"]];},template:function(i,t){if(i&1){let o=b();I(0,"app-breadcrumb",29),a(1,"mat-tab-group",30)(2,"mat-tab",31)(3,"form",32,0),E("ngSubmit",function(){d(o);let c=S(4);return m(t.editInfo(c));}),a(5,"div",33)(6,"div",34)(7,"label",35),g(8,9),r(),a(9,"div",36)(10,"mat-form-field",37)(11,"input",38),L("ngModelChange",function(c){return d(o),y(t.user.name,c)||(t.user.name=c),m(c);}),r()()()(),a(12,"div",34)(13,"label",35),g(14,10),r(),a(15,"div",36)(16,"mat-form-field",37)(17,"input",39),L("ngModelChange",function(c){return d(o),y(t.user.account,c)||(t.user.account=c),m(c);}),r()()()()(),a(18,"div",33)(19,"div",34)(20,"label",35),g(21,11),r(),a(22,"div",36)(23,"div",40),w(24),r()()(),a(25,"div",34)(26,"label",35),g(27,12),r(),a(28,"div",36)(29,"div",40),w(30),r()()()(),a(31,"div",41)(32,"button",42),P(33),g(34,13),h(),r(),C(35,pn,3,0,"button",43)(36,un,3,0,"button",44),r()()(),a(37,"mat-tab",45)(38,"form",32,1),E("ngSubmit",function(){d(o);let c=S(39);return m(t.modifyPassword(c));}),a(40,"div",33)(41,"div",34)(42,"label",35),g(43,14),r(),a(44,"div",36)(45,"mat-form-field",37)(46,"input",46,2),L("ngModelChange",function(c){return d(o),y(t.passwordGroup.newPassword,c)||(t.passwordGroup.newPassword=c),m(c);}),r()(),C(48,fn,0,0,"ng-template",47),r()(),a(49,"div",34)(50,"label",35),g(51,15),r(),a(52,"div",36)(53,"mat-form-field",37)(54,"input",48,3),L("ngModelChange",function(c){return d(o),y(t.passwordGroup.cfmPassword,c)||(t.passwordGroup.cfmPassword=c),m(c);}),r()(),C(56,gn,0,0,"ng-template",47),r()()(),a(57,"div",33)(58,"div",34)(59,"label",35),g(60,16),r(),a(61,"div",36)(62,"mat-form-field",37)(63,"input",49,4),L("ngModelChange",function(c){return d(o),y(t.passwordGroup.origPassword,c)||(t.passwordGroup.origPassword=c),m(c);}),r()(),C(65,Cn,0,0,"ng-template",47),r()()(),a(66,"div",50)(67,"button",42),P(68),g(69,17),h(),r()()()()(),C(70,Sn,29,17,"mat-tab-group",51),a(71,"mat-tab-group",52)(72,"mat-tab",53)(73,"form",54),C(74,On,9,5,"ng-container",55),Xe(75,"async"),r()()(),C(76,Nn,4,4,"ng-template",null,5,qe);}if(i&2){let o=S(47),p=S(55),c=S(64),R=S(77);s("items",t.breads),l(3),pe("form-disabled",!t.userInfoEditable),l(8),s("disabled",!t.userInfoEditable),A("ngModel",t.user.name),l(6),A("ngModel",t.user.account),l(7),T(t.user.uid),l(6),T(t.user.roles),l(),s("ngSwitch",t.userInfoEditable),l(),s("disabled",!t.userInfoEditable),l(3),s("ngSwitchCase",!1),l(11),s("disabled",!t.passwordEditable),A("ngModel",t.passwordGroup.newPassword),l(2),s("ngTemplateOutlet",R)("ngTemplateOutletContext",x(28,q,o)),l(6),s("disabled",!t.passwordEditable),A("ngModel",t.passwordGroup.cfmPassword),l(2),s("ngTemplateOutlet",R)("ngTemplateOutletContext",x(30,q,p)),l(7),s("disabled",!t.passwordEditable),A("ngModel",t.passwordGroup.origPassword),l(2),s("ngTemplateOutlet",R)("ngTemplateOutletContext",x(32,q,c)),l(2),s("disabled",!t.passwordEditable),l(3),s("ngIf",t.isPatient),l(4),s("ngForOf",ze(75,26,t.signInOptions));}},dependencies:[Z,K,je,J,ee,te,yt,Lt,et,Ye,Ze,Ke,tt,nt,Je,ne,ut,pt,mt,ft,Ct,Ft,It,vt,Nt,wt,Tt,ht,Be],styles:[`#containerProfile{overflow-x:hidden;overflow-y:auto}#containerProfile .field-control .mat-mdc-form-field{width:20em}#containerProfile .container-btns{margin-top:-1px;border:solid 1px #D1D7E4;background-color:#f1f2f8}#containerProfile .mat-mdc-button-base{min-width:8rem}#containerProfile.form-disabled .mat-mdc-form-field-infix{border-color:transparent;background-color:transparent}
`],encapsulation:2});}return n;})();var Wt=ae(O.ACCOUNTANT,[O.ADMIN,O.ACCOUNTANT]),Tn=(n,_)=>Wt(n.routeConfig,n.url),se=ae(O.BANKER,[O.ADMIN,O.BANKER]),ge=(n,_)=>se(n.routeConfig,n.url),jt=ae(O.PATIENT,[O.ADMIN,O.PATIENT]),An=(n,_)=>jt(n.routeConfig,n.url),yn=[{path:"",component:Gt,children:[{path:"profile",component:qt},{path:"cfe",canMatch:[se],canActivateChild:[ge],loadChildren:()=>import("./chunk-ZP7W5IEI.js").then(n=>n.CFEModule)},{path:"cp",canMatch:[se],canActivateChild:[ge],loadChildren:()=>import("./chunk-BICGEYV3.js").then(n=>n.CPModule)},{path:"ge",canMatch:[se],canActivateChild:[ge],loadChildren:()=>import("./chunk-NV57CMNS.js").then(n=>n.GEModule)},{path:"wacai",canMatch:[Wt],canActivateChild:[Tn],loadChildren:()=>import("./chunk-ZRTIRD7Z.js").then(n=>n.WacaiModule)},{path:"hospital",canMatch:[jt],canActivateChild:[An],loadChildren:()=>import("./chunk-JXM5DOEO.js").then(n=>n.HospitalModule)},{path:"",component:Xt},{path:"**",component:zt}]}],Bt=(()=>{class n{static ɵfac=function(i){return new(i||n)();};static ɵmod=H({type:n});static ɵinj=B({imports:[fe.forChild(yn),fe]});}return n;})();var ki=(()=>{class n{static ɵfac=function(i){return new(i||n)();};static ɵmod=H({type:n});static ɵinj=B({imports:[Bt,He,gt,Pt,xt,dt,Ut,At]});}return n;})();export{ki as AdminModule};/**i18n:4ec78395217facedd742edef8dfa814b1ea6af3fbb33fa1f9a497a05293d0698*/