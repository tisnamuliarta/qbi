(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{599:function(y,v,e){"use strict";var D=e(7),I=e.n(D),O=e(9),f=e.n(O),c=e(12),it=e.n(c),G=e(13),dt=e.n(G),j=e(2),T=e(4),ct=e.n(T),z=e(33),C=e.n(z),M=e(52),J=e.n(M),L=e(28),H=e.n(L),A=e(8),Q=e.n(A),B=e(21),X=e.n(B),U=e(65),Y=e.n(U),K=e(269),Z=e.n(K),R=e(32),x=e.n(R),W=e(270),w=e.n(W),p=e(271),mt=e.n(p),o=e(272),t=e.n(o),s=e(273),r=e.n(s),n=e(274),d=e.n(n),m=e(275),u=e.n(m),g=e(276),S=e.n(g),ut=e(277),Bt=e.n(ut),ft=e(278),Ut=e.n(ft),Et=e(279),Kt=e.n(Et),vt=e(280),Rt=e.n(vt),Dt=e(281),xt=e.n(Dt),Ot=e(282),Wt=e.n(Ot),jt=e(34),St=e.n(jt),Pt=e(10),Vt=e.n(Pt),ht=e(283),$t=e.n(ht),Mt=e(3),pt=e(78),gt=e(1);function k(i,_){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);_&&(a=a.filter(function(P){return Object.getOwnPropertyDescriptor(i,P).enumerable})),l.push.apply(l,a)}return l}function V(i){for(var _=1;_<arguments.length;_++){var l=arguments[_]!=null?arguments[_]:{};_%2?k(Object(l),!0).forEach(function(a){Object(j.a)(i,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):k(Object(l)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(l,a))})}return i}var yt=["sm","md","lg","xl"],$=["start","end","center"];function F(i,_){return yt.reduce(function(l,a){return l[i+Object(gt.I)(a)]=_(),l},{})}var q=function(_){return[].concat($,["baseline","stretch"]).includes(_)},tt=F("align",function(){return{type:String,default:null,validator:q}}),et=function(_){return[].concat($,["space-between","space-around"]).includes(_)},st=F("justify",function(){return{type:String,default:null,validator:et}}),at=function(_){return[].concat($,["space-between","space-around","stretch"]).includes(_)},nt=F("alignContent",function(){return{type:String,default:null,validator:at}}),ot={align:Object.keys(tt),justify:Object.keys(st),alignContent:Object.keys(nt)},It={align:"align",justify:"justify",alignContent:"align-content"};function Tt(i,_,l){var a=It[i];if(l!=null){if(_){var P=_.replace(i,"");a+="-".concat(P)}return a+="-".concat(l),a.toLowerCase()}}var rt=new Map;v.a=Mt.default.extend({name:"v-row",functional:!0,props:V(V(V({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:q}},tt),{},{justify:{type:String,default:null,validator:et}},st),{},{alignContent:{type:String,default:null,validator:at}},nt),render:function(_,l){var a=l.props,P=l.data,Ct=l.children,b="";for(var Lt in a)b+=String(a[Lt]);var E=rt.get(b);return E||function(){var h;E=[];var N;for(N in ot)ot[N].forEach(function(_t){var At=a[_t],lt=Tt(N,_t,At);lt&&E.push(lt)});E.push((h={"no-gutters":a.noGutters,"row--dense":a.dense},Object(j.a)(h,"align-".concat(a.align),a.align),Object(j.a)(h,"justify-".concat(a.justify),a.justify),Object(j.a)(h,"align-content-".concat(a.alignContent),a.alignContent),h)),rt.set(b,E)}(),_(a.tag,Object(pt.a)(P,{staticClass:"row",class:E}),Ct)}})},600:function(y,v,e){var D=e(375),I=e(47);y.exports=function(O,f,c){return c.get&&D(c.get,f,{getter:!0}),c.set&&D(c.set,f,{setter:!0}),I.f(O,f,c)}},768:function(y,v,e){"use strict";e.r(v);var D=e(21),I=e(268),O=function(){var t=this,s=t._self._c;return s("v-row",[s("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[s("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(n){t.options=n}},scopedSlots:t._u([{key:"top",fn:function(){return[s("div",{staticClass:"pl-4 pt-2"},[s("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),s("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":t.$t("New Loans")},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.first_name",fn:function(n){var d=n.item;return[s("a",{on:{click:function(u){return t.editItem(d)}}},[s("strong",{domProps:{textContent:t._s(d.first_name+" "+d.last_name)}})])]}},{key:"item.status",fn:function(n){var d=n.item;return[s("v-chip",{attrs:{label:"",small:"",dark:"",color:t.statusColor(d)}},[t._v(`
            `+t._s(d.status)+`
          `)])]}},{key:"item.amount",fn:function(n){var d=n.item;return[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(d.amount))+`
        `)]}},{key:"item.payment_method",fn:function(n){var d=n.item;return[t._v(`
          `+t._s(d.payment_method===1?"Cash":"Direct Deposit")+`
        `)]}},{key:"item.actions",fn:function(n){var d=n.item;return[s("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(u){return t.actions("edit",d)}}},[t._v(`
            Edit
          `)]),t._v(" "),s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(u){var g=u.on,S=u.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",S,!1),g),[s("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),s("v-list",t._l(t.items,function(m,u){return s("v-list-item",{key:u,on:{click:function(S){return t.actions(m.action,d)}}},[s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(m.text))])],1)],1)}),1)],1)]}}],null,!0)})],1),t._v(" "),s("LazyPayrollFormLoan",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}}),t._v(" "),s("LazyPayrollDialogLoanInstallment",{ref:"dialogLoan",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)},f=[],c=e(8),it=e(7),G=e(12),dt=e(10),j=e(13),T=e(2),ct=e(4),z=e(9);function C(o,t){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),s.push.apply(s,r)}return s}function M(o){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?C(Object(s),!0).forEach(function(r){Object(T.a)(o,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):C(Object(s)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(s,r))})}return o}var J={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Loan"},items:{type:Array,default:function(){return[{text:this.$t("Loan Installment"),action:"installment"},{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null,url:"/api/payroll/loan"}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Loans"):this.$t("Edit Loans")},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},actions:function(t,s){t==="edit"?this.editItem(s):t==="installment"?this.$refs.dialogLoan.openDialog(s):this.deleteItem(s)},deleteItem:function(t){var s=this;this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(r){r.value&&(s.$nuxt.$loading.start(),s.$axios.delete(s.url+"/"+t.id).then(function(n){s.getDataFromApi()}).catch(function(n){s.$swal({type:"error",title:"Error",text:n.response.data.message})}).finally(function(){s.$nuxt.$loading.finish()}))})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var s=this,r={searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get(this.url,{params:M(M({},s.options),r)}).then(function(n){t.loading=!1,t.allData=n.data.data,t.totalData=n.data.total,t.itemSearch=n.data.filter,t.form=Object.assign({},n.data.form),t.defaultItem=Object.assign({},n.data.form),t.$refs.formData.setItemEmployee(n.data.employee)}).catch(function(n){t.loading=!1,t.$swal({type:"error",title:"Error",text:n.response.data.message})})}}},L=J,H=e(50),A=e(51),Q=e.n(A),B=e(164),X=e(578),U=e(585),Y=e(909),K=e(247),Z=e(249),R=e(165),x=e(35),W=e(577),w=e(599),p=Object(H.a)(L,O,f,!1,null,null,null),mt=v.default=p.exports;Q()(p,{VBtn:B.a,VChip:X.a,VCol:U.a,VDataTable:Y.a,VIcon:K.a,VList:Z.a,VListItem:R.a,VListItemContent:x.a,VListItemTitle:x.c,VMenu:W.a,VRow:w.a})}}]);
