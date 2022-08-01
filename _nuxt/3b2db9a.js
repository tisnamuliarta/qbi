(window.webpackJsonp=window.webpackJsonp||[]).push([[124,17,28],{598:function(t,e,n){"use strict";n(7),n(9),n(12),n(13);var o=n(2),r=(n(4),n(33),n(52),n(28),n(8),n(21),n(65),n(269),n(32),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(35),n(10),n(283),n(3)),c=n(78),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],h=["start","end","center"];function v(t,e){return m.reduce((function(n,o){return n[t+Object(l.I)(o)]=e(),n}),{})}var _=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},y=v("align",(function(){return{type:String,default:null,validator:_}})),x=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=v("justify",(function(){return{type:String,default:null,validator:x}})),D=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},C=v("alignContent",(function(){return{type:String,default:null,validator:D}})),S={align:Object.keys(y),justify:Object.keys(w),alignContent:Object.keys(C)},$={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,n){var o=$[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=r.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},y),{},{justify:{type:String,default:null,validator:x}},w),{},{alignContent:{type:String,default:null,validator:D}},C),render:function(t,e){var n=e.props,data=e.data,r=e.children,l="";for(var d in n)l+=String(n[d]);var f=k.get(l);return f||function(){var t,e;for(e in f=[],S)S[e].forEach((function(t){var o=n[t],r=j(e,t,o);r&&f.push(r)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),r)}})},599:function(t,e,n){var o=n(375),r=n(47);t.exports=function(t,e,n){return n.get&&o(n.get,e,{getter:!0}),n.set&&o(n.set,e,{setter:!0}),r.f(t,e,n)}},603:function(t,e,n){"use strict";n.r(e);var o={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=n(50),c=n(51),l=n.n(c),d=n(164),f=n(248),m=n(88),h=n(595),v=n(576),_=n(247),y=n(593),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[e("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"pr-0 pl-0"},[t._t("content")],2),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[t._t("addLine"),t._v(" "),e("v-spacer"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDialog:h.a,VDivider:v.a,VIcon:_.a,VSpacer:y.a})},664:function(t,e,n){"use strict";n.r(e);n(4);var o={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null,url:"",allData:[],transaction:[],totalData:0,loading:!1,options:{},headers:[{text:"Posting Date",value:"posting_date"},{text:"Account Code",value:"post_account.code"},{text:"Account Category",value:"post_account.account_type"},{text:"Account Name",value:"post_account.name"},{text:"Debit",value:"amount_debit",class:"text-center",cellClass:"disable-wrap text-right"},{text:"Credit",value:"amount_credit",class:"text-center",cellClass:"disable-wrap text-right"}]}},methods:{sumField:function(t){return this.allData.reduce((function(a,b){return parseFloat(a)+parseFloat(b[t]||0)}),0)},openDialog:function(t){this.$refs.dialogForm.openDialog(),this.url=t,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0,this.$axios.get(this.url).then((function(e){t.loading=!1;var data=e.data;t.allData=data.data,t.transaction=data.transaction,t.totalData=data.total})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},r=n(50),c=n(51),l=n.n(c),d=n(585),f=n(586),m=n(907),h=n(598),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1200px","dialog-title":t.$t("Journal Entry"),"button-title":"Save",original:"top"},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-container",[e("v-row",[e("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":150,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"60vh","hide-default-footer":"",dense:"","footer-props":{"items-per-page-options":[150,250,500,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.amount_credit",fn:function(n){var o=n.item;return[o.amount_credit?e("span",[t._v("\n                    "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(o.amount_credit))+"\n                  ")]):t._e()]}},{key:"item.amount_debit",fn:function(n){var o=n.item;return[o.amount_debit?e("span",[t._v("\n                    "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(o.amount_debit))+"\n                  ")]):t._e()]}},{key:"body.append",fn:function(){return[e("tr",{staticClass:"black--text"},[e("th",{staticClass:"title"}),t._v(" "),e("th",{staticClass:"title"}),t._v(" "),e("th",{staticClass:"title"}),t._v(" "),e("th",{staticClass:"title"}),t._v(" "),e("th",{staticClass:"title"}),t._v(" "),e("th",{staticClass:"title text-right"},[t._v("\n                      "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(t.sumField("amount_debit")))+"\n                    ")]),t._v(" "),e("th",{staticClass:"title text-right"},[t._v("\n                      "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(t.sumField("amount_credit")))+"\n                    ")])]),t._v(" "),e("tr",[e("td",[t._v("Notes: ")]),t._v(" "),e("td",{attrs:{colspan:"3"}},[e("strong",[t._v(t._s(t.transaction.narration))])])])]},proxy:!0}],null,!0)})],1)],1)],1)]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{DialogForm:n(603).default}),l()(component,{VCol:d.a,VContainer:f.a,VDataTable:m.a,VRow:h.a})},950:function(t,e,n){"use strict";n.r(e);n(27),n(21),n(268),n(9),n(4);var o={name:"ReconcileList",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},date_from:null,date_to:null,items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",url:"/api/financial/reconcile",headers:[{text:"Transaction No",value:"transaction_no",cellClass:"disable-wrap"},{text:"Transaction Type",value:"type",cellClass:"disable-wrap"},{text:"Transaction Date",value:"date",cellClass:"disable-wrap"},{text:"Notes",value:"narration",cellClass:"disable-wrap"},{text:"Status",value:"status",cellClass:"disable-wrap"},{text:"Amount",value:"contribution",cellClass:"disable-wrap",sortable:!1,filterable:!1}],title:"Chart Of Accounts"}},head:function(){return{title:this.title}},computed:{formTitle:function(){return-1===this.editedIndex?"New Account":"Edit Account"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form)},actions:function(t,e){"edit"===t?this.editItem(e):this.deleteItem(e)},editItem:function(t){this.$refs.ledger.openDialog("/api/transaction/ledger/"+t.id)},deleteItem:function(t){var e=this,n=this;this.$swal({title:"Are you sure?",text:"The data will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete(n.url+"/"+t.id).then((function(t){e.$swal({type:"success",title:"Success...",text:"Row Deleted!"}),e.getDataFromApi()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.date_from=data.date_from,this.date_to=data.date_to,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/financial/accounts/"+this.$route.query.id,{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,date_from:e.date_from,date_to:e.date_to}}).then((function(e){t.loading=!1,t.allData=e.data.transactions,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data),t.defaultItem=Object.assign({},e.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},r=n(50),c=n(51),l=n.n(c),d=n(164),f=n(578),m=n(585),h=n(907),v=n(247),_=n(249),y=n(165),x=n(34),w=n(577),D=n(598),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("v-row",[e("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"hide-default-footer":"","show-select":"","fixed-header":"",height:"76vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("v-chip",{staticClass:"ma-2",attrs:{link:"",color:"primary",label:"",small:""},on:{click:function(e){return t.$router.push({path:"/app/accounting/account"})}}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-arrow-left")]),t._v("\n              All Accounts\n            ")],1),t._v(" "),e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.form.name)+" account balances:\n              "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(t.form.balance)))])],1),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Chart of Accounts","show-filter":"","show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.amount",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(n.amount))+"\n        ")]}},{key:"item.contribution",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(n.contribution))+"\n        ")]}},{key:"item.transaction_no",fn:function(n){var o=n.item;return[e("a",{on:{click:function(e){return t.editItem(o)}}},[e("strong",{domProps:{textContent:t._s(o.transaction_no)}})])]}},{key:"item.status",fn:function(n){var o=n.item;return[e("v-chip",{attrs:{label:"",small:"",dark:"",color:t.$formatter.statusColor(o.status)}},[t._v("\n            "+t._s(o.status)+"\n          ")])]}},{key:"item.id",fn:function(n){var o=n.item;return[e("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(e){return t.actions(t.itemAction,o)}}},[t._v("\n            "+t._s(t.itemText)+"\n          ")]),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",r,!1),o),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.items,(function(n,i){return e("v-list-item",{key:i,on:{click:function(e){return t.actions(n.action,o)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n.text))])],1)],1)})),1)],1)]}}],null,!0)}),t._v(" "),e("LazyAccountingFormAccount",{ref:"forms",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),e("AccountingDialogLedger",{ref:"ledger"})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AccountingDialogLedger:n(664).default}),l()(component,{VBtn:d.a,VChip:f.a,VCol:m.a,VDataTable:h.a,VIcon:v.a,VList:_.a,VListItem:y.a,VListItemContent:x.a,VListItemTitle:x.c,VMenu:w.a,VRow:D.a})}}]);