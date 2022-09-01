(window.webpackJsonp=window.webpackJsonp||[]).push([[99,71],{599:function(M,P,s){var u=s(376),p=s(47);M.exports=function(_,E,D){return D.get&&u(D.get,E,{getter:!0}),D.set&&u(D.set,E,{setter:!0}),p.f(_,E,D)}},616:function(M,P,s){"use strict";var u=s(284),p=s.n(u),_=s(285);P.a=Object(_.a)("layout")},620:function(M,P,s){"use strict";var u=s(284),p=s.n(u),_=s(285);P.a=Object(_.a)("flex")},624:function(M,P,s){"use strict";var u=s(2),p=s(34),_=s.n(p),E=s(51),D=s.n(E),y=s(288),O=s.n(y),B=s(10),R=s.n(B),j=s(4),I=s.n(j),C=s(9),x=s.n(C),L=s(58),h=s.n(L),e=s(78),i=s.n(e),l=s(8),v=s.n(l),$=s(7),T=s.n($),A=s(12),V=s.n(A),U=s(13),b=s.n(U),g=s(5),t=s(99),a=s(118);function c(o,n){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(o);n&&(d=d.filter(function(f){return Object.getOwnPropertyDescriptor(o,f).enumerable})),r.push.apply(r,d)}return r}function m(o){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(d){Object(u.a)(o,d,r[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(d){Object.defineProperty(o,d,Object.getOwnPropertyDescriptor(r,d))})}return o}P.a=Object(g.a)(t.a,Object(a.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(n){var r=Object.values(n).includes(!0);this.$emit("input",!r)},deep:!0,immediate:!0}},methods:{watchInput:function(n){var r=this,d=function(W){return W.$watch("hasError",function(S){r.$set(r.errorBag,W._uid,S)},{immediate:!0})},f={_uid:n._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?f.shouldValidate=n.$watch("shouldValidate",function(K){!K||r.errorBag.hasOwnProperty(n._uid)||(f.valid=d(n))}):f.valid=d(n),f},validate:function(){return this.inputs.filter(function(n){return!n.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(n){return n.reset()}),this.resetErrorBag()},resetErrorBag:function(){var n=this;this.lazyValidation&&setTimeout(function(){n.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(n){return n.resetValidation()}),this.resetErrorBag()},register:function(n){this.inputs.push(n),this.watchers.push(this.watchInput(n))},unregister:function(n){var r=this.inputs.find(function(f){return f._uid===n._uid});if(!!r){var d=this.watchers.find(function(f){return f._uid===r._uid});d&&(d.valid(),d.shouldValidate()),this.watchers=this.watchers.filter(function(f){return f._uid!==r._uid}),this.inputs=this.inputs.filter(function(f){return f._uid!==r._uid}),this.$delete(this.errorBag,r._uid)}}},render:function(n){var r=this;return n("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(f){return r.$emit("submit",f)}}},this.$slots.default)}})},659:function(M,P,s){"use strict";s.r(P);var u=s(165),p=s(249),_=s(88),E=s(594),D=s(247),y=s(589),O=function(){var e=this,i=e._self._c;return i(E.a,{attrs:{persistent:"","no-click-animation":"",scrollable:"","max-width":"1000px",transition:"dialog-bottom-transition"},model:{value:e.dialogPermission,callback:function(v){e.dialogPermission=v},expression:"dialogPermission"}},[i(p.a,{attrs:{loading:e.loadingPermission}},[i(_.c,[i("span",{staticClass:"subtitle-2"},[e._v(`
        `+e._s(e.dialogTitle)+`
      `)]),e._v(" "),i(y.a),e._v(" "),i(u.a,{attrs:{color:"red darken-1",dark:"",icon:"",small:""},on:{click:e.closeDialogPermission}},[i(D.a,[e._v("mdi-close-circle")])],1)],1),e._v(" "),i(_.b,[i("div",[i("LazyMasterPermissionList",{ref:"childDetails"})],1)]),e._v(" "),i(_.a,[e.canAddData?i(u.a,{staticClass:"white--text",attrs:{small:"",color:"orange darken-1"},on:{click:function(v){return e.$refs.childDetails.addLine()}}},[e._v(`
        Add Line
      `)]):e._e(),e._v(" "),i(y.a),e._v(" "),e.canAddData?i(u.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:e.loadingPermission},on:{click:function(v){return e.saveRolePermission()}}},[e._v(`
        Save
      `)]):e._e()],1)],1)],1)},B=[],R=s(4),j={name:"DialogPermission",data:function(){return{loadingPermission:!1,dialogPermission:!1,dialogTitle:"",role:"",userRole:[],form:{},canAddData:!1,type:""}},mounted:function(){this.getPermissionList()},methods:{getPermissionList:function(){var e=this;this.$axios.get("/api/master/permissions").then(function(i){e.$auth.$storage.setState("permission_list",i.data.simple)})},openDialogPermission:function(e,i){this.dialogTitle=i,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},e),this.canAddData=!0,this.getPermissionUser(e),this.type="user"},getPermissionUser:function(e){var i=this;this.userRole=null,this.$axios.get("/api/master/user/permission",{params:{form:e}}).then(function(l){i.$refs.childDetails.setDataToDetails(l.data.data)}).finally(function(l){i.loadingPermission=!1})},closeDialogPermission:function(){this.dialogPermission=!1,this.userRole=[],this.canAddData=!1},openRolePermissions:function(e,i,l){var v=this,$=this;this.type=l,this.dialogTitle=i,this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},e);var T="";l==="user"?T="/api/master/user/roles":(this.canAddData=!0,T="/api/master/permission-role"),this.$axios.get(T,{params:{form:this.form}}).then(function(A){$.$refs.childDetails.setDataToDetails(A.data.data),v.loadingPermission=!1}).finally(function(A){v.loadingPermission=!1})},changeTab:function(e){var i=this;this.loadingPermission=!0,this.$axios.post("/api/master/permission-role",{form:e}).then(function(l){i.$refs.childDetails.setDataToDetails(l.data.data)}).finally(function(l){i.loadingPermission=!1})},getRolePermissionUser:function(e){var i=this;this.$axios.post("/api/master/user/role-permission",{item:e}).then(function(l){i.$refs.childDetails.setDataToDetails(l.data.data)}).finally(function(l){i.loadingPermission=!1})},getPermissionRole:function(e){var i=this;this.$axios.post("/api/master/permission-role",{form:this.form}).then(function(l){i.$refs.childDetails.setDataToDetails(l.data.data)}).finally(function(l){i.loadingPermission=!1})},saveRolePermission:function(){var e=this;this.loadingPermission=!0;var i=this.$refs.childDetails.getAddData(),l="";this.type==="user"?l="/api/master/user/permission":l="/api/master/permission-role",this.$axios.post(l,{details:i,form:this.form}).then(function(v){e.$swal({icon:"success",title:"Success",text:v.data.message}),e.type==="user"?e.getPermissionUser(e.form):e.getPermissionRole(e.form)}).catch(function(v){e.$swal({icon:"error",title:"Error",text:v.response.data.message})}).finally(function(v){e.loadingPermission=!1})}}},I=j,C=s(50),x=Object(C.a)(I,O,B,!1,null,null,null),L=P.default=x.exports},773:function(M,P,s){"use strict";s.r(P);var u=s(165),p=s(249),_=s(88),E=s(908),D=s(594),y=s(575),O=s(620),B=s(624),R=s(247),j=s(616),I=s(589),C=s(573),x=s(72),L=s(121),h=s(27),e=s(7),i=s(46),l=function(){var t=this,a=t._self._c;return a(j.a,[a(O.a,{attrs:{sm12:"",md12:""}},[a("div",{staticClass:"mt-0"},[a(E.a,{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(m){t.options=m}},scopedSlots:t._u([{key:"top",fn:function(){return[a(x.a,{attrs:{flat:"",color:"white",dense:""}},[a(L.a,{staticClass:"hidden-xs-only"},[t._v("Master Roles")]),t._v(" "),a(y.a,{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),a(I.a),t._v(" "),a(u.a,{attrs:{icon:"",color:"green",dark:""},on:{click:function(o){return t.newData()}}},[a(R.a,[t._v("mdi-plus-circle")])],1),t._v(" "),a(u.a,{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[a(R.a,[t._v("mdi-refresh")])],1)],1)]},proxy:!0},{key:"item.ACTIONS",fn:function(m){var o=m.item;return[a(R.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(r){return t.editItem(o)}}},[t._v(`
            mdi-pencil-circle
          `)]),t._v(" "),a(R.a,{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(r){return t.$refs.dialogPermission.openRolePermissions(o,"Role Permissions","role")}}},[t._v(`
            mdi-gate
          `)])]}}],null,!0)})],1)]),t._v(" "),a(D.a,{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(m){t.dialog=m},expression:"dialog"}},[a(p.a,[a(_.c,[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),a(_.b,[a(B.a,[a(j.a,{attrs:{wrap:""}},[t.message?a(O.a,{attrs:{xs12:""}},[a("div",{staticClass:"red darken-2 text-xs-center"},[a("span",{staticClass:"white--text"},[t._v(t._s(t.message))])])]):t._e(),t._v(" "),a(O.a,{staticClass:"d-flex",attrs:{md12:""}},[a(j.a,{attrs:{wrap:""}},[a(O.a,{staticClass:"pa-2",attrs:{md12:""}},[a(C.a,{attrs:{label:"Role Name",placeholder:"Role Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name,callback:function(m){t.$set(t.form,"name",m)},expression:"form.name"}})],1),t._v(" "),a(O.a,{staticClass:"pa-2",attrs:{md12:""}},[a(C.a,{attrs:{label:"Description",placeholder:"Description",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.description,callback:function(m){t.$set(t.form,"description",m)},expression:"form.description"}})],1)],1)],1)],1)],1)],1),t._v(" "),a(_.a,[a(I.a),t._v(" "),a(u.a,{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(m){t.dialog=!1}}},[t._v(`
          Close
        `)]),t._v(" "),a(u.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:t.submitLoad},on:{click:function(m){return t.save()}}},[t._v(`
          Save
        `)])],1)],1)],1),t._v(" "),a("MasterDialogPermission",{ref:"dialogPermission"})],1)},v=[],$=s(58),T={name:"MasterRole",layout:"dashboard",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,statusProcessing:"insert",dialog:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,loadingPermission:!0,allData:[],department:{},form:{id:null,name:null,description:null},defaultItem:{id:null,name:null,description:null},options:{},optionDivision:{},headers:[{text:"Role Name",value:"name"},{text:"Description",value:"description"},{text:"Guard",value:"guard_name"},{text:"Action",value:"ACTIONS",align:"center"}]}},head:function(){return{title:"Master Roles"}},computed:{formTitle:function(){return this.editedIndex===-1?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this;this.loading=!0;var a=this;this.$axios.get("/api/master/roles",{params:{options:a.options}}).then(function(c){t.loading=!1,t.allData=c.data.data.rows,t.totalData=c.data.data.total}).catch(function(c){t.loading=!1,t.$swal({type:"error",title:"Error",text:c.response.data.message})})},newData:function(){this.dialog=!0,this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem),this.message=!1},editItem:function(t){this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},t),this.statusProcessing="update",this.dialog=!0,this.insert=!1},close:function(){var t=this;this.dialog=!1,this.statusProcessing="insert",setTimeout(function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,c=this,m=this.form,o=this.statusProcessing,n={form:m,status:o};o==="insert"?(this.store("post","/api/master/roles",n,"insert",t),c.submitLoad=!1):o==="update"&&(this.store("put","/api/master/roles/"+this.form.id,n,"update",t),c.submitLoad=!1)},store:function(t,a,c,m){var o=this,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",r=this;r.submitLoad=!0,this.$axios({method:t,url:a,data:c}).then(function(d){d.data.status==="Error"?(o.$swal({type:"error",title:"Error",text:d.data.message}),r.submitLoad=!1):(o.dialog=!1,o.message=d.data.message,setTimeout(function(){return o.message=!1},8e3),o.getDataFromApi())}).catch(function(d){o.$swal({type:"error",title:"Error",text:d.response.data.message}),r.submitLoad=!1})}}},A=T,V=s(50),U=Object(V.a)(A,l,v,!1,null,null,null),b=P.default=U.exports;installComponents(U,{MasterDialogPermission:s(659).default})}}]);