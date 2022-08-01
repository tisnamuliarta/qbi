(window.webpackJsonp=window.webpackJsonp||[]).push([[71,28],{1104:function(e,t,o){"use strict";o.r(t);var l=o(25),n=(o(214),o(59),o(74),{name:"FormEmployee",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}},formUrl:{type:String,default:""}},data:function(){return{dialog:!1,submitLoad:!1,show:!1,form:this.formData,defaultItem:this.formData,itemWorkLocation:[],statusProcessing:"insert",menu3:"",menu4:"",valueWhenIsEmpty:"0",url:"/api/payroll/employees",moneyOptions:{suffix:"",length:11,precision:2},tab:null,itemGender:[],itemPaymentMethod:[],itemPayFrequency:[],itemPayType:[],items:[{tab:"Personal Info",href:"#tab-1"},{tab:"Payment method",href:"#tab-2"},{tab:"Employment details",href:"#tab-3"},{tab:"Pay types",href:"#tab-4"}]}},mounted:function(){this.getMasterData()},methods:{getMasterData:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/api/payroll/work-locations");case 3:o=t.sent,e.itemWorkLocation=o.data.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$swal({type:"error",title:"Error",text:t.t0.response.data.error});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},setItemGender:function(data){this.itemGender=data},setPaymentMethod:function(data){this.itemPaymentMethod=data},setPayFrequency:function(data){this.itemPayFrequency=data},setPayType:function(data){this.itemPayType=data},newData:function(form){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},form)},editItem:function(e){this.form=Object.assign({},e),this.statusProcessing="update",this.$refs.dialogForm.openDialog()},addLine:function(e){"email"===e?this.form.emails.push({email:null}):"bank"===e&&this.form.banks.push({name:null,branch:null,contact_account_name:null,contact_account_number:null})},removeLine:function(e,t,o){"email"===t?(this.form.emails.splice(e,1),this.$axios.delete("/api/bp/delete-email/"+o.email)):"bank"===t&&(this.form.banks.splice(e,1),this.$axios.delete("/api/bp/delete-bank/"+o.id))},close:function(){var e=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout((function(){e.form=Object.assign({},e.defaultItem)}),300)},save:function(){var e=this.statusProcessing;"insert"===e?(this.store("post",this.url,this.form),this.submitLoad=!1):"update"===e&&(this.store("put",this.url+"/"+this.form.id,this.form),this.submitLoad=!1)},store:function(e,t,data){var o=this,l=this;l.submitLoad=!0,this.$axios({method:e,url:t,data:data}).then((function(e){o.$refs.dialogForm.closeDialog(),o.$emit("getDataFromApi")})).catch((function(e){o.$swal({type:"error",title:"Error",text:e.response.data.message}),l.submitLoad=!1}))}}}),r=o(50),d=o(51),m=o.n(d),c=o(637),f=o(164),v=o(248),_=o(585),h=o(586),y=o(620),x=o(598),k=o(632),$=o(594),w=o(732),D=o(596),P=o(373),V=o(575),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("DialogForm",{ref:"dialogForm",attrs:{"max-width":"600px","dialog-title":e.formTitle,"button-title":"Save"},scopedSlots:e._u([{key:"content",fn:function(){return[t("v-form",{staticClass:"pt-2"},[t("v-container",[t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"5"}},[t("v-text-field",{attrs:{label:"First name",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"2"}},[t("v-text-field",{attrs:{label:"Middle name",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.middle_name,callback:function(t){e.$set(e.form,"middle_name",t)},expression:"form.middle_name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"5"}},[t("v-text-field",{attrs:{label:"Last name",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"8"}},[t("v-text-field",{attrs:{label:"Email",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-card",{attrs:{flat:""}},[t("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(o){return t("v-tab",{key:o.tab,attrs:{href:o.href}},[e._v("\n                      "+e._s(o.tab)+"\n                    ")])})),1),e._v(" "),t("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[t("v-tab-item",{attrs:{value:"tab-1"}},[t("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"5"}},[t("v-text-field",{attrs:{label:"Birth Date","prepend-icon":"mdi-calendar",type:"date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.birth_date,callback:function(t){e.$set(e.form,"birth_date",t)},expression:"form.birth_date"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"5"}},[t("v-select",{attrs:{items:e.itemGender,"item-text":"name","item-value":"id",label:"Gender",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Address",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"City",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Zip Code",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.zip_code,callback:function(t){e.$set(e.form,"zip_code",t)},expression:"form.zip_code"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Home Phone",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.home_phone,callback:function(t){e.$set(e.form,"home_phone",t)},expression:"form.home_phone"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Work Phone",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.work_phone,callback:function(t){e.$set(e.form,"work_phone",t)},expression:"form.work_phone"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Mobile Phone",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.mobile_phone,callback:function(t){e.$set(e.form,"mobile_phone",t)},expression:"form.mobile_phone"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"National ID",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.national_id,callback:function(t){e.$set(e.form,"national_id",t)},expression:"form.national_id"}})],1)],1)],1),e._v(" "),t("v-tab-item",{attrs:{value:"tab-2"}},[t("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-autocomplete",{attrs:{items:e.itemPaymentMethod,label:"Payment Method","item-text":"name","item-value":"id",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.payment_method,callback:function(t){e.$set(e.form,"payment_method",t)},expression:"form.payment_method"}})],1),e._v(" "),2===e.form.payment_method?t("v-col",{attrs:{cols:"12",md:"7"}},[t("v-text-field",{attrs:{label:"Bank Account Name",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.bank_account_name,callback:function(t){e.$set(e.form,"bank_account_name",t)},expression:"form.bank_account_name"}})],1):e._e(),e._v(" "),2===e.form.payment_method?t("v-col",{attrs:{cols:"12",md:"7"}},[t("v-text-field",{attrs:{label:"Bank Account Number",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.bank_account_number,callback:function(t){e.$set(e.form,"bank_account_number",t)},expression:"form.bank_account_number"}})],1):e._e()],1)],1),e._v(" "),t("v-tab-item",{attrs:{value:"tab-3"}},[t("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Hire Date","prepend-icon":"mdi-calendar",type:"date","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.hire_date,callback:function(t){e.$set(e.form,"hire_date",t)},expression:"form.hire_date"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-select",{attrs:{items:e.itemWorkLocation,"item-text":"name","item-value":"id",label:"Work Location",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.work_location_id,callback:function(t){e.$set(e.form,"work_location_id",t)},expression:"form.work_location_id"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Employee ID",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.employee_id,callback:function(t){e.$set(e.form,"employee_id",t)},expression:"form.employee_id"}})],1)],1)],1),e._v(" "),t("v-tab-item",{attrs:{value:"tab-4"}},[t("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-autocomplete",{attrs:{items:e.itemPayType,label:"Pay Type",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.pay_type,callback:function(t){e.$set(e.form,"pay_type",t)},expression:"form.pay_type"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-autocomplete",{attrs:{items:e.itemPayFrequency,label:"Pay Frequency",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.pay_frequency,callback:function(t){e.$set(e.form,"pay_frequency",t)},expression:"form.pay_frequency"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Salary",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.salary,callback:function(t){e.$set(e.form,"salary",t)},expression:"form.salary"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Per Hour Rate",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.per_hour_rate,callback:function(t){e.$set(e.form,"per_hour_rate",t)},expression:"form.per_hour_rate"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Hour per day",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.hour_per_day,callback:function(t){e.$set(e.form,"hour_per_day",t)},expression:"form.hour_per_day"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Day per week",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.day_per_week,callback:function(t){e.$set(e.form,"day_per_week",t)},expression:"form.day_per_week"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[t("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:e.submitLoad},on:{click:function(t){return e.save()}}},[e._v("\n          "+e._s(e.buttonTitle)+"\n        ")])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{DialogForm:o(603).default}),m()(component,{VAutocomplete:c.a,VBtn:f.a,VCard:v.a,VCol:_.a,VContainer:h.a,VForm:y.a,VRow:x.a,VSelect:k.a,VTab:$.a,VTabItem:w.a,VTabs:D.a,VTabsItems:P.a,VTextField:V.a})},603:function(e,t,o){"use strict";o.r(t);var l={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},n=o(50),r=o(51),d=o.n(r),m=o(164),c=o(248),f=o(88),v=o(595),_=o(576),h=o(247),y=o(593),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:e.original,"max-width":e.maxWidth,transition:"dialog-top-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"subtitle-2"},[e._v(e._s(e.dialogTitle))]),e._v(" "),t("v-spacer"),e._v(" "),t("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(t){return e.closeDialog()}}},[t("v-icon",[e._v("mdi-close-circle")])],1)],1),e._v(" "),t("v-divider"),e._v(" "),t("v-card-text",{staticClass:"pr-0 pl-0"},[e._t("content")],2),e._v(" "),t("v-divider"),e._v(" "),t("v-card-actions",[e._t("addLine"),e._v(" "),t("v-spacer"),e._v(" "),e._t("saveData")],2)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCard:c.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VDialog:v.a,VDivider:_.a,VIcon:h.a,VSpacer:y.a})}}]);