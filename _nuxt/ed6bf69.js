(window.webpackJsonp=window.webpackJsonp||[]).push([[137,18,31],{598:function(y,f,e){"use strict";var D=e(7),O=e.n(D),E=e(10),g=e.n(E),u=e(12),A=e.n(u),P=e(13),x=e.n(P),h=e(2),p=e(4),M=e.n(p),I=e(34),j=e.n(I),a=e(51),n=e.n(a),o=e(28),c=e.n(o),l=e(8),t=e.n(l),s=e(21),v=e.n(s),m=e(64),B=e.n(m),$=e(269),pt=e.n($),Z=e(33),Pt=e.n(Z),w=e(270),Mt=e.n(w),k=e(271),Ct=e.n(k),q=e(272),yt=e.n(q),tt=e(273),At=e.n(tt),et=e(274),xt=e.n(et),at=e(275),It=e.n(at),st=e(276),Tt=e.n(st),nt=e(277),Lt=e.n(nt),ot=e(278),Bt=e.n(ot),rt=e(279),Rt=e.n(rt),lt=e(280),Kt=e.n(lt),_t=e(281),Wt=e.n(_t),it=e(282),Ut=e.n(it),ct=e(35),St=e.n(ct),dt=e(9),$t=e.n(dt),ut=e(283),Ft=e.n(ut),mt=e(3),vt=e(77),ft=e(1);function F(d,_){var i=Object.keys(d);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(d);_&&(r=r.filter(function(T){return Object.getOwnPropertyDescriptor(d,T).enumerable})),i.push.apply(i,r)}return i}function R(d){for(var _=1;_<arguments.length;_++){var i=arguments[_]!=null?arguments[_]:{};_%2?F(Object(i),!0).forEach(function(r){Object(h.a)(d,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(i)):F(Object(i)).forEach(function(r){Object.defineProperty(d,r,Object.getOwnPropertyDescriptor(i,r))})}return d}var Dt=["sm","md","lg","xl"],K=["start","end","center"];function W(d,_){return Dt.reduce(function(i,r){return i[d+Object(ft.I)(r)]=_(),i},{})}var V=function(_){return[].concat(K,["baseline","stretch"]).includes(_)},N=W("align",function(){return{type:String,default:null,validator:V}}),G=function(_){return[].concat(K,["space-between","space-around"]).includes(_)},b=W("justify",function(){return{type:String,default:null,validator:G}}),z=function(_){return[].concat(K,["space-between","space-around","stretch"]).includes(_)},J=W("alignContent",function(){return{type:String,default:null,validator:z}}),Y={align:Object.keys(N),justify:Object.keys(b),alignContent:Object.keys(J)},Et={align:"align",justify:"justify",alignContent:"align-content"};function gt(d,_,i){var r=Et[d];if(i!=null){if(_){var T=_.replace(d,"");r+="-".concat(T)}return r+="-".concat(i),r.toLowerCase()}}var H=new Map;f.a=mt.default.extend({name:"v-row",functional:!0,props:R(R(R({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V}},N),{},{justify:{type:String,default:null,validator:G}},b),{},{alignContent:{type:String,default:null,validator:z}},J),render:function(_,i){var r=i.props,T=i.data,ht=i.children,U="";for(var jt in r)U+=String(r[jt]);var C=H.get(U);return C||function(){var L;C=[];var S;for(S in Y)Y[S].forEach(function(Q){var Ot=r[Q],X=gt(S,Q,Ot);X&&C.push(X)});C.push((L={"no-gutters":r.noGutters,"row--dense":r.dense},Object(h.a)(L,"align-".concat(r.align),r.align),Object(h.a)(L,"justify-".concat(r.justify),r.justify),Object(h.a)(L,"align-content-".concat(r.alignContent),r.alignContent),L)),H.set(U,C)}(),_(r.tag,Object(vt.a)(T,{staticClass:"row",class:C}),ht)}})},599:function(y,f,e){var D=e(375),O=e(47);y.exports=function(E,g,u){return u.get&&D(u.get,g,{getter:!0}),u.set&&D(u.set,g,{setter:!0}),O.f(E,g,u)}},600:function(y,f,e){"use strict";e.r(f);var D=e(165),O=e(249),E=e(87),g=e(594),u=e(575),A=e(247),P=e(589),x=function(){var o=this,c=o._self._c;return c(g.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:o.original,"max-width":o.maxWidth,transition:"dialog-top-transition"},model:{value:o.dialog,callback:function(t){o.dialog=t},expression:"dialog"}},[c(O.a,[c(E.c,[c("span",{staticClass:"subtitle-2"},[o._v(o._s(o.dialogTitle))]),o._v(" "),c(P.a),o._v(" "),c(D.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(t){return o.closeDialog()}}},[c(A.a,[o._v("mdi-close-circle")])],1)],1),o._v(" "),c(u.a),o._v(" "),c(E.b,{staticClass:"pr-0 pl-0"},[o._t("content")],2),o._v(" "),c(u.a),o._v(" "),c(E.a,[o._t("addLine"),o._v(" "),c(P.a),o._v(" "),o._t("saveData")],2)],1)],1)},h=[],p={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},M=p,I=e(50),j=Object(I.a)(M,x,h,!1,null,null,null),a=f.default=j.exports},651:function(y,f,e){"use strict";e.r(f);var D=e(587),O=e(585),E=e(908),g=e(598),u=function(){var a=this,n=a._self._c;return n("div",[n("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1200px","dialog-title":a.$t("Journal Entry"),"button-title":"Save",original:"top"},scopedSlots:a._u([{key:"content",fn:function(){return[n(O.a,[n(g.a,[n(D.a,{staticClass:"mt-0",attrs:{cols:"12"}},[n(E.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:a.headers,items:a.allData,"items-per-page":150,options:a.options,"server-items-length":a.totalData,loading:a.loading,"show-select":"","fixed-header":"",height:"60vh","hide-default-footer":"",dense:"","footer-props":{"items-per-page-options":[150,250,500,-1]}},on:{"update:options":function(l){a.options=l}},scopedSlots:a._u([{key:"item.amount_credit",fn:function(l){var t=l.item;return[t.amount_credit?n("span",[a._v(`
                  `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(t.amount_credit))+`
                `)]):a._e()]}},{key:"item.amount_debit",fn:function(l){var t=l.item;return[t.amount_debit?n("span",[a._v(`
                  `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(t.amount_debit))+`
                `)]):a._e()]}},{key:"body.append",fn:function(){return[n("tr",{staticClass:"black--text"},[n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"title"}),a._v(" "),n("th",{staticClass:"text-right"},[n("strong",[a._v(`
                      `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(a.sumField("amount_debit")))+`
                    `)])]),a._v(" "),n("th",{staticClass:"text-right"},[n("strong",[a._v(`
                      `+a._s(a.$auth.user.entity.currency.currency_symbol+" "+a.$formatter.formatPrice(a.sumField("amount_credit")))+`
                    `)])])]),a._v(" "),n("tr",[n("td",[a._v("Notes: ")]),a._v(" "),n("td",{attrs:{colspan:"3"}},[n("strong",[a._v(a._s(a.transaction.narration))])])])]},proxy:!0}],null,!0)})],1)],1)],1)]},proxy:!0}])})],1)},A=[],P=e(4),x={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null,url:"",allData:[],transaction:[],totalData:0,loading:!1,options:{},headers:[{text:"Reference",value:"reference"},{text:"Posting Date",value:"posting_date"},{text:"Account Code",value:"post_account.code"},{text:"Account Category",value:"post_account.account_type"},{text:"Account Name",value:"post_account.name"},{text:"Debit",value:"amount_debit",class:"text-center",cellClass:"disable-wrap text-right"},{text:"Credit",value:"amount_credit",class:"text-center",cellClass:"disable-wrap text-right"}]}},methods:{sumField:function(a){return this.allData.reduce(function(n,o){return parseFloat(n)+parseFloat(o[a]||0)},0)},openDialog:function(a){this.$refs.dialogForm.openDialog(),this.url=a,this.getDataFromApi()},getDataFromApi:function(){var a=this;this.loading=!0,this.$axios.get(this.url).then(function(n){a.loading=!1;var o=n.data;a.allData=o.data,a.transaction=o.transaction,a.totalData=o.total}).catch(function(n){a.loading=!1,a.$swal({type:"error",title:"Error",text:n.response.data.message})})}}},h=x,p=e(50),M=Object(p.a)(h,u,A,!1,null,null,null),I=f.default=M.exports;installComponents(M,{DialogForm:e(600).default})},955:function(y,f,e){"use strict";e.r(f);var D=e(577),O=e(587),E=e(247),g=e(598),u=e(627),A=e(27),P=e(21),x=e(268),h=function(){var t=this,s=t._self._c;return s(g.a,[s(O.a,{staticClass:"mt-0",attrs:{cols:"12"}},[s("div",{staticClass:"pl-4 pt-2"},[s(D.a,{staticClass:"ma-2",attrs:{link:"",color:"primary",label:"",small:""},on:{click:function(m){return t.$router.push({path:"/app/accounting/account"})}}},[s(E.a,{attrs:{left:""}},[t._v(" mdi-arrow-left")]),t._v(`
        All Accounts
      `)],1),t._v(" "),s("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.form.name)+` account balances:
        `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
        `),s("strong",[t._v(t._s(t.$formatter.formatPrice(t.form.balance)))])])],1),t._v(" "),s("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Chart of Accounts","show-filter":"","show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}}),t._v(" "),s(u.a,{attrs:{height:"70vh",dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Transaction No")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("Transaction Type")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("Transaction Date")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("Notes")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("Status")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("Amount")])])]),t._v(" "),s("tbody",t._l(t.allData,function(m){return s("tr",{key:m.name},[s("td",[s("a",{on:{click:function($){return t.editItem(m)}}},[s("strong",{domProps:{textContent:t._s(m.transaction_no)}})])]),t._v(" "),s("td",[t._v(t._s(m.type))]),t._v(" "),s("td",[t._v(t._s(m.date))]),t._v(" "),s("td",[t._v(t._s(m.narration))]),t._v(" "),s("td",[s(D.a,{attrs:{label:"",small:"",dark:"",color:t.$formatter.statusColor(m.status)}},[t._v(`
                `+t._s(m.status)+`
              `)])],1),t._v(" "),s("td",[t._v(`
              `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(m.contribution))+`
            `)])])}),0)]},proxy:!0}])}),t._v(" "),s("LazyAccountingFormAccount",{ref:"forms",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),s("AccountingDialogLedger",{ref:"ledger"})],1)],1)},p=[],M=e(10),I=e(4),j={name:"ReconcileList",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},date_from:null,date_to:null,items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",url:"/api/financial/reconcile",headers:[{text:"Transaction No",value:"transaction_no",cellClass:"disable-wrap"},{text:"Transaction Type",value:"type",cellClass:"disable-wrap"},{text:"Transaction Date",value:"date",cellClass:"disable-wrap"},{text:"Notes",value:"narration",cellClass:"disable-wrap"},{text:"Status",value:"status",cellClass:"disable-wrap"},{text:"Amount",value:"contribution",cellClass:"disable-wrap",sortable:!1,filterable:!1}],title:"Chart Of Accounts"}},head:function(){return{title:this.title}},computed:{formTitle:function(){return this.editedIndex===-1?"New Account":"Edit Account"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form)},actions:function(t,s){t==="edit"?this.editItem(s):this.deleteItem(s)},editItem:function(t){this.$refs.ledger.openDialog("/api/transaction/ledger/"+t.id)},deleteItem:function(t){var s=this,v=this;this.$swal({title:"Are you sure?",text:"The data will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(m){m.value&&s.$axios.delete(v.url+"/"+t.id).then(function(B){s.$swal({type:"success",title:"Success...",text:"Row Deleted!"}),s.getDataFromApi()}).catch(function(B){s.$swal({type:"error",title:"Oops...",text:B.response.data.message})})})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.date_from=t.date_from,this.date_to=t.date_to,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var s=this;this.$axios.get("/api/financial/accounts/"+this.$route.query.id,{params:{options:s.options,searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search,date_from:s.date_from,date_to:s.date_to}}).then(function(v){t.loading=!1,t.allData=v.data.transactions,t.totalData=v.data.total,t.itemSearch=v.data.filter,t.form=Object.assign({},v.data.data),t.defaultItem=Object.assign({},v.data.form)}).catch(function(v){t.loading=!1,t.$swal({type:"error",title:"Error",text:v.response.data.message})})}}},a=j,n=e(50),o=Object(n.a)(a,h,p,!1,null,null,null),c=f.default=o.exports;installComponents(o,{AccountingDialogLedger:e(651).default})}}]);
