(window.webpackJsonp=window.webpackJsonp||[]).push([[79,37],{1114:function(P,h,a){"use strict";a.r(h);var p=function(){var t=this,e=t._self._c;return e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"9",sm:"8"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[e("v-autocomplete",{attrs:{items:["planned","released","closed","cancel"],label:"Status","return-object":"","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.status,callback:function(s){t.$set(t.form,"status",s)},expression:"form.status"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e("v-text-field",{attrs:{label:"Transaction Date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto",type:"date"},model:{value:t.form.transaction_date,callback:function(s){t.$set(t.form,"transaction_date",s)},expression:"form.transaction_date"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"2",sm:"12"}},[e("v-autocomplete",{attrs:{items:t.itemProduct,label:"Item Code","return-object":"","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},on:{change:t.changeItem},model:{value:t.form.item_id,callback:function(s){t.$set(t.form,"item_id",s)},expression:"form.item_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}}),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[e("v-autocomplete",{attrs:{items:t.itemWarehouse,label:"Warehouse","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.warehouse_id,callback:function(s){t.$set(t.form,"warehouse_id",s)},expression:"form.warehouse_id"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e("v-text-field",{attrs:{label:"Planned Qty","persistent-hint":"",outlined:"",dense:"",type:"number","hide-details":"auto"},on:{change:t.changeQty},model:{value:t.form.planned_qty,callback:function(s){t.$set(t.form,"planned_qty",s)},expression:"form.planned_qty"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e("v-text-field",{attrs:{label:"Commission",readonly:"","persistent-hint":"",outlined:"",dense:"",type:"number","hide-details":"auto"},model:{value:t.form.commission_rate,callback:function(s){t.$set(t.form,"commission_rate",s)},expression:"form.commission_rate"}})],1)],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{staticClass:"text-right",attrs:{cols:"12",md:"3",xl:"2",sm:"4"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("p",{staticClass:"mb-0"},[t._v("Amount")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold text-h4"},[t._v(`
            `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
            `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
          `)])]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-chip",{attrs:{label:"",color:t.statusColor(t.form.status),dark:""}},[t._v(`
            `+t._s(t.form.status))])],1)],1)],1),t._v(" "),e("v-col",{staticClass:"mt-1",attrs:{cols:"12"}},[e("v-card",{attrs:{flat:""}},[e("div",{staticClass:"scroll-container-min"},[e("LazyProductionTableDetailProduction",{ref:"childDetails",on:{calcTotal:t.calcTotal}})],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{small:"",depressed:"",outlined:""},on:{click:function(s){return t.$refs.childDetails.addLine(1)}}},[t._v(`
            Add Line
            `),e("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"4",lg:"4"}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-textarea",{attrs:{rows:"2",label:"Memo",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.narration,callback:function(s){t.$set(t.form,"narration",s)},expression:"form.narration"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("DocumentFieldUpload",{ref:"uploadField",attrs:{"form-data":t.form,"form-type":"document"},on:{eventGetFiles:t.eventGetFiles}})],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6",lg:"5"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-row",{attrs:{dense:""}},[e("v-spacer"),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total Cost Item")])]),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
                `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
                `+t._s(isNaN(t.form.product_cost)?0:t.$formatter.formatPrice(t.form.product_cost))+`
              `)])])],1),t._v(" "),e("v-row",{attrs:{dense:""}},[e("v-spacer"),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total Cost Resource")])]),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
                `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
                `+t._s(isNaN(t.form.component_cost)?0:t.$formatter.formatPrice(t.form.component_cost))+`
              `)])])],1),t._v(" "),e("v-row",{attrs:{dense:""}},[e("v-spacer"),t._v(" "),e("v-col",{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total Cost")])]),t._v(" "),e("v-col",{staticClass:"text-right pa-1",staticStyle:{"border-top":"2px solid #222 !important"},attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
                `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
                `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
              `)])])],1)],1)],1)],1)],1)},g=[],w=a(24),D=a(74),T=a(59),V=a(4),F=a(10),y={name:"FormProduction",props:{formType:{type:String,default:""}},data:function(){return{tab:null,menu:"",menu2:"",menu3:"",menu4:"",logo:"",search:null,selectedItem:1,dialog:!1,checkbox:!1,deposit:!1,tax:!0,withholding:!1,submitLoad:!1,showLoading:!1,form:{},itemCategory:[],itemUnit:[],itemProduct:[],itemContact:[],itemAccounts:[],itemTag:[],itemPaymentTerm:[],itemWarehouse:[],itemFiles:[],taxDetails:[],itemSalesPersons:[],statusProcessing:"insert",valueWhenIsEmpty:"0",tempTotalTax:0,subTotalMinDiscount:0,taxAmount:0,taxDiscount:0,amountBeforeTax:0,withholdingAmount:0,commission:0,moneyOptions:{locale:"en",prefix:"",length:11,precision:0},moneyOptionTotal:{locale:"en",prefix:"",length:14,precision:2},moneyOptionTotalDiscount:{locale:"en",prefix:"",length:14,precision:0}}},activated:function(){var t=this;this.$nextTick(function(){t.$nuxt.$loading.start()})},mounted:function(){this.getMasterData()},methods:{changeItem:function(){var t=this.form.item_id;this.form.item_id=t.id,this.form.commission_rate=t.commision_rate,this.$refs.childDetails.setCommission(t.commision_rate)},changeQty:function(){this.$refs.childDetails.setQty(this.form.planned_qty)},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},statusColor:function(t){switch(t){case"planned":return"blue darken-3";case"partial":return"orange";case"released":return"orange";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},calcTotal:function(t){try{this.form.main_account_amount=t.subTotal,this.form.product_cost=t.productCost,this.form.component_cost=t.componentCost}catch(e){console.log(e)}},showLoad:function(t){this.showLoading=t},setData:function(t){var e=this;this.showLoading=!0,setTimeout(function(){e.$refs.childDetails.setDataToDetails([{item_type:"resource",quantity:null}],t)},500),this.form=Object.assign({},t),this.form.tax_details&&(this.form.tax_details=this.reduceArrayTax(this.form.tax_details)),this.moneyOptionTotal.prefix=this.form.default_currency_symbol,this.moneyOptionTotalDiscount.prefix=this.form.default_currency_symbol,this.moneyOptions.prefix=this.form.default_currency_symbol,this.statusProcessing="insert"},eventGetFiles:function(t){this.itemFiles=t.row},getMasterData:function(){var t=this;return Object(w.a)(regeneratorRuntime.mark(function e(){var m,s,v;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t.$nuxt.$loading.start(),c.prev=1,c.next=4,t.$axios.get("/api/inventory/items");case 4:return m=c.sent,c.next=7,t.$axios.get("/api/inventory/warehouse");case 7:return s=c.sent,c.next=10,t.$axios.get("/api/financial/accounts",{params:{type:"All"}});case 10:v=c.sent,t.itemAccounts=v.data.data,t.itemProduct=m.data.data,t.itemWarehouse=s.data.data,t.$auth.$storage.removeState("tax"),t.$auth.$storage.removeState("warehouse"),t.$auth.$storage.setState("warehouse",s.data.simple),c.next=22;break;case 19:c.prev=19,c.t0=c.catch(1),t.$swal({type:"error",title:"Error",text:c.t0.response.data.error});case 22:case"end":return c.stop()}},e,null,[[1,19]])}))()},checkDocument:function(){var t=this.$route.query.type;switch(t){case"SQ":case"PQ":return!1;default:return!0}},returnData:function(t){var e=this,m={},s=e.$refs.childDetails.getAddData(t);return s.forEach(function(v,C){e.$refs.childDetails.checkIfEmptyRow(C)||(m[C]=v)}),this.form.line_items=m,this.form},changeValue:function(t,e){this.form[t]=e}}},x=y,$=a(50),A=a(51),d=a.n(A),n=a(637),o=a(164),r=a(248),i=a(88),u=a(578),f=a(585),z=a(247),L=a(599),S=a(593),O=a(574),I=a(662),b=Object($.a)(x,p,g,!1,null,null,null),j=h.default=b.exports;d()(b,{DocumentFieldUpload:a(642).default}),d()(b,{VAutocomplete:n.a,VBtn:o.a,VCard:r.a,VCardActions:i.a,VChip:u.a,VCol:f.a,VIcon:z.a,VRow:L.a,VSpacer:S.a,VTextField:O.a,VTextarea:I.a})},642:function(P,h,a){"use strict";a.r(h);var p=function(){var n=this,o=n._self._c;return o("div",[o("dropzone",{ref:"attachment",attrs:{id:"attachment",options:n.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(i,u,f){return n.sendingParams(i,u,f)},"vdropzone-success":function(i,u){return n.reloadAttachment(i,u)},"vdropzone-error":function(i,u,f){return n.handleError(i,u,f)}}})],1)},g=[],w=a(59),D=a(660),T=a.n(D),V=a(661),F={name:"FieldUpload",components:{Dropzone:T.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:window.location.protocol+"//"+window.location.hostname+"/qb-core/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*, application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getCookie("_token.local")}}}},methods:{sendingParams:function(n,o,r){var i=this.form.id!==0?this.form.id:this.form.temp_id;r.append("temp_id",i),r.append("type",this.formType)},handleError:function(n,o,r){this.$swal({type:"error",title:"Error...",text:o.message})},reloadAttachment:function(n,o){var r=this;o.errors?this.$swal({type:"error",title:"Oops...",text:o.message}):(setTimeout(function(){r.getFiles()},300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var n=this;this.showLoadingAttachment=!0;var o=this,r=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(o.options.url,{params:{type:this.formType,temp_id:r}}).then(function(i){n.$emit("eventGetFiles",{row:i.data.rows}),o.showLoadingAttachment=!1}).catch(function(i){n.showLoadingAttachment=!1,n.$swal({type:"error",title:"Error...",text:i.response.message})})},deleteFile:function(n){var o=this,r=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(i){i.value&&o.$axios.delete(r.options.url,{params:{id:n.id}}).then(function(u){o.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),r.getFiles()}).catch(function(u){o.$swal({type:"error",title:"Oops...",text:u.response.data.message})})})}}},y=F,x=a(50),$=Object(x.a)(y,p,g,!1,null,null,null),A=h.default=$.exports}}]);
