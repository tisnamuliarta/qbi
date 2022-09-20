(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{599:function(h,l,a){var o=a(375),u=a(47);h.exports=function(c,m,d){return d.get&&o(d.get,m,{getter:!0}),d.set&&o(d.set,m,{setter:!0}),u.f(c,m,d)}},616:function(h,l,a){"use strict";var o=a(284),u=a.n(o),c=a(285);l.a=Object(c.a)("layout")},620:function(h,l,a){"use strict";var o=a(284),u=a.n(o),c=a(285);l.a=Object(c.a)("flex")},987:function(h,l,a){"use strict";a.r(l);var o=a(165),u=a(577),c=a(908),m=a(620),d=a(247),b=a(616),O=a(248),I=a(166),p=a(31),S=a(576),w=a(592),$=a(21),M=a(268),P=function(){var t=this,e=t._self._c;return e(b.a,[e(m.a,{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e(w.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{type:"table"}}),t._v(" "),e(c.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","calculate-widths":"","fixed-header":"",height:t.viewData?"60vh":"70vh","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(s){t.options=s}},scopedSlots:t._u([{key:"top",fn:function(){return[t.viewData?t._e():e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Production Order")))])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items","show-new-data":"","new-data-text":t.$t("New Item"),"show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(s){var i=s.item;return[e(o.a,{staticClass:"font-weight-bold text-right mr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(f){return t.actions(t.itemAction,i)}}},[t._v(`
            `+t._s(t.itemText)+`
          `)]),t._v(" "),e(S.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(f){var D=f.on,x=f.attrs;return[e(o.a,t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",x,!1),D),[e(d.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e(O.a,t._l(t.items,function(v,f){return e(I.a,{key:f,on:{click:function(x){return t.actions(v.action,i)}}},[e(p.a,[e(p.c,[t._v(t._s(v.text))])],1)],1)}),1)],1)]}},{key:"item.main_account_amount",fn:function(s){var i=s.item;return[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.formatPrice(i.main_account_amount))+`
        `)]}},{key:"item.purchase_price",fn:function(s){var i=s.item;return[t._v(`
          `+t._s(t.formatPrice(i.purchase_price))+`
        `)]}},{key:"item.last_buy_price",fn:function(s){var i=s.item;return[t._v(`
          `+t._s(t.formatPrice(i.last_buy_price))+`
        `)]}},{key:"item.average_price",fn:function(s){var i=s.item;return[t._v(`
          `+t._s(t.formatPrice(i.average_price))+`
        `)]}},{key:"item.minimum_stock",fn:function(s){var i=s.item;return[t._v(`
          `+t._s(t.formatPrice(i.minimum_stock))+`
        `)]}},{key:"item.status",fn:function(s){var i=s.item;return[e(u.a,{attrs:{label:"",small:"",dark:"",color:t.statusColor(i)}},[t._v(`
            `+t._s(i.status)+`
          `)])]}}],null,!0),model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}})],1)]),t._v(" "),e("LazyInventoryFormItem",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)},A=[],V=a(8),F=a(7),L=a(12),N=a(9),B=a(13),C=a(2),K=a(64),R=a(291),U=a(4),J=a(69),W=a(10);function g(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,r)}return e}function y(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?g(Object(e),!0).forEach(function(r){Object(C.a)(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}var E={name:"ItemMaster",data:function(){return{viewData:!1,selected:[],totalData:0,url:"",editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:""}},head:function(){return{title:this.$t("Production Order")}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Item"):this.$t("Edit Item")},buttonTitle:function(){return this.editedIndex===-1?this.$t("Save"):this.$t("Update")}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},mounted:function(){this.mappingHeader(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{formatPrice:function(t){var e=(t/1).toFixed(2).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},statusColor:function(t){switch(t.status){case"planned":return"blue darken-3";case"partial":return"orange";case"released":return"orange";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},setEmptyToSelected:function(){this.selected=[]},newData:function(){this.$router.push({path:"/app/form/production/order",query:{document:this.form.id?this.form.id:0}})},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},actions:function(t,e){t==="edit"?(this.$auth.$storage.setState("basePath",this.$route.path),this.$router.push({path:"/app/form/production/order",query:{document:e.id?e.id:0}})):this.deleteItem(e)},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,r={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search};this.$axios.get("/api/production/order",{params:y(y({},e.options),r)}).then(function(s){t.loading=!1,t.allData=s.data.data,t.totalData=s.data.total,t.itemSearch=s.data.filter,t.form=Object.assign({},s.data.form),t.defaultItem=Object.assign({},s.data.form),t.url=s.data.url}).catch(function(s){t.loading=!1,t.$swal({type:"error",title:"Error",text:s.response.data.message})})},returnSelected:function(){return this.selected},mappingHeader:function(){this.viewData?this.headers=[{text:"Transaction No",value:"transaction_no",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Transaction Date",value:"transaction_date",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Quantity",value:"planned_qty",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Name",value:"item_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Amount",value:"main_account_amount",cellClass:"disable-wrap",class:"disable-wrap"}]:this.headers=[{text:"Transaction No",value:"transaction_no",cellClass:"disable-wrap"},{text:"Transaction Date",value:"transaction_date",cellClass:"disable-wrap"},{text:"Quantity",value:"planned_qty",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Name",value:"item_name",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"Amount",value:"main_account_amount",sortable:!1,filterable:!1,cellClass:"disable-wrap"},{text:"Status",value:"status",sortable:!1,filterable:!1},{text:"Action",value:"ACTIONS",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}},T=E,_=a(50),j=Object(_.a)(T,P,A,!1,null,null,null),G=l.default=j.exports}}]);
