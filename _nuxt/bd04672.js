(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{599:function(t,e,r){var n=r(375),o=r(47);t.exports=function(t,e,r){return r.get&&n(r.get,e,{getter:!0}),r.set&&n(r.set,e,{setter:!0}),o.f(t,e,r)}},616:function(t,e,r){"use strict";r(284);var n=r(285);e.a=Object(n.a)("layout")},621:function(t,e,r){"use strict";r(284);var n=r(285);e.a=Object(n.a)("flex")},764:function(t,e,r){"use strict";r.r(e);r(21),r(268),r(8),r(7),r(12),r(10),r(13);var n=r(2);r(65),r(291),r(4),r(70),r(9);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"TableItem",props:{viewData:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!0}},data:function(){return{selected:[],totalData:0,url:"/api/inventory/price-list",editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:""}},computed:{formTitle:function(){return-1===this.editedIndex?this.$t("New"):this.$t("Edit")},buttonTitle:function(){return-1===this.editedIndex?this.$t("Save"):this.$t("Update")}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi()},mounted:function(){this.mappingHeader(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{formatPrice:function(t){return(t/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},setEmptyToSelected:function(){this.selected=[]},newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},actions:function(t,e){"edit"===t?this.editItem(e):this.deleteItem(e)},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,r={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search};this.$axios.get(this.url,{params:c(c({},e.options),r)}).then((function(e){t.loading=!1,t.allData=e.data.data,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.form),t.defaultItem=Object.assign({},e.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},returnSelected:function(){return this.selected},mappingHeader:function(){this.headers=[{text:"Name",value:"price_list_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Base Price List",value:"base_price.price_list_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Factor",value:"factor",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Rounding Method",value:"rounding_method",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Active",value:"enabled",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Valid From",value:"start_date",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Valid To",value:"end_date",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Actions",value:"id",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}},d=r(50),m=r(51),h=r.n(m),f=r(164),v=r(907),w=r(621),_=r(247),y=r(616),x=r(249),D=r(165),S=r(34),O=r(577),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("v-layout",[e("v-flex",{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","calculate-widths":"","fixed-header":"",height:t.viewData?"60vh":"70vh","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[t.viewData?t._e():e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Price List")))])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items","show-new-data":"","new-data-text":t.$t("New Price List"),"show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.id",fn:function(r){var n=r.item;return[e("v-btn",{staticClass:"font-weight-bold text-right mr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(e){return t.actions(t.itemAction,n)}}},[t._v("\n              "+t._s(t.itemText)+"\n            ")]),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",o,!1),n),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.items,(function(r,i){return e("v-list-item",{key:i,on:{click:function(e){return t.actions(r.action,n)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(r.text))])],1)],1)})),1)],1)]}},{key:"item.enabled",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(1===r.enabled?"Y":"N")+"\n          ")]}},{key:"item.purchase_price",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.formatPrice(r.purchase_price))+"\n          ")]}},{key:"item.last_buy_price",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.formatPrice(r.last_buy_price))+"\n          ")]}},{key:"item.average_price",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.formatPrice(r.average_price))+"\n          ")]}},{key:"item.minimum_stock",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(t.formatPrice(r.minimum_stock))+"\n          ")]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),e("LazyInventoryFormPriceList",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:f.a,VDataTable:v.a,VFlex:w.a,VIcon:_.a,VLayout:y.a,VList:x.a,VListItem:D.a,VListItemContent:S.a,VListItemTitle:S.c,VMenu:O.a})}}]);