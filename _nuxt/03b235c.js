(window.webpackJsonp=window.webpackJsonp||[]).push([[2,18,31],{598:function(U,D,t){"use strict";var p=t(7),C=t.n(p),g=t(10),E=t.n(g),v=t(12),A=t.n(v),T=t(13),x=t.n(T),j=t(2),I=t(4),L=t.n(I),R=t(34),P=t.n(R),a=t(51),s=t.n(a),r=t(28),m=t.n(r),O=t(8),y=t.n(O),V=t(21),_t=t.n(V),Y=t(64),N=t.n(Y),K=t(269),Z=t.n(K),G=t(33),w=t.n(G),S=t(270),ct=t.n(S),l=t(271),e=t.n(l),n=t(272),i=t.n(n),o=t(273),c=t.n(o),M=t(274),h=t.n(M),b=t(275),F=t.n(b),ut=t(276),At=t.n(ut),dt=t(277),Lt=t.n(dt),mt=t(278),Bt=t.n(mt),ft=t(279),Ut=t.n(ft),vt=t(280),Rt=t.n(vt),pt=t(281),Kt=t.n(pt),Dt=t(282),Wt=t.n(Dt),gt=t(35),$t=t.n(gt),ht=t(9),St=t.n(ht),Et=t(283),bt=t.n(Et),jt=t(3),Ot=t(77),yt=t(1);function k(f,u){var d=Object.keys(f);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(f);u&&(_=_.filter(function(W){return Object.getOwnPropertyDescriptor(f,W).enumerable})),d.push.apply(d,_)}return d}function z(f){for(var u=1;u<arguments.length;u++){var d=arguments[u]!=null?arguments[u]:{};u%2?k(Object(d),!0).forEach(function(_){Object(j.a)(f,_,d[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(d)):k(Object(d)).forEach(function(_){Object.defineProperty(f,_,Object.getOwnPropertyDescriptor(d,_))})}return f}var Pt=["sm","md","lg","xl"],J=["start","end","center"];function H(f,u){return Pt.reduce(function(d,_){return d[f+Object(yt.I)(_)]=u(),d},{})}var q=function(u){return[].concat(J,["baseline","stretch"]).includes(u)},tt=H("align",function(){return{type:String,default:null,validator:q}}),et=function(u){return[].concat(J,["space-between","space-around"]).includes(u)},at=H("justify",function(){return{type:String,default:null,validator:et}}),nt=function(u){return[].concat(J,["space-between","space-around","stretch"]).includes(u)},st=H("alignContent",function(){return{type:String,default:null,validator:nt}}),ot={align:Object.keys(tt),justify:Object.keys(at),alignContent:Object.keys(st)},Mt={align:"align",justify:"justify",alignContent:"align-content"};function Ct(f,u,d){var _=Mt[f];if(d!=null){if(u){var W=u.replace(f,"");_+="-".concat(W)}return _+="-".concat(d),_.toLowerCase()}}var rt=new Map;D.a=jt.default.extend({name:"v-row",functional:!0,props:z(z(z({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:q}},tt),{},{justify:{type:String,default:null,validator:et}},at),{},{alignContent:{type:String,default:null,validator:nt}},st),render:function(u,d){var _=d.props,W=d.data,Tt=d.children,Q="";for(var xt in _)Q+=String(_[xt]);var B=rt.get(Q);return B||function(){var $;B=[];var X;for(X in ot)ot[X].forEach(function(it){var It=_[it],lt=Ct(X,it,It);lt&&B.push(lt)});B.push(($={"no-gutters":_.noGutters,"row--dense":_.dense},Object(j.a)($,"align-".concat(_.align),_.align),Object(j.a)($,"justify-".concat(_.justify),_.justify),Object(j.a)($,"align-content-".concat(_.alignContent),_.alignContent),$)),rt.set(Q,B)}(),u(_.tag,Object(Ot.a)(W,{staticClass:"row",class:B}),Tt)}})},599:function(U,D,t){var p=t(376),C=t(47);U.exports=function(g,E,v){return v.get&&p(v.get,E,{getter:!0}),v.set&&p(v.set,E,{setter:!0}),C.f(g,E,v)}},600:function(U,D,t){"use strict";t.r(D);var p=t(165),C=t(249),g=t(88),E=t(594),v=t(575),A=t(247),T=t(589),x=function(){var r=this,m=r._self._c;return m(E.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:r.original,"max-width":r.maxWidth,transition:"dialog-top-transition"},model:{value:r.dialog,callback:function(y){r.dialog=y},expression:"dialog"}},[m(C.a,[m(g.c,[m("span",{staticClass:"subtitle-2"},[r._v(r._s(r.dialogTitle))]),r._v(" "),m(T.a),r._v(" "),m(p.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(y){return r.closeDialog()}}},[m(A.a,[r._v("mdi-close-circle")])],1)],1),r._v(" "),m(v.a),r._v(" "),m(g.b,{staticClass:"pr-0 pl-0"},[r._t("content")],2),r._v(" "),m(v.a),r._v(" "),m(g.a,[r._t("addLine"),r._v(" "),m(T.a),r._v(" "),r._t("saveData")],2)],1)],1)},j=[],I={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},L=I,R=t(50),P=Object(R.a)(L,x,j,!1,null,null,null),a=D.default=P.exports},626:function(U,D,t){"use strict";t.r(D);var p=t(165),C=t(577),g=t(587),E=t(908),v=t(247),A=t(248),T=t(166),x=t(31),j=t(576),I=t(598),L=t(21),R=t(268),P=function(){var e=this,n=e._self._c;return n(I.a,[n(g.a,{staticClass:"mt-0",attrs:{cols:"12"}},[n(E.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,loading:e.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(o){e.options=o}},scopedSlots:e._u([{key:"top",fn:function(){return[n("div",{staticClass:"pl-4 pt-2"},[n("span",{staticClass:"font-weight-medium text-h6"},[e._v(e._s(e.tableTitle))])]),e._v(" "),n("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:e.toolbarTitle,"button-title":e.btnTitle,"new-data-multiple-item":e.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data-multiple":"","new-data-text":"New Transactions"},on:{emitData:e.emitData,newData:e.newData,getDataFromApi:e.getDataFromApi}})]},proxy:!0},{key:"item.document_number",fn:function(o){var c=o.item;return[n("a",{on:{click:function(h){return e.editItem(c)}}},[n("strong",{domProps:{textContent:e._s(c.document_number)}})])]}},{key:"item.transaction_no",fn:function(o){var c=o.item;return[n("a",{on:{click:function(h){return e.editItem(c)}}},[n("strong",{domProps:{textContent:e._s(c.transaction_no)}})])]}},{key:"item.status",fn:function(o){var c=o.item;return[n(C.a,{attrs:{label:"",small:"",dark:"",color:e.$formatter.statusColor(c.status)}},[e._v(`
          `+e._s(c.status)+`
        `)])]}},{key:"item.balance_due",fn:function(o){var c=o.item;return[e._v(`
        `+e._s(e.$auth.user.entity.currency.currency_symbol+" "+e.$formatter.formatPrice(c.balance_due))+`
      `)]}},{key:"item.amount",fn:function(o){var c=o.item;return[e._v(`
        `+e._s(e.$auth.user.entity.currency.currency_symbol+" "+e.$formatter.formatPrice(c.amount))+`
      `)]}},{key:"item.main_account_amount",fn:function(o){var c=o.item;return[e._v(`
        `+e._s(e.$auth.user.entity.currency.currency_symbol+" "+e.$formatter.formatPrice(c.main_account_amount))+`
      `)]}},{key:"item.actions",fn:function(o){var c=o.item;return[c.status==="open"||c.status==="draft"?n(p.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(h){return h.stopPropagation(),e.actions("edit",c)}}},[e._v(`
          Edit
        `)]):e._e(),e._v(" "),c.status==="closed"||c.status==="canceled"?n(p.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(h){return h.stopPropagation(),e.actions("view",c)}}},[e._v(`
          View
        `)]):e._e(),e._v(" "),n(j.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(h){var b=h.on,F=h.attrs;return[n(p.a,e._g(e._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",F,!1),b),[n(v.a,[e._v("mdi-menu-down")])],1)]}}],null,!0)},[e._v(" "),n(A.a,e._l(e.items,function(M,h){return n(T.a,{key:h,on:{click:function(F){return F.stopPropagation(),e.actions(M.action,c)}}},[n(x.a,[n(x.c,[e._v(e._s(M.text))])],1)],1)}),1)],1)]}}],null,!0)}),e._v(" "),n("AccountingDialogLedger",{ref:"ledger"})],1)],1)},a=[],s=t(8),r=t(7),m=t(12),O=t(9),y=t(13),V=t(2),_t=t(4),Y=t(10);function N(l,e){var n=Object.keys(l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(l,o).enumerable})),n.push.apply(n,i)}return n}function K(l){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N(Object(n),!0).forEach(function(i){Object(V.a)(l,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(i){Object.defineProperty(l,i,Object.getOwnPropertyDescriptor(n,i))})}return l}var Z={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},tableUrl:{type:String,default:"/api/documents"},items:{type:Array,default:function(){return[{text:"Closed",action:"closed"},{text:"Cancel",action:"canceled"},{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null}},computed:{formTitle:function(){return this.editedIndex===-1?"New "+this.typeDocument:"Edit "+ +this.typeDocument},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.mappingDocument()},mounted:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.$router.push({path:this.formUrl,query:{document:this.form.id}})},editItem:function(e){e.transaction_type==="JN"?this.$refs.ledger.openDialog("/api/transaction/ledger/"+e.id):(this.$auth.$storage.setState("basePath",this.$route.path),this.$router.push({path:this.$formatter.mappingAction(e.transaction_type),query:{document:e.id}}))},actions:function(e,n){switch(e){case"edit":case"view":this.editItem(n);break;case"delete":this.deleteItem(n);break;case"closed":case"canceled":this.closeItem(n,e);break}},deleteItem:function(e){var n=this;this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(i){i.value&&(n.$nuxt.$loading.start(),n.$axios.delete(n.tableUrl+"/"+e.id).then(function(o){n.getDataFromApi()}).catch(function(o){n.$swal({type:"error",title:"Error",text:o.response.data.message})}).finally(function(){n.$nuxt.$loading.finish()}))})},closeItem:function(e,n){var i=this;this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(o){o.value&&(i.$nuxt.$loading.start(),i.$axios.put(i.tableUrl+"/"+e.id,K({updateStatus:n},e)).then(function(c){i.getDataFromApi()}).catch(function(c){i.$swal({type:"error",title:"Error",text:c.response.data.message})}).finally(function(){i.$nuxt.$loading.finish()}))})},mappingDocument:function(){this.toolbarTitle=this.$helper.mapping(this.typeDocument)},emitData:function(e){this.documentStatus=e.documentStatus,this.itemSearch=e.itemSearch,this.searchStatus=e.searchStatus,this.searchItem=e.searchItem,this.search=e.search,this.filters=e.filters,this.dateFrom=e.dateFrom,this.dateTo=e.dateTo,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loading=!0;var n=this,i={searchItem:n.searchItem,documentStatus:n.documentStatus,searchStatus:n.searchStatus,search:n.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get(this.tableUrl,{params:K(K({},n.options),i)}).then(function(o){e.loading=!1,e.allData=o.data.data,e.totalData=o.data.total,e.itemSearch=o.data.filter,e.form=Object.assign({},o.data.form),e.defaultItem=Object.assign({},o.data.form),e.company=e.$auth.$storage.getState("company")}).catch(function(o){e.loading=!1,e.$swal({type:"error",title:"Error",text:o.response.data.message})})}}},G=Z,w=t(50),S=Object(w.a)(G,P,a,!1,null,null,null),ct=D.default=S.exports;installComponents(S,{AccountingDialogLedger:t(651).default})},651:function(U,D,t){"use strict";t.r(D);var p=t(587),C=t(585),g=t(908),E=t(598),v=function(){var a=this,s=a._self._c;return s("div",[s("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1200px","dialog-title":a.$t("Journal Entry"),"button-title":"Save",original:"top"},scopedSlots:a._u([{key:"content",fn:function(){return[s(C.a,[s(E.a,[s(p.a,{staticClass:"mt-0",attrs:{cols:"12"}},[s(g.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:a.headers,items:a.allData,"items-per-page":150,options:a.options,"server-items-length":a.totalData,loading:a.loading,"show-select":"","fixed-header":"",height:"60vh","hide-default-footer":"",dense:"","footer-props":{"items-per-page-options":[150,250,500,-1]}},on:{"update:options":function(O){a.options=O}},scopedSlots:a._u([{key:"item.amount_credit",fn:function(O){var y=O.item;return[y.amount_credit?s("span",[a._v(`
                  `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(y.amount_credit))+`
                `)]):a._e()]}},{key:"item.amount_debit",fn:function(O){var y=O.item;return[y.amount_debit?s("span",[a._v(`
                  `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(y.amount_debit))+`
                `)]):a._e()]}},{key:"body.append",fn:function(){return[s("tr",{staticClass:"black--text"},[s("th",{staticClass:"title"}),a._v(" "),s("th",{staticClass:"title"}),a._v(" "),s("th",{staticClass:"title"}),a._v(" "),s("th",{staticClass:"title"}),a._v(" "),s("th",{staticClass:"title"}),a._v(" "),s("th",{staticClass:"title"}),a._v(" "),s("th",{staticClass:"title text-right"},[a._v(`
                    `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(a.sumField("amount_debit")))+`
                  `)]),a._v(" "),s("th",{staticClass:"title text-right"},[a._v(`
                    `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(a.sumField("amount_credit")))+`
                  `)])]),a._v(" "),s("tr",[s("td",[a._v("Notes: ")]),a._v(" "),s("td",{attrs:{colspan:"3"}},[s("strong",[a._v(a._s(a.transaction.narration))])])])]},proxy:!0}],null,!0)})],1)],1)],1)]},proxy:!0}])})],1)},A=[],T=t(4),x={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null,url:"",allData:[],transaction:[],totalData:0,loading:!1,options:{},headers:[{text:"Reference",value:"reference"},{text:"Posting Date",value:"posting_date"},{text:"Account Code",value:"post_account.code"},{text:"Account Category",value:"post_account.account_type"},{text:"Account Name",value:"post_account.name"},{text:"Debit",value:"amount_debit",class:"text-center",cellClass:"disable-wrap text-right"},{text:"Credit",value:"amount_credit",class:"text-center",cellClass:"disable-wrap text-right"}]}},methods:{sumField:function(a){return this.allData.reduce(function(s,r){return parseFloat(s)+parseFloat(r[a]||0)},0)},openDialog:function(a){this.$refs.dialogForm.openDialog(),this.url=a,this.getDataFromApi()},getDataFromApi:function(){var a=this;this.loading=!0,this.$axios.get(this.url).then(function(s){a.loading=!1;var r=s.data;a.allData=r.data,a.transaction=r.transaction,a.totalData=r.total}).catch(function(s){a.loading=!1,a.$swal({type:"error",title:"Error",text:s.response.data.message})})}}},j=x,I=t(50),L=Object(I.a)(j,v,A,!1,null,null,null),R=D.default=L.exports;installComponents(L,{DialogForm:t(600).default})}}]);