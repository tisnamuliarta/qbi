(window.webpackJsonp=window.webpackJsonp||[]).push([[73,31],{1109:function(V,E,t){"use strict";t.r(E);var D=t(165),T=t(575),h=t(247),I=t(248),P=t(166),M=t(31),A=t(576),R=t(246),y=t(243),x=t(589),B=function(){var a=this,e=a._self._c;return e("LazyFormDialogFull",{ref:"dialogForm",on:{arrowLink:a.arrowLink,closeDialog:a.closeDialog},scopedSlots:a._u([{key:"content",fn:function(){return[e("LazyDocumentFormPayment",{ref:"formPayment",attrs:{"form-type":a.formType}}),a._v(" "),e("AccountingDialogLedger",{ref:"ledger"})]},proxy:!0},{key:"actions",fn:function(){return[a.actionName==="Update"?e("span",[e(D.a,{attrs:{text:"",small:"",dark:""},on:{click:function(c){return a.printAction("preview")}}},[a._v("Print or Preview")]),a._v(" "),e(T.a,{attrs:{dark:"",vertical:""}}),a._v(" "),e(D.a,{attrs:{text:"",small:"",dark:""}},[a._v("Make recurring")]),a._v(" "),e(T.a,{attrs:{dark:"",vertical:""}}),a._v(" "),e(D.a,{attrs:{text:"",small:"",dark:""}},[a._v(`
        More
        `),e(A.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:a._u([{key:"activator",fn:function(c){var v=c.on,p=c.attrs;return[e(D.a,a._g(a._b({attrs:{dark:"",icon:""}},"v-btn",p,!1),v),[e(h.a,[a._v("mdi-menu-down")])],1)]}}],null,!1,1025138851)},[a._v(" "),e(I.a,{attrs:{link:""}},a._l(a.itemAction,function(_,c){return e(P.a,{key:c,on:{click:function(p){return a.actionItem(_.action)}}},[e(M.a,[e(M.c,[a._v(a._s(_.text))])],1)],1)}),1)],1)],1)],1):a._e(),a._v(" "),e(x.a),a._v(" "),e(D.a,{staticClass:"mr-3",attrs:{small:"",loading:a.loading,disabled:a.form.status==="closed"},on:{click:function(c){return a.actionSave("saveDraft")}}},[a._v(`
      Save draft
    `)]),a._v(" "),e(D.a,{staticClass:"mr-3",attrs:{small:"",color:"green darken-1",dark:"",loading:a.loading,disabled:a.form.status==="closed"},on:{click:function(c){return a.actionSave("save")}}},[a._v(`
      `+a._s(a.actionName)+`

      `),e(A.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:a._u([{key:"activator",fn:function(c){var v=c.on,p=c.attrs;return[e(D.a,a._g(a._b({attrs:{dark:"",icon:"",disabled:a.form.status==="closed"}},"v-btn",p,!1),v),[e(h.a,[a._v("mdi-menu-down")])],1)]}}])},[a._v(" "),e(I.a,{attrs:{link:""}},a._l(a.items,function(_,c){return e(P.a,{key:c,on:{click:function(p){return a.actionSave(_.action)}}},[e(M.a,[e(M.c,[a._v(a._s(_.text))])],1)],1)}),1)],1)],1)]},proxy:!0}])},[e(R.a,{attrs:{value:a.showLoading}},[e(y.a,{attrs:{indeterminate:"",size:"64"}})],1)],1)},U=[],C=t(2),n=t(24),o=t(73),s=t(58),f=t(4),O=t(33),j=t(35),H=t(650),ut=t(291),X=t(34),mt=t(8),Z=t(7),ft=t(10),w=t(12),vt=t(9),k=t(13);function b(l,a){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(l);a&&(r=r.filter(function(_){return Object.getOwnPropertyDescriptor(l,_).enumerable})),e.push.apply(e,r)}return e}function S(l){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?b(Object(e),!0).forEach(function(r){Object(C.a)(l,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach(function(r){Object.defineProperty(l,r,Object.getOwnPropertyDescriptor(e,r))})}return l}var q={name:"DialogForm",props:{url:{type:String,default:"/api/documents"},formType:{type:String,default:""},formUrl:{type:String,default:""},dialogTitle:{type:String,default:""},tableUrl:{type:String,default:""}},data:function(){return{title:this.dialogTitle,items:[{text:"Save and close",action:"saveClose"},{text:"Save and new",action:"saveNew"},{text:"Save and send",action:"saveSend"}],itemAction:[],action:[],breadcrumb:[],form:{},audits:{},defaultItem:{},dialogLoading:!1,showLoading:!0,dialog:!1,loading:!1,actionName:"Save",actionOnSave:"save",countRouter:-1,showDraft:!1}},activated:function(){var a=this;this.$nextTick(function(){a.$nuxt.$loading.start()}),setTimeout(function(){a.action=[],a.itemAction=[{text:"Copy",action:"copy"},{text:"Cancel",action:"cancel"},{text:"Audit History",action:"history"},{text:"Journal Entry",action:"journal"}],a.itemAction=a.appendItemAction(a.formType),a.$refs.dialogForm.openDialog()},300)},mounted:function(){var a=this;setTimeout(function(){a.getDataFromApi()},500)},methods:{close:function(){this.$emit("getDataFromApi")},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},appendItemAction:function(a){return this.itemAction},closeDialog:function(){this.$router.push({path:this.tableUrl})},arrowLink:function(a){var e=this;this.$axios.get(this.url+"/arrow",{params:{type:this.formType,status:a.status,document:this.$route.query.document}}).then(function(r){e.$router.push({path:e.formUrl,query:{document:r.data.id}}),setTimeout(function(){e.getDataFromApi()},300)}).catch(function(r){e.$swal({type:"error",title:"Error",text:r.response.data.message})})},getDataFromApi:function(a){var e=this;return Object(n.a)(regeneratorRuntime.mark(function r(){var _,c,v,p,L;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(e.showLoading=!0,u.prev=1,_=e.formType,c=e.$route.query.copyFrom,v="",!c){u.next=11;break}return u.next=8,e.$axios.get("/api/document/copy/"+c);case 8:v=u.sent,u.next=14;break;case 11:return u.next=13,e.$axios.get(e.url+"/"+e.$route.query.document,{params:{type:_,copyFromId:a}});case 13:v=u.sent;case 14:p="",e.audits=v.data.audits,v.data.count===0?(p=v.data.form,e.actionName="Save"):(p=v.data.data,e.actionName="Update"),e.form=Object.assign({},p),e.defaultItem=Object.assign({},p),c&&(e.form.status="open",e.form.base_id=e.form.id,e.form.base_type=e.form.transaction_type,e.form.base_num=e.form.transaction_no,e.form.transaction_type=e.formType),e.title=e.dialogTitle+" #"+e.form.transaction_no,e.$refs.dialogForm.setTitle(e.title),e.form.transaction_type==="RC"||e.form.transaction_type==="PY"?setTimeout(function(){e.$refs.formPayment.setData(e.form)},300):setTimeout(function(){e.$refs.formPayment.setData(e.form)}),e.showLoading=!1,u.next=30;break;case 26:u.prev=26,u.t0=u.catch(1),L=u.t0.response!==void 0?u.t0.response.data.message:u.t0,e.$swal({type:"error",title:"Error",text:L});case 30:case"end":return u.stop()}},r,null,[[1,26]])}))()},actionItem:function(a){var e=this;switch(a){case"copy":this.$router.push({path:e.formUrl,query:{document:0}}),this.form.status="open",this.$refs.formPayment.setData(this.form);break;case"journal":this.$refs.ledger.openDialog("/api/transaction/ledger/"+this.form.id);break;default:this.$router.push({path:e.$formatter.mappingAction(a),query:{document:0,copyFrom:this.form.id}}),this.form.status="open",this.form.base_id=this.form.id,this.form.base_type=this.form.transaction_type,this.form.base_num=this.form.document_number,this.$refs.formPayment.setData(this.form);break}},actionDocument:function(a){var e=this,r=this.$route.query.document;switch(a){case"SQ":case"SO":case"PQ":case"PO":this.$router.push({path:"/dashboard/documents/form",query:{document:0,type:a}}),setTimeout(function(){e.actionName="Save",e.$refs.formPayment.changeValue("type",a),e.$refs.formPayment.changeValue("parent_id",r)},300);break;case"C":this.$refs.formPayment.changeValue("status","cancel"),this.store();break;case"sendEmail":this.openDialogEmail();break}},printAction:function(a){switch(a){case"preview":this.previewDocument();break;case"sendEmail":this.openDialogEmail();break}},openDialogEmail:function(){this.$refs.dialogSendEmail.openEmailDialog(this.form)},previewDocument:function(){var a=this,e=this;this.$refs.dialogForm.showLoading(),this.$axios.get("/api/document/print",{params:{id:e.form.id,type:e.form.transaction_type},responseType:"arraybuffer"}).then(function(r){a.$refs.dialogForm.finishLoading();var _=window.URL.createObjectURL(new Blob([r.data])),c=document.createElement("a");c.href=_,c.setAttribute("download",e.form.transaction_no+".pdf"),document.body.appendChild(c),c.click()}).catch(function(r){a.$refs.dialogForm.finishLoading(),a.$swal({type:"error",title:"Error",text:r.response.data.message})})},actionSave:function(a){var e=this,r=["IN","RC","CN","SR","BL","PY","DN","GN"];a==="save"&&r.includes(this.form.transaction_type)?this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(_){_.value&&e.save(a)}):this.save(a)},save:function(a){var e=this;this.actionOnSave=a;var r=this.$route.query.document,_=r==="0"?this.url:this.url+"/"+r,c=r==="0"?"post":"patch",v=S(S({},this.$refs.formPayment.returnData(r)),{},{action:a}),p=this;this.loading=!0,this.showLoading=!0,this.$axios({method:c,url:_,data:v}).then(function(L){switch(e.$nuxt.$emit("snackbar",e.title+" saved!"),e.actionOnSave){case"save":case"saveDraft":e.$router.push({path:p.formUrl,query:{document:L.data.id}}),setTimeout(function(){e.getDataFromApi()},50);break;case"saveNew":e.$router.push({path:p.formUrl,query:{document:0}}),setTimeout(function(){e.getDataFromApi()},50);break;case"saveClose":e.$refs.dialogForm.closeDialog();break}}).catch(function(L){e.$swal({type:"error",title:"Error",text:L.response.data.message})}).finally(function(L){e.showLoading=!1,e.loading=!1})}}},N=q,tt=t(50),F=Object(tt.a)(N,B,U,!1,null,null,null),gt=E.default=F.exports;installComponents(F,{AccountingDialogLedger:t(651).default})},598:function(V,E,t){"use strict";var D=t(7),T=t.n(D),h=t(10),I=t.n(h),P=t(12),M=t.n(P),A=t(13),R=t.n(A),y=t(2),x=t(4),B=t.n(x),U=t(34),C=t.n(U),n=t(51),o=t.n(n),s=t(28),f=t.n(s),O=t(8),j=t.n(O),H=t(21),ut=t.n(H),X=t(64),mt=t.n(X),Z=t(269),ft=t.n(Z),w=t(33),vt=t.n(w),k=t(270),b=t.n(k),S=t(271),q=t.n(S),N=t(272),tt=t.n(N),F=t(273),gt=t.n(F),l=t(274),a=t.n(l),e=t(275),r=t.n(e),_=t(276),c=t.n(_),v=t(277),p=t.n(v),L=t(278),pt=t.n(L),u=t(279),Rt=t.n(u),Dt=t(280),Ut=t.n(Dt),Et=t(281),$t=t.n(Et),ht=t(282),Kt=t.n(ht),yt=t(35),Wt=t.n(yt),Ot=t(9),St=t.n(Ot),jt=t(283),Ft=t.n(jt),Pt=t(3),Mt=t(77),Ct=t(1);function et(g,d){var m=Object.keys(g);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(g);d&&(i=i.filter(function(K){return Object.getOwnPropertyDescriptor(g,K).enumerable})),m.push.apply(m,i)}return m}function G(g){for(var d=1;d<arguments.length;d++){var m=arguments[d]!=null?arguments[d]:{};d%2?et(Object(m),!0).forEach(function(i){Object(y.a)(g,i,m[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(m)):et(Object(m)).forEach(function(i){Object.defineProperty(g,i,Object.getOwnPropertyDescriptor(m,i))})}return g}var Lt=["sm","md","lg","xl"],z=["start","end","center"];function J(g,d){return Lt.reduce(function(m,i){return m[g+Object(Ct.I)(i)]=d(),m},{})}var at=function(d){return[].concat(z,["baseline","stretch"]).includes(d)},nt=J("align",function(){return{type:String,default:null,validator:at}}),ot=function(d){return[].concat(z,["space-between","space-around"]).includes(d)},st=J("justify",function(){return{type:String,default:null,validator:ot}}),rt=function(d){return[].concat(z,["space-between","space-around","stretch"]).includes(d)},it=J("alignContent",function(){return{type:String,default:null,validator:rt}}),lt={align:Object.keys(nt),justify:Object.keys(st),alignContent:Object.keys(it)},At={align:"align",justify:"justify",alignContent:"align-content"};function Tt(g,d,m){var i=At[g];if(m!=null){if(d){var K=d.replace(g,"");i+="-".concat(K)}return i+="-".concat(m),i.toLowerCase()}}var ct=new Map;E.a=Pt.default.extend({name:"v-row",functional:!0,props:G(G(G({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:at}},nt),{},{justify:{type:String,default:null,validator:ot}},st),{},{alignContent:{type:String,default:null,validator:rt}},it),render:function(d,m){var i=m.props,K=m.data,It=m.children,Q="";for(var xt in i)Q+=String(i[xt]);var $=ct.get(Q);return $||function(){var W;$=[];var Y;for(Y in lt)lt[Y].forEach(function(_t){var Bt=i[_t],dt=Tt(Y,_t,Bt);dt&&$.push(dt)});$.push((W={"no-gutters":i.noGutters,"row--dense":i.dense},Object(y.a)(W,"align-".concat(i.align),i.align),Object(y.a)(W,"justify-".concat(i.justify),i.justify),Object(y.a)(W,"align-content-".concat(i.alignContent),i.alignContent),W)),ct.set(Q,$)}(),d(i.tag,Object(Mt.a)(K,{staticClass:"row",class:$}),It)}})},600:function(V,E,t){"use strict";t.r(E);var D=t(165),T=t(249),h=t(87),I=t(594),P=t(575),M=t(247),A=t(589),R=function(){var s=this,f=s._self._c;return f(I.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:s.original,"max-width":s.maxWidth,transition:"dialog-top-transition"},model:{value:s.dialog,callback:function(j){s.dialog=j},expression:"dialog"}},[f(T.a,[f(h.c,[f("span",{staticClass:"subtitle-2"},[s._v(s._s(s.dialogTitle))]),s._v(" "),f(A.a),s._v(" "),f(D.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(j){return s.closeDialog()}}},[f(M.a,[s._v("mdi-close-circle")])],1)],1),s._v(" "),f(P.a),s._v(" "),f(h.b,{staticClass:"pr-0 pl-0"},[s._t("content")],2),s._v(" "),f(P.a),s._v(" "),f(h.a,[s._t("addLine"),s._v(" "),f(A.a),s._v(" "),s._t("saveData")],2)],1)],1)},y=[],x={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},B=x,U=t(50),C=Object(U.a)(B,R,y,!1,null,null,null),n=E.default=C.exports},651:function(V,E,t){"use strict";t.r(E);var D=t(587),T=t(585),h=t(908),I=t(598),P=function(){var n=this,o=n._self._c;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1200px","dialog-title":n.$t("Journal Entry"),"button-title":"Save",original:"top"},scopedSlots:n._u([{key:"content",fn:function(){return[o(T.a,[o(I.a,[o(D.a,{staticClass:"mt-0",attrs:{cols:"12"}},[o(h.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:n.headers,items:n.allData,"items-per-page":150,options:n.options,"server-items-length":n.totalData,loading:n.loading,"show-select":"","fixed-header":"",height:"60vh","hide-default-footer":"",dense:"","footer-props":{"items-per-page-options":[150,250,500,-1]}},on:{"update:options":function(O){n.options=O}},scopedSlots:n._u([{key:"item.amount_credit",fn:function(O){var j=O.item;return[j.amount_credit?o("span",[n._v(`
                  `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(j.amount_credit))+`
                `)]):n._e()]}},{key:"item.amount_debit",fn:function(O){var j=O.item;return[j.amount_debit?o("span",[n._v(`
                  `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(j.amount_debit))+`
                `)]):n._e()]}},{key:"body.append",fn:function(){return[o("tr",{staticClass:"black--text"},[o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"text-right"},[o("strong",[n._v(`
                      `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(n.sumField("amount_debit")))+`
                    `)])]),n._v(" "),o("th",{staticClass:"text-right"},[o("strong",[n._v(`
                      `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(n.sumField("amount_credit")))+`
                    `)])])]),n._v(" "),o("tr",[o("td",[n._v("Notes: ")]),n._v(" "),o("td",{attrs:{colspan:"3"}},[o("strong",[n._v(n._s(n.transaction.narration))])])])]},proxy:!0}],null,!0)})],1)],1)],1)]},proxy:!0}])})],1)},M=[],A=t(4),R={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null,url:"",allData:[],transaction:[],totalData:0,loading:!1,options:{},headers:[{text:"Reference",value:"reference"},{text:"Posting Date",value:"posting_date"},{text:"Account Code",value:"post_account.code"},{text:"Account Category",value:"post_account.account_type"},{text:"Account Name",value:"post_account.name"},{text:"Debit",value:"amount_debit",class:"text-center",cellClass:"disable-wrap text-right"},{text:"Credit",value:"amount_credit",class:"text-center",cellClass:"disable-wrap text-right"}]}},methods:{sumField:function(n){return this.allData.reduce(function(o,s){return parseFloat(o)+parseFloat(s[n]||0)},0)},openDialog:function(n){this.$refs.dialogForm.openDialog(),this.url=n,this.getDataFromApi()},getDataFromApi:function(){var n=this;this.loading=!0,this.$axios.get(this.url).then(function(o){n.loading=!1;var s=o.data;n.allData=s.data,n.transaction=s.transaction,n.totalData=s.total}).catch(function(o){n.loading=!1,n.$swal({type:"error",title:"Error",text:o.response.data.message})})}}},y=R,x=t(50),B=Object(x.a)(y,P,M,!1,null,null,null),U=E.default=B.exports;installComponents(B,{DialogForm:t(600).default})}}]);
