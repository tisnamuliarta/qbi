(window.webpackJsonp=window.webpackJsonp||[]).push([[274,31,69],{602:function(U,u,s){"use strict";s.r(u);var V=function(){var a=this,i=a._self._c;return i("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:a.original,"max-width":a.maxWidth,transition:"dialog-top-transition"},model:{value:a.dialog,callback:function(d){a.dialog=d},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"subtitle-2"},[a._v(a._s(a.dialogTitle))]),a._v(" "),i("v-spacer"),a._v(" "),i("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(d){return a.closeDialog()}}},[i("v-icon",[a._v("mdi-close-circle")])],1)],1),a._v(" "),i("v-divider"),a._v(" "),i("v-card-text",{staticClass:"pr-0 pl-0"},[a._t("content")],2),a._v(" "),i("v-divider"),a._v(" "),i("v-card-actions",[a._t("addLine"),a._v(" "),i("v-spacer"),a._v(" "),a._t("saveData")],2)],1)],1)},b=[],A={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},D=A,x=s(50),$=s(51),S=s.n($),C=s(164),F=s(248),g=s(88),h=s(595),O=s(576),j=s(247),T=s(593),v=Object(x.a)(D,V,b,!1,null,null,null),I=u.default=v.exports;S()(v,{VBtn:C.a,VCard:F.a,VCardActions:g.a,VCardText:g.b,VCardTitle:g.c,VDialog:h.a,VDivider:O.a,VIcon:j.a,VSpacer:T.a})},653:function(U,u,s){"use strict";s.r(u);var V=function(){var a=this,i=a._self._c;return i("v-dialog",{attrs:{persistent:"","no-click-animation":"",scrollable:"","max-width":"1000px",transition:"dialog-bottom-transition"},model:{value:a.dialogPermission,callback:function(d){a.dialogPermission=d},expression:"dialogPermission"}},[i("v-card",{attrs:{loading:a.loadingPermission}},[i("v-card-title",[i("span",{staticClass:"subtitle-2"},[a._v(`
          `+a._s(a.dialogTitle)+`
        `)]),a._v(" "),i("v-spacer"),a._v(" "),i("v-btn",{attrs:{color:"red darken-1",dark:"",icon:"",small:""},on:{click:a.closeDialogPermission}},[i("v-icon",[a._v("mdi-close-circle")])],1)],1),a._v(" "),i("v-card-text",[i("div",[i("LazyMasterPermissionList",{ref:"childDetails"})],1)]),a._v(" "),i("v-card-actions",[a.canAddData?i("v-btn",{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(d){return a.$refs.childDetails.addLine()}}},[a._v(`
          Add Line
        `)]):a._e(),a._v(" "),i("v-spacer"),a._v(" "),a.canAddData?i("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:a.loadingPermission},on:{click:function(d){return a.saveRolePermission()}}},[a._v(`
          Save
        `)]):a._e()],1)],1)],1)},b=[],A=s(4),D={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var a=this;this.$axios.get("/api/master/permissions").then(function(i){a.$auth.$storage.setState("permission_list",i.data.simple)})},openDialogPermission:function(a,i){this.dialogTitle=i,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},a),this.canAddData=!0,this.getPermissionUser(a),this.type="user"},getPermissionUser:function(a){var i=this;this.userRole=null,this.$axios.get("/api/master/user/permission",{params:{form:a}}).then(function(o){i.$refs.childDetails.setDataToDetails(o.data.data)}).finally(function(o){i.loadingPermission=!1})},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(a,i,o){var d=this,R=this;this.type=o,this.dialogTitle=i,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},a);var y="";o==="user"?y="/api/master/user/roles":(this.canAddData=!0,y="/api/master/permission-role"),this.$axios.get(y,{params:{form:this.form}}).then(function(L){R.$refs.childDetails.setDataToDetails(L.data.data),d.loadingPermission=!1}).finally(function(L){d.loadingPermission=!1})},changeTab:function(a){var i=this;this.loadingPermission=!0,this.$axios.post("/api/master/permission-role",{form:a}).then(function(o){i.$refs.childDetails.setDataToDetails(o.data.data)}).finally(function(o){i.loadingPermission=!1})},getRolePermissionUser:function(a){var i=this;this.$axios.post("/api/master/user/role-permission",{item:a}).then(function(o){i.$refs.childDetails.setDataToDetails(o.data.data)}).finally(function(o){i.loadingPermission=!1})},getPermissionRole:function(a){var i=this;this.$axios.post("/api/master/permission-role",{form:this.form}).then(function(o){i.$refs.childDetails.setDataToDetails(o.data.data)}).finally(function(o){i.loadingPermission=!1})},saveRolePermission:function(){var a=this;this.loadingPermission=!0;var i=this.$refs.childDetails.getAddData(),o="";this.type==="user"?o="/api/master/user/permission":o="/api/master/permission-role",this.$axios.post(o,{details:i,form:this.form}).then(function(d){a.$swal({icon:"success",title:"Success",text:d.data.message}),a.type==="user"?a.getPermissionUser(a.form):a.getPermissionRole(a.form)}).catch(function(d){a.$swal({icon:"error",title:"Error",text:d.response.data.message})}).finally(function(d){a.loadingPermission=!1})}}},x=D,$=s(50),S=s(51),C=s.n(S),F=s(164),g=s(248),h=s(88),O=s(595),j=s(247),T=s(593),v=Object($.a)(x,V,b,!1,null,null,null),I=u.default=v.exports;C()(v,{VBtn:F.a,VCard:g.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VDialog:O.a,VIcon:j.a,VSpacer:T.a})},941:function(U,u,s){"use strict";s.r(u);var V=s(21),b=s(268),A=s(27),D=function(){var t=this,e=t._self._c;return e("v-layout",[e("v-flex",{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]},"show-select":"",dense:"","fixed-header":"",height:"70vh"},on:{"update:options":function(r){t.options=r}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v("Users")])]),t._v(" "),e("LazyMainToolbar",{staticClass:"has-border-bottom",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,filter:!1,title:"Users","title-button":"User","show-back-link":"","show-new-data":"","show-batch-action":"","new-data-text":"New User"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.Action",fn:function(r){var l=r.item;return[e("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(f){return t.actions(t.itemAction,l)}}},[t._v(`
              `+t._s(t.itemText)+`
            `)]),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(f){var p=f.on,M=f.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",M,!1),p),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.items,function(P,f){return e("v-list-item",{key:f,on:{click:function(M){return t.actions(P.action,l)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(P.text))])],1)],1)}),1)],1)]}}],null,!0)})],1)]),t._v(" "),e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"600px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-form",[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Name",placeholder:"Name",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.name,callback:function(l){t.$set(t.form,"name",l)},expression:"form.name"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"Username",placeholder:"Username",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.username,callback:function(l){t.$set(t.form,"username",l)},expression:"form.username"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-text-field",{attrs:{label:"E-mail",placeholder:"E-mail",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.email,callback:function(l){t.$set(t.form,"email",l)},expression:"form.email"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-autocomplete",{attrs:{items:t.itemRole,chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.role,callback:function(l){t.$set(t.form,"role",l)},expression:"form.role"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-select",{attrs:{items:t.itemEntity,"hide-no-data":"",label:"Company",outlined:"",dense:"","item-text":"name","item-value":"id","hide-details":"auto",clearable:""},model:{value:t.form.entity_id,callback:function(l){t.$set(t.form,"entity_id",l)},expression:"form.entity_id"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{xs12:""}},[e("v-switch",{attrs:{inset:"",label:"Enabled"},model:{value:t.form.enabled,callback:function(l){t.$set(t.form,"enabled",l)},expression:"form.enabled"}})],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad},on:{click:function(l){return t.save()}}},[t._v(`
          Save
        `)])]},proxy:!0}])}),t._v(" "),e("MasterDialogPermission",{ref:"dialogPermission"})],1)},x=[],$=s(8),S=s(7),C=s(12),F=s(10),g=s(13),h=s(2),O=s(59),j=s(9),T=s(4);function v(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);t&&(c=c.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,c)}return e}function I(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?v(Object(e),!0).forEach(function(c){Object(h.a)(n,c,e[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach(function(c){Object.defineProperty(n,c,Object.getOwnPropertyDescriptor(e,c))})}return n}var m={name:"MasterUser",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,statusProcessing:"insert",show:!1,dialog:!1,message:!1,loading:!0,loadingSync:!1,searchItem:"",documentStatus:[],search:"",searchStatus:"",searchRole:"",items:[{text:"Edit",action:"edit"},{text:"Copy",action:"copy"},{text:"Direct Permissions",action:"permissions"}],itemText:"",itemAction:"",allData:[],itemRole:[],itemEntity:[],itemSearch:[],options:{},sub_id:{},url:"/api/master/users",form:{},defaultForm:{},headers:[{text:"Username",value:"username"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Enabled",value:"enabled"},{text:"Role",value:"role"},{text:"Action",value:"Action",align:"end"}]}},head:function(){return{title:"Master Users"}},computed:{formTitle:function(){return this.editedIndex===-1?"New User":"Edit User"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){var t=this;setTimeout(function(){t.refreshData()},500),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{changeEntity:function(){},actions:function(t,e){t==="edit"?this.editItem(e):t==="copy"?this.copyItem(e):this.$refs.dialogPermission.openDialogPermission(e,"Direct Permissions")},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},refreshData:function(){this.getDataFromApi(),this.getRole(),this.getEntity()},getRole:function(){var t=this;this.$axios.get("/api/master/roles").then(function(e){t.itemRole=e.data.simple}).catch(function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})},getEntity:function(){var t=this;this.$axios.get("/api/entities").then(function(e){t.itemEntity=e.data.simple}).catch(function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,c={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search};this.$axios.get(this.url,{params:I(I({},e.options),c)}).then(function(r){t.loading=!1,t.allData=r.data.data,t.totalData=r.data.total,t.itemSearch=r.data.filter,t.form=Object.assign({},r.data.form),t.defaultForm=Object.assign({},r.data.form)}).catch(function(r){t.loading=!1,t.$swal({type:"error",title:"Error",text:r.response.data.message})})},newData:function(){var t=this;this.$refs.dialogForm.openDialog(),setTimeout(function(){t.form=Object.assign({},t.defaultForm),t.editedIndex=-1},300),this.statusProcessing="insert"},editItem:function(t){var e=t;e.role=JSON.parse(e.role),this.statusProcessing="update",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},e),this.$refs.dialogForm.openDialog(),this.insert=!1},copyItem:function(t){var e=t;e.role=JSON.parse(e.role),this.statusProcessing="copy",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},e),this.$refs.dialogForm.openDialog(),this.insert=!1},close:function(){var t=this;this.statusProcessing="insert",this.dialog=!1,setTimeout(function(){t.form=Object.assign({},t.defaultForm),t.editedIndex=-1},300)},save:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,c=this,r=this.form,l=this.statusProcessing;c.submitLoad=!0,l==="insert"?this.store("post","/api/master/users",r,"insert",t):l==="copy"?this.store("post","/api/master/users",r,"insert",t):l==="update"&&this.store("put","/api/master/users/"+this.form.id,r,"update",t)},store:function(t,e,c,r){var l=this,P=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",f=this;f.submitLoad=!0,this.$axios({method:t,url:e,data:c}).then(function(p){l.dialog=!1,l.$swal({type:"success",title:"Success!",text:p.data.message}),l.$refs.dialogForm.closeDialog(),l.getDataFromApi(),f.submitLoad=!1}).catch(function(p){l.$swal({type:"error",title:"Error",text:p.response.data.message}),f.submitLoad=!1})}}},a=m,i=s(50),o=s(51),d=s.n(o),R=s(637),y=s(164),L=s(908),B=s(622),z=s(625),J=s(247),W=s(615),K=s(249),G=s(165),N=s(35),H=s(577),Q=s(631),X=s(899),Y=s(574),E=Object(i.a)(a,D,x,!1,null,null,null),Z=u.default=E.exports;d()(E,{DialogForm:s(602).default,MasterDialogPermission:s(653).default}),d()(E,{VAutocomplete:R.a,VBtn:y.a,VDataTable:L.a,VFlex:B.a,VForm:z.a,VIcon:J.a,VLayout:W.a,VList:K.a,VListItem:G.a,VListItemContent:N.a,VListItemTitle:N.c,VMenu:H.a,VSelect:Q.a,VSwitch:X.a,VTextField:Y.a})}}]);
