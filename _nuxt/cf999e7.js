(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{936:function(H,y,i){"use strict";i.r(y);var m=i(165),P=i(249),c=i(87),h=i(638),I=i(908),D=i(594),$=i(575),o=i(620),w=i(624),p=i(247),g=i(616),j=i(248),R=i(166),C=i(31),V=i(576),d=i(729),x=i(728),O=i(629),A=i(592),b=i(589),v=i(573),J=i(21),B=i(268),L=function(){var t=this,e=t._self._c;return e(g.a,[e(o.a,{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e(A.a,{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{type:"table"}}),t._v(" "),e(I.a,{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"item-key":"menu_name","mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"fixed-header":"","show-select":"",height:"70vh","footer-props":{"items-per-page-options":[20,50,100,-1]},dense:""},on:{"update:options":function(a){t.options=a}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v("Permissions")])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,filter:!1,title:"Master Permissions","show-new-data":"","new-data-text":"New Permission","show-back-link":"","show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(a){var r=a.item;return[e(m.a,{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(l){return t.actions(t.itemAction,r)}}},[t._v(`
            `+t._s(t.itemText)+`
          `)]),t._v(" "),e(V.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(l){var u=l.on,S=l.attrs;return[e(m.a,t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",S,!1),u),[e(p.a,[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e(j.a,t._l(t.items,function(f,l){return e(R.a,{key:l,on:{click:function(S){return t.actions(f.action,r)}}},[e(C.a,[e(C.c,[t._v(t._s(f.text))])],1)],1)}),1)],1)]}}],null,!0)})],1)]),t._v(" "),e(D.a,{attrs:{persistent:"","no-click-animation":"","max-width":"600px",transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e(P.a,[e(c.c,[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))]),t._v(" "),e(b.a),t._v(" "),e(m.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(a){t.dialog=!1}}},[e(p.a,[t._v("mdi-close-circle")])],1)],1),t._v(" "),e($.a),t._v(" "),e(c.b,[e(w.a,[e(g.a,{attrs:{wrap:""}},[e(o.a,{staticClass:"d-flex",attrs:{md12:""}},[e(g.a,{attrs:{wrap:""}},[e(o.a,{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[e(O.a,{attrs:{items:t.itemRole,chips:"","deletable-chips":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.role,callback:function(a){t.$set(t.form,"role",a)},expression:"form.role"}})],1),t._v(" "),e(o.a,{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[e(O.a,{attrs:{items:t.dataParent,label:"Parent Name",outlined:"",dense:"","hide-details":"auto",clearable:""},model:{value:t.form.parent_name,callback:function(a){t.$set(t.form,"parent_name",a)},expression:"form.parent_name"}})],1),t._v(" "),e(o.a,{staticClass:"pa-1 mt-1",attrs:{md12:""}},[e(v.a,{attrs:{label:"Name",placeholder:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.menu_name,callback:function(a){t.$set(t.form,"menu_name",a)},expression:"form.menu_name"}})],1),t._v(" "),e(o.a,{staticClass:"pa-1 mt-1",attrs:{md12:""}},[e(v.a,{attrs:{label:"Icon",placeholder:"Icon",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.icon,callback:function(a){t.$set(t.form,"icon",a)},expression:"form.icon"}})],1),t._v(" "),e(o.a,{staticClass:"pa-1 mt-1",attrs:{md12:""}},[e(v.a,{attrs:{label:"Order Line",placeholder:"Order Line",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.order_line,callback:function(a){t.$set(t.form,"order_line",a)},expression:"form.order_line"}})],1),t._v(" "),e(o.a,{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[e(x.a,{attrs:{row:"","hide-details":"auto",label:"Has Route"},model:{value:t.form.has_route,callback:function(a){t.$set(t.form,"has_route",a)},expression:"form.has_route"}},[e(d.a,{attrs:{label:"Yes",value:"Y",color:"primary"}}),t._v(" "),e(d.a,{attrs:{label:"No",value:"N",color:"primary"}})],1)],1),t._v(" "),t.form.has_route==="Y"?e(o.a,{staticClass:"pa-1",attrs:{md12:""}},[e(v.a,{attrs:{label:"Route Name",placeholder:"Route Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.route_name,callback:function(a){t.$set(t.form,"route_name",a)},expression:"form.route_name"}})],1):t._e(),t._v(" "),e(o.a,{staticClass:"pa-1",attrs:{xs12:""}},[e(x.a,{attrs:{row:"","hide-details":"auto",label:"Has Child"},model:{value:t.form.has_child,callback:function(a){t.$set(t.form,"has_child",a)},expression:"form.has_child"}},[e(d.a,{attrs:{label:"Yes",value:"Y",color:"primary"}}),t._v(" "),e(d.a,{attrs:{label:"No",value:"N",color:"primary"}})],1)],1),t._v(" "),e(o.a,{staticClass:"pa-1",attrs:{xs12:""}},[e(x.a,{attrs:{row:"","hide-details":"auto",label:"Is CRUD"},model:{value:t.form.is_crud,callback:function(a){t.$set(t.form,"is_crud",a)},expression:"form.is_crud"}},[e(d.a,{attrs:{label:"Yes",value:"Y",color:"primary"},on:{change:function(a){return t.changeCrud("Y")}}}),t._v(" "),e(d.a,{attrs:{label:"No",value:"N",color:"primary"},on:{change:function(a){return t.changeCrud("N")}}})],1)],1),t._v(" "),e(o.a,{staticClass:"pa-1 d-flex",attrs:{xs12:""}},[e("span",{staticClass:"font-weight-medium"},[t._v("Ability")])]),t._v(" "),e(o.a,{staticClass:"pa-1 d-flex",attrs:{xs12:""}},[e(h.a,{attrs:{value:t.form.index,label:"Index",color:"primary","hide-details":""},model:{value:t.form.index,callback:function(a){t.$set(t.form,"index",a)},expression:"form.index"}}),t._v(" "),e(h.a,{attrs:{value:t.form.store,label:"Store",color:"primary","hide-details":""},model:{value:t.form.store,callback:function(a){t.$set(t.form,"store",a)},expression:"form.store"}}),t._v(" "),e(h.a,{attrs:{value:t.form.edits,label:"Edits",color:"primary","hide-details":""},model:{value:t.form.edits,callback:function(a){t.$set(t.form,"edits",a)},expression:"form.edits"}}),t._v(" "),e(h.a,{attrs:{value:t.form.erase,label:"Erase",color:"primary","hide-details":""},model:{value:t.form.erase,callback:function(a){t.$set(t.form,"erase",a)},expression:"form.erase"}})],1)],1)],1)],1)],1)],1),t._v(" "),e($.a),t._v(" "),e(c.a,[e(b.a),t._v(" "),e(m.a,{attrs:{color:"primary",dark:"",small:"",loading:t.submitLoad},on:{click:function(a){return t.save()}}},[t._v(`
          Save
        `)])],1)],1)],1),t._v(" "),e(D.a,{attrs:{persistent:"","max-width":"1000px"},model:{value:t.dialogPermission,callback:function(a){t.dialogPermission=a},expression:"dialogPermission"}},[e(P.a,{attrs:{loading:t.loadingPermission}},[e(c.c,[e("span",{staticClass:"font-weight-medium"},[t._v("Role Permission")])]),t._v(" "),e(c.b,[e("div",{staticClass:"scroll-container"},[e("LazyMasterPermissionList",{ref:"childDetails"})],1)]),t._v(" "),e(c.a,[e(m.a,{staticClass:"white--text",attrs:{small:"",color:"blue darken-1"},on:{click:function(a){return t.$refs.childDetails.addLine()}}},[e(p.a,{attrs:{small:""}},[t._v(" mdi-plus")])],1),t._v(" "),e(b.a),t._v(" "),e(m.a,{attrs:{color:"red darken-1",dark:"",small:""},on:{click:function(a){t.dialogPermission=!1}}},[t._v(`
          close
        `)]),t._v(" "),e(m.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingPermission},on:{click:function(a){return t.saveRolePermission()}}},[t._v(`
          Save
        `)])],1)],1)],1)],1)},T=[],U=i(8),G=i(7),K=i(10),W=i(12),Q=i(9),X=i(13),Y=i(2),Z=i(58),_=i(4),q=i(27);function k(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),e.push.apply(e,s)}return e}function N(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?k(Object(e),!0).forEach(function(s){Object(Y.a)(n,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(e,s))})}return n}var F={name:"MasterPermission",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,statusProcessing:"insert",dialog:!1,dialogPermission:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",loadingPermission:!0,allData:[],dataParent:[],itemApps:[],itemRole:[],department:{},form:{id:null,is_crud:"N",order_line:null,has_route:"N",has_child:"N",route_name:"N",icon:null,menu_name:null,parent_name:null,app_name:null,name:null,old_name:null,index:"Y",store:"",edits:"",erase:"",role:[]},defaultItem:{id:null,is_crud:"N",order_line:null,has_route:"N",has_child:"N",route_name:"N",icon:null,menu_name:null,parent_name:null,app_name:null,name:null,old_name:null,index:"Y",store:"",edits:"",erase:"",role:[]},options:{},headers:[{text:"Name",value:"menu_name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Parent Name",value:"parent_name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Route",value:"route_name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Has Child",value:"has_child"},{text:"Is CRUD",value:"is_crud"},{text:"Order Line",value:"order_line"},{text:"Action",value:"ACTIONS",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}},head:function(){return{title:"Master Permissions"}},computed:{formTitle:function(){return this.editedIndex===-1?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi(),this.getRole(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{getRole:function(){var t=this;this.$axios.get("/api/master/roles").then(function(e){t.itemRole=e.data.simple})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,s={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,type:this.typeDocument};this.$axios.get("/api/master/permissions",{params:N(N({},e.options),s)}).then(function(a){t.loading=!1,t.allData=a.data.data,t.totalData=a.data.total,t.dataParent=a.data.parent}).catch(function(a){t.loading=!1,t.$swal({type:"error",title:"Error",text:a.response.data.message})})},newData:function(){this.dialog=!0,this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem),this.message=!1},actions:function(t,e){t==="edit"?this.editItem(e):this.deleteItem(e)},deleteItem:function(t){var e=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then(function(s){e.getDataFromApi(),e.$nuxt.$emit("getMenu","nice payload")})},editItem:function(t){var e=this;this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},t),this.statusProcessing="update",this.$axios.get("/api/master/permissions/"+this.form.parent_id,{params:{menu_name:this.form.menu_name}}).then(function(s){var a=Object.assign({},s.data.data);a.old_name=s.data.data.menu_name,a.role=JSON.parse(s.data.data.role_name),setTimeout(function(){return e.form=Object.assign({},a)},150)}),this.dialog=!0,this.insert=!1},openDialogPermission:function(t){this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t),this.getPermissionRole(t)},getPermissionRole:function(t){var e=this;this.$axios.get("/api/master/permission-role",{params:{role:t.name}}).then(function(s){e.$refs.childDetails.setDataToDetails(s.data.data.rows)}).finally(function(s){e.loadingPermission=!1})},saveRolePermission:function(){var t=this;this.loadingPermission=!0;var e=this.$refs.childDetails.getAddData();this.$axios.post("/api/master/permission-role",{details:e,role:this.form.name}).then(function(s){t.$swal({icon:"success",title:"Success",text:s.data.message}),t.getPermissionRole(t.form)}).catch(function(s){t.$swal({type:"error",title:"Error",text:s.response.data.message})}).finally(function(s){t.loadingPermission=!1})},close:function(){var t=this;this.dialog=!1,this.statusProcessing="insert",setTimeout(function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=this.form,a=this.statusProcessing;a==="insert"?this.store("post","/api/master/permissions",s,"insert",t):a==="update"&&this.store("put","/api/master/permissions/"+this.form.parent_id,s,"update",t)},store:function(t,e,s,a){var r=this,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",l=this;l.submitLoad=!0,this.$axios({method:t,url:e,data:s}).then(function(u){r.dialog=!1,r.submitLoad=!1,r.message=u.data.message,setTimeout(function(){return r.message=!1},8e3),r.$nuxt.$emit("getMenu","nice payload"),r.getDataFromApi()}).catch(function(u){r.$swal({type:"error",title:"Error",text:u.response.data.message}),l.submitLoad=!1})},changeCrud:function(t){t==="Y"?(this.form.index="Y",this.form.store="Y",this.form.edits="Y",this.form.erase="Y"):(this.form.index="",this.form.store="",this.form.edits="",this.form.erase="")}}},E=F,M=i(50),z=Object(M.a)(E,L,T,!1,null,null,null),tt=y.default=z.exports}}]);