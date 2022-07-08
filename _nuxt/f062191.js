(window.webpackJsonp=window.webpackJsonp||[]).push([[63,52],{612:function(B,_,t){"use strict";var g=t(1),E=t(33),O=t.n(E),M=t(52),I=t.n(M),C=t(286),L=t.n(C),j=t(9),$=t.n(j),T=t(4),P=t.n(T),x=t(10),U=t.n(x),y=t(59),R=t.n(y),K=t(79),a=t.n(K),r=t(8),i=t.n(r),l=t(7),h=t.n(l),V=t(12),D=t.n(V),A=t(13),s=t.n(A),m=t(5),e=t(99),d=t(118);function p(c,o){var n=Object.keys(c);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(c);o&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(c,f).enumerable})),n.push.apply(n,u)}return n}function v(c){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?p(Object(n),!0).forEach(function(u){Object(g.a)(c,u,n[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(u){Object.defineProperty(c,u,Object.getOwnPropertyDescriptor(n,u))})}return c}_.a=Object(m.a)(e.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(o){var n=Object.values(o).includes(!0);this.$emit("input",!n)},deep:!0,immediate:!0}},methods:{watchInput:function(o){var n=this,u=function(b){return b.$watch("hasError",function(S){n.$set(n.errorBag,b._uid,S)},{immediate:!0})},f={_uid:o._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?f.shouldValidate=o.$watch("shouldValidate",function(W){!W||n.errorBag.hasOwnProperty(o._uid)||(f.valid=u(o))}):f.valid=u(o),f},validate:function(){return this.inputs.filter(function(o){return!o.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(o){return o.reset()}),this.resetErrorBag()},resetErrorBag:function(){var o=this;this.lazyValidation&&setTimeout(function(){o.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(o){return o.resetValidation()}),this.resetErrorBag()},register:function(o){this.inputs.push(o),this.watchers.push(this.watchInput(o))},unregister:function(o){var n=this.inputs.find(function(f){return f._uid===o._uid});if(!!n){var u=this.watchers.find(function(f){return f._uid===n._uid});u&&(u.valid(),u.shouldValidate()),this.watchers=this.watchers.filter(function(f){return f._uid!==n._uid}),this.inputs=this.inputs.filter(function(f){return f._uid!==n._uid}),this.$delete(this.errorBag,n._uid)}}},render:function(o){var n=this;return o("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(f){return n.$emit("submit",f)}}},this.$slots.default)}})},615:function(B,_,t){"use strict";var g=t(281),E=t.n(g),O=t(282);_.a=Object(O.a)("layout")},617:function(B,_,t){"use strict";var g=t(281),E=t.n(g),O=t(282);_.a=Object(O.a)("flex")},639:function(B,_,t){"use strict";t.r(_);var g=function(){var a=this,r=a.$createElement,i=a._self._c||r;return i("v-dialog",{attrs:{persistent:"","max-width":"1000px",transition:"dialog-bottom-transition"},model:{value:a.dialogPermission,callback:function(l){a.dialogPermission=l},expression:"dialogPermission"}},[i("v-card",{attrs:{loading:a.loadingPermission}},[i("v-card-title",[i("span",{staticClass:"subtitle-2"},[a._v(`
        `+a._s(a.dialogTitle)+`
      `)]),a._v(" "),i("v-spacer"),a._v(" "),i("v-btn",{attrs:{color:"red darken-1",dark:"",icon:"",small:""},on:{click:a.closeDialogPermission}},[i("v-icon",[a._v("mdi-close-circle")])],1)],1),a._v(" "),i("v-card-text",[i("div",{staticClass:"scroll-container"},[i("LazyMasterPermissionList",{ref:"childDetails"})],1)]),a._v(" "),i("v-card-actions",[a.canAddData?i("v-btn",{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(l){return a.$refs.childDetails.addLine()}}},[a._v(`
        Add Line
      `)]):a._e(),a._v(" "),i("v-spacer"),a._v(" "),a.canAddData?i("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:a.loadingPermission},on:{click:function(l){return a.saveRolePermission()}}},[a._v(`
        Save
      `)]):a._e()],1)],1)],1)},E=[],O=t(4),M={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var r=this;this.$axios.get("/api/master/permissions").then(function(i){r.$auth.$storage.setLocalStorage("permission_list",i.data.data.simple)})},openDialogPermission:function(r,i){this.dialogTitle=i,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},r),this.canAddData=!0,this.getPermissionUser(r),this.type="user"},getPermissionUser:function(r){var i=this;this.userRole=null,this.$axios.get("/api/master/user/permission",{params:{form:r}}).then(function(l){i.$refs.childDetails.setDataToDetails(l.data.data.rows)}).finally(function(l){i.loadingPermission=!1})},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(r,i,l){var h=this,V=this;this.type=l,this.dialogTitle=i,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},r);var D="";l==="user"?D="/api/master/user/roles":(this.canAddData=!0,D="/api/master/permission-role"),this.$axios.get(D,{params:{form:this.form}}).then(function(A){V.$refs.childDetails.setDataToDetails(A.data.data.rows),h.loadingPermission=!1}).finally(function(A){h.loadingPermission=!1})},changeTab:function(r){var i=this;this.loadingPermission=!0,this.$axios.post("/api/master/permission-role",{form:r}).then(function(l){i.$refs.childDetails.setDataToDetails(l.data.data.rows)}).finally(function(l){i.loadingPermission=!1})},getRolePermissionUser:function(r){var i=this;this.$axios.post("/api/master/user/role-permission",{item:r}).then(function(l){i.$refs.childDetails.setDataToDetails(l.data.data.rows)}).finally(function(l){i.loadingPermission=!1})},getPermissionRole:function(r){var i=this;this.$axios.post("/api/master/permission-role",{form:this.form}).then(function(l){i.$refs.childDetails.setDataToDetails(l.data.data.rows)}).finally(function(l){i.loadingPermission=!1})},saveRolePermission:function(){var r=this;this.loadingPermission=!0;var i=this.$refs.childDetails.getAddData(),l="";this.type==="user"?l="/api/master/user/permission":l="/api/master/permission-role",this.$axios.post(l,{details:i,form:this.form}).then(function(h){r.$swal({icon:"success",title:"Success",text:h.data.message}),r.type==="user"?r.getPermissionUser(r.form):r.getPermissionRole(r.form)}).catch(function(h){r.$swal({icon:"error",title:"Error",text:h.response.data.message})}).finally(function(h){r.loadingPermission=!1})}}},I=M,C=t(50),L=t(51),j=t.n(L),$=t(164),T=t(247),P=t(88),x=t(591),U=t(246),y=t(589),R=Object(C.a)(I,g,E,!1,null,null,null),K=_.default=R.exports;j()(R,{VBtn:$.a,VCard:T.a,VCardActions:P.a,VCardText:P.b,VCardTitle:P.c,VDialog:x.a,VIcon:U.a,VSpacer:y.a})},894:function(B,_,t){"use strict";t.r(_);var g=function(){var s=this,m=s.$createElement,e=s._self._c||m;return e("v-layout",[e("v-flex",{attrs:{sm12:"",md12:""}},[e("div",{staticClass:"mt-0"},[e("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:s.headers,items:s.allData,"items-per-page":20,options:s.options,"server-items-length":s.totalData,loading:s.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(d){s.options=d}},scopedSlots:s._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[e("v-toolbar-title",{staticClass:"hidden-xs-only"},[s._v("Master Roles")]),s._v(" "),e("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),s._v(" "),e("v-spacer"),s._v(" "),e("v-btn",{attrs:{icon:"",color:"green",dark:""},on:{click:function(d){return s.newData()}}},[e("v-icon",[s._v("mdi-plus-circle")])],1),s._v(" "),e("v-btn",{attrs:{loading:s.loading,icon:""},on:{click:s.getDataFromApi}},[e("v-icon",[s._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.ACTIONS",fn:function(d){var p=d.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(v){return s.editItem(p)}}},[s._v(`
            mdi-pencil-circle
          `)]),s._v(" "),e("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(v){return s.$refs.dialogPermission.openRolePermissions(p,"Role Permissions","role")}}},[s._v(`
            mdi-gate
          `)])]}}],null,!0)})],1)]),s._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:s.dialog,callback:function(d){s.dialog=d},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[s._v(s._s(s.formTitle))])]),s._v(" "),e("v-card-text",[e("v-form",[e("v-layout",{attrs:{wrap:""}},[s.message?e("v-flex",{attrs:{xs12:""}},[e("div",{staticClass:"red darken-2 text-xs-center"},[e("span",{staticClass:"white--text"},[s._v(s._s(s.message))])])]):s._e(),s._v(" "),e("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-2",attrs:{md12:""}},[e("v-text-field",{attrs:{label:"Role Name",placeholder:"Role Name",outlined:"",dense:"","hide-details":"auto"},model:{value:s.form.name,callback:function(d){s.$set(s.form,"name",d)},expression:"form.name"}})],1),s._v(" "),e("v-flex",{staticClass:"pa-2",attrs:{md12:""}},[e("v-text-field",{attrs:{label:"Description",placeholder:"Description",outlined:"",dense:"","hide-details":"auto"},model:{value:s.form.description,callback:function(d){s.$set(s.form,"description",d)},expression:"form.description"}})],1)],1)],1)],1)],1)],1),s._v(" "),e("v-card-actions",[e("v-spacer"),s._v(" "),e("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(d){s.dialog=!1}}},[s._v(`
          Close
        `)]),s._v(" "),e("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:s.submitLoad},on:{click:function(d){return s.save()}}},[s._v(`
          Save
        `)])],1)],1)],1),s._v(" "),e("MasterDialogPermission",{ref:"dialogPermission"})],1)},E=[],O=t(59),M={name:"MasterRole",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,statusProcessing:"insert",dialog:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,loadingPermission:!0,allData:[],department:{},form:{id:null,name:null,description:null},defaultItem:{id:null,name:null,description:null},options:{},optionDivision:{},headers:[{text:"Role Name",value:"name"},{text:"Description",value:"description"},{text:"Guard",value:"guard_name"},{text:"Action",value:"ACTIONS",align:"center"}]}},head:function(){return{title:"Master Roles"}},computed:{formTitle:function(){return this.editedIndex===-1?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var m=this;this.loading=!0;var e=this;this.$axios.get("/api/master/roles",{params:{options:e.options}}).then(function(d){m.loading=!1,m.allData=d.data.data.rows,m.totalData=d.data.data.total}).catch(function(d){m.loading=!1,m.$swal({type:"error",title:"Error",text:d.response.data.message})})},newData:function(){this.dialog=!0,this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem),this.message=!1},editItem:function(m){this.editedIndex=this.allData.indexOf(m),this.form=Object.assign({},m),this.statusProcessing="update",this.dialog=!0,this.insert=!1},close:function(){var m=this;this.dialog=!1,this.statusProcessing="insert",setTimeout(function(){m.form=Object.assign({},m.defaultItem),m.editedIndex=-1},300)},save:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=this,p=this.form,v=this.statusProcessing,c={form:p,status:v};v==="insert"?(this.store("post","/api/master/roles",c,"insert",m),d.submitLoad=!1):v==="update"&&(this.store("put","/api/master/roles/"+this.form.id,c,"update",m),d.submitLoad=!1)},store:function(m,e,d,p){var v=this,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",o=this;o.submitLoad=!0,this.$axios({method:m,url:e,data:d}).then(function(n){n.data.status==="Error"?(v.$swal({type:"error",title:"Error",text:n.data.message}),o.submitLoad=!1):(v.dialog=!1,v.message=n.data.message,setTimeout(function(){return v.message=!1},8e3),v.getDataFromApi())}).catch(function(n){v.$swal({type:"error",title:"Error",text:n.response.data.message}),o.submitLoad=!1})}}},I=M,C=t(50),L=t(51),j=t.n(L),$=t(164),T=t(247),P=t(88),x=t(1018),U=t(591),y=t(572),R=t(617),K=t(612),a=t(246),r=t(615),i=t(589),l=t(570),h=t(73),V=t(119),D=Object(C.a)(I,g,E,!1,null,null,null),A=_.default=D.exports;j()(D,{MasterDialogPermission:t(639).default}),j()(D,{VBtn:$.a,VCard:T.a,VCardActions:P.a,VCardText:P.b,VCardTitle:P.c,VDataTable:x.a,VDialog:U.a,VDivider:y.a,VFlex:R.a,VForm:K.a,VIcon:a.a,VLayout:r.a,VSpacer:i.a,VTextField:l.a,VToolbar:h.a,VToolbarTitle:V.a})}}]);
