(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1113:function(t,e,n){"use strict";n.r(e);n(59),n(4),n(70);var o={name:"OtherSettings",data:function(){return{tabValue:"company",loading:!0,loadingButton:!1,selectedItem:0,form:{},showAction:!0,items:[{text:"Company",icon:"mdi-office-building-cog",alias:"company",action:!0},{text:"Sales",icon:"mdi-finance",alias:"sales",action:!0},{text:"Expenses",icon:"mdi-finance",alias:"expenses",action:!0},{text:"Advanced",icon:"mdi-finance",alias:"advanced",action:!0}]}},mounted:function(){this.selectedItem=0,this.changeTabValue("company",!0)},methods:{openDialog:function(data){this.selectedItem=0,this.$refs.dialogFull.openDialog(data),this.changeTabValue("company",!0)},changeTabValue:function(t,e){var n=this;this.$axios.get("/api/settings",{params:{page:t}}).then((function(o){n.loading=!0,n.tabValue=t,n.form=o.data.form,setTimeout((function(){n.loading=!1,n.showAction=void 0===e||e,n.$refs.setupForm&&n.$refs.setupForm.changeTab(n.form,o.data.url,t)}),800)}))},save:function(){var t=this,form=this.$refs.setupForm.getForm(),e={},n="/api/settings";"company"===this.tabValue?e={headers:{"Content-Type":"Multipart/form-data; charset=utf-8; boundary="+Math.random().toString().substr(2)}}:"account_mapping"===this.tabValue&&(n="/api/financial/account-mapping"),this.loadingButton=!0,this.$axios.post(n,form,e).then((function(e){t.loadingButton=!1,"company"===t.tabValue&&(t.$nuxt.$emit("getLogo"),t.$nuxt.$emit("getCompany")),t.changeTabValue(t.tabValue)})).catch((function(e){t.loadingButton=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},r=n(50),c=n(51),l=n.n(c),f=n(164),d=n(248),m=n(585),v=n(586),y=n(249),h=n(165),j=n(34),w=n(252),O=n(598),x=n(591),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("LazyFormDialogFull",{ref:"dialogFull",scopedSlots:t._u([{key:"content",fn:function(){return[e("v-card",{attrs:{elevation:"0"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticStyle:{"background-color":"#f5f5f5 !important"},attrs:{cols:"12",md:"2"}},[e("v-list",{staticStyle:{"background-color":"#f5f5f5 !important"}},[e("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(n,i){return e("v-list-item",{key:i,on:{click:function(e){return t.changeTabValue(n.alias,n.action)}}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"font-weight-bold text-subtitle-1",domProps:{textContent:t._s(n.text)}})],1)],1)})),1)],1)],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"10"}},[e("v-card",{attrs:{flat:""}},[t.loading?e("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article, actions",loading:t.loading}}):t._e(),t._v(" "),e("LazySetupForm",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],ref:"setupForm"})],1)],1)],1)],1)],1)]},proxy:!0},{key:"actions",fn:function(){return[e("v-btn",{staticClass:"mr-3",attrs:{color:"green darken-1",dark:"",small:""},on:{click:function(e){return t.$refs.dialogFull.closeDialog()}}},[t._v("\n        Done\n      ")])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:f.a,VCard:d.a,VCol:m.a,VContainer:v.a,VList:y.a,VListItem:h.a,VListItemContent:j.a,VListItemGroup:w.a,VListItemTitle:j.c,VRow:O.a,VSkeletonLoader:x.a})},598:function(t,e,n){"use strict";n(7),n(9),n(12),n(13);var o=n(2),r=(n(4),n(33),n(52),n(28),n(8),n(21),n(65),n(269),n(32),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(35),n(10),n(283),n(3)),c=n(78),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=["start","end","center"];function y(t,e){return m.reduce((function(n,o){return n[t+Object(l.I)(o)]=e(),n}),{})}var h=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:h}})),w=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:w}})),x=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},V=y("alignContent",(function(){return{type:String,default:null,validator:x}})),C={align:Object.keys(j),justify:Object.keys(O),alignContent:Object.keys(V)},k={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var o=k[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=r.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},j),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:x}},V),render:function(t,e){var n=e.props,data=e.data,r=e.children,l="";for(var f in n)l+=String(n[f]);var d=$.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var o=n[t],r=S(e,t,o);r&&d.push(r)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),r)}})}}]);