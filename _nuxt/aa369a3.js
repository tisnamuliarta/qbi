(window.webpackJsonp=window.webpackJsonp||[]).push([[265,28,67],{603:function(t,e,o){"use strict";o.r(e);var n={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},r=o(50),l=o(51),c=o.n(l),d=o(164),m=o(248),h=o(88),f=o(595),v=o(576),x=o(247),D=o(593),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[e("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"pr-0 pl-0"},[t._t("content")],2),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[t._t("addLine"),t._v(" "),e("v-spacer"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VDialog:f.a,VDivider:v.a,VIcon:x.a,VSpacer:D.a})},646:function(t,e,o){"use strict";o.r(e);o(4);var n={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var t=this;this.$axios.get("/api/master/permissions").then((function(e){t.$auth.$storage.setState("permission_list",e.data.simple)}))},openDialogPermission:function(t,title){this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t),this.canAddData=!0,this.getPermissionUser(t),this.type="user"},getPermissionUser:function(t){var e=this;this.userRole=null,this.$axios.get("/api/master/user/permission",{params:{form:t}}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data)})).finally((function(t){e.loadingPermission=!1}))},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(t,title,e){var o=this,n=this;this.type=e,this.dialogTitle=title,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t);var r="";"user"===e?r="/api/master/user/roles":(this.canAddData=!0,r="/api/master/permission-role"),this.$axios.get(r,{params:{form:this.form}}).then((function(t){n.$refs.childDetails.setDataToDetails(t.data.data),o.loadingPermission=!1})).finally((function(t){o.loadingPermission=!1}))},changeTab:function(t){var e=this;this.loadingPermission=!0,this.$axios.post("/api/master/permission-role",{form:t}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data)})).finally((function(t){e.loadingPermission=!1}))},getRolePermissionUser:function(t){var e=this;this.$axios.post("/api/master/user/role-permission",{item:t}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data)})).finally((function(t){e.loadingPermission=!1}))},getPermissionRole:function(t){var e=this;this.$axios.post("/api/master/permission-role",{form:this.form}).then((function(t){e.$refs.childDetails.setDataToDetails(t.data.data)})).finally((function(t){e.loadingPermission=!1}))},saveRolePermission:function(){var t=this;this.loadingPermission=!0;var details=this.$refs.childDetails.getAddData(),e="";e="user"===this.type?"/api/master/user/permission":"/api/master/permission-role",this.$axios.post(e,{details:details,form:this.form}).then((function(e){t.$swal({icon:"success",title:"Success",text:e.data.message}),"user"===t.type?t.getPermissionUser(t.form):t.getPermissionRole(t.form)})).catch((function(e){t.$swal({icon:"error",title:"Error",text:e.response.data.message})})).finally((function(e){t.loadingPermission=!1}))}}},r=o(50),l=o(51),c=o.n(l),d=o(164),m=o(248),h=o(88),f=o(595),v=o(247),x=o(593),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{persistent:"","no-click-animation":"",scrollable:"","max-width":"1000px",transition:"dialog-bottom-transition"},model:{value:t.dialogPermission,callback:function(e){t.dialogPermission=e},expression:"dialogPermission"}},[e("v-card",{attrs:{loading:t.loadingPermission}},[e("v-card-title",[e("span",{staticClass:"subtitle-2"},[t._v("\n          "+t._s(t.dialogTitle)+"\n        ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",dark:"",icon:"",small:""},on:{click:t.closeDialogPermission}},[e("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),e("v-card-text",[e("div",[e("LazyMasterPermissionList",{ref:"childDetails"})],1)]),t._v(" "),e("v-card-actions",[t.canAddData?e("v-btn",{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(e){return t.$refs.childDetails.addLine()}}},[t._v("\n          Add Line\n        ")]):t._e(),t._v(" "),e("v-spacer"),t._v(" "),t.canAddData?e("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingPermission},on:{click:function(e){return t.saveRolePermission()}}},[t._v("\n          Save\n        ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VDialog:f.a,VIcon:v.a,VSpacer:x.a})},938:function(t,e,o){"use strict";o.r(e);o(21),o(268),o(27),o(8),o(7),o(12),o(10),o(13);var n=o(2);o(59),o(9),o(4);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"MasterUser",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,statusProcessing:"insert",show:!1,dialog:!1,message:!1,loading:!0,loadingSync:!1,searchItem:"",documentStatus:[],search:"",searchStatus:"",searchRole:"",items:[{text:"Edit",action:"edit"},{text:"Copy",action:"copy"},{text:"Direct Permissions",action:"permissions"}],itemText:"",itemAction:"",allData:[],itemRole:[],itemEntity:[],itemSearch:[],options:{},sub_id:{},url:"/api/master/users",form:{},defaultForm:{},headers:[{text:"Username",value:"username"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Enabled",value:"enabled"},{text:"Role",value:"role"},{text:"Action",value:"Action",align:"end"}]}},head:function(){return{title:"Master Users"}},computed:{formTitle:function(){return-1===this.editedIndex?"New User":"Edit User"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){var t=this;setTimeout((function(){t.refreshData()}),500),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{changeEntity:function(){},actions:function(t,e){"edit"===t?this.editItem(e):"copy"===t?this.copyItem(e):this.$refs.dialogPermission.openDialogPermission(e,"Direct Permissions")},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},refreshData:function(){this.getDataFromApi(),this.getRole(),this.getEntity()},getRole:function(){var t=this;this.$axios.get("/api/master/roles").then((function(e){t.itemRole=e.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getEntity:function(){var t=this;this.$axios.get("/api/entities").then((function(e){t.itemEntity=e.data.simple})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,o={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search};this.$axios.get(this.url,{params:l(l({},e.options),o)}).then((function(e){t.loading=!1,t.allData=e.data.data,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.form),t.defaultForm=Object.assign({},e.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},newData:function(){var t=this;this.$refs.dialogForm.openDialog(),setTimeout((function(){t.form=Object.assign({},t.defaultForm),t.editedIndex=-1}),300),this.statusProcessing="insert"},editItem:function(t){var e=t;e.role=JSON.parse(e.role),this.statusProcessing="update",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},e),this.$refs.dialogForm.openDialog(),this.insert=!1},copyItem:function(t){var e=t;e.role=JSON.parse(e.role),this.statusProcessing="copy",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},e),this.$refs.dialogForm.openDialog(),this.insert=!1},close:function(){var t=this;this.statusProcessing="insert",this.dialog=!1,setTimeout((function(){t.form=Object.assign({},t.defaultForm),t.editedIndex=-1}),300)},save:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",e=this,form=this.form,o=this.statusProcessing;e.submitLoad=!0,"insert"===o||"copy"===o?this.store("post","/api/master/users",form,"insert",t):"update"===o&&this.store("put","/api/master/users/"+this.form.id,form,"update",t)},store:function(t,e,data,o){var n=this,r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:data}).then((function(t){n.dialog=!1,n.$swal({type:"success",title:"Success!",text:t.data.message}),n.$refs.dialogForm.closeDialog(),n.getDataFromApi(),r.submitLoad=!1})).catch((function(t){n.$swal({type:"error",title:"Error",text:t.response.data.message}),r.submitLoad=!1}))}}},d=c,m=o(50),h=o(51),f=o.n(h),v=o(637),x=o(164),D=o(907),y=o(621),_=o(620),P=o(247),w=o(616),$=o(249),k=o(165),S=o(34),O=o(577),V=o(632),C=o(898),T=o(575),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("v-layout",[e("v-flex",{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]},"show-select":"",dense:"","fixed-header":"",height:"70vh"},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v("Users")])]),t._v(" "),e("LazyMainToolbar",{staticClass:"has-border-bottom",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,filter:!1,title:"Users","title-button":"User","show-back-link":"","show-new-data":"","show-batch-action":"","new-data-text":"New User"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.Action",fn:function(o){var n=o.item;return[e("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(e){return t.actions(t.itemAction,n)}}},[t._v("\n              "+t._s(t.itemText)+"\n            ")]),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,r=o.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",r,!1),n),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.items,(function(o,i){return e("v-list-item",{key:i,on:{click:function(e){return t.actions(o.action,n)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(o.text))])],1)],1)})),1)],1)]}}],null,!0)})],1)]),t._v(" "),e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"600px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-form",[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Name",placeholder:"Name",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Username",placeholder:"Username",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"E-mail",placeholder:"E-mail",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-autocomplete",{attrs:{items:t.itemRole,chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.role,callback:function(e){t.$set(t.form,"role",e)},expression:"form.role"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-select",{attrs:{items:t.itemEntity,"hide-no-data":"",label:"Company",outlined:"",dense:"","item-text":"name","item-value":"id","hide-details":"auto",clearable:""},model:{value:t.form.entity_id,callback:function(e){t.$set(t.form,"entity_id",e)},expression:"form.entity_id"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-switch",{attrs:{inset:"",label:"Enabled"},model:{value:t.form.enabled,callback:function(e){t.$set(t.form,"enabled",e)},expression:"form.enabled"}})],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n          Save\n        ")])]},proxy:!0}])}),t._v(" "),e("MasterDialogPermission",{ref:"dialogPermission"})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{DialogForm:o(603).default,MasterDialogPermission:o(646).default}),f()(component,{VAutocomplete:v.a,VBtn:x.a,VDataTable:D.a,VFlex:y.a,VForm:_.a,VIcon:P.a,VLayout:w.a,VList:$.a,VListItem:k.a,VListItemContent:S.a,VListItemTitle:S.c,VMenu:O.a,VSelect:V.a,VSwitch:C.a,VTextField:T.a})}}]);