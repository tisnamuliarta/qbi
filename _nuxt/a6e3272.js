(window.webpackJsonp=window.webpackJsonp||[]).push([[100,31,71],{600:function(j,h,i){"use strict";i.r(h);var D=i(165),g=i(249),f=i(87),u=i(594),P=i(575),v=i(247),p=i(589),$=function(){var a=this,s=a._self._c;return s(u.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:a.original,"max-width":a.maxWidth,transition:"dialog-top-transition"},model:{value:a.dialog,callback:function(c){a.dialog=c},expression:"dialog"}},[s(g.a,[s(f.c,[s("span",{staticClass:"subtitle-2"},[a._v(a._s(a.dialogTitle))]),a._v(" "),s(p.a),a._v(" "),s(D.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(c){return a.closeDialog()}}},[s(v.a,[a._v("mdi-close-circle")])],1)],1),a._v(" "),s(P.a),a._v(" "),s(f.b,{staticClass:"pr-0 pl-0"},[a._t("content")],2),a._v(" "),s(P.a),a._v(" "),s(f.a,[a._t("addLine"),a._v(" "),s(p.a),a._v(" "),a._t("saveData")],2)],1)],1)},F=[],b={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},x=b,R=i(50),V=Object(R.a)(x,$,F,!1,null,null,null),U=h.default=V.exports},659:function(j,h,i){"use strict";i.r(h);var D=i(165),g=i(249),f=i(87),u=i(594),P=i(247),v=i(589),p=function(){var a=this,s=a._self._c;return s(u.a,{attrs:{persistent:"","no-click-animation":"",scrollable:"","max-width":"1000px",transition:"dialog-bottom-transition"},model:{value:a.dialogPermission,callback:function(c){a.dialogPermission=c},expression:"dialogPermission"}},[s(g.a,{attrs:{loading:a.loadingPermission}},[s(f.c,[s("span",{staticClass:"subtitle-2"},[a._v(`
        `+a._s(a.dialogTitle)+`
      `)]),a._v(" "),s(v.a),a._v(" "),s(D.a,{attrs:{color:"red darken-1",dark:"",icon:"",small:""},on:{click:a.closeDialogPermission}},[s(P.a,[a._v("mdi-close-circle")])],1)],1),a._v(" "),s(f.b,[s("div",[s("LazyMasterPermissionList",{ref:"childDetails"})],1)]),a._v(" "),s(f.a,[a.canAddData?s(D.a,{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(c){return a.$refs.childDetails.addLine()}}},[a._v(`
        Add Line
      `)]):a._e(),a._v(" "),s(v.a),a._v(" "),a.canAddData?s(D.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:a.loadingPermission},on:{click:function(c){return a.saveRolePermission()}}},[a._v(`
        Save
      `)]):a._e()],1)],1)],1)},$=[],F=i(4),b={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var a=this;this.$axios.get("/api/master/permissions").then(function(s){a.$auth.$storage.setState("permission_list",s.data.simple)})},openDialogPermission:function(a,s){this.dialogTitle=s,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},a),this.canAddData=!0,this.getPermissionUser(a),this.type="user"},getPermissionUser:function(a){var s=this;this.userRole=null,this.$axios.get("/api/master/user/permission",{params:{form:a}}).then(function(n){s.$refs.childDetails.setDataToDetails(n.data.data)}).finally(function(n){s.loadingPermission=!1})},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(a,s,n){var c=this,T=this;this.type=n,this.dialogTitle=s,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},a);var S="";n==="user"?S="/api/master/user/roles":(this.canAddData=!0,S="/api/master/permission-role"),this.$axios.get(S,{params:{form:this.form}}).then(function(C){T.$refs.childDetails.setDataToDetails(C.data.data),c.loadingPermission=!1}).finally(function(C){c.loadingPermission=!1})},changeTab:function(a){var s=this;this.loadingPermission=!0,this.$axios.post("/api/master/permission-role",{form:a}).then(function(n){s.$refs.childDetails.setDataToDetails(n.data.data)}).finally(function(n){s.loadingPermission=!1})},getRolePermissionUser:function(a){var s=this;this.$axios.post("/api/master/user/role-permission",{item:a}).then(function(n){s.$refs.childDetails.setDataToDetails(n.data.data)}).finally(function(n){s.loadingPermission=!1})},getPermissionRole:function(a){var s=this;this.$axios.post("/api/master/permission-role",{form:this.form}).then(function(n){s.$refs.childDetails.setDataToDetails(n.data.data)}).finally(function(n){s.loadingPermission=!1})},saveRolePermission:function(){var a=this;this.loadingPermission=!0;var s=this.$refs.childDetails.getAddData(),n="";this.type==="user"?n="/api/master/user/permission":n="/api/master/permission-role",this.$axios.post(n,{details:s,form:this.form}).then(function(c){a.$swal({icon:"success",title:"Success",text:c.data.message}),a.type==="user"?a.getPermissionUser(a.form):a.getPermissionRole(a.form)}).catch(function(c){a.$swal({icon:"error",title:"Error",text:c.response.data.message})}).finally(function(c){a.loadingPermission=!1})}}},x=b,R=i(50),V=Object(R.a)(x,p,$,!1,null,null,null),U=h.default=V.exports},775:function(j,h,i){"use strict";i.r(h);var D=i(633),g=i(165),f=i(908),u=i(620),P=i(624),v=i(247),p=i(616),$=i(629),F=i(592),b=i(899),x=i(573),R=i(21),V=i(268),U=i(27),r=function(){var t=this,e=t._self._c;return e(p.a,[e(u.a,{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e(F.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"mx-auto",attrs:{type:"table"}}),t._v(" "),e(f.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(d){t.options=d}},scopedSlots:t._u([{key:"top",fn:function(){return[e("LazyMainToolbar",{staticClass:"has-border-bottom",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,filter:!1,title:"Users","title-button":"User"},on:{emitData:t.emitData,newData:t.newData}})]},proxy:!0},{key:"item.Action",fn:function(d){var o=d.item;return[e(g.a,{attrs:{value:"left",small:"",icon:""},on:{click:function(y){return t.editItem(o)}}},[e(v.a,{attrs:{left:""}},[t._v(`
              mdi-pencil-circle
            `)])],1),t._v(" "),e(g.a,{attrs:{value:"center",small:"",icon:""},on:{click:function(y){return t.copyItem(o)}}},[e(v.a,{attrs:{left:""}},[t._v(`
              mdi-content-copy
            `)])],1),t._v(" "),e(g.a,{attrs:{value:"right",small:"",icon:""},on:{click:function(y){return t.$refs.dialogPermission.openDialogPermission(o,"Direct Permissions")}}},[e(v.a,{attrs:{left:""}},[t._v(`
              mdi-playlist-edit
            `)])],1)]}}],null,!0)})],1)]),t._v(" "),e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"600px","dialog-title":t.formTitle,"button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e(P.a,[e(p.a,{attrs:{wrap:""}},[e(u.a,{staticClass:"d-flex",attrs:{md12:""}},[e(p.a,{attrs:{wrap:""}},[e(u.a,{staticClass:"pa-2",attrs:{xs12:""}},[e(x.a,{attrs:{label:"Name",placeholder:"Name",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.name,callback:function(o){t.$set(t.form,"name",o)},expression:"form.name"}})],1),t._v(" "),e(u.a,{staticClass:"pa-2",attrs:{xs12:""}},[e(x.a,{attrs:{label:"Username",placeholder:"Username",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.username,callback:function(o){t.$set(t.form,"username",o)},expression:"form.username"}})],1),t._v(" "),e(u.a,{staticClass:"pa-2",attrs:{xs12:""}},[e(x.a,{attrs:{label:"E-mail",placeholder:"E-mail",outlined:"",dense:"",clearable:"","hide-details":"auto"},model:{value:t.form.email,callback:function(o){t.$set(t.form,"email",o)},expression:"form.email"}})],1),t._v(" "),e(u.a,{staticClass:"pa-2",attrs:{xs12:""}},[e(D.a,{attrs:{items:t.itemRole,chips:"","deletable-chips":"","hide-no-data":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.role,callback:function(o){t.$set(t.form,"role",o)},expression:"form.role"}})],1),t._v(" "),e(u.a,{staticClass:"pa-2",attrs:{xs12:""}},[e($.a,{attrs:{items:t.itemEntity,"hide-no-data":"",label:"Company",outlined:"",dense:"","item-text":"name","item-value":"id","hide-details":"auto",clearable:""},model:{value:t.form.entity_id,callback:function(o){t.$set(t.form,"entity_id",o)},expression:"form.entity_id"}})],1),t._v(" "),e(u.a,{staticClass:"pa-2",attrs:{xs12:""}},[e(b.a,{attrs:{inset:"",label:"Enabled"},model:{value:t.form.enabled,callback:function(o){t.$set(t.form,"enabled",o)},expression:"form.enabled"}})],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e(g.a,{attrs:{color:"green darken-1",small:"",dark:"",loading:t.submitLoad},on:{click:function(o){return t.save()}}},[t._v(`
        Save
      `)])]},proxy:!0}])}),t._v(" "),e("MasterDialogPermission",{ref:"dialogPermission"})],1)},a=[],s=i(58),n=i(10),c=i(4),T={name:"MasterUser",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,statusProcessing:"insert",show:!1,dialog:!1,message:!1,loading:!0,loadingSync:!1,searchItem:"",searchRole:"",search:"",searchStatus:"",allData:[],itemRole:[],itemEntity:[],itemSearch:[],documentStatus:[],options:{},sub_id:{},url:"",form:{},defaultForm:{},headers:[{text:"Username",value:"username"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Enabled",value:"enabled"},{text:"Role",value:"role"},{text:"Action",value:"Action",align:"end"}]}},head:function(){return{title:"Master Users"}},computed:{formTitle:function(){return this.editedIndex===-1?"New User":"Edit User"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){var t=this;setTimeout(function(){t.refreshData()},500)},methods:{emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},refreshData:function(){this.getDataFromApi(),this.getRole(),this.getEntity()},getRole:function(){var t=this;this.$axios.get("/api/master/roles").then(function(e){t.itemRole=e.data.data.simple}).catch(function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})},getEntity:function(){var t=this;this.$axios.get("/api/entities").then(function(e){t.itemEntity=e.data.data.rows}).catch(function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/master/users",{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search}}).then(function(m){t.loading=!1,t.allData=m.data.data.rows,t.totalData=m.data.data.total,t.itemSearch=m.data.data.filter,t.form=Object.assign({},m.data.data.form),t.defaultForm=Object.assign({},m.data.data.form)}).catch(function(m){t.loading=!1,t.$swal({type:"error",title:"Error",text:m.response.data.message})})},newData:function(){var t=this;this.$refs.dialogForm.openDialog(),setTimeout(function(){t.form=Object.assign({},t.defaultForm),t.editedIndex=-1},300),this.statusProcessing="insert"},editItem:function(t){var e=t;e.role=JSON.parse(e.role),this.statusProcessing="update",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},e),this.$refs.dialogForm.openDialog(),this.insert=!1},copyItem:function(t){var e=t;e.role=JSON.parse(e.role),this.statusProcessing="copy",this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},e),this.$refs.dialogForm.openDialog(),this.insert=!1},close:function(){var t=this;this.statusProcessing="insert",this.dialog=!1,setTimeout(function(){t.form=Object.assign({},t.defaultForm),t.editedIndex=-1},300)},save:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,m=this,d=this.form,o=this.statusProcessing;m.submitLoad=!0,o==="insert"?this.store("post","/api/master/users",d,"insert",t):o==="copy"?this.store("post","/api/master/users",d,"insert",t):o==="update"&&this.store("put","/api/master/users/"+this.form.id,d,"update",t)},store:function(t,e,m,d){var o=this,I=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",y=this;y.submitLoad=!0,this.$axios({method:t,url:e,data:m}).then(function(L){o.dialog=!1,o.$swal({type:"success",title:"Success!",text:L.data.message}),o.$refs.dialogForm.closeDialog(),o.getDataFromApi(),y.submitLoad=!1}).catch(function(L){o.$swal({type:"error",title:"Error",text:L.response.data.message}),y.submitLoad=!1})}}},S=T,C=i(50),A=Object(C.a)(S,r,a,!1,null,null,null),E=h.default=A.exports;installComponents(A,{DialogForm:i(600).default,MasterDialogPermission:i(659).default})}}]);
