(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{599:function(d,o,a){var r=a(376),c=a(47);d.exports=function(i,u,l){return l.get&&r(l.get,u,{getter:!0}),l.set&&r(l.set,u,{setter:!0}),c.f(i,u,l)}},616:function(d,o,a){"use strict";var r=a(284),c=a.n(r),i=a(285);o.a=Object(i.a)("layout")},620:function(d,o,a){"use strict";var r=a(284),c=a.n(r),i=a(285);o.a=Object(i.a)("flex")},930:function(d,o,a){"use strict";a.r(o);var r=a(908),c=a(620),i=a(247),u=a(616),l=a(592),I=a(21),_=a(268),h=function(){var t=this,e=t._self._c;return e(u.a,[e(c.a,{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e(l.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),e(r.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(m){t.options=m}},scopedSlots:t._u([{key:"top",fn:function(){return[e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Account Category"},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.id",fn:function(m){var y=m.item;return[e(i.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(C){return t.editItem(y)}}},[t._v(`
            mdi-pencil-circle
          `)])]}}],null,!0)})],1)]),t._v(" "),e("LazyFinancialFormAccountCategory",{ref:"forms",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}})],1)},f=[],x=a(10),E=a(4),v={name:"AccountCategory",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},url:"/api/financial/account-category",headers:[{text:"Category Name",value:"name"},{text:"Category Type",value:"category_type"},{text:"Actions",value:"id"}]}},head:function(){return{title:"Account Category"}},computed:{formTitle:function(){return this.editedIndex===-1?"New Category":"Edit Category"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form)},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.forms.editItem(t)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get(this.url,{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then(function(s){t.loading=!1,t.allData=s.data.data.rows,t.totalData=s.data.data.total,t.itemSearch=s.data.filter,t.form=Object.assign({},s.data.data.form),t.defaultItem=Object.assign({},s.data.data.form)}).catch(function(s){t.loading=!1,t.$swal({type:"error",title:"Error",text:s.response.data.message})})}}},g=v,p=a(50),D=Object(p.a)(g,h,f,!1,null,null,null),S=o.default=D.exports}}]);