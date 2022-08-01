(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{598:function(t,e,n){"use strict";n(7),n(9),n(12),n(13);var r=n(2),o=(n(4),n(33),n(52),n(28),n(8),n(21),n(65),n(269),n(32),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(35),n(10),n(283),n(3)),c=n(78),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return m.reduce((function(n,r){return n[t+Object(l.I)(r)]=e(),n}),{})}var v=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:v}})),O=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},D=y("justify",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:j}})),_={align:Object.keys(w),justify:Object.keys(D),alignContent:Object.keys(S)},x={align:"align",justify:"justify",alignContent:"align-content"};function I(t,e,n){var r=x[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},w),{},{justify:{type:String,default:null,validator:O}},D),{},{alignContent:{type:String,default:null,validator:j}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=k.get(l);return d||function(){var t,e;for(e in d=[],_)_[e].forEach((function(t){var r=n[t],o=I(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},599:function(t,e,n){var r=n(375),o=n(47);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},765:function(t,e,n){"use strict";n.r(e);n(21),n(268),n(8),n(7),n(12),n(10),n(13);var r=n(2);n(9),n(4);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"TableDocument",props:{typeDocument:{type:String,default:""},formUrl:{type:String,default:""},tableTitle:{type:String,default:""},btnTitle:{type:String,default:"New Transaction"},items:{type:Array,default:function(){return[{text:"Delete",action:"delete"}]}},headerTable:{type:Array,default:function(){return[]}},itemMultiple:{type:Array,default:function(){return[]}}},data:function(){return{totalData:0,editedIndex:-1,loading:!0,company:[],allData:[],documentStatus:[],itemSearch:[],toolbarTitle:"",searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},itemText:"",itemAction:"",headers:this.headerTable}},computed:{formTitle:function(){return-1===this.editedIndex?this.$t("New Employee"):this.$t("Edit Employee")},buttonTitle:function(){return-1===this.editedIndex?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.itemText=this.items[0].text,this.itemAction=this.items[0].action},methods:{newData:function(){this.editedIndex=-1,this.$refs.formData.newData(this.form)},statusColor:function(t){switch(t.status){case"open":case"partial":return"warning";case"active":case"closed":return"green";case"overdue":case"cancel":return"red"}},editItem:function(t){this.editedIndex=1,this.editedIndex=this.allData.indexOf(t),this.$refs.formData.editItem(t,this.url)},actions:function(t,e){"edit"===t?this.editItem(e):this.deleteItem(e)},deleteItem:function(t){var e=this;this.$axios.delete("/api/master/permissions/"+t.menu_name).then((function(t){e.getDataFromApi(),e.$nuxt.$emit("getMenu","nice payload")}))},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this,n={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,type:this.typeDocument};this.$axios.get("/api/payroll/employees",{params:c(c({},e.options),n)}).then((function(e){t.loading=!1,t.allData=e.data.data,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.form),t.defaultItem=Object.assign({},e.data.form),t.$refs.formData.setItemGender(e.data.itemGender),t.$refs.formData.setPaymentMethod(e.data.paymentMethod),t.$refs.formData.setPayFrequency(e.data.payFrequency),t.$refs.formData.setPayType(e.data.payType)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},f=n(50),d=n(51),m=n.n(d),h=n(164),y=n(578),v=n(585),w=n(907),O=n(247),D=n(249),j=n(165),S=n(34),_=n(577),x=n(598),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("v-row",[e("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-0",attrs:{"mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":20,options:t.options,"server-items-length":t.totalData,loading:t.loading,"show-select":"","fixed-header":"",height:"70vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.tableTitle))])]),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:t.toolbarTitle,"button-title":t.btnTitle,"new-data-multiple-item":t.itemMultiple,"show-batch-action":"","show-filter":"","show-new-data":"","new-data-text":"New Employee"},on:{emitData:t.emitData,newData:t.newData,getDataFromApi:t.getDataFromApi}})]},proxy:!0},{key:"item.first_name",fn:function(n){var r=n.item;return[e("a",{on:{click:function(e){return t.editItem(r)}}},[e("strong",{domProps:{textContent:t._s(r.first_name+" "+r.last_name)}})])]}},{key:"item.status",fn:function(n){var r=n.item;return[e("v-chip",{attrs:{label:"",small:"",dark:"",color:t.statusColor(r)}},[t._v("\n            "+t._s(r.status)+"\n          ")])]}},{key:"item.salary",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.$formatter.formatPrice(n.salary))+"\n        ")]}},{key:"item.payment_method",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(1===n.payment_method?"Cash":"Direct Deposit")+"\n        ")]}},{key:"item.actions",fn:function(n){var r=n.item;return[e("v-btn",{staticClass:"font-weight-bold text-right pr-0",attrs:{color:"secondary",text:"",small:""},on:{click:function(e){return t.actions("edit",r)}}},[t._v("\n            Edit\n          ")]),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",o,!1),r),[e("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!0)},[t._v(" "),e("v-list",t._l(t.items,(function(n,i){return e("v-list-item",{key:i,on:{click:function(e){return t.actions(n.action,r)}}},[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(n.text))])],1)],1)})),1)],1)]}}],null,!0)})],1),t._v(" "),e("LazyPayrollFormEmployee",{ref:"formData",attrs:{"form-data":t.form,"form-title":t.formTitle,"button-title":t.buttonTitle,"form-url":t.formUrl},on:{getDataFromApi:t.getDataFromApi}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:h.a,VChip:y.a,VCol:v.a,VDataTable:w.a,VIcon:O.a,VList:D.a,VListItem:j.a,VListItemContent:S.a,VListItemTitle:S.c,VMenu:_.a,VRow:x.a})}}]);