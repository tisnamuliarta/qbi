(window.webpackJsonp=window.webpackJsonp||[]).push([[170,30],{1044:function(V,m,t){"use strict";t.r(m);var v=function(){var d=this,u=d.$createElement,f=d._self._c||u;return f("div",[f("DocumentTableDocument",{attrs:{"type-document":"SD"}})],1)},j=[],O={name:"SalesDelivery",head:function(){return{title:"Sales Delivery"}}},T=O,P=t(50),M=Object(P.a)(T,v,j,!1,null,null,null),h=m.default=M.exports;installComponents(M,{DocumentTableDocument:t(618).default})},595:function(V,m,t){"use strict";var v=t(7),j=t.n(v),O=t(9),T=t.n(O),P=t(12),M=t.n(P),h=t(13),d=t.n(h),u=t(1),f=t(4),$=t.n(f),I=t(33),F=t.n(I),A=t(52),N=t.n(A),L=t(27),G=t.n(L),g=t(8),b=t.n(g),R=t(21),B=t.n(R),z=t(65),e=t.n(z),s=t(266),a=t.n(s),o=t(32),i=t.n(o),c=t(267),y=t.n(c),C=t(268),yt=t.n(C),st=t(269),Ct=t.n(st),at=t(270),Tt=t.n(at),nt=t(271),It=t.n(nt),ot=t(272),At=t.n(ot),_t=t(273),Lt=t.n(_t),rt=t(274),Rt=t.n(rt),lt=t(275),Bt=t.n(lt),it=t(276),Ut=t.n(it),ct=t(277),Kt=t.n(ct),ut=t(278),Wt=t.n(ut),mt=t(279),xt=t.n(mt),dt=t(35),St=t.n(dt),ft=t(10),Vt=t.n(ft),Et=t(280),$t=t.n(Et),vt=t(2),Dt=t(78),pt=t(0);function J(l,_){var r=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);_&&(n=n.filter(function(D){return Object.getOwnPropertyDescriptor(l,D).enumerable})),r.push.apply(r,n)}return r}function U(l){for(var _=1;_<arguments.length;_++){var r=arguments[_]!=null?arguments[_]:{};_%2?J(Object(r),!0).forEach(function(n){Object(u.a)(l,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(r,n))})}return l}var jt=["sm","md","lg","xl"],K=["start","end","center"];function W(l,_){return jt.reduce(function(r,n){return r[l+Object(pt.H)(n)]=_(),r},{})}var H=function(_){return[].concat(K,["baseline","stretch"]).includes(_)},Q=W("align",function(){return{type:String,default:null,validator:H}}),X=function(_){return[].concat(K,["space-between","space-around"]).includes(_)},Y=W("justify",function(){return{type:String,default:null,validator:X}}),Z=function(_){return[].concat(K,["space-between","space-around","stretch"]).includes(_)},w=W("alignContent",function(){return{type:String,default:null,validator:Z}}),k={align:Object.keys(Q),justify:Object.keys(Y),alignContent:Object.keys(w)},Ot={align:"align",justify:"justify",alignContent:"align-content"};function Pt(l,_,r){var n=Ot[l];if(r!=null){if(_){var D=_.replace(l,"");n+="-".concat(D)}return n+="-".concat(r),n.toLowerCase()}}var q=new Map;m.a=vt.default.extend({name:"v-row",functional:!0,props:U(U(U({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:H}},Q),{},{justify:{type:String,default:null,validator:X}},Y),{},{alignContent:{type:String,default:null,validator:Z}},w),render:function(_,r){var n=r.props,D=r.data,Mt=r.children,x="";for(var ht in n)x+=String(n[ht]);var E=q.get(x);return E||function(){var p;E=[];var S;for(S in k)k[S].forEach(function(tt){var gt=n[tt],et=Pt(S,tt,gt);et&&E.push(et)});E.push((p={"no-gutters":n.noGutters,"row--dense":n.dense},Object(u.a)(p,"align-".concat(n.align),n.align),Object(u.a)(p,"justify-".concat(n.justify),n.justify),Object(u.a)(p,"align-content-".concat(n.alignContent),n.alignContent),p)),q.set(x,E)}(),_(n.tag,Object(Dt.a)(D,{staticClass:"row",class:E}),Mt)}})},618:function(V,m,t){"use strict";t.r(m);var v=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("v-row",[a("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,loading:e.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(o){e.options=o}},scopedSlots:e._u([{key:"top",fn:function(){return[a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[e._v(e._s(e.tableTitle))])]),e._v(" "),a("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:e.toolbarTitle,"button-title":e.btnTitle,"new-data-multiple-item":e.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data-multiple":"","new-data-text":"New Transactions"},on:{emitData:e.emitData,newData:e.newData,getDataFromApi:e.getDataFromApi}})]},proxy:!0},{key:"item.document_number",fn:function(o){var i=o.item;return[a("a",{on:{click:function(c){return e.editItem(i)}}},[a("strong",{domProps:{textContent:e._s(i.document_number)}})])]}},{key:"item.status",fn:function(o){var i=o.item;return[a("v-btn",{attrs:{text:"",small:""}},[a("v-icon",{attrs:{color:e.statusColor(i),left:""}},[e._v(" mdi-circle ")]),e._v(`
          `+e._s(i.status)+`
        `)],1)]}},{key:"item.balance_due",fn:function(o){var i=o.item;return[e._v(`
        `+e._s(i.currency.currency_code+" "+e.$formatter.formatPrice(i.balance_due))+`
      `)]}},{key:"item.amount",fn:function(o){var i=o.item;return[e._v(`
        `+e._s(i.currency.currency_code+" "+e.$formatter.formatPrice(i.amount))+`
      `)]}},{key:"item.actions",fn:function(o){var i=o.item;return[a("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(c){return e.actions(e.itemAction,i)}}},[e._v(`
          `+e._s(e.itemText)+`
        `)]),e._v(" "),a("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(c){var y=c.on,C=c.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",C,!1),y),[a("v-icon",[e._v("mdi-menu-down")])],1)]}}],null,!0)},[e._v(" "),a("v-list",e._l(e.items,function(c,y){return a("v-list-item",{key:y,on:{click:function(C){return e.actions(c.action,i)}}},[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(c.text))])],1)],1)}),1)],1)]}}],null,!0)})],1)],1)},j=[],O=t(21),T=t(283),P=t(9),M=t(4),h={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable}},computed:{formTitle:function(){return this.editedIndex===-1?"New "+this.typeDocument:"Edit "+ +this.typeDocument},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.mappingDocument()},mounted:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.$router.push({path:this.formUrl,query:{document:this.form.id,type:this.typeDocument}})},statusColor:function(s){switch(s.status){case"open":case"partial":return"warning";case"paid":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(s){this.$router.push({path:this.mappingAction(s.type),query:{document:s.id,type:s.type}})},mappingAction:function(s){switch(s){case"SQ":return"/app/form/sales/quote";case"SO":return"/app/form/sales/order";case"SD":return"/app/form/sales/delivery";case"SI":return"/app/form/sales/invoice";case"SP":return"/app/form/sales/payment";case"ARCM":return"/app/form/sales/creditmemo";case"SR":return"/app/form/sales/return";case"PO":return"/app/form/purchase/order";case"PI":return"/app/form/purchase/invoice";case"PP":return"/app/form/purchase/payment";case"APCM":return"/app/form/purchase/creditmemo";case"GR":return"/app/form/purchase/return"}},actions:function(s,a){s==="edit"?this.editItem(a):this.deleteItem(a)},deleteItem:function(s){var a=this;this.$axios.delete("/api/master/permissions/"+s.menu_name).then(function(o){a.getDataFromApi(),a.$nuxt.$emit("getMenu","nice payload")})},mappingDocument:function(){this.toolbarTitle=this.$helper.mapping(this.typeDocument)},emitData:function(s){this.documentStatus=s.documentStatus,this.itemSearch=s.itemSearch,this.searchStatus=s.searchStatus,this.searchItem=s.searchItem,this.search=s.search,this.filters=s.filters,this.getDataFromApi()},getDataFromApi:function(){var s=this;this.loading=!0;var a=this;this.$axios.get("/api/documents",{params:{options:a.options,searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,type:this.typeDocument}}).then(function(o){s.loading=!1,s.allData=o.data.data.rows,s.totalData=o.data.data.total,s.itemSearch=o.data.filter,s.form=Object.assign({},o.data.data.form),s.defaultItem=Object.assign({},o.data.data.form),s.company=s.$auth.$storage.getState("company")}).catch(function(o){s.loading=!1,s.$swal({type:"error",title:"Error",text:o.response.data.message})})}}},d=h,u=t(50),f=t(51),$=t.n(f),I=t(164),F=t(581),A=t(1018),N=t(246),L=t(248),G=t(165),g=t(34),b=t(573),R=t(595),B=Object(u.a)(d,v,j,!1,null,null,null),z=m.default=B.exports;$()(B,{VBtn:I.a,VCol:F.a,VDataTable:A.a,VIcon:N.a,VList:L.a,VListItem:G.a,VListItemContent:g.b,VListItemTitle:g.d,VMenu:b.a,VRow:R.a})}}]);
