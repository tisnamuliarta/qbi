(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{937:function(H,d,i){"use strict";i.r(d);var J=i(21),G=i(268),g=function(){var t=this,e=t._self._c;return e("v-layout",[e("v-flex",{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"menu_name","mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"fixed-header":"","show-select":"",height:"70vh","footer-props":{"items-per-page-options":[20,50,100,-1]},dense:""},on:{"update:options":function(a){t.options=a}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v("Permissions")])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,filter:!1,title:"Master Permissions","show-new-data":"","new-data-text":"New Permission","show-back-link":"","show-batch-action":""},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(a){var n=a.item;return[e("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(r){return t.actions(t.itemAction,n)}}},[t._v(`
              `+t._s(t.itemText)+`
            `)]),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,p=r.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",p,!1),l),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.items,function(c,r){return e("v-list-item",{key:r,on:{click:function(p){return t.actions(c.action,n)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(c.text))])],1)],1)}),1)],1)]}}],null,!0)})],1)]),t._v(" "),e("v-dialog",{attrs:{persistent:"","no-click-animation":"","max-width":"600px",transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(a){t.dialog=!1}}},[e("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",[e("v-form",[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[e("v-select",{attrs:{items:t.itemRole,chips:"","deletable-chips":"","small-chips":"",label:"Role",multiple:"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.role,callback:function(a){t.$set(t.form,"role",a)},expression:"form.role"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[e("v-select",{attrs:{items:t.dataParent,label:"Parent Name",outlined:"",dense:"","hide-details":"auto",clearable:""},model:{value:t.form.parent_name,callback:function(a){t.$set(t.form,"parent_name",a)},expression:"form.parent_name"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-1 mt-1",attrs:{md12:""}},[e("v-text-field",{attrs:{label:"Name",placeholder:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.menu_name,callback:function(a){t.$set(t.form,"menu_name",a)},expression:"form.menu_name"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-1 mt-1",attrs:{md12:""}},[e("v-text-field",{attrs:{label:"Icon",placeholder:"Icon",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.icon,callback:function(a){t.$set(t.form,"icon",a)},expression:"form.icon"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-1 mt-1",attrs:{md12:""}},[e("v-text-field",{attrs:{label:"Order Line",placeholder:"Order Line",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.order_line,callback:function(a){t.$set(t.form,"order_line",a)},expression:"form.order_line"}})],1),t._v(" "),e("v-flex",{staticClass:"pa-1 mt-1",attrs:{xs12:""}},[e("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Has Route"},model:{value:t.form.has_route,callback:function(a){t.$set(t.form,"has_route",a)},expression:"form.has_route"}},[e("v-radio",{attrs:{label:"Yes",value:"Y",color:"primary"}}),t._v(" "),e("v-radio",{attrs:{label:"No",value:"N",color:"primary"}})],1)],1),t._v(" "),t.form.has_route==="Y"?e("v-flex",{staticClass:"pa-1",attrs:{md12:""}},[e("v-text-field",{attrs:{label:"Route Name",placeholder:"Route Name",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.route_name,callback:function(a){t.$set(t.form,"route_name",a)},expression:"form.route_name"}})],1):t._e(),t._v(" "),e("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[e("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Has Child"},model:{value:t.form.has_child,callback:function(a){t.$set(t.form,"has_child",a)},expression:"form.has_child"}},[e("v-radio",{attrs:{label:"Yes",value:"Y",color:"primary"}}),t._v(" "),e("v-radio",{attrs:{label:"No",value:"N",color:"primary"}})],1)],1),t._v(" "),e("v-flex",{staticClass:"pa-1",attrs:{xs12:""}},[e("v-radio-group",{attrs:{row:"","hide-details":"auto",label:"Is CRUD"},model:{value:t.form.is_crud,callback:function(a){t.$set(t.form,"is_crud",a)},expression:"form.is_crud"}},[e("v-radio",{attrs:{label:"Yes",value:"Y",color:"primary"},on:{change:function(a){return t.changeCrud("Y")}}}),t._v(" "),e("v-radio",{attrs:{label:"No",value:"N",color:"primary"},on:{change:function(a){return t.changeCrud("N")}}})],1)],1),t._v(" "),e("v-flex",{staticClass:"pa-1 d-flex",attrs:{xs12:""}},[e("span",{staticClass:"font-weight-medium"},[t._v("Ability")])]),t._v(" "),e("v-flex",{staticClass:"pa-1 d-flex",attrs:{xs12:""}},[e("v-checkbox",{attrs:{value:t.form.index,label:"Index",color:"primary","hide-details":""},model:{value:t.form.index,callback:function(a){t.$set(t.form,"index",a)},expression:"form.index"}}),t._v(" "),e("v-checkbox",{attrs:{value:t.form.store,label:"Store",color:"primary","hide-details":""},model:{value:t.form.store,callback:function(a){t.$set(t.form,"store",a)},expression:"form.store"}}),t._v(" "),e("v-checkbox",{attrs:{value:t.form.edits,label:"Edits",color:"primary","hide-details":""},model:{value:t.form.edits,callback:function(a){t.$set(t.form,"edits",a)},expression:"form.edits"}}),t._v(" "),e("v-checkbox",{attrs:{value:t.form.erase,label:"Erase",color:"primary","hide-details":""},model:{value:t.form.erase,callback:function(a){t.$set(t.form,"erase",a)},expression:"form.erase"}})],1)],1)],1)],1)],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"primary",dark:"",small:"",loading:t.submitLoad},on:{click:function(a){return t.save()}}},[t._v(`
            Save
          `)])],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:t.dialogPermission,callback:function(a){t.dialogPermission=a},expression:"dialogPermission"}},[e("v-card",{attrs:{loading:t.loadingPermission}},[e("v-card-title",[e("span",{staticClass:"font-weight-medium"},[t._v("Role Permission")])]),t._v(" "),e("v-card-text",[e("div",{staticClass:"scroll-container"},[e("LazyMasterPermissionList",{ref:"childDetails"})],1)]),t._v(" "),e("v-card-actions",[e("v-btn",{staticClass:"white--text",attrs:{small:"",color:"blue darken-1"},on:{click:function(a){return t.$refs.childDetails.addLine()}}},[e("v-icon",{attrs:{small:""}},[t._v(" mdi-plus")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:function(a){t.dialogPermission=!1}}},[t._v(`
            close
          `)]),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingPermission},on:{click:function(a){return t.saveRolePermission()}}},[t._v(`
            Save
          `)])],1)],1)],1)],1)},x=[],U=i(8),K=i(7),W=i(9),Q=i(12),X=i(10),Z=i(13),b=i(2),_=i(59),q=i(4),tt=i(27);function u(o,t){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable})),e.push.apply(e,s)}return e}function v(o){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?u(Object(e),!0).forEach(function(s){Object(b.a)(o,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(e,s))})}return o}var y={name:"MasterPermission",data:function(){return{totalData:0,editedIndex:-1,loadNewBtn:!1,submitLoad:!1,dialogWindow:!1,statusProcessing:"insert",dialog:!1,dialogPermission:!1,message:!1,loading:!0,insertDivision:!0,insert:!0,documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",loadingPermission:!0,allData:[],dataParent:[],itemApps:[],itemRole:[],department:{},form:{id:null,is_crud:"N",order_line:null,has_route:"N",has_child:"N",route_name:"N",icon:null,menu_name:null,parent_name:null,app_name:null,name:null,old_name:null,index:"Y",store:"",edits:"",erase:"",role:[]},defaultItem:{id:null,is_crud:"N",order_line:null,has_route:"N",has_child:"N",route_name:"N",icon:null,menu_name:null,parent_name:null,app_name:null,name:null,old_name:null,index:"Y",store:"",edits:"",erase:"",role:[]},options:{},headers:[{text:"Name",value:"menu_name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Parent Name",value:"parent_name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Route",value:"route_name",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Has Child",value:"has_child"},{text:"Is CRUD",value:"is_crud"},{text:"Order Line",value:"order_line"},{text:"Action",value:"ACTIONS",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}},head:function(){return{title:"Master Permissions"}},computed:{formTitle:function(){return this.editedIndex===-1?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.getDataFromApi(),this.getRole(),this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{getRole:function(){var t=this;this.$axios.get("/api/master/roles").then(function(e){t.itemRole=e.data.simple})},emitData:function(t){this.documentStatus=t.documentStatus,this.itemSearch=t.itemSearch,this.searchStatus=t.searchStatus,this.searchItem=t.searchItem,this.search=t.search,this.filters=t.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,s={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,type:this.typeDocument};this.$axios.get("/api/master/permissions",{params:v(v({},e.options),s)}).then(function(a){t.loading=!1,t.allData=a.data.data,t.totalData=a.data.total,t.dataParent=a.data.parent}).catch(function(a){t.loading=!1,t.$swal({type:"error",title:"Error",text:a.response.data.message})})},newData:function(){this.dialog=!0,this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem),this.message=!1},actions:function(t,e){t==="edit"?this.editItem(e):this.deleteItem(e)},deleteItem:function(t){var e=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then(function(s){e.getDataFromApi(),e.$nuxt.$emit("getMenu","nice payload")})},editItem:function(t){var e=this;this.editedIndex=this.allData.indexOf(t),this.form=Object.assign({},t),this.statusProcessing="update",this.$axios.get("/api/master/permissions/"+this.form.parent_id,{params:{menu_name:this.form.menu_name}}).then(function(s){var a=Object.assign({},s.data.data);a.old_name=s.data.data.menu_name,a.role=JSON.parse(s.data.data.role_name),setTimeout(function(){return e.form=Object.assign({},a)},150)}),this.dialog=!0,this.insert=!1},openDialogPermission:function(t){this.dialogPermission=!0,this.loadingPermission=!0,this.form=Object.assign({},t),this.getPermissionRole(t)},getPermissionRole:function(t){var e=this;this.$axios.get("/api/master/permission-role",{params:{role:t.name}}).then(function(s){e.$refs.childDetails.setDataToDetails(s.data.data.rows)}).finally(function(s){e.loadingPermission=!1})},saveRolePermission:function(){var t=this;this.loadingPermission=!0;var e=this.$refs.childDetails.getAddData();this.$axios.post("/api/master/permission-role",{details:e,role:this.form.name}).then(function(s){t.$swal({icon:"success",title:"Success",text:s.data.message}),t.getPermissionRole(t.form)}).catch(function(s){t.$swal({type:"error",title:"Error",text:s.response.data.message})}).finally(function(s){t.loadingPermission=!1})},close:function(){var t=this;this.dialog=!1,this.statusProcessing="insert",setTimeout(function(){t.form=Object.assign({},t.defaultItem),t.editedIndex=-1},300)},save:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=this.form,a=this.statusProcessing;a==="insert"?this.store("post","/api/master/permissions",s,"insert",t):a==="update"&&this.store("put","/api/master/permissions/"+this.form.parent_id,s,"update",t)},store:function(t,e,s,a){var n=this,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",r=this;r.submitLoad=!0,this.$axios({method:t,url:e,data:s}).then(function(l){n.dialog=!1,n.submitLoad=!1,n.message=l.data.message,setTimeout(function(){return n.message=!1},8e3),n.$nuxt.$emit("getMenu","nice payload"),n.getDataFromApi()}).catch(function(l){n.$swal({type:"error",title:"Error",text:l.response.data.message}),r.submitLoad=!1})},changeCrud:function(t){t==="Y"?(this.form.index="Y",this.form.store="Y",this.form.edits="Y",this.form.erase="Y"):(this.form.index="",this.form.store="",this.form.edits="",this.form.erase="")}}},D=y,P=i(50),C=i(51),V=i.n(C),$=i(164),k=i(248),m=i(88),O=i(639),I=i(909),S=i(595),N=i(576),R=i(621),j=i(625),L=i(247),T=i(617),w=i(249),A=i(165),f=i(35),F=i(577),Y=i(729),E=i(730),M=i(630),z=i(593),B=i(574),h=Object(P.a)(D,g,x,!1,null,null,null),et=d.default=h.exports;V()(h,{VBtn:$.a,VCard:k.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCheckbox:O.a,VDataTable:I.a,VDialog:S.a,VDivider:N.a,VFlex:R.a,VForm:j.a,VIcon:L.a,VLayout:T.a,VList:w.a,VListItem:A.a,VListItemContent:f.a,VListItemTitle:f.c,VMenu:F.a,VRadio:Y.a,VRadioGroup:E.a,VSelect:M.a,VSpacer:z.a,VTextField:B.a})}}]);