"use strict";(self.webpackChunkbank=self.webpackChunkbank||[]).push([[214],{4704:(L,P,e)=>{e.d(P,{DM:()=>Z,Fc:()=>f,Fs:()=>h,I9:()=>g,In:()=>A,Tl:()=>O,Zq:()=>c,Zx:()=>T,gr:()=>M,iS:()=>C,kh:()=>I,o:()=>R,r9:()=>t});var a=e(9646);class t{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({code:"0"+o,lang:"gb"});return(0,a.of)(s)}}class f{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({id:"00001",name:"Michale",signInId:"mj",abbr:"mic"});return(0,a.of)(s)}}class T{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({code:"GT",name:"std1",archiveSystem:"00001",materialDescription:"Michale",transferType:"RIC",transferObject:"admin",transferObjectAbbr:"adm",transferNO:"89999"});return(0,a.of)(s)}}class Z{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({code:"1000775",searchName:"dsm"});return(0,a.of)(s)}}class A{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({sendSwift:"SWEDSESS",receiveSwift:"HELESFIHH",service:"FIN",rmaType:"RMA",serialNO:o});return(0,a.of)(s)}}class M{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({bilCode:"107436",level:"\u603b\u8ba1",trade:"",content:"",product:"FR",currencyCode:"001",countryEglishName:"SAINT HELENA",counterparty:"wpacs"});return(0,a.of)(s)}}class g{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({location:"124006",name:"EDMONTON"});return(0,a.of)(s)}}class O{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({id:"S-10325",location:"750021",name:"EDMONTON"});return(0,a.of)(s)}}class c{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({branchName:"\u6240\u6709",manager:"cha",branchNO:"0009"+o});return(0,a.of)(s)}}class R{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({lossCenter:"\u9ed8\u8ba4\u5229\u6da6\u635f\u5931\u4e2d\u5fc3",manager:"",centerNO:"9999"+o});return(0,a.of)(s)}}class C{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({subjectNO:"00"+o,description:"Private Banking",lang:"gb"});return(0,a.of)(s)}}class h{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({categoryCode:"10000"+o});return(0,a.of)(s)}}class I{constructor(){}getData(d){const s=[];for(let o=0;o<100;o++)s.push({groupCategory:"10"+o});return(0,a.of)(s)}}},3003:(L,P,e)=>{e.d(P,{C:()=>B});var a=e(1180),t=e(2223),m=e(3276),f=e(2611),T=e(727),Z=e(6451),A=e(9646),M=e(8675),g=e(3900),O=e(4004),c=e(262),R=e(4709),C=e(4755),h=e(3627);const I=["flexFillContainer"];function u(p,b){if(1&p&&(t.TgZ(0,"th",10),t._uU(1),t.qZA()),2&p){const i=t.oxw().index,_=t.oxw();t.xp6(1),t.Oqu(_.displayedHeads[i])}}function d(p,b){if(1&p&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&p){const i=b.$implicit,_=t.oxw().$implicit;t.xp6(1),t.Oqu(i[_])}}function s(p,b){1&p&&(t.ynx(0,7),t.YNc(1,u,2,1,"th",8),t.YNc(2,d,2,1,"td",9),t.BQk()),2&p&&t.Q6J("matColumnDef",b.$implicit)}function o(p,b){1&p&&t._UZ(0,"tr",12)}function x(p,b){if(1&p){const i=t.EpF();t.TgZ(0,"tr",13),t.NdJ("click",function(D){const E=t.CHM(i).$implicit,n=t.oxw();return t.KtG(n.onClickRow(D,E))}),t.qZA()}}let B=(()=>{class p{constructor(i,_){(0,a.Z)(this,"renderer",void 0),(0,a.Z)(this,"viewportRuler",void 0),(0,a.Z)(this,"database",void 0),(0,a.Z)(this,"displayedColumns",void 0),(0,a.Z)(this,"displayedHeads",void 0),(0,a.Z)(this,"selectedRowChange",new t.vpe),(0,a.Z)(this,"data",[]),(0,a.Z)(this,"isLoading",void 0),(0,a.Z)(this,"resultsLength",0),(0,a.Z)(this,"isRateLimitReached",!1),(0,a.Z)(this,"flexFillContainer",void 0),(0,a.Z)(this,"paginator",void 0),(0,a.Z)(this,"sort",void 0),(0,a.Z)(this,"pageSize",20),(0,a.Z)(this,"subscription",new T.w0),this.renderer=i,this.viewportRuler=_}ngOnInit(){}ngAfterViewInit(){this.subscription.add(this.viewportRuler.change(100).subscribe(i=>{this.adjustPageSize()})),this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),setTimeout(()=>{this.adjustPageSize(),(0,Z.T)(this.sort.sortChange,this.paginator.page).pipe((0,M.O)({}),(0,g.w)(()=>(this.isLoading=!0,this.database.getData())),(0,O.U)(i=>(this.isLoading=!1,this.isRateLimitReached=!1,this.resultsLength=i.length,i.slice(this.paginator.pageIndex*this.pageSize,(this.paginator.pageIndex+1)*this.pageSize))),(0,c.K)(()=>(this.isLoading=!1,this.isRateLimitReached=!0,(0,A.of)([])))).subscribe(i=>this.data=i)})}ngOnDestroy(){this.subscription.unsubscribe()}onClickRow(i,_){let D=i.target;i.stopPropagation(),"td"===D.tagName.toLocaleLowerCase()&&(D=D.parentElement),D&&(D.parentElement.querySelectorAll(".table-active").forEach(E=>{this.renderer.removeClass(E,"table-active")}),this.renderer.addClass(D,"table-active")),this.selectedRowChange.emit(_)}adjustPageSize(){const i=Math.floor((this.flexFillContainer.nativeElement.offsetHeight-34)/34);this.pageSize=Math.max(10,i),this.paginator._changePageSize(this.pageSize)}}return(0,a.Z)(p,"\u0275fac",function(i){return new(i||p)(t.Y36(t.Qsj),t.Y36(R.rL))}),(0,a.Z)(p,"\u0275cmp",t.Xpm({type:p,selectors:[["app-database-table"]],viewQuery:function(i,_){if(1&i&&(t.Gf(I,5),t.Gf(m.NW,5),t.Gf(f.YE,5)),2&i){let D;t.iGM(D=t.CRH())&&(_.flexFillContainer=D.first),t.iGM(D=t.CRH())&&(_.paginator=D.first),t.iGM(D=t.CRH())&&(_.sort=D.first)}},hostAttrs:[1,"d-flex","flex-column","flex-nowrap","w-100","h-100"],inputs:{database:"database",displayedColumns:"displayedColumns",displayedHeads:"displayedHeads"},outputs:{selectedRowChange:"selectedRowChange"},decls:7,vars:6,consts:[[1,"flex-fill","overflow-auto"],["flexFillContainer",""],["mat-table","","matSort","",1,"table","table-sm","table-bordered","table-striped","table-hover","table-narrow","w-100",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"click"]],template:function(i,_){1&i&&(t.TgZ(0,"div",0,1)(2,"table",2),t.YNc(3,s,3,1,"ng-container",3),t.YNc(4,o,1,0,"tr",4),t.YNc(5,x,1,0,"tr",5),t.qZA()(),t._UZ(6,"mat-paginator",6)),2&i&&(t.xp6(2),t.Q6J("dataSource",_.data),t.xp6(1),t.Q6J("ngForOf",_.displayedColumns),t.xp6(1),t.Q6J("matHeaderRowDef",_.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",_.displayedColumns),t.xp6(1),t.Q6J("length",_.resultsLength))},dependencies:[C.sg,m.NW,f.YE,h.BZ,h.fO,h.as,h.w1,h.Dz,h.nj,h.ge,h.ev,h.XQ,h.Gk],styles:[".table[_ngcontent-%COMP%]{font-size:.75rem}"]})),p})()},4664:(L,P,e)=>{e.d(P,{G:()=>M});var a=e(1180),t=e(2223),m=e(3617),f=e(9294),T=e(7501),Z=e(3864),A=e(7178);let M=(()=>{class g{constructor(){}ngOnInit(){}}return(0,a.Z)(g,"\u0275fac",function(c){return new(c||g)}),(0,a.Z)(g,"\u0275cmp",t.Xpm({type:g,selectors:[["app-monitoring-logs"]],decls:26,vars:0,consts:[["color","primary","dynamicHeight","true","mat-stretch-tabs","false","mat-align-tabs","start"],["label","\u7ef4\u62a4\u76d1\u63a7"],["appFieldRow",""],["appFieldGroup",""],["appFieldLabel",""],["appFieldControl",""],["appFieldRow","",1,"mb-4"]],template:function(c,R){1&c&&(t.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"div",2)(3,"dl",3)(4,"dt",4),t._uU(5,"\u521b\u65b0"),t.qZA(),t._UZ(6,"dd",5),t.qZA()(),t.TgZ(7,"div",2)(8,"dl",3)(9,"dt",4),t._uU(10,"\u6700\u8fd1\u66f4\u65b0"),t.qZA(),t._UZ(11,"dd",5),t.qZA()(),t.TgZ(12,"div",2)(13,"dl",3)(14,"dt",4),t._uU(15,"\u5f53\u524d\u72b6\u6001"),t.qZA(),t._UZ(16,"dd",5),t.qZA()(),t.TgZ(17,"div",6)(18,"dl",3)(19,"dt",4),t._uU(20,"\u5173\u952e\u8bcd\u66f4\u6539"),t.qZA(),t._UZ(21,"dd",5),t.qZA(),t.TgZ(22,"dl",3)(23,"dt",4),t._uU(24,"\u8bcd\u6761\u5185\u5bb9\u66f4\u6539"),t.qZA(),t._UZ(25,"dd",5),t.qZA()()()())},dependencies:[m.uX,m.SP,f.Y,T.e,Z.W,A.T]})),g})()},407:(L,P,e)=>{e.d(P,{P:()=>I});var a=e(1180),t=e(4755),m=e(9401),f=e(430),T=e(8995),Z=e(9114),A=e(8097),M=e(787),g=e(2611),O=e(3276),c=e(3627),R=e(3617),C=e(9982),h=e(2223);let I=(()=>{class u{}return(0,a.Z)(u,"\u0275fac",function(s){return new(s||u)}),(0,a.Z)(u,"\u0275mod",h.oAB({type:u})),(0,a.Z)(u,"\u0275inj",h.cJS({imports:[t.ez,m.u5,T.Bb,Z.lN,f.Ps,A.c,O.TU,M.LD,g.JX,c.p0,R.Nh,m.UX,C.m]})),u})()},5306:(L,P,e)=>{e.d(P,{J:()=>D});var a=e(1180),t=e(2223),m=e(9401),f=e(1692),T=e(7445),Z=e(9646),A=e(7331),M=e(8675),g=e(3900),O=e(4004),c=e(8746);let R=(()=>{class l{constructor(){}getOptions(){const n=[];for(let r=0;r<10;r++)n.push({value:r,label:"Option "+(r+1)});return(0,Z.of)(n)}}return(0,a.Z)(l,"\u0275fac",function(n){return new(n||l)}),(0,a.Z)(l,"\u0275prov",t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})),l})();var C=e(4755),h=e(8995),I=e(1217),u=e(1728),d=e(9114),s=e(8097),o=e(430);const x=["defaultOptionTemplate"];function B(l,E){if(1&l&&(t.TgZ(0,"span",9),t._UZ(1,"input",10),t.qZA()),2&l){const n=t.oxw();t.xp6(1),t.Q6J("value",null==n.selectedValue?null:n.selectedValue.value)}}function p(l,E){}const b=function(l){return{option:l}};function i(l,E){if(1&l&&(t.TgZ(0,"mat-option",11),t.YNc(1,p,0,0,"ng-template",12),t.qZA()),2&l){const n=E.$implicit,r=t.oxw();t.Q6J("value",n)("disabled",n.disabled),t.xp6(1),t.Q6J("ngTemplateOutlet",r.optionTemplate)("ngTemplateOutletContext",t.VKq(4,b,n))}}function _(l,E){1&l&&t._uU(0),2&l&&t.hij(" ",E.option.label,"\n")}let D=(()=>{class l{set options(n){this.optionValues=n;const r=this.getOptions(!0);setTimeout(()=>{this.selectioinChange.emit(r)}),this.searchCtrl&&setTimeout(()=>{this.searchCtrl.updateValueAndValidity({onlySelf:!0,emitEvent:!0})})}get options(){return this.optionValues}set showPrefix(n){this._showPrefix=(0,f.Ig)(n)}get showPrefix(){return this._showPrefix}constructor(n){(0,a.Z)(this,"datasService",void 0),(0,a.Z)(this,"source",void 0),(0,a.Z)(this,"disableRipple",!1),(0,a.Z)(this,"multiple",!1),(0,a.Z)(this,"inertGroups",!1),(0,a.Z)(this,"enableSort",!0),(0,a.Z)(this,"optionTemplate",void 0),(0,a.Z)(this,"class",void 0),(0,a.Z)(this,"selectioinChange",new t.vpe),(0,a.Z)(this,"panelClose",new t.vpe),(0,a.Z)(this,"searchCtrl",new m.NI(null)),(0,a.Z)(this,"selectedValue",void 0),(0,a.Z)(this,"filteredOptions",void 0),(0,a.Z)(this,"loading",!1),(0,a.Z)(this,"defaultOptionTemplate",void 0),(0,a.Z)(this,"optionValues",void 0),(0,a.Z)(this,"toggling",!1),(0,a.Z)(this,"_showPrefix",!1),this.datasService=n,this.source=()=>this.datasService.getOptions()}ngOnInit(){this.optionTemplate=this.optionTemplate||this.defaultOptionTemplate,this.filteredOptions=this.searchCtrl.valueChanges.pipe((0,A.D)(n=>(0,T.F)(null!==n&&!this.toggling&&this.source?300:0)),(0,M.O)(""),(0,g.w)(n=>null!==n&&!this.toggling&&this.source?(this.toggling=!1,setTimeout(()=>{this.loading=!0}),this.source(n).pipe((0,O.U)(r=>r.filter(v=>!v.selected&&v.label.toString().toLowerCase().indexOf(n)>=0)),(0,c.x)(()=>{this.loading=!1}))):(this.toggling=!1,(0,Z.of)(n?this.filterOptions(n):this.getOptions(!1)))))}onOptionSelected(n){const r=this.getOptions(!0);this.toggling=!0,setTimeout(()=>{this.selectioinChange.emit(r),this.searchCtrl.updateValueAndValidity({onlySelf:!0,emitEvent:!0})})}getLabel(n){return n&&n.label?n.label:""}getOptions(n){return this.options?(this.enableSort&&this.options.sort((r,v)=>{const S=r.order-v.order;return isNaN(S)?0:S}),this.options.filter(r=>!!r.selected===n)):[]}filterOptions(n){if("string"!=typeof n)return;const r=n.toLowerCase();return this.options?(this.enableSort&&this.options.sort((v,S)=>{const U=v.order-S.order;return isNaN(U)?0:U}),this.options.filter(v=>!v.selected&&v.label.toString().toLowerCase().indexOf(r)>=0)):[]}}return(0,a.Z)(l,"\u0275fac",function(n){return new(n||l)(t.Y36(R))}),(0,a.Z)(l,"\u0275cmp",t.Xpm({type:l,selectors:[["app-search-input"]],viewQuery:function(n,r){if(1&n&&t.Gf(x,7),2&n){let v;t.iGM(v=t.CRH())&&(r.defaultOptionTemplate=v.first)}},hostVars:1,hostBindings:function(n,r){2&n&&t.uIk("class","search-input d-inline-flex mw-100 "+r.class)},inputs:{options:"options",source:"source",disableRipple:"disableRipple",multiple:"multiple",inertGroups:"inertGroups",enableSort:"enableSort",showPrefix:"showPrefix",optionTemplate:"optionTemplate",class:"class"},outputs:{selectioinChange:"selectioinChange",panelClose:"panelClose"},exportAs:["appSearchInput"],decls:12,vars:7,consts:[["appearance","outline"],["matPrefix","",4,"ngIf"],["type","text","matInput","",3,"formControl","matAutocomplete"],["type","button","mat-icon-button","","color","accent","matSuffix",""],["fontSet","Marching"],["autoActiveFirstOption","",3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["defaultOptionTemplate",""],["matPrefix",""],["readonly","",1,"input-square",3,"value"],[3,"value","disabled"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,r){if(1&n&&(t.TgZ(0,"mat-form-field",0),t.YNc(1,B,2,1,"span",1),t._UZ(2,"input",2),t.TgZ(3,"button",3)(4,"mat-icon",4),t._uU(5,"search"),t.qZA()(),t.TgZ(6,"mat-autocomplete",5,6),t.NdJ("optionSelected",function(S){return r.onOptionSelected(S)}),t.YNc(8,i,2,6,"mat-option",7),t.ALo(9,"async"),t.qZA()(),t.YNc(10,_,1,1,"ng-template",null,8,t.W1O)),2&n){const v=t.MAs(7);t.xp6(1),t.Q6J("ngIf",r.showPrefix),t.xp6(1),t.Q6J("formControl",r.searchCtrl)("matAutocomplete",v),t.xp6(4),t.Q6J("displayWith",r.getLabel),t.xp6(2),t.Q6J("ngForOf",t.lcZ(9,5,r.filteredOptions))}},dependencies:[C.sg,C.O5,C.tP,m.Fj,m.JJ,m.oH,h.XC,I.ey,h.ZL,u.RK,d.KE,d.qo,d.R9,s.Nt,o.Hw,C.Ov],styles:["[_nghost-%COMP%]{display:inline-flex;max-width:100%}[_nghost-%COMP%] > .mat-mdc-form-field[_ngcontent-%COMP%]{margin-bottom:0}"]})),l})()},7445:(L,P,e)=>{e.d(P,{F:()=>m});var a=e(4986),t=e(5963);function m(f=0,T=a.z){return f<0&&(f=0),(0,t.H)(f,f,T)}},7331:(L,P,e)=>{e.d(P,{D:()=>T});var a=e(4482),t=e(5032),m=e(5403),f=e(8421);function T(Z){return(0,a.e)((A,M)=>{let g=!1,O=null,c=null;const R=()=>{if(c?.unsubscribe(),c=null,g){g=!1;const C=O;O=null,M.next(C)}};A.subscribe((0,m.x)(M,C=>{c?.unsubscribe(),g=!0,O=C,c=(0,m.x)(M,R,t.Z),(0,f.Xf)(Z(C)).subscribe(c)},()=>{R(),M.complete()},void 0,()=>{O=c=null}))})}}}]);