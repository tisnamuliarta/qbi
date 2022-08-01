(window.webpackJsonp=window.webpackJsonp||[]).push([[182,38],{598:function(t,e,n){"use strict";n(7),n(9),n(12),n(13);var r=n(2),o=(n(4),n(33),n(52),n(28),n(8),n(21),n(65),n(269),n(32),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(35),n(10),n(283),n(3)),c=n(78),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return d.reduce((function(n,r){return n[t+Object(l.I)(r)]=e(),n}),{})}var v=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:v}})),D=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=y("justify",(function(){return{type:String,default:null,validator:D}})),x=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},O=y("alignContent",(function(){return{type:String,default:null,validator:x}})),j={align:Object.keys(w),justify:Object.keys(_),alignContent:Object.keys(O)},$={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=$[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var C=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:m(m(m({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},w),{},{justify:{type:String,default:null,validator:D}},_),{},{alignContent:{type:String,default:null,validator:x}},O),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var m=C.get(l);return m||function(){var t,e;for(e in m=[],j)j[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&m.push(o)}));m.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(l,m)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:m}),o)}})},599:function(t,e,n){var r=n(375),o=n(47);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},602:function(t,e,n){"use strict";n.r(e);n(21),n(268),n(8),n(7),n(12),n(10),n(13);var r=n(2);n(4),n(9);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},tableUrl:{type:String,default:"/api/documents"},items:{type:Array,default:function(){return[{text:"Closed",action:"closed"},{text:"Cancel",action:"canceled"},{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable}},computed:{formTitle:function(){return-1===this.editedIndex?"New "+this.typeDocument:"Edit "+ +this.typeDocument},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.mappingDocument()},mounted:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.$router.push({path:this.formUrl,query:{document:this.form.id}})},editItem:function(t){this.$auth.$storage.setState("basePath",this.$route.path),this.$router.push({path:this.$formatter.mappingAction(t.transaction_type),query:{document:t.id}})},actions:function(t,e){switch(t){case"edit":case"view":this.editItem(e);break;case"delete":this.deleteItem(e);break;case"closed":case"canceled":this.closeItem(e,t)}},deleteItem:function(t){var e=this;this.$nuxt.$loading.start(),this.$axios.delete(this.tableUrl+"/"+t.id).then((function(t){e.getDataFromApi()})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(){e.$nuxt.$loading.finish()}))},closeItem:function(t,e){var n=this;this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then((function(r){r.value&&(n.$nuxt.$loading.start(),n.$axios.put(n.tableUrl+"/"+t.id,c({updateStatus:e},t)).then((function(t){n.getDataFromApi()})).catch((function(t){n.$swal({type:"error",title:"Error",text:t.response.data.message})})).finally((function(){n.$nuxt.$loading.finish()})))}))},mappingDocument:function(){this.toolbarTitle=this.$helper.mapping(this.typeDocument)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,n={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,type:this.typeDocument};this.$axios.get(this.tableUrl,{params:c(c({},e.options),n)}).then((function(e){t.loading=!1,t.allData=e.data.data,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.form),t.defaultItem=Object.assign({},e.data.form),t.company=t.$auth.$storage.getState("company")})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},f=n(50),m=n(51),d=n.n(m),h=n(164),y=n(578),v=n(585),w=n(907),D=n(247),_=n(249),x=n(165),O=n(34),j=n(577),$=n(598),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("v-row",[e("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data-multiple":"","new-data-text":"New Transactions"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.document_number",fn:function(n){var r=n.item;return[e("a",{on:{click:function(e){return t.editItem(r)}}},[e("strong",{domProps:{textContent:t._s(r.document_number)}})])]}},{key:"item.transaction_no",fn:function(n){var r=n.item;return[e("a",{on:{click:function(e){return t.editItem(r)}}},[e("strong",{domProps:{textContent:t._s(r.transaction_no)}})])]}},{key:"item.status",fn:function(n){var r=n.item;return[e("v-chip",{attrs:{label:"",small:"",dark:"",color:t.$formatter.statusColor(r.status)}},[t._v("\n            "+t._s(r.status)+"\n          ")])]}},{key:"item.balance_due",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(n.balance_due))+"\n        ")]}},{key:"item.amount",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(n.amount))+"\n        ")]}},{key:"item.main_account_amount",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(n.main_account_amount))+"\n        ")]}},{key:"item.actions",fn:function(n){var r=n.item;return["open"===r.status||"draft"===r.status?e("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(e){return e.stopPropagation(),t.actions("edit",r)}}},[t._v("\n            Edit\n          ")]):t._e(),t._v(" "),"closed"===r.status||"canceled"===r.status?e("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(e){return e.stopPropagation(),t.actions("view",r)}}},[t._v("\n            View\n          ")]):t._e(),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",o,!1),r),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.items,(function(n,i){return e("v-list-item",{key:i,on:{click:function(e){return e.stopPropagation(),t.actions(n.action,r)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n.text))])],1)],1)})),1)],1)]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a,VChip:y.a,VCol:v.a,VDataTable:w.a,VIcon:D.a,VList:_.a,VListItem:x.a,VListItemContent:O.a,VListItemTitle:O.c,VMenu:j.a,VRow:$.a})},981:function(t,e,n){"use strict";n.r(e);var r={name:"AllPurchase",head:function(){return{title:this.$t("Receipt From Production")}},activated:function(){this.$nuxt.$emit("extensionActive",{active:1})},created:function(){var t=this;this.$nuxt.$on("getDataFromApi",(function(e){return t.getDataFromApi(e)}))},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},o=n(50),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"GT","form-url":"/app/form/inventory/receipt","table-title":t.$t("Receipt From Production"),"header-table":[{text:t.$t("Transaction No"),value:"transaction_no",cellClass:"disable-wrap"},{text:"Vendor",value:"contact.name",cellClass:"disable-wrap"},{text:t.$t("Transaction Date"),value:"transaction_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:t.$t("Due Date"),value:"due_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DocumentTableDocument:n(602).default})}}]);