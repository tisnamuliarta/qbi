(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{646:function(t,e,n){"use strict";n.r(e);n(4);var o={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var t=this;this.$axios.get("/api/master/permissions").then((function(e){t.$auth.$storage.setState("permission_list",e.data.simple)}))},openDialogPermission:function(t,title){this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t),this.canAddData=!0,this.getPermissionUser(t),this.type="user"},getPermissionUser:function(t){var e=this;this.userRole=null,this.$axios.get("/api/master/user/permission",{params:{form:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data)})).finally((function(t){e.loadingPermission=!1}))},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(t,title,e){var n=this,o=this;this.type=e,this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t);var r="";"user"===e?r="/api/master/user/roles":(this.canAddData=!0,r="/api/master/permission-role"),this.$axios.get(r,{params:{form:this.form}}).then((function(t){o.$refs.childDetails.setDataToDetails(t.data.data),n.loadingPermission=!1})).finally((function(t){n.loadingPermission=!1}))},changeTab:function(t){var e=this;this.loadingPermission=!0,this.$axios.post("/api/master/permission-role",{form:t}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data)})).finally((function(t){e.loadingPermission=!1}))},getRolePermissionUser:function(t){var e=this;this.$axios.post("/api/master/user/role-permission",{item:t}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data)})).finally((function(t){e.loadingPermission=!1}))},getPermissionRole:function(t){var e=this;this.$axios.post("/api/master/permission-role",{form:this.form}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data)})).finally((function(t){e.loadingPermission=!1}))},saveRolePermission:function(){var t=this;this.loadingPermission=!0;var details=this.$refs.childDetails.getAddData(),e="";e="user"===this.type?"/api/master/user/permission":"/api/master/permission-role",this.$axios.post(e,{details:details,form:this.form}).then((function(e){t.$swal({icon:"success",title:"Success",text:e.data.message}),"user"===t.type?t.getPermissionUser(t.form):t.getPermissionRole(t.form)})).catch((function(e){t.$swal({icon:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.loadingPermission=!1}))}}},r=n(50),l=n(51),c=n.n(l),d=n(164),m=n(248),h=n(88),f=n(595),v=n(247),P=n(593),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{persistent:"","no-click-animation":"",scrollable:"","max-width":"1000px",transition:"dialog-bottom-transition"},model:{value:t.dialogPermission,callback:function(e){t.dialogPermission=e},expression:"dialogPermission"}},[e("v-card",{attrs:{loading:t.loadingPermission}},[e("v-card-title",[e("span",{staticClass:"subtitle-2"},[t._v("\n          "+t._s(t.dialogTitle)+"\n        ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",dark:"",icon:"",small:""},on:{click:t.closeDialogPermission}},[e("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),e("v-card-text",[e("div",[e("LazyMasterPermissionList",{ref:"childDetails"})],1)]),t._v(" "),e("v-card-actions",[t.canAddData?e("v-btn",{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(e){return t.$refs.childDetails.addLine()}}},[t._v("\n          Add Line\n        ")]):t._e(),t._v(" "),e("v-spacer"),t._v(" "),t.canAddData?e("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingPermission},on:{click:function(e){return t.saveRolePermission()}}},[t._v("\n          Save\n        ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VDialog:f.a,VIcon:v.a,VSpacer:P.a})}}]);