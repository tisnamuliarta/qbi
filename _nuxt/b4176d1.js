(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{599:function(h,i,a){var n=a(376),d=a(47);h.exports=function(l,m,c){return c.get&&n(c.get,m,{getter:!0}),c.set&&n(c.set,m,{setter:!0}),d.f(l,m,c)}},616:function(h,i,a){"use strict";var n=a(284),d=a.n(n),l=a(285);i.a=Object(l.a)("layout")},620:function(h,i,a){"use strict";var n=a(284),d=a.n(n),l=a(285);i.a=Object(l.a)("flex")},928:function(h,i,a){"use strict";a.r(i);var n=a(165),d=a(908),l=a(620),m=a(616),c=a(21),E=a(268),g=function(){var t=this,e=t._self._c;return e(m.a,[e(l.a,{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e(d.a,{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"hide-default-footer":"",dense:"","fixed-header":"",height:"75vh","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(o){t.options=o}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Account Category"))+`
            `)])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Account Category","show-new-data":"","show-back-link":"","new-data-text":"New Category"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.id",fn:function(o){var u=o.item;return[e(n.a,{staticClass:"font-weight-bold text-right",attrs:{text:"",small:"",color:"secondary"},on:{click:function(_){return t.editItem(u)}}},[t._v("Edit")]),t._v(" "),e(n.a,{staticClass:"font-weight-bold text-right",attrs:{text:"",small:"",color:"red"},on:{click:function(_){return t.deleteItem(u)}}},[t._v("Delete")])]}}],null,!0)})],1)]),t._v(" "),e("LazyInventoryFormItemCategory",{ref:"forms",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}})],1)},v=[],P=a(8),S=a(7),j=a(12),T=a(9),A=a(13),y=a(2),w=a(10),b=a(4);function f(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),e.push.apply(e,s)}return e}function p(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?f(Object(e),!0).forEach(function(s){Object(y.a)(r,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(e,s))})}return r}var D={name:"AccountCategory",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],itemCategoryType:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},url:"/api/inventory/item-category",headers:[{text:"Category Name",value:"name",cellClass:"disable-wrap"},{text:"Category Type",value:"type"},{text:"Actions",value:"id",cellClass:"disable-wrap"}]}},head:function(){return{title:"Product Category"}},computed:{formTitle:function(){return this.editedIndex===-1?"New Category":"Edit Category"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form,this.itemCategoryType)},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.forms.editItem(t,this.itemCategoryType)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},deleteItem:function(t){var e=this,s=this;this.$swal({title:"Are you sure?",text:"The data will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(o){o.value&&e.$axios.delete(s.url+"/"+t.id,{params:{id:t.id}}).then(function(u){e.$swal({type:"success",title:"Success...",text:"Data Deleted!"}),s.getDataFromApi()}).catch(function(u){e.$swal({type:"error",title:"Oops...",text:u.response.data.message})})})},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,s={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search};this.$axios.get(this.url,{params:p(p({},e.options),s)}).then(function(o){t.loading=!1,t.allData=o.data.data,t.totalData=o.data.total,t.itemSearch=o.data.filter,t.form=Object.assign({},o.data.form),t.defaultItem=Object.assign({},o.data.form),t.itemCategoryType=o.data.category_type_list}).catch(function(o){t.loading=!1,t.$swal({type:"error",title:"Error",text:o.response.data.message})})}}},O=D,C=a(50),x=Object(C.a)(O,g,v,!1,null,null,null),M=i.default=x.exports}}]);
