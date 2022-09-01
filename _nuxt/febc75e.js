(window.webpackJsonp=window.webpackJsonp||[]).push([[54,31,65],{1089:function(g,l,e){"use strict";e.r(l);var c=e(165),h=e(247),m=function(){var d=this,v=d._self._c;return v("div",[v("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1000px","dialog-title":"Item List","button-title":"Save",original:"top"},scopedSlots:d._u([{key:"content",fn:function(){return[v("InventoryTableItem",{ref:"tableItem",attrs:{"view-data":d.viewData,"show-add-btn":d.showAddBtn}})]},proxy:!0},{key:"saveData",fn:function(){return[v(c.a,{attrs:{color:"green darken-1",dark:"",small:""},on:{click:d.selectData}},[d._v(`
        Select Item
        `),v(h.a,[d._v("mdi-arrow-down-right")])],1)]},proxy:!0}])})],1)},p=[],f=e(58),w={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null}},methods:{openDialog:function(d,v){var O=this;this.$refs.dialogForm.openDialog(),setTimeout(function(){O.$refs.tableItem.setEmptyToSelected(v)},150),this.row=d},selectData:function(){this.$emit("selectItems",{row:this.row,selected:this.$refs.tableItem.returnSelected()}),this.$refs.dialogForm.closeDialog()}}},D=w,y=e(50),I=Object(y.a)(D,m,p,!1,null,null,null),A=l.default=I.exports;installComponents(I,{InventoryTableItem:e(671).default,DialogForm:e(600).default})},599:function(g,l,e){var c=e(376),h=e(47);g.exports=function(m,p,f){return f.get&&c(f.get,p,{getter:!0}),f.set&&c(f.set,p,{setter:!0}),h.f(m,p,f)}},600:function(g,l,e){"use strict";e.r(l);var c=e(165),h=e(249),m=e(88),p=e(594),f=e(575),w=e(247),D=e(589),y=function(){var r=this,u=r._self._c;return u(p.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:r.original,"max-width":r.maxWidth,transition:"dialog-top-transition"},model:{value:r.dialog,callback:function(F){r.dialog=F},expression:"dialog"}},[u(h.a,[u(m.c,[u("span",{staticClass:"subtitle-2"},[r._v(r._s(r.dialogTitle))]),r._v(" "),u(D.a),r._v(" "),u(c.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(F){return r.closeDialog()}}},[u(w.a,[r._v("mdi-close-circle")])],1)],1),r._v(" "),u(f.a),r._v(" "),u(m.b,{staticClass:"pr-0 pl-0"},[r._t("content")],2),r._v(" "),u(f.a),r._v(" "),u(m.a,[r._t("addLine"),r._v(" "),u(D.a),r._v(" "),r._t("saveData")],2)],1)],1)},I=[],A={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},x=A,d=e(50),v=Object(d.a)(x,y,I,!1,null,null,null),O=l.default=v.exports},616:function(g,l,e){"use strict";var c=e(284),h=e.n(c),m=e(285);l.a=Object(m.a)("layout")},620:function(g,l,e){"use strict";var c=e(284),h=e.n(c),m=e(285);l.a=Object(m.a)("flex")},671:function(g,l,e){"use strict";e.r(l);var c=e(165),h=e(908),m=e(620),p=e(247),f=e(616),w=e(248),D=e(166),y=e(31),I=e(576),A=e(21),x=e(268),d=function(){var t=this,a=t._self._c;return a(f.a,[a(m.a,{attrs:{sm12:""}},[a("div",{staticClass:"mt-0"},[a(h.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","calculate-widths":"","fixed-header":"",height:t.viewData?"60vh":"70vh","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(n){t.options=n}},scopedSlots:t._u([{key:"top",fn:function(){return[t.viewData?t._e():a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Items Master Data")))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items","show-new-data":"","new-data-text":t.$t("New Item"),"show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(n){var o=n.item;return[a(c.a,{staticClass:"font-weight-bold text-right mr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(S){return t.actions(t.itemAction,o)}}},[t._v(`
            `+t._s(t.itemText)+`
          `)]),t._v(" "),a(I.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(S){var E=S.on,V=S.attrs;return[a(c.a,t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",V,!1),E),[a(p.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a(w.a,t._l(t.items,function(T,S){return a(D.a,{key:S,on:{click:function(V){return t.actions(T.action,o)}}},[a(y.a,[a(y.c,[t._v(t._s(T.text))])],1)],1)}),1)],1)]}},{key:"item.sale_price",fn:function(n){var o=n.item;return[t._v(`
          `+t._s(t.formatPrice(o.sale_price))+`
        `)]}},{key:"item.purchase_price",fn:function(n){var o=n.item;return[t._v(`
          `+t._s(t.formatPrice(o.purchase_price))+`
        `)]}},{key:"item.last_buy_price",fn:function(n){var o=n.item;return[t._v(`
          `+t._s(t.formatPrice(o.last_buy_price))+`
        `)]}},{key:"item.average_price",fn:function(n){var o=n.item;return[t._v(`
          `+t._s(t.formatPrice(o.average_price))+`
        `)]}},{key:"item.minimum_stock",fn:function(n){var o=n.item;return[t._v(`
          `+t._s(t.formatPrice(o.minimum_stock))+`
        `)]}},{key:"item.available_qty",fn:function(n){var o=n.item;return[t._v(`
          `+t._s(t.checkAvailable(o.item_warehouse))+`
        `)]}},{key:"item.commision_rate",fn:function(n){var o=n.item;return[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.formatPrice(o.commision_rate))+`
        `)]}}],null,!0),model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}})],1)]),t._v(" "),a("LazyInventoryFormItem",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)},v=[],O=e(8),b=e(7),r=e(12),u=e(13),C=e(2),F=e(64),_=e(290),N=e(4),R=e(69),U=e(9),W=e(10);function P(s,t){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),a.push.apply(a,i)}return a}function j(s){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?P(Object(a),!0).forEach(function(i){Object(C.a)(s,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(a,i))})}return s}var $={name:"TableItem",props:{viewData:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!0}},data:function(){return{selected:[],totalData:0,url:"",editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",whs:"",form:{},defaultItem:{},options:{},headers:[],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",dateFrom:null,dateTo:null}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Item"):this.$t("Edit Item")},buttonTitle:function(){return this.editedIndex===-1?this.$t("Save"):this.$t("Update")}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi()},mounted:function(){this.mappingHeader(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{formatPrice:function(t){var a=(t/1).toFixed(2).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},checkAvailable:function(t){var a=this,i=0;return t.forEach(function(n){typeof a.whs=="string"?n.whs_name===a.whs&&(i=n.available_qty):n.warehouse_id===a.whs&&(i=n.available_qty)}),i},setEmptyToSelected:function(t){this.whs=t,this.getDataFromApi(),this.selected=[]},newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.dateFrom=t.dateFrom,this.dateTo=t.dateTo,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,i={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,whs:a.whs,dateFrom:this.dateFrom,dateTo:this.dateTo};this.$axios.get("/api/inventory/items",{params:j(j({},a.options),i)}).then(function(n){t.loading=!1,t.allData=n.data.data,t.totalData=n.data.total,t.itemSearch=n.data.filter,t.form=Object.assign({},n.data.form),t.defaultItem=Object.assign({},n.data.form),t.url=n.data.url}).catch(function(n){t.loading=!1,t.$swal({type:"error",title:"Error",text:n.response.data.message})})},returnSelected:function(){return this.selected},mappingHeader:function(){this.viewData?this.headers=[{text:"Item Code",value:"code",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Name",value:"name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Type",value:"group_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Category",value:"category.name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Unit",value:"unit",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Warehouse",value:"whs_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Available Qty",value:"available_qty",cellClass:"disable-wrap",class:"disable-wrap"}]:this.headers=[{text:"Item Code",value:"code",width:"120px"},{text:"Item Name",value:"name",width:"150px"},{text:"Item Type",value:"group_name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Category",value:"category.name",sortable:!1,filterable:!1},{text:"Commission",value:"commision_rate",align:"right",sortable:!1,filterable:!1},{text:"Unit",value:"unit",sortable:!1,filterable:!1},{text:"Action",value:"ACTIONS",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}},B=$,L=e(50),M=Object(L.a)(B,d,v,!1,null,null,null),K=l.default=M.exports}}]);