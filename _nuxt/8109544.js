(window.webpackJsonp=window.webpackJsonp||[]).push([[34,31],{1094:function(s,i,e){"use strict";e.r(i);var a=e(911),n=e(577),d=function(){var o=this,r=o._self._c;return r("DialogForm",{ref:"dialogForm",attrs:{"max-width":"1000px","dialog-title":"Send Email","button-title":"Save"},scopedSlots:o._u([{key:"content",fn:function(){return[r(a.a,{staticClass:"elevation-1 item-baseline",attrs:{headers:o.headers,items:o.items,dense:"","items-per-page":5},scopedSlots:o._u([{key:"item.old_values",fn:function(t){var _=t.item;return o._l(_.old_values,function(f,u){return r("span",{key:u},[o._v(`
          `+o._s(u)+" = "+o._s(f)+`
          `),r(n.a)],1)})}},{key:"item.new_values",fn:function(t){var _=t.item;return o._l(_.new_values,function(f,u){return r("span",{key:u},[o._v(`
          `+o._s(u)+" = "+o._s(f)+`
          `),r(n.a)],1)})}}],null,!0)})]},proxy:!0}])})},v=[],l={name:"DialogAudit",data:function(){return{items:[],headers:[{text:"Event",value:"event"},{text:"Old Value",value:"old_values"},{text:"New Value",value:"new_values"},{text:"User",value:"user.name"},{text:"Date",value:"created_at"}]}},methods:{openDialogAudit:function(o){this.$refs.dialogForm.openDialog(),this.items=o}}},g=l,D=e(867),x=e(50),m=Object(x.a)(g,d,v,!1,null,"fec8a00c",null),y=i.default=m.exports;installComponents(m,{DialogForm:e(602).default})},601:function(s,i,e){var a=e(378),n=e(47);s.exports=function(d,v,l){return l.get&&a(l.get,v,{getter:!0}),l.set&&a(l.set,v,{setter:!0}),n.f(d,v,l)}},602:function(s,i,e){"use strict";e.r(i);var a=e(165),n=e(250),d=e(87),v=e(596),l=e(577),g=e(248),D=e(589),x=function(){var t=this,_=t._self._c;return _(v.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:t.original,"max-width":t.maxWidth,transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(u){t.dialog=u},expression:"dialog"}},[_(n.a,{attrs:{outlined:""}},[_(d.c,[_("span",{staticClass:"subtitle-2"},[t._v(t._s(t.dialogTitle))]),t._v(" "),_(D.a),t._v(" "),_(a.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(u){return t.closeDialog()}}},[_(g.a,[t._v("mdi-close")])],1)],1),t._v(" "),_(l.a),t._v(" "),_(d.b,{staticClass:"pr-0 pl-0"},[t._t("content")],2),t._v(" "),_(l.a),t._v(" "),_(d.a,[t._t("addLine"),t._v(" "),_(D.a),t._v(" "),t._t("saveData")],2)],1)],1)},m=[],y={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},p=y,o=e(50),r=Object(o.a)(p,x,m,!1,null,null,null),j=i.default=r.exports},760:function(s,i,e){var a=e(868);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);var n=e(16).default,d=n("b2e97f66",a,!0,{sourceMap:!1})},867:function(s,i,e){"use strict";var a=e(760),n=e.n(a)},868:function(s,i,e){var a=e(15),n=a(!1);n.push([s.i,".item-baseline>.v-data-table__wrapper>table>tbody>tr[data-v-fec8a00c]{vertical-align:baseline!important}",""]),s.exports=n}}]);
