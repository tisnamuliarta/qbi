(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1079:function(T,c,e){"use strict";e.r(c);var u=function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",persistent:"",transition:"dialog-top-transition",scrollable:""},model:{value:a.dialog,callback:function(n){a.dialog=n},expression:"dialog"}},[t("v-card",{attrs:{tile:""}},[t("v-card-title",[t("v-toolbar-title",[t("v-btn",{attrs:{icon:""}},[t("v-icon",[a._v("mdi-progress-pencil")])],1),a._v(" "),t("span",{domProps:{textContent:a._s(a.title)}})],1),a._v(" "),t("v-spacer"),a._v(" "),t("v-btn",{attrs:{icon:"",dark:"",color:"red"},on:{click:a.close}},[t("v-icon",[a._v("mdi-close")])],1)],1),a._v(" "),t("v-divider"),a._v(" "),t("v-card-text",{staticClass:"pl-0 pr-0"},[t("v-container",{attrs:{fluid:""}},[t("LazyDocumentFormDocument",{ref:"formDocument"})],1)],1),a._v(" "),t("v-divider"),a._v(" "),t("v-card-actions",[t("v-spacer"),a._v(" "),t("v-btn",{staticClass:"mr-3",attrs:{color:"green darken-1",dark:"",rounded:""},on:{click:a.close}},[a._v(`
        Save

        `),t("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:a._u([{key:"activator",fn:function(n){var i=n.on,s=n.attrs;return[t("v-btn",a._g(a._b({attrs:{dark:"",icon:""}},"v-btn",s,!1),i),[t("v-icon",[a._v("mdi-menu-down")])],1)]}}])},[a._v(" "),t("v-list",a._l(a.items,function(n,i){return t("v-list-item",{key:i},[t("v-list-item-content",[t("v-list-item-title",[a._v(a._s(n.text))])],1)],1)}),1)],1)],1)],1)],1)],1)},m=[],S=e(59),F=e(4),I=e(32),O=e(35),j=e(806),B=e(291),v={name:"ChartOfAccount",data:function(){return{title:"AR Credit Memo",items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],breadcrumb:[],form:{},audits:{},defaultItem:{},url:"/api/documents/form",dialogLoading:!1,showLoading:!1,dialog:!0,itemAction:[],actionName:"Save"}},activated:function(){this.dialog=!0,this.getDataFromApi()},methods:{close:function(){this.$router.back(),this.$nuxt.$emit("getDataFromApi")},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},arrowLink:function(o,t){var n=this;this.$axios.get(this.url+"/arrow",{params:{type:t,status:o,document:this.$route.query.document}}).then(function(i){n.$router.push({path:"/dashboard/documents/form",query:{document:i.data.data.id,type:t}}),setTimeout(function(){n.getDataFromApi()},300)}).catch(function(i){n.$swal({type:"error",title:"Error",text:i.response.data.message})})},getDataFromApi:function(o){var t=this;this.showLoading=!0;var n=this.$route.query.type;this.$axios.get(this.url+"/"+this.$route.query.document,{params:{type:n,copyFromId:o}}).then(function(i){var s="";t.audits=i.data.data.audits,i.data.data.count>0?(s=i.data.data.rows,t.actionName="Update"):(s=i.data.data.form,t.actionName="Save"),t.form=Object.assign({},s),t.defaultItem=Object.assign({},s),setTimeout(function(){t.$refs.formDocument.setData(t.form)},30)}).catch(function(i){var s=i.response!==void 0?i.response.data.message:i;t.$swal({type:"error",title:"Error",text:s})}).finally(function(i){t.showLoading=!1})},actionDocument:function(o){var t=this;switch(o){case"SQ":case"SO":case"PQ":case"PO":var n=this.$route.query.document;this.$router.push({path:"/dashboard/documents/form",query:{document:0,type:o}}),setTimeout(function(){t.actionName="Save",t.$refs.formDocument.changeValue("type",o),t.$refs.formDocument.changeValue("parent_id",n)},300);break;case"C":this.$refs.formDocument.changeValue("status","cancel"),this.store();break;case"sendEmail":this.openDialogEmail();break}},deleteDocument:function(o){var t=this,n=this;this.$swal({title:"Are you sure?",text:"The data will be deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(i){i.value&&t.$axios.delete(t.url+"/"+o).then(function(s){t.$swal({type:"success",title:"Success...",text:"Data Deleted!"}),t.$router.push({path:n.$helper.mappingAction(n.$route.query.type)})}).catch(function(s){t.$swal({type:"error",title:"Oops...",text:s.response.data.message})})})},printAction:function(o){switch(o){case"preview":this.previewDocument();break;case"sendEmail":this.openDialogEmail();break}},openDialogEmail:function(){this.$refs.dialogSendEmail.openEmailDialog(this.form)},previewDocument:function(){var o=this,t=this;this.dialogLoading=!0,this.$axios.get("/api/documents/print",{params:{id:t.form.id},responseType:"arraybuffer"}).then(function(n){o.dialogLoading=!1;var i=window.URL.createObjectURL(new Blob([n.data])),s=document.createElement("a");s.href=i,s.setAttribute("download",t.form.document_number+".pdf"),document.body.appendChild(s),s.click()}).catch(function(n){o.dialogLoading=!1,o.$swal({type:"error",title:"Error",text:n.response.data.message})})},store:function(){var o=this,t=this.$route.query.document==="0"?"post":"patch",n=this.$route.query.document==="0"?this.url:this.url+"/"+this.$route.query.document,i=this.$refs.formDocument.returnData(this.$route.query.document);this.dialogLoading=!0,this.$axios({method:t,url:n,data:i}).then(function(s){o.$router.push({path:"/dashboard/documents/form",query:{document:s.data.data.id,type:s.data.data.type}}),o.$nuxt.$emit("snackbar",s.data.message),setTimeout(function(){o.getDataFromApi()},50)}).catch(function(s){o.$swal({type:"error",title:"Error",text:s.response.data.message})}).finally(function(s){o.dialogLoading=!1})}}},h=v,f=e(50),p=e(51),g=e.n(p),y=e(164),$=e(247),r=e(88),D=e(582),V=e(591),b=e(572),x=e(246),C=e(248),L=e(165),l=e(34),w=e(573),A=e(589),E=e(119),d=Object(f.a)(h,u,m,!1,null,null,null),N=c.default=d.exports;g()(d,{VBtn:y.a,VCard:$.a,VCardActions:r.a,VCardText:r.b,VCardTitle:r.c,VContainer:D.a,VDialog:V.a,VDivider:b.a,VIcon:x.a,VList:C.a,VListItem:L.a,VListItemContent:l.b,VListItemTitle:l.d,VMenu:w.a,VSpacer:A.a,VToolbarTitle:E.a})}}]);