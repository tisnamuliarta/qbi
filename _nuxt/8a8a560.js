(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1026:function(t,n,e){"use strict";e.r(n);var r={name:"AllPurchase",head:function(){return{title:this.$t("Sales Overview")}},activated:function(){this.$nuxt.$emit("extensionActive",{active:0})}},c=e(50),o=e(51),l=e.n(o),f=e(164),v=e(248),d=e(88),O=e(585),j=e(586),y=e(247),w=e(598),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-card",{staticClass:"mx-auto"},[n("v-card-text",[n("div",{staticClass:"subtitle-1"},[t._v("SHORTCUTS")])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-receipt")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-card",{staticClass:"mx-auto"},[n("v-card-text",[n("div",{staticClass:"subtitle-1"},[t._v("SHORTCUTS")])]),t._v(" "),n("v-card-text")],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:f.a,VCard:v.a,VCardText:d.b,VCol:O.a,VContainer:j.a,VIcon:y.a,VRow:w.a})},598:function(t,n,e){"use strict";e(7),e(9),e(12),e(13);var r=e(2),c=(e(4),e(33),e(52),e(28),e(8),e(21),e(65),e(269),e(32),e(270),e(271),e(272),e(273),e(274),e(275),e(276),e(277),e(278),e(279),e(280),e(281),e(282),e(35),e(10),e(283),e(3)),o=e(78),l=e(1);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d=["sm","md","lg","xl"],O=["start","end","center"];function j(t,n){return d.reduce((function(e,r){return e[t+Object(l.I)(r)]=n(),e}),{})}var y=function(t){return[].concat(O,["baseline","stretch"]).includes(t)},w=j("align",(function(){return{type:String,default:null,validator:y}})),C=function(t){return[].concat(O,["space-between","space-around"]).includes(t)},h=j("justify",(function(){return{type:String,default:null,validator:C}})),S=function(t){return[].concat(O,["space-between","space-around","stretch"]).includes(t)},m=j("alignContent",(function(){return{type:String,default:null,validator:S}})),x={align:Object.keys(w),justify:Object.keys(h),alignContent:Object.keys(m)},P={align:"align",justify:"justify",alignContent:"align-content"};function _(t,n,e){var r=P[t];if(null!=e){if(n){var c=n.replace(t,"");r+="-".concat(c)}return(r+="-".concat(e)).toLowerCase()}}var V=new Map;n.a=c.default.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},w),{},{justify:{type:String,default:null,validator:C}},h),{},{alignContent:{type:String,default:null,validator:S}},m),render:function(t,n){var e=n.props,data=n.data,c=n.children,l="";for(var f in e)l+=String(e[f]);var v=V.get(l);return v||function(){var t,n;for(n in v=[],x)x[n].forEach((function(t){var r=e[t],c=_(n,t,r);c&&v.push(c)}));v.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),V.set(l,v)}(),t(e.tag,Object(o.a)(data,{staticClass:"row",class:v}),c)}})}}]);