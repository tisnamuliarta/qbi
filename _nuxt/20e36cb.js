(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{912:function(C,d,n){"use strict";n.r(d);var m=function(){var t=this,a=t._self._c;return a("v-app-bar",{attrs:{color:"transparent",elevation:"0"}},[a("v-img",{attrs:{"max-width":"120","max-height":"120",src:t.logo}}),t._v(" "),a("v-app-bar-title",{staticClass:"text-h5 ml-4"},[t._v(t._s(t.companyName))]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:"",small:""}},[t._v("Setup")])],1)},c=[],j=n(27),h={name:"Entity",data:function(){return{totalData:0,editedIndex:-1,submitLoad:!1,statusProcessing:"insert",dialog:!1,loading:!0,insert:!0,url:"/api/entities",companyName:"",itemCurrency:[],logo:null,allData:[],form:{},defaultItem:{},options:{},headers:[{text:"Name",value:"name"},{text:"Currency",value:"currency"},{text:"Year Start",value:"year_start"},{text:"Action",value:"ACTIONS",align:"center"}]}},computed:{formTitle:function(){return this.editedIndex===-1?"New":"Edit"}},mounted:function(){this.refreshData()},methods:{refreshData:function(){this.getDataFromApi()},getCurrency:function(){var t=this;this.$axios.get("/api/financial/currency").then(function(a){t.itemCurrency=a.data.data.rows}).catch(function(a){t.$swal({type:"error",title:"Error",text:a.response.data.message})})},getDataFromApi:function(){var t=this;this.loading=!0;var a=this;this.$axios.get(this.url,{params:{options:a.options}}).then(function(e){t.loading=!1,t.allData=e.data.data.rows,t.totalData=e.data.data.total,t.statusProcessing=e.data.data.status,t.form=Object.assign({},e.data.data.rows),t.defaultForm=Object.assign({},e.data.data.form);var r=e.data.data.url;t.logo=r+"/files/logo/"+e.data.data.logo.value,t.companyName=t.form.name}).catch(function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})})},save:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=this,r=this.form,i=this.statusProcessing;i==="insert"?(this.store("post",this.url,r,"insert",t),e.submitLoad=!1):i==="update"&&(this.store("put",this.url+"/"+this.form.id,r,"update",t),e.submitLoad=!1)},store:function(t,a,e,r){var i=this,O=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",o=this;o.submitLoad=!0,this.$axios({method:t,url:a,data:e}).then(function(l){o.submitLoad=!1,i.$swal({type:"success",title:"Success",text:l.data.message}),i.getDataFromApi()}).catch(function(l){o.submitLoad=!1,i.$swal({type:"error",title:"Error",text:l.response.data.message})})}}},p=h,v=n(50),f=n(51),g=n.n(f),y=n(597),b=n(118),x=n(1),D=n(342),A=Object(b.a)("VAppBar","v-app-bar-title","v-app-bar"),V=A.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,a=this.contentWidth,e=Object(D.easeInOutCubic)(Math.min(1,this.VAppBar.scrollRatio*1.5));return{width:Object(x.i)(t+(a-t)*e),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}}),$=n(164),w=n(209),B=n(593),u=Object(v.a)(p,m,c,!1,null,null,null),E=d.default=u.exports;g()(u,{VAppBar:y.a,VAppBarTitle:V,VBtn:$.a,VImg:w.a,VSpacer:B.a})}}]);