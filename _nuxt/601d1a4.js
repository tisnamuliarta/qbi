(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{599:function(u,o,a){var r=a(375),l=a(47);u.exports=function(i,d,c){return c.get&&r(c.get,d,{getter:!0}),c.set&&r(c.set,d,{setter:!0}),l.f(i,d,c)}},616:function(u,o,a){"use strict";var r=a(284),l=a.n(r),i=a(285);o.a=Object(i.a)("layout")},620:function(u,o,a){"use strict";var r=a(284),l=a.n(r),i=a(285);o.a=Object(i.a)("flex")},969:function(u,o,a){"use strict";a.r(o);var r=a(908),l=a(620),i=a(247),d=a(616),c=a(592),I=a(21),x=a(268),h=function(){var t=this,e=t._self._c;return e(d.a,[e(l.a,{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e(c.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),e(r.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(m){t.options=m}},scopedSlots:t._u([{key:"top",fn:function(){return[e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Account Category"},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.id",fn:function(m){var y=m.item;return[e(i.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(C){return t.editItem(y)}}},[t._v(`
            mdi-pencil-circle
          `)])]}}],null,!0)})],1)]),t._v(" "),e("LazyFinancialFormAccountCategory",{ref:"forms",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}})],1)},f=[],S=a(10),_=a(4),v={name:"AccountCategory",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},url:"/api/financial/account-category",headers:[{text:"Category Name",value:"name"},{text:"Category Type",value:"category_type"},{text:"Actions",value:"id"}]}},head:function(){return{title:"Account Category"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},computed:{formTitle:function(){return this.editedIndex===-1?"New Category":"Edit Category"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form)},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.$refs.forms.editItem(t)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get(this.url,{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then(function(n){t.loading=!1,t.allData=n.data.data.rows,t.totalData=n.data.data.total,t.itemSearch=n.data.filter,t.form=Object.assign({},n.data.data.form),t.defaultItem=Object.assign({},n.data.data.form)}).catch(function(n){t.loading=!1,t.$swal({type:"error",title:"Error",text:n.response.data.message})})}}},g=v,p=a(50),D=Object(p.a)(g,h,f,!1,null,null,null),E=o.default=D.exports}}]);
