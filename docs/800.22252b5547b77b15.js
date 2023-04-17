"use strict";(self.webpackChunkSoftzone=self.webpackChunkSoftzone||[]).push([[800],{7800:(be,f,r)=>{r.r(f),r.d(f,{EmployeesModule:()=>Ce});var c=r(6895),a=r(433),y=r(3841),C=r(7579),T=r(4482),b=r(5403),w=r(8421),M=r(5032);function v(n){return(0,T.e)((s,t)=>{(0,w.Xf)(n).subscribe((0,b.x)(t,()=>t.complete(),M.Z)),!t.closed&&s.subscribe(t)})}var e=r(8256),P=r(1135),I=r(8505),F=r(529);let h=(()=>{class n{constructor(t){this.http=t,this.employes$=new P.X([]),this.getEmployees$=this.employes$.asObservable(),this.Employee_API="http://task.soft-zone.net/api/Employees"}getEmployees(){return this.http.get(`${this.Employee_API}/getAllEmployees`).pipe((0,I.b)(t=>{this.employes$.next(t)}))}getEmployee(t){return this.http.get(`${this.Employee_API}/getEmpByID/${t}`)}deleteEmployee(t){return this.http.get(`${this.Employee_API}/deleteEmpByID/${t}`)}addEmployee(t){return this.http.post(`${this.Employee_API}/addEmployee`,t)}editEmployee(t){return this.http.post(`${this.Employee_API}/editEmployee`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(F.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _=r(2741);function J(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",2)(1,"a",5),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.onGoTo(l))})("keyup.enter",function(){const l=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.onGoTo(l))}),e._uU(2),e.qZA()()}if(2&n){const t=s.$implicit,o=e.oxw();e.Q6J("ngClass",t===o.currentPage?"active":""),e.xp6(2),e.Oqu(t)}}const E=function(n){return{disabled:n}};let q=(()=>{class n{constructor(){this.currentPage=1,this.totalPages=1,this.goTo=new e.vpe,this.next=new e.vpe,this.previous=new e.vpe,this.pages=[this.currentPage-2,this.currentPage-1,this.currentPage,this.currentPage+1,this.currentPage+2,this.currentPage+3,this.currentPage+4].filter(t=>t>=1&&t<=this.totalPages)}ngOnInit(){}onGoTo(t){console.log(`Page changed to ${t}`),this.goTo.emit(t)}onNext(){console.log("Next page",this.currentPage),console.log(this.pages),this.next.emit(this.currentPage)}onPrevious(){console.log("Previous page"),this.previous.emit(this.currentPage)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{goTo:"goTo",next:"next",previous:"previous"},decls:9,vars:7,consts:[["aria-label","Page navigation example"],[1,"pagination","justify-content-end"],[1,"page-item",3,"ngClass"],["role","link",1,"page-link",3,"click"],["class","page-item ",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-link",3,"click","keyup.enter"]],template:function(t,o){1&t&&(e.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),e.NdJ("click",function(){return o.onPrevious()}),e._uU(4,"Previous"),e.qZA()(),e.YNc(5,J,3,2,"li",4),e.TgZ(6,"li",2)(7,"a",3),e.NdJ("click",function(){return o.onNext()}),e._uU(8,"Next"),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("ngClass",e.VKq(3,E,o.currentPage<=1)),e.xp6(3),e.Q6J("ngForOf",o.pages),e.xp6(1),e.Q6J("ngClass",e.VKq(5,E,o.currentPage===o.totalPages)))},dependencies:[c.mk,c.sg],styles:[".pagination[_ngcontent-%COMP%]{margin:0}.page-item[_ngcontent-%COMP%]{display:inline-block}.page-link[_ngcontent-%COMP%]{color:#007bff;background-color:#fff;border:1px solid #dee2e6;font-size:1.2em;padding:.5em 1em}.page-link[_ngcontent-%COMP%]:hover, .page-link[_ngcontent-%COMP%]:focus{color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}"]}),n})();const D=[[["","modal-header",""]],[["","modal-body",""]],[["","modal-footer",""]]],N=function(n){return{display:n}},S=["[modal-header]","[modal-body]","[modal-footer]"];let g=(()=>{class n{constructor(t){this.el=t,this.display="none",this.dismiss=new e.vpe}ngOnInit(){document.body.appendChild(this.el.nativeElement)}ngOnDestory(){this.el.nativeElement.remove()}onDismissClick(){this.dismiss.emit()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-model"]],inputs:{display:"display"},outputs:{dismiss:"dismiss"},ngContentSelectors:S,decls:9,vars:3,consts:[["tabindex","-1","role","dialog",1,"modal",3,"ngStyle","click"],["role","document",1,"modal-dialog",3,"click"],[1,"modal-content"],[1,"modal-header"],[1,"modal-body"],[1,"modal-footer"]],template:function(t,o){1&t&&(e.F$t(D),e.TgZ(0,"div",0),e.NdJ("click",function(){return o.onDismissClick()}),e.TgZ(1,"div",1),e.NdJ("click",function(l){return l.stopPropagation()}),e.TgZ(2,"div",2)(3,"div",3),e.Hsn(4),e.qZA(),e.TgZ(5,"div",4),e.Hsn(6,1),e.qZA(),e.TgZ(7,"div",5),e.Hsn(8,2),e.qZA()()()()),2&t&&e.Q6J("ngStyle",e.VKq(1,N,o.display))},dependencies:[c.PC]}),n})();var U=r(5698),O=r(727);class L extends O.w0{constructor(s,t){super()}schedule(s,t=0){return this}}const u={setInterval(n,s,...t){const{delegate:o}=u;return o?.setInterval?o.setInterval(n,s,...t):setInterval(n,s,...t)},clearInterval(n){const{delegate:s}=u;return(s?.clearInterval||clearInterval)(n)},delegate:void 0};var H=r(8737);const Z={now:()=>(Z.delegate||Date).now(),delegate:void 0};class m{constructor(s,t=m.now){this.schedulerActionCtor=s,this.now=t}schedule(s,t=0,o){return new this.schedulerActionCtor(this,s).schedule(o,t)}}m.now=Z.now;const G=new class $ extends m{constructor(s,t=m.now){super(s,t),this.actions=[],this._active=!1}flush(s){const{actions:t}=this;if(this._active)return void t.push(s);let o;this._active=!0;do{if(o=s.execute(s.state,s.delay))break}while(s=t.shift());if(this._active=!1,o){for(;s=t.shift();)s.unsubscribe();throw o}}}(class Q extends L{constructor(s,t){super(s,t),this.scheduler=s,this.work=t,this.pending=!1}schedule(s,t=0){var o;if(this.closed)return this;this.state=s;const i=this.id,l=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(l,i,t)),this.pending=!0,this.delay=t,this.id=null!==(o=this.id)&&void 0!==o?o:this.requestAsyncId(l,this.id,t),this}requestAsyncId(s,t,o=0){return u.setInterval(s.flush.bind(s,this),o)}recycleAsyncId(s,t,o=0){if(null!=o&&this.delay===o&&!1===this.pending)return t;null!=t&&u.clearInterval(t)}execute(s,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const o=this._execute(s,t);if(o)return o;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(s,t){let i,o=!1;try{this.work(s)}catch(l){o=!0,i=l||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:s,scheduler:t}=this,{actions:o}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,H.P)(o,this),null!=s&&(this.id=this.recycleAsyncId(t,s,null)),this.delay=null,super.unsubscribe()}}});function K(n,s){1&n&&(e.TgZ(0,"div"),e._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),e.qZA())}function j(n,s){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u0644\u062d\u0631\u0648\u0641 \u0647\u0648 ",t.control.errors.minlength.requiredLength," ")}}function B(n,s){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u062d\u0631\u0648\u0641 \u0647\u0648 ",t.control.errors.maxlength.requiredLength," ")}}function X(n,s){1&n&&(e.TgZ(0,"div"),e._uU(1," \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0630\u064a \u062a\u0645 \u0627\u062f\u062e\u0627\u0644\u0647 \u063a\u064a\u0631 \u0635\u0627\u0644\u062d "),e.qZA())}function z(n,s){1&n&&(e.TgZ(0,"div"),e._uU(1," \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0627\u0644\u0630\u064a \u062a\u0645 \u0627\u062f\u062e\u0627\u0644\u0647 \u063a\u064a\u0631 \u0635\u0627\u0644\u062d "),e.qZA())}function V(n,s){if(1&n&&(e.TgZ(0,"div",4),e.YNc(1,K,2,0,"div",5),e.YNc(2,j,2,1,"div",5),e.YNc(3,B,2,1,"div",5),e.YNc(4,X,2,0,"div",5),e.YNc(5,z,2,0,"div",5),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.control.errors.required),e.xp6(1),e.Q6J("ngIf",t.control.errors.minlength),e.xp6(1),e.Q6J("ngIf",t.control.errors.maxlength),e.xp6(1),e.Q6J("ngIf",t.control.errors.pattern),e.xp6(1),e.Q6J("ngIf",t.control.errors.email)}}let R=(()=>{class n{showErrors(){const{dirty:t,touched:o,errors:i}=this.control;return t&&o&&i}constructor(){this.placeholder=""}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-input"]],inputs:{label:"label",control:"control",placeholder:"placeholder",type:"type"},decls:5,vars:6,consts:[[1,"form-group","has-validation",3,"ngClass"],[1,"col-form-label"],[1,"form-control",3,"formControl","placeholder","type"],["class","invalid-feedback","style","display: block;",4,"ngIf"],[1,"invalid-feedback",2,"display","block"],[4,"ngIf"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.qZA(),e._UZ(3,"input",2),e.YNc(4,V,6,5,"div",3),e.qZA()),2&t&&(e.Q6J("ngClass",o.control.invalid&&o.showErrors()?"error":""),e.xp6(2),e.Oqu(o.label),e.xp6(1),e.Q6J("formControl",o.control)("placeholder",o.placeholder)("type",o.type),e.xp6(1),e.Q6J("ngIf",o.showErrors()))},dependencies:[c.mk,c.O5,a.Fj,a.JJ,a.oH],styles:["[_nghost-%COMP%]{display:block;margin-bottom:1em}"]}),n})();function W(n,s){1&n&&(e.TgZ(0,"div"),e._uU(1," \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 "),e.qZA())}function ee(n,s){if(1&n&&(e.TgZ(0,"div",11),e.YNc(1,W,2,0,"div",12),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.empForm.controls.empAddress.errors.required)}}let x=(()=>{class n{constructor(t,o,i){this.empSer=t,this.uiSer=o,this.fb=i,this.sub$=new C.x,this.editMode=!1,this.dismiss=new e.vpe,this.addNewEmp=new e.vpe,this.initForm(),this.loading$=this.uiSer.loading$}ngOnInit(){!0===this.editMode&&this.getEmpByID(this.empId)}ngDoCheck(){this.checkEditMode()}checkEditMode(){this.editMode||this.empId&&(this.editMode=!0,this.empSer.getEmployee(this.empId).pipe((0,U.q)(1)).subscribe(t=>{console.log("subscribed"),this.empForm.controls.empName.setValue(t.empName),this.empForm.controls.empEmail.setValue(t.empEmail),this.empForm.controls.empPhone.setValue(t.empPhone),this.empForm.controls.empAddress.setValue(t.empAddress)}))}initForm(){this.empForm=this.fb.group({empName:[this.emplyeeDetails?.empName||"",[a.kI.required]],empEmail:[this.emplyeeDetails?.empEmail||"",[a.kI.required,a.kI.email]],empAddress:[this.emplyeeDetails?.empAddress||"",[a.kI.required]],empPhone:[this.emplyeeDetails?.empPhone||"",[a.kI.required,a.kI.maxLength(11),a.kI.pattern("^01[0-2,5]{1}[0-9]{8}$")]]}),this.empForm.valueChanges.pipe(function Y(n,s=G){return(0,T.e)((t,o)=>{let i=null,l=null,p=null;const A=()=>{if(i){i.unsubscribe(),i=null;const d=l;l=null,o.next(d)}};function Te(){const d=p+n,k=s.now();if(k<d)return i=this.schedule(void 0,d-k),void o.add(i);A()}t.subscribe((0,b.x)(o,d=>{l=d,p=s.now(),i||(i=s.schedule(Te,n),o.add(i))},()=>{A(),o.complete()},void 0,()=>{l=i=null}))})}(500)).subscribe(t=>{console.log(t)})}get nameControl(){return this.empForm.get("empName")}get mailControl(){return this.empForm.get("empEmail")}get addressControl(){return this.empForm.get("empAddress")}get phoneControl(){return this.empForm.get("empPhone")}showErrors(){const{dirty:t,touched:o,errors:i}=this.addressControl;return t&&o&&i}onDismissClick(){this.dismiss.emit()}onSubmit(){if(this.empForm.invalid)return;const t={empName:this.empForm.controls.empName.value,empEmail:this.empForm.controls.empEmail.value,empPhone:this.empForm.controls.empPhone.value,empAddress:this.empForm.controls.empAddress.value};if(!0===this.editMode){const o={...t,empId:this.empId};this.empSer.editEmployee(o).pipe(v(this.sub$)).subscribe({next:i=>{console.log(i)},error:i=>{console.log(i)},complete:()=>{console.log("complete")}})}else this.empSer.addEmployee(t).subscribe({next:o=>{this.addNewEmp.emit(t)},error:o=>{console.log(o)},complete:()=>{console.log("complete"),this.empForm.reset(),this.dismiss.emit(),window.location.reload()}})}getEmpByID(t){this.empSer.getEmployee(t).subscribe(o=>{this.emplyeeDetails=o})}ngOnDestroy(){this.empId="",this.sub$.next(""),this.sub$.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(_.j),e.Y36(a.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-form"]],inputs:{empId:"empId",editMode:"editMode"},outputs:{dismiss:"dismiss",addNewEmp:"addNewEmp"},decls:14,vars:7,consts:[[1,"needs-validation",3,"formGroup","ngSubmit"],["type","text","label","Name","placeholder","lorem..",3,"control"],["type","email","label","Email","placeholder","lorem@ipsum.com",3,"control"],[1,"form-group"],["for","address-text",1,"col-form-label"],["formControlName","empAddress","id","address-text",1,"form-control",3,"value"],["class","invalid-feedback","style","display: block;",4,"ngIf"],["type","tel","label","Phone",3,"control"],[1,"d-flex","justify-content-end"],["type","button","data-dismiss","modal",1,"btn","btn-white",3,"click"],["type","submit",1,"btn","btn-success","m-2",3,"disabled"],[1,"invalid-feedback",2,"display","block"],[4,"ngIf"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e._UZ(1,"app-input",1)(2,"app-input",2),e.TgZ(3,"div",3)(4,"label",4),e._uU(5,"Address"),e.qZA(),e._UZ(6,"textarea",5),e.qZA(),e.YNc(7,ee,2,1,"div",6),e._UZ(8,"app-input",7),e.TgZ(9,"div",8)(10,"button",9),e.NdJ("click",function(){return o.onDismissClick()}),e._uU(11,"Cancel"),e.qZA(),e.TgZ(12,"button",10),e._uU(13,"Save"),e.qZA()()()),2&t&&(e.Q6J("formGroup",o.empForm),e.xp6(1),e.Q6J("control",o.nameControl),e.xp6(1),e.Q6J("control",o.mailControl),e.xp6(4),e.Q6J("value",null==o.emplyeeDetails?null:o.emplyeeDetails.empAddress),e.xp6(1),e.Q6J("ngIf",o.showErrors()),e.xp6(1),e.Q6J("control",o.phoneControl),e.xp6(4),e.Q6J("disabled",o.empForm.invalid))},dependencies:[c.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,R]}),n})(),te=(()=>{class n{constructor(){this.isDesc=!0,this.sortTypeChange=new e.vpe}ngOnInit(){}toggle(){this.isDesc=!this.isDesc,this.sortTypeChange.emit(this.isDesc)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sort"]],inputs:{isDesc:"isDesc"},outputs:{sortTypeChange:"sortTypeChange"},decls:1,vars:4,consts:[[1,"bi",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"i",0),e.NdJ("click",function(){return o.toggle()}),e.qZA()),2&t&&e.ekj("bi-sort-up",o.isDesc)("bi-sort-down",!o.isDesc)}}),n})();const oe=function(n){return{display:n,margin:"30px"}};let ne=(()=>{class n{constructor(t){this.el=t,this.display="none",this.toastMessage="",this.toastType="",this.toastTitle="",this.dismiss=new e.vpe}ngOnInit(){document.body.appendChild(this.el.nativeElement)}ngOnDestory(){this.el.nativeElement.remove()}onDismissClick(){this.dismiss.emit()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-toast"]],inputs:{display:"display",toastMessage:"toastMessage",toastType:"toastType",toastTitle:"toastTitle"},outputs:{dismiss:"dismiss"},decls:12,vars:5,consts:[["aria-live","polite","aria-atomic","true",2,"position","relative","min-height","200px"],[1,"toast",2,"position","fixed","top","0","right","0",3,"ngStyle"],[1,"toast-header","bg-success","text-white"],[1,"p-2","mr-2"],["type","button","data-dismiss","toast","aria-label","Close",1,"close","ml-9",3,"click"],["aria-hidden","true"],[1,"toast-body"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"strong",3),e._uU(4),e.qZA(),e.TgZ(5,"small",3),e._uU(6,"just now"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.onDismissClick()}),e.TgZ(8,"span",5),e._uU(9,"\xd7"),e.qZA()()(),e.TgZ(10,"div",6),e._uU(11),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngStyle",e.VKq(3,oe,o.display)),e.xp6(3),e.Oqu(o.toastTitle),e.xp6(7),e.hij(" ",o.toastMessage," "))},dependencies:[c.PC]}),n})();function se(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"app-model",3),e.NdJ("dismiss",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onCloseHandled())}),e.TgZ(1,"div",4)(2,"h5",5),e._uU(3,"Add Employee"),e.qZA(),e.TgZ(4,"button",6),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onCloseHandled())}),e._uU(5," X "),e.qZA()(),e.TgZ(6,"div",7)(7,"app-form",8),e.NdJ("dismiss",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onCloseHandled())}),e.qZA()(),e._UZ(8,"div",9),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("display",t.display),e.xp6(7),e.Q6J("editMode",!1)}}let ie=(()=>{class n{constructor(t,o){this.empSer=t,this.uiSer=o,this.showModel=!1,this.display="none",this.loading$=this.uiSer.loading$}ngOnInit(){}onClick(){this.showModel=!this.showModel,this.display="block"}onCloseHandled(){this.showModel=!this.showModel,this.display="none"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(_.j))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-employee-form"]],decls:4,vars:1,consts:[["role","button",1,"btn","btn-success","m-2",3,"click"],[1,"bi","bi-plus-circle-fill"],[3,"display","dismiss",4,"ngIf"],[3,"display","dismiss"],["modal-header","",1,"d-flex","justify-content-between"],[1,"modal-title","mr-90"],["type","button","data-dismiss","modal","aria-label","Close",1,"close","ml-2","justify-content-end",3,"click"],["modal-body",""],[3,"editMode","dismiss"],["modal-footer",""]],template:function(t,o){1&t&&(e.TgZ(0,"a",0),e.NdJ("click",function(){return o.onClick()}),e._UZ(1,"i",1),e._uU(2," Add New Employee\n"),e.qZA(),e.YNc(3,se,9,2,"app-model",2)),2&t&&(e.xp6(3),e.Q6J("ngIf",o.showModel))},dependencies:[c.O5,g,x]}),n})();function le(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"app-model",3),e.NdJ("dismiss",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onConfirmationCloseHandled())}),e.TgZ(1,"div",4)(2,"h5",5),e._uU(3,"Delete Employee"),e.qZA(),e.TgZ(4,"button",6),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onConfirmationCloseHandled())}),e._uU(5," X "),e.qZA()(),e.TgZ(6,"div",7)(7,"h3"),e._uU(8,"Are you sure you want to delete these Records"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"This action cannot be undone"),e.qZA()(),e.TgZ(11,"div",8)(12,"button",9),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onConfirmationCloseHandled())}),e._uU(13,"Cancel"),e.qZA(),e.TgZ(14,"button",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.deleteALLCheckedEmployees())}),e._uU(15,"Delete"),e.qZA()()()}if(2&n){const t=e.oxw();e.Q6J("display",t.displayConfirmationModel)}}let re=(()=>{class n{constructor(){this.showConfiramtionModel=!1,this.displayConfirmationModel="none"}ngOnInit(){}openConfirmationModal(t){this.showConfiramtionModel=!this.showConfiramtionModel,this.displayConfirmationModel="block",this.empIds=t}onConfirmationCloseHandled(){this.showConfiramtionModel=!1,this.displayConfirmationModel="none"}deleteALLCheckedEmployees(){this.onConfirmationCloseHandled(),console.log("employees have been deleted")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-employee-form-delete"]],decls:4,vars:1,consts:[["role","button",1,"btn","btn-danger","m-2",3,"click"],[1,"bi","bi-x-circle-fill"],[3,"display","dismiss",4,"ngIf"],[3,"display","dismiss"],["modal-header","",1,"d-flex","flex-row"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["modal-body",""],["modal-footer",""],[1,"btn","btn-light","m-2",3,"click"],[1,"btn","btn-danger","m-2",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.openConfirmationModal([])}),e._UZ(1,"i",1),e._uU(2," Delete"),e.qZA(),e.YNc(3,le,16,1,"app-model",2)),2&t&&(e.xp6(3),e.Q6J("ngIf",o.showConfiramtionModel))},dependencies:[c.O5,g]}),n})();class ae{constructor(){this.sortOrder=1,this.collator=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"})}startSort(s,t,o=""){return"desc"===t&&(this.sortOrder=-1),(i,l)=>"date"===o?this.sortData(new Date(i[s]),new Date(l[s])):this.collator.compare(i[s],l[s])*this.sortOrder}sortData(s,t){return s<t?-1*this.sortOrder:s>t?1*this.sortOrder:0*this.sortOrder}}let pe=(()=>{class n{constructor(t,o){this.renderer=t,this.targetElem=o}sortData(){const t=new ae,o=this.targetElem.nativeElement,i=o.getAttribute("data-order"),l=o.getAttribute("data-type"),p=o.getAttribute("data-name");"desc"===i?(this.appSort.sort(t.startSort(p,i,l)),o.setAttribute("data-order","asc")):(this.appSort.sort(t.startSort(p,i,l)),o.setAttribute("data-order","desc"))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Qsj),e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","appSort",""]],hostBindings:function(t,o){1&t&&e.NdJ("click",function(){return o.sortData()})},inputs:{appSort:"appSort"}}),n})();function ce(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"div",7)(3,"input",8),e.NdJ("change",function(){const l=e.CHM(t).$implicit,p=e.oxw(3);return e.KtG(p.onEmpChange(l.empId))}),e.qZA(),e._UZ(4,"label",9),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"i",18),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw(3);return e.KtG(p.openEditModal(l.empId))}),e.qZA(),e.TgZ(15,"i",19),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw(3);return e.KtG(p.openConfirmationModal(l.empId))}),e.qZA()()()}if(2&n){const t=s.$implicit,o=e.oxw(3);e.xp6(3),e.Q6J("checked",o.isEmplyessChecked),e.xp6(3),e.Oqu(t.empName),e.xp6(2),e.Oqu(t.empEmail),e.xp6(2),e.Oqu(t.empAddress),e.xp6(2),e.Oqu(t.empPhone)}}function de(n,s){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,ce,16,5,"tr",17),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.emplyeesToDisplay)}}function me(n,s){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td")(3,"div",7),e._UZ(4,"input",20)(5,"label",9),e.qZA()(),e.TgZ(6,"td",21),e._uU(7,"Not Employees Found"),e.qZA(),e.TgZ(8,"td"),e._UZ(9,"i",22)(10,"i",23),e.qZA()()())}function ue(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"table",6)(1,"thead")(2,"tr")(3,"th")(4,"div",7)(5,"input",8),e.NdJ("change",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onEmplyessCheck(i.emplyessIds))}),e.qZA(),e._UZ(6,"label",9),e.qZA()(),e.TgZ(7,"th",10)(8,"span"),e._uU(9," Name"),e.qZA(),e.TgZ(10,"app-sort",11),e.NdJ("sortTypeChange",function(){return!1}),e.qZA()(),e.TgZ(11,"th",10)(12,"span"),e._uU(13," Email"),e.qZA(),e.TgZ(14,"app-sort",12),e.NdJ("sortTypeChange",function(){return!0}),e.qZA()(),e.TgZ(15,"th",10)(16,"span"),e._uU(17," Address"),e.qZA(),e.TgZ(18,"app-sort",13),e.NdJ("sortTypeChange",function(){return!0}),e.qZA()(),e.TgZ(19,"th",10)(20,"span"),e._uU(21," Phone"),e.qZA(),e.TgZ(22,"app-sort",14),e.NdJ("sortTypeChange",function(){return!1}),e.qZA()(),e.TgZ(23,"th",10),e._uU(24,"Actions "),e.qZA()()(),e.YNc(25,de,2,1,"tbody",15),e.YNc(26,me,11,0,"ng-template",null,16,e.W1O),e.qZA()}if(2&n){const t=e.MAs(27),o=e.oxw();e.xp6(5),e.Q6J("checked",o.isEmplyessChecked),e.xp6(5),e.Q6J("appSort",o.emplyeesToDisplay),e.xp6(4),e.Q6J("appSort",o.emplyeesToDisplay),e.xp6(4),e.Q6J("appSort",o.emplyeesToDisplay),e.xp6(4),e.Q6J("appSort",o.emplyeesToDisplay),e.xp6(3),e.Q6J("ngIf",0!=o.emplyees.length)("ngIfElse",t)}}function he(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"app-model",24),e.NdJ("dismiss",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onCloseHandled())}),e.TgZ(1,"div",25)(2,"h5",26),e._uU(3,"Edit Employee"),e.qZA(),e.TgZ(4,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onCloseHandled())}),e.TgZ(5,"span",28),e._uU(6,"\xd7"),e.qZA()()(),e.TgZ(7,"div",29)(8,"app-form",30),e.NdJ("dismiss",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onCloseHandled())})("addNewEmp",function(i){e.CHM(t);const l=e.oxw();return e.KtG(l.addEmployee(i))}),e.qZA()()()}if(2&n){const t=e.oxw();e.Q6J("display",t.display),e.xp6(8),e.Q6J("empId",t.empId)("editMode",t.editMode)}}function _e(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"app-model",24),e.NdJ("dismiss",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onConfirmationCloseHandled())}),e.TgZ(1,"div",31)(2,"h5",26),e._uU(3,"Delete Employee"),e.qZA(),e.TgZ(4,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onConfirmationCloseHandled())}),e._uU(5," X "),e.qZA()(),e.TgZ(6,"div",29)(7,"h3"),e._uU(8,"Are you sure you want to delete these Records"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"This action cannot be undone"),e.qZA()(),e.TgZ(11,"div",32)(12,"button",33),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onConfirmationCloseHandled())}),e._uU(13,"Cancel"),e.qZA(),e.TgZ(14,"button",34),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.deleteCheckedEmployees())}),e._uU(15,"Delete"),e.qZA()()()}if(2&n){const t=e.oxw();e.Q6J("display",t.displayConfirmationModel)}}const ge=[{path:"",component:(()=>{class n{constructor(t,o){this.empSer=t,this.uiSer=o,this.sub$=new C.x,this.showModel=!1,this.showConfiramtionModel=!1,this.display="none",this.displayConfirmationModel="none",this.editMode=!1,this.isEmplyessChecked=!1,this.isEmployeeChecked=!1,this.selectedItemsList=[],this.displayToast="none",this.emplyeesToDisplay=[],this.currentPage=1,this.totalPages=1,this.perPage=10,this.getEmplyees(),this.loading$=this.uiSer.loading$}ngDoCheck(){this.emplyessIds=this.emplyeesToDisplay.map(t=>t.empId)}ngOnInit(){this.empSer.getEmployees$.subscribe(t=>{this.emplyees=t})}onGoTo(t){this.currentPage=t,this.emplyeesToDisplay=this.paginate(this.currentPage,this.perPage)}onNext(t){this.currentPage!==this.totalPages&&this.currentPage<this.totalPages&&(this.currentPage++,this.emplyeesToDisplay=this.paginate(this.currentPage,this.perPage))}onPrevious(t){1!==this.currentPage&&this.currentPage>1&&(this.currentPage--,this.emplyeesToDisplay=this.paginate(this.currentPage,this.perPage))}paginate(t,o){return[...this.emplyees.slice((t-1)*o).slice(0,o)]}getEmplyees(){this.empSer.getEmployees().pipe(v(this.sub$)).subscribe(t=>{this.emplyees=t,this.totalPages=Math.ceil(t.length/10),this.emplyeesToDisplay=this.paginate(this.currentPage,this.perPage),this.uiSer.loading$.next(!1)})}deleteEmployee(t){this.empSer.deleteEmployee(t).subscribe({next:o=>{this.emplyees=this.emplyees.filter(i=>i.empId!==t),this.getEmplyees()},error:o=>{console.log(o)},complete:()=>{this.onToastOpenHandled()}})}addEmployee(t){this.empSer.getEmployees().subscribe({next:o=>{this.emplyees=o,this.emplyees.push(t),this.getEmplyees()},error:o=>{console.log(o)},complete:()=>{console.log("complete")}})}openEditModal(t){this.showModel=!this.showModel,this.display="block",this.empId=t,this.editMode=!0}onCloseHandled(){this.showModel=!1,this.display="none",this.editMode=!1}openConfirmationModal(t){this.showConfiramtionModel=!this.showConfiramtionModel,this.displayConfirmationModel="block",this.empId=t}onToastCloseHandled(){this.displayToast="none"}onToastOpenHandled(){this.displayToast="block"}onConfirmationCloseHandled(){this.showConfiramtionModel=!1,this.displayConfirmationModel="none"}deleteCheckedEmployees(){this.deleteEmployee(this.empId),this.onConfirmationCloseHandled()}deleteALLCheckedEmployees(t){this.emplyeesToDisplay.length=0,this.onConfirmationCloseHandled()}onEmplyessCheck(t){this.isEmplyessChecked=!this.isEmplyessChecked,!0===this.isEmplyessChecked?(this.selectedItemsList.includes(t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7]||t[8]||t[9])?console.log("includes emp - will not addEmployee"):(this.selectedItemsList=[...this.selectedItemsList,...t],console.log("not includes emp - addEmployee")),console.log(this.selectedItemsList)):(this.selectedItemsList.length=0,console.log(this.selectedItemsList))}onEmpChange(t){this.selectedItemsList.includes(t)?this.selectedItemsList=this.selectedItemsList.filter(o=>o!==t):this.selectedItemsList.push(t),console.log(this.selectedItemsList)}ngOnDestroy(){this.sub$.next(""),this.sub$.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(_.j))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-employee-list"]],decls:15,vars:10,consts:[[1,"p-2","mb-3","d-flex","text-white","jumbotron"],[1,""],["id","dtBasicExample","class","table table-striped table-bordered table-sm","cellspacing","0","width","100%",4,"ngIf"],[3,"currentPage","totalPages","goTo","previous","next"],[3,"display","dismiss",4,"ngIf"],[3,"toastTitle","toastMessage","display","dismiss"],["id","dtBasicExample","cellspacing","0","width","100%",1,"table","table-striped","table-bordered","table-sm"],[1,"form-check"],["type","checkbox","id","materialUnchecked",1,"form-check-input",3,"checked","change"],["for","materialUnchecked",1,"form-check-label"],[1,"th-sm"],["data-order","desc","data-name","empName",3,"appSort","sortTypeChange"],["data-order","desc","data-name","empEmail",3,"appSort","sortTypeChange"],["data-order","desc","data-name","empAddress",3,"appSort","sortTypeChange"],["data-order","desc","data-name","empPhone",3,"appSort","sortTypeChange"],[4,"ngIf","ngIfElse"],["notFound",""],[4,"ngFor","ngForOf"],[1,"bi","bi-pencil-fill","icon-orange",3,"click"],[1,"bi","bi-trash-fill","icon-red",3,"click"],["type","checkbox","id","materialUnchecked","disabled","",1,"form-check-input"],["colspan","4",2,"text-align","center"],["disabled","",1,"bi","bi-pencil-fill"],["disabled","",1,"bi","bi-trash-fill"],[3,"display","dismiss"],["modal-header","",1,"d-flex"],[1,"modal-title"],["type","button","data-dismiss","modal",1,"close",3,"click"],["aria-hidden","true"],["modal-body",""],[3,"empId","editMode","dismiss","addNewEmp"],["modal-header","",1,"d-flex","flex-row"],["modal-footer",""],[1,"btn","btn-light","m-2",3,"click"],[1,"btn","btn-danger","m-2",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"header")(1,"div",0)(2,"h1",1),e._uU(3,"Manage "),e.TgZ(4,"strong"),e._uU(5," Employees"),e.qZA()(),e.TgZ(6,"div",1),e._UZ(7,"app-employee-form-delete")(8,"app-employee-form"),e.qZA()()(),e.YNc(9,ue,28,7,"table",2),e.ALo(10,"async"),e.TgZ(11,"app-pagination",3),e.NdJ("goTo",function(l){return o.onGoTo(l)})("previous",function(l){return o.onPrevious(l)})("next",function(l){return o.onNext(l)}),e.qZA(),e.YNc(12,he,9,3,"app-model",4),e.YNc(13,_e,16,1,"app-model",4),e.TgZ(14,"app-toast",5),e.NdJ("dismiss",function(){return o.onToastCloseHandled()}),e.qZA()),2&t&&(e.xp6(9),e.Q6J("ngIf",!e.lcZ(10,8,o.loading$)),e.xp6(2),e.Q6J("currentPage",o.currentPage)("totalPages",o.totalPages),e.xp6(1),e.Q6J("ngIf",o.showModel),e.xp6(1),e.Q6J("ngIf",o.showConfiramtionModel),e.xp6(1),e.Q6J("toastTitle","Alert")("toastMessage","Employee deleted success")("display",o.displayToast))},dependencies:[c.sg,c.O5,q,g,x,te,ne,ie,re,pe,c.Ov],styles:[".icon-green[_ngcontent-%COMP%]{color:green}.icon-red[_ngcontent-%COMP%]{color:red}.icon-yellow[_ngcontent-%COMP%]{color:#ff0}.icon-white[_ngcontent-%COMP%]{color:#fff}.icon-orange[_ngcontent-%COMP%]{color:orange}.icon-large[_ngcontent-%COMP%]{font-size:25px}i[_ngcontent-%COMP%]{font-size:25px;cursor:pointer}.jumbotron[_ngcontent-%COMP%]{background-color:#435d7d}"]}),n})()}];let fe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[y.Bz.forChild(ge),y.Bz]}),n})();var ye=r(7092);let Ce=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,fe,ye.m,a.UX]}),n})()}}]);