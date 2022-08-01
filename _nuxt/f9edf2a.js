(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{599:function(t,e,n){var r=n(375),o=n(47);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},616:function(t,e,n){"use strict";n(284);var r=n(285);e.a=Object(r.a)("layout")},621:function(t,e,n){"use strict";n(284);var r=n(285);e.a=Object(r.a)("flex")},763:function(t,e,n){"use strict";n.r(e);n(21),n(268),n(8),n(7),n(12),n(10),n(13);var r=n(2);n(9),n(4);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"CustomerList",data:function(){return{selected:[],totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[{text:"Name",value:"name"},{text:"Type",value:"type"},{text:"Company",value:"company_name"},{text:"Email",value:"email",sortable:!1,filterable:!1},{text:"Phone",value:"phone",sortable:!1,filterable:!1},{text:"Balance",value:"balance",sortable:!1,filterable:!1},{text:"Action",value:"ACTIONS",align:"center",sortable:!1,filterable:!1}],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:""}},head:function(){return{title:this.$t("Business Partners")}},computed:{formTitle:function(){return-1===this.editedIndex?this.$t("New Business Partner"):this.$t("Edit Business Partner")},buttonTitle:function(){return-1===this.editedIndex?this.$t("Save"):this.$t("Update")}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},mounted:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form,this.defaultItem)},openDetail:function(t){this.$router.push({path:"/app/contact/detail",query:{id:t.id}})},actions:function(t,e){"edit"===t?this.editItem(e):this.deleteItem(e)},editItem:function(t){this.editedIndex=1,this.$refs.formData.editItem(t)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,n={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search};this.$axios.get("/api/bp/contacts",{params:c(c({},e.options),n)}).then((function(e){t.loading=!1,t.allData=e.data.data,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.form),t.defaultItem=Object.assign({},e.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},m=n(50),h=n(51),d=n.n(h),f=n(164),v=n(907),x=n(621),y=n(247),D=n(616),w=n(249),I=n(165),O=n(34),S=n(577),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("v-layout",[e("v-flex",{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","fixed-header":"",height:"70vh","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Business Partner Master Data")))])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Contacts","show-batch-action":"","show-new-data":"","new-data-text":t.$t("New Business Partner")},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(n){var r=n.item;return[e("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(e){return t.actions(t.itemAction,r)}}},[t._v("\n              "+t._s(t.itemText)+"\n            ")]),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",o,!1),r),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.items,(function(n,i){return e("v-list-item",{key:i,on:{click:function(e){return t.actions(n.action,r)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n.text))])],1)],1)})),1)],1)]}},{key:"item.balance",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(t.$formatter.formatPrice(n.balance))+"\n          ")]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),e("LazyInventoryFormContact",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VDataTable:v.a,VFlex:x.a,VIcon:y.a,VLayout:D.a,VList:w.a,VListItem:I.a,VListItemContent:O.a,VListItemTitle:O.c,VMenu:S.a})}}]);