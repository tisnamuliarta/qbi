(window.webpackJsonp=window.webpackJsonp||[]).push([[85,37],{1127:function(_,v,a){"use strict";a.r(v);var g=a(633),b=a(165),F=a(249),C=a(87),D=a(577),s=a(587),w=a(247),u=a(598),p=a(589),y=a(573),P=a(658),h=function(){var t=this,e=t._self._c;return e(u.a,{attrs:{dense:""}},[e(s.a,{attrs:{cols:"12",md:"9",sm:"8"}},[e(u.a,{attrs:{dense:""}},[e(s.a,{attrs:{cols:"12",md:"4",sm:"12"}},[e(g.a,{attrs:{items:["planned","released","closed","cancel"],label:"Status","return-object":"","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.status,callback:function(o){t.$set(t.form,"status",o)},expression:"form.status"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e(y.a,{attrs:{label:"Transaction Date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto",type:"date"},model:{value:t.form.transaction_date,callback:function(o){t.$set(t.form,"transaction_date",o)},expression:"form.transaction_date"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",md:"2",sm:"12"}},[e(g.a,{attrs:{items:t.itemProduct,label:"Item Code","return-object":"","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},on:{change:t.changeItem},model:{value:t.form.item_id,callback:function(o){t.$set(t.form,"item_id",o)},expression:"form.item_id"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}}),t._v(" "),e(s.a,{attrs:{cols:"12",md:"4",sm:"12"}},[e(g.a,{attrs:{items:t.itemWarehouse,label:"Warehouse","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.warehouse_id,callback:function(o){t.$set(t.form,"warehouse_id",o)},expression:"form.warehouse_id"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e(y.a,{attrs:{label:"Planned Qty","persistent-hint":"",outlined:"",dense:"",type:"number","hide-details":"auto"},on:{change:t.changeQty},model:{value:t.form.planned_qty,callback:function(o){t.$set(t.form,"planned_qty",o)},expression:"form.planned_qty"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e(y.a,{attrs:{label:"Commission","persistent-hint":"",outlined:"",dense:"",type:"number","hide-details":"auto"},model:{value:t.form.commission_rate,callback:function(o){t.$set(t.form,"commission_rate",o)},expression:"form.commission_rate"}})],1)],1)],1),t._v(" "),e(p.a),t._v(" "),e(s.a,{staticClass:"text-right",attrs:{cols:"12",md:"3",xl:"2",sm:"4"}},[e(u.a,{attrs:{dense:""}},[e(s.a,{staticClass:"pt-0",attrs:{cols:"12"}},[e("p",{staticClass:"mb-0"},[t._v("Amount")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold text-h4"},[t._v(`
          `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
          `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
        `)])]),t._v(" "),e(s.a,{attrs:{cols:"12"}},[e(D.a,{attrs:{label:"",color:t.statusColor(t.form.status),dark:""}},[t._v(`
          `+t._s(t.form.status))])],1)],1)],1),t._v(" "),e(s.a,{staticClass:"mt-1",attrs:{cols:"12"}},[e("div",{staticClass:"scroll-container-min"},[e("LazyProductionTableDetailProduction",{ref:"childDetails",on:{calcTotal:t.calcTotal}})],1),t._v(" "),e(F.a,{attrs:{flat:""}},[e(C.a,[e(b.a,{attrs:{small:"",depressed:"",outlined:""},on:{click:function(o){return t.$refs.childDetails.addLine(1)}}},[t._v(`
          Add Line
          `),e(w.a,[t._v("mdi-plus")])],1)],1)],1)],1),t._v(" "),e(s.a,{attrs:{cols:"12",md:"4",lg:"4"}},[e(s.a,{attrs:{cols:"12",md:"12"}},[e(P.a,{attrs:{rows:"2",label:"Memo",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.narration,callback:function(o){t.$set(t.form,"narration",o)},expression:"form.narration"}})],1),t._v(" "),e(s.a,{attrs:{cols:"12",md:"12"}},[e("DocumentFieldUpload",{ref:"uploadField",attrs:{"form-data":t.form,"form-type":"document"},on:{eventGetFiles:t.eventGetFiles}})],1)],1),t._v(" "),e(p.a),t._v(" "),e(s.a,{attrs:{cols:"12",md:"6",lg:"5"}},[e(u.a,{attrs:{dense:""}},[e(s.a,{attrs:{cols:"12"}},[e(u.a,{attrs:{dense:""}},[e(p.a),t._v(" "),e(s.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total Cost Item")])]),t._v(" "),e(s.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
              `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
              `+t._s(isNaN(t.form.product_cost)?0:t.$formatter.formatPrice(t.form.product_cost))+`
            `)])])],1),t._v(" "),e(u.a,{attrs:{dense:""}},[e(p.a),t._v(" "),e(s.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total Cost Resource")])]),t._v(" "),e(s.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
              `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
              `+t._s(isNaN(t.form.component_cost)?0:t.$formatter.formatPrice(t.form.component_cost))+`
            `)])])],1),t._v(" "),e(u.a,{attrs:{dense:""}},[e(p.a),t._v(" "),e(s.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total Cost")])]),t._v(" "),e(s.a,{staticClass:"text-right pa-1",staticStyle:{"border-top":"2px solid #222 !important"},attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
              `+t._s(t.$auth.user.entity.currency.currency_symbol+" ")+`
              `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
            `)])])],1)],1)],1)],1)],1)},r=[],n=a(24),c=a(73),m=a(58),f=a(4),x=a(9),z={name:"FormProduction",props:{formType:{type:String,default:""}},data:function(){return{tab:null,menu:"",menu2:"",menu3:"",menu4:"",logo:"",search:null,selectedItem:1,dialog:!1,checkbox:!1,deposit:!1,tax:!0,withholding:!1,submitLoad:!1,showLoading:!1,form:{},itemCategory:[],itemUnit:[],itemProduct:[],itemContact:[],itemAccounts:[],itemTag:[],itemPaymentTerm:[],itemWarehouse:[],itemFiles:[],taxDetails:[],itemSalesPersons:[],statusProcessing:"insert",valueWhenIsEmpty:"0",tempTotalTax:0,subTotalMinDiscount:0,taxAmount:0,taxDiscount:0,amountBeforeTax:0,withholdingAmount:0,commission:0,moneyOptions:{locale:"en",prefix:"",length:11,precision:0},moneyOptionTotal:{locale:"en",prefix:"",length:14,precision:2},moneyOptionTotalDiscount:{locale:"en",prefix:"",length:14,precision:0}}},head:function(){return{title:this.$t("Production Order")}},activated:function(){var t=this;this.$nextTick(function(){t.$nuxt.$loading.start()})},mounted:function(){this.getMasterData()},methods:{changeItem:function(){var t=this.form.item_id;this.form.item_id=t.id,this.form.commission_rate=t.commision_rate,this.$refs.childDetails.setCommission(t.commision_rate)},changeQty:function(){this.$refs.childDetails.setQty(this.form.planned_qty)},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},statusColor:function(t){switch(t){case"planned":return"blue darken-3";case"partial":return"orange";case"released":return"orange";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},calcTotal:function(t){try{this.form.main_account_amount=t.subTotal,this.form.product_cost=t.productCost,this.form.component_cost=t.componentCost}catch(e){console.log(e)}},showLoad:function(t){this.showLoading=t},setData:function(t){var e=this;this.showLoading=!0,setTimeout(function(){e.$refs.childDetails.setDataToDetails([{item_type:"item",quantity:null}],t)},500),this.form=Object.assign({},t),this.form.tax_details&&(this.form.tax_details=this.reduceArrayTax(this.form.tax_details)),this.moneyOptionTotal.prefix=this.form.default_currency_symbol,this.moneyOptionTotalDiscount.prefix=this.form.default_currency_symbol,this.moneyOptions.prefix=this.form.default_currency_symbol,this.statusProcessing="insert"},eventGetFiles:function(t){this.itemFiles=t.row},getMasterData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark(function e(){var d,o,$;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t.$nuxt.$loading.start(),l.prev=1,l.next=4,t.$axios.get("/api/inventory/items");case 4:return d=l.sent,l.next=7,t.$axios.get("/api/inventory/warehouse");case 7:return o=l.sent,l.next=10,t.$axios.get("/api/financial/accounts",{params:{type:"All"}});case 10:$=l.sent,t.itemAccounts=$.data.data,t.itemProduct=d.data.data,t.itemWarehouse=o.data.data,t.$auth.$storage.removeState("tax"),t.$auth.$storage.removeState("warehouse"),t.$auth.$storage.setState("warehouse",o.data.simple),l.next=22;break;case 19:l.prev=19,l.t0=l.catch(1),t.$swal({type:"error",title:"Error",text:l.t0.response.data.error});case 22:case"end":return l.stop()}},e,null,[[1,19]])}))()},checkDocument:function(){var t=this.$route.query.type;switch(t){case"SQ":case"PQ":return!1;default:return!0}},returnData:function(t){var e=this,d={},o=e.$refs.childDetails.getAddData(t);return o.forEach(function($,T){e.$refs.childDetails.checkIfEmptyRow(T)||(d[T]=$)}),this.form.line_items=d,this.form},changeValue:function(t,e){this.form[t]=e}}},L=z,O=a(50),A=Object(O.a)(L,h,r,!1,null,null,null),S=v.default=A.exports;installComponents(A,{DocumentFieldUpload:a(641).default})},641:function(_,v,a){"use strict";a.r(v);var g=function(){var r=this,n=r._self._c;return n("div",[n("dropzone",{ref:"attachment",attrs:{id:"attachment",options:r.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(m,f,x){return r.sendingParams(m,f,x)},"vdropzone-success":function(m,f){return r.reloadAttachment(m,f)},"vdropzone-error":function(m,f,x){return r.handleError(m,f,x)}}})],1)},b=[],F=a(58),C=a(656),D=a.n(C),s=a(657),w={name:"FieldUpload",components:{Dropzone:D.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:window.location.protocol+"//"+window.location.hostname+"/qb-core/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*, application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getCookie("_token.local")}}}},methods:{sendingParams:function(r,n,c){var m=this.form.id!==0?this.form.id:this.form.temp_id;c.append("temp_id",m),c.append("type",this.formType)},handleError:function(r,n,c){this.$swal({type:"error",title:"Error...",text:n.message})},reloadAttachment:function(r,n){var c=this;n.errors?this.$swal({type:"error",title:"Oops...",text:n.message}):(setTimeout(function(){c.getFiles()},300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var r=this;this.showLoadingAttachment=!0;var n=this,c=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(n.options.url,{params:{type:this.formType,temp_id:c}}).then(function(m){r.$emit("eventGetFiles",{row:m.data.rows}),n.showLoadingAttachment=!1}).catch(function(m){r.showLoadingAttachment=!1,r.$swal({type:"error",title:"Error...",text:m.response.message})})},deleteFile:function(r){var n=this,c=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(m){m.value&&n.$axios.delete(c.options.url,{params:{id:r.id}}).then(function(f){n.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),c.getFiles()}).catch(function(f){n.$swal({type:"error",title:"Oops...",text:f.response.data.message})})})}}},u=w,p=a(50),y=Object(p.a)(u,g,b,!1,null,null,null),P=v.default=y.exports}}]);