(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{615:function(v,i,a){"use strict";var e=a(284),c=a.n(e),l=a(285);i.a=Object(l.a)("layout")},622:function(v,i,a){"use strict";var e=a(284),c=a.n(e),l=a(285);i.a=Object(l.a)("flex")},939:function(v,i,a){"use strict";a.r(i);var e=function(){var t=this,n=t._self._c;return n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("v-card",[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"2"}},[n("v-navigation-drawer",{attrs:{permanent:""}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(s){t.selectedItem=s},expression:"selectedItem"}},t._l(t.items,function(o,s){return n("v-list-item",{key:s,on:{click:function(K){return t.changeTabValue(o.alias,o.action)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(o.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(o.text)}})],1)],1)}),1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"10"}},[n("v-card",{attrs:{flat:""}},[t.loading?n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article, actions",loading:t.loading}}):t._e(),t._v(" "),n("SetupForm",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],ref:"setupForm"})],1)],1)],1)],1),t._v(" "),t.showAction?n("v-divider"):t._e(),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),t.showAction?n("v-btn",{staticClass:"mr-3",attrs:{color:"green darken-1",dark:"",small:"",loading:t.loadingButton},on:{click:t.save}},[t._v(`
            Save
            `),n("v-icon",{attrs:{small:"",dark:"",right:""}},[t._v(" mdi-content-save")])],1):t._e()],1)],1)],1)],1)},c=[],l=a(59),U=a(4),j=a(70),g={name:"OtherSettings",layout:"dashboard",data:function(){return{tabValue:"company",loading:!0,loadingButton:!1,selectedItem:0,form:{},showAction:!0,items:[{text:"Company",icon:"mdi-office-building-cog",alias:"company",action:!0},{text:"Finance",icon:"mdi-finance",alias:"finance",action:!0},{text:"Account Mapping",icon:"mdi-map",alias:"account_mapping",action:!0},{text:"E-Mail",icon:"mdi-email",alias:"email",action:!0},{text:"PDF",icon:"mdi-file-pdf-box",alias:"pdf",action:!0},{text:"Tags",icon:"mdi-tag",alias:"tags",action:!1},{text:"Item Units",icon:"mdi-align-vertical-distribute",alias:"units",action:!1},{text:"Item Category",icon:"mdi-shape",alias:"product_category",action:!1},{text:"Permissions",icon:"mdi-boom-gate",alias:"permissions",action:!1},{text:"Roles",icon:"mdi-police-badge",alias:"roles",action:!1},{text:"Users",icon:"mdi-account",alias:"users",action:!1},{text:"Payment Method",icon:"mdi-bank-transfer",alias:"payment",action:!1},{text:"VAT",icon:"mdi-content-cut",alias:"taxes",action:!1},{text:"Terms",icon:"mdi-file-document-outline",alias:"term",action:!1},{text:"Currency",icon:"mdi-currency-usd",alias:"currency",action:!1}]}},head:function(){return{title:"Application Setup"}},created:function(){this.changeTabValue(this.tabValue)},methods:{changeTabValue:function(t,n){var o=this;this.$axios.get("/api/settings",{params:{page:t}}).then(function(s){o.loading=!0,o.tabValue=t,o.form=s.data.data.form,o.$router.push({path:"/dashboard/settings/setup",query:{page:t}}),setTimeout(function(){o.loading=!1,o.showAction=n===void 0?!0:n,o.$refs.setupForm.changeTab(o.form,s.data.data.url)},300)})},save:function(){var t=this,n=this.$refs.setupForm.getForm(),o={},s="/api/settings";this.tabValue==="company"?o={headers:{"Content-Type":"Multipart/form-data; charset=utf-8; boundary="+Math.random().toString().substr(2)}}:this.tabValue==="account_mapping"&&(s="/api/financial/account-mapping"),this.loadingButton=!0,this.$axios.post(s,n,o).then(function(m){t.loadingButton=!1,t.tabValue==="company"&&(t.$nuxt.$emit("getLogo"),t.$nuxt.$emit("getCompany")),t.changeTabValue(t.tabValue)}).catch(function(m){t.loadingButton=!1,t.$swal({type:"error",title:"Error",text:m.response.data.message})})}}},V=g,p=a(50),h=a(51),u=a.n(h),x=a(164),y=a(248),C=a(88),I=a(585),L=a(586),E=a(576),T=a(622),D=a(247),M=a(615),P=a(249),O=a(165),f=a(35),A=a(252),B=a(142),F=a(590),$=a(599),R=a(591),S=a(593),d=Object(p.a)(V,e,c,!1,null,null,null),G=i.default=d.exports;u()(d,{SetupForm:a(869).default}),u()(d,{VBtn:x.a,VCard:y.a,VCardActions:C.a,VCol:I.a,VContainer:L.a,VDivider:E.a,VFlex:T.a,VIcon:D.a,VLayout:M.a,VList:P.a,VListItem:O.a,VListItemContent:f.a,VListItemGroup:A.a,VListItemIcon:B.a,VListItemTitle:f.c,VNavigationDrawer:F.a,VRow:$.a,VSkeletonLoader:R.a,VSpacer:S.a})}}]);
