(window.webpackJsonp=window.webpackJsonp||[]).push([[137,18,31],{599:function(T,f,t){"use strict";var h=t(7),P=t.n(h),C=t(9),D=t.n(C),m=t(12),L=t.n(m),y=t(13),M=t.n(y),E=t(2),j=t(4),A=t.n(j),O=t(33),p=t.n(O),x=t(52),g=t.n(x),a=t(28),n=t.n(a),o=t(8),c=t.n(o),l=t(21),e=t.n(l),s=t(65),v=t.n(s),u=t(269),K=t.n(u),F=t(32),Pt=t.n(F),k=t(270),Ct=t.n(k),q=t(271),Mt=t.n(q),tt=t(272),yt=t.n(tt),et=t(273),At=t.n(et),at=t(274),xt=t.n(at),st=t(275),It=t.n(st),nt=t(276),Tt=t.n(nt),ot=t(277),Lt=t.n(ot),rt=t(278),Bt=t.n(rt),lt=t(279),Rt=t.n(lt),_t=t(280),Kt=t.n(_t),it=t(281),Wt=t.n(it),ct=t(282),Ut=t.n(ct),dt=t(34),St=t.n(dt),ut=t(10),Vt=t.n(ut),mt=t(283),$t=t.n(mt),vt=t(3),ft=t(78),Dt=t(1);function N(d,_){var i=Object.keys(d);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(d);_&&(r=r.filter(function(B){return Object.getOwnPropertyDescriptor(d,B).enumerable})),i.push.apply(i,r)}return i}function W(d){for(var _=1;_<arguments.length;_++){var i=arguments[_]!=null?arguments[_]:{};_%2?N(Object(i),!0).forEach(function(r){Object(E.a)(d,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach(function(r){Object.defineProperty(d,r,Object.getOwnPropertyDescriptor(i,r))})}return d}var Et=["sm","md","lg","xl"],U=["start","end","center"];function S(d,_){return Et.reduce(function(i,r){return i[d+Object(Dt.I)(r)]=_(),i},{})}var G=function(_){return[].concat(U,["baseline","stretch"]).includes(_)},b=S("align",function(){return{type:String,default:null,validator:G}}),z=function(_){return[].concat(U,["space-between","space-around"]).includes(_)},J=S("justify",function(){return{type:String,default:null,validator:z}}),Y=function(_){return[].concat(U,["space-between","space-around","stretch"]).includes(_)},H=S("alignContent",function(){return{type:String,default:null,validator:Y}}),Q={align:Object.keys(b),justify:Object.keys(J),alignContent:Object.keys(H)},gt={align:"align",justify:"justify",alignContent:"align-content"};function ht(d,_,i){var r=gt[d];if(i!=null){if(_){var B=_.replace(d,"");r+="-".concat(B)}return r+="-".concat(i),r.toLowerCase()}}var X=new Map;f.a=vt.default.extend({name:"v-row",functional:!0,props:W(W(W({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:G}},b),{},{justify:{type:String,default:null,validator:z}},J),{},{alignContent:{type:String,default:null,validator:Y}},H),render:function(_,i){var r=i.props,B=i.data,jt=i.children,V="";for(var Ot in r)V+=String(r[Ot]);var I=X.get(V);return I||function(){var R;I=[];var $;for($ in Q)Q[$].forEach(function(Z){var pt=r[Z],w=ht($,Z,pt);w&&I.push(w)});I.push((R={"no-gutters":r.noGutters,"row--dense":r.dense},Object(E.a)(R,"align-".concat(r.align),r.align),Object(E.a)(R,"justify-".concat(r.justify),r.justify),Object(E.a)(R,"align-content-".concat(r.alignContent),r.alignContent),R)),X.set(V,I)}(),_(r.tag,Object(ft.a)(B,{staticClass:"row",class:I}),jt)}})},600:function(T,f,t){var h=t(375),P=t(47);T.exports=function(C,D,m){return m.get&&h(m.get,D,{getter:!0}),m.set&&h(m.set,D,{setter:!0}),P.f(C,D,m)}},601:function(T,f,t){"use strict";t.r(f);var h=function(){var o=this,c=o._self._c;return c("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:o.original,"max-width":o.maxWidth,transition:"dialog-top-transition"},model:{value:o.dialog,callback:function(e){o.dialog=e},expression:"dialog"}},[c("v-card",[c("v-card-title",[c("span",{staticClass:"subtitle-2"},[o._v(o._s(o.dialogTitle))]),o._v(" "),c("v-spacer"),o._v(" "),c("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return o.closeDialog()}}},[c("v-icon",[o._v("mdi-close-circle")])],1)],1),o._v(" "),c("v-divider"),o._v(" "),c("v-card-text",{staticClass:"pr-0 pl-0"},[o._t("content")],2),o._v(" "),c("v-divider"),o._v(" "),c("v-card-actions",[o._t("addLine"),o._v(" "),c("v-spacer"),o._v(" "),o._t("saveData")],2)],1)],1)},P=[],C={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},D=C,m=t(50),L=t(51),y=t.n(L),M=t(164),E=t(248),j=t(88),A=t(595),O=t(576),p=t(247),x=t(593),g=Object(m.a)(D,h,P,!1,null,null,null),a=f.default=g.exports;y()(g,{VBtn:M.a,VCard:E.a,VCardActions:j.a,VCardText:j.b,VCardTitle:j.c,VDialog:A.a,VDivider:O.a,VIcon:p.a,VSpacer:x.a})},652:function(T,f,t){"use strict";t.r(f);var h=function(){var a=this,n=a._self._c;return n("div",[n("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1200px","dialog-title":a.$t("Journal Entry"),"button-title":"Save",original:"top"},scopedSlots:a._u([{key:"content",fn:function(){return[n("v-container",[n("v-row",[n("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[n("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:a.headers,items:a.allData,"items-per-page":150,options:a.options,"server-items-length":a.totalData,loading:a.loading,"show-select":"","fixed-header":"",height:"60vh","hide-default-footer":"",dense:"","footer-props":{"items-per-page-options":[150,250,500,-1]}},on:{"update:options":function(l){a.options=l}},scopedSlots:a._u([{key:"item.amount_credit",fn:function(l){var e=l.item;return[e.amount_credit?n("span",[a._v(`
                    `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(e.amount_credit))+`
                  `)]):a._e()]}},{key:"item.amount_debit",fn:function(l){var e=l.item;return[e.amount_debit?n("span",[a._v(`
                    `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(e.amount_debit))+`
                  `)]):a._e()]}},{key:"body.append",fn:function(){return[n("tr",{staticClass:"black--text"},[n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title text-right"},[a._v(`
                      `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(a.sumField("amount_debit")))+`
                    `)]),a._v(" "),n("th",{staticClass:"title text-right"},[a._v(`
                      `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(a.sumField("amount_credit")))+`
                    `)])]),a._v(" "),n("tr",[n("td",[a._v("Notes: ")]),a._v(" "),n("td",{attrs:{colspan:"3"}},[n("strong",[a._v(a._s(a.transaction.narration))])])])]},proxy:!0}],null,!0)})],1)],1)],1)]},proxy:!0}])})],1)},P=[],C=t(4),D={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null,url:"",allData:[],transaction:[],totalData:0,loading:!1,options:{},headers:[{text:"Reference",value:"reference"},{text:"Posting Date",value:"posting_date"},{text:"Account Code",value:"post_account.code"},{text:"Account Category",value:"post_account.account_type"},{text:"Account Name",value:"post_account.name"},{text:"Debit",value:"amount_debit",class:"text-center",cellClass:"disable-wrap text-right"},{text:"Credit",value:"amount_credit",class:"text-center",cellClass:"disable-wrap text-right"}]}},methods:{sumField:function(a){return this.allData.reduce(function(n,o){return parseFloat(n)+parseFloat(o[a]||0)},0)},openDialog:function(a){this.$refs.dialogForm.openDialog(),this.url=a,this.getDataFromApi()},getDataFromApi:function(){var a=this;this.loading=!0,this.$axios.get(this.url).then(function(n){a.loading=!1;var o=n.data;a.allData=o.data,a.transaction=o.transaction,a.totalData=o.total}).catch(function(n){a.loading=!1,a.$swal({type:"error",title:"Error",text:n.response.data.message})})}}},m=D,L=t(50),y=t(51),M=t.n(y),E=t(585),j=t(586),A=t(909),O=t(599),p=Object(L.a)(m,h,P,!1,null,null,null),x=f.default=p.exports;M()(p,{DialogForm:t(601).default}),M()(p,{VCol:E.a,VContainer:j.a,VDataTable:A.a,VRow:O.a})},956:function(T,f,t){"use strict";t.r(f);var h=t(27),P=t(21),C=t(268),D=function(){var e=this,s=e._self._c;return s("v-row",[s("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[s("div",{staticClass:"pl-4 pt-2"},[s("v-chip",{staticClass:"ma-2",attrs:{link:"",color:"primary",label:"",small:""},on:{click:function(u){return e.$router.push({path:"/app/accounting/account"})}}},[s("v-icon",{attrs:{left:""}},[e._v(" mdi-arrow-left")]),e._v(`
          All Accounts
        `)],1),e._v(" "),s("span",{staticClass:"font-weight-medium text-h6"},[e._v(e._s(e.form.name)+` account balances:
          `+e._s(e.$auth.user.entity.currency.currency_symbol+" ")+`
          `),s("strong",[e._v(e._s(e.$formatter.formatPrice(e.form.balance)))])])],1),e._v(" "),s("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:"Chart of Accounts","show-filter":"","show-batch-action":""},on:{emitData:e.emitData,newData:e.newData,getDataFromApi:e.getDataFromApi}}),e._v(" "),s("v-simple-table",{attrs:{height:"70vh",dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[e._v("Transaction No")]),e._v(" "),s("th",{staticClass:"text-left"},[e._v("Transaction Type")]),e._v(" "),s("th",{staticClass:"text-left"},[e._v("Transaction Date")]),e._v(" "),s("th",{staticClass:"text-left"},[e._v("Notes")]),e._v(" "),s("th",{staticClass:"text-left"},[e._v("Status")]),e._v(" "),s("th",{staticClass:"text-left"},[e._v("Amount")])])]),e._v(" "),s("tbody",e._l(e.allData,function(u){return s("tr",{key:u.name},[s("td",[s("a",{on:{click:function(F){return e.editItem(u)}}},[s("strong",{domProps:{textContent:e._s(u.transaction_no)}})])]),e._v(" "),s("td",[e._v(e._s(u.type))]),e._v(" "),s("td",[e._v(e._s(u.date))]),e._v(" "),s("td",[e._v(e._s(u.narration))]),e._v(" "),s("td",[s("v-chip",{attrs:{label:"",small:"",dark:"",color:e.$formatter.statusColor(u.status)}},[e._v(`
                  `+e._s(u.status)+`
                `)])],1),e._v(" "),s("td",[e._v(`
                `+e._s(e.$auth.user.entity.currency.currency_symbol+" "+e.$formatter.formatPrice(u.contribution))+`
              `)])])}),0)]},proxy:!0}])}),e._v(" "),s("LazyAccountingFormAccount",{ref:"forms",attrs:{"form-data":e.form,"form-title":e.formTitle,"button-title":e.buttonTitle,url:e.url},on:{getDataFromApi:e.getDataFromApi}}),e._v(" "),s("AccountingDialogLedger",{ref:"ledger"})],1)],1)},m=[],L=t(9),y=t(4),M={name:"ReconcileList",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},date_from:null,date_to:null,items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",url:"/api/financial/reconcile",headers:[{text:"Transaction No",value:"transaction_no",cellClass:"disable-wrap"},{text:"Transaction Type",value:"type",cellClass:"disable-wrap"},{text:"Transaction Date",value:"date",cellClass:"disable-wrap"},{text:"Notes",value:"narration",cellClass:"disable-wrap"},{text:"Status",value:"status",cellClass:"disable-wrap"},{text:"Amount",value:"contribution",cellClass:"disable-wrap",sortable:!1,filterable:!1}],title:"Chart Of Accounts"}},head:function(){return{title:this.title}},computed:{formTitle:function(){return this.editedIndex===-1?"New Account":"Edit Account"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form)},actions:function(e,s){e==="edit"?this.editItem(s):this.deleteItem(s)},editItem:function(e){this.$refs.ledger.openDialog("/api/transaction/ledger/"+e.id)},deleteItem:function(e){var s=this,v=this;this.$swal({title:"Are you sure?",text:"The data will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(u){u.value&&s.$axios.delete(v.url+"/"+e.id).then(function(K){s.$swal({type:"success",title:"Success...",text:"Row Deleted!"}),s.getDataFromApi()}).catch(function(K){s.$swal({type:"error",title:"Oops...",text:K.response.data.message})})})},emitData:function(e){this.documentStatus=e.documentStatus,this.itemSearch=e.itemSearch,this.searchStatus=e.searchStatus,this.searchItem=e.searchItem,this.search=e.search,this.filters=e.filters,this.date_from=e.date_from,this.date_to=e.date_to,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loading=!0;var s=this;this.$axios.get("/api/financial/accounts/"+this.$route.query.id,{params:{options:s.options,searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search,date_from:s.date_from,date_to:s.date_to}}).then(function(v){e.loading=!1,e.allData=v.data.transactions,e.totalData=v.data.total,e.itemSearch=v.data.filter,e.form=Object.assign({},v.data.data),e.defaultItem=Object.assign({},v.data.form)}).catch(function(v){e.loading=!1,e.$swal({type:"error",title:"Error",text:v.response.data.message})})}}},E=M,j=t(50),A=t(51),O=t.n(A),p=t(578),x=t(585),g=t(247),a=t(599),n=t(627),o=Object(j.a)(E,D,m,!1,null,null,null),c=f.default=o.exports;O()(o,{AccountingDialogLedger:t(652).default}),O()(o,{VChip:p.a,VCol:x.a,VIcon:g.a,VRow:a.a,VSimpleTable:n.a})}}]);
