"use strict";(self.webpackChunkbank=self.webpackChunkbank||[]).push([[667],{9667:(Xe,E,l)=>{l.r(E),l.d(E,{LoginModule:()=>ke});var a=l(1180),_=l(4755),m=l(9401),J=l(3144),P=l(430),C=l(1728),u=l(9114),y=l(8097),e=l(2223),O=l(1217),x=l(1692);const Y=new e.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS"),F=(0,O.pj)(class{constructor(r){this._elementRef=r}},"primary");let Z=(()=>{class r extends F{constructor(n,t,i,c,d){super(n),this._ngZone=t,this._changeDetectorRef=i,this._animationMode=c,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new e.vpe,this._mode="determinate",this._transitionendHandler=s=>{0===this.animationEnd.observers.length||!s.target||!s.target.classList.contains("mdc-linear-progress__primary-bar")||("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))},this._isNoopAnimation="NoopAnimations"===c,d&&(d.color&&(this.color=this.defaultColor=d.color),this.mode=d.mode||this.mode)}get value(){return this._value}set value(n){this._value=U((0,x.su)(n)),this._changeDetectorRef.markForCheck()}get bufferValue(){return this._bufferValue||0}set bufferValue(n){this._bufferValue=U((0,x.su)(n)),this._changeDetectorRef.markForCheck()}get mode(){return this._mode}set mode(n){this._mode=n,this._changeDetectorRef.markForCheck()}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("transitionend",this._transitionendHandler)})}ngOnDestroy(){this._elementRef.nativeElement.removeEventListener("transitionend",this._transitionendHandler)}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${"buffer"===this.mode?this.bufferValue:100}%`}_isIndeterminate(){return"indeterminate"===this.mode||"query"===this.mode}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(e.QbO,8),e.Y36(Y,8))},r.\u0275cmp=e.Xpm({type:r,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:8,hostBindings:function(n,t){2&n&&(e.uIk("aria-valuenow",t._isIndeterminate()?null:t.value)("mode",t.mode),e.ekj("_mat-animation-noopable",t._isNoopAnimation)("mdc-linear-progress--animation-ready",!t._isNoopAnimation)("mdc-linear-progress--indeterminate",t._isIndeterminate()))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[e.qOj],decls:7,vars:4,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"div",1)(2,"div",2),e.qZA(),e.TgZ(3,"div",3),e._UZ(4,"span",4),e.qZA(),e.TgZ(5,"div",5),e._UZ(6,"span",4),e.qZA()),2&n&&(e.xp6(1),e.Udp("flex-basis",t._getBufferBarFlexBasis()),e.xp6(2),e.Udp("transform",t._getPrimaryBarTransform()))},styles:["@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half))}100%{transform:translateX(var(--mdc-linear-progress-primary-full))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(var(--mdc-linear-progress-primary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-primary-full-neg))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(var(--mdc-linear-progress-secondary-half-neg))}100%{transform:translateX(var(--mdc-linear-progress-secondary-full-neg))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E\");animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}.mdc-linear-progress__bar-inner{border-color:var(--mdc-linear-progress-active-indicator-color)}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-color:rgba(0,0,0,0);background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill=''/%3E%3C/svg%3E\")}}.mdc-linear-progress{height:max(var(--mdc-linear-progress-track-height), var(--mdc-linear-progress-active-indicator-height))}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress{height:4px}}.mdc-linear-progress__bar{height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__bar-inner{border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{height:var(--mdc-linear-progress-track-height)}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mdc-linear-progress__buffer-dots{background-size:10px var(--mdc-linear-progress-track-height)}}.mdc-linear-progress__buffer{border-radius:var(--mdc-linear-progress-track-shape)}.mat-mdc-progress-bar{--mdc-linear-progress-active-indicator-height:4px;--mdc-linear-progress-track-height:4px;--mdc-linear-progress-track-shape:0}.mat-mdc-progress-bar{display:block;--mdc-linear-progress-primary-half: 83.67142%;--mdc-linear-progress-primary-full: 200.611057%;--mdc-linear-progress-secondary-quarter: 37.651913%;--mdc-linear-progress-secondary-half: 84.386165%;--mdc-linear-progress-secondary-full: 160.277782%;--mdc-linear-progress-primary-half-neg: -83.67142%;--mdc-linear-progress-primary-full-neg: -200.611057%;--mdc-linear-progress-secondary-quarter-neg: -37.651913%;--mdc-linear-progress-secondary-half-neg: -84.386165%;--mdc-linear-progress-secondary-full-neg: -160.277782%}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}"],encapsulation:2,changeDetection:0}),r})();function U(r,o=0,n=100){return Math.max(o,Math.min(n,r))}let V=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[O.BQ]}),r})();var M=l(3649),H=l(9982),h=l(3116),K=l(5173),j=l(9848),W=l(3394);let ee=(()=>{class r{constructor(n){(0,a.Z)(this,"route",void 0),(0,a.Z)(this,"id","sign"),(0,a.Z)(this,"className","d-flex flex-column flex-nowrap align-items-center w-100 h-100"),this.route=n}}return(0,a.Z)(r,"\u0275fac",function(n){return new(n||r)(e.Y36(h.gz))}),(0,a.Z)(r,"\u0275cmp",e.Xpm({type:r,selectors:[["app-sign"]],hostVars:2,hostBindings:function(n,t){2&n&&e.uIk("id",t.id)("class",t.className)},decls:4,vars:1,consts:[["role","main",1,"d-flex","flex-row","flex-nowrap","flex-fill","align-items-center","justify-content-center"]],template:function(n,t){1&n&&(e._UZ(0,"app-management-header"),e.TgZ(1,"main",0),e._UZ(2,"router-outlet"),e.qZA(),e._UZ(3,"app-management-footer")),2&n&&(e.xp6(1),e.Q6J("@routeAnimations",t.route.firstChild.snapshot.url.toString()))},dependencies:[h.lC,j.Z,W.V],styles:["#sign{flex:0 0 100%;overflow:auto;background-color:#5c7986;background-image:radial-gradient(ellipse at center,#8cb7cb 0%,#678796 50%,#5c7986 80%)}#sign.ng-animating{overflow-x:hidden;overflow-y:auto}#sign .mat-mdc-form-field .mdc-text-field--outlined{border-radius:5px;background-color:#f4f4f4;box-shadow:0 0 11px 1px #fff inset}#sign .mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label--float-above{width:auto;max-width:unset;left:0;padding-top:7px;padding-left:7px;padding-right:7px;border-top-left-radius:5px;border-top-right-radius:5px;background-color:#f4f4f4}#sign .mat-mdc-form-field .mat-mdc-form-field-bottom-align:before{content:none}#sign .mat-mdc-form-field .mat-icon{margin-left:.25em;background-color:#0f3949;-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:1px 0 2px rgba(255,255,255,.5)}#sign .container-field{flex:0 1 0%}@media (max-width: 1399.98px){#sign .container-field{flex:0 0 100%;width:100%}#sign .container-field .mat-mdc-form-field,#sign .container-field .mat-mdc-unelevated-button.mat-primary{width:100%}}#sign .mat-mdc-unelevated-button.mat-primary{padding:1em;min-width:8rem;height:56px;line-height:1.5;border-radius:5px;border-color:#03cafb;background-image:linear-gradient(to bottom,#02b8f9 0,#039de3 100%);color:#50545d}@media (max-width: 767.98px){#sign .mat-mdc-unelevated-button.mat-primary{width:100%}}#sign .mat-mdc-unelevated-button.mat-primary:hover,#sign .mat-mdc-unelevated-button.mat-primary:focus{border-color:#03b6e2;background-image:linear-gradient(to bottom,#02b8f9 0,#038bca 100%)}#sign .mat-mdc-unelevated-button.mat-primary:not(:disabled,.disabled):active,#sign .mat-mdc-unelevated-button.mat-primary:not(:disabled,.disabled).active{border-color:#02a1c9;background-image:linear-gradient(to bottom,#02b8f9 0,#075b81 100%)}#sign .mat-fab:not([class*=mat-elevation-z]),#sign .mat-mdc-mini-fab:not([class*=mat-elevation-z]){box-shadow:none;background-color:transparent}#sign .mat-fab .mat-button-wrapper,#sign .mat-mdc-mini-fab .mat-button-wrapper{padding:0}#sign main{max-width:100vw}#sign main.ng-animating{overflow-x:hidden}#sign main>.d-flex{flex:0 0 100%;min-height:100%}#sign main a{color:#fff;text-decoration:none}#sign main a:hover{text-decoration:underline}\n"],encapsulation:2,data:{animation:[K.J]}})),r})();var N=l(4004),v=l(262),b=l(9646),w=l(8746),S=l(8996),T=l(3900),G=l(2033),I=l(1303),R=l(948),L=l(3790),$=l(155);function ne(r,o){}const k=function(r){return{ctrl:r}};function re(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e.YNc(1,ne,0,0,"ng-template",26),e.qZA()),2&r){const n=e.oxw(),t=e.MAs(34);e.xp6(1),e.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",e.VKq(2,k,n.formGroup.controls.account))}}function te(r,o){}function oe(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e.YNc(1,te,0,0,"ng-template",26),e.qZA()),2&r){const n=e.oxw(),t=e.MAs(34);e.xp6(1),e.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",e.VKq(2,k,n.formGroup.controls.password))}}function ie(r,o){1&r&&e._UZ(0,"mat-progress-bar",27)}function ae(r,o){1&r&&(e.TgZ(0,"p",29),e.ynx(1),e.SDv(2,30),e.BQk(),e.qZA())}function se(r,o){1&r&&(e.TgZ(0,"p",29),e.ynx(1),e.SDv(2,31),e.BQk(),e.qZA())}function le(r,o){if(1&r&&(e.YNc(0,ae,3,0,"p",28),e.YNc(1,se,3,0,"p",28)),2&r){const n=o.ctrl;e.Q6J("ngIf",n.hasError("required")),e.xp6(1),e.Q6J("ngIf",n.hasError("email"))}}function me(r,o){1&r&&(e.TgZ(0,"span",13),e.ynx(1),e.SDv(2,32),e.BQk(),e.qZA())}function ce(r,o){if(1&r){const n=e.EpF();e.ynx(0),e.TgZ(1,"button",33),e.NdJ("click",function(){const c=e.CHM(n).$implicit,d=e.oxw();return e.KtG(d.signInWithProvider(c))}),e._UZ(2,"mat-icon",34),e.qZA(),e.BQk()}if(2&r){const n=o.$implicit;e.xp6(1),e.Q6J("matTooltip",n.label),e.xp6(1),e.Q6J("svgIcon",n.iconName)}}const de=function(){return["/sign","reset-password"]},_e=function(){return["/sign","up"]};let ge=(()=>{class r{constructor(n,t,i,c,d){(0,a.Z)(this,"router",void 0),(0,a.Z)(this,"fireAuth",void 0),(0,a.Z)(this,"authService",void 0),(0,a.Z)(this,"notification",void 0),(0,a.Z)(this,"storage",void 0),(0,a.Z)(this,"className","d-flex flex-column flex-nowrap align-items-center justify-content-center container-fluid w-100 mh-100"),(0,a.Z)(this,"formGroup",new m.cw({account:new m.NI(null,[m.kI.required]),password:new m.NI(null,[m.kI.required])})),(0,a.Z)(this,"signInOptions",void 0),(0,a.Z)(this,"hasOthers",!1),(0,a.Z)(this,"requesting",!1),(0,a.Z)(this,"signInForm",void 0),this.router=n,this.fireAuth=t,this.authService=i,this.notification=c,this.storage=d,this.signInOptions=i.getDefaultAuthMethods().pipe((0,N.U)(s=>(this.hasOthers=s.length>0,s)))}ngOnInit(){this.signInForm.form.addControl("user",this.formGroup)}ngOnDestroy(){this.notification.dismiss()}login(){const n=this.signInForm;if(n.form.markAllAsTouched(),n&&n.valid){const t=this.notification,i=this.formGroup.value;this.requesting=!0,n.control.disable(),this.authService.signIn(i.account,i.password).pipe((0,v.K)(c=>(t.openError(c.code===G.k.INVALID_PASSWORD?"\u5bc6\u7801\u9519\u8bef!":t.stripMessage(c.message)),this.requesting=!1,n.control.enable(),(0,b.of)(!1))),(0,w.x)(()=>{this.requesting=!1,n.control.enable()})).subscribe(c=>{c?(this.router.navigateByUrl(this.authService.redirectUrl||""),t.dismiss()):t.openError("\u767b\u5f55\u5931\u8d25\u3002")})}}signInWithProvider(n){this.signInWithRedirect(n.provider).subscribe()}signInWithRedirect(n){const t=this.notification;return t.showInitLoading(),this.storage.set(I.cN,!0),(0,S.D)(this.fireAuth.signInWithPopup(n)).pipe((0,v.K)(i=>(i.code===G.k.POPUP_CLOSED_BY_USER||t.openError(t.stripMessage(i.message)),(0,b.of)(void 0))),(0,T.w)(i=>i?.user?this.authService.storeUser({uid:i.user.uid,name:i.user.displayName,account:i.user.email}).pipe((0,N.U)(()=>(this.router.navigateByUrl(this.authService.redirectUrl||""),i))):(0,b.of)(i)),(0,w.x)(()=>{t.hideLoading()}))}}return(0,a.Z)(r,"\u0275fac",function(n){return new(n||r)(e.Y36(h.F0),e.Y36(R.zQ),e.Y36(L.b),e.Y36($.g),e.Y36(I.V1))}),(0,a.Z)(r,"\u0275cmp",e.Xpm({type:r,selectors:[["app-sign-in"]],viewQuery:function(n,t){if(1&n&&e.Gf(m.F,7),2&n){let i;e.iGM(i=e.CRH())&&(t.signInForm=i.first)}},hostVars:1,hostBindings:function(n,t){2&n&&e.uIk("class",t.className)},decls:41,vars:13,consts:function(){let o,n,t,i,c,d,s,p;return o="\u8D26\u53F7(\u7535\u5B50\u90AE\u7BB1)",n="\u767B\u5F55\u5BC6\u7801",t="\u5FD8\u8BB0\u5BC6\u7801?",i="\u6CE8\u518C",c="\u767B\u5F55",d="\u5FC5\u586B\u3002",s="\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E\u3002",p="\u901A\u8FC7\u7B2C\u4E09\u65B9\u767B\u5F55",[[1,"d-block","w-100",3,"ngSubmit"],[1,"d-flex","flex-wrap","align-items-start","justify-content-center","w-100","pt-4",3,"formGroup"],[1,"container-field","me-lg-5","mb-4"],["appearance","outline","subscriptSizing","dynamic"],["fontSet","Marching","matPrefix",""],o,["name","account","type","text","autocomplete","username","matInput","","formControlName","account"],[4,"ngIf"],n,["name","password","type","password","autocomplete","current-password","matInput","","formControlName","password"],[1,"mt-2"],[1,"mt-2",3,"routerLink"],t,[1,"text-white"],i,[1,"container-field","mb-4"],["type","submit","mat-flat-button","","color","primary",1,"overflow-hidden",3,"disabled"],["mode","indeterminate","class","position-absolute top-0 start-0 h-100 opacity-25",4,"ngIf"],[1,"position-relative"],c,["templateInputMsg",""],[1,"w-100","d-flex","flex-wrap","align-items-center","justify-content-center"],["class","text-white",4,"ngIf"],[1,"d-sm-block","d-md-none","mb-2","w-100"],[4,"ngFor","ngForOf"],[1,"d-sm-block","mb-4","w-100"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["mode","indeterminate",1,"position-absolute","top-0","start-0","h-100","opacity-25"],["class","my-0",4,"ngIf"],[1,"my-0"],d,s,p,["type","button","mat-mini-fab","",1,"ms-2",3,"matTooltip","click"],[3,"svgIcon"]]},template:function(n,t){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return t.login()}),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-form-field",3)(4,"mat-icon",4),e._uU(5,"person"),e.qZA(),e.TgZ(6,"mat-label"),e.SDv(7,5),e.qZA(),e._UZ(8,"input",6),e.YNc(9,re,2,4,"mat-error",7),e.qZA()(),e.TgZ(10,"div",2)(11,"mat-form-field",3)(12,"mat-icon",4),e._uU(13,"lock"),e.qZA(),e.TgZ(14,"mat-label"),e.SDv(15,8),e.qZA(),e._UZ(16,"input",9),e.YNc(17,oe,2,4,"mat-error",7),e.qZA(),e.TgZ(18,"div",10)(19,"a",11),e.ynx(20),e.SDv(21,12),e.BQk(),e.qZA(),e.TgZ(22,"span",13),e._uU(23," | "),e.qZA(),e.TgZ(24,"a",11),e.ynx(25),e.SDv(26,14),e.BQk(),e.qZA()()(),e.TgZ(27,"div",15)(28,"button",16),e.YNc(29,ie,1,0,"mat-progress-bar",17),e.TgZ(30,"span",18),e.ynx(31),e.SDv(32,19),e.BQk(),e.qZA()()()(),e.YNc(33,le,2,2,"ng-template",null,20,e.W1O),e.qZA(),e.TgZ(35,"div",21),e.YNc(36,me,3,0,"span",22),e._UZ(37,"div",23),e.YNc(38,ce,3,2,"ng-container",24),e.ALo(39,"async"),e._UZ(40,"div",25),e.qZA()),2&n&&(e.xp6(1),e.Q6J("formGroup",t.formGroup),e.xp6(8),e.Q6J("ngIf",t.formGroup.controls.account.invalid),e.xp6(8),e.Q6J("ngIf",t.formGroup.controls.password.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(11,de)),e.xp6(5),e.Q6J("routerLink",e.DdM(12,_e)),e.xp6(4),e.Q6J("disabled",t.requesting),e.xp6(1),e.Q6J("ngIf",t.requesting),e.xp6(7),e.Q6J("ngIf",t.hasOthers),e.xp6(2),e.Q6J("ngForOf",e.lcZ(39,9,t.signInOptions)))},dependencies:[_.sg,_.O5,_.tP,m._Y,m.Fj,m.JJ,m.JL,m.F,m.sg,m.u,h.rH,C.lW,C.nh,u.KE,u.hX,u.TO,u.qo,P.Hw,y.Nt,Z,M.gM,_.Ov],encapsulation:2})),r})();var pe=l(4322),fe=l(9300),ue=l(2843);function he(r,o){}const A=function(r){return{ctrl:r}};function be(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e.YNc(1,he,0,0,"ng-template",19),e.qZA()),2&r){const n=e.oxw(),t=e.MAs(17);e.xp6(1),e.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",e.VKq(2,A,n.accountCtrl))}}function Ne(r,o){}function Se(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e.YNc(1,Ne,0,0,"ng-template",19),e.qZA()),2&r){const n=e.oxw(2),t=e.MAs(17);e.xp6(1),e.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",e.VKq(2,A,n.passwordCtrl))}}function Ie(r,o){if(1&r&&(e.TgZ(0,"div",2)(1,"mat-form-field",3)(2,"mat-icon",4),e._uU(3,"lock"),e.qZA(),e.TgZ(4,"mat-label"),e.SDv(5,20),e.qZA(),e._UZ(6,"input",21),e.YNc(7,Se,2,4,"mat-error",7),e.qZA()()),2&r){const n=e.oxw();e.xp6(6),e.Q6J("formControl",n.passwordCtrl),e.xp6(1),e.Q6J("ngIf",n.passwordCtrl.invalid)}}function ve(r,o){}function Ce(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e.YNc(1,ve,0,0,"ng-template",19),e.qZA()),2&r){const n=e.oxw(2),t=e.MAs(17);e.xp6(1),e.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",e.VKq(2,A,n.passwordCfmCtrl))}}function Te(r,o){if(1&r&&(e.TgZ(0,"div",2)(1,"mat-form-field",3)(2,"mat-icon",4),e._uU(3,"lock"),e.qZA(),e.TgZ(4,"mat-label"),e.SDv(5,22),e.qZA(),e._UZ(6,"input",23),e.YNc(7,Ce,2,4,"mat-error",7),e.qZA()()),2&r){const n=e.oxw();e.xp6(6),e.Q6J("formControl",n.passwordCfmCtrl),e.xp6(1),e.Q6J("ngIf",n.passwordCfmCtrl.invalid)}}function Pe(r,o){1&r&&e._UZ(0,"mat-progress-bar",30)}function ye(r,o){1&r&&(e.ynx(0),e.SDv(1,31),e.BQk())}function xe(r,o){1&r&&(e.ynx(0),e.SDv(1,32),e.BQk())}function Me(r,o){if(1&r&&(e.TgZ(0,"button",24),e.YNc(1,Pe,1,0,"mat-progress-bar",25),e.TgZ(2,"span",26),e.ynx(3,27),e.YNc(4,ye,2,0,"ng-container",28),e.YNc(5,xe,2,0,"ng-container",29),e.BQk(),e.qZA()()),2&r){const n=e.oxw();e.Q6J("disabled",n.requesting),e.xp6(1),e.Q6J("ngIf",n.requesting),e.xp6(2),e.Q6J("ngSwitch",n.isResetPassword),e.xp6(1),e.Q6J("ngSwitchCase",!0)}}function we(r,o){1&r&&e._UZ(0,"mat-progress-bar",30)}function Ge(r,o){if(1&r&&(e.TgZ(0,"button",33),e.YNc(1,we,1,0,"mat-progress-bar",25),e.TgZ(2,"span",26),e.ynx(3),e.SDv(4,34),e.BQk(),e.qZA()()),2&r){const n=e.oxw();e.Q6J("disabled",n.requesting),e.xp6(1),e.Q6J("ngIf",n.requesting)}}function Ae(r,o){1&r&&(e.TgZ(0,"p",36),e.ynx(1),e.SDv(2,37),e.BQk(),e.qZA())}function Ee(r,o){1&r&&(e.TgZ(0,"p",36),e.ynx(1),e.SDv(2,38),e.BQk(),e.qZA())}function Oe(r,o){1&r&&(e.TgZ(0,"p",36),e.ynx(1),e.SDv(2,39),e.BQk(),e.qZA())}function Ze(r,o){1&r&&(e.TgZ(0,"p",36),e.ynx(1),e.SDv(2,40),e.BQk(),e.qZA())}function Ue(r,o){if(1&r&&(e.YNc(0,Ae,3,0,"p",35),e.YNc(1,Ee,3,0,"p",35),e.YNc(2,Oe,3,0,"p",35),e.YNc(3,Ze,3,0,"p",35)),2&r){const n=o.ctrl;e.Q6J("ngIf",n.hasError("required")),e.xp6(1),e.Q6J("ngIf",n.hasError("email")),e.xp6(1),e.Q6J("ngIf",n.hasError("passwordDiff")),e.xp6(1),e.Q6J("ngIf",n.hasError("minlength")||n.hasError("maxlength"))}}const Re=function(){return["/sign","in"]};let X=(()=>{class r{constructor(n,t,i,c,d,s,p){(0,a.Z)(this,"route",void 0),(0,a.Z)(this,"router",void 0),(0,a.Z)(this,"document",void 0),(0,a.Z)(this,"fireAuth",void 0),(0,a.Z)(this,"authService",void 0),(0,a.Z)(this,"notification",void 0),(0,a.Z)(this,"storage",void 0),(0,a.Z)(this,"className","d-flex flex-column flex-nowrap align-items-center justify-content-center container-fluid w-100 mh-100"),(0,a.Z)(this,"accountCtrl",new m.NI(null,[m.kI.required,m.kI.email])),(0,a.Z)(this,"passwordCtrl",new m.NI(null,[m.kI.required,m.kI.minLength(8),m.kI.maxLength(16)])),(0,a.Z)(this,"passwordCfmCtrl",new m.NI(null,[m.kI.required])),(0,a.Z)(this,"emailVerified",!1),(0,a.Z)(this,"isResetPassword",!1),(0,a.Z)(this,"requesting",!1),(0,a.Z)(this,"signUpForm",void 0),(0,a.Z)(this,"user",void 0),this.route=n,this.router=t,this.document=i,this.fireAuth=c,this.authService=d,this.notification=s,this.storage=p,this.isResetPassword=(0,x.Ig)(n.snapshot.routeConfig.data?.resetPassword)}ngOnInit(){this.accountCtrl.disable(),this.passwordCtrl.disable(),this.passwordCfmCtrl.disable(),this.signUpForm.form.addControl("account",this.accountCtrl),this.requesting=!0,(0,S.D)(this.fireAuth.isSignInWithEmailLink(this.router.url)).pipe((0,T.w)(n=>{const t=this.storage.get(I.Xk);if(n&&t){const i=this.notification.openInfo("\u6b63\u5728\u9a8c\u8bc1\uff0c\u8bf7\u7a0d\u7b49...");return this.storage.delete(I.Xk),this.emailVerified=!0,this.accountCtrl.setValue(t),this.passwordCfmCtrl.addValidators([m.kI.required,c=>{const d=this.passwordCtrl;return d&&d.valid&&d.value!==c.value?{passwordDiff:!0}:null}]),this.signUpForm.form.addControl("password",this.passwordCtrl),this.signUpForm.form.addControl("passwordCfm",this.passwordCfmCtrl),(0,S.D)(this.fireAuth.signInWithEmailLink(t,this.router.url)).pipe((0,v.K)(c=>{const d=this.notification;return d.openError(d.stripMessage(c.message)),this.emailVerified=!1,(0,b.of)(null)}),(0,N.U)(c=>(i.dismiss(),this.notification.openInfo("\u9a8c\u8bc1\u7ed3\u675f\u3002",{duration:5e3}),c)),(0,fe.h)(c=>!!c))}return(0,b.of)(null)})).subscribe(n=>{const t=this.user=n?.user;this.requesting=!1,!t&&this.accountCtrl.enable(),this.passwordCtrl.enable(),this.passwordCfmCtrl.enable()})}register(){const n=this.signUpForm;if(n.form.markAllAsTouched(),n&&n.valid){const t=this.fireAuth,i=this.notification,c=n.form.value,d=this.user;this.requesting=!0,n.control.disable(),this.emailVerified?(0,S.D)(d.updatePassword(c.password)).pipe((0,v.K)(s=>(s.code===G.k.POPUP_CLOSED_BY_USER||i.openError(i.stripMessage(s.message)),this.requesting=!1,n.control.enable(),(0,b.of)(!1))),(0,N.U)(s=>"boolean"!=typeof s||s),(0,T.w)(s=>s?this.authService.storeUser({uid:d.uid,name:d.displayName,account:d.email}).pipe((0,N.U)(()=>s)):(0,b.of)(s))).subscribe(s=>{s?(i.openSuccess(this.isResetPassword?"\u5bc6\u7801\u91cd\u7f6e\u6210\u529f\u3002":"\u6ce8\u518c\u6210\u529f\u3002"),this.router.navigateByUrl(this.authService.redirectUrl||"")):(i.openError(this.isResetPassword?"\u5bc6\u7801\u91cd\u7f6e\u5931\u8d25\u3002":"\u6ce8\u518c\u5931\u8d25\u3002"),this.requesting=!1,n.control.enable())}):(0,S.D)(t.fetchSignInMethodsForEmail(c.account)).pipe((0,T.w)(s=>{const p=s.length;return 0===p||1===p&&s[0]===pe.w9.EMAIL_LINK_SIGN_IN_METHOD?(0,S.D)(t.sendSignInLinkToEmail(c.account,{url:this.document.location.href,handleCodeInApp:!0})):(i.openError("\u6b64\u90ae\u7bb1\u5df2\u7ecf\u88ab\u6ce8\u518c\u3002"),(0,ue._)(()=>new Error("There already exists an account registered with this email address.")))})).pipe((0,v.K)(s=>(n.control.enable(),(0,b.of)(!1))),(0,N.U)(s=>"boolean"!=typeof s||s),(0,w.x)(()=>{this.requesting=!1})).subscribe(s=>{s?(this.storage.set(I.Xk,c.account),i.openSuccess("\u9a8c\u8bc1\u8fde\u63a5\u5df2\u7ecf\u53d1\u9001\uff0c\u8bf7\u6ce8\u610f\u67e5\u6536\u3002")):i.openError("\u9a8c\u8bc1\u8fde\u63a5\u53d1\u9001\u5931\u8d25\u3002")})}}}return(0,a.Z)(r,"\u0275fac",function(n){return new(n||r)(e.Y36(h.gz),e.Y36(h.F0),e.Y36(_.K0),e.Y36(R.zQ),e.Y36(L.b),e.Y36($.g),e.Y36(I.V1))}),(0,a.Z)(r,"\u0275cmp",e.Xpm({type:r,selectors:[["app-sign-up"]],viewQuery:function(n,t){if(1&n&&e.Gf(m.F,7),2&n){let i;e.iGM(i=e.CRH())&&(t.signUpForm=i.first)}},hostVars:1,hostBindings:function(n,t){2&n&&e.uIk("class",t.className)},decls:26,vars:9,consts:function(){let o,n,t,i,c,d,s,p,f,B,Q,q,D;return o="\u7535\u5B50\u90AE\u7BB1",n="\u53D1\u9001\u9A8C\u8BC1\u94FE\u63A5\u3002",t="\u5DF2\u6709\u8D26\u53F7\uFF1F",i="\u767B\u5F55",c="\u767B\u5F55\u5BC6\u7801",d="\u786E\u8BA4\u5BC6\u7801",s="\u786E\u8BA4",p="\u6CE8\u518C",f="\u9A8C\u8BC1",B="\u5FC5\u586B\u3002",Q="\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E\u3002",q="\u5BC6\u7801\u4E0D\u4E00\u81F4\u3002",D="\u5BC6\u7801\u4E3A8\u81F316\u4E2A\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001_-+!.@#$%^&*\u7B49\u7279\u6B8A\u5B57\u7B26\u3002",[[1,"d-block","w-100",3,"ngSubmit"],[1,"d-flex","flex-wrap","align-items-start","justify-content-center","w-100","pt-4"],[1,"container-field","me-lg-5","mb-4"],["appearance","outline"],["fontSet","Marching","matPrefix",""],o,["name","account","type","email","matInput","",3,"readonly","formControl"],[4,"ngIf"],["class","container-field me-lg-5 mb-4",4,"ngIf"],[1,"container-field","mb-4",3,"ngSwitch"],["type","submit","mat-flat-button","","color","primary","class","overflow-hidden",3,"disabled",4,"ngSwitchCase"],["type","submit","mat-flat-button","","color","primary","class","overflow-hidden","matTooltip",n,3,"disabled",4,"ngSwitchDefault"],[1,"mt-1"],["templateInputMsg",""],[1,"w-100","d-flex","flex-wrap","align-items-center","justify-content-center","pb-4"],[1,"text-white"],t,[3,"routerLink"],i,[3,"ngTemplateOutlet","ngTemplateOutletContext"],c,["name","password","type","password","matInput","",3,"formControl"],d,["name","passwordCfm","type","password","matInput","",3,"formControl"],["type","submit","mat-flat-button","","color","primary",1,"overflow-hidden",3,"disabled"],["mode","indeterminate","class","position-absolute top-0 start-0 h-100 opacity-25",4,"ngIf"],[1,"position-relative"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["mode","indeterminate",1,"position-absolute","top-0","start-0","h-100","opacity-25"],s,p,["type","submit","mat-flat-button","","color","primary","matTooltip",n,1,"overflow-hidden",3,"disabled"],f,["class","my-0",4,"ngIf"],[1,"my-0"],B,Q,q,D]},template:function(n,t){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return t.register()}),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-form-field",3)(4,"mat-icon",4),e._uU(5,"person"),e.qZA(),e.TgZ(6,"mat-label"),e.SDv(7,5),e.qZA(),e._UZ(8,"input",6),e.YNc(9,be,2,4,"mat-error",7),e.qZA()(),e.YNc(10,Ie,8,2,"div",8),e.YNc(11,Te,8,2,"div",8),e.TgZ(12,"div",9),e.YNc(13,Me,6,4,"button",10),e.YNc(14,Ge,5,2,"button",11),e._UZ(15,"div",12),e.qZA()(),e.YNc(16,Ue,4,4,"ng-template",null,13,e.W1O),e.qZA(),e.TgZ(18,"div",14)(19,"span",15),e.ynx(20),e.SDv(21,16),e.BQk(),e.qZA(),e._uU(22," \xa0 "),e.TgZ(23,"a",17),e.ynx(24),e.SDv(25,18),e.BQk(),e.qZA()()),2&n&&(e.xp6(8),e.Q6J("readonly",t.emailVerified)("formControl",t.accountCtrl),e.xp6(1),e.Q6J("ngIf",t.accountCtrl.invalid),e.xp6(1),e.Q6J("ngIf",t.emailVerified),e.xp6(1),e.Q6J("ngIf",t.emailVerified),e.xp6(1),e.Q6J("ngSwitch",t.emailVerified),e.xp6(1),e.Q6J("ngSwitchCase",!0),e.xp6(10),e.Q6J("routerLink",e.DdM(8,Re)))},dependencies:[_.O5,_.tP,_.RF,_.n9,_.ED,m._Y,m.Fj,m.JJ,m.JL,m.F,m.oH,h.rH,C.lW,u.KE,u.hX,u.TO,u.qo,P.Hw,y.Nt,Z,M.gM],encapsulation:2})),r})();const Le=[{path:"",component:ee,children:[{path:"in",component:ge},{path:"up",component:X},{path:"reset-password",component:X,data:{resetPassword:!0}}]},{path:"",redirectTo:"/in",pathMatch:"full"},{path:"**",redirectTo:"/in"}];let $e=(()=>{class r{}return(0,a.Z)(r,"\u0275fac",function(n){return new(n||r)}),(0,a.Z)(r,"\u0275mod",e.oAB({type:r})),(0,a.Z)(r,"\u0275inj",e.cJS({imports:[h.Bz.forChild(Le),h.Bz]})),r})(),ke=(()=>{class r{}return(0,a.Z)(r,"\u0275fac",function(n){return new(n||r)}),(0,a.Z)(r,"\u0275mod",e.oAB({type:r})),(0,a.Z)(r,"\u0275inj",e.cJS({imports:[_.ez,m.u5,m.UX,J.JF,$e,C.ot,u.lN,P.Ps,y.c,V,M.AV,H.m]})),r})()}}]);