(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{999:function(C,r,e){"use strict";e.r(r);var l=e(249),c=e(87),u=e(587),v=e(585),d=e(598),f=e(48),p=e(573),h=e(1160),S=e(21),V=e(268),A=e(10),F=e(4),R=e(27),m=function(){var t=this,a=t._self._c;return a(v.a,[a(d.a,[a(u.a,{attrs:{cols:"12",md:"7"}},[a(l.a,{staticClass:"mx-auto"},[a(f.a,{staticClass:"pa-4 primary"},[a(p.a,{attrs:{label:"Search Company Directory",dark:"",flat:"",dense:"","solo-inverted":"","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:t.search,callback:function(s){t.search=s},expression:"search"}})],1),t._v(" "),a(c.b,[a(h.a,{attrs:{items:t.items,search:t.search,filter:t.filter,open:t.open,"open-all":"",dense:"",activatable:"",hoverable:""},on:{"update:open":function(s){t.open=s}},scopedSlots:t._u([{key:"label",fn:function(s){var i=s.item;return[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(J){return t.openDialog(i)}}},[t._v(t._s(i.name))])]}}])})],1)],1)],1)],1)],1)},g=[],j=e(34),P=e(51),y={name:"AllSales",data:function(){return{panel:[0,1,2,3,4,5,6],itemsPerPageArray:[4,8,12],sortDesc:!1,page:1,itemsPerPage:4,sortBy:"name",keys:["Name","Calories"],open:[1,2,3,4,5,6,7,8],search:null,caseSensitive:!1,items:[]}},head:function(){return{title:"Reports"}},computed:{filter:function(){return this.caseSensitive?function(t,a,o){return t[o].includes(a)}:void 0}},activated:function(){this.getReport(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var t=this;this.$nuxt.$on("getDataFromApi",function(a){return t.getDataFromApi(a)})},methods:{getReport:function(){var t=this;this.$axios.get("/api/report-list").then(function(a){t.items=a.data.data,t.open=[1,2,3,4,5,6,7,8]})},openDialog:function(t){this.$router.push({path:t.route,query:{name:t.alias}}),this.$auth.$storage.setCookie("reportType",t.alias)},getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},D=y,$=e(50),x=Object($.a)(D,m,g,!1,null,null,null),T=r.default=x.exports}}]);
