(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{599:function(g,E,e){"use strict";var p=e(7),C=e.n(p),O=e(9),f=e.n(O),d=e(12),it=e.n(d),G=e(13),ct=e.n(G),j=e(2),I=e(4),ut=e.n(I),z=e(33),T=e.n(z),D=e(52),J=e.n(D),A=e(28),Q=e.n(A),L=e(8),Y=e.n(L),B=e(21),H=e.n(B),U=e(65),X=e.n(U),R=e(269),Z=e.n(R),x=e(32),K=e.n(x),W=e(270),w=e.n(W),M=e(271),mt=e.n(M),s=e(272),t=e.n(s),n=e(273),o=e.n(n),a=e(274),_=e.n(a),u=e(275),m=e.n(u),y=e(276),S=e.n(y),dt=e(277),Bt=e.n(dt),ft=e(278),Ut=e.n(ft),vt=e(279),Rt=e.n(vt),Et=e(280),xt=e.n(Et),pt=e(281),Kt=e.n(pt),Ot=e(282),Wt=e.n(Ot),jt=e(34),St=e.n(jt),Dt=e(10),Vt=e.n(Dt),ht=e(283),$t=e.n(ht),Pt=e(3),Mt=e(78),yt=e(1);function k(c,l){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);l&&(r=r.filter(function(h){return Object.getOwnPropertyDescriptor(c,h).enumerable})),i.push.apply(i,r)}return i}function V(c){for(var l=1;l<arguments.length;l++){var i=arguments[l]!=null?arguments[l]:{};l%2?k(Object(i),!0).forEach(function(r){Object(j.a)(c,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(i,r))})}return c}var gt=["sm","md","lg","xl"],$=["start","end","center"];function b(c,l){return gt.reduce(function(i,r){return i[c+Object(yt.I)(r)]=l(),i},{})}var q=function(l){return[].concat($,["baseline","stretch"]).includes(l)},tt=b("align",function(){return{type:String,default:null,validator:q}}),et=function(l){return[].concat($,["space-between","space-around"]).includes(l)},nt=b("justify",function(){return{type:String,default:null,validator:et}}),st=function(l){return[].concat($,["space-between","space-around","stretch"]).includes(l)},at=b("alignContent",function(){return{type:String,default:null,validator:st}}),ot={align:Object.keys(tt),justify:Object.keys(nt),alignContent:Object.keys(at)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function It(c,l,i){var r=Ct[c];if(i!=null){if(l){var h=l.replace(c,"");r+="-".concat(h)}return r+="-".concat(i),r.toLowerCase()}}var rt=new Map;E.a=Pt.default.extend({name:"v-row",functional:!0,props:V(V(V({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:q}},tt),{},{justify:{type:String,default:null,validator:et}},nt),{},{alignContent:{type:String,default:null,validator:st}},at),render:function(l,i){var r=i.props,h=i.data,Tt=i.children,N="";for(var At in r)N+=String(r[At]);var v=rt.get(N);return v||function(){var P;v=[];var F;for(F in ot)ot[F].forEach(function(_t){var Lt=r[_t],lt=It(F,_t,Lt);lt&&v.push(lt)});v.push((P={"no-gutters":r.noGutters,"row--dense":r.dense},Object(j.a)(P,"align-".concat(r.align),r.align),Object(j.a)(P,"justify-".concat(r.justify),r.justify),Object(j.a)(P,"align-content-".concat(r.alignContent),r.alignContent),P)),rt.set(N,v)}(),l(r.tag,Object(Mt.a)(h,{staticClass:"row",class:v}),Tt)}})},600:function(g,E,e){var p=e(375),C=e(47);g.exports=function(O,f,d){return d.get&&p(d.get,f,{getter:!0}),d.set&&p(d.set,f,{setter:!0}),C.f(O,f,d)}},764:function(g,E,e){"use strict";e.r(E);var p=e(21),C=e(268),O=function(){var t=this,n=t._self._c;return n("v-row",[n("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[n("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(a){t.options=a}},scopedSlots:t._u([{key:"top",fn:function(){return[n("div",{staticClass:"pl-4 pt-2"},[n("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),n("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"show-batch-action":"","show-filter":"","show-new-data-multiple":t.showNewBtn},on:{emitData:t.emitData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.document_number",fn:function(a){var _=a.item;return[n("a",{on:{click:function(m){return t.editItem(_)}}},[n("strong",{domProps:{textContent:t._s(_.document_number)}})])]}},{key:"item.transaction_no",fn:function(a){var _=a.item;return[n("a",{on:{click:function(m){return t.editItem(_)}}},[n("strong",{domProps:{textContent:t._s(_.transaction_no)}})])]}},{key:"item.status",fn:function(a){var _=a.item;return[n("v-chip",{attrs:{label:"",small:"",dark:"",color:t.statusColor(_)}},[t._v(`
            `+t._s(_.status)+`
          `)])]}},{key:"item.balance_due",fn:function(a){var _=a.item;return[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(_.balance_due))+`
        `)]}},{key:"item.amount",fn:function(a){var _=a.item;return[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(_.amount))+`
        `)]}},{key:"item.main_account_amount",fn:function(a){var _=a.item;return[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(_.main_account_amount))+`
        `)]}},{key:"item.actions",fn:function(a){var _=a.item;return[_.status==="open"?n("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(m){return t.actions("edit",_)}}},[t._v(`
            Edit
          `)]):t._e(),t._v(" "),_.status==="closed"||_.status==="canceled"?n("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(m){return t.actions("view",_)}}},[t._v(`
            View
          `)]):t._e(),t._v(" "),n("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(m){var y=m.on,S=m.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",S,!1),y),[n("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),n("v-list",t._l(t.items,function(u,m){return n("v-list-item",{key:m,on:{click:function(S){return t.actions(u.action,_)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(u.text))])],1)],1)}),1)],1)]}}],null,!0)})],1)],1)},f=[],d=e(8),it=e(7),G=e(12),ct=e(10),j=e(13),I=e(2),ut=e(4),z=e(9);function T(s,t){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,o)}return n}function D(s){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(o){Object(I.a)(s,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(o){Object.defineProperty(s,o,Object.getOwnPropertyDescriptor(n,o))})}return s}var J={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},tableUrl:{type:String,default:"/api/documents"},items:{type:Array,default:function(){return[{text:"Closed",action:"closed"},{text:"Cancel",action:"canceled"},{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,showNewBtn:!1,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable}},computed:{formTitle:function(){return this.editedIndex===-1?"New "+this.typeDocument:"Edit "+ +this.typeDocument},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.mappingDocument()},mounted:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.$router.push({path:this.formUrl,query:{document:this.form.id}})},statusColor:function(t){switch(t.status){case"open":return"blue darken-3";case"partial":return"orange";case"paid":return"green";case"closed":return"green";case"overdue":return"red";case"canceled":return"red"}},editItem:function(t){this.$router.push({path:this.mappingAction(t.transaction_type),query:{document:t.id}})},mappingAction:function(t){switch(t){case"SQ":return"/app/form/sales/quote";case"SO":return"/app/form/sales/order";case"SD":return"/app/form/sales/delivery";case"IN":return"/app/form/sales/invoice";case"RC":return"/app/form/sales/payment";case"CN":return"/app/form/sales/creditmemo";case"SR":return"/app/form/sales/return";case"PQ":return"/app/form/purchase/quote";case"PO":return"/app/form/purchase/order";case"GR":return"/app/form/purchase/receipt";case"BL":return"/app/form/purchase/invoice";case"PY":return"/app/form/purchase/payment";case"DN":return"/app/form/purchase/creditmemo";case"GN":return"/app/form/purchase/return"}},actions:function(t,n){switch(t){case"edit":case"view":this.editItem(n);break;case"delete":this.deleteItem(n);break;case"closed":case"canceled":this.closeItem(n,t);break}},deleteItem:function(t){var n=this;this.$nuxt.$loading.start(),this.$axios.delete(this.tableUrl+"/"+t.id).then(function(o){n.getDataFromApi()}).catch(function(o){n.$swal({type:"error",title:"Error",text:o.response.data.message})}).finally(function(){n.$nuxt.$loading.finish()})},closeItem:function(t,n){var o=this;this.$nuxt.$loading.start(),this.$axios.put(this.tableUrl+"/"+t.id,D({updateStatus:n},t)).then(function(a){o.getDataFromApi()}).catch(function(a){o.$swal({type:"error",title:"Error",text:a.response.data.message})}).finally(function(){o.$nuxt.$loading.finish()})},mappingDocument:function(){this.toolbarTitle=this.$helper.mapping(this.typeDocument)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var n=this,o={searchItem:n.searchItem,documentStatus:n.documentStatus,searchStatus:n.searchStatus,search:n.search,type:this.typeDocument};this.$axios.get(this.tableUrl,{params:D(D({},n.options),o)}).then(function(a){t.loading=!1,t.allData=a.data.data,t.totalData=a.data.total,t.itemSearch=a.data.filter,t.form=Object.assign({},a.data.form),t.defaultItem=Object.assign({},a.data.form),t.company=t.$auth.$storage.getState("company")}).catch(function(a){t.loading=!1,t.$swal({type:"error",title:"Error",text:a.response.data.message})})}}},A=J,Q=e(50),L=e(51),Y=e.n(L),B=e(164),H=e(578),U=e(585),X=e(909),R=e(247),Z=e(249),x=e(165),K=e(35),W=e(577),w=e(599),M=Object(Q.a)(A,O,f,!1,null,null,null),mt=E.default=M.exports;Y()(M,{VBtn:B.a,VChip:H.a,VCol:U.a,VDataTable:X.a,VIcon:R.a,VList:Z.a,VListItem:x.a,VListItemContent:K.a,VListItemTitle:K.c,VMenu:W.a,VRow:w.a})}}]);