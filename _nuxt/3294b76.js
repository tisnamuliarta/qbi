(window.webpackJsonp=window.webpackJsonp||[]).push([[192,67],{599:function(f,l,e){var o=e(376),d=e(47);f.exports=function(c,m,u){return u.get&&o(u.get,m,{getter:!0}),u.set&&o(u.set,m,{setter:!0}),d.f(c,m,u)}},616:function(f,l,e){"use strict";var o=e(284),d=e.n(o),c=e(285);l.a=Object(c.a)("layout")},620:function(f,l,e){"use strict";var o=e(284),d=e.n(o),c=e(285);l.a=Object(c.a)("flex")},696:function(f,l,e){"use strict";e.r(l);var o=e(165),d=e(908),c=e(620),m=e(247),u=e(616),p=e(248),D=e(166),h=e(31),y=e(576),x=e(21),R=e(268),w=function(){var t=this,a=t._self._c;return a(u.a,[a(c.a,{attrs:{sm12:""}},[a("div",{staticClass:"mt-0"},[a(d.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","calculate-widths":"","fixed-header":"",height:t.viewData?"60vh":"70vh","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(n){t.options=n}},scopedSlots:t._u([{key:"top",fn:function(){return[t.viewData?t._e():a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Resources")))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items","show-new-data":"","new-data-text":t.$t("New Item"),"show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(n){var i=n.item;return[a(o.a,{staticClass:"font-weight-bold text-right mr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(v){return t.actions(t.itemAction,i)}}},[t._v(`
            `+t._s(t.itemText)+`
          `)]),t._v(" "),a(y.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(v){var b=v.on,S=v.attrs;return[a(o.a,t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",S,!1),b),[a(m.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a(p.a,t._l(t.items,function(g,v){return a(D.a,{key:v,on:{click:function(S){return t.actions(g.action,i)}}},[a(h.a,[a(h.c,[t._v(t._s(g.text))])],1)],1)}),1)],1)]}},{key:"item.sale_price",fn:function(n){var i=n.item;return[t._v(`
          `+t._s(t.formatPrice(i.sale_price))+`
        `)]}},{key:"item.purchase_price",fn:function(n){var i=n.item;return[t._v(`
          `+t._s(t.formatPrice(i.purchase_price))+`
        `)]}},{key:"item.last_buy_price",fn:function(n){var i=n.item;return[t._v(`
          `+t._s(t.formatPrice(i.last_buy_price))+`
        `)]}},{key:"item.average_price",fn:function(n){var i=n.item;return[t._v(`
          `+t._s(t.formatPrice(i.average_price))+`
        `)]}},{key:"item.minimum_stock",fn:function(n){var i=n.item;return[t._v(`
          `+t._s(t.formatPrice(i.minimum_stock))+`
        `)]}}],null,!0),model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}})],1)]),t._v(" "),a("LazyInventoryFormResource",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)},P=[],_=e(8),$=e(7),M=e(12),B=e(9),F=e(13),T=e(2),V=e(64),L=e(290),N=e(4),U=e(69),W=e(10);function I(s,t){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),a.push.apply(a,r)}return a}function O(s){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?I(Object(a),!0).forEach(function(r){Object(T.a)(s,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(a,r))})}return s}var A={name:"ItemMaster",props:{viewData:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!0}},data:function(){return{selected:[],totalData:0,url:"",editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:""}},head:function(){return{title:this.$t("Resources")}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Item"):this.$t("Edit Item")},buttonTitle:function(){return this.editedIndex===-1?this.$t("Save"):this.$t("Update")}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},mounted:function(){this.mappingHeader(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{formatPrice:function(t){var a=(t/1).toFixed(2).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},setEmptyToSelected:function(){this.selected=[]},newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,r={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search};this.$axios.get("/api/inventory/resource",{params:O(O({},a.options),r)}).then(function(n){t.loading=!1,t.allData=n.data.data,t.totalData=n.data.total,t.itemSearch=n.data.filter,t.form=Object.assign({},n.data.form),t.defaultItem=Object.assign({},n.data.form),t.url=n.data.url}).catch(function(n){t.loading=!1,t.$swal({type:"error",title:"Error",text:n.response.data.message})})},returnSelected:function(){return this.selected},mappingHeader:function(){this.viewData?this.headers=[{text:"Item Code",value:"code",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Name",value:"name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Type",value:"resource_type",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Warehouse",value:"warehouse.code",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Status",value:"status",cellClass:"disable-wrap",class:"disable-wrap"}]:this.headers=[{text:"Item Code",value:"code",width:"120px"},{text:"Item Name",value:"name",width:"150px"},{text:"Unit",value:"unit",width:"150px"},{text:"Item Type",value:"resource_type",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Warehouse",value:"warehouse.code",sortable:!1,filterable:!1},{text:"Status",value:"status",sortable:!1,filterable:!1},{text:"Action",value:"ACTIONS",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}},j=A,E=e(50),C=Object(E.a)(j,w,P,!1,null,null,null),K=l.default=C.exports},978:function(f,l,e){"use strict";e.r(l);var o=function(){var y=this,x=y._self._c;return x("div",[x("InventoryTableResource")],1)},d=[],c={name:"ItemMaster",head:function(){return{title:this.$t("Resources")}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})}},m=c,u=e(50),p=Object(u.a)(m,o,d,!1,null,null,null),D=l.default=p.exports;installComponents(p,{InventoryTableResource:e(696).default})}}]);
