(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{599:function(t,e,r){var o=r(375),n=r(47);t.exports=function(t,e,r){return r.get&&o(r.get,e,{getter:!0}),r.set&&o(r.set,e,{setter:!0}),n.f(t,e,r)}},616:function(t,e,r){"use strict";r(284);var o=r(285);e.a=Object(o.a)("layout")},621:function(t,e,r){"use strict";r(284);var o=r(285);e.a=Object(o.a)("flex")},919:function(t,e,r){"use strict";r.r(e);r(21),r(268),r(8),r(7),r(12),r(10),r(13);var o=r(2);r(9),r(4);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"AccountCategory",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],itemCategoryType:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},url:"/api/financial/account-category",headers:[{text:"Category Name",value:"name",cellClass:"disable-wrap"},{text:"Category Type",value:"category_type"},{text:"Descriptions",value:"descriptions"},{text:"Actions",value:"id",cellClass:"disable-wrap"}]}},head:function(){return{title:"Account Category"}},computed:{formTitle:function(){return-1===this.editedIndex?"New Category":"Edit Category"},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form,this.itemCategoryType)},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.forms.editItem(t,this.itemCategoryType)},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},deleteItem:function(t){var e=this,r=this;this.$swal({title:"Are you sure?",text:"The data will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.value&&e.$axios.delete(r.url+"/"+t.id,{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Data Deleted!"}),r.getDataFromApi()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,r={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search};this.$axios.get(this.url,{params:c(c({},e.options),r)}).then((function(e){t.loading=!1,t.allData=e.data.data,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.form),t.defaultItem=Object.assign({},e.data.form),t.itemCategoryType=e.data.category_type_list})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},d=r(50),h=r(51),m=r.n(h),f=r(164),y=r(907),v=r(621),w=r(616),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("v-layout",[e("v-flex",{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"hide-default-footer":"",dense:"","fixed-header":"",height:"75vh","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Account Category"))+"\n              ")])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Account Category","show-new-data":"","show-back-link":"","new-data-text":"New Category"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.id",fn:function(r){var o=r.item;return[e("v-btn",{staticClass:"font-weight-bold text-right",attrs:{text:"",small:"",color:"secondary"},on:{click:function(e){return t.editItem(o)}}},[t._v("Edit")]),t._v(" "),e("v-btn",{staticClass:"font-weight-bold text-right",attrs:{text:"",small:"",color:"red"},on:{click:function(e){return t.deleteItem(o)}}},[t._v("Delete")])]}}],null,!0)})],1)]),t._v(" "),e("LazyAccountingFormAccountCategory",{ref:"forms",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VDataTable:y.a,VFlex:v.a,VLayout:w.a})}}]);