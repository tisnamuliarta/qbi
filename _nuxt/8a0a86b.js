(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{598:function(t,e,n){"use strict";n(7),n(9),n(12),n(13);var r=n(2),o=(n(4),n(33),n(52),n(28),n(8),n(21),n(65),n(269),n(32),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(35),n(10),n(283),n(3)),c=n(78),l=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=["start","end","center"];function v(t,e){return f.reduce((function(n,r){return n[t+Object(l.I)(r)]=e(),n}),{})}var y=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},j=v("align",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},S=v("justify",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},_=v("alignContent",(function(){return{type:String,default:null,validator:w}})),D={align:Object.keys(j),justify:Object.keys(S),alignContent:Object.keys(_)},C={align:"align",justify:"justify",alignContent:"align-content"};function I(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},j),{},{justify:{type:String,default:null,validator:O}},S),{},{alignContent:{type:String,default:null,validator:w}},_),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var h in n)l+=String(n[h]);var d=$.get(l);return d||function(){var t,e;for(e in d=[],D)D[e].forEach((function(t){var r=n[t],o=I(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},997:function(t,e,n){"use strict";n.r(e);n(27),n(21),n(268),n(9),n(4);var r={name:"ListReport",data:function(){return{totalData:0,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},date_from:null,date_to:null,url:"/api/report",title:"Reports"}},head:function(){return{title:this.$route.query.name}},activated:function(){this.getDataFromApi()},methods:{actions:function(t,e){"edit"===t?this.editItem(e):this.deleteItem(e)},editItem:function(t){this.$auth.$storage.setState("basePath",this.$route.path),this.$router.push({path:this.$formatter.mappingAction(t.transaction_type),query:{document:t.id}})},emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.filters=data.filters,this.date_from=data.date_from,this.date_to=data.date_to,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get(this.url,{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,start_date:e.date_from,end_date:e.date_to,report_type:e.$route.query.name}}).then((function(e){t.loading=!1,t.allData=e.data.transactions,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.form=Object.assign({},e.data.data),t.defaultItem=Object.assign({},e.data.form)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))}}},o=n(50),c=n(51),l=n.n(c),h=n(578),d=n(585),f=n(586),m=n(247),v=n(598),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"pl-4 pt-2"},[e("v-chip",{staticClass:"ma-2",attrs:{link:"",color:"primary",label:"",small:""},on:{click:function(e){return t.$router.push({path:"/app/reports/list"})}}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-arrow-left")]),t._v("\n            All Reports\n          ")],1),t._v(" "),e("span",{staticClass:"font-weight-medium text-h6"},[t._v(t._s(t.$route.query.name))])],1),t._v(" "),e("LazyMainToolbar",{attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search,title:"Chart of Accounts","show-filter":"","show-batch-action":""},on:{emitData:t.emitData,getDataFromApi:t.getDataFromApi}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VChip:h.a,VCol:d.a,VContainer:f.a,VIcon:m.a,VRow:v.a})}}]);