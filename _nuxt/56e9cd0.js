(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1064:function(t,e,n){"use strict";n.r(e);n(21),n(268);var r={name:"MainToolbar",props:{title:{type:String,default:""},doctype:{type:String,default:""},newDataRoute:{type:String,default:""},newDataType:{type:String,default:""},titleButton:{type:String,default:""},searchItem:{type:String,default:""},search:{type:String,default:""},filters:{type:String,default:""},searchStatus:{type:String,default:"Active"},documentStatus:{type:Array,default:function(){return[]}},buttonTitle:{type:String,default:"New"},newDataText:{type:String,default:"New"},showAdd:{type:Boolean,default:!0},filter:{type:Boolean,default:!0},showBatchAction:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showBackLink:{type:Boolean,default:!1},showNewData:{type:Boolean,default:!1},showNewDataMultiple:{type:Boolean,default:!1},newDataMultipleItem:{type:Array,default:function(){return[]}},itemSearch:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,dialogFilter:!1,searchStatusData:this.searchStatus,searchItemData:this.searchItem,searchData:this.search,items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],form:{date_from:null,date_to:null},itemsMenu:[{title:"Refresh",icon:"mdi-refresh",action:"refresh"},{title:"Print",icon:"mdi-printer",action:"print"},{title:"Export to excel",icon:"mdi-microsoft-excel",action:"export-excel"},{title:"Form Settings",icon:"mdi-cog",action:"setting"}]}},watch:{searchData:{handler:function(){this.$emit("emitData",{search:this.searchData})},deep:!0}},methods:{newData:function(){this.$auth.$storage.setState("basePath",this.$route.path),this.$emit("newData")},passDataToToolbar:function(data){this.$emit("emitData",{documentStatus:data.documentStatus,itemSearch:data.itemSearch,searchStatus:data.searchStatus,searchItem:data.searchItem,search:data.search,date_from:this.form.date_from,date_to:this.form.date_to})},getDataFromApi:function(){this.$emit("getDataFromApi",{search:this.search})},processAction:function(t){switch(t){case"refresh":case"print":case"export-excel":case"setting":this.$emit("getDataFromApi")}},makeInActive:function(){}}},o=n(50),c=n(51),l=n.n(c),d=n(597),f=n(164),v=n(248),m=n(88),h=n(585),y=n(620),_=n(247),w=n(616),O=n(249),x=n(165),j=n(34),D=n(142),S=n(577),k=n(598),B=n(593),C=n(575),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("v-app-bar",{staticClass:"rounded",attrs:{flat:"",color:"white",dense:"",elevation:"0"}},[t.showBatchAction?e("v-btn",{staticClass:"mr-0 pr-0",attrs:{icon:""}},[e("v-icon",[t._v("mdi-arrow-down-left")])],1):t._e(),t._v(" "),t.showBatchAction?e("v-menu",{attrs:{transition:"slide-y-transition","offset-y":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({staticClass:"ml-0 mr-2",attrs:{small:"",color:"green",dark:"",elevation:"0"}},"v-btn",o,!1),r),[t._v("\n          Batch Action\n          "),e("v-btn",{attrs:{dark:"",small:"",icon:""}},[e("v-icon",[t._v("mdi-menu-down")])],1)],1)]}}],null,!1,51158673)},[t._v(" "),e("v-list",{attrs:{dense:""}},t._l(["Make Inactive"],(function(n,i){return e("v-list-item",{key:i,attrs:{dense:""},on:{click:function(e){return t.makeInActive(n,t.doctype)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n))])],1)],1)})),1)],1):t._e(),t._v(" "),e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":400,"max-width":"400px",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t.showFilter?e("v-btn",t._g(t._b({staticClass:"d-none d-sm-flex",attrs:{small:"",outlined:"",color:"black",elevation:"0",dark:""}},"v-btn",o,!1),r),[t._v("\n          Filter\n          "),e("v-btn",{staticClass:"d-none d-sm-flex",attrs:{dark:"",color:"black",small:"",icon:""}},[e("v-icon",[t._v("mdi-menu-down")])],1)],1):t._e()]}}])},[t._v(" "),e("v-card",[e("v-card-text",[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Transaction",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6"}}),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Status",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Delivery Method",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Date From",outlined:"",dense:"",type:"date","hide-details":"auto"},model:{value:t.form.date_from,callback:function(e){t.$set(t.form,"date_from",e)},expression:"form.date_from"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Date To",outlined:"",dense:"",type:"date","hide-details":"auto"},model:{value:t.form.date_to,callback:function(e){t.$set(t.form,"date_to",e)},expression:"form.date_to"}})],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{text:""}},[t._v(" Cancel ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"primary",small:"",elevation:"0"},on:{click:t.passDataToToolbar}},[t._v("\n            Apply\n          ")])],1)],1)],1),t._v(" "),e("v-form",{staticClass:"d-none d-sm-flex ml-2"},[e("v-layout",{attrs:{wrap:""}},[e("v-row",[e("v-col",{staticClass:"mt-0 mr-2",attrs:{cols:"12",md:"12",sm:"12"}},[e("v-text-field",{staticClass:"mt-1",attrs:{label:"search",outlined:"",dense:"","hide-details":"auto"},on:{change:t.getDataFromApi},model:{value:t.searchData,callback:function(e){t.searchData=e},expression:"searchData"}})],1)],1)],1)],1),t._v(" "),e("v-spacer"),t._v(" "),t.showBackLink?e("LazySetupBackList"):t._e(),t._v(" "),t.showNewData?e("v-btn",{staticClass:"d-none d-sm-flex",attrs:{color:"primary",elevation:"0",small:""},on:{click:t.newData}},[t._v("\n      "+t._s(t.newDataText)+"\n    ")]):t._e(),t._v(" "),t.showNewData?e("v-btn",{staticClass:"d-flex d-sm-none",attrs:{color:"primary",elevation:"0",small:"",icon:""},on:{click:t.newData}},[e("v-icon",[t._v("mdi-plus-box")])],1):t._e(),t._v(" "),t.showNewDataMultiple?e("v-btn",{attrs:{small:"",color:"primary",elevation:"0"},on:{click:t.newData}},[t._v("\n      "+t._s(t.$t("New Transactions"))+"\n    ")]):t._e(),t._v(" "),e("v-btn",{staticClass:"ml-1 mr-1 d-none d-sm-flex",attrs:{loading:t.loading,icon:"",small:""},on:{click:function(e){return t.processAction("refresh")}}},[e("v-icon",[t._v("mdi-refresh")])],1),t._v(" "),e("v-btn",{staticClass:"ml-1 mr-1 d-none d-sm-flex",attrs:{loading:t.loading,icon:"",small:""},on:{click:function(e){return t.processAction("print")}}},[e("v-icon",[t._v("mdi-printer")])],1),t._v(" "),e("v-btn",{staticClass:"ml-1 mr-1 d-none d-sm-flex",attrs:{loading:t.loading,icon:"",small:""},on:{click:function(e){return t.processAction("export-excel")}}},[e("v-icon",[t._v("mdi-microsoft-excel")])],1),t._v(" "),e("v-btn",{staticClass:"d-none d-sm-flex",attrs:{loading:t.loading,icon:"",small:""},on:{click:function(e){return t.processAction("setting")}}},[e("v-icon",[t._v("mdi-cog")])],1),t._v(" "),e("v-menu",{staticClass:"d-flex d-sm-none",attrs:{"offset-y":"",left:"","nudge-width":120},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({staticClass:"d-flex d-sm-none",attrs:{icon:""}},"v-btn",o,!1),r),[e("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e("v-list",{attrs:{dense:""}},t._l(t.itemsMenu,(function(n,i){return e("v-list-item",{key:i,attrs:{link:"",dense:""},on:{click:function(e){return t.processAction(n.action)}}},[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(n.icon)}})],1),t._v(" "),e("v-list-item-title",[t._v(t._s(n.title))])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:d.a,VBtn:f.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCol:h.a,VForm:y.a,VIcon:_.a,VLayout:w.a,VList:O.a,VListItem:x.a,VListItemContent:j.a,VListItemIcon:D.a,VListItemTitle:j.c,VMenu:S.a,VRow:k.a,VSpacer:B.a,VTextField:C.a})},598:function(t,e,n){"use strict";n(7),n(9),n(12),n(13);var r=n(2),o=(n(4),n(33),n(52),n(28),n(8),n(21),n(65),n(269),n(32),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(35),n(10),n(283),n(3)),c=n(78),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return v.reduce((function(n,r){return n[t+Object(l.I)(r)]=e(),n}),{})}var y=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},_=h("align",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},O=h("justify",(function(){return{type:String,default:null,validator:w}})),x=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},j=h("alignContent",(function(){return{type:String,default:null,validator:x}})),D={align:Object.keys(_),justify:Object.keys(O),alignContent:Object.keys(j)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var B=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},_),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:x}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=B.get(l);return f||function(){var t,e;for(e in f=[],D)D[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),B.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},616:function(t,e,n){"use strict";n(284);var r=n(285);e.a=Object(r.a)("layout")},620:function(t,e,n){"use strict";var r=n(2),o=(n(33),n(52),n(288),n(9),n(4),n(10),n(59),n(79),n(8),n(7),n(12),n(13),n(5)),c=n(99),l=n(118);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);