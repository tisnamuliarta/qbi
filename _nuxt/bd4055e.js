(window.webpackJsonp=window.webpackJsonp||[]).push([[57,31],{1112:function(E,d,o){"use strict";o.r(d);var I=o(27),A=o(7),F=o(46),g=function(){var t=this,e=t._self._c;return e("div",[e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"600px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-form",[e("v-container",[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-autocomplete",{attrs:{items:t.itemGroup,label:"Type","item-text":"name","item-value":"id",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},scopedSlots:t._u([{key:"item",fn:function(a){return[e("v-list-item-content",[e("v-list-item-title",{staticClass:"font-weight-bold",domProps:{textContent:t._s(a.item.name)}}),t._v(" "),e("v-list-item-subtitle",{domProps:{textContent:t._s(a.item.desc)}})],1)]}}]),model:{value:t.form.item_group_id,callback:function(a){t.$set(t.form,"item_group_id",a)},expression:"form.item_group_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"8"}},[e("v-text-field",{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-text-field",{attrs:{label:"Code",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.code,callback:function(a){t.$set(t.form,"code",a)},expression:"form.code"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-autocomplete",{attrs:{items:t.itemCategory,label:"Category","item-text":"name","item-value":"id",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.category_id,callback:function(a){t.$set(t.form,"category_id",a)},expression:"form.category_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-autocomplete",{attrs:{items:t.itemUnit,label:"Unit","item-text":"name","item-value":"name",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.unit,callback:function(a){t.$set(t.form,"unit",a)},expression:"form.unit"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-autocomplete",{attrs:{items:t.itemPriceList,label:"Price List","item-text":"price_list_name","item-value":"id",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:t.form.price_list_id,callback:function(a){t.$set(t.form,"price_list_id",a)},expression:"form.price_list_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-text-field",{staticClass:"text-money",attrs:{type:"number","value-when-is-empty":t.valueWhenIsEmpty,options:t.moneyOptions,label:"Commission Rate",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.commision_rate,callback:function(a){t.$set(t.form,"commision_rate",a)},expression:"form.commision_rate"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-card",{attrs:{flat:""}},[e("v-tabs",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.items,function(s){return e("v-tab",{key:s.tab,attrs:{href:s.href}},[t._v(`
                      `+t._s(s.tab)+`
                    `)])}),1),t._v(" "),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{attrs:{value:"tab-1"}},[e("v-row",{staticClass:"mt-2",attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Descriptions",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.description,callback:function(a){t.$set(t.form,"description",a)},expression:"form.description"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-text-field",{staticClass:"text-money",attrs:{type:"number","value-when-is-empty":t.valueWhenIsEmpty,options:t.moneyOptions,label:"Sales Price",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.sale_price,callback:function(a){t.$set(t.form,"sale_price",a)},expression:"form.sale_price"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"9"}},[e("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Income Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.revenue_account_id,callback:function(a){t.$set(t.form,"revenue_account_id",a)},expression:"form.revenue_account_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-autocomplete",{attrs:{items:t.itemTax,"item-text":"name","item-value":"id",label:"Sales Tax",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.sell_tax_id,callback:function(a){t.$set(t.form,"sell_tax_id",a)},expression:"form.sell_tax_id"}})],1)],1)],1),t._v(" "),e("v-tab-item",{attrs:{value:"tab-2"}},[e("v-row",{staticClass:"mt-2",attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Descriptions",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.purchase_description,callback:function(a){t.$set(t.form,"purchase_description",a)},expression:"form.purchase_description"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"3"}},[e("v-text-field",{staticClass:"text-money",attrs:{type:"number","value-when-is-empty":t.valueWhenIsEmpty,options:t.moneyOptions,label:"Cost",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.purchase_price,callback:function(a){t.$set(t.form,"purchase_price",a)},expression:"form.purchase_price"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"9"}},[e("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Expense Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.expense_account_id,callback:function(a){t.$set(t.form,"expense_account_id",a)},expression:"form.expense_account_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-autocomplete",{attrs:{items:t.itemContact,"item-text":"name","item-value":"id",label:"Prefered Vendor",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.contact_id,callback:function(a){t.$set(t.form,"contact_id",a)},expression:"form.contact_id"}})],1)],1)],1),t._v(" "),e("v-tab-item",{attrs:{value:"tab-3"}},[e("v-row",{staticClass:"mt-2",attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Default Inventory Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.inventory_account,callback:function(a){t.$set(t.form,"inventory_account",a)},expression:"form.inventory_account"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"COGS Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.cogs_account_id,callback:function(a){t.$set(t.form,"cogs_account_id",a)},expression:"form.cogs_account_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Allocation Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.allocation_account_id,callback:function(a){t.$set(t.form,"allocation_account_id",a)},expression:"form.allocation_account_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-autocomplete",{attrs:{items:t.itemAccounts,"item-text":"name","item-value":"id",label:"Price Diff Account",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.price_diff_account_id,callback:function(a){t.$set(t.form,"price_diff_account_id",a)},expression:"form.price_diff_account_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Warehouse")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("On Hand")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Ordered")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Committed")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Available")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Cost")])])]),t._v(" "),e("tbody",t._l(t.form.item_warehouse,function(a){return e("tr",{key:a.whs_name},[e("td",[t._v(t._s(a.whs_name))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(`
                                    `+t._s(t.$formatter.formatPrice(a.on_hand_qty))+`
                                  `)]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(`
                                    `+t._s(t.$formatter.formatPrice(a.ordered_qty))+`
                                  `)]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(`
                                    `+t._s(t.$formatter.formatPrice(a.committed_qty))+`
                                  `)]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(`
                                    `+t._s(t.$formatter.formatPrice(a.available_qty))+`
                                  `)]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(`
                                    `+t._s(t.$auth.user.entity.currency.currency_symbol+" "+t.$formatter.formatPrice(a.item_cost))+`
                                  `)])])}),0)]},proxy:!0}])})],1)],1)],1),t._v(" "),e("v-tab-item",{attrs:{value:"tab-4"}},[e("v-row",{staticClass:"mt-2",attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-autocomplete",{attrs:{items:["backflush","manual"],label:"Issue Method",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.issue_method,callback:function(a){t.$set(t.form,"issue_method",a)},expression:"form.issue_method"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-autocomplete",{attrs:{items:["production","sales","assembly","template"],label:"Material Type",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.material_type,callback:function(a){t.$set(t.form,"material_type",a)},expression:"form.material_type"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-autocomplete",{attrs:{items:["moving average"],label:"Valuation Method",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.valuation_method,callback:function(a){t.$set(t.form,"valuation_method",a)},expression:"form.valuation_method"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(a){return t.save()}}},[t._v(`
          `+t._s(t.buttonTitle)+`
        `)])]},proxy:!0}])}),t._v(" "),e("LazyInventoryFormMaster",{ref:"formMaster",on:{returnData:t.returnData}})],1)},y=[],x=o(24),T=o(59),P=o(74),C={name:"FormProduct",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{logo:"",dialog:!1,tab:null,submitLoad:!1,form:this.formData,selectedItem:1,itemCategory:[],itemUnit:[],itemPriceList:[],itemAccounts:[],itemWarehouse:[],items:[{tab:"Sales Data",href:"#tab-1"},{tab:"Purchase Data",href:"#tab-2"},{tab:"Inventory Data",href:"#tab-3"},{tab:"Production Data",href:"#tab-4"}],itemGroup:[{id:1,name:"Inventory",desc:this.$t("Product you buy and/or sell and you track quantities of")},{id:3,name:"Service",desc:this.$t("Service that you provide to customers, for example, landscaping or tax preparation services")}],menu:"",itemTax:[],itemContact:[],images:[],statusProcessing:"insert",valueWhenIsEmpty:null,temp_image:null,url:"/api/inventory/items",moneyOptions:{suffix:"",length:11,precision:2},options:{url:"/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE"}}},methods:{loadData:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark(function e(){var n,s,a,f,_,S,O;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,t.$axios.get("/api/inventory/item-category");case 3:return n=l.sent,l.next=6,t.$axios.get("/api/inventory/item-units");case 6:return s=l.sent,l.next=9,t.$axios.get("/api/financial/accounts",{params:{type:"All"}});case 9:return a=l.sent,l.next=12,t.$axios.get("/api/financial/taxes");case 12:return f=l.sent,l.next=15,t.$axios.get("/api/bp/contacts");case 15:return _=l.sent,l.next=18,t.$axios.get("/api/inventory/warehouse");case 18:return S=l.sent,l.next=21,t.$axios.get("/api/inventory/price-list");case 21:O=l.sent,t.itemCategory=n.data.data,t.itemUnit=s.data.data,t.itemAccounts=a.data.data,t.itemTax=f.data.data,t.itemContact=_.data.data,t.itemWarehouse=S.data.data,t.itemPriceList=O.data.data,l.next=34;break;case 31:l.prev=31,l.t0=l.catch(0),t.$swal({type:"error",title:"Error",text:l.t0.response.data.error});case 34:case"end":return l.stop()}},e,null,[[0,31]])}))()},newData:function(t){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},t),this.getFiles(),this.loadData()},editItem:function(t,e){var n=t;this.form=Object.assign({},n),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.getFiles(),this.loadData()},sendingParams:function(t,e,n){var s=this.form.id?this.form.id:this.form.temp_id;n.append("temp_id",s),n.append("type","item")},handleError:function(t,e,n){this.$swal({type:"error",title:"Error...",text:e.message})},reloadAttachment:function(t,e){var n=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(this.$emit("eventCountAttachment",{total:e.data.count,row:this.row}),setTimeout(function(){n.getFiles()},300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var t=this;this.showLoadingAttachment=!0;var e=this,n=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(this.options.url,{params:{type:"item",temp_id:n}}).then(function(s){e.images=s.data.data,e.total=s.data.total,e.showLoadingAttachment=!1}).catch(function(s){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Oops...",text:s.response.message})})},returnData:function(t){t.type==="Item Category"?this.itemCategory=t.item:t.type==="Item Unit"&&(this.itemUnit=t.item)},close:function(){var t=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout(function(){t.form=Object.assign({},t.defaultItem)},300)},save:function(){var t=this,e=this.statusProcessing;e==="insert"?(this.store("post",this.url,this.form),t.submitLoad=!1):e==="update"&&(this.store("put",this.url+"/"+this.form.id,this.form),t.submitLoad=!1)},store:function(t,e,n){var s=this,a=this;a.submitLoad=!0,this.$axios({method:t,url:e,data:n}).then(function(f){s.$refs.dialogForm.closeDialog(),s.$emit("getDataFromApi")}).catch(function(f){s.$swal({type:"error",title:"Error",text:f.response.data.message}),a.submitLoad=!1})}}},u=C,$=o(50),V=o(51),p=o.n(V),D=o(634),h=o(164),L=o(248),m=o(585),i=o(586),r=o(625),v=o(35),b=o(599),j=o(627),W=o(594),R=o(698),U=o(596),M=o(373),w=o(574),k=Object($.a)(u,g,y,!1,null,null,null),B=d.default=k.exports;p()(k,{DialogForm:o(601).default}),p()(k,{VAutocomplete:D.a,VBtn:h.a,VCard:L.a,VCol:m.a,VContainer:i.a,VForm:r.a,VListItemContent:v.a,VListItemSubtitle:v.b,VListItemTitle:v.c,VRow:b.a,VSimpleTable:j.a,VTab:W.a,VTabItem:R.a,VTabs:U.a,VTabsItems:M.a,VTextField:w.a})},601:function(E,d,o){"use strict";o.r(d);var I=function(){var i=this,r=i._self._c;return r("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:i.original,"max-width":i.maxWidth,transition:"dialog-top-transition"},model:{value:i.dialog,callback:function(b){i.dialog=b},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"subtitle-2"},[i._v(i._s(i.dialogTitle))]),i._v(" "),r("v-spacer"),i._v(" "),r("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(b){return i.closeDialog()}}},[r("v-icon",[i._v("mdi-close-circle")])],1)],1),i._v(" "),r("v-divider"),i._v(" "),r("v-card-text",{staticClass:"pr-0 pl-0"},[i._t("content")],2),i._v(" "),r("v-divider"),i._v(" "),r("v-card-actions",[i._t("addLine"),i._v(" "),r("v-spacer"),i._v(" "),i._t("saveData")],2)],1)],1)},A=[],F={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},g=F,y=o(50),x=o(51),T=o.n(x),P=o(164),C=o(248),u=o(88),$=o(595),V=o(576),p=o(247),D=o(593),h=Object(y.a)(g,I,A,!1,null,null,null),L=d.default=h.exports;T()(h,{VBtn:P.a,VCard:C.a,VCardActions:u.a,VCardText:u.b,VCardTitle:u.c,VDialog:$.a,VDivider:V.a,VIcon:p.a,VSpacer:D.a})}}]);