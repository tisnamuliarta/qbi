(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1022:function(O,f,r){"use strict";r.r(f);var l=r(165),p=r(247),h=r(248),v=r(166),d=r(31),g=r(576),$=r(246),D=r(243),b=r(589),S=function(){var e=this,t=e._self._c;return t("LazyFormDialogFull",{ref:"dialogForm",on:{arrowLink:e.arrowLink,closeDialog:e.closeDialog},scopedSlots:e._u([{key:"content",fn:function(){return[t("LazyProductionFormProduction",{ref:"formDocument",attrs:{"form-type":e.formType}})]},proxy:!0},{key:"actions",fn:function(){return[e.actionName==="Update"?t("span",[t(l.a,{attrs:{text:"",small:"",dark:""}},[e._v(`
        More
        `),t(g.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(a){var c=a.on,u=a.attrs;return[t(l.a,e._g(e._b({attrs:{dark:"",icon:""}},"v-btn",u,!1),c),[t(p.a,[e._v("mdi-menu-down")])],1)]}}],null,!1,1025138851)},[e._v(" "),t(h.a,{attrs:{link:""}},e._l(e.itemAction,function(i,a){return t(v.a,{key:a,on:{click:function(u){return e.actionItem(i.action)}}},[t(d.a,[t(d.c,[e._v(e._s(i.text))])],1)],1)}),1)],1)],1)],1):e._e(),e._v(" "),t(b.a),e._v(" "),t(l.a,{staticClass:"mr-3",attrs:{small:"",color:"green darken-1",dark:"",loading:e.loading,disabled:e.form.status==="closed"},on:{click:function(a){return e.actionSave("save")}}},[e._v(`
      `+e._s(e.actionName)+`

      `),t(g.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(a){var c=a.on,u=a.attrs;return[t(l.a,e._g(e._b({attrs:{dark:"",icon:"",disabled:e.form.status==="closed"}},"v-btn",u,!1),c),[t(p.a,[e._v("mdi-menu-down")])],1)]}}])},[e._v(" "),t(h.a,{attrs:{link:""}},e._l(e.items,function(i,a){return t(v.a,{key:a,on:{click:function(u){return e.actionSave(i.action)}}},[t(d.a,[t(d.c,[e._v(e._s(i.text))])],1)],1)}),1)],1)],1)]},proxy:!0}])},[t($.a,{attrs:{value:e.showLoading}},[t(D.a,{attrs:{indeterminate:"",size:"64"}})],1)],1)},w=[],F=r(24),y=r(63),E=r(73),x=r(58),I=r(28),N=r(4),V=r(33),C=r(35),P=r(650),U=r(291),L={name:"DialogForm",props:{url:{type:String,default:"/api/production/order"},formType:{type:String,default:"PE"},formUrl:{type:String,default:"/app/form/production/order"},dialogTitle:{type:String,default:"Production order"},tableUrl:{type:String,default:"/app/productions/order"}},data:function(){return{title:this.dialogTitle,items:[{text:"Save and close",action:"saveClose"},{text:"Save and new",action:"saveNew"},{text:"Save and send",action:"saveSend"}],itemAction:[],action:[],breadcrumb:[],form:{},audits:{},defaultItem:{},dialogLoading:!1,showLoading:!0,dialog:!0,loading:!1,actionName:"Save",actionOnSave:"save",countRouter:-1}},head:function(){return{title:this.$t("Production Order")}},activated:function(){var e=this;this.$nextTick(function(){e.$nuxt.$loading.start()}),setTimeout(function(){e.action=[],e.itemAction=[{text:"Copy",action:"copy"},{text:"Cancel",action:"cancel"},{text:"Audit History",action:"history"}],e.itemAction=e.appendItemAction(e.formType),e.$refs.dialogForm.openDialog(),e.getDataFromApi()},500)},methods:{close:function(){this.$emit("getDataFromApi")},checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},appendItemAction:function(e){return this.action=[],[].concat(Object(y.a)(this.action),Object(y.a)(this.itemAction))},closeDialog:function(){this.$router.push({path:this.tableUrl})},arrowLink:function(e){var t=this;this.$refs.dialogForm.showLoading(),this.$axios.get(this.url+"/arrow",{params:{type:this.formType,status:e.status,document:this.$route.query.document}}).then(function(o){t.$router.push({path:t.formUrl,query:{document:o.data.id}}),setTimeout(function(){t.getDataFromApi()},300),t.$refs.dialogForm.finishLoading()}).catch(function(o){t.$refs.dialogForm.finishLoading(),t.$swal({type:"error",title:"Error",text:o.response.data.message})})},getDataFromApi:function(e){var t=this;return Object(F.a)(regeneratorRuntime.mark(function o(){var i,a,c,u,m;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.showLoading=!0,n.prev=1,i=t.formType,a=t.$route.query.copyFrom,c="",!a){n.next=11;break}return n.next=8,t.$axios.get("/api/document/copy/"+a);case 8:c=n.sent,n.next=14;break;case 11:return n.next=13,t.$axios.get(t.url+"/"+t.$route.query.document,{params:{type:i,copyFromId:e}});case 13:c=n.sent;case 14:u="",t.audits=c.data.audits,c.data.count===0?(u=c.data.form,t.actionName="Save"):(u=c.data.data,t.actionName="Update"),t.form=Object.assign({},u),t.defaultItem=Object.assign({},u),a&&(t.form.status="open",t.form.base_id=t.form.id,t.form.base_type=t.form.transaction_type,t.form.base_num=t.form.transaction_no,t.form.transaction_type=t.formType),t.title=t.dialogTitle+" #"+t.form.transaction_no,t.$refs.dialogForm.setTitle(t.title),t.$refs.formDocument.setData(t.form),t.showLoading=!1,n.next=30;break;case 26:n.prev=26,n.t0=n.catch(1),m=n.t0.response!==void 0?n.t0.response.data.message:n.t0,t.$swal({type:"error",title:"Error",text:m});case 30:case"end":return n.stop()}},o,null,[[1,26]])}))()},actionItem:function(e){var t=this;switch(e){case"copy":this.$router.push({path:t.formUrl,query:{document:0}}),this.form.status="open",this.$refs.formDocument.setData(this.form);break;default:this.$router.push({path:t.mappingAction(e),query:{document:0,copyFrom:this.form.id}}),this.form.status="open",this.form.base_id=this.form.id,this.form.base_type=this.form.transaction_type,this.form.base_num=this.form.document_number,this.$refs.formDocument.setData(this.form);break}},mappingAction:function(e){switch(e){case"SQ":return"/app/form/sales/quote";case"SO":return"/app/form/sales/order";case"SD":return"/app/form/sales/delivery";case"IN":return"/app/form/sales/invoice";case"RC":return"/app/form/sales/payment";case"CN":return"/app/form/sales/creditmemo";case"SR":return"/app/form/sales/return";case"PQ":return"/app/form/purchase/quote";case"PO":return"/app/form/purchase/order";case"GR":return"/app/form/purchase/receipt";case"BL":return"/app/form/purchase/invoice";case"PY":return"/app/form/purchase/payment";case"DN":return"/app/form/purchase/creditmemo";case"GN":return"/app/form/purchase/return"}},actionDocument:function(e){var t=this,o=this.$route.query.document;switch(e){case"SQ":case"SO":case"PQ":case"PO":this.$router.push({path:"/dashboard/documents/form",query:{document:0,type:e}}),setTimeout(function(){t.actionName="Save",t.$refs.formDocument.changeValue("type",e),t.$refs.formDocument.changeValue("parent_id",o)},300);break;case"C":this.$refs.formDocument.changeValue("status","cancel"),this.store();break;case"sendEmail":this.openDialogEmail();break}},printAction:function(e){switch(e){case"preview":this.previewDocument();break;case"sendEmail":this.openDialogEmail();break}},openDialogEmail:function(){this.$refs.dialogSendEmail.openEmailDialog(this.form)},previewDocument:function(){var e=this,t=this;this.$refs.dialogForm.showLoading(),this.$axios.get("/api/document/print",{params:{id:t.form.id,type:t.form.transaction_type},responseType:"arraybuffer"}).then(function(o){e.$refs.dialogForm.finishLoading();var i=window.URL.createObjectURL(new Blob([o.data])),a=document.createElement("a");a.href=i,a.setAttribute("download",t.form.transaction_no+".pdf"),document.body.appendChild(a),a.click()}).catch(function(o){e.$refs.dialogForm.finishLoading(),e.$swal({type:"error",title:"Error",text:o.response.data.message})})},actionSave:function(e){var t=this;this.actionOnSave=e;var o=this.$route.query.document,i=o==="0"?this.url:this.url+"/"+o,a=o==="0"?"post":"patch",c=this.$refs.formDocument.returnData(o),u=this;this.loading=!0,this.showLoading=!0,this.$axios({method:a,url:i,data:c}).then(function(m){switch(t.$nuxt.$emit("snackbar",t.title+" saved!"),t.actionOnSave){case"save":t.$router.push({path:u.formUrl,query:{document:m.data.id}}),setTimeout(function(){t.getDataFromApi()},50);break;case"saveNew":t.$router.push({path:u.formUrl,query:{document:0}}),setTimeout(function(){t.getDataFromApi()},50);break;case"saveClose":t.$refs.dialogForm.closeDialog();break}}).catch(function(m){t.$swal({type:"error",title:"Error",text:m.response.data.message})}).finally(function(m){t.showLoading=!1,t.loading=!1})}}},k=L,A=r(50),T=Object(A.a)(k,S,w,!1,null,null,null),j=f.default=T.exports}}]);
