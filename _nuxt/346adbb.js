(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{599:function(g,v,e){"use strict";var D=e(7),T=e.n(D),O=e(9),f=e.n(O),m=e(12),it=e.n(m),N=e(13),dt=e.n(N),j=e(2),I=e(4),mt=e.n(I),z=e(33),C=e.n(z),p=e(52),J=e.n(p),A=e(28),H=e.n(A),L=e(8),Q=e.n(L),B=e(21),X=e.n(B),K=e(65),Y=e.n(K),R=e(269),Z=e.n(R),U=e(32),W=e.n(U),x=e(270),w=e.n(x),h=e(271),ct=e.n(h),o=e(272),t=e.n(o),s=e(273),_=e.n(s),a=e(274),d=e.n(a),c=e(275),u=e.n(c),y=e(276),S=e.n(y),ut=e(277),Bt=e.n(ut),ft=e(278),Kt=e.n(ft),Et=e(279),Rt=e.n(Et),vt=e(280),Ut=e.n(vt),Dt=e(281),Wt=e.n(Dt),Ot=e(282),xt=e.n(Ot),jt=e(34),St=e.n(jt),Pt=e(10),Vt=e.n(Pt),Mt=e(283),$t=e.n(Mt),pt=e(3),ht=e(78),yt=e(1);function k(i,r){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);r&&(n=n.filter(function(P){return Object.getOwnPropertyDescriptor(i,P).enumerable})),l.push.apply(l,n)}return l}function V(i){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?k(Object(l),!0).forEach(function(n){Object(j.a)(i,n,l[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):k(Object(l)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(l,n))})}return i}var gt=["sm","md","lg","xl"],$=["start","end","center"];function F(i,r){return gt.reduce(function(l,n){return l[i+Object(yt.I)(n)]=r(),l},{})}var q=function(r){return[].concat($,["baseline","stretch"]).includes(r)},tt=F("align",function(){return{type:String,default:null,validator:q}}),et=function(r){return[].concat($,["space-between","space-around"]).includes(r)},st=F("justify",function(){return{type:String,default:null,validator:et}}),at=function(r){return[].concat($,["space-between","space-around","stretch"]).includes(r)},nt=F("alignContent",function(){return{type:String,default:null,validator:at}}),ot={align:Object.keys(tt),justify:Object.keys(st),alignContent:Object.keys(nt)},Tt={align:"align",justify:"justify",alignContent:"align-content"};function It(i,r,l){var n=Tt[i];if(l!=null){if(r){var P=r.replace(i,"");n+="-".concat(P)}return n+="-".concat(l),n.toLowerCase()}}var _t=new Map;v.a=pt.default.extend({name:"v-row",functional:!0,props:V(V(V({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:q}},tt),{},{justify:{type:String,default:null,validator:et}},st),{},{alignContent:{type:String,default:null,validator:at}},nt),render:function(r,l){var n=l.props,P=l.data,Ct=l.children,b="";for(var At in n)b+=String(n[At]);var E=_t.get(b);return E||function(){var M;E=[];var G;for(G in ot)ot[G].forEach(function(rt){var Lt=n[rt],lt=It(G,rt,Lt);lt&&E.push(lt)});E.push((M={"no-gutters":n.noGutters,"row--dense":n.dense},Object(j.a)(M,"align-".concat(n.align),n.align),Object(j.a)(M,"justify-".concat(n.justify),n.justify),Object(j.a)(M,"align-content-".concat(n.alignContent),n.alignContent),M)),_t.set(b,E)}(),r(n.tag,Object(ht.a)(P,{staticClass:"row",class:E}),Ct)}})},600:function(g,v,e){var D=e(375),T=e(47);g.exports=function(O,f,m){return m.get&&D(m.get,f,{getter:!0}),m.set&&D(m.set,f,{setter:!0}),T.f(O,f,m)}},767:function(g,v,e){"use strict";e.r(v);var D=e(21),T=e(268),O=function(){var t=this,s=t._self._c;return s("v-row",[s("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[s("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(a){t.options=a}},scopedSlots:t._u([{key:"top",fn:function(){return[s("div",{staticClass:"pl-4 pt-2"},[s("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),s("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":"New Employee"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.first_name",fn:function(a){var d=a.item;return[s("a",{on:{click:function(u){return t.editItem(d)}}},[s("strong",{domProps:{textContent:t._s(d.first_name+" "+d.last_name)}})])]}},{key:"item.status",fn:function(a){var d=a.item;return[s("v-chip",{attrs:{label:"",small:"",dark:"",color:t.statusColor(d)}},[t._v(`
            `+t._s(d.status)+`
          `)])]}},{key:"item.salary",fn:function(a){var d=a.item;return[t._v(`
          `+t._s(t.$formatter.formatPrice(d.salary))+`
        `)]}},{key:"item.payment_method",fn:function(a){var d=a.item;return[t._v(`
          `+t._s(d.payment_method===1?"Cash":"Direct Deposit")+`
        `)]}},{key:"item.actions",fn:function(a){var d=a.item;return[s("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(u){return t.actions("edit",d)}}},[t._v(`
            Edit
          `)]),t._v(" "),s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(u){var y=u.on,S=u.attrs;return[s("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",S,!1),y),[s("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),s("v-list",t._l(t.items,function(c,u){return s("v-list-item",{key:u,on:{click:function(S){return t.actions(c.action,d)}}},[s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(c.text))])],1)],1)}),1)],1)]}}],null,!0)})],1),t._v(" "),s("LazyPayrollFormEmployee",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)},f=[],m=e(8),it=e(7),N=e(12),dt=e(10),j=e(13),I=e(2),mt=e(9),z=e(4);function C(o,t){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(o);t&&(_=_.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),s.push.apply(s,_)}return s}function p(o){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?C(Object(s),!0).forEach(function(_){Object(I.a)(o,_,s[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):C(Object(s)).forEach(function(_){Object.defineProperty(o,_,Object.getOwnPropertyDescriptor(s,_))})}return o}var J={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable,dateFrom:null,dateTo:null}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Employee"):this.$t("Edit Employee")},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},actions:function(t,s){t==="edit"?this.editItem(s):this.deleteItem(s)},deleteItem:function(t){var s=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then(function(_){s.getDataFromApi(),s.$nuxt.$emit("getMenu","nice payload")})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var s=this,_={searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search,type:this.typeDocument,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get("/api/payroll/employees",{params:p(p({},s.options),_)}).then(function(a){t.loading=!1,t.allData=a.data.data,t.totalData=a.data.total,t.itemSearch=a.data.filter,t.form=Object.assign({},a.data.form),t.defaultItem=Object.assign({},a.data.form),t.$refs.formData.setItemGender(a.data.itemGender),t.$refs.formData.setPaymentMethod(a.data.paymentMethod),t.$refs.formData.setPayFrequency(a.data.payFrequency),t.$refs.formData.setPayType(a.data.payType),t.$refs.formData.setPaySchedule(a.data.paySchedule)}).catch(function(a){t.loading=!1,t.$swal({type:"error",title:"Error",text:a.response.data.message})})}}},A=J,H=e(50),L=e(51),Q=e.n(L),B=e(164),X=e(578),K=e(585),Y=e(909),R=e(247),Z=e(249),U=e(165),W=e(35),x=e(577),w=e(599),h=Object(H.a)(A,O,f,!1,null,null,null),ct=v.default=h.exports;Q()(h,{VBtn:B.a,VChip:X.a,VCol:K.a,VDataTable:Y.a,VIcon:R.a,VList:Z.a,VListItem:U.a,VListItemContent:W.a,VListItemTitle:W.c,VMenu:x.a,VRow:w.a})}}]);