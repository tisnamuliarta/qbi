(window.webpackJsonp=window.webpackJsonp||[]).push([[194,82],{598:function(T,f,e){"use strict";var u=e(7),p=e.n(u),j=e(10),E=e.n(j),m=e(12),y=e.n(m),C=e(13),v=e.n(C),c=e(2),D=e(4),F=e.n(D),V=e(34),lt=e.n(V),L=e(51),N=e.n(L),G=e(28),it=e.n(G),z=e(8),dt=e.n(z),J=e(21),Y=e.n(J),H=e(64),mt=e.n(H),I=e(269),x=e.n(I),B=e(33),Q=e.n(B),R=e(270),X=e.n(R),Z=e(271),o=e.n(Z),t=e(272),a=e.n(t),r=e(273),n=e.n(r),d=e(274),P=e.n(d),O=e(275),K=e.n(O),A=e(276),Lt=e.n(A),ct=e(277),xt=e.n(ct),ut=e(278),Bt=e.n(ut),ft=e(279),Rt=e.n(ft),Et=e(280),Kt=e.n(Et),vt=e(281),Ut=e.n(vt),Dt=e(282),Wt=e.n(Dt),Ot=e(35),St=e.n(Ot),jt=e(9),bt=e.n(jt),pt=e(283),$t=e.n(pt),Pt=e(3),ht=e(77),yt=e(1);function w(i,_){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);_&&(s=s.filter(function(M){return Object.getOwnPropertyDescriptor(i,M).enumerable})),l.push.apply(l,s)}return l}function U(i){for(var _=1;_<arguments.length;_++){var l=arguments[_]!=null?arguments[_]:{};_%2?w(Object(l),!0).forEach(function(s){Object(c.a)(i,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):w(Object(l)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(l,s))})}return i}var Mt=["sm","md","lg","xl"],W=["start","end","center"];function S(i,_){return Mt.reduce(function(l,s){return l[i+Object(yt.I)(s)]=_(),l},{})}var k=function(_){return[].concat(W,["baseline","stretch"]).includes(_)},q=S("align",function(){return{type:String,default:null,validator:k}}),tt=function(_){return[].concat(W,["space-between","space-around"]).includes(_)},et=S("justify",function(){return{type:String,default:null,validator:tt}}),at=function(_){return[].concat(W,["space-between","space-around","stretch"]).includes(_)},st=S("alignContent",function(){return{type:String,default:null,validator:at}}),nt={align:Object.keys(q),justify:Object.keys(et),alignContent:Object.keys(st)},gt={align:"align",justify:"justify",alignContent:"align-content"};function Tt(i,_,l){var s=gt[i];if(l!=null){if(_){var M=_.replace(i,"");s+="-".concat(M)}return s+="-".concat(l),s.toLowerCase()}}var ot=new Map;f.a=Pt.default.extend({name:"v-row",functional:!0,props:U(U(U({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:k}},q),{},{justify:{type:String,default:null,validator:tt}},et),{},{alignContent:{type:String,default:null,validator:at}},st),render:function(_,l){var s=l.props,M=l.data,Ct=l.children,b="";for(var It in s)b+=String(s[It]);var h=ot.get(b);return h||function(){var g;h=[];var $;for($ in nt)nt[$].forEach(function(rt){var At=s[rt],_t=Tt($,rt,At);_t&&h.push(_t)});h.push((g={"no-gutters":s.noGutters,"row--dense":s.dense},Object(c.a)(g,"align-".concat(s.align),s.align),Object(c.a)(g,"justify-".concat(s.justify),s.justify),Object(c.a)(g,"align-content-".concat(s.alignContent),s.alignContent),g)),ot.set(b,h)}(),_(s.tag,Object(ht.a)(M,{staticClass:"row",class:h}),Ct)}})},599:function(T,f,e){var u=e(375),p=e(47);T.exports=function(j,E,m){return m.get&&u(m.get,E,{getter:!0}),m.set&&u(m.set,E,{setter:!0}),p.f(j,E,m)}},766:function(T,f,e){"use strict";e.r(f);var u=e(165),p=e(577),j=e(587),E=e(908),m=e(247),y=e(248),C=e(166),v=e(31),c=e(576),D=e(598),F=e(592),V=e(21),lt=e(268),L=function(){var t=this,a=t._self._c;return a(D.a,[a(j.a,{staticClass:"mt-0",attrs:{cols:"12"}},[a(F.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{type:"table"}}),t._v(" "),a(E.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(n){t.options=n}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":"New Employee"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.first_name",fn:function(n){var d=n.item;return[a("a",{on:{click:function(O){return t.editItem(d)}}},[a("strong",{domProps:{textContent:t._s(d.first_name+" "+d.last_name)}})])]}},{key:"item.status",fn:function(n){var d=n.item;return[a(p.a,{attrs:{label:"",small:"",dark:"",color:t.statusColor(d)}},[t._v(`
          `+t._s(d.status)+`
        `)])]}},{key:"item.salary",fn:function(n){var d=n.item;return[t._v(`
        `+t._s(t.$formatter.formatPrice(d.salary))+`
      `)]}},{key:"item.payment_method",fn:function(n){var d=n.item;return[t._v(`
        `+t._s(d.payment_method===1?"Cash":"Direct Deposit")+`
      `)]}},{key:"item.actions",fn:function(n){var d=n.item;return[a(u.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(O){return t.actions("edit",d)}}},[t._v(`
          Edit
        `)]),t._v(" "),a(c.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(O){var K=O.on,A=O.attrs;return[a(u.a,t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",A,!1),K),[a(m.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a(y.a,t._l(t.items,function(P,O){return a(C.a,{key:O,on:{click:function(A){return t.actions(P.action,d)}}},[a(v.a,[a(v.c,[t._v(t._s(P.text))])],1)],1)}),1)],1)]}}],null,!0)})],1),t._v(" "),a("LazyPayrollFormEmployee",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)},N=[],G=e(8),it=e(7),z=e(12),dt=e(9),J=e(13),Y=e(2),H=e(10),mt=e(4);function I(o,t){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),a.push.apply(a,r)}return a}function x(o){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?I(Object(a),!0).forEach(function(r){Object(Y.a)(o,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(a,r))})}return o}var B={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Employee"):this.$t("Edit Employee")},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},deleteItem:function(t){var a=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then(function(r){a.getDataFromApi(),a.$nuxt.$emit("getMenu","nice payload")})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,r={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get("/api/payroll/employees",{params:x(x({},a.options),r)}).then(function(n){t.loading=!1,t.allData=n.data.data,t.totalData=n.data.total,t.itemSearch=n.data.filter,t.form=Object.assign({},n.data.form),t.defaultItem=Object.assign({},n.data.form),t.$refs.formData.setItemGender(n.data.itemGender),t.$refs.formData.setPaymentMethod(n.data.paymentMethod),t.$refs.formData.setPayFrequency(n.data.payFrequency),t.$refs.formData.setPayType(n.data.payType),t.$refs.formData.setPaySchedule(n.data.paySchedule)}).catch(function(n){t.loading=!1,t.$swal({type:"error",title:"Error",text:n.response.data.message})})}}},Q=B,R=e(50),X=Object(R.a)(Q,L,N,!1,null,null,null),Z=f.default=X.exports},980:function(T,f,e){"use strict";e.r(f);var u=function(){var c=this,D=c._self._c;return D("div",[D("PayrollTableEmployee",{ref:"tableDocument",attrs:{"type-document":"EMPLOYEE","table-title":c.$t("Employees"),"form-url":"/app/purchasereturn/form","header-table":[{text:"Name",value:"first_name",cellClass:"disable-wrap"},{text:"ID",value:"employee_id",cellClass:"disable-wrap"},{text:"Pay Rate",value:"salary",cellClass:"disable-wrap"},{text:"Pay Method",value:"payment_method",cellClass:"disable-wrap"},{text:"Phone Number",value:"mobile_phone",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},p=[],j={name:"EmployeesList",head:function(){return{title:"Employees"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var c=this;this.$nuxt.$on("getDataFromApi",function(D){return c.getDataFromApi(D)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},E=j,m=e(50),y=Object(m.a)(E,u,p,!1,null,null,null),C=f.default=y.exports;installComponents(y,{PayrollTableEmployee:e(766).default})}}]);