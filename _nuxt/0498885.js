(window.webpackJsonp=window.webpackJsonp||[]).push([[198,84],{598:function(S,m,e){"use strict";var f=e(7),y=e.n(f),D=e(10),g=e.n(D),p=e(12),O=e.n(p),T=e(13),E=e.n(T),d=e(2),u=e(4),at=e.n(u),b=e(34),st=e.n(b),$=e(51),nt=e.n($),A=e(28),ot=e.n(A),F=e(8),rt=e.n(F),V=e(21),_t=e.n(V),N=e(64),I=e.n(N),M=e(269),G=e.n(M),x=e(33),z=e.n(x),L=e(270),lt=e.n(L),s=e(271),t=e.n(s),a=e(272),r=e.n(a),o=e(273),_=e.n(o),j=e(274),C=e.n(j),it=e(275),It=e.n(it),ct=e(276),xt=e.n(ct),dt=e(277),Lt=e.n(dt),ut=e(278),Ut=e.n(ut),mt=e(279),Bt=e.n(mt),ft=e(280),Rt=e.n(ft),Et=e(281),Kt=e.n(Et),vt=e(282),Wt=e.n(vt),Dt=e(35),St=e.n(Dt),pt=e(9),bt=e.n(pt),Ot=e(283),$t=e.n(Ot),jt=e(3),ht=e(77),Pt=e(1);function J(c,l){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);l&&(n=n.filter(function(h){return Object.getOwnPropertyDescriptor(c,h).enumerable})),i.push.apply(i,n)}return i}function U(c){for(var l=1;l<arguments.length;l++){var i=arguments[l]!=null?arguments[l]:{};l%2?J(Object(i),!0).forEach(function(n){Object(d.a)(c,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):J(Object(i)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(i,n))})}return c}var yt=["sm","md","lg","xl"],B=["start","end","center"];function R(c,l){return yt.reduce(function(i,n){return i[c+Object(Pt.I)(n)]=l(),i},{})}var Y=function(l){return[].concat(B,["baseline","stretch"]).includes(l)},H=R("align",function(){return{type:String,default:null,validator:Y}}),Q=function(l){return[].concat(B,["space-between","space-around"]).includes(l)},X=R("justify",function(){return{type:String,default:null,validator:Q}}),Z=function(l){return[].concat(B,["space-between","space-around","stretch"]).includes(l)},w=R("alignContent",function(){return{type:String,default:null,validator:Z}}),k={align:Object.keys(H),justify:Object.keys(X),alignContent:Object.keys(w)},gt={align:"align",justify:"justify",alignContent:"align-content"};function Mt(c,l,i){var n=gt[c];if(i!=null){if(l){var h=l.replace(c,"");n+="-".concat(h)}return n+="-".concat(i),n.toLowerCase()}}var q=new Map;m.a=jt.default.extend({name:"v-row",functional:!0,props:U(U(U({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Y}},H),{},{justify:{type:String,default:null,validator:Q}},X),{},{alignContent:{type:String,default:null,validator:Z}},w),render:function(l,i){var n=i.props,h=i.data,Ct=i.children,K="";for(var Tt in n)K+=String(n[Tt]);var v=q.get(K);return v||function(){var P;v=[];var W;for(W in k)k[W].forEach(function(tt){var At=n[tt],et=Mt(W,tt,At);et&&v.push(et)});v.push((P={"no-gutters":n.noGutters,"row--dense":n.dense},Object(d.a)(P,"align-".concat(n.align),n.align),Object(d.a)(P,"justify-".concat(n.justify),n.justify),Object(d.a)(P,"align-content-".concat(n.alignContent),n.alignContent),P)),q.set(K,v)}(),l(n.tag,Object(ht.a)(h,{staticClass:"row",class:v}),Ct)}})},768:function(S,m,e){"use strict";e.r(m);var f=e(165),y=e(577),D=e(587),g=e(908),p=e(598),O=e(592),T=e(21),E=e(268),d=function(){var t=this,a=t._self._c;return a(p.a,[a(D.a,{staticClass:"mt-0",attrs:{cols:"12"}},[a(O.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{type:"table"}}),t._v(" "),a(g.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(o){t.options=o}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":"Run Payroll"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.transaction_no",fn:function(o){var _=o.item;return[a("a",{on:{click:function(C){return t.editItem(_)}}},[a("strong",{domProps:{textContent:t._s(_.transaction_no)}})])]}},{key:"item.status",fn:function(o){var _=o.item;return[a(y.a,{attrs:{label:"",small:"",dark:"",color:t.statusColor(_)}},[t._v(`
          `+t._s(_.status)+`
        `)])]}},{key:"item.main_account_amount",fn:function(o){var _=o.item;return[t._v(`
        `+t._s(t.$formatter.formatPrice(_.main_account_amount))+`
      `)]}},{key:"item.payment_method",fn:function(o){var _=o.item;return[t._v(`
        `+t._s(_.payment_method===1?"Cash":"Direct Deposit")+`
      `)]}},{key:"item.actions",fn:function(o){var _=o.item;return[_.status==="draft"?a(f.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(C){return t.actions("edit",_)}}},[t._v(`
          Edit
        `)]):_.status==="closed"?a(f.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(C){return t.payrollSummary(_)}}},[t._v(`
          Summary
        `)]):a(f.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(C){return t.actions("edit",_)}}},[t._v(`
          View
        `)])]}}],null,!0)})],1),t._v(" "),a("LazyPayrollDialogPayrollSummary",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)},u=[],at=e(8),b=e(7),st=e(12),$=e(9),nt=e(13),A=e(2),ot=e(4),F=e(33),rt=e(35),V=e(648),_t=e(290),N=e(10);function I(s,t){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable})),a.push.apply(a,r)}return a}function M(s){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?I(Object(a),!0).forEach(function(r){Object(A.a)(s,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(a,r))})}return s}var G={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Employee"):this.$t("Edit Employee")},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.$router.push({path:this.formUrl,query:{document:this.form.id}})},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(t){this.$router.push({path:this.formUrl,query:{document:t.id}})},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},deleteItem:function(t){var a=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then(function(r){a.getDataFromApi(),a.$nuxt.$emit("getMenu","nice payload")})},payrollSummary:function(t){this.$refs.formData.openDialog(t)},printDocument:function(t){var a=this;this.$nuxt.$loading.start(),this.$axios.get("/api/payroll/print/"+t.id,{params:{item:t},responseType:"arraybuffer"}).then(function(r){a.$nuxt.$loading.finish();var o=window.URL.createObjectURL(new Blob([r.data])),_=document.createElement("a");_.href=o,_.setAttribute("download",t.transaction_no+".pdf"),document.body.appendChild(_),_.click()}).catch(function(r){a.$nuxt.$loading.finish(),a.$swal({type:"error",title:"Error",text:r.response.data.message})})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,r={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$nuxt.$loading.start(),this.$axios.get("/api/payroll/payroll",{params:M(M({},a.options),r)}).then(function(o){t.loading=!1,t.allData=o.data.data,t.totalData=o.data.total,t.itemSearch=o.data.filter,t.form=Object.assign({},o.data.form),t.defaultItem=Object.assign({},o.data.form),t.$nuxt.$loading.finish()}).catch(function(o){t.loading=!1,t.$nuxt.$loading.finish(),t.$swal({type:"error",title:"Error",text:o.response.data.message})})}}},x=G,z=e(50),L=Object(z.a)(x,d,u,!1,null,null,null),lt=m.default=L.exports},984:function(S,m,e){"use strict";e.r(m);var f=function(){var d=this,u=d._self._c;return u("div",[u("PayrollTablePayCheck",{ref:"tableDocument",attrs:{"type-document":"EMPLOYEE","table-title":d.$t("Paycheck list"),"form-url":"/app/form/payroll/pay-check","header-table":[{text:d.$t("Transaction No"),value:"transaction_no",cellClass:"disable-wrap"},{text:d.$t("Pay date"),value:"pay_date",cellClass:"disable-wrap"},{text:"From Date",value:"from_date",cellClass:"disable-wrap"},{text:"To Date",value:"to_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Created By",value:"user.name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},y=[],D={name:"EmployeesList",head:function(){return{title:"Paycheck list"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var d=this;this.$nuxt.$on("getDataFromApi",function(u){return d.getDataFromApi(u)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},g=D,p=e(50),O=Object(p.a)(g,f,y,!1,null,null,null),T=m.default=O.exports;installComponents(O,{PayrollTablePayCheck:e(768).default})}}]);