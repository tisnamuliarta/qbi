(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{615:function(u,o,e){"use strict";var r=e(281),m=e.n(r),l=e(282);o.a=Object(l.a)("layout")},617:function(u,o,e){"use strict";var r=e(281),m=e.n(r),l=e(282);o.a=Object(l.a)("flex")},812:function(u,o,e){"use strict";e.r(o);var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-layout",[a("v-flex",{attrs:{sm12:""}},[a("div",{staticClass:"mt-0"},[a("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-key":"id","show-select":"",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(s){t.options=s}},scopedSlots:t._u([{key:"top",fn:function(){return[a("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Contacts","show-batch-action":"","show-new-data":"","new-data-text":"New Customer"},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.ACTIONS",fn:function(s){var c=s.item;return[a("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(i){return t.actions(t.itemAction,c)}}},[t._v(`
            `+t._s(t.itemText)+`
          `)]),t._v(" "),a("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var d=i.on,v=i.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",v,!1),d),[a("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),a("v-list",t._l(t.items,function(i,d){return a("v-list-item",{key:d,on:{click:function(v){return t.actions(i.action,c)}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(i.text))])],1)],1)}),1)],1)]}},{key:"item.balance",fn:function(s){var c=s.item;return[t._v(`
          `+t._s(t.$formatter.formatPrice(c.balance))+`
        `)]}}],null,!0),model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}})],1)]),t._v(" "),a("LazyInventoryFormContact",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle},on:{getDataFromApi:t.getDataFromApi}})],1)},m=[],l=e(21),A=e(283),L=e(9),M=e(4),p={name:"TableContact",props:{contactType:{type:String,default:"Customer"}},data:function(){return{selected:[],totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},headers:[{text:"Name",value:"name"},{text:"Type",value:"type"},{text:"Company",value:"company_name"},{text:"Email",value:"email",sortable:!1,filterable:!1},{text:"Phone",value:"phone",sortable:!1,filterable:!1},{text:"Balance",value:"balance",sortable:!1,filterable:!1},{text:"Action",value:"ACTIONS",align:"center",sortable:!1,filterable:!1}],items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:""}},computed:{formTitle:function(){return this.editedIndex===-1?"New Contacts":"Edit Contacts"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form,this.defaultItem)},actions:function(n,a){n==="edit"?this.editItem(a):this.deleteItem(a)},editItem:function(n){this.$router.push({path:"/app/contact/form-customer",query:{document:n.id}})},emitData:function(n){this.documentStatus=n.documentStatus,this.itemSearch=n.itemSearch,this.searchStatus=n.searchStatus,this.searchItem=n.searchItem,this.search=n.search,this.filters=n.filters,this.getDataFromApi()},getDataFromApi:function(){var n=this;this.loading=!0;var a=this;this.$axios.get("/api/bp/contacts",{params:{options:a.options,searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,contactType:a.contactType}}).then(function(s){n.loading=!1,n.allData=s.data.data.rows,n.totalData=s.data.data.total,n.itemSearch=s.data.filter,n.form=Object.assign({},s.data.data.form),n.defaultItem=Object.assign({},s.data.data.form)}).catch(function(s){n.loading=!1,n.$swal({type:"error",title:"Error",text:s.response.data.message})})}}},D=p,g=e(50),I=e(51),x=e.n(I),y=e(164),T=e(1018),C=e(617),b=e(246),E=e(615),S=e(248),V=e(165),f=e(34),O=e(573),h=Object(g.a)(D,r,m,!1,null,null,null),P=o.default=h.exports;x()(h,{VBtn:y.a,VDataTable:T.a,VFlex:C.a,VIcon:b.a,VLayout:E.a,VList:S.a,VListItem:V.a,VListItemContent:f.b,VListItemTitle:f.d,VMenu:O.a})}}]);
