(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1121:function(x,i,o){"use strict";o.r(i);var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",persistent:"",transition:"dialog-top-transition",scrollable:""},model:{value:t.dialog,callback:function(T){t.dialog=T},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("v-card-title",[a("v-toolbar-title",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-progress-pencil")])],1),t._v(" "),a("span",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:"",dark:"",color:"red"},on:{click:t.closeDialog}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticClass:"pl-0 pr-0"},[a("v-container",{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",{staticStyle:{"background-color":"#263238"}},[t._t("actions")],2)],1)],1)},v=[],e={name:"DialogFull",data:function(){return{dialog:!1,title:""}},methods:{openDialog:function(){this.dialog=!0},setTitle:function(n){this.title=n},closeDialog:function(){this.$router.back(),this.$emit("getDataFromApi"),this.$nuxt.$emit("getDataFromApi")}}},c=e,d=o(50),g=o(51),m=o.n(g),V=o(164),u=o(247),l=o(88),p=o(582),D=o(591),f=o(572),C=o(246),h=o(589),F=o(119),r=Object(d.a)(c,s,v,!1,null,null,null),$=i.default=r.exports;m()(r,{VBtn:V.a,VCard:u.a,VCardActions:l.a,VCardText:l.b,VCardTitle:l.c,VContainer:p.a,VDialog:D.a,VDivider:f.a,VIcon:C.a,VSpacer:h.a,VToolbarTitle:F.a})}}]);