(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1016:function(C,l,n){"use strict";n.r(l);var i=n(165),f=n(249),c=n(87),v=n(585),p=n(594),d=n(575),u=n(247),g=n(248),y=n(166),m=n(31),$=n(576),h=n(589),D=n(121),x=function(){var a=this,t=a._self._c;return t(p.a,{attrs:{fullscreen:"","hide-overlay":"",persistent:"",transition:"dialog-top-transition",scrollable:""},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[t(f.a,{attrs:{tile:""}},[t(c.c,[t(D.a,[t(i.a,{attrs:{icon:""}},[t(u.a,[a._v("mdi-progress-pencil")])],1),a._v(" "),t("span",{domProps:{textContent:a._s(a.title)}})],1),a._v(" "),t(h.a),a._v(" "),t(i.a,{attrs:{icon:"",dark:"",color:"red"},on:{click:a.close}},[t(u.a,[a._v("mdi-close")])],1)],1),a._v(" "),t(d.a),a._v(" "),t(c.b,{staticClass:"pl-0 pr-0"},[t(v.a,{attrs:{fluid:""}},[t("LazyDocumentFormDocument",{ref:"formDocument"})],1)],1),a._v(" "),t(d.a),a._v(" "),t(c.a,[t(h.a),a._v(" "),t(i.a,{staticClass:"mr-3",attrs:{color:"green darken-1",dark:"",rounded:""},on:{click:a.close}},[a._v(`
        Save

        `),t($.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:a._u([{key:"activator",fn:function(e){var o=e.on,A=e.attrs;return[t(i.a,a._g(a._b({attrs:{dark:"",icon:""}},"v-btn",A,!1),o),[t(u.a,[a._v("mdi-menu-down")])],1)]}}])},[a._v(" "),t(g.a,a._l(a.items,function(s,e){return t(y.a,{key:e},[t(m.a,[t(m.c,[a._v(a._s(s.text))])],1)],1)}),1)],1)],1)],1)],1)],1)},b=[],S=n(58),F=n(4),T=n(33),j=n(35),O=n(648),B=n(290),L={name:"QuotationList",data:function(){return{title:"AR Credit Memo",items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],breadcrumb:[],form:{},audits:{},defaultItem:{},url:"/api/documents/form",dialogLoading:!1,showLoading:!1,dialog:!0,itemAction:[],actionName:"Save"}},activated:function(){this.dialog=!0,this.getDataFromApi()},methods:{close:function(){this.$router.back(),this.$nuxt.$emit("getDataFromApi")},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},arrowLink:function(a,t){var s=this;this.$axios.get(this.url+"/arrow",{params:{type:t,status:a,document:this.$route.query.document}}).then(function(e){s.$router.push({path:"/dashboard/documents/form",query:{document:e.data.data.id,type:t}}),setTimeout(function(){s.getDataFromApi()},300)}).catch(function(e){s.$swal({type:"error",title:"Error",text:e.response.data.message})})},getDataFromApi:function(a){var t=this;this.showLoading=!0;var s=this.$route.query.type;this.$axios.get(this.url+"/"+this.$route.query.document,{params:{type:s,copyFromId:a}}).then(function(e){var o="";t.audits=e.data.data.audits,e.data.data.count>0?(o=e.data.data.rows,t.actionName="Update"):(o=e.data.data.form,t.actionName="Save"),t.form=Object.assign({},o),t.defaultItem=Object.assign({},o),setTimeout(function(){t.$refs.formDocument.setData(t.form)},30)}).catch(function(e){var o=e.response!==void 0?e.response.data.message:e;t.$swal({type:"error",title:"Error",text:o})}).finally(function(e){t.showLoading=!1})},actionDocument:function(a){var t=this;switch(a){case"SQ":case"SO":case"PQ":case"PO":var s=this.$route.query.document;this.$router.push({path:"/dashboard/documents/form",query:{document:0,type:a}}),setTimeout(function(){t.actionName="Save",t.$refs.formDocument.changeValue("type",a),t.$refs.formDocument.changeValue("parent_id",s)},300);break;case"C":this.$refs.formDocument.changeValue("status","cancel"),this.store();break;case"sendEmail":this.openDialogEmail();break}},deleteDocument:function(a){var t=this,s=this;this.$swal({title:"Are you sure?",text:"The data will be deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(e){e.value&&t.$axios.delete(t.url+"/"+a).then(function(o){t.$swal({type:"success",title:"Success...",text:"Data Deleted!"}),t.$router.push({path:s.$helper.mappingAction(s.$route.query.type)})}).catch(function(o){t.$swal({type:"error",title:"Oops...",text:o.response.data.message})})})},printAction:function(a){switch(a){case"preview":this.previewDocument();break;case"sendEmail":this.openDialogEmail();break}},openDialogEmail:function(){this.$refs.dialogSendEmail.openEmailDialog(this.form)},previewDocument:function(){var a=this,t=this;this.dialogLoading=!0,this.$axios.get("/api/documents/print",{params:{id:t.form.id},responseType:"arraybuffer"}).then(function(s){a.dialogLoading=!1;var e=window.URL.createObjectURL(new Blob([s.data])),o=document.createElement("a");o.href=e,o.setAttribute("download",t.form.document_number+".pdf"),document.body.appendChild(o),o.click()}).catch(function(s){a.dialogLoading=!1,a.$swal({type:"error",title:"Error",text:s.response.data.message})})},store:function(){var a=this,t=this.$route.query.document==="0"?"post":"patch",s=this.$route.query.document==="0"?this.url:this.url+"/"+this.$route.query.document,e=this.$refs.formDocument.returnData(this.$route.query.document);this.dialogLoading=!0,this.$axios({method:t,url:s,data:e}).then(function(o){a.$router.push({path:"/dashboard/documents/form",query:{document:o.data.data.id,type:o.data.data.type}}),a.$nuxt.$emit("snackbar",o.data.message),setTimeout(function(){a.getDataFromApi()},50)}).catch(function(o){a.$swal({type:"error",title:"Error",text:o.response.data.message})}).finally(function(o){a.dialogLoading=!1})}}},w=L,V=n(50),E=Object(V.a)(w,x,b,!1,null,null,null),I=l.default=E.exports}}]);
