(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1088:function(S,i,n){"use strict";n.r(i);var j=n(27),d=function(){var t=this,a=t._self._c;return a("v-navigation-drawer",{staticClass:"blue-grey darken-4",attrs:{id:"nav",dark:"",app:"",temporary:t.$route.name==="dashboard-settings-setup"},model:{value:t.drawer,callback:function(o){t.drawer=o},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:""}},[a("NuxtLink",{attrs:{to:"/"}},[a("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.loadImage,expression:"loadImage"}],staticClass:"mx-auto logo mb-3",attrs:{type:"avatar"}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:!t.loadImage,expression:"!loadImage"}],staticClass:"mt-1 mb-3",attrs:{src:t.logo,height:"50"}}),t._v(" "),a("v-divider")],1),t._v(" "),a("v-menu",{attrs:{"offset-y":"",left:"","nudge-width":700},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on;return[a("v-btn",t._g({staticClass:"mb-4",attrs:{outlined:"",block:"",small:"",rounded:"",color:"primary"}},r),[a("v-icon",[t._v("mdi-plus")]),t._v(`
            New
          `)],1)]}}])},[t._v(" "),a("v-card",[a("LazyFormNew",{ref:"formNew",on:{openAction:t.openAction}})],1)],1),t._v(" "),t._l(t.items,function(e){return a("v-list-group",{key:e.menu,attrs:{"active-class":"border","prepend-icon":e.icon,"append-icon":"mdi-menu-down"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.menu)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.children,function(o,r){return a("v-list-item",{key:r,staticStyle:{"padding-left":"64px"},attrs:{link:"",to:o.route_name}},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(o.menu)}})],1),t._v(" "),o.icon?a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(o.icon)}})],1):t._e()],1)})],2)})],2)],1)},m=[],c={name:"NavigationDrawer",props:{drawerData:{type:Boolean,default:!1}},data:function(){return{items:{},loadImage:!0,logo:"",drawer:this.drawerData}},methods:{setItems:function(t){this.items=t},setDrawer:function(t){this.drawer=t},setLogo:function(t){this.loadImage=!1,this.logo=t},openAction:function(t){this.$emit("openAction",t)}}},u=c,f=n(50),p=n(51),g=n.n(p),V=n(164),I=n(248),L=n(576),w=n(247),y=n(249),h=n(250),N=n(165),l=n(35),C=n(142),D=n(577),x=n(590),A=n(591),v=Object(f.a)(u,d,m,!1,null,null,null),B=i.default=v.exports;g()(v,{VBtn:V.a,VCard:I.a,VDivider:L.a,VIcon:w.a,VList:y.a,VListGroup:h.a,VListItem:N.a,VListItemContent:l.a,VListItemIcon:C.a,VListItemTitle:l.c,VMenu:D.a,VNavigationDrawer:x.a,VSkeletonLoader:A.a})}}]);
