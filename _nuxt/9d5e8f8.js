(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{603:function(t,n,o){"use strict";o.r(n);var e={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},l=o(50),r=o(51),d=o.n(r),c=o(164),v=o(248),_=o(88),f=o(595),m=o(576),h=o(247),D=o(593),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(n){return t.closeDialog()}}},[n("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pr-0 pl-0"},[t._t("content")],2),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[t._t("addLine"),t._v(" "),n("v-spacer"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:c.a,VCard:v.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:f.a,VDivider:m.a,VIcon:h.a,VSpacer:D.a})}}]);