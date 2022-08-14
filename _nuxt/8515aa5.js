(window.webpackJsonp=window.webpackJsonp||[]).push([[71,31],{1108:function(b,y,t){"use strict";t.r(y);var M=function(){var a=this,e=a._self._c;return e("LazyFormDialogFull",{ref:"dialogForm",on:{arrowLink:a.arrowLink,closeDialog:a.closeDialog},scopedSlots:a._u([{key:"content",fn:function(){return[e("LazyDocumentFormPayment",{ref:"formPayment",attrs:{"form-type":a.formType}}),a._v(" "),e("AccountingDialogLedger",{ref:"ledger"})]},proxy:!0},{key:"actions",fn:function(){return[a.actionName==="Update"?e("span",[e("v-btn",{attrs:{text:"",small:"",dark:""},on:{click:function(c){return a.printAction("preview")}}},[a._v("Print or Preview")]),a._v(" "),e("v-divider",{attrs:{dark:"",vertical:""}}),a._v(" "),e("v-btn",{attrs:{text:"",small:"",dark:""}},[a._v("Make recurring")]),a._v(" "),e("v-divider",{attrs:{dark:"",vertical:""}}),a._v(" "),e("v-btn",{attrs:{text:"",small:"",dark:""}},[a._v(`
          More
          `),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:a._u([{key:"activator",fn:function(c){var f=c.on,p=c.attrs;return[e("v-btn",a._g(a._b({attrs:{dark:"",icon:""}},"v-btn",p,!1),f),[e("v-icon",[a._v("mdi-menu-down")])],1)]}}],null,!1,1025138851)},[a._v(" "),e("v-list",{attrs:{link:""}},a._l(a.itemAction,function(d,c){return e("v-list-item",{key:c,on:{click:function(p){return a.actionItem(d.action)}}},[e("v-list-item-content",[e("v-list-item-title",[a._v(a._s(d.text))])],1)],1)}),1)],1)],1)],1):a._e(),a._v(" "),e("v-spacer"),a._v(" "),e("v-btn",{staticClass:"mr-3",attrs:{small:"",loading:a.loading,disabled:a.form.status==="closed"},on:{click:function(c){return a.actionSave("saveDraft")}}},[a._v(`
        Save draft
      `)]),a._v(" "),e("v-btn",{staticClass:"mr-3",attrs:{small:"",color:"green darken-1",dark:"",loading:a.loading,disabled:a.form.status==="closed"},on:{click:function(c){return a.actionSave("save")}}},[a._v(`
        `+a._s(a.actionName)+`

        `),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:a._u([{key:"activator",fn:function(c){var f=c.on,p=c.attrs;return[e("v-btn",a._g(a._b({attrs:{dark:"",icon:"",disabled:a.form.status==="closed"}},"v-btn",p,!1),f),[e("v-icon",[a._v("mdi-menu-down")])],1)]}}])},[a._v(" "),e("v-list",{attrs:{link:""}},a._l(a.items,function(d,c){return e("v-list-item",{key:c,on:{click:function(p){return a.actionSave(d.action)}}},[e("v-list-item-content",[e("v-list-item-title",[a._v(a._s(d.text))])],1)],1)}),1)],1)],1)]},proxy:!0}])},[e("v-overlay",{attrs:{value:a.showLoading}},[e("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},L=[],A=t(2),T=t(24),I=t(74),$=t(59),x=t(4),B=t(32),h=t(34),P=t(668),K=t(293),R=t(33),C=t(8),W=t(7),O=t(9),n=t(12),o=t(10),s=t(13);function _(l,a){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(l);a&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(l,d).enumerable})),e.push.apply(e,r)}return e}function D(l){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?_(Object(e),!0).forEach(function(r){Object(A.a)(l,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach(function(r){Object.defineProperty(l,r,Object.getOwnPropertyDescriptor(e,r))})}return l}var E={name:"DialogForm",props:{url:{type:String,default:"/api/documents"},formType:{type:String,default:""},formUrl:{type:String,default:""},dialogTitle:{type:String,default:""},tableUrl:{type:String,default:""}},data:function(){return{title:this.dialogTitle,items:[{text:"Save and close",action:"saveClose"},{text:"Save and new",action:"saveNew"},{text:"Save and send",action:"saveSend"}],itemAction:[],action:[],breadcrumb:[],form:{},audits:{},defaultItem:{},dialogLoading:!1,showLoading:!0,dialog:!1,loading:!1,actionName:"Save",actionOnSave:"save",countRouter:-1,showDraft:!1}},activated:function(){var a=this;this.$nextTick(function(){a.$nuxt.$loading.start()}),setTimeout(function(){a.action=[],a.itemAction=[{text:"Copy",action:"copy"},{text:"Cancel",action:"cancel"},{text:"Audit History",action:"history"},{text:"Journal Entry",action:"journal"}],a.itemAction=a.appendItemAction(a.formType),a.$refs.dialogForm.openDialog(),a.getDataFromApi()},300)},methods:{close:function(){this.$emit("getDataFromApi")},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},appendItemAction:function(a){return this.itemAction},closeDialog:function(){this.$router.push({path:this.tableUrl})},arrowLink:function(a){var e=this;this.$axios.get(this.url+"/arrow",{params:{type:this.formType,status:a.status,document:this.$route.query.document}}).then(function(r){e.$router.push({path:e.formUrl,query:{document:r.data.id}}),setTimeout(function(){e.getDataFromApi()},300)}).catch(function(r){e.$swal({type:"error",title:"Error",text:r.response.data.message})})},getDataFromApi:function(a){var e=this;return Object(T.a)(regeneratorRuntime.mark(function r(){var d,c,f,p,j;return regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(e.showLoading=!0,m.prev=1,d=e.formType,c=e.$route.query.copyFrom,f="",!c){m.next=11;break}return m.next=8,e.$axios.get("/api/document/copy/"+c);case 8:f=m.sent,m.next=14;break;case 11:return m.next=13,e.$axios.get(e.url+"/"+e.$route.query.document,{params:{type:d,copyFromId:a}});case 13:f=m.sent;case 14:p="",e.audits=f.data.audits,f.data.count===0?(p=f.data.form,e.actionName="Save"):(p=f.data.data,e.actionName="Update"),e.form=Object.assign({},p),e.defaultItem=Object.assign({},p),c&&(e.form.status="open",e.form.base_id=e.form.id,e.form.base_type=e.form.transaction_type,e.form.base_num=e.form.transaction_no,e.form.transaction_type=e.formType),e.title=e.dialogTitle+" #"+e.form.transaction_no,e.$refs.dialogForm.setTitle(e.title),e.form.transaction_type==="RC"||e.form.transaction_type==="PY"?setTimeout(function(){e.$refs.formPayment.setData(e.form)},300):setTimeout(function(){e.$refs.formPayment.setData(e.form)}),e.showLoading=!1,m.next=30;break;case 26:m.prev=26,m.t0=m.catch(1),j=m.t0.response!==void 0?m.t0.response.data.message:m.t0,e.$swal({type:"error",title:"Error",text:j});case 30:case"end":return m.stop()}},r,null,[[1,26]])}))()},actionItem:function(a){var e=this;switch(a){case"copy":this.$router.push({path:e.formUrl,query:{document:0}}),this.form.status="open",this.$refs.formPayment.setData(this.form);break;case"journal":this.$refs.ledger.openDialog("/api/transaction/ledger/"+this.form.id);break;default:this.$router.push({path:e.$formatter.mappingAction(a),query:{document:0,copyFrom:this.form.id}}),this.form.status="open",this.form.base_id=this.form.id,this.form.base_type=this.form.transaction_type,this.form.base_num=this.form.document_number,this.$refs.formPayment.setData(this.form);break}},actionDocument:function(a){var e=this,r=this.$route.query.document;switch(a){case"SQ":case"SO":case"PQ":case"PO":this.$router.push({path:"/dashboard/documents/form",query:{document:0,type:a}}),setTimeout(function(){e.actionName="Save",e.$refs.formPayment.changeValue("type",a),e.$refs.formPayment.changeValue("parent_id",r)},300);break;case"C":this.$refs.formPayment.changeValue("status","cancel"),this.store();break;case"sendEmail":this.openDialogEmail();break}},printAction:function(a){switch(a){case"preview":this.previewDocument();break;case"sendEmail":this.openDialogEmail();break}},openDialogEmail:function(){this.$refs.dialogSendEmail.openEmailDialog(this.form)},previewDocument:function(){var a=this,e=this;this.$refs.dialogForm.showLoading(),this.$axios.get("/api/document/print",{params:{id:e.form.id,type:e.form.transaction_type},responseType:"arraybuffer"}).then(function(r){a.$refs.dialogForm.finishLoading();var d=window.URL.createObjectURL(new Blob([r.data])),c=document.createElement("a");c.href=d,c.setAttribute("download",e.form.transaction_no+".pdf"),document.body.appendChild(c),c.click()}).catch(function(r){a.$refs.dialogForm.finishLoading(),a.$swal({type:"error",title:"Error",text:r.response.data.message})})},actionSave:function(a){var e=this,r=["IN","RC","CN","SR","BL","PY","DN","GN"];a==="save"&&r.includes(this.form.transaction_type)?this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(d){d.value&&e.save(a)}):this.save(a)},save:function(a){var e=this;this.actionOnSave=a;var r=this.$route.query.document,d=r==="0"?this.url:this.url+"/"+r,c=r==="0"?"post":"patch",f=D(D({},this.$refs.formPayment.returnData(r)),{},{action:a}),p=this;this.loading=!0,this.showLoading=!0,this.$axios({method:c,url:d,data:f}).then(function(j){switch(e.$nuxt.$emit("snackbar",e.title+" saved!"),e.actionOnSave){case"save":case"saveDraft":e.$router.push({path:p.formUrl,query:{document:j.data.id}}),setTimeout(function(){e.getDataFromApi()},50);break;case"saveNew":e.$router.push({path:p.formUrl,query:{document:0}}),setTimeout(function(){e.getDataFromApi()},50);break;case"saveClose":e.$refs.dialogForm.closeDialog();break}}).catch(function(j){e.$swal({type:"error",title:"Error",text:j.response.data.message})}).finally(function(j){e.showLoading=!1,e.loading=!1})}}},N=E,at=t(50),G=t(51),z=t.n(G),J=t(164),nt=t(576),Q=t(247),ot=t(249),Y=t(165),H=t(35),X=t(577),st=t(246),Z=t(243),rt=t(593),V=Object(at.a)(N,M,L,!1,null,null,null),Dt=y.default=V.exports;z()(V,{AccountingDialogLedger:t(648).default}),z()(V,{VBtn:J.a,VDivider:nt.a,VIcon:Q.a,VList:ot.a,VListItem:Y.a,VListItemContent:H.a,VListItemTitle:H.c,VMenu:X.a,VOverlay:st.a,VProgressCircular:Z.a,VSpacer:rt.a})},599:function(b,y,t){"use strict";var M=t(7),L=t.n(M),A=t(9),T=t.n(A),I=t(12),$=t.n(I),x=t(13),B=t.n(x),h=t(2),P=t(4),K=t.n(P),R=t(33),C=t.n(R),W=t(52),O=t.n(W),n=t(28),o=t.n(n),s=t(8),_=t.n(s),D=t(21),E=t.n(D),N=t(65),at=t.n(N),G=t(269),z=t.n(G),J=t(32),nt=t.n(J),Q=t(270),ot=t.n(Q),Y=t(271),H=t.n(Y),X=t(272),st=t.n(X),Z=t(273),rt=t.n(Z),V=t(274),Dt=t.n(V),l=t(275),a=t.n(l),e=t(276),r=t.n(e),d=t(277),c=t.n(d),f=t(278),p=t.n(f),j=t(279),Et=t.n(j),m=t(280),Ut=t.n(m),yt=t(281),$t=t.n(yt),ht=t(282),Kt=t.n(ht),Ot=t(34),Wt=t.n(Ot),jt=t(10),Vt=t.n(jt),Pt=t(283),St=t.n(Pt),Mt=t(3),Ct=t(78),Lt=t(1);function it(g,u){var v=Object.keys(g);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(g);u&&(i=i.filter(function(S){return Object.getOwnPropertyDescriptor(g,S).enumerable})),v.push.apply(v,i)}return v}function w(g){for(var u=1;u<arguments.length;u++){var v=arguments[u]!=null?arguments[u]:{};u%2?it(Object(v),!0).forEach(function(i){Object(h.a)(g,i,v[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(v)):it(Object(v)).forEach(function(i){Object.defineProperty(g,i,Object.getOwnPropertyDescriptor(v,i))})}return g}var At=["sm","md","lg","xl"],k=["start","end","center"];function q(g,u){return At.reduce(function(v,i){return v[g+Object(Lt.I)(i)]=u(),v},{})}var lt=function(u){return[].concat(k,["baseline","stretch"]).includes(u)},ct=q("align",function(){return{type:String,default:null,validator:lt}}),dt=function(u){return[].concat(k,["space-between","space-around"]).includes(u)},_t=q("justify",function(){return{type:String,default:null,validator:dt}}),ut=function(u){return[].concat(k,["space-between","space-around","stretch"]).includes(u)},mt=q("alignContent",function(){return{type:String,default:null,validator:ut}}),vt={align:Object.keys(ct),justify:Object.keys(_t),alignContent:Object.keys(mt)},Tt={align:"align",justify:"justify",alignContent:"align-content"};function It(g,u,v){var i=Tt[g];if(v!=null){if(u){var S=u.replace(g,"");i+="-".concat(S)}return i+="-".concat(v),i.toLowerCase()}}var ft=new Map;y.a=Mt.default.extend({name:"v-row",functional:!0,props:w(w(w({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:lt}},ct),{},{justify:{type:String,default:null,validator:dt}},_t),{},{alignContent:{type:String,default:null,validator:ut}},mt),render:function(u,v){var i=v.props,S=v.data,xt=v.children,tt="";for(var Bt in i)tt+=String(i[Bt]);var U=ft.get(tt);return U||function(){var F;U=[];var et;for(et in vt)vt[et].forEach(function(gt){var Rt=i[gt],pt=It(et,gt,Rt);pt&&U.push(pt)});U.push((F={"no-gutters":i.noGutters,"row--dense":i.dense},Object(h.a)(F,"align-".concat(i.align),i.align),Object(h.a)(F,"justify-".concat(i.justify),i.justify),Object(h.a)(F,"align-content-".concat(i.alignContent),i.alignContent),F)),ft.set(tt,U)}(),u(i.tag,Object(Ct.a)(S,{staticClass:"row",class:U}),xt)}})},602:function(b,y,t){"use strict";t.r(y);var M=function(){var s=this,_=s._self._c;return _("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:s.original,"max-width":s.maxWidth,transition:"dialog-top-transition"},model:{value:s.dialog,callback:function(E){s.dialog=E},expression:"dialog"}},[_("v-card",[_("v-card-title",[_("span",{staticClass:"subtitle-2"},[s._v(s._s(s.dialogTitle))]),s._v(" "),_("v-spacer"),s._v(" "),_("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(E){return s.closeDialog()}}},[_("v-icon",[s._v("mdi-close-circle")])],1)],1),s._v(" "),_("v-divider"),s._v(" "),_("v-card-text",{staticClass:"pr-0 pl-0"},[s._t("content")],2),s._v(" "),_("v-divider"),s._v(" "),_("v-card-actions",[s._t("addLine"),s._v(" "),_("v-spacer"),s._v(" "),s._t("saveData")],2)],1)],1)},L=[],A={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},T=A,I=t(50),$=t(51),x=t.n($),B=t(164),h=t(248),P=t(88),K=t(595),R=t(576),C=t(247),W=t(593),O=Object(I.a)(T,M,L,!1,null,null,null),n=y.default=O.exports;x()(O,{VBtn:B.a,VCard:h.a,VCardActions:P.a,VCardText:P.b,VCardTitle:P.c,VDialog:K.a,VDivider:R.a,VIcon:C.a,VSpacer:W.a})},648:function(b,y,t){"use strict";t.r(y);var M=function(){var n=this,o=n._self._c;return o("div",[o("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1200px","dialog-title":n.$t("Journal Entry"),"button-title":"Save",original:"top"},scopedSlots:n._u([{key:"content",fn:function(){return[o("v-container",[o("v-row",[o("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[o("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:n.headers,items:n.allData,"items-per-page":150,options:n.options,"server-items-length":n.totalData,loading:n.loading,"show-select":"","fixed-header":"",height:"60vh","hide-default-footer":"",dense:"","footer-props":{"items-per-page-options":[150,250,500,-1]}},on:{"update:options":function(D){n.options=D}},scopedSlots:n._u([{key:"item.amount_credit",fn:function(D){var E=D.item;return[E.amount_credit?o("span",[n._v(`
                    `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(E.amount_credit))+`
                  `)]):n._e()]}},{key:"item.amount_debit",fn:function(D){var E=D.item;return[E.amount_debit?o("span",[n._v(`
                    `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(E.amount_debit))+`
                  `)]):n._e()]}},{key:"body.append",fn:function(){return[o("tr",{staticClass:"black--text"},[o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title"}),n._v(" "),o("th",{staticClass:"title text-right"},[n._v(`
                      `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(n.sumField("amount_debit")))+`
                    `)]),n._v(" "),o("th",{staticClass:"title text-right"},[n._v(`
                      `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(n.sumField("amount_credit")))+`
                    `)])]),n._v(" "),o("tr",[o("td",[n._v("Notes: ")]),n._v(" "),o("td",{attrs:{colspan:"3"}},[o("strong",[n._v(n._s(n.transaction.narration))])])])]},proxy:!0}],null,!0)})],1)],1)],1)]},proxy:!0}])})],1)},L=[],A=t(4),T={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null,url:"",allData:[],transaction:[],totalData:0,loading:!1,options:{},headers:[{text:"Posting Date",value:"posting_date"},{text:"Account Code",value:"post_account.code"},{text:"Account Category",value:"post_account.account_type"},{text:"Account Name",value:"post_account.name"},{text:"Debit",value:"amount_debit",class:"text-center",cellClass:"disable-wrap text-right"},{text:"Credit",value:"amount_credit",class:"text-center",cellClass:"disable-wrap text-right"}]}},methods:{sumField:function(n){return this.allData.reduce(function(o,s){return parseFloat(o)+parseFloat(s[n]||0)},0)},openDialog:function(n){this.$refs.dialogForm.openDialog(),this.url=n,this.getDataFromApi()},getDataFromApi:function(){var n=this;this.loading=!0,this.$axios.get(this.url).then(function(o){n.loading=!1;var s=o.data;n.allData=s.data,n.transaction=s.transaction,n.totalData=s.total}).catch(function(o){n.loading=!1,n.$swal({type:"error",title:"Error",text:o.response.data.message})})}}},I=T,$=t(50),x=t(51),B=t.n(x),h=t(585),P=t(586),K=t(908),R=t(599),C=Object($.a)(I,M,L,!1,null,null,null),W=y.default=C.exports;B()(C,{DialogForm:t(602).default}),B()(C,{VCol:h.a,VContainer:P.a,VDataTable:K.a,VRow:R.a})}}]);
