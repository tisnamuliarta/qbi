(window.webpackJsonp=window.webpackJsonp||[]).push([[88,37],{1131:function(z,p,a){"use strict";a.r(p);var x=a(633),D=a(165),b=a(249),T=a(87),w=a(577),o=a(587),F=a(247),f=a(598),v=a(589),g=a(573),A=a(658),u=function(){var t=this,e=t._self._c;return e(f.a,{attrs:{dense:""}},[e(o.a,{attrs:{cols:"12",md:"9",sm:"8"}},[e(f.a,{attrs:{dense:""}},[e(o.a,{attrs:{cols:"12",md:"2",sm:"12"}},[e(g.a,{attrs:{label:"Reference",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reference_no,callback:function(m){t.$set(t.form,"reference_no",m)},expression:"form.reference_no"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e(g.a,{attrs:{label:"Transaction Date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto",type:"date"},model:{value:t.form.transaction_date,callback:function(m){t.$set(t.form,"transaction_date",m)},expression:"form.transaction_date"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"2",sm:"12"}},[e(x.a,{attrs:{items:t.itemWarehouse,label:"Warehouse","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.warehouse_id,callback:function(m){t.$set(t.form,"warehouse_id",m)},expression:"form.warehouse_id"}})],1)],1)],1),t._v(" "),e(v.a),t._v(" "),e(o.a,{staticClass:"text-right",attrs:{cols:"12",md:"3",xl:"2",sm:"4"}},[e(f.a,{attrs:{dense:""}},[e(o.a,{staticClass:"pt-0",attrs:{cols:"12"}},[e("p",{staticClass:"mb-0"},[t._v("Amount")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold text-h4"},[t._v(`
          `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
        `)])]),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e(w.a,{attrs:{label:"",color:t.statusColor(t.form.status),dark:""}},[t._v(`
          `+t._s(t.form.status))])],1)],1)],1),t._v(" "),e(o.a,{staticClass:"mt-1",attrs:{cols:"12"}},[e("div",{staticClass:"scroll-container-min"},[e("LazyReceiptTableDetailReceipt",{ref:"childDetails",on:{calcTotal:t.calcTotal}})],1),t._v(" "),e(b.a,{attrs:{flat:""}},[e(T.a,[e(D.a,{attrs:{small:"",depressed:"",outlined:""},on:{click:function(m){return t.$refs.childDetails.addLine(1)}}},[t._v(`
          Add Line
          `),e(F.a,[t._v("mdi-plus")])],1)],1)],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"4",lg:"4"}},[e(o.a,{attrs:{cols:"12",md:"12"}},[e(A.a,{attrs:{rows:"2",label:"Memo",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.narration,callback:function(m){t.$set(t.form,"narration",m)},expression:"form.narration"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"12"}},[e("DocumentFieldUpload",{ref:"uploadField",attrs:{"form-data":t.form,"form-type":"document"},on:{eventGetFiles:t.eventGetFiles}})],1)],1),t._v(" "),e(v.a),t._v(" "),e(o.a,{attrs:{cols:"12",md:"6",lg:"5"}},[e(f.a,{attrs:{dense:""}},[e(o.a,{attrs:{cols:"12"}},[e(f.a,{attrs:{dense:""}},[e(v.a),t._v(" "),e(o.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total")])]),t._v(" "),e(o.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
              `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
            `)])])],1)],1)],1)],1)],1)},n=[],s=a(24),l=a(73),c=a(58),h=a(4),y=a(9),L={name:"FormDocumentReceipt",props:{formType:{type:String,default:""}},data:function(){return{tab:null,menu:"",menu2:"",menu3:"",menu4:"",logo:"",search:null,selectedItem:1,dialog:!1,checkbox:!1,deposit:!1,tax:!0,withholding:!1,submitLoad:!1,showLoading:!1,form:{},itemCategory:[],itemUnit:[],itemProduct:[],itemContact:[],itemAccounts:[],itemTag:[],itemPaymentTerm:[],itemWarehouse:[],itemFiles:[],taxDetails:[],itemSalesPersons:[],statusProcessing:"insert",valueWhenIsEmpty:"0",tempTotalTax:0,subTotalMinDiscount:0,taxAmount:0,taxDiscount:0,amountBeforeTax:0,withholdingAmount:0,commission:0,moneyOptions:{locale:"en",prefix:"",length:11,precision:0},moneyOptionTotal:{locale:"en",prefix:"",length:14,precision:2},moneyOptionTotalDiscount:{locale:"en",prefix:"",length:14,precision:0}}},activated:function(){var t=this;this.$nextTick(function(){t.$nuxt.$loading.start()})},mounted:function(){this.getMasterData()},methods:{changeItem:function(){var t=this.form.item_id;this.form.item_id=t.id,this.form.commission_rate=t.commision_rate,this.$refs.childDetails.setCommission(t.commision_rate)},changeQty:function(){this.$refs.childDetails.setQty(this.form.planned_qty)},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},statusColor:function(t){switch(t){case"planned":return"blue darken-3";case"partial":return"orange";case"released":return"orange";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},calcTotal:function(t){try{this.form.main_account_amount=t.subTotal}catch(e){console.log(e)}},showLoad:function(t){this.showLoading=t},setData:function(t){var e=this;this.showLoading=!0,setTimeout(function(){e.$refs.childDetails.setDataToDetails([{quantity:null}],t)},500),this.form=Object.assign({},t),this.moneyOptionTotal.prefix=this.form.default_currency_symbol,this.moneyOptionTotalDiscount.prefix=this.form.default_currency_symbol,this.moneyOptions.prefix=this.form.default_currency_symbol,this.statusProcessing="insert"},eventGetFiles:function(t){this.itemFiles=t.row},getMasterData:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark(function e(){var d,m,$;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.$nuxt.$loading.start(),i.prev=1,i.next=4,t.$axios.get("/api/inventory/items");case 4:return d=i.sent,i.next=7,t.$axios.get("/api/inventory/warehouse");case 7:return m=i.sent,i.next=10,t.$axios.get("/api/financial/accounts",{params:{type:"All"}});case 10:$=i.sent,t.itemAccounts=$.data.data,t.itemProduct=d.data.data,t.itemWarehouse=m.data.data,t.$auth.$storage.removeState("tax"),t.$auth.$storage.removeState("warehouse"),t.$auth.$storage.setState("warehouse",m.data.simple),i.next=22;break;case 19:i.prev=19,i.t0=i.catch(1),t.$swal({type:"error",title:"Error",text:i.t0.response.data.error});case 22:case"end":return i.stop()}},e,null,[[1,19]])}))()},checkDocument:function(){var t=this.$route.query.type;switch(t){case"SQ":case"PQ":return!1;default:return!0}},returnData:function(t){var e=this,d={},m=e.$refs.childDetails.getAddData(t);return m.forEach(function($,C){e.$refs.childDetails.checkIfEmptyRow(C)||(d[C]=$)}),this.form.line_items=d,this.form},changeValue:function(t,e){this.form[t]=e}}},O=L,P=a(50),R=Object(P.a)(O,u,n,!1,null,null,null),V=p.default=R.exports;installComponents(R,{DocumentFieldUpload:a(641).default})},641:function(z,p,a){"use strict";a.r(p);var x=function(){var n=this,s=n._self._c;return s("div",[s("dropzone",{ref:"attachment",attrs:{id:"attachment",options:n.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(c,h,y){return n.sendingParams(c,h,y)},"vdropzone-success":function(c,h){return n.reloadAttachment(c,h)},"vdropzone-error":function(c,h,y){return n.handleError(c,h,y)}}})],1)},D=[],b=a(58),T=a(656),w=a.n(T),o=a(657),F={name:"FieldUpload",components:{Dropzone:w.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:window.location.protocol+"//"+window.location.hostname+"/qb-core/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*, application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getCookie("_token.local")}}}},methods:{sendingParams:function(n,s,l){var c=this.form.id!==0?this.form.id:this.form.temp_id;l.append("temp_id",c),l.append("type",this.formType)},handleError:function(n,s,l){this.$swal({type:"error",title:"Error...",text:s.message})},reloadAttachment:function(n,s){var l=this;s.errors?this.$swal({type:"error",title:"Oops...",text:s.message}):(setTimeout(function(){l.getFiles()},300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var n=this;this.showLoadingAttachment=!0;var s=this,l=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(s.options.url,{params:{type:this.formType,temp_id:l}}).then(function(c){n.$emit("eventGetFiles",{row:c.data.rows}),s.showLoadingAttachment=!1}).catch(function(c){n.showLoadingAttachment=!1,n.$swal({type:"error",title:"Error...",text:c.response.message})})},deleteFile:function(n){var s=this,l=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(c){c.value&&s.$axios.delete(l.options.url,{params:{id:n.id}}).then(function(h){s.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),l.getFiles()}).catch(function(h){s.$swal({type:"error",title:"Oops...",text:h.response.data.message})})})}}},f=F,v=a(50),g=Object(v.a)(f,x,D,!1,null,null,null),A=p.default=g.exports}}]);
