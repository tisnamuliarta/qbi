(window.webpackJsonp=window.webpackJsonp||[]).push([[87,39],{1154:function(S,n,a){"use strict";a.r(n);var v=function(){var e=this,x=e.$createElement,t=e._self._c||x;return t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[t("span",{staticClass:"text-subtitle-1"},[e._v("Messages")])]),e._v(" "),t("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[e.companyNameView?t("FormSectionView",{scopedSlots:e._u([{key:"content",fn:function(){return[t("v-row",{attrs:{"no-gutters":""},on:{click:function(s){e.companyNameView=!1}}},[t("v-col",{staticClass:"pa-2 font-weight-bold",attrs:{cols:"12",md:"12"}},[e._v(`
            Default email message sent with sales form
          `)])],1)]},proxy:!0}],null,!1,4266015284)}):t("FormSectionEdit",{ref:"sectionEdit",on:{save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"content",fn:function(){return[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pa-2",attrs:{cols:"4"}},[t("v-checkbox",{attrs:{label:"Use Greeting","hide-details":"auto"},model:{value:e.form.sales_use_greeting,callback:function(s){e.$set(e.form,"sales_use_greeting",s)},expression:"form.sales_use_greeting"}})],1),e._v(" "),t("v-col",{staticClass:"pa-2",attrs:{cols:"4"}},[t("v-select",{attrs:{label:"Greeting",items:e.itemGreeting,filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_message_greeting,callback:function(s){e.$set(e.form,"sales_message_greeting",s)},expression:"form.sales_message_greeting"}})],1),e._v(" "),t("v-col",{staticClass:"pa-2",attrs:{cols:"4"}},[t("v-select",{attrs:{label:"Greeting Name",items:e.itemName,filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_greeting_name,callback:function(s){e.$set(e.form,"sales_greeting_name",s)},expression:"form.sales_greeting_name"}})],1),e._v(" "),t("v-col",{staticClass:"pa-2",attrs:{cols:"4"}},[t("v-select",{attrs:{label:"Sales Form",items:e.itemForm,filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_message_form,callback:function(s){e.$set(e.form,"sales_message_form",s)},expression:"form.sales_message_form"}})],1),e._v(" "),t("v-col",{staticClass:"pa-2",attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Email Subject Line",filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_message_subject_line,callback:function(s){e.$set(e.form,"sales_message_subject_line",s)},expression:"form.sales_message_subject_line"}})],1),e._v(" "),t("v-col",{staticClass:"pa-2",attrs:{cols:"12"}},[t("v-textarea",{attrs:{label:"Email Message",filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_message_content,callback:function(s){e.$set(e.form,"sales_message_content",s)},expression:"form.sales_message_content"}})],1),e._v(" "),t("v-col",{staticClass:"pa-2",attrs:{cols:"12"}},[t("v-checkbox",{attrs:{label:"Copy me a email","hide-details":"auto"},model:{value:e.form.sales_message_email_copy,callback:function(s){e.$set(e.form,"sales_message_email_copy",s)},expression:"form.sales_message_email_copy"}})],1),e._v(" "),t("v-col",{staticClass:"pa-2",attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Copy (CC) new email to address",placehoder:"CC (Separate multiple email with comma)",filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_message_cc,callback:function(s){e.$set(e.form,"sales_message_cc",s)},expression:"form.sales_message_cc"}})],1),e._v(" "),t("v-col",{staticClass:"pa-2",attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Blind Copy (Bcc) new email to address",placehoder:"Bcc (Separate multiple email with comma)",filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_message_bcc,callback:function(s){e.$set(e.form,"sales_message_bcc",s)},expression:"form.sales_message_bcc"}})],1)],1)]},proxy:!0}])})],1),e._v(" "),e.companyNameView?t("v-col",{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[t("v-btn",{attrs:{icon:"",small:""},on:{click:function(s){e.companyNameView=!1}}},[t("v-icon",[e._v("mdi-pencil")])],1)],1):e._e()],1)},d=[],f={props:{form:{type:Object,default:function(){return{}}},logo:{type:String,default:""}},data:function(){return{companyNameView:!0,itemPaymentTerm:[],itemGreeting:["Dear"],itemName:["[Full Name]","[First Name]"],itemForm:["Invoice","Quotation"]}},methods:{save:function(){this.$refs.sectionEdit.save(this.form),this.companyNameView=!0},cancel:function(){this.companyNameView=!0}}},u=f,g=a(50),p=a(51),i=a.n(p),m=a(164),C=a(623),c=a(581),h=a(246),V=a(595),y=a(637),$=a(570),l=a(797),r=Object(g.a)(u,v,d,!1,null,null,null),o=n.default=r.exports;i()(r,{FormSectionView:a(611).default,FormSectionEdit:a(610).default}),i()(r,{VBtn:m.a,VCheckbox:C.a,VCol:c.a,VIcon:h.a,VRow:V.a,VSelect:y.a,VTextField:$.a,VTextarea:l.a})},610:function(S,n,a){"use strict";a.r(n);var v=function(){var l=this,r=l.$createElement,o=l._self._c||r;return o("v-card",{attrs:{elevation:"0"}},[o("v-form",[l._t("content")],2),l._v(" "),o("v-card-actions",[o("v-spacer"),l._v(" "),o("v-btn",{attrs:{outlined:"",small:""},on:{click:l.cancel}},[l._v(" Cancel ")]),l._v(" "),o("v-btn",{attrs:{color:"primary",small:""},on:{click:l.processData}},[l._v(" Save ")])],1)],1)},d=[],f={data:function(){return{tabValue:"company",loadingButton:!1}},methods:{save:function(r){var o=this,e={},x="/api/settings";this.loadingButton=!0,this.$axios.post(x,r).then(function(t){o.loadingButton=!1,o.tabValue==="company"&&(o.$nuxt.$emit("getLogo"),o.$nuxt.$emit("getCompany"))}).catch(function(t){o.loadingButton=!1,o.$swal({type:"error",title:"Error",text:t.response.data.message})})},cancel:function(){this.$emit("cancel")},processData:function(){this.$emit("save")}}},u=f,g=a(50),p=a(51),i=a.n(p),m=a(164),C=a(247),c=a(88),h=a(612),V=a(589),y=Object(g.a)(u,v,d,!1,null,null,null),$=n.default=y.exports;i()(y,{VBtn:m.a,VCard:C.a,VCardActions:c.a,VForm:h.a,VSpacer:V.a})},611:function(S,n,a){"use strict";a.r(n);var v=function(){var c=this,h=c.$createElement,V=c._self._c||h;return V("v-card",{staticStyle:{cursor:"pointer"},attrs:{elevation:"0"}},[c._t("content")],2)},d=[],f=a(50),u=a(51),g=a.n(u),p=a(247),i={},m=Object(f.a)(i,v,d,!1,null,null,null),C=n.default=m.exports;g()(m,{VCard:p.a})}}]);
