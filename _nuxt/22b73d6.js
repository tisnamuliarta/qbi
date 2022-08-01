(window.webpackJsonp=window.webpackJsonp||[]).push([[76,34],{1108:function(t,e,o){"use strict";o.r(e);var n=o(25),r=(o(74),o(59),o(4),o(10),{name:"FormDocumentReceipt",props:{formType:{type:String,default:""}},data:function(){return{tab:null,menu:"",menu2:"",menu3:"",menu4:"",logo:"",search:null,selectedItem:1,dialog:!1,checkbox:!1,deposit:!1,tax:!0,withholding:!1,submitLoad:!1,showLoading:!1,form:{},itemCategory:[],itemUnit:[],itemProduct:[],itemContact:[],itemAccounts:[],itemTag:[],itemPaymentTerm:[],itemWarehouse:[],itemFiles:[],taxDetails:[],itemSalesPersons:[],statusProcessing:"insert",valueWhenIsEmpty:"0",tempTotalTax:0,subTotalMinDiscount:0,taxAmount:0,taxDiscount:0,amountBeforeTax:0,withholdingAmount:0,commission:0,moneyOptions:{locale:"en",prefix:"",length:11,precision:0},moneyOptionTotal:{locale:"en",prefix:"",length:14,precision:2},moneyOptionTotalDiscount:{locale:"en",prefix:"",length:14,precision:0}}},activated:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start()}))},mounted:function(){this.getMasterData()},methods:{changeItem:function(){var t=this.form.item_id;this.form.item_id=t.id,this.form.commission_rate=t.commision_rate,this.$refs.childDetails.setCommission(t.commision_rate)},changeQty:function(){this.$refs.childDetails.setQty(this.form.planned_qty)},checkDisable:function(){return"closed"===this.form.status||"cancel"===this.form.status},statusColor:function(t){switch(t){case"planned":return"blue darken-3";case"partial":case"released":return"orange";case"closed":return"green";case"overdue":case"cancel":return"red"}},calcTotal:function(data){try{this.form.main_account_amount=data.subTotal}catch(t){console.log(t)}},showLoad:function(t){this.showLoading=t},setData:function(form){var t=this;this.showLoading=!0,setTimeout((function(){t.$refs.childDetails.setDataToDetails([{quantity:null}],form)}),500),this.form=Object.assign({},form),this.moneyOptionTotal.prefix=this.form.default_currency_symbol,this.moneyOptionTotalDiscount.prefix=this.form.default_currency_symbol,this.moneyOptions.prefix=this.form.default_currency_symbol,this.statusProcessing="insert"},eventGetFiles:function(data){this.itemFiles=data.row},getMasterData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),e.prev=1,e.next=4,t.$axios.get("/api/inventory/items");case 4:return o=e.sent,e.next=7,t.$axios.get("/api/inventory/warehouse");case 7:return n=e.sent,e.next=10,t.$axios.get("/api/financial/accounts",{params:{type:"All"}});case 10:r=e.sent,t.itemAccounts=r.data.data,t.itemProduct=o.data.data,t.itemWarehouse=n.data.data,t.$auth.$storage.removeState("tax"),t.$auth.$storage.removeState("warehouse"),t.$auth.$storage.setState("warehouse",n.data.simple),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),t.$swal({type:"error",title:"Error",text:e.t0.response.data.error});case 22:case"end":return e.stop()}}),e,null,[[1,19]])})))()},checkDocument:function(){switch(this.$route.query.type){case"SQ":case"PQ":return!1;default:return!0}},returnData:function(t){var e=this,details={};return e.$refs.childDetails.getAddData(t).forEach((function(t,o){e.$refs.childDetails.checkIfEmptyRow(o)||(details[o]=t)})),this.form.line_items=details,this.form},changeValue:function(t,e){this.form[t]=e}}}),c=o(50),l=o(51),m=o.n(l),d=o(637),h=o(164),f=o(248),v=o(88),_=o(578),w=o(585),x=o(247),y=o(598),$=o(593),D=o(575),T=o(659),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"9",sm:"8"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[e("v-text-field",{attrs:{label:"Reference",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reference_no,callback:function(e){t.$set(t.form,"reference_no",e)},expression:"form.reference_no"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e("v-text-field",{attrs:{label:"Transaction Date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto",type:"date"},model:{value:t.form.transaction_date,callback:function(e){t.$set(t.form,"transaction_date",e)},expression:"form.transaction_date"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[e("v-autocomplete",{attrs:{items:t.itemWarehouse,label:"Warehouse","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.warehouse_id,callback:function(e){t.$set(t.form,"warehouse_id",e)},expression:"form.warehouse_id"}})],1)],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{staticClass:"text-right",attrs:{cols:"12",md:"3",xl:"2",sm:"4"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("p",{staticClass:"mb-0"},[t._v("Amount")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold text-h4"},[t._v("\n            "+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+"\n          ")])]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-chip",{attrs:{label:"",color:t.statusColor(t.form.status),dark:""}},[t._v("\n            "+t._s(t.form.status))])],1)],1)],1),t._v(" "),e("v-col",{staticClass:"mt-1",attrs:{cols:"12"}},[e("v-card",{attrs:{flat:""}},[e("div",{staticClass:"scroll-container-min"},[e("LazyReceiptTableDetailReceipt",{ref:"childDetails",on:{calcTotal:t.calcTotal}})],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{small:"",depressed:"",outlined:""},on:{click:function(e){return t.$refs.childDetails.addLine(1)}}},[t._v("\n            Add Line\n            "),e("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4",lg:"4"}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-textarea",{attrs:{rows:"2",label:"Memo",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.narration,callback:function(e){t.$set(t.form,"narration",e)},expression:"form.narration"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("DocumentFieldUpload",{ref:"uploadField",attrs:{"form-data":t.form,"form-type":"document"},on:{eventGetFiles:t.eventGetFiles}})],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{dense:""}},[e("v-spacer"),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total")])]),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("\n                "+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+"\n              ")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{DocumentFieldUpload:o(640).default}),m()(component,{VAutocomplete:d.a,VBtn:h.a,VCard:f.a,VCardActions:v.a,VChip:_.a,VCol:w.a,VIcon:x.a,VRow:y.a,VSpacer:$.a,VTextField:D.a,VTextarea:T.a})},640:function(t,e,o){"use strict";o.r(e);o(59);var n=o(657),r=o.n(n),c=(o(658),{name:"FieldUpload",components:{Dropzone:r.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:window.location.protocol+"//"+window.location.hostname+"/qb-core/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getLocalStorage("_token.local")}}}},methods:{sendingParams:function(t,e,o){var n=0!==this.form.id?this.form.id:this.form.temp_id;o.append("temp_id",n),o.append("type",this.formType)},handleError:function(t,e,o){this.$swal({type:"error",title:"Error...",text:e.message})},reloadAttachment:function(t,e){var o=this;e.errors?this.$swal({type:"error",title:"Oops...",text:e.message}):(setTimeout((function(){o.getFiles()}),300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var t=this;this.showLoadingAttachment=!0;var e=this,o=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(e.options.url,{params:{type:this.formType,temp_id:o}}).then((function(o){t.$emit("eventGetFiles",{total:o.data.data.total,row:o.data.data.rows}),e.showLoadingAttachment=!1})).catch((function(e){t.showLoadingAttachment=!1,t.$swal({type:"error",title:"Error...",text:e.response.message})}))},deleteFile:function(t){var e=this,o=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&e.$axios.delete(o.options.url,{params:{id:t.id}}).then((function(t){e.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),o.getFiles()})).catch((function(t){e.$swal({type:"error",title:"Oops...",text:t.response.data.message})}))}))}}}),l=o(50),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("dropzone",{ref:"attachment",attrs:{id:"attachment",options:t.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(e,o,n){return t.sendingParams(e,o,n)},"vdropzone-success":function(e,o){return t.reloadAttachment(e,o)},"vdropzone-error":function(e,o,n){return t.handleError(e,o,n)}}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);