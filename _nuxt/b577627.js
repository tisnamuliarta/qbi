(window.webpackJsonp=window.webpackJsonp||[]).push([[199,85],{600:function(W,m,e){"use strict";var f=e(7),y=e.n(f),D=e(10),g=e.n(D),p=e(12),O=e.n(p),M=e(13),E=e.n(M),d=e(2),u=e(4),S=e.n(u),b=e(34),ot=e.n(b),$=e(51),rt=e.n($),F=e(28),V=e.n(F),N=e(8),lt=e.n(N),G=e(21),_t=e.n(G),z=e(64),it=e.n(z),C=e(271),A=e.n(C),I=e(33),J=e.n(I),x=e(272),Y=e.n(x),H=e(273),n=e.n(H),t=e(274),a=e.n(t),o=e(275),r=e.n(o),l=e(276),T=e.n(l),j=e(277),It=e.n(j),ct=e(278),xt=e.n(ct),dt=e(279),Lt=e.n(dt),ut=e(280),Ut=e.n(ut),mt=e(281),Bt=e.n(mt),ft=e(282),Rt=e.n(ft),Et=e(283),Kt=e.n(Et),vt=e(284),Wt=e.n(vt),Dt=e(35),St=e.n(Dt),pt=e(9),bt=e.n(pt),Ot=e(285),$t=e.n(Ot),jt=e(3),ht=e(77),Pt=e(1);function Q(c,_){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);_&&(s=s.filter(function(h){return Object.getOwnPropertyDescriptor(c,h).enumerable})),i.push.apply(i,s)}return i}function L(c){for(var _=1;_<arguments.length;_++){var i=arguments[_]!=null?arguments[_]:{};_%2?Q(Object(i),!0).forEach(function(s){Object(d.a)(c,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):Q(Object(i)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(i,s))})}return c}var yt=["sm","md","lg","xl"],U=["start","end","center"];function B(c,_){return yt.reduce(function(i,s){return i[c+Object(Pt.I)(s)]=_(),i},{})}var X=function(_){return[].concat(U,["baseline","stretch"]).includes(_)},Z=B("align",function(){return{type:String,default:null,validator:X}}),w=function(_){return[].concat(U,["space-between","space-around"]).includes(_)},k=B("justify",function(){return{type:String,default:null,validator:w}}),q=function(_){return[].concat(U,["space-between","space-around","stretch"]).includes(_)},tt=B("alignContent",function(){return{type:String,default:null,validator:q}}),et={align:Object.keys(Z),justify:Object.keys(k),alignContent:Object.keys(tt)},gt={align:"align",justify:"justify",alignContent:"align-content"};function Mt(c,_,i){var s=gt[c];if(i!=null){if(_){var h=_.replace(c,"");s+="-".concat(h)}return s+="-".concat(i),s.toLowerCase()}}var at=new Map;m.a=jt.default.extend({name:"v-row",functional:!0,props:L(L(L({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:X}},Z),{},{justify:{type:String,default:null,validator:w}},k),{},{alignContent:{type:String,default:null,validator:q}},tt),render:function(_,i){var s=i.props,h=i.data,Ct=i.children,R="";for(var Tt in s)R+=String(s[Tt]);var v=at.get(R);return v||function(){var P;v=[];var K;for(K in et)et[K].forEach(function(st){var At=s[st],nt=Mt(K,st,At);nt&&v.push(nt)});v.push((P={"no-gutters":s.noGutters,"row--dense":s.dense},Object(d.a)(P,"align-".concat(s.align),s.align),Object(d.a)(P,"justify-".concat(s.justify),s.justify),Object(d.a)(P,"align-content-".concat(s.alignContent),s.alignContent),P)),at.set(R,v)}(),_(s.tag,Object(ht.a)(h,{staticClass:"row",class:v}),Ct)}})},773:function(W,m,e){"use strict";e.r(m);var f=e(165),y=e(250),D=e(579),g=e(595),p=e(911),O=e(600),M=e(592),E=e(21),d=e(270),u=function(){var t=this,a=t._self._c;return a(O.a,[a(g.a,{staticClass:"mt-0",attrs:{cols:"12"}},[a(y.a,{attrs:{outlined:""}},[a(M.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{type:"table"}}),t._v(" "),a(p.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(r){t.options=r}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":"Run Payroll"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.transaction_no",fn:function(r){var l=r.item;return[a("a",{on:{click:function(j){return t.editItem(l)}}},[a("strong",{domProps:{textContent:t._s(l.transaction_no)}})])]}},{key:"item.status",fn:function(r){var l=r.item;return[a(D.a,{attrs:{label:"",small:"",dark:"",color:t.statusColor(l)}},[t._v(`
            `+t._s(l.status)+`
          `)])]}},{key:"item.main_account_amount",fn:function(r){var l=r.item;return[t._v(`
          `+t._s(t.$formatter.formatPrice(l.main_account_amount))+`
        `)]}},{key:"item.payment_method",fn:function(r){var l=r.item;return[t._v(`
          `+t._s(l.payment_method===1?"Cash":"Direct Deposit")+`
        `)]}},{key:"item.actions",fn:function(r){var l=r.item;return[l.status==="draft"?a(f.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(j){return t.actions("edit",l)}}},[t._v(`
            Edit
          `)]):l.status==="closed"?a(f.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(j){return t.payrollSummary(l)}}},[t._v(`
            Summary
          `)]):a(f.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(j){return t.actions("edit",l)}}},[t._v(`
            View
          `)])]}}],null,!0)})],1)],1),t._v(" "),a("LazyPayrollDialogPayrollSummary",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)},S=[],b=e(8),ot=e(7),$=e(12),rt=e(9),F=e(13),V=e(2),N=e(4),lt=e(33),G=e(35),_t=e(650),z=e(292),it=e(10);function C(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,o)}return a}function A(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?C(Object(a),!0).forEach(function(o){Object(V.a)(n,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(a,o))})}return n}var I={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Employee"):this.$t("Edit Employee")},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.$router.push({path:this.formUrl,query:{document:this.form.id}})},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(t){this.$router.push({path:this.formUrl,query:{document:t.id}})},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},deleteItem:function(t){var a=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then(function(o){a.getDataFromApi(),a.$nuxt.$emit("getMenu","nice payload")})},payrollSummary:function(t){this.$refs.formData.openDialog(t)},printDocument:function(t){var a=this;this.$nuxt.$loading.start(),this.$axios.get("/api/payroll/print/"+t.id,{params:{item:t},responseType:"arraybuffer"}).then(function(o){a.$nuxt.$loading.finish();var r=window.URL.createObjectURL(new Blob([o.data])),l=document.createElement("a");l.href=r,l.setAttribute("download",t.transaction_no+".pdf"),document.body.appendChild(l),l.click()}).catch(function(o){a.$nuxt.$loading.finish(),a.$swal({type:"error",title:"Error",text:o.response.data.message})})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,o={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$nuxt.$loading.start(),this.$axios.get("/api/payroll/payroll",{params:A(A({},a.options),o)}).then(function(r){t.loading=!1,t.allData=r.data.data,t.totalData=r.data.total,t.itemSearch=r.data.filter,t.form=Object.assign({},r.data.form),t.defaultItem=Object.assign({},r.data.form),t.$nuxt.$loading.finish()}).catch(function(r){t.loading=!1,t.$nuxt.$loading.finish(),t.$swal({type:"error",title:"Error",text:r.response.data.message})})}}},J=I,x=e(50),Y=Object(x.a)(J,u,S,!1,null,null,null),H=m.default=Y.exports},987:function(W,m,e){"use strict";e.r(m);var f=function(){var d=this,u=d._self._c;return u("div",[u("PayrollTablePayCheck",{ref:"tableDocument",attrs:{"type-document":"EMPLOYEE","table-title":d.$t("Paycheck list"),"form-url":"/app/form/payroll/pay-check","header-table":[{text:d.$t("Transaction No"),value:"transaction_no",cellClass:"disable-wrap"},{text:d.$t("Pay date"),value:"pay_date",cellClass:"disable-wrap"},{text:"From Date",value:"from_date",cellClass:"disable-wrap"},{text:"To Date",value:"to_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Created By",value:"user.name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},y=[],D={name:"EmployeesList",head:function(){return{title:"Paycheck list"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var d=this;this.$nuxt.$on("getDataFromApi",function(u){return d.getDataFromApi(u)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},g=D,p=e(50),O=Object(p.a)(g,f,y,!1,null,null,null),M=m.default=O.exports;installComponents(O,{PayrollTablePayCheck:e(773).default})}}]);
