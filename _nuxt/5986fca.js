(window.webpackJsonp=window.webpackJsonp||[]).push([[194,82],{598:function(T,f,e){"use strict";var u=e(7),P=e.n(u),O=e(10),E=e.n(O),c=e(12),h=e.n(c),C=e(13),v=e.n(C),m=e(2),D=e(4),ot=e.n(D),V=e(34),N=e.n(V),L=e(51),rt=e.n(L),G=e(28),_t=e.n(G),z=e(8),lt=e.n(z),x=e(21),it=e.n(x),J=e(64),B=e.n(J),I=e(269),Y=e.n(I),R=e(33),H=e.n(R),K=e(270),dt=e.n(K),o=e(271),t=e.n(o),a=e(272),r=e.n(a),s=e(273),d=e.n(s),j=e(274),p=e.n(j),A=e(275),U=e.n(A),ct=e(276),Lt=e.n(ct),mt=e(277),xt=e.n(mt),ut=e(278),Bt=e.n(ut),ft=e(279),Rt=e.n(ft),Et=e(280),Kt=e.n(Et),vt=e(281),Ut=e.n(vt),Dt=e(282),Wt=e.n(Dt),Ot=e(35),St=e.n(Ot),jt=e(9),bt=e.n(jt),pt=e(283),$t=e.n(pt),Pt=e(3),yt=e(77),ht=e(1);function Q(i,_){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);_&&(n=n.filter(function(M){return Object.getOwnPropertyDescriptor(i,M).enumerable})),l.push.apply(l,n)}return l}function W(i){for(var _=1;_<arguments.length;_++){var l=arguments[_]!=null?arguments[_]:{};_%2?Q(Object(l),!0).forEach(function(n){Object(m.a)(i,n,l[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):Q(Object(l)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(l,n))})}return i}var Mt=["sm","md","lg","xl"],S=["start","end","center"];function b(i,_){return Mt.reduce(function(l,n){return l[i+Object(ht.I)(n)]=_(),l},{})}var X=function(_){return[].concat(S,["baseline","stretch"]).includes(_)},Z=b("align",function(){return{type:String,default:null,validator:X}}),w=function(_){return[].concat(S,["space-between","space-around"]).includes(_)},k=b("justify",function(){return{type:String,default:null,validator:w}}),q=function(_){return[].concat(S,["space-between","space-around","stretch"]).includes(_)},tt=b("alignContent",function(){return{type:String,default:null,validator:q}}),et={align:Object.keys(Z),justify:Object.keys(k),alignContent:Object.keys(tt)},gt={align:"align",justify:"justify",alignContent:"align-content"};function Tt(i,_,l){var n=gt[i];if(l!=null){if(_){var M=_.replace(i,"");n+="-".concat(M)}return n+="-".concat(l),n.toLowerCase()}}var at=new Map;f.a=Pt.default.extend({name:"v-row",functional:!0,props:W(W(W({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:X}},Z),{},{justify:{type:String,default:null,validator:w}},k),{},{alignContent:{type:String,default:null,validator:q}},tt),render:function(_,l){var n=l.props,M=l.data,Ct=l.children,$="";for(var It in n)$+=String(n[It]);var y=at.get($);return y||function(){var g;y=[];var F;for(F in et)et[F].forEach(function(st){var At=n[st],nt=Tt(F,st,At);nt&&y.push(nt)});y.push((g={"no-gutters":n.noGutters,"row--dense":n.dense},Object(m.a)(g,"align-".concat(n.align),n.align),Object(m.a)(g,"justify-".concat(n.justify),n.justify),Object(m.a)(g,"align-content-".concat(n.alignContent),n.alignContent),g)),at.set($,y)}(),_(n.tag,Object(yt.a)(M,{staticClass:"row",class:y}),Ct)}})},599:function(T,f,e){var u=e(376),P=e(47);T.exports=function(O,E,c){return c.get&&u(c.get,E,{getter:!0}),c.set&&u(c.set,E,{setter:!0}),P.f(O,E,c)}},766:function(T,f,e){"use strict";e.r(f);var u=e(165),P=e(577),O=e(587),E=e(908),c=e(247),h=e(248),C=e(166),v=e(31),m=e(576),D=e(598),ot=e(21),V=e(268),N=function(){var t=this,a=t._self._c;return a(D.a,[a(O.a,{staticClass:"mt-0",attrs:{cols:"12"}},[a(E.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(s){t.options=s}},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":"New Employee"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.first_name",fn:function(s){var d=s.item;return[a("a",{on:{click:function(p){return t.editItem(d)}}},[a("strong",{domProps:{textContent:t._s(d.first_name+" "+d.last_name)}})])]}},{key:"item.status",fn:function(s){var d=s.item;return[a(P.a,{attrs:{label:"",small:"",dark:"",color:t.statusColor(d)}},[t._v(`
          `+t._s(d.status)+`
        `)])]}},{key:"item.salary",fn:function(s){var d=s.item;return[t._v(`
        `+t._s(t.$formatter.formatPrice(d.salary))+`
      `)]}},{key:"item.payment_method",fn:function(s){var d=s.item;return[t._v(`
        `+t._s(d.payment_method===1?"Cash":"Direct Deposit")+`
      `)]}},{key:"item.actions",fn:function(s){var d=s.item;return[a(u.a,{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(p){return t.actions("edit",d)}}},[t._v(`
          Edit
        `)]),t._v(" "),a(m.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(p){var A=p.on,U=p.attrs;return[a(u.a,t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",U,!1),A),[a(c.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a(h.a,t._l(t.items,function(j,p){return a(C.a,{key:p,on:{click:function(U){return t.actions(j.action,d)}}},[a(v.a,[a(v.c,[t._v(t._s(j.text))])],1)],1)}),1)],1)]}}],null,!0)})],1),t._v(" "),a("LazyPayrollFormEmployee",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)},L=[],rt=e(8),G=e(7),_t=e(12),z=e(9),lt=e(13),x=e(2),it=e(10),J=e(4);function B(o,t){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),a.push.apply(a,r)}return a}function I(o){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?B(Object(a),!0).forEach(function(r){Object(x.a)(o,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(a,r))})}return o}var Y={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Employee"):this.$t("Edit Employee")},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},deleteItem:function(t){var a=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then(function(r){a.getDataFromApi(),a.$nuxt.$emit("getMenu","nice payload")})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,r={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get("/api/payroll/employees",{params:I(I({},a.options),r)}).then(function(s){t.loading=!1,t.allData=s.data.data,t.totalData=s.data.total,t.itemSearch=s.data.filter,t.form=Object.assign({},s.data.form),t.defaultItem=Object.assign({},s.data.form),t.$refs.formData.setItemGender(s.data.itemGender),t.$refs.formData.setPaymentMethod(s.data.paymentMethod),t.$refs.formData.setPayFrequency(s.data.payFrequency),t.$refs.formData.setPayType(s.data.payType),t.$refs.formData.setPaySchedule(s.data.paySchedule)}).catch(function(s){t.loading=!1,t.$swal({type:"error",title:"Error",text:s.response.data.message})})}}},R=Y,H=e(50),K=Object(H.a)(R,N,L,!1,null,null,null),dt=f.default=K.exports},980:function(T,f,e){"use strict";e.r(f);var u=function(){var m=this,D=m._self._c;return D("div",[D("PayrollTableEmployee",{ref:"tableDocument",attrs:{"type-document":"EMPLOYEE","table-title":m.$t("Employees"),"form-url":"/app/purchasereturn/form","header-table":[{text:"Name",value:"first_name",cellClass:"disable-wrap"},{text:"ID",value:"employee_id",cellClass:"disable-wrap"},{text:"Pay Rate",value:"salary",cellClass:"disable-wrap"},{text:"Pay Method",value:"payment_method",cellClass:"disable-wrap"},{text:"Phone Number",value:"mobile_phone",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},P=[],O={name:"EmployeesList",head:function(){return{title:"Employees"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var m=this;this.$nuxt.$on("getDataFromApi",function(D){return m.getDataFromApi(D)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},E=O,c=e(50),h=Object(c.a)(E,u,P,!1,null,null,null),C=f.default=h.exports;installComponents(h,{PayrollTableEmployee:e(766).default})}}]);
