(window.webpackJsonp=window.webpackJsonp||[]).push([[88,37],{1130:function(b,h,a){"use strict";a.r(h);var p=function(){var t=this,e=t._self._c;return e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"9",sm:"8"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"2",sm:"12"}},[e("v-text-field",{attrs:{label:"Reference",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reference_no,callback:function(c){t.$set(t.form,"reference_no",c)},expression:"form.reference_no"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e("v-text-field",{attrs:{label:"Transaction Date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto",type:"date"},model:{value:t.form.transaction_date,callback:function(c){t.$set(t.form,"transaction_date",c)},expression:"form.transaction_date"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"2",sm:"12"}},[e("v-autocomplete",{attrs:{items:t.itemWarehouse,label:"Warehouse","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.warehouse_id,callback:function(c){t.$set(t.form,"warehouse_id",c)},expression:"form.warehouse_id"}})],1)],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{staticClass:"text-right",attrs:{cols:"12",md:"3",xl:"2",sm:"4"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("p",{staticClass:"mb-0"},[t._v("Amount")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold text-h4"},[t._v(`
            `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
          `)])]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-chip",{attrs:{label:"",color:t.statusColor(t.form.status),dark:""}},[t._v(`
            `+t._s(t.form.status))])],1)],1)],1),t._v(" "),e("v-col",{staticClass:"mt-1",attrs:{cols:"12"}},[e("v-card",{attrs:{flat:""}},[e("div",{staticClass:"scroll-container-min"},[e("LazyReceiptTableDetailReceipt",{ref:"childDetails",on:{calcTotal:t.calcTotal}})],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{small:"",depressed:"",outlined:""},on:{click:function(c){return t.$refs.childDetails.addLine(1)}}},[t._v(`
            Add Line
            `),e("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4",lg:"4"}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-textarea",{attrs:{rows:"2",label:"Memo",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.narration,callback:function(c){t.$set(t.form,"narration",c)},expression:"form.narration"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("DocumentFieldUpload",{ref:"uploadField",attrs:{"form-data":t.form,"form-type":"document"},on:{eventGetFiles:t.eventGetFiles}})],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{dense:""}},[e("v-spacer"),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total")])]),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
                `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
              `)])])],1)],1)],1)],1)],1)},g=[],T=a(24),C=a(74),F=a(59),R=a(4),A=a(10),y={name:"FormDocumentReceipt",props:{formType:{type:String,default:""}},data:function(){return{tab:null,menu:"",menu2:"",menu3:"",menu4:"",logo:"",search:null,selectedItem:1,dialog:!1,checkbox:!1,deposit:!1,tax:!0,withholding:!1,submitLoad:!1,showLoading:!1,form:{},itemCategory:[],itemUnit:[],itemProduct:[],itemContact:[],itemAccounts:[],itemTag:[],itemPaymentTerm:[],itemWarehouse:[],itemFiles:[],taxDetails:[],itemSalesPersons:[],statusProcessing:"insert",valueWhenIsEmpty:"0",tempTotalTax:0,subTotalMinDiscount:0,taxAmount:0,taxDiscount:0,amountBeforeTax:0,withholdingAmount:0,commission:0,moneyOptions:{locale:"en",prefix:"",length:11,precision:0},moneyOptionTotal:{locale:"en",prefix:"",length:14,precision:2},moneyOptionTotalDiscount:{locale:"en",prefix:"",length:14,precision:0}}},activated:function(){var t=this;this.$nextTick(function(){t.$nuxt.$loading.start()})},mounted:function(){this.getMasterData()},methods:{changeItem:function(){var t=this.form.item_id;this.form.item_id=t.id,this.form.commission_rate=t.commision_rate,this.$refs.childDetails.setCommission(t.commision_rate)},changeQty:function(){this.$refs.childDetails.setQty(this.form.planned_qty)},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},statusColor:function(t){switch(t){case"planned":return"blue darken-3";case"partial":return"orange";case"released":return"orange";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},calcTotal:function(t){try{this.form.main_account_amount=t.subTotal}catch(e){console.log(e)}},showLoad:function(t){this.showLoading=t},setData:function(t){var e=this;this.showLoading=!0,setTimeout(function(){e.$refs.childDetails.setDataToDetails([{quantity:null}],t)},500),this.form=Object.assign({},t),this.moneyOptionTotal.prefix=this.form.default_currency_symbol,this.moneyOptionTotalDiscount.prefix=this.form.default_currency_symbol,this.moneyOptions.prefix=this.form.default_currency_symbol,this.statusProcessing="insert"},eventGetFiles:function(t){this.itemFiles=t.row},getMasterData:function(){var t=this;return Object(T.a)(regeneratorRuntime.mark(function e(){var u,c,v;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t.$nuxt.$loading.start(),l.prev=1,l.next=4,t.$axios.get("/api/inventory/items");case 4:return u=l.sent,l.next=7,t.$axios.get("/api/inventory/warehouse");case 7:return c=l.sent,l.next=10,t.$axios.get("/api/financial/accounts",{params:{type:"All"}});case 10:v=l.sent,t.itemAccounts=v.data.data,t.itemProduct=u.data.data,t.itemWarehouse=c.data.data,t.$auth.$storage.removeState("tax"),t.$auth.$storage.removeState("warehouse"),t.$auth.$storage.setState("warehouse",c.data.simple),l.next=22;break;case 19:l.prev=19,l.t0=l.catch(1),t.$swal({type:"error",title:"Error",text:l.t0.response.data.error});case 22:case"end":return l.stop()}},e,null,[[1,19]])}))()},checkDocument:function(){var t=this.$route.query.type;switch(t){case"SQ":case"PQ":return!1;default:return!0}},returnData:function(t){var e=this,u={},c=e.$refs.childDetails.getAddData(t);return c.forEach(function(v,w){e.$refs.childDetails.checkIfEmptyRow(w)||(u[w]=v)}),this.form.line_items=u,this.form},changeValue:function(t,e){this.form[t]=e}}},x=y,$=a(50),V=a(51),m=a.n(V),s=a(634),o=a(164),n=a(248),r=a(88),d=a(578),f=a(585),z=a(247),L=a(599),O=a(593),P=a(574),S=a(659),D=Object($.a)(x,p,g,!1,null,null,null),E=h.default=D.exports;m()(D,{DocumentFieldUpload:a(642).default}),m()(D,{VAutocomplete:s.a,VBtn:o.a,VCard:n.a,VCardActions:r.a,VChip:d.a,VCol:f.a,VIcon:z.a,VRow:L.a,VSpacer:O.a,VTextField:P.a,VTextarea:S.a})},642:function(b,h,a){"use strict";a.r(h);var p=function(){var s=this,o=s._self._c;return o("div",[o("dropzone",{ref:"attachment",attrs:{id:"attachment",options:s.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(r,d,f){return s.sendingParams(r,d,f)},"vdropzone-success":function(r,d){return s.reloadAttachment(r,d)},"vdropzone-error":function(r,d,f){return s.handleError(r,d,f)}}})],1)},g=[],T=a(59),C=a(657),F=a.n(C),R=a(658),A={name:"FieldUpload",components:{Dropzone:F.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:window.location.protocol+"//"+window.location.hostname+"/qb-core/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*, application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getCookie("_token.local")}}}},methods:{sendingParams:function(s,o,n){var r=this.form.id!==0?this.form.id:this.form.temp_id;n.append("temp_id",r),n.append("type",this.formType)},handleError:function(s,o,n){this.$swal({type:"error",title:"Error...",text:o.message})},reloadAttachment:function(s,o){var n=this;o.errors?this.$swal({type:"error",title:"Oops...",text:o.message}):(setTimeout(function(){n.getFiles()},300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var s=this;this.showLoadingAttachment=!0;var o=this,n=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(o.options.url,{params:{type:this.formType,temp_id:n}}).then(function(r){s.$emit("eventGetFiles",{row:r.data.rows}),o.showLoadingAttachment=!1}).catch(function(r){s.showLoadingAttachment=!1,s.$swal({type:"error",title:"Error...",text:r.response.message})})},deleteFile:function(s){var o=this,n=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(r){r.value&&o.$axios.delete(n.options.url,{params:{id:s.id}}).then(function(d){o.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),n.getFiles()}).catch(function(d){o.$swal({type:"error",title:"Oops...",text:d.response.data.message})})})}}},y=A,x=a(50),$=Object(x.a)(y,p,g,!1,null,null,null),V=h.default=$.exports}}]);