(window.webpackJsonp=window.webpackJsonp||[]).push([[56,31],{1091:function(T,h,l){"use strict";l.r(h);var v=l(633),u=l(165),g=l(249),D=l(638),s=l(587),C=l(585),k=l(624),x=l(247),f=l(598),y=l(629),A=l(588),b=l(697),L=l(595),_=l(374),i=l(573),o=l(658),c=l(27),V=function(){var a=this,t=a._self._c;return t("div",[t("DialogForm",{ref:"dialogForm",attrs:{"max-width":"700px","dialog-title":a.formTitle,"button-title":a.$t("Save")},scopedSlots:a._u([{key:"content",fn:function(){return[t(k.a,{staticClass:"pt-2"},[t(C.a,[t(f.a,{attrs:{dense:""}},[t(s.a,{attrs:{cols:"12",md:"4"}},[t(y.a,{attrs:{items:["Vendor","Customer","Other"],label:"Category",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:a.form.type,callback:function(e){a.$set(a.form,"type",e)},expression:"form.type"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"8"}},[t(i.a,{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.name,callback:function(e){a.$set(a.form,"name",e)},expression:"form.name"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(g.a,{attrs:{flat:""}},[t(L.a,{model:{value:a.tab,callback:function(e){a.tab=e},expression:"tab"}},a._l(a.items,function(n){return t(A.a,{key:n.tab,attrs:{href:n.href}},[a._v(`
                    `+a._s(n.tab)+`
                  `)])}),1),a._v(" "),t(_.a,{model:{value:a.tab,callback:function(e){a.tab=e},expression:"tab"}},[t(b.a,{attrs:{value:"tab-1"}},[t(f.a,{staticClass:"mt-2",attrs:{dense:""}},[t(s.a,{attrs:{cols:"12",md:"3"}},[t(y.a,{attrs:{items:["Mr.","Ms."],label:"Title",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.identify,callback:function(e){a.$set(a.form,"identify",e)},expression:"form.identify"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"3"}},[t(i.a,{attrs:{label:"First Name",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.first_name,callback:function(e){a.$set(a.form,"first_name",e)},expression:"form.first_name"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"3"}},[t(i.a,{attrs:{label:"Middle Name",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.middle_name,callback:function(e){a.$set(a.form,"middle_name",e)},expression:"form.middle_name"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"3"}},[t(i.a,{attrs:{label:"Last Name",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.last_name,callback:function(e){a.$set(a.form,"last_name",e)},expression:"form.last_name"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"3"}},[t(y.a,{attrs:{items:["Driver License","National ID","Passport"],label:"Identify By",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.identify_by,callback:function(e){a.$set(a.form,"identify_by",e)},expression:"form.identify_by"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"9"}},[t(i.a,{attrs:{label:"Identify Number",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.identify_number,callback:function(e){a.$set(a.form,"identify_number",e)},expression:"form.identify_number"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"6"}},[t(i.a,{attrs:{label:"Company Name",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.company_name,callback:function(e){a.$set(a.form,"company_name",e)},expression:"form.company_name"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"6"}},[t(i.a,{attrs:{label:"Handphone",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.phone,callback:function(e){a.$set(a.form,"phone",e)},expression:"form.phone"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"6"}},[t(i.a,{attrs:{label:"Fax",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.fax,callback:function(e){a.$set(a.form,"fax",e)},expression:"form.fax"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"6"}},[t(i.a,{attrs:{label:"Tax Number",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.tax_number,callback:function(e){a.$set(a.form,"tax_number",e)},expression:"form.tax_number"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"12"}},[t(o.a,{attrs:{rows:"3",label:"Billing Address",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.address,callback:function(e){a.$set(a.form,"address",e)},expression:"form.address"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12",md:"12"}},[t(o.a,{attrs:{rows:"3",label:"Shipping Address",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.shipping_address,callback:function(e){a.$set(a.form,"shipping_address",e)},expression:"form.shipping_address"}})],1)],1)],1),a._v(" "),t(b.a,{attrs:{value:"tab-2"}},[a._l(a.form.banks,function(n,e){return t(f.a,{key:e,attrs:{dense:""}},[t(s.a,{attrs:{cols:"11"}},[t(s.a,{attrs:{cols:"12"}},[t("span",[a._v("Bank Account")]),a._v(" "),t("hr")]),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(v.a,{attrs:{items:a.itemBank,label:"Bank Name",outlined:"",dense:"","hide-details":"auto"},model:{value:n.name,callback:function(m){a.$set(n,"name",m)},expression:"item.name"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(i.a,{attrs:{label:"Bank Branch",outlined:"",dense:"","hide-details":"auto"},model:{value:n.branch,callback:function(m){a.$set(n,"branch",m)},expression:"item.branch"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(i.a,{attrs:{label:"Bank Holder Name",outlined:"",dense:"","hide-details":"auto"},model:{value:n.contact_account_name,callback:function(m){a.$set(n,"contact_account_name",m)},expression:"item.contact_account_name"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(i.a,{attrs:{label:"Bank Holder Account",outlined:"",dense:"","hide-details":"auto"},model:{value:n.contact_account_number,callback:function(m){a.$set(n,"contact_account_number",m)},expression:"item.contact_account_number"}})],1)],1),a._v(" "),t(s.a,{attrs:{cols:"1"}},[t(u.a,{attrs:{color:"red darken-1",dark:"",small:"",icon:""},on:{click:function(m){return a.removeLine(e,"bank",n)}}},[t(x.a,[a._v(" mdi-delete ")])],1)],1)],1)}),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(u.a,{attrs:{color:"green darken-1",dark:"",small:""},on:{click:function(e){return a.addLine("bank")}}},[a._v(`
                        Add Line
                      `)])],1)],2),a._v(" "),t(b.a,{attrs:{value:"tab-3"}},[t(f.a,{attrs:{dense:""}},[t(s.a,{staticClass:"mt-3",attrs:{cols:"12"}},[t(v.a,{attrs:{items:a.itemAccounts,"item-text":"name","item-value":"id",label:"Account Receivable",clearable:"",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.receivable_account_id,callback:function(e){a.$set(a.form,"receivable_account_id",e)},expression:"form.receivable_account_id"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(v.a,{attrs:{items:a.itemAccounts,"item-text":"name","item-value":"id",label:"Account Payable",clearable:"",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.payable_account_id,callback:function(e){a.$set(a.form,"payable_account_id",e)},expression:"form.payable_account_id"}})],1),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(D.a,{attrs:{dense:"","hide-details":"",label:"Active Max Payable"},model:{value:a.form.active_max_payable,callback:function(e){a.$set(a.form,"active_max_payable",e)},expression:"form.active_max_payable"}})],1),a._v(" "),a.form.active_max_payable?t(s.a,{attrs:{cols:"12"}},[t("vuetify-money",{attrs:{"value-when-is-empty":a.valueWhenIsEmpty,options:a.moneyOptions,label:"Max Payable",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.max_payable,callback:function(e){a.$set(a.form,"max_payable",e)},expression:"form.max_payable"}})],1):a._e(),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(v.a,{attrs:{items:a.itemPaymentTerm,"item-text":"name","item-value":"id",label:"Default Payment Term",clearable:"",outlined:"",dense:"","hide-details":"auto"},model:{value:a.form.payment_term_id,callback:function(e){a.$set(a.form,"payment_term_id",e)},expression:"form.payment_term_id"}})],1)],1)],1),a._v(" "),t(b.a,{attrs:{value:"tab-4"}},[a._l(a.form.emails,function(n,e){return t(f.a,{key:e,staticClass:"mt-2",attrs:{dense:""}},[t(s.a,{attrs:{cols:"11"}},[t(i.a,{attrs:{label:"Email",outlined:"",dense:"","hide-details":"auto"},model:{value:n.email,callback:function(m){a.$set(n,"email",m)},expression:"item.email"}})],1),a._v(" "),t(s.a,{attrs:{cols:"1"}},[t(u.a,{attrs:{color:"red darken-1",dark:"",small:"",icon:""},on:{click:function(m){return a.removeLine(e,"email",n)}}},[t(x.a,[a._v(" mdi-delete ")])],1)],1)],1)}),a._v(" "),t(s.a,{attrs:{cols:"12"}},[t(u.a,{attrs:{color:"green darken-1",dark:"",small:""},on:{click:function(e){return a.addLine("email")}}},[a._v(`
                        Add Line
                      `)])],1)],2)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[t(u.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:a.submitLoad},on:{click:function(e){return a.save()}}},[a._v(`
        `+a._s(a.buttonTitle)+`
      `)])]},proxy:!0}])})],1)},$=[],E=l(214),N=l(58),B={name:"FormContact",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,show:!1,form:this.formData,defaultItem:this.formData,itemCategory:[],itemUnit:[],itemAccounts:[],itemBank:[],itemPaymentTerm:[],statusProcessing:"insert",valueWhenIsEmpty:"0",url:"/api/bp/contacts",moneyOptions:{suffix:"",length:11,precision:2},tab:null,items:[{tab:"General Information",href:"#tab-1"},{tab:"List Of Bank",href:"#tab-2"},{tab:"Account Mapping",href:"#tab-3"},{tab:"Email",href:"#tab-4"}]}},mounted:function(){this.getAccounts(),this.getPaymentTerms(),this.getBanks()},methods:{newData:function(a,t){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},t)},editItem:function(a){this.form=Object.assign({},a),this.statusProcessing="update",this.$refs.dialogForm.openDialog()},addLine:function(a){a==="email"?this.form.emails.push({email:null}):a==="bank"&&this.form.banks.push({name:null,branch:null,contact_account_name:null,contact_account_number:null})},removeLine:function(a,t,p){t==="email"?(this.form.emails.splice(a,1),this.$axios.delete("/api/bp/delete-email/"+p.email)):t==="bank"&&(this.form.banks.splice(a,1),this.$axios.delete("/api/bp/delete-bank/"+p.id))},getAccounts:function(){var a=this;this.$axios.get("/api/financial/accounts",{params:{type:"RECEIVABLE, PAYABLE"}}).then(function(t){a.itemAccounts=t.data.data}).catch(function(t){a.$swal({type:"error",title:"Error",text:t.response.data.message})})},getPaymentTerms:function(){var a=this;this.$axios.get("/api/financial/payment-terms",{params:{type:"All"}}).then(function(t){a.itemPaymentTerm=t.data.auto_complete}).catch(function(t){a.$swal({type:"error",title:"Error",text:t.response.data.message})})},getBanks:function(){var a=this;this.$axios.get("/api/master/banks",{params:{type:"All"}}).then(function(t){a.itemBank=t.data.simple}).catch(function(t){a.$swal({type:"error",title:"Error",text:t.response.data.message})})},returnData:function(a){a.type==="Item Category"?this.itemCategory=a.item:a.type==="Item Unit"&&(this.itemUnit=a.item)},close:function(){var a=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout(function(){a.form=Object.assign({},a.defaultItem)},300)},save:function(){var a=this,t=this.statusProcessing;t==="insert"?(this.store("post",this.url,this.form),a.submitLoad=!1):t==="update"&&(this.store("put",this.url+"/"+this.form.id,this.form),a.submitLoad=!1)},store:function(a,t,p){var n=this,e=this;e.submitLoad=!0,this.$axios({method:a,url:t,data:p}).then(function(d){n.$refs.dialogForm.closeDialog(),n.getAccounts(),n.$emit("getDataFromApi")}).catch(function(d){n.$swal({type:"error",title:"Error",text:d.response.data.message}),e.submitLoad=!1})}}},I=B,P=l(50),F=Object(P.a)(I,V,$,!1,null,null,null),j=h.default=F.exports;installComponents(F,{DialogForm:l(600).default})},600:function(T,h,l){"use strict";l.r(h);var v=l(165),u=l(249),g=l(88),D=l(594),s=l(575),C=l(247),k=l(589),x=function(){var o=this,c=o._self._c;return c(D.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:o.original,"max-width":o.maxWidth,transition:"dialog-top-transition"},model:{value:o.dialog,callback:function($){o.dialog=$},expression:"dialog"}},[c(u.a,[c(g.c,[c("span",{staticClass:"subtitle-2"},[o._v(o._s(o.dialogTitle))]),o._v(" "),c(k.a),o._v(" "),c(v.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function($){return o.closeDialog()}}},[c(C.a,[o._v("mdi-close-circle")])],1)],1),o._v(" "),c(s.a),o._v(" "),c(g.b,{staticClass:"pr-0 pl-0"},[o._t("content")],2),o._v(" "),c(s.a),o._v(" "),c(g.a,[o._t("addLine"),o._v(" "),c(k.a),o._v(" "),o._t("saveData")],2)],1)],1)},f=[],y={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},A=y,b=l(50),L=Object(b.a)(A,x,f,!1,null,null,null),_=h.default=L.exports}}]);