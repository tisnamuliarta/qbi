(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1099:function(L,r,o){"use strict";o.r(r);var i=o(165),g=o(249),s=o(87),u=o(585),h=o(594),c=o(575),n=o(247),d=o(589),f=o(121),m=function(){var t=this,a=t._self._c;return a(h.a,{attrs:{id:"dialogFull",value:"dialog",fullscreen:"","hide-overlay":"",persistent:"",transition:"dialog-top-transition",scrollable:"","no-click-animation":"","retain-focus":!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a(g.a,{attrs:{tile:"",loading:t.loading}},[a(s.c,[a(f.a,[a(i.a,{attrs:{icon:""}},[a(n.a,[t._v("mdi-progress-pencil")])],1),t._v(" "),a("span",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),a(d.a),t._v(" "),a(i.a,{attrs:{icon:""}},[a(n.a,[t._v("mdi-new-box")])],1),t._v(" "),a(i.a,{attrs:{icon:""}},[a(n.a,[t._v("mdi-printer")])],1),t._v(" "),a(i.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("arrowLink",{status:"prev"})}}},[a(n.a,[t._v("mdi-arrow-left-thin")])],1),t._v(" "),a(i.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("arrowLink",{status:"next"})}}},[a(n.a,[t._v("mdi-arrow-right-thin")])],1),t._v(" "),a(d.a),t._v(" "),a(i.a,{attrs:{icon:"",dark:"",color:"red"},on:{click:t.closeDialog}},[a(n.a,[t._v("mdi-close")])],1)],1),t._v(" "),a(c.a),t._v(" "),a(s.b,{staticClass:"pl-0 pr-0"},[a(u.a,{attrs:{fluid:""}},[t._t("content")],2)],1),t._v(" "),a(c.a),t._v(" "),a(s.a,{staticStyle:{"background-color":"#263238"}},[t._t("actions")],2)],1)],1)},p=[],D={name:"DialogFull",data:function(){return{dialog:!0,loading:!1,title:"",countRouter:-1}},methods:{showLoading:function(){this.loading=!0},finishLoading:function(){this.loading=!1},openDialog:function(){this.dialog=!0},setTitle:function(t){this.title=t},closeDialog:function(){this.$auth.$storage.getState("basePath")?this.$router.push({path:this.$auth.$storage.getState("basePath")}):this.$emit("closeDialog"),this.$nuxt.$emit("getDataFromApi")}}},$=D,F=o(50),V=Object(F.a)($,m,p,!1,null,null,null),x=r.default=V.exports}}]);