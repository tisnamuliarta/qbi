(window.webpackJsonp=window.webpackJsonp||[]).push([[31,28],{1077:function(t,e,n){"use strict";n.r(e);var l={name:"DialogAudit",data:function(){return{items:[],headers:[{text:"Event",value:"event"},{text:"Old Value",value:"old_values"},{text:"New Value",value:"new_values"},{text:"User",value:"user.name"},{text:"Date",value:"created_at"}]}},methods:{openDialogAudit:function(t){this.$refs.dialogForm.openDialog(),this.items=t}}},o=(n(862),n(50)),r=n(51),d=n.n(r),c=n(907),v=n(576),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1000px","dialog-title":"Send Email","button-title":"Save"},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-data-table",{staticClass:"elevation-1 item-baseline",attrs:{headers:t.headers,items:t.items,dense:"","items-per-page":5},scopedSlots:t._u([{key:"item.old_values",fn:function(n){var l=n.item;return t._l(l.old_values,(function(n,l){return e("span",{key:l},[t._v("\n            "+t._s(l)+" = "+t._s(n)+"\n            "),e("v-divider")],1)}))}},{key:"item.new_values",fn:function(n){var l=n.item;return t._l(l.new_values,(function(n,l){return e("span",{key:l},[t._v("\n            "+t._s(l)+" = "+t._s(n)+"\n            "),e("v-divider")],1)}))}}],null,!0)})]},proxy:!0}])})}),[],!1,null,"fec8a00c",null);e.default=component.exports;d()(component,{DialogForm:n(603).default}),d()(component,{VDataTable:c.a,VDivider:v.a})},599:function(t,e,n){var l=n(375),o=n(47);t.exports=function(t,e,n){return n.get&&l(n.get,e,{getter:!0}),n.set&&l(n.set,e,{setter:!0}),o.f(t,e,n)}},603:function(t,e,n){"use strict";n.r(e);var l={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},o=n(50),r=n(51),d=n.n(r),c=n(164),v=n(248),f=n(88),_=n(595),m=n(576),h=n(247),x=n(593),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:"",color:"red",dark:""},on:{click:function(e){return t.closeDialog()}}},[e("v-icon",[t._v("mdi-close-circle")])],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-text",{staticClass:"pr-0 pl-0"},[t._t("content")],2),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",[t._t("addLine"),t._v(" "),e("v-spacer"),t._v(" "),t._t("saveData")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VDialog:_.a,VDivider:m.a,VIcon:h.a,VSpacer:x.a})},755:function(t,e,n){var content=n(863);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("b2e97f66",content,!0,{sourceMap:!1})},862:function(t,e,n){"use strict";n(755)},863:function(t,e,n){var l=n(14)(!1);l.push([t.i,".item-baseline>.v-data-table__wrapper>table>tbody>tr[data-v-fec8a00c]{vertical-align:baseline!important}",""]),t.exports=l}}]);