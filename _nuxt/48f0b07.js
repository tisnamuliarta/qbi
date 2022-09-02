(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{108:function(r,i,e){"use strict";var n=e(583),a=function(){var f=this,v=f._self._c;return v(n.a,{attrs:{dark:""}},[f.error.statusCode===404?v("h1",[f._v(`
    `+f._s(f.pageNotFound)+`
  `)]):v("h1",[f._v(`
    `+f._s(f.otherError)+`
  `)]),f._v(" "),v("NuxtLink",{attrs:{to:"/"}},[f._v(" Home page ")])],1)},l=[],m={layout:"auth",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){var f=this.error.statusCode===404?this.pageNotFound:this.otherError;return{title:f}}},x=m,S=e(440),C=e(50),y=Object(C.a)(x,a,l,!1,null,"16c037b0",null),O=i.a=y.exports},259:function(r,i,e){"use strict";var n={name:"Helper",mapping:function(l){switch(l){case"SQ":return"Sales Quotations";case"SO":return"Sales Order";case"SD":return"Sales Delivery";case"SI":return"A/R Invoice";case"SP":return"Incoming Payment";case"SR":return"Sales Return";case"PQ":return"Purchase Quotations";case"PO":return"Purchase Order";case"PR":return"Goods Receipt";case"PI":return"A/P Invoice";case"PP":return"Outgoing Payment";case"PN":return"Goods Return"}},mappingAction:function(l){switch(l){case"SQ":return"/dashboard/sales/quote";case"SO":return"/dashboard/sales/order";case"SD":return"/dashboard/sales/delivery";case"SI":return"/dashboard/sales/invoice";case"SP":return"/dashboard/sales/payment";case"SR":return"/dashboard/sales/return";case"PQ":return"/dashboard/purchase/quote";case"PO":return"/dashboard/purchase/order";case"PR":return"/dashboard/purchase/receipt";case"PI":return"/dashboard/purchase/invoice";case"PP":return"/dashboard/purchase/payment";case"PN":return"/dashboard/purchase/return"}},itemAction:function(l){switch(l){case"SQ":return[{title:"Create Invoice",action:"SI",icon:"mdi-printer"},{title:"Create Order",action:"SO",icon:"mdi-email"},{title:"Clone",action:"SQ",icon:"mdi-email"}];case"SO":return"sales order";case"SD":return"sales delivery";case"SI":return"A/R invoice";case"SP":return"incoming payment";case"SR":return"sales return";case"PQ":return"purchase quotations";case"PO":return"purchase order";case"PR":return"goods receipt";case"PI":return"A/P invoice";case"PP":return"outgoing payment";case"PN":return"goods return"}}};i.a=function(a,l){var m=a.app;l("helper",n)}},260:function(r,i,e){"use strict";var n=e(21),a=e.n(n),l=e(64),m=e.n(l),x=e(290),S=e.n(x),C=e(4),y=e.n(C),O=e(69),P=e.n(O);i.a=function(f,v){var E=f.app,_=E.i18n;v("formatter",{name:"Formatter",formatPrice:function(h){var D=(h/1).toFixed(2).replace(".",",");return D.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},formatCheckBox:function(h){return h==="1"?"On":h==="0"?"Off":h?"On":"Off"},transactionList:function(){return["CS","IN","CN","IN","RC","CP","BL","PY","DN","JN","CE"]},statusColor:function(h){switch(h){case"open":case"planned":return"blue darken-3";case"partial":case"released":return"orange";case"paid":return"green";case"closed":return"green";case"overdue":return"red";case"canceled":case"cancel":return"red"}},appendAction:function(h){switch(h){case"PQ":return[{text:"Copy to "+_.t("Purchase Order"),action:"PO",type:"document"},{text:"Copy to "+_.t("Goods Receipt PO"),action:"GR",type:"document"},{text:"Copy to "+_.t("A/P Invoice"),action:"BL",type:"transaction"}];case"PO":return[{text:"Copy to "+_.t("Goods Receipt PO"),action:"GR",type:"document"},{text:"Copy to "+_.t("A/P Invoice"),action:"BL",type:"transaction"}];case"GR":return[{text:"Copy to "+_.t("A/P Invoice"),action:"BL",type:"transaction"},{text:"Copy to "+_.t("Goods Return"),action:"BL",type:"document"}];case"BL":return[{text:"Copy to "+_.t("A/P Credit Memo"),action:"DN",type:"transaction"}];case"PY":return[{text:"Copy to "+_.t("A/P Credit Memo"),action:"DN",type:"transaction"}];case"DN":return[{text:"Copy to "+_.t("Goods Return"),action:"GN",type:"document"}];case"SQ":return[{text:"Copy to "+_.t("Sales Order"),action:"SO",type:"document"},{text:"Copy to "+_.t("Sales Delivery"),action:"SD",type:"document"},{text:"Copy to "+_.t("A/R Invoice"),action:"IN",type:"transaction"}];case"SO":return[{text:"Copy to "+_.t("Sales Delivery"),action:"SD",type:"document"},{text:"Copy to "+_.t("A/R Invoice"),action:"IN",type:"transaction"}];case"SD":return[{text:"Copy to "+_.t("A/R Invoice"),action:"IN",type:"transaction"},{text:"Copy to "+_.t("Sales Return"),action:"SR",type:"document"}];case"IN":return[{text:"Copy to "+_.t("A/R Credit Memo"),action:"CN",type:"transaction"}];case"RC":return[{text:"Copy to "+_.t("A/R Credit Memo"),action:"CN",type:"transaction"}];case"SR":return[{text:"Copy to "+_.t("Sales Return"),action:"SR",type:"document"}];default:return[]}},mappingAction:function(h){switch(h){case"SQ":return"/app/form/sales/quote";case"SO":return"/app/form/sales/order";case"SD":return"/app/form/sales/delivery";case"IN":return"/app/form/sales/invoice";case"RC":return"/app/form/sales/payment";case"CN":return"/app/form/sales/creditmemo";case"SR":return"/app/form/sales/return";case"CS":return"/app/form/sales/cash";case"PQ":return"/app/form/purchase/quote";case"PO":return"/app/form/purchase/order";case"GR":return"/app/form/purchase/receipt";case"BL":return"/app/form/purchase/invoice";case"PY":return"/app/form/purchase/payment";case"DN":return"/app/form/purchase/creditmemo";case"GN":return"/app/form/purchase/return";case"CP":return"/app/form/purchase/cash";case"JN":return"/app/form/accounting/journal-entry";case"GI":case"PI":return"/app/form/inventory/issue";case"GE":case"PR":return"/app/form/inventory/receipt";case"PE":return"/app/form/production/order"}}})}},261:function(r,i,e){"use strict";var n=e(3),a=e(362),l=e.n(a);n.default.mixin(l.a)},262:function(r,i,e){"use strict";var n=e(3),a=e(363),l=e.n(a);n.default.use(l.a)},263:function(r,i,e){"use strict";var n=e(3),a=e(364),l=e.n(a);n.default.use(l.a,{persistent:!0}),i.a=function(m,x){x("gates",n.default.prototype.$gates)}},264:function(r,i,e){"use strict";var n=e(3),a=e(366);n.default.use(a.a)},265:function(r,i,e){"use strict";i.a=function(n){var a=n.$axios,l=n.$config,m=l.baseApi,x=l.nodeEnv;x==="dev"?a.defaults.baseURL=window.location.protocol+"//"+window.location.hostname+m:a.defaults.baseURL=window.location.protocol+"//"+window.location.host+m}},337:function(r,i,e){var n=e(441);n.__esModule&&(n=n.default),typeof n=="string"&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);var a=e(16).default,l=a("347c0386",n,!0,{sourceMap:!1})},344:function(r,i,e){var n=e(478);n.__esModule&&(n=n.default),typeof n=="string"&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);var a=e(16).default,l=a("208581bc",n,!0,{sourceMap:!1})},345:function(r,i,e){var n=e(526);n.__esModule&&(n=n.default),typeof n=="string"&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);var a=e(16).default,l=a("65d97843",n,!0,{sourceMap:!1})},346:function(r,i,e){var n=e(528);n.__esModule&&(n=n.default),typeof n=="string"&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);var a=e(16).default,l=a("c9bef03c",n,!0,{sourceMap:!1})},367:function(r,i,e){"use strict";e.r(i);var n=e(246),a=e(243),l=function(){var f=this,v=f._self._c;return v("div",[v(n.a,{attrs:{value:f.loading}},[v(a.a,{attrs:{indeterminate:"",color:"green",size:"64"}})],1)],1)},m=[],x={data:function(){return{loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}}},S=x,C=e(50),y=Object(C.a)(S,l,m,!1,null,null,null),O=i.default=y.exports},368:function(r,i,e){"use strict";var n=e(583),a=e(587),l=e(585),m=e(586),x=e(584),S=function(){var b=this,h=b._self._c;return h(n.a,{staticClass:"bg-auth"},[h(x.a,[h(l.a,{attrs:{transition:"slide-x-transition",fluid:"","fill-height":""}},[h("router-view")],1)],1),b._v(" "),h(m.a,{attrs:{color:"grey lighten-2",padless:""}},[h(a.a,{staticClass:"text-center",attrs:{cols:"12"}},[b._v(`
      Copyright \xA9 `+b._s(new Date().getFullYear())+` \u2014
      `),h("strong",[b._v(" Quickbilling ")])])],1)],1)},C=[],y={data:function(){return{}}},O=y,P=e(477),f=e(50),v=Object(f.a)(O,S,C,!1,null,"cb6bfc0e",null),E=i.a=v.exports},369:function(r,i,e){"use strict";var n=e(583),a=e(596),l=e(590),m=e(165),x=e(249),S=e(587),C=e(585),y=e(575),O=e(586),P=e(247),f=e(248),v=e(250),E=e(166),_=e(31),b=e(143),h=e(584),D=e(576),I=e(591),R=e(592),A=e(593),$=e(589),j=e(588),c=e(595),u=e(121),M=e(27),L=function(){var t=this,o=t._self._c;return o(n.a,[o(a.a,{staticClass:"v-bar--underline v-toolbar-flat",attrs:{app:"",color:t.dark?void 0:"white",flat:""},scopedSlots:t._u([t.showExtension?{key:"extension",fn:function(){return[o(c.a,{attrs:{"align-with-title":""}},[o(j.a,[t._v(" "+t._s(t.extensionText))])],1),t._v(" "),o($.a),t._v(" "),o(m.a,{attrs:{color:"primary",small:"",elevation:"0"}},[t._v("btn")])]},proxy:!0}:null],null,!0)},[o(l.a,{on:{click:function(s){return t.changeDrawer()}}}),t._v(" "),o(u.a,{staticClass:"ml-0 pl-0"},[o("span",{staticClass:"font-weight-bold",staticStyle:{cursor:"pointer"},domProps:{textContent:t._s(t.companyName)},on:{click:function(s){return t.$router.push("/")}}})]),t._v(" "),o($.a),t._v(" "),o("LazyLayoutToolBar",{ref:"toolbar",on:{openAction:t.openAction}})],1),t._v(" "),o(I.a,{staticClass:"blue-grey darken-4",attrs:{id:"nav",dark:"",app:"",temporary:t.$route.name==="dashboard-settings-setup"},model:{value:t.drawer,callback:function(s){t.drawer=s},expression:"drawer"}},[o(f.a,{attrs:{dense:"",nav:""}},[o("NuxtLink",{attrs:{to:"/"}},[o(R.a,{directives:[{name:"show",rawName:"v-show",value:t.loadImage,expression:"loadImage"}],staticClass:"mx-auto logo mb-3",attrs:{type:"avatar"}}),t._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!t.loadImage,expression:"!loadImage"}],staticClass:"mt-1 mb-3",attrs:{src:t.logo,height:"50"}}),t._v(" "),o(y.a)],1),t._v(" "),o(D.a,{attrs:{"offset-y":"",left:"","nudge-width":700},scopedSlots:t._u([{key:"activator",fn:function(s){var g=s.on;return[o(m.a,t._g({staticClass:"mb-4",attrs:{outlined:"",block:"",small:"",rounded:"",color:"primary"}},g),[o(P.a,[t._v("mdi-plus")]),t._v(`
            New
          `)],1)]}}])},[t._v(" "),o(x.a,[o("LazyFormNew",{ref:"formNew",on:{openAction:t.openAction}})],1)],1),t._v(" "),t._l(t.items,function(d){return o(v.a,{key:d.menu,attrs:{"active-class":"border","prepend-icon":d.icon,"append-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"activator",fn:function(){return[o(_.a,[o(_.c,{domProps:{textContent:t._s(d.menu)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(d.children,function(s,g){return o(E.a,{key:g,staticStyle:{"padding-left":"64px"},attrs:{link:"",to:s.route_name}},[o(_.a,[o(_.c,{domProps:{textContent:t._s(s.menu)}})],1),t._v(" "),s.icon?o(b.a,[o(P.a,{domProps:{textContent:t._s(s.icon)}})],1):t._e()],1)})],2)})],2)],1),t._v(" "),o(h.a,{staticClass:"grey lighten-4"},[o(C.a,{attrs:{fluid:""}},[o("Nuxt",{attrs:{"keep-alive":""}})],1)],1),t._v(" "),o(A.a,{attrs:{top:"",color:"primary",right:"",elevation:"24"},scopedSlots:t._u([{key:"action",fn:function(s){var g=s.attrs;return[o(m.a,t._b({attrs:{color:"pink",small:"",icon:""},on:{click:function(w){t.snackbar=!1}}},"v-btn",g,!1),[o(P.a,[t._v("mdi-close-thick")])],1)]}}]),model:{value:t.snackbar,callback:function(s){t.snackbar=s},expression:"snackbar"}},[t._v(`
    `+t._s(t.message)+`
    `)]),t._v(" "),o("LazySetupListSetting",{ref:"settingForm"}),t._v(" "),o(O.a,{attrs:{color:"grey lighten-3",padless:""}},[o(S.a,{staticClass:"text-center",attrs:{cols:"12"}},[t._v(`
      Copyright \xA9 `+t._s(new Date().getFullYear())+` \u2014
      `),o("strong",[t._v(" "+t._s(t.company.company_name)+" ")])])],1)],1)},T=[],V=e(24),U=e(73),B={name:"DefaultLayout",middleware:"auth",data:function(){return{snackbar:!1,clipped:!1,drawer:!1,fixed:!1,dark:void 0,message:"",items:[],company:[],miniVariant:!1,right:!0,logo:"",rightDrawer:!1,loadImage:!1,companyName:"",showExtension:!1,extensionText:""}},mounted:function(){this.drawer=!this.$vuetify.breakpoint.mdAndDown,this.drawer=this.$route.name==="dashboard-documents-form"?!1:this.drawer},created:function(){var t=this;this.menus(),this.rolePermission(),this.getCompany(),this.$nuxt.$on("getMenu",function(o){return t.menus(o)}),this.$nuxt.$on("getLogo",function(o){return t.getLogo(o)}),this.$nuxt.$on("getCompany",function(o){return t.getCompany(o)}),this.$nuxt.$on("snackbar",function(o){return t.openSnackbar(o)}),this.$nuxt.$on("openSetting",function(o){return t.openSetting(o)}),this.$nuxt.$on("extensionSetting",function(o){return t.extensionSetting(o)}),this.getLogo()},methods:{openSnackbar:function(t){t&&(this.snackbar=!0,this.message=t)},openSetting:function(t){this.$refs.settingForm.openDialog(t,0,null)},openAction:function(t){t.item.route?this.$router.push({path:t.item.route,query:{document:0,type:t.item.type}}):t.item.type==="function"?this[t.item.action]():this.$refs.settingForm.openDialog(t,0,null)},extensionSetting:function(t){this.showExtension=t.show,this.extensionText=t.title},changeDrawer:function(){this.drawer=!this.drawer},getLogo:function(){var t=this;this.loadImage=!0,this.$axios.get("/api/logo").then(function(o){t.logo=o.data.data.logo,t.loadImage=!1})},getCompany:function(){var t=this;this.$axios.get("/api/settings",{params:{page:"company"}}).then(function(o){t.$auth.$storage.setState("company",o.data.data.form),t.company=t.$auth.$storage.getState("company"),t.companyName=o.data.data.form.company_name})},logout:function(){var t=this;return Object(V.a)(regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeLocalStorage("app.default_name"),t.$auth.$storage.removeLocalStorage("employee"),t.$auth.$storage.removeLocalStorage("country"),localStorage.removeItem("roles"),localStorage.removeItem("permissions");case 7:case"end":return s.stop()}},o)}))()},rolePermission:function(){var t=this;this.$axios.post("/api/auth/roles").then(function(o){t.$gates.setRoles(o.data)}),this.$axios.post("/api/auth/permissions").then(function(o){t.$gates.setPermissions(o.data)})},menus:function(){var t=this,o=this.$auth.$storage.getLocalStorage("app.default_name");this.$axios.get("/api/menus",{params:{appName:o}}).then(function(d){t.items=d.data.data.menus}).catch(function(d){d.response.data.message==="Call to a member function getAllPermissions() on null"&&t.logout(),t.$swal({type:"error",title:"Error",text:d.response.data.message})})}}},k=B,W=e(525),z=e(50),K=Object(z.a)(k,L,T,!1,null,"63e1f3ee",null),F=i.a=K.exports},370:function(r,i,e){"use strict";var n=e(583),a=e(596),l=e(590),m=e(165),x=e(249),S=e(585),C=e(575),y=e(247),O=e(248),P=e(250),f=e(166),v=e(31),E=e(143),_=e(584),b=e(576),h=e(591),D=e(246),I=e(243),R=e(592),A=e(593),$=e(589),j=e(588),c=e(595),u=e(121),M=e(27),L=function(){var t=this,o=t._self._c;return o(n.a,[o(a.a,{staticClass:"v-bar--underline v-toolbar-flat",attrs:{app:"",color:t.dark?void 0:"white",flat:""},scopedSlots:t._u([t.showExtension?{key:"extension",fn:function(){return[o(c.a,{staticStyle:{"margin-left":"10px"},attrs:{"align-with-title":"",color:"black","slider-color":"green","show-arrows":"","slider-size":"4"},model:{value:t.activeExtension,callback:function(g){t.activeExtension=g},expression:"activeExtension"}},t._l(t.extensionTabs,function(s,g){return o(j.a,{key:g,on:{click:function(w){return t.$router.push(s.route)}}},[s.icon?o(y.a,{staticClass:"mr-2"},[t._v(t._s(s.icon))]):t._e(),t._v(`
          `+t._s(s.title)+`
        `)],1)}),1),t._v(" "),o($.a),t._v(" "),t.showExtensionButton?o(b.a,{attrs:{transition:"slide-y-transition","close-on-content-click":!1,"offset-y":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(g){var N=g.on,w=g.attrs;return[o(m.a,t._g(t._b({attrs:{small:"",color:"primary",elevation:"0"}},"v-btn",w,!1),N),[t._v(`
            New Transactions
            `),o(m.a,{attrs:{dark:"",small:"",icon:""}},[o(y.a,[t._v("mdi-menu-down")])],1)],1)]}}],null,!1,3070177049)},[t._v(" "),o(O.a,{attrs:{dense:""}},t._l(t.extensionMenu,function(s,g){return o(f.a,{key:g,attrs:{dense:""},on:{click:function(w){return t.$router.push({path:s.route,query:{document:0,type:s.type}})}}},[o(v.a,[o(v.c,[t._v(t._s(s.text))])],1)],1)}),1)],1):t._e()]},proxy:!0}:null],null,!0)},[o(l.a,{on:{click:function(s){return t.changeDrawer()}}}),t._v(" "),o(u.a,{staticClass:"ml-0 pl-0"},[o("span",{staticClass:"font-weight-bold hidden-sm-and-down",staticStyle:{cursor:"pointer"},domProps:{textContent:t._s(t.companyName)},on:{click:function(s){return t.$router.push("/home/business-overview")}}})]),t._v(" "),o($.a),t._v(" "),o("LazyLayoutToolBar",{ref:"toolbar",on:{openAction:t.openAction}})],1),t._v(" "),o(h.a,{staticClass:"blue-grey darken-4",attrs:{id:"nav",dark:"",app:"",temporary:t.$route.name==="dashboard-settings-setup"},model:{value:t.drawer,callback:function(s){t.drawer=s},expression:"drawer"}},[o(O.a,{attrs:{dense:"",nav:""}},[o("NuxtLink",{attrs:{to:"/home/business-overview"}},[o(R.a,{directives:[{name:"show",rawName:"v-show",value:t.loadImage,expression:"loadImage"}],staticClass:"mx-auto logo mb-3",attrs:{type:"avatar"}}),t._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!t.loadImage,expression:"!loadImage"}],staticClass:"mt-1 mb-3",attrs:{src:t.logo,height:"50"}})],1),t._v(" "),o("div",{staticClass:"text-center",staticStyle:{"margin-bottom":"10px","margin-top":"-10px"}},[o(b.a,{staticClass:"text-center",attrs:{transition:"slide-y-transition",bottom:"","offset-y":"",left:"","close-on-content-click":"","nudge-width":600},scopedSlots:t._u([{key:"activator",fn:function(s){var g=s.on;return[o(m.a,t._g({staticClass:"text-center",attrs:{rounded:"",small:"",color:"primary",elevation:"2"}},g),[t._v(`
              `+t._s(t.$t("New Transactions"))+`
            `)])]}}]),model:{value:t.menu,callback:function(s){t.menu=s},expression:"menu"}},[t._v(" "),o(x.a,{staticClass:"rounded-lg",attrs:{elevation:"18"}},[o("LazyFormNew",{ref:"formNew",on:{openAction:t.openAction}})],1)],1)],1),t._v(" "),o(C.a),t._v(" "),t._l(t.items,function(d){return o(P.a,{key:d.menu,attrs:{"active-class":"border","prepend-icon":d.icon,"append-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"activator",fn:function(){return[o(v.a,[o(v.c,{domProps:{textContent:t._s(d.menu)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(d.children,function(s,g){return o(f.a,{key:g,staticStyle:{"padding-left":"64px"},attrs:{link:"",to:s.route_name}},[o(v.a,[o(v.c,{domProps:{textContent:t._s(s.menu)}})],1),t._v(" "),s.icon?o(E.a,[o(y.a,{domProps:{textContent:t._s(s.icon)}})],1):t._e()],1)})],2)})],2)],1),t._v(" "),o(_.a,{staticClass:"grey lighten-4"},[o(D.a,{attrs:{value:t.overlay}},[o(I.a,{attrs:{indeterminate:"",size:"64"}})],1),t._v(" "),o(S.a,{attrs:{fluid:""}},[o("Nuxt",{attrs:{"keep-alive":"","keep-alive-props":{exclude:["pages/sales/quote.vue"]}}})],1)],1),t._v(" "),o(A.a,{attrs:{top:"",centered:"",color:"primary",elevation:"24"},scopedSlots:t._u([{key:"action",fn:function(s){var g=s.attrs;return[o(m.a,t._b({attrs:{color:"pink",small:"",icon:""},on:{click:function(w){t.snackbar=!1}}},"v-btn",g,!1),[o(y.a,[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar,callback:function(s){t.snackbar=s},expression:"snackbar"}},[t._v(`
    `+t._s(t.message)+`
    `)]),t._v(" "),o("v-idle",{attrs:{loop:!0,reminders:[10,15],wait:5,duration:3600},on:{idle:t.onIdle,remind:t.onRemind}})],1)},T=[],V=e(24),U=e(73),B={name:"DefaultLayout",middleware:"auth",data:function(){return{snackbar:!1,overlay:!1,clipped:!1,drawer:!1,fixed:!1,menu:!1,dark:void 0,message:"",items:[],company:[],miniVariant:!1,right:!0,logo:"",rightDrawer:!1,loadImage:!1,companyName:"",showExtension:!1,showExtensionButton:!1,extensionMenu:[],extensionTabs:"",activeExtension:0}},mounted:function(){this.drawer=!this.$vuetify.breakpoint.mdAndDown,this.drawer=this.$route.name==="dashboard-documents-form"?!1:this.drawer},created:function(){var t=this;this.menus(),this.rolePermission(),this.getCompany(),this.$nuxt.$on("getMenu",function(o){return t.menus(o)}),this.$nuxt.$on("getLogo",function(o){return t.getLogo(o)}),this.$nuxt.$on("getCompany",function(o){return t.getCompany(o)}),this.$nuxt.$on("snackbar",function(o){return t.openSnackbar(o)}),this.$nuxt.$on("showLoading",function(o){return t.showLoading(o)}),this.$nuxt.$on("hideLoading",function(o){return t.hideLoading(o)}),this.$nuxt.$on("extensionActive",function(o){return t.extensionActive(o)}),this.$nuxt.$on("extensionSetting",function(o){return t.extensionSetting(o)}),this.getLogo()},methods:{onIdle:function(){this.$swal({type:"warning",title:"Warning",text:"You have been logged out"}),this.logout()},onRemind:function(t){this.$swal({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,icon:"warning",type:"warning",title:"Warning",text:t})},openSnackbar:function(t){t&&(this.snackbar=!0,this.message=t)},openSetting:function(t){this.$refs.settingForm.openDialog(t,0,null)},showLoading:function(){this.overlay=!0},hideLoading:function(){this.overlay=!1},openAction:function(t){this.menu=!1,t.item.route?(this.overlay=!0,this.$router.push({path:t.item.route,query:{document:0}}),this.overlay=!1):t.item.type==="function"?this[t.item.action]():this.$refs.settingForm.openDialog(t,0,null)},extensionSetting:function(t){this.showExtension=t.show,this.showExtensionButton=t.showBtn,this.extensionTabs=t.tabs,this.extensionMenu=t.itemBtn},extensionActive:function(t){this.activeExtension=parseInt(t.active)},changeDrawer:function(){this.drawer=!this.drawer},getLogo:function(){var t=this;this.loadImage=!0,this.$axios.get("/api/logo").then(function(o){t.logo=o.data.logo,t.loadImage=!1})},getCompany:function(){var t=this;this.$axios.get("/api/settings",{params:{page:"company"}}).then(function(o){t.$auth.$storage.setState("company",o.data.form),t.company=t.$auth.$storage.getState("company"),t.companyName=o.data.form.company_name})},logout:function(){var t=this;return Object(V.a)(regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeLocalStorage("app.default_name"),t.$auth.$storage.removeLocalStorage("employee"),t.$auth.$storage.removeLocalStorage("country"),localStorage.removeItem("roles"),localStorage.removeItem("permissions");case 7:case"end":return s.stop()}},o)}))()},rolePermission:function(){var t=this;this.$axios.post("/api/auth/roles").then(function(o){t.$gates.setRoles(o.data)}),this.$axios.post("/api/auth/permissions").then(function(o){t.$gates.setPermissions(o.data)})},menus:function(){var t=this,o=this.$auth.$storage.getLocalStorage("app.default_name");this.$axios.get("/api/menus",{params:{appName:o,locale:this.$i18n.locale}}).then(function(d){t.items=d.data.menus}).catch(function(d){d.response.data.message==="Call to a member function getAllPermissions() on null"&&t.logout(),t.$swal({type:"error",title:"Error",text:d.response.data.message})})}}},k=B,W=e(527),z=e(50),K=Object(z.a)(k,L,T,!1,null,"16df95e3",null),F=i.a=K.exports},371:function(r,i,e){"use strict";var n=e(583),a=e(165),l=e(249),m=e(87),x=e(585),S=e(594),C=e(575),y=e(247),O=e(248),P=e(166),f=e(31),v=e(576),E=e(589),_=e(121),b=function(){var c=this,u=c._self._c;return u(n.a,[u(S.a,{attrs:{fullscreen:"","hide-overlay":"",persistent:"",transition:"dialog-top-transition",scrollable:""},model:{value:c.dialog,callback:function(L){c.dialog=L},expression:"dialog"}},[u(l.a,{attrs:{tile:"",height:"100vh",width:"100vw"}},[u(m.c,[u(_.a,[u(a.a,{attrs:{icon:""}},[u(y.a,[c._v("mdi-progress-pencil")])],1),c._v(" "),u("span",{domProps:{textContent:c._s(c.title)}})],1),c._v(" "),u(E.a),c._v(" "),u(a.a,{attrs:{icon:"",dark:"",color:"red"},on:{click:c.close}},[u(y.a,[c._v("mdi-close")])],1)],1),c._v(" "),u(C.a),c._v(" "),u(m.b,{staticClass:"pl-0 pr-0"},[u(x.a,{attrs:{fluid:""}},[u("Nuxt",{attrs:{"keep-alive":""}})],1)],1),c._v(" "),u(C.a),c._v(" "),u(m.a,[u(E.a),c._v(" "),u(a.a,{staticClass:"mr-3",attrs:{color:"green darken-1",dark:"",rounded:""},on:{click:c.close}},[c._v(`
          Save

          `),u(v.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:c._u([{key:"activator",fn:function(L){var T=L.on,V=L.attrs;return[u(a.a,c._g(c._b({attrs:{dark:"",icon:""}},"v-btn",V,!1),T),[u(y.a,[c._v("mdi-menu-down")])],1)]}}])},[c._v(" "),u(O.a,c._l(c.items,function(M,L){return u(P.a,{key:L},[u(f.a,[u(f.c,[c._v(c._s(M.text))])],1)],1)}),1)],1)],1)],1)],1)],1)],1)},h=[],D={name:"DialogLayout",middleware:"auth",data:function(){return{dialog:!0,title:"",items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:""}},created:function(){var c=this;this.$nuxt.$on("setTitle",function(u){return c.setTitle(u)})},methods:{setTitle:function(c){this.title=c},close:function(){this.$router.back()}}},I=D,R=e(50),A=Object(R.a)(I,b,h,!1,null,null,null),$=i.a=A.exports},372:function(r,i,e){"use strict";var n=e(583),a=e(577),l=e(247),m=function(){var v=this,E=v._self._c;return E(n.a,[E(a.a,{staticClass:"ma-2",attrs:{link:"",color:"primary",label:"",small:""},on:{click:function(b){return v.$router.push({path:"/dashboard/transactions/list"})}}},[E(l.a,{attrs:{left:""}},[v._v(" mdi-arrow-left")]),v._v(`
    All list
  `)],1),v._v(" "),E("Nuxt")],1)},x=[],S={name:"listLayout",layout:"dashboard"},C=S,y=e(50),O=Object(y.a)(C,m,x,!1,null,null,null),P=i.a=O.exports},399:function(r,i,e){e(400),r.exports=e(401)},432:function(r,i,e){"use strict";e.r(i),i.default=function(n){var a=n.store,l=n.redirect;if(a.state.auth.loggedIn)return l("/")}},433:function(r,i,e){"use strict";e.r(i),i.default=function(n){var a=n.store,l=n.redirect}},440:function(r,i,e){"use strict";var n=e(337),a=e.n(n)},441:function(r,i,e){var n=e(15),a=n(!1);a.push([r.i,"h1[data-v-16c037b0]{font-size:20px}",""]),r.exports=a},465:function(r,i,e){var n=e(466);n.__esModule&&(n=n.default),typeof n=="string"&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);var a=e(16).default,l=a("68ddf378",n,!0,{sourceMap:!1})},466:function(r,i,e){var n=e(15),a=n(!1);a.push([r.i,'.scroll-container{height:360px}.scroll-container,.scroll-container-min{width:100%;overflow:hidden}.text--white{color:#fff!important}.scroll-container-height,.scroll-container-main{width:100%;height:360px;overflow:hidden}.scroll-container-employee{width:100%;height:450px;overflow:hidden}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;min-height:1px!important;overflow:hidden}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 9px);font-size:small!important}.theme--light.v-label{color:rgba(0,0,0,.8)!important}.v-text-field.v-input--dense:not(.v-text-field--outlined) input{padding:2px 0!important;font-size:12px!important}.ht_clone_top{z-index:7}.v-navigation-drawer--temporary{z-index:999!important}.v-menu__content.theme--light.menuable__content__active{z-index:800!important}.v-picker__body{z-index:799!important}.bg-green{background-color:#b3ec95}.bg-red{background-color:#e84f65}.bg-white{background-color:#f6e99f}.btnDelete{background:#ff1230}.btnDelete,.btnSPB{width:99%;text-align:center;font:12px sans-serif;padding:5px;color:#fff!important}.btnSPB{background:#ffca1a}.btnNPB{width:99%;background:#85ce61;text-align:center;font:12px sans-serif;padding:5px;color:#fff!important}.v-data-table__wrapper table tbody tr:hover{cursor:pointer}.v-card__subtitle,.v-card__text{font-size:.775rem!important}.v-btn{text-transform:capitalize!important}.v-dialog>.v-card>.v-card__title{padding:5px 24px!important}.handsontable td,.handsontable th{z-index:9999!important}tbody tr td .v-btn--icon.v-size--default{height:20px;width:20px}.v-list-item{align-items:center;display:flex;flex:1 1 100%;letter-spacing:normal;min-height:30px!important;outline:none;padding:0 16px;position:relative;text-decoration:none}body{font-size:12px!important}.v-list-item__title{font-size:inherit!important}.v-toolbar__title{font-size:1.1rem!important}.v-application .headline{font-size:1.3rem!important}.toolbar-content .v-toolbar__content{height:32px!important}.theme--light.v-card,.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:#222!important}.handsontable thead th.colorJkt{background:#e6a23c;border-color:#dede9a}.handsontable thead th.colorTenant{background:#409eff;border-color:#dede9a}.handsontable thead th.colorPPJK{background:#67c23a;border-color:#dede9a}.currentRow{background-color:#f9f9fb!important}.currentCol{background-color:#e7e8ef!important}.myBtRed{background:#f56c6c}.btnInv,.myBtRed{width:99%;height:100%;text-align:center;font:11px sans-serif;color:#fff!important}.btnInv{background:#85ce61}.linkToTenant{color:#e6a23c!important}.linkToPPJK{color:#85ce61!important}.linkToJkt{color:#409eff!important}.btnToTenant{width:99%;height:100%;background:#e6a23c;text-align:center;font:12px sans-serif;color:#fff!important}.btnToJkt,.btnToJkt2{background:#409eff}.btnToJkt,.btnToJkt2,.btnToPPJK{width:99%;height:100%;text-align:center;font:12px sans-serif;color:#fff!important}.btnToPPJK{background:#85ce61}.myBt{width:99%;height:100%;background:#66b1ff;text-align:center;font:11px sans-serif;color:#fff!important}.filterHeader>input{background-color:#fff!important;width:100%}.has-border-bottom{border-bottom:1px solid #eee!important}.filterHeader{border:1.5px solid #eee;height:10px;padding-bottom:7px}.doc-open{background-color:#69f0ae}.doc-open-upload{background-color:#f6e090}.doc-cancel{background-color:#ee6f6f}.doc-white{background-color:#fff}.theme--light.v-input--is-disabled input,.theme--light.v-input--is-disabled textarea{color:#222!important}.v-text-field--filled.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot{min-height:24px!important}.v-text-field.v-text-field--solo.v-input--dense>.v-input__control{min-height:24px!important;font-size:12px!important}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:none!important;border:1px solid #8a8a8a!important}.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer,.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer{margin-top:2px!important}.swal2-icon{width:5em!important;height:5em!important}.v-tab{text-transform:capitalize!important}.table-top-border{border-top:1px solid #eee}.v-data-table-header{background-color:#d9d9d9!important;text-transform:uppercase}.form-table>.v-data-table__wrapper>table{table-layout:fixed}.text-money>.v-input>.v-input__control>.v-input__slot>.v-text-field__slot>input,.text-money>>>>>input{text-align:right}.dropzone{min-height:80px!important;padding:0!important}.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before{left:0!important}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:15px!important;margin:1.678px!important;width:15px!important}.v-timeline-item__dot--small{height:18px!important;left:0!important;width:18px!important}.v-timeline-item__divider{position:relative;min-width:15px!important;display:flex;align-items:center;justify-content:center}.v-timeline--dense .v-timeline-item__body{max-width:100%!important}.v-timeline{padding-top:0!important;position:relative}.item-baseline>.v-data-table__wrapper>table>tbody>tr{vertical-align:baseline!important}.disable-wrap{white-space:nowrap!important}.row--dense>.col,.row--dense>[class*=col-]{padding:8px!important}.v-list-item__subtitle,.v-list-item__title{white-space:normal!important}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:#000!important;font-weight:700!important}.tabulator-edit-list{font-family:"Roboto",sans-serif!important}.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-btn,.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon{color:rgba(0,0,0,.8)!important}.v-data-table-custom tbody tr:nth-of-type(2n){background-color:#eceded}.v-data-table-custom tbody tr:nth-of-type(odd){background-color:#fafafa}.v-data-table-custom .v-data-table-header{background-color:#b6b7bb;color:#fff}.v-data-table-custom .v-data-footer{background-color:#fafafa}.theme--light.v-data-table-custom thead tr th{color:#fff}',""]),r.exports=a},477:function(r,i,e){"use strict";var n=e(344),a=e.n(n)},478:function(r,i,e){var n=e(15),a=n(!1);a.push([r.i,".bg-auth[data-v-cb6bfc0e]{background-color:#eee;background-repeat:no-repeat!important;background-size:cover!important}",""]),r.exports=a},525:function(r,i,e){"use strict";var n=e(345),a=e.n(n)},526:function(r,i,e){var n=e(15),a=n(!1);a.push([r.i,".v-toolbar-flat[data-v-63e1f3ee]{box-shadow:0 1px 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}",""]),r.exports=a},527:function(r,i,e){"use strict";var n=e(346),a=e.n(n)},528:function(r,i,e){var n=e(15),a=n(!1);a.push([r.i,".v-toolbar-flat[data-v-16df95e3]{box-shadow:0 1px 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}",""]),r.exports=a},533:function(r,i,e){"use strict";e.r(i),e.d(i,"getters",function(){return n});var n={user:function(l){return l.auth.user},isLoggedIn:function(l){return l.auth.loggedIn}}},556:function(r,i){function e(n){var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}e.keys=function(){return[]},e.resolve=e,r.exports=e,e.id=556}},[[399,297,16,298]]]);
