(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1092:function(t,e,n){"use strict";n.r(e);n(27);var o=n(25),r=(n(74),{name:"ToolBar",data:function(){return{username:"",menu:!1,menu2:!1}},mounted:function(){this.username=this.$auth.user.name.substring(0,1)},methods:{openAction:function(data){this.menu=!1,data.item.route?this.$emit("openAction",data):this.$router.push({path:"/app/settings"})},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeLocalStorage("app.default_name"),t.$auth.$storage.removeLocalStorage("employee"),t.$auth.$storage.removeLocalStorage("country"),localStorage.removeItem("roles"),localStorage.removeItem("permissions");case 7:case"end":return e.stop()}}),e)})))()}}}),c=n(50),l=n(51),h=n.n(l),v=n(164),d=n(248),f=n(576),m=n(247),_=n(249),y=n(165),x=n(34),w=n(142),A=n(577),S=n(847),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("v-menu",{attrs:{transition:"slide-y-transition",bottom:"","offset-y":"",left:"","nudge-width":400},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:""}},o),[e("v-icon",[t._v("mdi-magnify")])],1)]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e("v-card",[e("LazyFormSearch",{ref:"formSetting",on:{openAction:t.openAction}})],1)],1),t._v(" "),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:""}},o),[e("v-icon",[t._v("mdi-bell")])],1)]}}])},[t._v(" "),e("span",[t._v("Notifications")])]),t._v(" "),e("v-menu",{attrs:{transition:"slide-y-transition",bottom:"","offset-y":"",left:"","close-on-content-click":"","nudge-width":700},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("v-btn",t._g({staticClass:"mr-2",attrs:{small:"",icon:""}},o),[e("v-icon",[t._v("mdi-cog")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),e("v-card",[e("LazyFormSetting",{ref:"formSetting",on:{openAction:t.openAction}})],1)],1),t._v(" "),e("v-menu",{attrs:{"offset-y":"",left:"","nudge-width":150},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e("v-btn",t._g({staticClass:"white--text",attrs:{"x-small":"",color:"green",depressed:"",fab:""}},o),[t._v("\n          "+t._s(t.$auth.loggedIn?t.$auth.user.name.substring(0,1):"")+"\n        ")])]}}])},[t._v(" "),e("v-card",[e("v-list",{attrs:{dense:"",nav:""}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$auth.user.name))]),t._v(" "),e("v-list-item-subtitle",[t._v(t._s(t.$auth.user.position))])],1)],1)],1),t._v(" "),e("v-divider"),t._v(" "),e("v-list",{attrs:{dense:"",nav:""}},[e("v-list-item",{on:{click:t.logout}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-login-variant")])],1),t._v(" "),e("v-list-item-title",[t._v("Sign out")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VCard:d.a,VDivider:f.a,VIcon:m.a,VList:_.a,VListItem:y.a,VListItemContent:x.a,VListItemIcon:w.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VMenu:A.a,VTooltip:S.a})},729:function(t,e,n){var content=n(730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("210504a4",content,!0,{sourceMap:!1})},730:function(t,e,n){var o=n(14)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},847:function(t,e,n){"use strict";var o=n(2),r=(n(22),n(729),n(115)),c=n(24),l=n(199),h=n(133),v=n(244),d=n(1),f=n(11),m=n(5);e.a=Object(m.a)(c.a,l.a,h.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(d.i)(this.maxWidth),minWidth:Object(d.i)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(d.v)(this,"activator",!0)&&Object(f.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===d.A.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})}}]);