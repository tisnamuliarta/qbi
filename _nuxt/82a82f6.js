(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{757:function(S,f,o){"use strict";o.r(f);var u=o(165),v=o(249),d=o(87),p=o(575),g=o(806),m=o(807),y=function(){var r=this,s=r._self._c;return s(g.a,{attrs:{dense:""}},r._l(r.action,function(l){return s(m.a,{key:l.title,attrs:{small:"",color:l.color}},[s(v.a,{staticClass:"elevation-2"},[s(d.b,{staticClass:"pa-2"},[s("span",{staticClass:"font-weight-bold"},[r._v(r._s(l.title))]),r._v(" "),s(p.a),r._v(" "),l.title!=="Clone"&&l.title!=="Cancel"?s("div",[s("span",[r._v("No : no")]),r._v(" "),s("br"),r._v(" "),s("span",[r._v("Date : no")]),r._v(" "),s("br"),r._v(" "),s("span",[r._v("Status : no")]),r._v(" "),s("br")]):r._e()],1),r._v(" "),l.button?s(d.a,[s(u.a,{staticClass:"white--text",attrs:{disabled:l.button,"x-small":"",color:l.color},on:{click:function(E){return r.processAction(l.action)}}},[l.title==="Clone"||l.title==="Cancel"?s("span",{domProps:{textContent:r._s(l.title)}}):s("span",[r._v("Create")])])],1):r._e()],1)],1)}),1)},D=[],b={name:"CardAction",props:{title:{type:String,default:""}},data:function(){return{loading:!0,checkDisable:!1,action:[]}},methods:{setAction:function(r,s){this.checkDisable=s,this.action=r},processAction:function(r){}}},A=b,x=o(50),w=Object(x.a)(A,y,D,!1,null,null,null),L=f.default=w.exports},915:function(S,f,o){"use strict";o.r(f);var u=o(165),v=o(587),d=o(247),p=o(248),g=o(166),m=o(31),y=o(143),D=o(576),b=o(598),A=o(592),x=o(704),w=function(){var t=this,e=t._self._c;return e(b.a,[e(v.a,{attrs:{cols:"12",md:t.itemAction.length>0?"10":"12"}},[e("DocumentFormWindow",{ref:"formWindow",attrs:{breadcrumb:t.breadcrumb},on:{getDataFromApi:t.getDataFromApi},scopedSlots:t._u([{key:"action-toolbar",fn:function(){return[e(u.a,{attrs:{text:"",small:""},on:{click:function(n){return t.arrowLink("prev",t.form.type)}}},[e(d.a,[t._v("mdi-arrow-left")]),t._v(" "),e("span",[t._v("Prev")])],1),t._v(" "),e(u.a,{attrs:{text:"",small:""},on:{click:function(n){return t.arrowLink("next",t.form.type)}}},[e(d.a,[t._v("mdi-arrow-right")]),t._v(" "),e("span",[t._v("Next")])],1),t._v(" "),e(u.a,{attrs:{icon:"",small:""},on:{click:function(n){return t.$refs.dialogAudit.openDialogAudit(t.audits)}}},[e(d.a,[t._v("mdi-history")])],1),t._v(" "),e(u.a,{attrs:{color:"green",dark:"",icon:"",small:""},on:{click:t.getDataFromApi}},[e(d.a,[t._v("mdi-refresh")])],1)]},proxy:!0},{key:"content",fn:function(){return[e(b.a,{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],attrs:{"no-gutters":""}},[e(v.a,{attrs:{cols:"12"}},[e(A.a,{attrs:{type:"list-item-three-line, table-thead, table-tbody, list-item-three-line"}})],1)],1),t._v(" "),e("LazyDocumentFormInput",{directives:[{name:"show",rawName:"v-show",value:!t.showLoading,expression:"!showLoading"}],ref:"formDocument"})]},proxy:!0},{key:"action",fn:function(){return[e(D.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var h=n.attrs,C=n.on;return[e(u.a,t._g(t._b({staticClass:"white--text",attrs:{color:"green",disabled:t.checkDisable(),small:""}},"v-btn",h,!1),C),[t._v(`
              Print & Preview
              `),e(d.a,{attrs:{right:"",dark:""}},[t._v(`
                mdi-printer
              `)])],1)]}}])},[t._v(" "),e(p.a,{attrs:{dense:""}},t._l(t.items,function(a){return e(g.a,{key:a.title,attrs:{dense:"",link:""},on:{click:function(h){return t.printAction(a.action)}}},[e(y.a,[e(d.a,{domProps:{textContent:t._s(a.icon)}})],1),t._v(" "),e(m.a,[e(m.c,{domProps:{textContent:t._s(a.title)}})],1)],1)}),1)],1),t._v(" "),e(D.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var h=n.attrs,C=n.on;return[e(u.a,t._g(t._b({staticClass:"white--text ml-5",attrs:{color:"green",disabled:t.checkDisable(),small:""}},"v-btn",h,!1),C),[t._v(`
              Action
              `),e(d.a,{attrs:{right:"",dark:""}},[t._v(`
                mdi-folder-cog
              `)])],1)]}}])},[t._v(" "),e(p.a,t._l(t.itemAction,function(a){return e(g.a,{key:a.title,attrs:{dense:"",link:""},on:{click:function(h){return t.actionDocument(a.action)}}},[e(y.a,[e(d.a,{domProps:{textContent:t._s(a.icon)}})],1),t._v(" "),e(m.a,[e(m.c,{domProps:{textContent:t._s(a.title)}})],1)],1)}),1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e(u.a,{staticClass:"white--text",attrs:{color:"green darken-1",disabled:t.checkDisable(),small:""},on:{click:t.store}},[t._v(`
          `+t._s(t.actionName)+`
          `),e(d.a,[t._v(`
            mdi-check
          `)])],1)]},proxy:!0}])})],1),t._v(" "),t.itemAction.length>0?e(v.a,{attrs:{cols:"12",md:"2"}},[e(x.a,{staticStyle:{"margin-top":"-20px"}},[t._v("Action")]),t._v(" "),e("DocumentCardAction",{ref:"documentAction"})],1):t._e(),t._v(" "),e("LazyDocumentDialogSendEmail",{ref:"dialogSendEmail"}),t._v(" "),e("LazyDocumentDialogAudit",{ref:"dialogAudit"}),t._v(" "),t.dialogLoading?e("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e()],1)},L=[],$=o(58),r=o(4),s=o(33),l=o(35),V=o(648),E=o(290),F={name:"FormDocument",layout:"dashboard",data:function(){return{breadcrumb:[],form:{},audits:{},defaultItem:{},url:"/api/documents/form",dialogLoading:!1,showLoading:!1,itemAction:[],actionName:"Save",items:[{title:"Preview",action:"preview",icon:"mdi-printer"},{title:"Send Email",action:"sendEmail",icon:"mdi-email"}]}},head:function(){return{title:"Form Document"}},created:function(){this.getDataFromApi()},methods:{checkDisable:function(){return this.form.status==="closed"||this.form.status==="cancel"},arrowLink:function(t,e){var i=this;this.$axios.get(this.url+"/arrow",{params:{type:e,status:t,document:this.$route.query.document}}).then(function(a){i.$router.push({path:"/dashboard/documents/form",query:{document:a.data.data.id,type:e}}),setTimeout(function(){i.getDataFromApi()},300)}).catch(function(a){i.$swal({type:"error",title:"Error",text:a.response.data.message})})},getDataFromApi:function(t){var e=this;this.showLoading=!0;var i=this.$route.query.type;this.$axios.get(this.url+"/"+this.$route.query.document,{params:{type:i,copyFromId:t}}).then(function(a){var n="";e.audits=a.data.data.audits,a.data.data.count>0?(n=a.data.data.rows,e.actionName="Update"):(n=a.data.data.form,e.actionName="Save"),e.form=Object.assign({},n),e.defaultItem=Object.assign({},n),a.data.data.count>0&&(e.itemAction=a.data.data.action,setTimeout(function(){e.$refs.documentAction.setAction(e.itemAction,e.checkDisable())},50)),e.getBreadcrumb(i,n,n.status),setTimeout(function(){e.$refs.formDocument.setData(e.form)},30)}).catch(function(a){var n=a.response!==void 0?a.response.data.message:a;e.$swal({type:"error",title:"Error",text:n})}).finally(function(a){e.showLoading=!1})},actionDocument:function(t){var e=this;switch(t){case"SQ":case"SO":case"PQ":case"PO":var i=this.$route.query.document;this.$router.push({path:"/dashboard/documents/form",query:{document:0,type:t}}),setTimeout(function(){e.actionName="Save",e.getBreadcrumb(t,e.form,e.form.status),e.$refs.formDocument.changeValue("type",t),e.$refs.formDocument.changeValue("parent_id",i)},300);break;case"C":this.$refs.formDocument.changeValue("status","cancel"),this.store();break;case"sendEmail":this.openDialogEmail();break}},deleteDocument:function(t){var e=this,i=this;this.$swal({title:"Are you sure?",text:"The data will be deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(a){a.value&&e.$axios.delete(e.url+"/"+t).then(function(n){e.$swal({type:"success",title:"Success...",text:"Data Deleted!"}),e.$router.push({path:i.$helper.mappingAction(i.$route.query.type)})}).catch(function(n){e.$swal({type:"error",title:"Oops...",text:n.response.data.message})})})},printAction:function(t){switch(t){case"preview":this.previewDocument();break;case"sendEmail":this.openDialogEmail();break}},openDialogEmail:function(){this.$refs.dialogSendEmail.openEmailDialog(this.form)},previewDocument:function(){var t=this,e=this;this.dialogLoading=!0,this.$axios.get("/api/documents/print",{params:{id:e.form.id},responseType:"arraybuffer"}).then(function(i){t.dialogLoading=!1;var a=window.URL.createObjectURL(new Blob([i.data])),n=document.createElement("a");n.href=a,n.setAttribute("download",e.form.document_number+".pdf"),document.body.appendChild(n),n.click()}).catch(function(i){t.dialogLoading=!1,t.$swal({type:"error",title:"Error",text:i.response.data.message})})},getBreadcrumb:function(t,e,i){var a=this.$route.query.document!=="0"?e.document_number:"Create Document";this.breadcrumb=[{text:"Dashboard",disabled:!1,to:{path:"/dashboard"}},{text:this.$helper.mapping(t),disabled:!1,to:{path:this.$helper.mappingAction(t)}},{text:a,disabled:!0,to:{path:"/dashboard/documents/form"}}]},mappingType:function(t){switch(t){case"SQ":return"/dashboard/sales/quote"}},store:function(){var t=this,e=this.$route.query.document==="0"?"post":"patch",i=this.$route.query.document==="0"?this.url:this.url+"/"+this.$route.query.document,a=this.$refs.formDocument.returnData(this.$route.query.document);this.dialogLoading=!0,this.$axios({method:e,url:i,data:a}).then(function(n){t.$router.push({path:"/dashboard/documents/form",query:{document:n.data.data.id,type:n.data.data.type}}),t.$nuxt.$emit("snackbar",n.data.message),setTimeout(function(){t.getDataFromApi()},50)}).catch(function(n){t.$swal({type:"error",title:"Error",text:n.response.data.message})}).finally(function(n){t.dialogLoading=!1})}}},T=F,B=o(50),k=Object(B.a)(T,w,L,!1,null,null,null),N=f.default=k.exports;installComponents(k,{DocumentCardAction:o(757).default})}}]);
