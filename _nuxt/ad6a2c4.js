(window.webpackJsonp=window.webpackJsonp||[]).push([[77,31],{1122:function(I,m,o){"use strict";o.r(m);var p=function(){var e=this,t=e._self._c;return t("div",[t("DialogForm",{ref:"dialogForm",attrs:{"max-width":"600px","dialog-title":e.formTitle,"button-title":"Save"},scopedSlots:e._u([{key:"content",fn:function(){return[t("v-form",{staticClass:"pt-2"},[t("v-container",[t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-text-field",{attrs:{label:e.$t("First name"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.first_name,callback:function(a){e.$set(e.form,"first_name",a)},expression:"form.first_name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-text-field",{attrs:{label:e.$t("Middle name"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.middle_name,callback:function(a){e.$set(e.form,"middle_name",a)},expression:"form.middle_name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-text-field",{attrs:{label:e.$t("Last name"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.last_name,callback:function(a){e.$set(e.form,"last_name",a)},expression:"form.last_name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"8"}},[t("v-text-field",{attrs:{label:"Email",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-card",{attrs:{flat:""}},[t("v-tabs",{model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},e._l(e.items,function(l){return t("v-tab",{key:l.tab,attrs:{href:l.href}},[e._v(`
                      `+e._s(l.tab)+`
                    `)])}),1),e._v(" "),t("v-tabs-items",{model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t("v-tab-item",{attrs:{value:"tab-1"}},[t("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"5"}},[t("v-text-field",{attrs:{label:e.$t("Birth Date"),"prepend-icon":"mdi-calendar",type:"date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.birth_date,callback:function(a){e.$set(e.form,"birth_date",a)},expression:"form.birth_date"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"5"}},[t("v-select",{attrs:{items:e.itemGender,"item-text":"name","item-value":"id",label:e.$t("Gender"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.gender,callback:function(a){e.$set(e.form,"gender",a)},expression:"form.gender"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Address"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.address,callback:function(a){e.$set(e.form,"address",a)},expression:"form.address"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("City"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.city,callback:function(a){e.$set(e.form,"city",a)},expression:"form.city"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Zip Code"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.zip_code,callback:function(a){e.$set(e.form,"zip_code",a)},expression:"form.zip_code"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Home Phone"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.home_phone,callback:function(a){e.$set(e.form,"home_phone",a)},expression:"form.home_phone"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Work Phone"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.work_phone,callback:function(a){e.$set(e.form,"work_phone",a)},expression:"form.work_phone"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Mobile Phone"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.mobile_phone,callback:function(a){e.$set(e.form,"mobile_phone",a)},expression:"form.mobile_phone"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"National ID",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.national_id,callback:function(a){e.$set(e.form,"national_id",a)},expression:"form.national_id"}})],1)],1)],1),e._v(" "),t("v-tab-item",{attrs:{value:"tab-2"}},[t("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-autocomplete",{attrs:{items:e.itemPaymentMethod,label:e.$t("Payment Method"),"item-text":"name","item-value":"id",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.payment_method,callback:function(a){e.$set(e.form,"payment_method",a)},expression:"form.payment_method"}})],1),e._v(" "),e.form.payment_method===2?t("v-col",{attrs:{cols:"12",md:"7"}},[t("v-text-field",{attrs:{label:e.$t("Bank Account Name"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.bank_account_name,callback:function(a){e.$set(e.form,"bank_account_name",a)},expression:"form.bank_account_name"}})],1):e._e(),e._v(" "),e.form.payment_method===2?t("v-col",{attrs:{cols:"12",md:"7"}},[t("v-text-field",{attrs:{label:e.$t("Bank Account Number"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.bank_account_number,callback:function(a){e.$set(e.form,"bank_account_number",a)},expression:"form.bank_account_number"}})],1):e._e()],1)],1),e._v(" "),t("v-tab-item",{attrs:{value:"tab-3"}},[t("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Hire Date"),"prepend-icon":"mdi-calendar",type:"date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.hire_date,callback:function(a){e.$set(e.form,"hire_date",a)},expression:"form.hire_date"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-select",{attrs:{items:e.itemWorkLocation,"item-text":"name","item-value":"id",label:e.$t("Work Location"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.work_location_id,callback:function(a){e.$set(e.form,"work_location_id",a)},expression:"form.work_location_id"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Employee ID",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.employee_id,callback:function(a){e.$set(e.form,"employee_id",a)},expression:"form.employee_id"}})],1)],1)],1),e._v(" "),t("v-tab-item",{attrs:{value:"tab-4"}},[t("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-autocomplete",{attrs:{items:e.itemPaySchedule,label:e.$t("Pay Schedule"),"item-text":"name","item-value":"id",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.pay_schedule_id,callback:function(a){e.$set(e.form,"pay_schedule_id",a)},expression:"form.pay_schedule_id"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-autocomplete",{attrs:{items:e.itemPayType,label:e.$t("Pay Type"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.pay_type,callback:function(a){e.$set(e.form,"pay_type",a)},expression:"form.pay_type"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-autocomplete",{attrs:{items:e.itemPayFrequency,label:e.$t("Pay Frequency"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.pay_frequency,callback:function(a){e.$set(e.form,"pay_frequency",a)},expression:"form.pay_frequency"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Salary"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.salary,callback:function(a){e.$set(e.form,"salary",a)},expression:"form.salary"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Per Hour Rate"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.per_hour_rate,callback:function(a){e.$set(e.form,"per_hour_rate",a)},expression:"form.per_hour_rate"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Hour per day"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.hour_per_day,callback:function(a){e.$set(e.form,"hour_per_day",a)},expression:"form.hour_per_day"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:e.$t("Day per week"),outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.day_per_week,callback:function(a){e.$set(e.form,"day_per_week",a)},expression:"form.day_per_week"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[t("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:e.submitLoad},on:{click:function(a){return e.save()}}},[e._v(`
          `+e._s(e.buttonTitle)+`
        `)])]},proxy:!0}])})],1)},h=[],b=o(24),F=o(214),C=o(59),T=o(74),y={name:"FormEmployee",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}},formUrl:{type:String,default:""}},data:function(){return{dialog:!1,submitLoad:!1,show:!1,form:this.formData,defaultItem:this.formData,itemWorkLocation:[],statusProcessing:"insert",menu3:"",menu4:"",valueWhenIsEmpty:"0",url:"/api/payroll/employees",moneyOptions:{suffix:"",length:11,precision:2},tab:null,itemGender:[],itemPaymentMethod:[],itemPayFrequency:[],itemPaySchedule:[],itemPayType:[],items:[{tab:"Personal Info",href:"#tab-1"},{tab:"Payment method",href:"#tab-2"},{tab:"Employment details",href:"#tab-3"},{tab:"Pay types",href:"#tab-4"}]}},mounted:function(){this.getMasterData()},methods:{getMasterData:function(){var e=this;return Object(b.a)(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$axios.get("/api/payroll/work-locations");case 3:r=a.sent,e.itemWorkLocation=r.data.data,a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),e.$swal({type:"error",title:"Error",text:a.t0.response.data.error});case 10:case"end":return a.stop()}},t,null,[[0,7]])}))()},setItemGender:function(e){this.itemGender=e},setPaymentMethod:function(e){this.itemPaymentMethod=e},setPayFrequency:function(e){this.itemPayFrequency=e},setPayType:function(e){this.itemPayType=e},setPaySchedule:function(e){this.itemPaySchedule=e},newData:function(e){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},e)},editItem:function(e){this.form=Object.assign({},e),this.statusProcessing="update",this.$refs.dialogForm.openDialog()},addLine:function(e){e==="email"?this.form.emails.push({email:null}):e==="bank"&&this.form.banks.push({name:null,branch:null,contact_account_name:null,contact_account_number:null})},removeLine:function(e,t,r){t==="email"?(this.form.emails.splice(e,1),this.$axios.delete("/api/bp/delete-email/"+r.email)):t==="bank"&&(this.form.banks.splice(e,1),this.$axios.delete("/api/bp/delete-bank/"+r.id))},close:function(){var e=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout(function(){e.form=Object.assign({},e.defaultItem)},300)},save:function(){var e=this,t=this.statusProcessing;t==="insert"?(this.store("post",this.url,this.form),e.submitLoad=!1):t==="update"&&(this.store("put",this.url+"/"+this.form.id,this.form),e.submitLoad=!1)},store:function(e,t,r){var l=this,a=this;a.submitLoad=!0,this.$axios({method:e,url:t,data:r}).then(function(S){l.$refs.dialogForm.closeDialog(),l.$emit("getDataFromApi")}).catch(function(S){l.$swal({type:"error",title:"Error",text:S.response.data.message}),a.submitLoad=!1})}}},g=y,k=o(50),c=o(51),u=o.n(c),$=o(634),x=o(164),V=o(248),f=o(585),L=o(586),d=o(625),s=o(599),i=o(630),D=o(594),v=o(698),j=o(596),E=o(373),M=o(574),P=Object(k.a)(g,p,h,!1,null,null,null),O=m.default=P.exports;u()(P,{DialogForm:o(601).default}),u()(P,{VAutocomplete:$.a,VBtn:x.a,VCard:V.a,VCol:f.a,VContainer:L.a,VForm:d.a,VRow:s.a,VSelect:i.a,VTab:D.a,VTabItem:v.a,VTabs:j.a,VTabsItems:E.a,VTextField:M.a})},601:function(I,m,o){"use strict";o.r(m);var p=function(){var s=this,i=s._self._c;return i("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:s.original,"max-width":s.maxWidth,transition:"dialog-top-transition"},model:{value:s.dialog,callback:function(v){s.dialog=v},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"subtitle-2"},[s._v(s._s(s.dialogTitle))]),s._v(" "),i("v-spacer"),s._v(" "),i("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(v){return s.closeDialog()}}},[i("v-icon",[s._v("mdi-close-circle")])],1)],1),s._v(" "),i("v-divider"),s._v(" "),i("v-card-text",{staticClass:"pr-0 pl-0"},[s._t("content")],2),s._v(" "),i("v-divider"),s._v(" "),i("v-card-actions",[s._t("addLine"),s._v(" "),i("v-spacer"),s._v(" "),s._t("saveData")],2)],1)],1)},h=[],b={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},F=b,C=o(50),T=o(51),y=o.n(T),g=o(164),k=o(248),c=o(88),u=o(595),$=o(576),x=o(247),V=o(593),f=Object(C.a)(F,p,h,!1,null,null,null),L=m.default=f.exports;y()(f,{VBtn:g.a,VCard:k.a,VCardActions:c.a,VCardText:c.b,VCardTitle:c.c,VDialog:u.a,VDivider:$.a,VIcon:x.a,VSpacer:V.a})}}]);