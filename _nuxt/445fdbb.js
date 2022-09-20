(window.webpackJsonp=window.webpackJsonp||[]).push([[190,65],{599:function(f,l,a){var o=a(375),d=a(47);f.exports=function(c,u,m){return m.get&&o(m.get,u,{getter:!0}),m.set&&o(m.set,u,{setter:!0}),d.f(c,u,m)}},616:function(f,l,a){"use strict";var o=a(284),d=a.n(o),c=a(285);l.a=Object(c.a)("layout")},620:function(f,l,a){"use strict";var o=a(284),d=a.n(o),c=a(285);l.a=Object(c.a)("flex")},671:function(f,l,a){"use strict";a.r(l);var o=a(165),d=a(908),c=a(620),u=a(247),m=a(616),p=a(248),b=a(166),v=a(31),I=a(576),g=a(592),j=a(21),F=a(268),S=function(){var t=this,e=t._self._c;return e(m.a,[e(c.a,{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e(g.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{type:"table"}}),t._v(" "),e(d.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","calculate-widths":"","fixed-header":"",height:t.viewData?"60vh":"70vh","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(s){t.options=s}},scopedSlots:t._u([{key:"top",fn:function(){return[t.viewData?t._e():e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Items Master Data")))])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items","show-new-data":"","new-data-text":t.$t("New Item"),"show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(s){var r=s.item;return[e(o.a,{staticClass:"font-weight-bold text-right mr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(h){return t.actions(t.itemAction,r)}}},[t._v(`
            `+t._s(t.itemText)+`
          `)]),t._v(" "),e(I.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(h){var w=h.on,O=h.attrs;return[e(o.a,t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",O,!1),w),[e(u.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e(p.a,t._l(t.items,function(y,h){return e(b.a,{key:h,on:{click:function(O){return t.actions(y.action,r)}}},[e(v.a,[e(v.c,[t._v(t._s(y.text))])],1)],1)}),1)],1)]}},{key:"item.sale_price",fn:function(s){var r=s.item;return[t._v(`
          `+t._s(t.formatPrice(r.sale_price))+`
        `)]}},{key:"item.purchase_price",fn:function(s){var r=s.item;return[t._v(`
          `+t._s(t.formatPrice(r.purchase_price))+`
        `)]}},{key:"item.last_buy_price",fn:function(s){var r=s.item;return[t._v(`
          `+t._s(t.formatPrice(r.last_buy_price))+`
        `)]}},{key:"item.average_price",fn:function(s){var r=s.item;return[t._v(`
          `+t._s(t.formatPrice(r.average_price))+`
        `)]}},{key:"item.minimum_stock",fn:function(s){var r=s.item;return[t._v(`
          `+t._s(t.formatPrice(r.minimum_stock))+`
        `)]}},{key:"item.available_qty",fn:function(s){var r=s.item;return[t._v(`
          `+t._s(t.checkAvailable(r.item_warehouse))+`
        `)]}},{key:"item.commision_rate",fn:function(s){var r=s.item;return[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.formatPrice(r.commision_rate))+`
        `)]}}],null,!0),model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}})],1)]),t._v(" "),e("LazyInventoryFormItem",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)},T=[],M=a(8),$=a(7),B=a(12),V=a(13),A=a(2),L=a(64),N=a(291),U=a(4),R=a(69),K=a(9),W=a(10);function D(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),e.push.apply(e,i)}return e}function x(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?D(Object(e),!0).forEach(function(i){Object(A.a)(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}var P={name:"TableItem",props:{viewData:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!0}},data:function(){return{selected:[],totalData:0,url:"",editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",whs:"",form:{},defaultItem:{},options:{},headers:[],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",dateFrom:null,dateTo:null}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Item"):this.$t("Edit Item")},buttonTitle:function(){return this.editedIndex===-1?this.$t("Save"):this.$t("Update")}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi()},mounted:function(){this.mappingHeader(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{formatPrice:function(t){var e=(t/1).toFixed(2).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},checkAvailable:function(t){var e=this,i=0;return t.forEach(function(s){typeof e.whs=="string"?s.whs_name===e.whs&&(i=s.available_qty):s.warehouse_id===e.whs&&(i=s.available_qty)}),i},setEmptyToSelected:function(t){this.whs=t,this.getDataFromApi(),this.selected=[]},newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},actions:function(t,e){t==="edit"?this.editItem(e):this.deleteItem(e)},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,i={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,whs:e.whs,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get("/api/inventory/items",{params:x(x({},e.options),i)}).then(function(s){t.loading=!1,t.allData=s.data.data,t.totalData=s.data.total,t.itemSearch=s.data.filter,t.form=Object.assign({},s.data.form),t.defaultItem=Object.assign({},s.data.form),t.url=s.data.url}).catch(function(s){t.loading=!1,t.$swal({type:"error",title:"Error",text:s.response.data.message})})},returnSelected:function(){return this.selected},mappingHeader:function(){this.viewData?this.headers=[{text:"Item Code",value:"code",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Name",value:"name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Type",value:"group_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Category",value:"category.name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Unit",value:"unit",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Warehouse",value:"whs_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Available Qty",value:"available_qty",cellClass:"disable-wrap",class:"disable-wrap"}]:this.headers=[{text:"Item Code",value:"code",width:"120px"},{text:"Item Name",value:"name",width:"150px"},{text:"Item Type",value:"group_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Category",value:"category.name",sortable:!1,filterable:!1},{text:"Commission",value:"commision_rate",align:"right",sortable:!1,filterable:!1},{text:"Unit",value:"unit",sortable:!1,filterable:!1},{text:"Action",value:"ACTIONS",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}},_=P,C=a(50),E=Object(C.a)(_,S,T,!1,null,null,null),J=l.default=E.exports},976:function(f,l,a){"use strict";a.r(l);var o=function(){var I=this,g=I._self._c;return g("div",[g("InventoryTableItem")],1)},d=[],c={name:"ItemMaster",head:function(){return{title:this.$t("Item Master Data")}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})}},u=c,m=a(50),p=Object(m.a)(u,o,d,!1,null,null,null),b=l.default=p.exports;installComponents(p,{InventoryTableItem:a(671).default})}}]);
