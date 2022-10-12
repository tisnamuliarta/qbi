(window.webpackJsonp=window.webpackJsonp||[]).push([[55,31,67],{1112:function(D,r,e){"use strict";e.r(r);var l=e(165),h=e(248),c=function(){var u=this,v=u._self._c;return v("div",[v("DialogForm",{ref:"dialogForm",attrs:{"max-width":"800px","dialog-title":"Resource List","button-title":"Save",original:"top"},scopedSlots:u._u([{key:"content",fn:function(){return[v("InventoryTableResource",{ref:"tableItem",attrs:{"view-data":u.viewData,"show-add-btn":u.showAddBtn}})]},proxy:!0},{key:"saveData",fn:function(){return[v(l.a,{attrs:{color:"green darken-1",dark:"",small:""},on:{click:u.selectData}},[u._v(`
        Select Item
        `),v(h.a,[u._v("mdi-arrow-down-right")])],1)]},proxy:!0}])})],1)},p=[],f=e(58),S={name:"DialogItem",props:{viewData:{type:Boolean,default:!0},showAddBtn:{type:Boolean,default:!0}},data:function(){return{row:null}},methods:{openDialog:function(u){var v=this;this.$refs.dialogForm.openDialog(),setTimeout(function(){v.$refs.tableItem.setEmptyToSelected()},150),this.row=u},selectData:function(){this.$emit("selectItems",{row:this.row,selected:this.$refs.tableItem.returnSelected()}),this.$refs.dialogForm.closeDialog()}}},y=S,O=e(50),g=Object(O.a)(y,c,p,!1,null,null,null),w=r.default=g.exports;installComponents(g,{InventoryTableResource:e(700).default,DialogForm:e(602).default})},601:function(D,r,e){var l=e(378),h=e(47);D.exports=function(c,p,f){return f.get&&l(f.get,p,{getter:!0}),f.set&&l(f.set,p,{setter:!0}),h.f(c,p,f)}},602:function(D,r,e){"use strict";e.r(r);var l=e(165),h=e(250),c=e(87),p=e(596),f=e(577),S=e(248),y=e(589),O=function(){var o=this,d=o._self._c;return d(p.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:o.original,"max-width":o.maxWidth,transition:"dialog-top-transition"},model:{value:o.dialog,callback:function($){o.dialog=$},expression:"dialog"}},[d(h.a,{attrs:{outlined:""}},[d(c.c,[d("span",{staticClass:"subtitle-2"},[o._v(o._s(o.dialogTitle))]),o._v(" "),d(y.a),o._v(" "),d(l.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function($){return o.closeDialog()}}},[d(S.a,[o._v("mdi-close")])],1)],1),o._v(" "),d(f.a),o._v(" "),d(c.b,{staticClass:"pr-0 pl-0"},[o._t("content")],2),o._v(" "),d(f.a),o._v(" "),d(c.a,[o._t("addLine"),o._v(" "),d(y.a),o._v(" "),o._t("saveData")],2)],1)],1)},g=[],w={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},x=w,u=e(50),v=Object(u.a)(x,O,g,!1,null,null,null),T=r.default=v.exports},617:function(D,r,e){"use strict";var l=e(286),h=e.n(l),c=e(287);r.a=Object(c.a)("layout")},620:function(D,r,e){"use strict";var l=e(286),h=e.n(l),c=e(287);r.a=Object(c.a)("flex")},700:function(D,r,e){"use strict";e.r(r);var l=e(165),h=e(250),c=e(911),p=e(620),f=e(248),S=e(617),y=e(249),O=e(166),g=e(31),w=e(578),x=e(21),u=e(270),v=function(){var t=this,a=t._self._c;return a(S.a,[a(p.a,{attrs:{sm12:""}},[a("div",{staticClass:"mt-0"},[a(h.a,{attrs:{outlined:""}},[a(c.a,{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","calculate-widths":"","fixed-header":"",height:t.viewData?"60vh":"70vh","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(n){t.options=n}},scopedSlots:t._u([{key:"top",fn:function(){return[t.viewData?t._e():a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$t("Resources")))])]),t._v(" "),a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,"show-add":t.showAdd,title:"Items","show-new-data":"","new-data-text":t.$t("New Item"),"show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(n){var m=n.item;return[a(l.a,{staticClass:"font-weight-bold text-right mr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(b){return t.actions(t.itemAction,m)}}},[t._v(`
              `+t._s(t.itemText)+`
            `)]),t._v(" "),a(w.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(b){var E=b.on,F=b.attrs;return[a(l.a,t._g(t._b({attrs:{icon:""}},"v-btn",F,!1),E),[a(f.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a(y.a,t._l(t.items,function(C,b){return a(O.a,{key:b,on:{click:function(F){return t.actions(C.action,m)}}},[a(g.b,[a(g.d,[t._v(t._s(C.text))])],1)],1)}),1)],1)]}},{key:"item.sale_price",fn:function(n){var m=n.item;return[t._v(`
            `+t._s(t.formatPrice(m.sale_price))+`
          `)]}},{key:"item.purchase_price",fn:function(n){var m=n.item;return[t._v(`
            `+t._s(t.formatPrice(m.purchase_price))+`
          `)]}},{key:"item.last_buy_price",fn:function(n){var m=n.item;return[t._v(`
            `+t._s(t.formatPrice(m.last_buy_price))+`
          `)]}},{key:"item.average_price",fn:function(n){var m=n.item;return[t._v(`
            `+t._s(t.formatPrice(m.average_price))+`
          `)]}},{key:"item.minimum_stock",fn:function(n){var m=n.item;return[t._v(`
            `+t._s(t.formatPrice(m.minimum_stock))+`
          `)]}}],null,!0),model:{value:t.selected,callback:function(n){t.selected=n},expression:"selected"}})],1)],1)]),t._v(" "),a("LazyInventoryFormResource",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)},T=[],I=e(8),o=e(7),d=e(12),A=e(9),$=e(13),B=e(2),N=e(64),W=e(293),U=e(4),K=e(69),J=e(10);function P(s,t){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),a.push.apply(a,i)}return a}function j(s){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?P(Object(a),!0).forEach(function(i){Object(B.a)(s,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(a,i))})}return s}var R={name:"ItemMaster",props:{viewData:{type:Boolean,default:!1},showAddBtn:{type:Boolean,default:!0}},data:function(){return{selected:[],totalData:0,editedIndex:-1,loading:!0,allData:[],showAdd:this.showAddBtn,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",url:"/api/inventory/resource"}},head:function(){return{title:this.$t("Resources")}},computed:{formTitle:function(){return this.editedIndex===-1?this.$t("New Item"):this.$t("Edit Item")},buttonTitle:function(){return this.editedIndex===-1?this.$t("Save"):this.$t("Update")}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},mounted:function(){this.mappingHeader(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{formatPrice:function(t){var a=(t/1).toFixed(2).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},setEmptyToSelected:function(){this.selected=[]},newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},parseJson:function(t){return Array.isArray(JSON.parse(t))?JSON.parse(t).toString():t},actions:function(t,a){t==="edit"?this.editItem(a):this.deleteItem(a)},deleteItem:function(t){var a=this;this.$swal({title:this.$t("Are you sure you want to run this action?"),text:"Data cannot be change after posted!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Save"}).then(function(i){i.value&&(a.$nuxt.$loading.start(),a.$axios.delete(a.url+"/"+t.id).then(function(n){a.getDataFromApi()}).catch(function(n){a.$swal({type:"error",title:"Error",text:n.response.data.message})}).finally(function(){a.$nuxt.$loading.finish()}))})},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var a=this,i={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search};this.$axios.get(this.url,{params:j(j({},a.options),i)}).then(function(n){t.loading=!1,t.allData=n.data.data,t.totalData=n.data.total,t.itemSearch=n.data.filter,t.form=Object.assign({},n.data.form),t.defaultItem=Object.assign({},n.data.form)}).catch(function(n){t.loading=!1,t.$swal({type:"error",title:"Error",text:n.response.data.message})})},returnSelected:function(){return this.selected},mappingHeader:function(){this.viewData?this.headers=[{text:"Item Code",value:"code",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Name",value:"name",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Item Type",value:"resource_type",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Warehouse",value:"warehouse.code",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Status",value:"status",cellClass:"disable-wrap",class:"disable-wrap"}]:this.headers=[{text:"Item Code",value:"code",width:"120px"},{text:"Item Name",value:"name",width:"150px"},{text:"Unit",value:"unit",width:"150px"},{text:"Item Type",value:"resource_type",cellClass:"disable-wrap",class:"disable-wrap"},{text:"Warehouse",value:"warehouse.code",sortable:!1,filterable:!1},{text:"Status",value:"status",sortable:!1,filterable:!1},{text:"Action",value:"ACTIONS",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}},V=R,L=e(50),M=Object(L.a)(V,v,T,!1,null,null,null),z=r.default=M.exports}}]);
