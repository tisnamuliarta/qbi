(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1118:function(h,f,n){"use strict";n.r(f);var i=n(165),u=n(249),T=n(575),d=n(247),D=n(248),E=n(166),m=n(31),L=n(143),y=n(576),b=n(848),O=n(27),x=function(){var t=this,e=t._self._c;return e("div",[e(y.a,{attrs:{transition:"slide-y-transition",bottom:"","offset-y":"",left:"","nudge-width":400},scopedSlots:t._u([{key:"activator",fn:function(r){var v=r.on;return[e(i.a,t._g({staticClass:"mr-2",attrs:{small:"",icon:""}},v),[e(d.a,[t._v("mdi-magnify")])],1)]}}]),model:{value:t.menu2,callback:function(r){t.menu2=r},expression:"menu2"}},[t._v(" "),e(u.a,[e("LazyFormSearch",{ref:"formSetting",on:{openAction:t.openAction}})],1)],1),t._v(" "),e(b.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var v=r.on;return[e(i.a,t._g({staticClass:"mr-2",attrs:{small:"",icon:""}},v),[e(d.a,[t._v("mdi-bell")])],1)]}}])},[t._v(" "),e("span",[t._v("Notifications")])]),t._v(" "),e(y.a,{attrs:{transition:"slide-y-transition",bottom:"","offset-y":"",left:"","close-on-content-click":"","nudge-width":700},scopedSlots:t._u([{key:"activator",fn:function(r){var v=r.on;return[e(i.a,t._g({staticClass:"mr-2",attrs:{small:"",icon:""}},v),[e(d.a,[t._v("mdi-cog")])],1)]}}]),model:{value:t.menu,callback:function(r){t.menu=r},expression:"menu"}},[t._v(" "),e(u.a,[e("LazyFormSetting",{ref:"formSetting",on:{openAction:t.openAction}})],1)],1),t._v(" "),e(y.a,{attrs:{"offset-y":"",left:"","nudge-width":150},scopedSlots:t._u([{key:"activator",fn:function(r){var v=r.on;return[e(i.a,t._g({staticClass:"white--text",attrs:{"x-small":"",color:"green",depressed:"",fab:""}},v),[t._v(`
        `+t._s(t.$auth.loggedIn?t.$auth.user.name.substring(0,1):"")+`
      `)])]}}])},[t._v(" "),e(u.a,[e(D.a,{attrs:{dense:"",nav:""}},[e(E.a,[e(m.a,[e(m.c,[t._v(t._s(t.$auth.user.name))]),t._v(" "),e(m.b,[t._v(t._s(t.$auth.user.position))])],1)],1)],1),t._v(" "),e(T.a),t._v(" "),e(D.a,{attrs:{dense:"",nav:""}},[e(E.a,{on:{click:t.logout}},[e(L.a,[e(d.a,[t._v("mdi-login-variant")])],1),t._v(" "),e(m.c,[t._v("Sign out")])],1)],1)],1)],1)],1)},M=[],s=n(24),o=n(73),a={name:"ToolBar",data:function(){return{username:"",menu:!1,menu2:!1,menu3:!1}},mounted:function(){this.username=this.$auth.user.name.substring(0,1)},methods:{openActionForm:function(t){this.menu3=!1,t.item.route?(this.overlay=!0,this.$router.push({path:t.item.route,query:{document:0}}),this.overlay=!1):t.item.type==="function"?this[t.item.action]():this.$refs.settingForm.openDialog(t,0,null)},openAction:function(t){this.menu=!1,t.item.route?this.$emit("openAction",t):this.$router.push({path:"/app/settings"})},logout:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$auth.logout();case 2:t.$auth.$storage.removeLocalStorage("app.default_name"),t.$auth.$storage.removeLocalStorage("employee"),t.$auth.$storage.removeLocalStorage("country"),localStorage.removeItem("roles"),localStorage.removeItem("permissions");case 7:case"end":return r.stop()}},e)}))()}}},l=a,p=n(50),c=Object(p.a)(l,x,M,!1,null,null,null),_=f.default=c.exports},730:function(h,f,n){var i=n(731);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[h.i,i,""]]),i.locals&&(h.exports=i.locals);var u=n(16).default,T=u("210504a4",i,!0,{sourceMap:!1})},731:function(h,f,n){var i=n(15),u=i(!1);u.push([h.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),h.exports=u},848:function(h,f,n){"use strict";var i=n(2),u=n(22),T=n.n(u),d=n(730),D=n.n(d),E=n(116),m=n(25),L=n(199),y=n(134),b=n(244),O=n(1),x=n(11),M=n(5);f.a=Object(M.a)(m.a,L.a,y.a,b.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var o=this.dimensions,a=o.activator,l=o.content,p=!this.bottom&&!this.left&&!this.top&&!this.right,c=this.attach!==!1?a.offsetLeft:a.left,_=0;return this.top||this.bottom||p?_=c+a.width/2-l.width/2:(this.left||this.right)&&(_=c+(this.right?a.width:-l.width)+(this.right?10:-10)),this.nudgeLeft&&(_-=parseInt(this.nudgeLeft)),this.nudgeRight&&(_+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(_,this.dimensions.content.width),"px")},calculatedTop:function(){var o=this.dimensions,a=o.activator,l=o.content,p=this.attach!==!1?a.offsetTop:a.top,c=0;return this.top||this.bottom?c=p+(this.bottom?a.height:-l.height)+(this.bottom?10:-10):(this.left||this.right)&&(c=p+a.height/2-l.height/2),this.nudgeTop&&(c-=parseInt(this.nudgeTop)),this.nudgeBottom&&(c+=parseInt(this.nudgeBottom)),this.attach===!1&&(c+=this.pageYOffset),"".concat(this.calcYOverflow(c),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":this.attach===""||this.attach===!0||this.attach==="attach"}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(O.i)(this.maxWidth),minWidth:Object(O.i)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var o=this;this.$nextTick(function(){o.value&&o.callActivate()})},mounted:function(){Object(O.v)(this,"activator",!0)==="v-slot"&&Object(x.b)(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`,this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var o=this,a=E.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(a.focus=function(l){o.getActivator(l),o.runDelay("open")},a.blur=function(l){o.getActivator(l),o.runDelay("close")}),a.keydown=function(l){l.keyCode===O.A.esc&&(o.getActivator(l),o.runDelay("close"))},a},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var o=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[o]):o},genContent:function(){var o;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(o={},Object(i.a)(o,this.contentClass,!0),Object(i.a)(o,"menuable__content__active",this.isActive),Object(i.a)(o,"v-tooltip__content--fixed",this.activatorFixed),o),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(o){var a=this;return o(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(function(){return[a.genTransition()]}),this.genActivator()])}})}}]);
