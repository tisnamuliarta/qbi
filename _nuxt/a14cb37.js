(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1099:function(j,l,a){"use strict";a.r(l);var u=function(){var t=this,n=t._self._c;return n("LazyFormDialogFull",{ref:"dialogFull",scopedSlots:t._u([{key:"content",fn:function(){return[n("LazyDocumentFormInput",{ref:"formDocument"})]},proxy:!0},{key:"actions",fn:function(){return[n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",small:""},on:{click:function(c){t.dialog=!1}}},[t._v(" Save ")])],1)]},proxy:!0}])})},d=[],V=a(4),I=a(59),f={name:"CheckForm",data:function(){return{form:{},defaultItem:{},audits:{}}},methods:{openDialog:function(t,n,r){this.$refs.dialogFull.openDialog(t),this.getDataFromApi(t.item.action,t.item.type,n,r)},getDataFromApi:function(t,n,r){var e=this,c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;this.showLoading=!0;var C=t==="document"?"/api/documents/form":"/api/transactions/form";this.$axios.get(C+"/"+r,{params:{type:n,copyFromId:c}}).then(function(o){var s=o.data.data.count>0?o.data.data.rows:o.data.data.form;e.audits=o.data.data.audits,e.form=Object.assign({},s),e.defaultItem=Object.assign({},s),setTimeout(function(){e.$refs.formDocument.setData(e.form)},30)}).catch(function(o){var s=o.response!==void 0?o.response.data.message:o;e.$swal({type:"error",title:"Error",text:s})}).finally(function(o){e.showLoading=!1})}}},v=f,p=a(50),g=a(51),h=a.n(g),F=a(164),y=a(88),D=a(593),m=Object(p.a)(v,u,d,!1,null,null,null),$=l.default=m.exports;h()(m,{VBtn:F.a,VCardActions:y.a,VSpacer:D.a})}}]);