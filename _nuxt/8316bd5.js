(window.webpackJsonp=window.webpackJsonp||[]).push([[35,31],{1091:function(J,E,t){"use strict";t.r(E);var g=t(165),$=t(575),O=t(247),x=t(248),P=t(166),A=t(31),L=t(576),B=t(246),y=t(243),T=t(589),I=function(){var a=this,e=a._self._c;return e("LazyFormDialogFull",{ref:"dialogForm",attrs:{"show-icon":!0},on:{arrowLink:a.arrowLink,closeDialog:a.closeDialog,newData:a.newData,printAction:function(c){return a.printAction("preview")}},scopedSlots:a._u([{key:"content",fn:function(){return[e("LazyDocumentFormDocument",{ref:"formDocument",attrs:{"form-type":a.formType}}),a._v(" "),e("AccountingDialogLedger",{ref:"ledger"})]},proxy:!0},{key:"actions",fn:function(){return[a.actionName==="Update Document"?e("span",[e(g.a,{attrs:{text:"",small:"",dark:""},on:{click:function(_){return a.printAction("preview")}}},[a._v("Print or Preview")]),a._v(" "),e($.a,{attrs:{dark:"",vertical:""}}),a._v(" "),e(g.a,{attrs:{text:"",small:"",dark:""}},[a._v(`
        More
        `),e(L.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:a._u([{key:"activator",fn:function(_){var p=_.on,C=_.attrs;return[e(g.a,a._g(a._b({attrs:{dark:"",icon:""}},"v-btn",C,!1),p),[e(O.a,[a._v("mdi-menu-down")])],1)]}}],null,!1,1025138851)},[a._v(" "),e(x.a,{attrs:{link:""}},a._l(a.itemAction,function(c,_){return e(P.a,{key:_,on:{click:function(C){return a.actionItem(c.action)}}},[e(A.a,[e(A.c,[a._v(a._s(c.text))])],1)],1)}),1)],1)],1)],1):a._e(),a._v(" "),e(T.a),a._v(" "),e(g.a,{staticClass:"mr-3",attrs:{small:"",loading:a.loading,disabled:a.checkDisable()},on:{click:function(_){return a.actionSave("saveDraft")}}},[a._v(`
      Save draft
    `)]),a._v(" "),e(g.a,{staticClass:"mr-3",attrs:{small:"",color:"green darken-1",dark:"",loading:a.loading,disabled:a.checkDisable()},on:{click:function(_){return a.actionSave("save")}}},[a._v(`
      `+a._s(a.actionName)+`

      `)])]},proxy:!0}])},[e(B.a,{attrs:{value:a.showLoading}},[e(y.a,{attrs:{indeterminate:"",size:"64"}})],1)],1)},U=[],M=t(8),n=t(7),s=t(10),r=t(12),m=t(13),D=t(2),h=t(24),G=t(63),yt=t(73),et=t(58),Ot=t(28),at=t(34),jt=t(51),nt=t(4),Pt=t(9),ot=t(27),Mt=t(33),st=t(35),Ct=t(650),rt=t(291);function Q(i,a){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);a&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),e.push.apply(e,o)}return e}function F(i){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Q(Object(e),!0).forEach(function(o){Object(D.a)(i,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Q(Object(e)).forEach(function(o){Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(e,o))})}return i}var it={name:"DialogForm",props:{url:{type:String,default:"/api/documents"},formType:{type:String,default:""},formUrl:{type:String,default:""},dialogTitle:{type:String,default:""},tableUrl:{type:String,default:""}},data:function(){return{title:this.dialogTitle,items:[{text:"Save and close",action:"saveClose"},{text:"Save and new",action:"saveNew"},{text:"Save and send",action:"saveSend"}],itemAction:[],action:[],breadcrumb:[],form:{},audits:{},defaultItem:{},dialogLoading:!1,dialog:!1,loading:!1,showLoading:!1,actionName:"Save Document",actionOnSave:"save",countRouter:-1,showDraft:!1}},activated:function(){var a=this;this.$nextTick(function(){a.$nuxt.$loading.start()}),setTimeout(function(){a.action=[],a.itemAction=[{text:"Copy",action:"copy"},{text:"Cancel",action:"canceled"},{text:"Audit History",action:"history"},{text:"Journal Entry",action:"journal"}],a.itemAction=a.appendItemAction(a.formType),a.$auth.$storage.setState("formType",a.formType),a.$refs.dialogForm.openDialog()},500)},mounted:function(){var a=this;setTimeout(function(){a.getDataFromApi()},500)},methods:{newData:function(){var a=this;this.$router.push({path:this.formUrl,query:{document:0}}),setTimeout(function(){a.getDataFromApi()},500)},close:function(){this.$emit("getDataFromApi")},checkDisable:function(){return this.form.status==="closed"||this.form.status==="canceled"},appendItemAction:function(a){return this.action=[],a==="CS"||a==="CP"?this.action=[]:this.action=this.$formatter.appendAction(a),[].concat(Object(G.a)(this.action),Object(G.a)(this.itemAction))},closeDialog:function(){this.$router.push({path:this.tableUrl})},arrowLink:function(a){var e=this;this.$axios.get(this.url+"/arrow",{params:{type:this.formType,status:a.status,document:this.$route.query.document}}).then(function(o){e.$router.push({path:e.formUrl,query:{document:o.data.id}}),setTimeout(function(){e.getDataFromApi()},300)}).catch(function(o){e.$swal({type:"error",title:"Error",text:o.response.data.message})})},getDataFromApi:function(a){var e=this;return Object(h.a)(regeneratorRuntime.mark(function o(){var c,_,p,C,R,K,j,W,V,Y;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(e.showLoading=!0,f.prev=1,c=e.formType,_=e.$route.query.copyFrom,p="",!_){f.next=11;break}return f.next=8,e.$axios.get("/api/document/copy",{params:{type:c,copyFromId:a,copyFrom:_}});case 8:p=f.sent,f.next=18;break;case 11:return C=e.$formatter.transactionList(),R=e.form.transaction_type===void 0?c:e.form.transaction_type,K=C.includes(R)?"/api/transactions":e.url,j=K+"/"+e.$route.query.document,f.next=17,e.$axios.get(j,{params:{type:c,copyFromId:a}});case 17:p=f.sent;case 18:W="",e.audits=p.data.audits,p.data.count===0?(W=p.data.form,e.actionName="Save Document"):(W=p.data.data,e.actionName="Update Document"),e.form=Object.assign({},W),e.defaultItem=Object.assign({},W),_&&(e.form.status="open",e.form.base_id=e.form.id,e.form.base_type=e.form.transaction_type,e.form.base_num=e.form.transaction_no,e.form.transaction_type=e.formType),e.form.tags&&(V=[],e.form.tags.forEach(function(X,Lt){V.push(X.name.en)}),e.form.tags=V),e.title=e.dialogTitle+" #"+e.form.transaction_no,e.$refs.dialogForm.setTitle(e.title),e.$refs.formDocument.setData(e.form),e.showLoading=!1,f.next=36;break;case 31:f.prev=31,f.t0=f.catch(1),e.showLoading=!1,Y=f.t0.response!==void 0?f.t0.response.data.message:f.t0,e.$swal({type:"error",title:"Error",text:Y});case 36:case"end":return f.stop()}},o,null,[[1,31]])}))()},actionItem:function(a){var e=this;switch(a){case"copy":this.$router.push({path:e.formUrl,query:{document:0}}),this.form.status="open",this.$refs.formDocument.setData(this.form);break;case"journal":this.$refs.ledger.openDialog("/api/transaction/ledger/"+this.form.id);break;case"closed":case"canceled":this.closeItem(this.form,a);break;default:this.$router.push({path:e.$formatter.mappingAction(a),query:{document:0,copyFrom:this.form.id}}),this.form.status="open",this.form.base_id=this.form.id,this.form.base_type=this.form.transaction_type,this.form.base_num=this.form.document_number,this.$refs.formDocument.setData(this.form);break}},closeItem:function(a,e){var o=this;this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(c){c.value&&(o.$nuxt.$loading.start(),o.$axios.put(o.url+"/"+a.id,F({updateStatus:e},a)).then(function(_){o.getDataFromApi()}).catch(function(_){o.$swal({type:"error",title:"Error",text:_.response.data.message})}).finally(function(){o.$nuxt.$loading.finish()}))})},actionDocument:function(a){var e=this,o=this.$route.query.document;switch(a){case"SQ":case"SO":case"PQ":case"PO":this.$router.push({path:"/dashboard/documents/form",query:{document:0,type:a}}),setTimeout(function(){e.actionName="Save",e.$refs.formDocument.changeValue("type",a),e.$refs.formDocument.changeValue("parent_id",o)},300);break;case"C":this.$refs.formDocument.changeValue("status","cancel"),this.store();break;case"sendEmail":this.openDialogEmail();break}},printAction:function(a){switch(a){case"preview":this.previewDocument();break;case"sendEmail":this.openDialogEmail();break;default:this.previewDocument();break}},openDialogEmail:function(){this.$refs.dialogSendEmail.openEmailDialog(this.form)},previewDocument:function(){var a=this,e=this;this.$refs.dialogForm.showLoading(),this.$axios.get("/api/document/print",{params:{id:e.form.id,type:e.form.transaction_type},responseType:"arraybuffer"}).then(function(o){a.$refs.dialogForm.finishLoading();var c=window.URL.createObjectURL(new Blob([o.data])),_=document.createElement("a");_.href=c,_.setAttribute("download",e.form.transaction_no+".pdf"),document.body.appendChild(_),_.click()}).catch(function(o){a.$refs.dialogForm.finishLoading(),a.$swal({type:"error",title:"Error",text:o.response.data.message})})},actionSave:function(a){var e=this,o=["IN","RC","CN","SR","BL","PY","DN","GN","CS","CP"];a==="save"&&o.includes(this.form.transaction_type)?this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(c){c.value&&e.save(a)}):this.save(a)},save:function(a){var e=this;this.actionOnSave=a;var o=this.$route.query.document,c=this.$formatter.transactionList(),_=c.includes(this.form.transaction_type)?"/api/transactions":this.url,p=o==="0"?_:_+"/"+o,C=o==="0"?"post":"patch",R=F(F({},this.$refs.formDocument.returnData(o)),{},{action:a}),K=this;this.loading=!0,this.showLoading=!0,this.$axios({method:C,url:p,data:R}).then(function(j){switch(e.$nuxt.$emit("snackbar",e.title+" saved!"),e.actionOnSave){case"save":case"saveDraft":e.$router.push({path:K.formUrl,query:{document:j.data.id}}),setTimeout(function(){e.getDataFromApi()},50);break;case"saveNew":e.$router.push({path:K.formUrl,query:{document:0}}),setTimeout(function(){e.getDataFromApi()},50);break;case"saveClose":e.$refs.dialogForm.closeDialog();break}}).catch(function(j){e.$swal({type:"error",title:"Error",text:j.response.data.message})}).finally(function(j){e.showLoading=!1,e.loading=!1})}}},H=it,lt=t(50),z=Object(lt.a)(H,I,U,!1,null,null,null),At=E.default=z.exports;installComponents(z,{AccountingDialogLedger:t(651).default})},598:function(J,E,t){"use strict";var g=t(7),$=t.n(g),O=t(10),x=t.n(O),P=t(12),A=t.n(P),L=t(13),B=t.n(L),y=t(2),T=t(4),I=t.n(T),U=t(34),M=t.n(U),n=t(51),s=t.n(n),r=t(28),m=t.n(r),D=t(8),h=t.n(D),G=t(21),yt=t.n(G),et=t(64),Ot=t.n(et),at=t(269),jt=t.n(at),nt=t(33),Pt=t.n(nt),ot=t(270),Mt=t.n(ot),st=t(271),Ct=t.n(st),rt=t(272),Q=t.n(rt),F=t(273),it=t.n(F),H=t(274),lt=t.n(H),z=t(275),At=t.n(z),i=t(276),a=t.n(i),e=t(277),o=t.n(e),c=t(278),_=t.n(c),p=t(279),C=t.n(p),R=t(280),K=t.n(R),j=t(281),W=t.n(j),V=t(282),Y=t.n(V),ct=t(35),f=t.n(ct),X=t(9),Lt=t.n(X),Tt=t(283),Ft=t.n(Tt),It=t(3),$t=t(77),xt=t(1);function _t(v,u){var d=Object.keys(v);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(v);u&&(l=l.filter(function(b){return Object.getOwnPropertyDescriptor(v,b).enumerable})),d.push.apply(d,l)}return d}function Z(v){for(var u=1;u<arguments.length;u++){var d=arguments[u]!=null?arguments[u]:{};u%2?_t(Object(d),!0).forEach(function(l){Object(y.a)(v,l,d[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(d)):_t(Object(d)).forEach(function(l){Object.defineProperty(v,l,Object.getOwnPropertyDescriptor(d,l))})}return v}var Bt=["sm","md","lg","xl"],w=["start","end","center"];function k(v,u){return Bt.reduce(function(d,l){return d[v+Object(xt.I)(l)]=u(),d},{})}var ut=function(u){return[].concat(w,["baseline","stretch"]).includes(u)},dt=k("align",function(){return{type:String,default:null,validator:ut}}),mt=function(u){return[].concat(w,["space-between","space-around"]).includes(u)},ft=k("justify",function(){return{type:String,default:null,validator:mt}}),vt=function(u){return[].concat(w,["space-between","space-around","stretch"]).includes(u)},pt=k("alignContent",function(){return{type:String,default:null,validator:vt}}),gt={align:Object.keys(dt),justify:Object.keys(ft),alignContent:Object.keys(pt)},Ut={align:"align",justify:"justify",alignContent:"align-content"};function Rt(v,u,d){var l=Ut[v];if(d!=null){if(u){var b=u.replace(v,"");l+="-".concat(b)}return l+="-".concat(d),l.toLowerCase()}}var Dt=new Map;E.a=It.default.extend({name:"v-row",functional:!0,props:Z(Z(Z({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ut}},dt),{},{justify:{type:String,default:null,validator:mt}},ft),{},{alignContent:{type:String,default:null,validator:vt}},pt),render:function(u,d){var l=d.props,b=d.data,Kt=d.children,q="";for(var Wt in l)q+=String(l[Wt]);var S=Dt.get(q);return S||function(){var N;S=[];var tt;for(tt in gt)gt[tt].forEach(function(ht){var St=l[ht],Et=Rt(tt,ht,St);Et&&S.push(Et)});S.push((N={"no-gutters":l.noGutters,"row--dense":l.dense},Object(y.a)(N,"align-".concat(l.align),l.align),Object(y.a)(N,"justify-".concat(l.justify),l.justify),Object(y.a)(N,"align-content-".concat(l.alignContent),l.alignContent),N)),Dt.set(q,S)}(),u(l.tag,Object($t.a)(b,{staticClass:"row",class:S}),Kt)}})},600:function(J,E,t){"use strict";t.r(E);var g=t(165),$=t(249),O=t(87),x=t(594),P=t(575),A=t(247),L=t(589),B=function(){var r=this,m=r._self._c;return m(x.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:r.original,"max-width":r.maxWidth,transition:"dialog-top-transition"},model:{value:r.dialog,callback:function(h){r.dialog=h},expression:"dialog"}},[m($.a,[m(O.c,[m("span",{staticClass:"subtitle-2"},[r._v(r._s(r.dialogTitle))]),r._v(" "),m(L.a),r._v(" "),m(g.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(h){return r.closeDialog()}}},[m(A.a,[r._v("mdi-close-circle")])],1)],1),r._v(" "),m(P.a),r._v(" "),m(O.b,{staticClass:"pr-0 pl-0"},[r._t("content")],2),r._v(" "),m(P.a),r._v(" "),m(O.a,[r._t("addLine"),r._v(" "),m(L.a),r._v(" "),r._t("saveData")],2)],1)],1)},y=[],T={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},I=T,U=t(50),M=Object(U.a)(I,B,y,!1,null,null,null),n=E.default=M.exports},651:function(J,E,t){"use strict";t.r(E);var g=t(587),$=t(585),O=t(908),x=t(598),P=function(){var n=this,s=n._self._c;return s("div",[s("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1200px","dialog-title":n.$t("Journal Entry"),"button-title":"Save",original:"top"},scopedSlots:n._u([{key:"content",fn:function(){return[s($.a,[s(x.a,[s(g.a,{staticClass:"mt-0",attrs:{cols:"12"}},[s(O.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:n.headers,items:n.allData,"items-per-page":150,options:n.options,"server-items-length":n.totalData,loading:n.loading,"show-select":"","fixed-header":"",height:"60vh","hide-default-footer":"",dense:"","footer-props":{"items-per-page-options":[150,250,500,-1]}},on:{"update:options":function(D){n.options=D}},scopedSlots:n._u([{key:"item.amount_credit",fn:function(D){var h=D.item;return[h.amount_credit?s("span",[n._v(`
                  `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(h.amount_credit))+`
                `)]):n._e()]}},{key:"item.amount_debit",fn:function(D){var h=D.item;return[h.amount_debit?s("span",[n._v(`
                  `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(h.amount_debit))+`
                `)]):n._e()]}},{key:"body.append",fn:function(){return[s("tr",{staticClass:"black--text"},[s("th",{staticClass:"title"}),n._v(" "),s("th",{staticClass:"title"}),n._v(" "),s("th",{staticClass:"title"}),n._v(" "),s("th",{staticClass:"title"}),n._v(" "),s("th",{staticClass:"title"}),n._v(" "),s("th",{staticClass:"title"}),n._v(" "),s("th",{staticClass:"text-right"},[s("strong",[n._v(`
                      `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(n.sumField("amount_debit")))+`
                    `)])]),n._v(" "),s("th",{staticClass:"text-right"},[s("strong",[n._v(`
                      `+n._s(n.$auth.user.entity.currency.currency_symbol+" "+n.$formatter.formatPrice(n.sumField("amount_credit")))+`
                    `)])])]),n._v(" "),s("tr",[s("td",[n._v("Notes: ")]),n._v(" "),s("td",{attrs:{colspan:"3"}},[s("strong",[n._v(n._s(n.transaction.narration))])])])]},proxy:!0}],null,!0)})],1)],1)],1)]},proxy:!0}])})],1)},A=[],L=t(4),B={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null,url:"",allData:[],transaction:[],totalData:0,loading:!1,options:{},headers:[{text:"Reference",value:"reference"},{text:"Posting Date",value:"posting_date"},{text:"Account Code",value:"post_account.code"},{text:"Account Category",value:"post_account.account_type"},{text:"Account Name",value:"post_account.name"},{text:"Debit",value:"amount_debit",class:"text-center",cellClass:"disable-wrap text-right"},{text:"Credit",value:"amount_credit",class:"text-center",cellClass:"disable-wrap text-right"}]}},methods:{sumField:function(n){return this.allData.reduce(function(s,r){return parseFloat(s)+parseFloat(r[n]||0)},0)},openDialog:function(n){this.$refs.dialogForm.openDialog(),this.url=n,this.getDataFromApi()},getDataFromApi:function(){var n=this;this.loading=!0,this.$axios.get(this.url).then(function(s){n.loading=!1;var r=s.data;n.allData=r.data,n.transaction=r.transaction,n.totalData=r.total}).catch(function(s){n.loading=!1,n.$swal({type:"error",title:"Error",text:s.response.data.message})})}}},y=B,T=t(50),I=Object(T.a)(y,P,A,!1,null,null,null),U=E.default=I.exports;installComponents(I,{DialogForm:t(600).default})}}]);