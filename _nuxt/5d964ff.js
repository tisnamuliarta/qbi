(window.webpackJsonp=window.webpackJsonp||[]).push([[190,66],{600:function(f,o,e){var l=e(375),u=e(47);f.exports=function(c,m,d){return d.get&&l(d.get,m,{getter:!0}),d.set&&l(d.set,m,{setter:!0}),u.f(c,m,d)}},617:function(f,o,e){"use strict";var l=e(284),u=e.n(l),c=e(285);o.a=Object(c.a)("layout")},621:function(f,o,e){"use strict";var l=e(284),u=e.n(l),c=e(285);o.a=Object(c.a)("flex")},766:function(f,o,e){"use strict";e.r(o);var l=e(21),u=e(268),c=function(){var t=this,a=t._self._c;return a("v-layout",[a("v-flex",{attrs:{sm12:""}},[a("div",{staticClass:"mt-0"},[a("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","calculate-widths":"","fixed-header":"",height:t.viewData?"60vh":"70vh","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(n){t.options=n}},scopedSlots:t._u([{key:"top",fn:function(){return[t.viewData?t._e():a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Price List")))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items","show-new-data":"","new-data-text":t.$t("New Price List"),"show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.id",fn:function(n){var r=n.item;return[a("v-btn",{staticClass:"font-weight-bold text-right mr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(v){return t.actions(t.itemAction,r)}}},[t._v(`
              `+t._s(t.itemText)+`
            `)]),t._v(" "),a("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(v){var P=v.on,S=v.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",S,!1),P),[a("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a("v-list",t._l(t.items,function(p,v){return a("v-list-item",{key:v,on:{click:function(S){return t.actions(p.action,r)}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(p.text))])],1)],1)}),1)],1)]}},{key:"item.enabled",fn:function(n){var r=n.item;return[t._v(`
            `+t._s(r.enabled===1?"Y":"N")+`
          `)]}},{key:"item.purchase_price",fn:function(n){var r=n.item;return[t._v(`
            `+t._s(t.formatPrice(r.purchase_price))+`
          `)]}},{key:"item.last_buy_price",fn:function(n){var r=n.item;return[t._v(`
            `+t._s(t.formatPrice(r.last_buy_price))+`
          `)]}},{key:"item.average_price",fn:function(n){var r=n.item;return[t._v(`
            `+t._s(t.formatPrice(r.average_price))+`
          `)]}},{key:"item.minimum_stock",fn:function(n){var r=n.item;return[t._v(`
            `+t._s(t.formatPrice(r.minimum_stock))+`
          `)]}}],null,!0),model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}})],1)]),t._v(" "),a("LazyInventoryFormPriceList",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,url:t.url},on:{getDataFromApi:t.getDataFromApi}})],1)},m=[],d=e(8),g=e(7),T=e(12),y=e(10),D=e(13),h=e(2),N=e(65),K=e(290),U=e(4),J=e(70),W=e(9);function x(s,t){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),a.push.apply(a,i)}return a}function b(s){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?x(Object(a),!0).forEach(function(i){Object(h.a)(s,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(a,i))})}return s}var L={name:"TableItem",props:{viewData:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!0}},data:function(){return{selected:[],totalData:0,url:"/api/inventory/price-list",editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:""}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New"):this.$t("Edit")},buttonTitle:function(){return this.editedIndex===-1?this.$t("Save"):this.$t("Update")}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi()},mounted:function(){this.mappingHeader(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{formatPrice:function(t){var a=(t/1).toFixed(2).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},setEmptyToSelected:function(){this.selected=[]},newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,i={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search};this.$axios.get(this.url,{params:b(b({},a.options),i)}).then(function(n){t.loading=!1,t.allData=n.data.data,t.totalData=n.data.total,t.itemSearch=n.data.filter,t.form=Object.assign({},n.data.form),t.defaultItem=Object.assign({},n.data.form)}).catch(function(n){t.loading=!1,t.$swal({type:"error",title:"Error",text:n.response.data.message})})},returnSelected:function(){return this.selected},mappingHeader:function(){this.headers=[{text:"Name",value:"price_list_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Base Price List",value:"base_price.price_list_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Factor",value:"factor",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Rounding Method",value:"rounding_method",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Active",value:"enabled",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Valid From",value:"start_date",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Valid To",value:"end_date",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Actions",value:"id",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}},A=L,j=e(50),w=e(51),E=e.n(w),V=e(164),C=e(909),F=e(621),M=e(247),B=e(617),$=e(249),_=e(165),O=e(35),R=e(577),I=Object(j.a)(A,c,m,!1,null,null,null),z=o.default=I.exports;E()(I,{VBtn:V.a,VDataTable:C.a,VFlex:F.a,VIcon:M.a,VLayout:B.a,VList:$.a,VListItem:_.a,VListItemContent:O.a,VListItemTitle:O.c,VMenu:R.a})},977:function(f,o,e){"use strict";e.r(o);var l=function(){var D=this,h=D._self._c;return h("div",[h("InventoryTablePriceList")],1)},u=[],c={name:"ItemMaster",head:function(){return{title:this.$t("Price List")}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})}},m=c,d=e(50),g=Object(d.a)(m,l,u,!1,null,null,null),T=o.default=g.exports;installComponents(g,{InventoryTablePriceList:e(766).default})}}]);