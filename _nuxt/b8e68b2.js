(window.webpackJsonp=window.webpackJsonp||[]).push([[195,83],{599:function(y,m,e){"use strict";var E=e(7),h=e.n(E),D=e(9),f=e.n(D),u=e(12),C=e.n(u),A=e(13),P=e.n(A),i=e(2),v=e(4),dt=e.n(v),Y=e(33),x=e.n(Y),I=e(52),H=e.n(I),B=e(28),Q=e.n(B),R=e(8),X=e.n(R),U=e(21),Z=e.n(U),K=e(65),w=e.n(K),W=e(269),k=e.n(W),S=e(32),$=e.n(S),b=e(270),q=e.n(b),T=e(271),ut=e.n(T),o=e(272),t=e.n(o),a=e(273),r=e.n(a),n=e(274),d=e.n(n),O=e(275),j=e.n(O),L=e(276),V=e.n(L),mt=e(277),xt=e.n(mt),ft=e(278),Bt=e.n(ft),vt=e(279),Rt=e.n(vt),Et=e(280),Ut=e.n(Et),Dt=e(281),Kt=e.n(Dt),Ot=e(282),Wt=e.n(Ot),jt=e(34),St=e.n(jt),Pt=e(10),$t=e.n(Pt),pt=e(283),bt=e.n(pt),ht=e(3),Mt=e(78),gt=e(1);function tt(c,l){var _=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);l&&(s=s.filter(function(M){return Object.getOwnPropertyDescriptor(c,M).enumerable})),_.push.apply(_,s)}return _}function F(c){for(var l=1;l<arguments.length;l++){var _=arguments[l]!=null?arguments[l]:{};l%2?tt(Object(_),!0).forEach(function(s){Object(i.a)(c,s,_[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(_)):tt(Object(_)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(_,s))})}return c}var yt=["sm","md","lg","xl"],N=["start","end","center"];function G(c,l){return yt.reduce(function(_,s){return _[c+Object(gt.I)(s)]=l(),_},{})}var et=function(l){return[].concat(N,["baseline","stretch"]).includes(l)},at=G("align",function(){return{type:String,default:null,validator:et}}),st=function(l){return[].concat(N,["space-between","space-around"]).includes(l)},nt=G("justify",function(){return{type:String,default:null,validator:st}}),ot=function(l){return[].concat(N,["space-between","space-around","stretch"]).includes(l)},rt=G("alignContent",function(){return{type:String,default:null,validator:ot}}),lt={align:Object.keys(at),justify:Object.keys(nt),alignContent:Object.keys(rt)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function It(c,l,_){var s=Ct[c];if(_!=null){if(l){var M=l.replace(c,"");s+="-".concat(M)}return s+="-".concat(_),s.toLowerCase()}}var _t=new Map;m.a=ht.default.extend({name:"v-row",functional:!0,props:F(F(F({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:et}},at),{},{justify:{type:String,default:null,validator:st}},nt),{},{alignContent:{type:String,default:null,validator:ot}},rt),render:function(l,_){var s=_.props,M=_.data,Tt=_.children,z="";for(var Lt in s)z+=String(s[Lt]);var p=_t.get(z);return p||function(){var g;p=[];var J;for(J in lt)lt[J].forEach(function(it){var At=s[it],ct=It(J,it,At);ct&&p.push(ct)});p.push((g={"no-gutters":s.noGutters,"row--dense":s.dense},Object(i.a)(g,"align-".concat(s.align),s.align),Object(i.a)(g,"justify-".concat(s.justify),s.justify),Object(i.a)(g,"align-content-".concat(s.alignContent),s.alignContent),g)),_t.set(z,p)}(),l(s.tag,Object(Mt.a)(M,{staticClass:"row",class:p}),Tt)}})},600:function(y,m,e){var E=e(375),h=e(47);y.exports=function(D,f,u){return u.get&&E(u.get,f,{getter:!0}),u.set&&E(u.set,f,{setter:!0}),h.f(D,f,u)}},768:function(y,m,e){"use strict";e.r(m);var E=e(21),h=e(268),D=function(){var t=this,a=t._self._c;return a("v-row",[a("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(n){t.options=n}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":t.$t("New Loans")},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.first_name",fn:function(n){var d=n.item;return[a("a",{on:{click:function(j){return t.editItem(d)}}},[a("strong",{domProps:{textContent:t._s(d.first_name+" "+d.last_name)}})])]}},{key:"item.status",fn:function(n){var d=n.item;return[a("v-chip",{attrs:{label:"",small:"",dark:"",color:t.statusColor(d)}},[t._v(`
            `+t._s(d.status)+`
          `)])]}},{key:"item.amount",fn:function(n){var d=n.item;return[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(d.amount))+`
        `)]}},{key:"item.payment_method",fn:function(n){var d=n.item;return[t._v(`
          `+t._s(d.payment_method===1?"Cash":"Direct Deposit")+`
        `)]}},{key:"item.actions",fn:function(n){var d=n.item;return[a("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(j){return t.actions("edit",d)}}},[t._v(`
            Edit
          `)]),t._v(" "),a("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(j){var L=j.on,V=j.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",V,!1),L),[a("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a("v-list",t._l(t.items,function(O,j){return a("v-list-item",{key:j,on:{click:function(V){return t.actions(O.action,d)}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(O.text))])],1)],1)}),1)],1)]}}],null,!0)})],1),t._v(" "),a("LazyPayrollFormLoan",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),a("LazyPayrollDialogLoanInstallment",{ref:"dialogLoan",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)},f=[],u=e(8),C=e(7),A=e(12),P=e(10),i=e(13),v=e(2),dt=e(4),Y=e(9);function x(o,t){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),a.push.apply(a,r)}return a}function I(o){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?x(Object(a),!0).forEach(function(r){Object(v.a)(o,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(a,r))})}return o}var H={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Loan"},items:{type:Array,default:function(){return[{text:this.$t("Loan Installment"),action:"installment"},{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null,url:"/api/payroll/loan"}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Loans"):this.$t("Edit Loans")},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},actions:function(t,a){t==="edit"?this.editItem(a):t==="installment"?this.$refs.dialogLoan.openDialog(a):this.deleteItem(a)},deleteItem:function(t){var a=this;this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(r){r.value&&(a.$nuxt.$loading.start(),a.$axios.delete(a.url+"/"+t.id).then(function(n){a.getDataFromApi()}).catch(function(n){a.$swal({type:"error",title:"Error",text:n.response.data.message})}).finally(function(){a.$nuxt.$loading.finish()}))})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,r={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get(this.url,{params:I(I({},a.options),r)}).then(function(n){t.loading=!1,t.allData=n.data.data,t.totalData=n.data.total,t.itemSearch=n.data.filter,t.form=Object.assign({},n.data.form),t.defaultItem=Object.assign({},n.data.form),t.$refs.formData.setItemEmployee(n.data.employee)}).catch(function(n){t.loading=!1,t.$swal({type:"error",title:"Error",text:n.response.data.message})})}}},B=H,Q=e(50),R=e(51),X=e.n(R),U=e(164),Z=e(578),K=e(585),w=e(909),W=e(247),k=e(249),S=e(165),$=e(35),b=e(577),q=e(599),T=Object(Q.a)(B,D,f,!1,null,null,null),ut=m.default=T.exports;X()(T,{VBtn:U.a,VChip:Z.a,VCol:K.a,VDataTable:w.a,VIcon:W.a,VList:k.a,VListItem:S.a,VListItemContent:$.a,VListItemTitle:$.c,VMenu:b.a,VRow:q.a})},982:function(y,m,e){"use strict";e.r(m);var E=function(){var i=this,v=i._self._c;return v("div",[v("PayrollTableLoan",{ref:"tableDocument",attrs:{"type-document":"EMPLOYEE","table-title":i.$t("Loans"),"form-url":"/app/purchasereturn/form","header-table":[{text:i.$t("Employees"),value:"employee.full_name",cellClass:"disable-wrap"},{text:i.$t("Loan Request Date"),value:"transaction_date",cellClass:"disable-wrap"},{text:i.$t("Amount"),value:"amount",cellClass:"disable-wrap"},{text:i.$t("Installment Amount"),value:"installment_amount",cellClass:"disable-wrap"},{text:i.$t("Installment Start Date"),value:"installment_start_date",cellClass:"disable-wrap"},{text:i.$t("Loan Type"),value:"loan_type",cellClass:"disable-wrap"},{text:i.$t("Notes"),value:"narration",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},h=[],D={name:"EmployeesList",head:function(){return{title:"Loan"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var i=this;this.$nuxt.$on("getDataFromApi",function(v){return i.getDataFromApi(v)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},f=D,u=e(50),C=Object(u.a)(f,E,h,!1,null,null,null),A=m.default=C.exports;installComponents(C,{PayrollTableLoan:e(768).default})}}]);