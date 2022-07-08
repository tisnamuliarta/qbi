(window.webpackJsonp=window.webpackJsonp||[]).push([[140,30],{1075:function(b,f,t){"use strict";t.r(f);var E=function(){var u=this,c=u.$createElement,d=u._self._c||c;return d("div",[d("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"S","form-url":"/app/purchasereturn/form","header-table":[{text:"Number",value:"document_number",cellClass:"disable-wrap"},{text:"Customer",value:"contact_name",cellClass:"disable-wrap"},{text:"Type",value:"type",cellClass:"disable-wrap"},{text:"Date",value:"issued_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Due Date",value:"due_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},j=[],O={name:"AllSales",head:function(){return{title:"All Sales"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var c=this;this.$nuxt.$on("getDataFromApi",function(d){return c.getDataFromApi(d)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},T=O,P=t(50),h=Object(P.a)(T,E,j,!1,null,null,null),M=f.default=h.exports;installComponents(h,{DocumentTableDocument:t(618).default})},595:function(b,f,t){"use strict";var E=t(7),j=t.n(E),O=t(9),T=t.n(O),P=t(12),h=t.n(P),M=t(13),u=t.n(M),c=t(1),d=t(4),V=t.n(d),A=t(33),$=t.n(A),I=t(52),F=t.n(I),L=t(27),N=t.n(L),g=t(8),G=t.n(g),R=t(21),x=t.n(R),z=t(65),e=t.n(z),a=t(266),s=t.n(a),o=t(32),i=t.n(o),m=t(267),y=t.n(m),C=t(268),yt=t.n(C),at=t(269),Ct=t.n(at),st=t(270),Tt=t.n(st),nt=t(271),At=t.n(nt),ot=t(272),It=t.n(ot),rt=t(273),Lt=t.n(rt),_t=t(274),Rt=t.n(_t),lt=t(275),xt=t.n(lt),it=t(276),Bt=t.n(it),ct=t(277),Ut=t.n(ct),ut=t(278),Kt=t.n(ut),mt=t(279),Wt=t.n(mt),dt=t(35),St=t.n(dt),ft=t(10),bt=t.n(ft),vt=t(280),Vt=t.n(vt),Et=t(2),pt=t(78),Dt=t(0);function J(l,r){var _=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);r&&(n=n.filter(function(p){return Object.getOwnPropertyDescriptor(l,p).enumerable})),_.push.apply(_,n)}return _}function B(l){for(var r=1;r<arguments.length;r++){var _=arguments[r]!=null?arguments[r]:{};r%2?J(Object(_),!0).forEach(function(n){Object(c.a)(l,n,_[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(_)):J(Object(_)).forEach(function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(_,n))})}return l}var jt=["sm","md","lg","xl"],U=["start","end","center"];function K(l,r){return jt.reduce(function(_,n){return _[l+Object(Dt.H)(n)]=r(),_},{})}var H=function(r){return[].concat(U,["baseline","stretch"]).includes(r)},Q=K("align",function(){return{type:String,default:null,validator:H}}),X=function(r){return[].concat(U,["space-between","space-around"]).includes(r)},Y=K("justify",function(){return{type:String,default:null,validator:X}}),Z=function(r){return[].concat(U,["space-between","space-around","stretch"]).includes(r)},w=K("alignContent",function(){return{type:String,default:null,validator:Z}}),k={align:Object.keys(Q),justify:Object.keys(Y),alignContent:Object.keys(w)},Ot={align:"align",justify:"justify",alignContent:"align-content"};function Pt(l,r,_){var n=Ot[l];if(_!=null){if(r){var p=r.replace(l,"");n+="-".concat(p)}return n+="-".concat(_),n.toLowerCase()}}var q=new Map;f.a=Et.default.extend({name:"v-row",functional:!0,props:B(B(B({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:H}},Q),{},{justify:{type:String,default:null,validator:X}},Y),{},{alignContent:{type:String,default:null,validator:Z}},w),render:function(r,_){var n=_.props,p=_.data,ht=_.children,W="";for(var Mt in n)W+=String(n[Mt]);var v=q.get(W);return v||function(){var D;v=[];var S;for(S in k)k[S].forEach(function(tt){var gt=n[tt],et=Pt(S,tt,gt);et&&v.push(et)});v.push((D={"no-gutters":n.noGutters,"row--dense":n.dense},Object(c.a)(D,"align-".concat(n.align),n.align),Object(c.a)(D,"justify-".concat(n.justify),n.justify),Object(c.a)(D,"align-content-".concat(n.alignContent),n.alignContent),D)),q.set(W,v)}(),r(n.tag,Object(pt.a)(p,{staticClass:"row",class:v}),ht)}})},618:function(b,f,t){"use strict";t.r(f);var E=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-row",[s("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[s("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,loading:e.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(o){e.options=o}},scopedSlots:e._u([{key:"top",fn:function(){return[s("div",{staticClass:"pl-4 pt-2"},[s("span",{staticClass:"font-weight-medium text-h6"},[e._v(e._s(e.tableTitle))])]),e._v(" "),s("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:e.toolbarTitle,"button-title":e.btnTitle,"new-data-multiple-item":e.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data-multiple":"","new-data-text":"New Transactions"},on:{emitData:e.emitData,newData:e.newData,getDataFromApi:e.getDataFromApi}})]},proxy:!0},{key:"item.document_number",fn:function(o){var i=o.item;return[s("a",{on:{click:function(m){return e.editItem(i)}}},[s("strong",{domProps:{textContent:e._s(i.document_number)}})])]}},{key:"item.status",fn:function(o){var i=o.item;return[s("v-btn",{attrs:{text:"",small:""}},[s("v-icon",{attrs:{color:e.statusColor(i),left:""}},[e._v(" mdi-circle ")]),e._v(`
          `+e._s(i.status)+`
        `)],1)]}},{key:"item.balance_due",fn:function(o){var i=o.item;return[e._v(`
        `+e._s(i.currency.currency_code+" "+e.$formatter.formatPrice(i.balance_due))+`
      `)]}},{key:"item.amount",fn:function(o){var i=o.item;return[e._v(`
        `+e._s(i.currency.currency_code+" "+e.$formatter.formatPrice(i.amount))+`
      `)]}},{key:"item.actions",fn:function(o){var i=o.item;return[s("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(m){return e.actions(e.itemAction,i)}}},[e._v(`
          `+e._s(e.itemText)+`
        `)]),e._v(" "),s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(m){var y=m.on,C=m.attrs;return[s("v-btn",e._g(e._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",C,!1),y),[s("v-icon",[e._v("mdi-menu-down")])],1)]}}],null,!0)},[e._v(" "),s("v-list",e._l(e.items,function(m,y){return s("v-list-item",{key:y,on:{click:function(C){return e.actions(m.action,i)}}},[s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(m.text))])],1)],1)}),1)],1)]}}],null,!0)})],1)],1)},j=[],O=t(21),T=t(283),P=t(9),h=t(4),M={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable}},computed:{formTitle:function(){return this.editedIndex===-1?"New "+this.typeDocument:"Edit "+ +this.typeDocument},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.mappingDocument()},mounted:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.$router.push({path:this.formUrl,query:{document:this.form.id,type:this.typeDocument}})},statusColor:function(a){switch(a.status){case"open":case"partial":return"warning";case"paid":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},editItem:function(a){this.$router.push({path:this.mappingAction(a.type),query:{document:a.id,type:a.type}})},mappingAction:function(a){switch(a){case"SQ":return"/app/form/sales/quote";case"SO":return"/app/form/sales/order";case"SD":return"/app/form/sales/delivery";case"SI":return"/app/form/sales/invoice";case"SP":return"/app/form/sales/payment";case"ARCM":return"/app/form/sales/creditmemo";case"SR":return"/app/form/sales/return";case"PO":return"/app/form/purchase/order";case"PI":return"/app/form/purchase/invoice";case"PP":return"/app/form/purchase/payment";case"APCM":return"/app/form/purchase/creditmemo";case"GR":return"/app/form/purchase/return"}},actions:function(a,s){a==="edit"?this.editItem(s):this.deleteItem(s)},deleteItem:function(a){var s=this;this.$axios.delete("/api/master/permissions/"+a.menu_name).then(function(o){s.getDataFromApi(),s.$nuxt.$emit("getMenu","nice payload")})},mappingDocument:function(){this.toolbarTitle=this.$helper.mapping(this.typeDocument)},emitData:function(a){this.documentStatus=a.documentStatus,this.itemSearch=a.itemSearch,this.searchStatus=a.searchStatus,this.searchItem=a.searchItem,this.search=a.search,this.filters=a.filters,this.getDataFromApi()},getDataFromApi:function(){var a=this;this.loading=!0;var s=this;this.$axios.get("/api/documents",{params:{options:s.options,searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search,type:this.typeDocument}}).then(function(o){a.loading=!1,a.allData=o.data.data.rows,a.totalData=o.data.data.total,a.itemSearch=o.data.filter,a.form=Object.assign({},o.data.data.form),a.defaultItem=Object.assign({},o.data.data.form),a.company=a.$auth.$storage.getState("company")}).catch(function(o){a.loading=!1,a.$swal({type:"error",title:"Error",text:o.response.data.message})})}}},u=M,c=t(50),d=t(51),V=t.n(d),A=t(164),$=t(581),I=t(1018),F=t(246),L=t(248),N=t(165),g=t(34),G=t(573),R=t(595),x=Object(c.a)(u,E,j,!1,null,null,null),z=f.default=x.exports;V()(x,{VBtn:A.a,VCol:$.a,VDataTable:I.a,VIcon:F.a,VList:L.a,VListItem:N.a,VListItemContent:g.b,VListItemTitle:g.d,VMenu:G.a,VRow:R.a})}}]);