"use strict";(self.webpackChunkmy_async=self.webpackChunkmy_async||[]).push([[767],{9767:(q,f,p)=>{p.r(f),p.d(f,{routes:()=>P});var u=p(5861),t=p(4946),r=p(6814),_=p(1993),s=p(95);function g(n,a){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"label",13),t._uU(2),t.qZA(),t._UZ(3,"input",14),t.TgZ(4,"button",9),t.NdJ("click",function(){const c=t.CHM(o).index,l=t.oxw().$implicit,z=t.oxw();return t.KtG(z.removeInput(l,c))}),t._UZ(5,"i",15),t.qZA(),t.BQk()}if(2&n){const o=a.ngForOf,e=a.index;t.xp6(2),t.hij("Input : ",e+1,""),t.xp6(1),t.Q6J("formControlName",e),t.xp6(1),t.Q6J("disabled",1===o.length)}}function D(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"section",5)(1,"div",6)(2,"div",7)(3,"button",2),t.NdJ("click",function(){const c=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.addInput(c))}),t._UZ(4,"i",8),t._uU(5," Add Input"),t.qZA(),t.TgZ(6,"label"),t._uU(7),t.qZA(),t.TgZ(8,"button",9),t.NdJ("click",function(){const c=t.CHM(o).index,l=t.oxw();return t.KtG(l.removeSection(c))}),t._UZ(9,"i",10),t.qZA()(),t.TgZ(10,"div",11),t.YNc(11,g,6,3,"ng-container",12),t.qZA(),t.TgZ(12,"output",11)(13,"label"),t._uU(14,"Result :"),t.qZA(),t.TgZ(15,"span"),t._uU(16),t.qZA()()()()}if(2&n){const o=a.$implicit,e=a.ngForOf,i=a.index,c=t.oxw();t.Q6J("formArrayName",i),t.xp6(7),t.hij("Section ",i+1,""),t.xp6(1),t.Q6J("disabled",1===e.length),t.xp6(3),t.Q6J("ngForOf",o.controls),t.xp6(5),t.Oqu(c.getResult(o).toLocaleString())}}let x=(()=>{var n;class a{constructor(){this.fb=(0,t.f3M)(s.qu).nonNullable,this.destroyRef=(0,t.f3M)(t.ktI),this.dataChange=new t.vpe}ngOnInit(){this.formGroup=this.fb.group({data:this.fb.array((this.data??[[0]]).map(e=>this.fb.array(e.map(i=>this.fb.control(i)))))}),this.formGroup.valueChanges.pipe((0,_.sL)(this.destroyRef)).subscribe(()=>{this.dataChange.emit(this.formGroup.getRawValue().data)})}addSection(){this.formGroup.controls.data.push(this.fb.array([this.fb.control(0)]))}removeSection(e){this.formGroup.controls.data.removeAt(e)}addInput(e){e.push(this.fb.control(0))}removeInput(e,i){e.removeAt(i)}getResult(e){return e.controls.reduce((i,c)=>i+(+c.value||0),0)}}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-section-form"]],inputs:{data:"data"},outputs:{dataChange:"dataChange"},standalone:!0,features:[t.jDz],decls:6,vars:2,consts:[[1,"box-size",3,"formGroup"],["formArrayName","data"],["type","button",1,"btn",3,"click"],[1,"bx","bx-folder-plus"],[3,"formArrayName",4,"ngFor","ngForOf"],[3,"formArrayName"],[1,"section"],[1,"section-title"],[1,"bx","bx-list-plus"],["type","button",1,"btn",3,"disabled","click"],[1,"bx","bx-folder-minus"],[1,"input"],[4,"ngFor","ngForOf"],["for","input",1,"input-label"],["type","number","id","input",3,"formControlName"],[1,"bx","bx-x"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.ynx(1,1),t.TgZ(2,"button",2),t.NdJ("click",function(){return i.addSection()}),t._UZ(3,"i",3),t._uU(4," Add Section"),t.qZA(),t.YNc(5,D,17,5,"section",4),t.BQk(),t.qZA()),2&e&&(t.Q6J("formGroup",i.formGroup),t.xp6(5),t.Q6J("ngForOf",i.formGroup.controls.data.controls))},dependencies:[r.ez,r.sg,s.UX,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u,s.CE]}),a})();const y="section-data";let d=(()=>{var n;class a{getData(){return(0,u.Z)(function*(){return JSON.parse(localStorage.getItem(y)??"null")})()}setData(e){return(0,u.Z)(function*(){localStorage.setItem(y,JSON.stringify(e))})()}}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),a})();function C(n,a){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"app-dynamic-section-form",1),t.NdJ("dataChange",function(i){t.CHM(o);const c=t.oxw();return t.KtG(c.onDataChange(i))}),t.qZA(),t.BQk()}if(2&n){const o=a.ngIf;t.xp6(1),t.Q6J("data","undefined"===o?void 0:o)}}let v=(()=>{var n;class a{constructor(){this.dataService=(0,t.f3M)(d),this.data$=this.dataService.getData().then(e=>e??"undefined")}onDataChange(e){var i=this;return(0,u.Z)(function*(){yield i.dataService.setData(e)})()}}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-section-form-page"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data","dataChange"]],template:function(e,i){1&e&&(t.YNc(0,C,2,1,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.data$))},dependencies:[r.ez,r.O5,r.Ov,x]}),a})();var m=p(6538);let h=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-section-page"]],standalone:!0,features:[t.jDz],decls:9,vars:0,consts:[[1,"nav"],[1,"nav-lists"],["routerLinkActive","active",1,"nav-list"],["routerLink","view","routerLinkActive","active",1,"btn"],["routerLink","form","routerLinkActive","active",1,"btn"]],template:function(e,i){1&e&&(t.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),t._uU(4,"View"),t.qZA()(),t.TgZ(5,"li",2)(6,"a",4),t._uU(7,"Form"),t.qZA()()()(),t._UZ(8,"router-outlet"))},dependencies:[r.ez,m.lC,m.rH,m.Od]}),a})();const S=function(n){return[n]};function Z(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",4)(2,"dt",5)(3,"a",6),t._uU(4),t.qZA()(),t.TgZ(5,"dd"),t._uU(6),t.qZA()(),t.BQk()),2&n){const o=a.$implicit,e=a.index,i=t.oxw(2);t.xp6(3),t.Q6J("routerLink",t.VKq(3,S,e)),t.xp6(1),t.hij("Section ",e+1," :"),t.xp6(2),t.Oqu(i.getResult(o).toLocaleString())}}function I(n,a){if(1&n&&(t.TgZ(0,"dl",2),t.YNc(1,Z,7,5,"ng-container",3),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.data)}}function T(n,a){1&n&&(t.TgZ(0,"div",7),t._uU(1,"No data fetching here!!!"),t.qZA())}let F=(()=>{var n;class a{getResult(e){return e.reduceRight((i,c)=>i+c,0)}}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-section-display"]],inputs:{data:"data"},standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","box-size",4,"ngIf","ngIfElse"],["noData",""],[1,"box-size"],[4,"ngFor","ngForOf"],[1,"section-view-list"],[1,"section-view-list-title"],[3,"routerLink"],[1,"empty"]],template:function(e,i){if(1&e&&(t.YNc(0,I,2,1,"dl",0),t.YNc(1,T,2,0,"ng-template",null,1,t.W1O)),2&e){const c=t.MAs(2);t.Q6J("ngIf",i.data)("ngIfElse",c)}},dependencies:[r.ez,r.sg,r.O5,m.rH]}),a})();function b(n,a){1&n&&t._UZ(0,"router-outlet")}function A(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"app-dynamic-section-display",1),t.YNc(2,b,1,0,"router-outlet",0),t.BQk()),2&n){const o=a.ngIf;t.xp6(1),t.Q6J("data","undefined"===o?void 0:o),t.xp6(1),t.Q6J("ngIf","undefined"!==o)}}let J=(()=>{var n;class a{constructor(){this.dataService=(0,t.f3M)(d),this.data$=this.dataService.getData().then(e=>e??"undefined")}}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-section-display-page"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data"]],template:function(e,i){1&e&&(t.YNc(0,A,3,2,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.data$))},dependencies:[r.ez,r.O5,r.Ov,F,m.lC]}),a})();function N(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",4)(2,"dt",5),t._uU(3),t.qZA(),t.TgZ(4,"dd"),t._uU(5),t.qZA()(),t.BQk()),2&n){const o=a.$implicit,e=a.index;t.xp6(3),t.hij("Input ",e+1," :"),t.xp6(2),t.Oqu(o.toLocaleString())}}function O(n,a){if(1&n&&(t.TgZ(0,"dl",2),t.YNc(1,N,6,2,"ng-container",3),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.data)}}function Q(n,a){1&n&&(t.TgZ(0,"div",6),t._uU(1,"No data fetching here!!!"),t.qZA())}let w=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-input-display"]],inputs:{data:"data"},standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","box-size",4,"ngIf","ngIfElse"],["noData",""],[1,"box-size"],[4,"ngFor","ngForOf"],[1,"section-view-list"],[1,"section-list-title"],[1,"empty"]],template:function(e,i){if(1&e&&(t.YNc(0,O,2,1,"dl",0),t.YNc(1,Q,2,0,"ng-template",null,1,t.W1O)),2&e){const c=t.MAs(2);t.Q6J("ngIf",i.data)("ngIfElse",c)}},dependencies:[r.ez,r.sg,r.O5]}),a})();var U=p(4664);function k(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"app-dynamic-input-display",1),t.BQk()),2&n){const o=a.ngIf;t.xp6(1),t.Q6J("data",o)}}const P=[{path:"",component:h,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"form",component:v},{path:"view",component:J},{path:"view",children:[{path:":index",component:(()=>{var n;class a{constructor(){var e=this;this.dataService=(0,t.f3M)(d),this.route=(0,t.f3M)(m.gz),this.data$=this.route.params.pipe((0,U.w)(function(){var i=(0,u.Z)(function*(c){return((yield e.dataService.getData())??[])[c.index]});return function(c){return i.apply(this,arguments)}}()))}}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-input-display-page"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"data"]],template:function(e,i){1&e&&(t.YNc(0,k,2,1,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.data$))},dependencies:[r.ez,r.O5,r.Ov,w]}),a})()}]}]}]}}]);