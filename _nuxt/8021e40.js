(window.webpackJsonp=window.webpackJsonp||[]).push([[196,83],{600:function(C,f,e){"use strict";var u=e(7),P=e.n(u),D=e(10),E=e.n(D),m=e(12),y=e.n(m),T=e(13),O=e.n(T),c=e(2),v=e(4),N=e.n(v),x=e(34),lt=e.n(x),G=e(51),z=e.n(G),L=e(28),_t=e.n(L),J=e(8),it=e.n(J),Y=e(21),dt=e.n(Y),B=e(64),ct=e.n(B),H=e(271),R=e.n(H),I=e(33),Q=e.n(I),K=e(272),X=e.n(K),U=e(273),mt=e.n(U),o=e(274),t=e.n(o),a=e(275),r=e.n(a),s=e(276),d=e.n(s),j=e(277),p=e.n(j),A=e(278),W=e.n(A),ut=e(279),Lt=e.n(ut),ft=e(280),Bt=e.n(ft),Et=e(281),Rt=e.n(Et),vt=e(282),Kt=e.n(vt),Dt=e(283),Ut=e.n(Dt),Ot=e(284),Wt=e.n(Ot),jt=e(35),St=e.n(jt),pt=e(9),$t=e.n(pt),Pt=e(285),bt=e.n(Pt),ht=e(3),yt=e(77),Mt=e(1);function Z(i,l){var _=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);l&&(n=n.filter(function(M){return Object.getOwnPropertyDescriptor(i,M).enumerable})),_.push.apply(_,n)}return _}function S(i){for(var l=1;l<arguments.length;l++){var _=arguments[l]!=null?arguments[l]:{};l%2?Z(Object(_),!0).forEach(function(n){Object(c.a)(i,n,_[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(_)):Z(Object(_)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(_,n))})}return i}var gt=["sm","md","lg","xl"],$=["start","end","center"];function b(i,l){return gt.reduce(function(_,n){return _[i+Object(Mt.I)(n)]=l(),_},{})}var w=function(l){return[].concat($,["baseline","stretch"]).includes(l)},k=b("align",function(){return{type:String,default:null,validator:w}}),q=function(l){return[].concat($,["space-between","space-around"]).includes(l)},tt=b("justify",function(){return{type:String,default:null,validator:q}}),et=function(l){return[].concat($,["space-between","space-around","stretch"]).includes(l)},at=b("alignContent",function(){return{type:String,default:null,validator:et}}),st={align:Object.keys(k),justify:Object.keys(tt),alignContent:Object.keys(at)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function Tt(i,l,_){var n=Ct[i];if(_!=null){if(l){var M=l.replace(i,"");n+="-".concat(M)}return n+="-".concat(_),n.toLowerCase()}}var nt=new Map;f.a=ht.default.extend({name:"v-row",functional:!0,props:S(S(S({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:w}},k),{},{justify:{type:String,default:null,validator:q}},tt),{},{alignContent:{type:String,default:null,validator:et}},at),render:function(l,_){var n=_.props,M=_.data,It=_.children,F="";for(var At in n)F+=String(n[At]);var h=nt.get(F);return h||function(){var g;h=[];var V;for(V in st)st[V].forEach(function(ot){var xt=n[ot],rt=Tt(V,ot,xt);rt&&h.push(rt)});h.push((g={"no-gutters":n.noGutters,"row--dense":n.dense},Object(c.a)(g,"align-".concat(n.align),n.align),Object(c.a)(g,"justify-".concat(n.justify),n.justify),Object(c.a)(g,"align-content-".concat(n.alignContent),n.alignContent),g)),nt.set(F,h)}(),l(n.tag,Object(yt.a)(M,{staticClass:"row",class:h}),It)}})},601:function(C,f,e){var u=e(378),P=e(47);C.exports=function(D,E,m){return m.get&&u(m.get,E,{getter:!0}),m.set&&u(m.set,E,{setter:!0}),P.f(D,E,m)}},768:function(C,f,e){"use strict";e.r(f);var u=e(165),P=e(250),D=e(579),E=e(595),m=e(911),y=e(248),T=e(249),O=e(166),c=e(31),v=e(578),N=e(600),x=e(592),lt=e(21),G=e(270),z=function(){var t=this,a=t._self._c;return a(N.a,[a(E.a,{staticClass:"mt-0",attrs:{cols:"12"}},[a(P.a,{attrs:{outlined:""}},[a(x.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{type:"table"}}),t._v(" "),a(m.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(s){t.options=s}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":"New Employee"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.first_name",fn:function(s){var d=s.item;return[a("a",{on:{click:function(p){return t.editItem(d)}}},[a("strong",{domProps:{textContent:t._s(d.first_name+" "+d.last_name)}})])]}},{key:"item.status",fn:function(s){var d=s.item;return[a(D.a,{attrs:{label:"",small:"",dark:"",color:t.statusColor(d)}},[t._v(`
            `+t._s(d.status)+`
          `)])]}},{key:"item.salary",fn:function(s){var d=s.item;return[t._v(`
          `+t._s(t.$formatter.formatPrice(d.salary))+`
        `)]}},{key:"item.payment_method",fn:function(s){var d=s.item;return[t._v(`
          `+t._s(d.payment_method===1?"Cash":"Direct Deposit")+`
        `)]}},{key:"item.actions",fn:function(s){var d=s.item;return[a(u.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(p){return t.actions("edit",d)}}},[t._v(`
            Edit
          `)]),t._v(" "),a(v.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(p){var A=p.on,W=p.attrs;return[a(u.a,t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",W,!1),A),[a(y.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a(T.a,t._l(t.items,function(j,p){return a(O.a,{key:p,on:{click:function(W){return t.actions(j.action,d)}}},[a(c.b,[a(c.d,[t._v(t._s(j.text))])],1)],1)}),1)],1)]}}],null,!0)})],1)],1),t._v(" "),a("LazyPayrollFormEmployee",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)},L=[],_t=e(8),J=e(7),it=e(12),Y=e(9),dt=e(13),B=e(2),ct=e(4),H=e(10);function R(o,t){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),a.push.apply(a,r)}return a}function I(o){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?R(Object(a),!0).forEach(function(r){Object(B.a)(o,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(a,r))})}return o}var Q={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null,url:"/api/payroll/employees"}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Employee"):this.$t("Edit Employee")},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},deleteItem:function(t){var a=this;this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(r){r.value&&(a.$nuxt.$loading.start(),a.$axios.delete(a.url+"/"+t.id).then(function(s){a.getDataFromApi()}).catch(function(s){a.$swal({type:"error",title:"Error",text:s.response.data.message})}).finally(function(){a.$nuxt.$loading.finish()}))})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,r={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get(this.url,{params:I(I({},a.options),r)}).then(function(s){t.loading=!1,t.allData=s.data.data,t.totalData=s.data.total,t.itemSearch=s.data.filter,t.form=Object.assign({},s.data.form),t.defaultItem=Object.assign({},s.data.form),t.$refs.formData.setItemGender(s.data.itemGender),t.$refs.formData.setPaymentMethod(s.data.paymentMethod),t.$refs.formData.setPayFrequency(s.data.payFrequency),t.$refs.formData.setPayType(s.data.payType),t.$refs.formData.setPaySchedule(s.data.paySchedule)}).catch(function(s){t.loading=!1,t.$swal({type:"error",title:"Error",text:s.response.data.message})})}}},K=Q,X=e(50),U=Object(X.a)(K,z,L,!1,null,null,null),mt=f.default=U.exports},984:function(C,f,e){"use strict";e.r(f);var u=function(){var c=this,v=c._self._c;return v("div",[v("PayrollTableEmployee",{ref:"tableDocument",attrs:{"type-document":"EMPLOYEE","table-title":c.$t("Employees"),"form-url":"/app/purchasereturn/form","header-table":[{text:"Name",value:"first_name",cellClass:"disable-wrap"},{text:"ID",value:"employee_id",cellClass:"disable-wrap"},{text:"Pay Rate",value:"salary",cellClass:"disable-wrap"},{text:"Pay Method",value:"payment_method",cellClass:"disable-wrap"},{text:"Phone Number",value:"mobile_phone",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},P=[],D={name:"EmployeesList",head:function(){return{title:"Employees"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var c=this;this.$nuxt.$on("getDataFromApi",function(v){return c.getDataFromApi(v)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},E=D,m=e(50),y=Object(m.a)(E,u,P,!1,null,null,null),T=f.default=y.exports;installComponents(y,{PayrollTableEmployee:e(768).default})}}]);