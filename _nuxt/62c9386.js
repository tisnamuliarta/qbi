(window.webpackJsonp=window.webpackJsonp||[]).push([[40,37],{1105:function(z,g,a){"use strict";a.r(g);var x=a(633),$=a(249),w=a(577),n=a(587),p=a(598),F=a(629),v=a(589),b=a(573),C=a(658),T=function(){var t=this,e=t._self._c;return e(p.a,{attrs:{dense:""}},[e(n.a,{attrs:{cols:"12",md:"9",sm:"8"}},[e(p.a,{attrs:{dense:""}},[e(n.a,{attrs:{cols:"12",md:"4",sm:"12"}},[e(x.a,{attrs:{items:t.itemContact,label:"Customer/Vendor","return-object":"","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},on:{change:t.getInvoice},model:{value:t.form.contact_id,callback:function(s){t.$set(t.form,"contact_id",s)},expression:"form.contact_id"}})],1),t._v(" "),e(n.a,{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e(F.a,{attrs:{items:t.itemPaymentMethod,"item-value":"id","item-text":"name",label:"Payment Method",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.payment_term_id,callback:function(s){t.$set(t.form,"payment_term_id",s)},expression:"form.payment_term_id"}})],1),t._v(" "),e(n.a,{attrs:{cols:"12",lg:"2",md:"2",sm:"6"}},[e(b.a,{attrs:{label:"Transaction Date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto",type:"date"},model:{value:t.form.transaction_date,callback:function(s){t.$set(t.form,"transaction_date",s)},expression:"form.transaction_date"}})],1),t._v(" "),e(n.a,{attrs:{cols:"12",md:"4",sm:"12"}},[e(x.a,{attrs:{items:t.itemAccounts,label:"Deposit Account","return-object":"","item-value":"id","item-text":"name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.deposit_account_id,callback:function(s){t.$set(t.form,"deposit_account_id",s)},expression:"form.deposit_account_id"}})],1),t._v(" "),e(n.a,{attrs:{cols:"12",md:"4",sm:"6"}},[e(b.a,{attrs:{label:"No Contract",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reference_no,callback:function(s){t.$set(t.form,"reference_no",s)},expression:"form.reference_no"}})],1)],1)],1),t._v(" "),e(v.a),t._v(" "),e(n.a,{staticClass:"text-right",attrs:{cols:"12",md:"3",xl:"2",sm:"4"}},[e(p.a,{attrs:{dense:""}},[e(n.a,{staticClass:"pt-0",attrs:{cols:"12"}},[e("p",{staticClass:"mb-0"},[t._v("Amount Due")]),t._v(" "),e("span",{staticClass:"text-right font-weight-bold text-h4"},[t._v(`
          `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
        `)])]),t._v(" "),e(n.a,{attrs:{cols:"12"}},[e(w.a,{attrs:{label:"",color:t.statusColor(t.form.status),dark:""}},[t._v(`
          `+t._s(t.form.status))])],1)],1)],1),t._v(" "),e(n.a,{staticClass:"mt-2",attrs:{cols:"12"}},[e($.a,{attrs:{flat:""}},[e("LazyPaymentTablePayment",{ref:"childDetails",on:{calcTotal:t.calcTotal}})],1)],1),t._v(" "),e(n.a,{attrs:{cols:"12",md:"4",lg:"4"}},[e(n.a,{attrs:{cols:"12",md:"12"}},[e(C.a,{attrs:{rows:"2",label:"Memo",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.narration,callback:function(s){t.$set(t.form,"narration",s)},expression:"form.narration"}})],1),t._v(" "),e(n.a,{attrs:{cols:"12",md:"12"}},[e("DocumentFieldUpload",{ref:"uploadField",attrs:{"form-data":t.form,"form-type":"document"},on:{eventGetFiles:t.eventGetFiles}})],1)],1),t._v(" "),e(v.a),t._v(" "),e(n.a,{attrs:{cols:"12",md:"6",lg:"5"}},[e(p.a,{attrs:{dense:""}},[e(n.a,{attrs:{cols:"12"}},[e(p.a,{attrs:{dense:""}},[e(v.a),t._v(" "),e(n.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Subtotal")])]),t._v(" "),e(n.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
              `+t._s(isNaN(t.form.sub_total)?0:t.$formatter.formatPrice(t.form.sub_total))+`
            `)])])],1)],1),t._v(" "),e(n.a,{attrs:{cols:"12"}},[e(p.a,{attrs:{dense:""}},[e(v.a),t._v(" "),e(n.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v("Total")])]),t._v(" "),e(n.a,{staticClass:"text-right pa-1",attrs:{cols:"12",md:"4"}},[e("span",{staticClass:"font-weight-bold subtitle-1"},[t._v(`
              `+t._s(isNaN(t.form.main_account_amount)?0:t.$formatter.formatPrice(t.form.main_account_amount))+`
            `)])])],1)],1)],1)],1)],1)},A=[],f=a(24),c=a(73),l=a(58),m=a(101),d=a(4),h=a(9),y={name:"FormDocument",props:{formType:{type:String,default:""}},data:function(){return{tab:null,menu:"",menu2:"",menu3:"",menu4:"",logo:"",search:null,selectedItem:1,dialog:!1,checkbox:!1,deposit:!1,tax:!0,withholding:!1,submitLoad:!1,showLoading:!1,form:{},itemCategory:[],itemUnit:[],itemContact:[],itemAccounts:[],itemTag:[],itemPaymentMethod:[],itemWarehouse:[],itemFiles:[],taxDetails:[],itemSalesPersons:[],statusProcessing:"insert",valueWhenIsEmpty:"0",tempTotalTax:0,subTotalMinDiscount:0,taxAmount:0,taxDiscount:0,amountBeforeTax:0,withholdingAmount:0,discountAmount:0,moneyOptions:{locale:"en",prefix:"",length:11,precision:0},moneyOptionTotal:{locale:"en",prefix:"",length:14,precision:2},moneyOptionTotalDiscount:{locale:"en",prefix:"",length:14,precision:0}}},activated:function(){var t=this;this.getMasterData(),this.$nextTick(function(){t.$nuxt.$loading.start()})},mounted:function(){},methods:{checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},statusColor:function(t){switch(t){case"open":return"blue darken-3";case"partial":return"orange";case"paid":return"green";case"closed":return"green";case"overdue":return"red";case"cancel":return"red"}},calcTotal:function(t){try{this.form.main_account_amount=t.amount,this.form.sub_total=t.amount}catch(e){console.log(e)}},showLoad:function(t){this.showLoading=t},setData:function(t){var e=this;this.showLoading=!0,setTimeout(function(){e.$refs.childDetails.setDataToDetails([{item_number:null,narration:null,qty:null,unit:null}],t)},500),this.form=Object.assign({},t),this.moneyOptionTotal.prefix=this.form.default_currency_symbol,this.moneyOptionTotalDiscount.prefix=this.form.default_currency_symbol,this.moneyOptions.prefix=this.form.default_currency_symbol,this.statusProcessing="insert"},eventGetFiles:function(t){this.itemFiles=t.row},getMasterData:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark(function e(){var o,s,u,D;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t.$nuxt.$loading.start(),i.prev=1,i.next=4,t.$axios.get("/api/master/categories",{params:{type:"Item Category"}});case 4:return o=i.sent,i.next=7,t.$axios.get("/api/financial/accounts",{params:{type:"BANK"}});case 7:return s=i.sent,i.next=10,t.$axios.get("/api/bp/contacts",{params:{type:t.formType}});case 10:return u=i.sent,i.next=13,t.$axios.get("/api/financial/payment-methods");case 13:D=i.sent,t.itemCategory=o.data.simple,t.itemAccounts=s.data.data,t.itemContact=u.data.data,t.itemPaymentMethod=D.data.data,i.next=23;break;case 20:i.prev=20,i.t0=i.catch(1),t.$swal({type:"error",title:"Error",text:i.t0.response.data.error});case 23:case"end":return i.stop()}},e,null,[[1,20]])}))()},changePaymentTerm:function(){var t=this;this.$axios.get("/api/financial/payment-terms/"+this.form.payment_term_id).then(function(e){Date.prototype.addDays=function(s){var u=new Date(this.valueOf());return u.setDate(u.getDate()+s),u};var o=t.$moment(t.form.transaction_date);t.form.due_date=o.add(e.data.data.value,"days").format("YYYY-MM-DD")})},formatDate:function(t){var e=new Date(t),o=""+(e.getMonth()+1),s=""+e.getDate(),u=e.getFullYear();return o.length<2&&(o="0"+o),s.length<2&&(s="0"+s),[u,o,s].join("-")},changeContact:function(){var t=this.form.contact_id;this.form.contact_id=t.id,this.form.contact_address=t.address?t.address:this.form.contact_address,this.form.shipping_address=t.shipping_address?t.shipping_address:this.form.shipping_address},checkDocument:function(){var t=this.$route.query.type;switch(t){case"SQ":case"PQ":return!1;default:return!0}},getInvoice:function(){var t=this;this.form.contact_id=this.form.contact_id.id;var e=this.form.contact_id;this.$axios("/api/transaction/invoice",{params:{type:this.formType,contact:e}}).then(function(o){setTimeout(function(){t.$refs.childDetails.setDataToDetails([{amount:null}],o.data.data)},500)})},returnData:function(t){var e=this,o={},s=e.$refs.childDetails.getAddData(t);return s.forEach(function(u,D){e.$refs.childDetails.checkIfEmptyRow(D)||(o[D]=u)}),this.form.line_items=o,this.form},changeValue:function(t,e){this.form[t]=e}}},O=y,_=a(50),P=Object(_.a)(O,T,A,!1,null,null,null),j=g.default=P.exports;installComponents(P,{DocumentFieldUpload:a(641).default})},641:function(z,g,a){"use strict";a.r(g);var x=function(){var c=this,l=c._self._c;return l("div",[l("dropzone",{ref:"attachment",attrs:{id:"attachment",options:c.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(d,h,y){return c.sendingParams(d,h,y)},"vdropzone-success":function(d,h){return c.reloadAttachment(d,h)},"vdropzone-error":function(d,h,y){return c.handleError(d,h,y)}}})],1)},$=[],w=a(58),n=a(656),p=a.n(n),F=a(657),v={name:"FieldUpload",components:{Dropzone:p.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:window.location.protocol+"//"+window.location.hostname+"/qb-core/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*, application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getCookie("_token.local")}}}},methods:{sendingParams:function(c,l,m){var d=this.form.id!==0?this.form.id:this.form.temp_id;m.append("temp_id",d),m.append("type",this.formType)},handleError:function(c,l,m){this.$swal({type:"error",title:"Error...",text:l.message})},reloadAttachment:function(c,l){var m=this;l.errors?this.$swal({type:"error",title:"Oops...",text:l.message}):(setTimeout(function(){m.getFiles()},300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var c=this;this.showLoadingAttachment=!0;var l=this,m=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(l.options.url,{params:{type:this.formType,temp_id:m}}).then(function(d){c.$emit("eventGetFiles",{row:d.data.rows}),l.showLoadingAttachment=!1}).catch(function(d){c.showLoadingAttachment=!1,c.$swal({type:"error",title:"Error...",text:d.response.message})})},deleteFile:function(c){var l=this,m=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(d){d.value&&l.$axios.delete(m.options.url,{params:{id:c.id}}).then(function(h){l.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),m.getFiles()}).catch(function(h){l.$swal({type:"error",title:"Oops...",text:h.response.data.message})})})}}},b=v,C=a(50),T=Object(C.a)(b,x,$,!1,null,null,null),A=g.default=T.exports}}]);
