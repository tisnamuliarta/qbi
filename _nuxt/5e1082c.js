(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{598:function(d,u,e){"use strict";var p=e(7),_=e.n(p),y=e(10),ge=e.n(y),Q=e(12),De=e.n(Q),Z=e(13),be=e.n(Z),f=e(2),k=e(4),E=e.n(k),A=e(34),P=e.n(A),v=e(51),j=e.n(v),g=e(28),q=e.n(g),I=e(8),B=e.n(I),R=e(21),L=e.n(R),T=e(64),ee=e.n(T),K=e(269),ne=e.n(K),D=e(33),W=e.n(D),U=e(270),te=e.n(U),se=e(271),Me=e.n(se),ae=e(272),$=e.n(ae),b=e(273),V=e.n(b),M=e(274),oe=e.n(M),S=e(275),ie=e.n(S),x=e(276),re=e.n(x),le=e(277),pe=e.n(le),z=e(278),ce=e.n(z),H=e(279),de=e.n(H),G=e(280),Ce=e.n(G),t=e(281),n=e.n(t),s=e(282),a=e.n(s),c=e(35),C=e.n(c),F=e(9),Ae=e.n(F),_e=e(283),Ve=e.n(_e),Ie=e(3),Be=e(77),Re=e(1);function ue(l,i){var r=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);i&&(o=o.filter(function(m){return Object.getOwnPropertyDescriptor(l,m).enumerable})),r.push.apply(r,o)}return r}function N(l){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?ue(Object(r),!0).forEach(function(o){Object(f.a)(l,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(r,o))})}return l}var Le=["sm","md","lg","xl"],w=["start","end","center"];function J(l,i){return Le.reduce(function(r,o){return r[l+Object(Re.I)(o)]=i(),r},{})}var ve=function(i){return[].concat(w,["baseline","stretch"]).includes(i)},he=J("align",function(){return{type:String,default:null,validator:ve}}),fe=function(i){return[].concat(w,["space-between","space-around"]).includes(i)},xe=J("justify",function(){return{type:String,default:null,validator:fe}}),me=function(i){return[].concat(w,["space-between","space-around","stretch"]).includes(i)},Oe=J("alignContent",function(){return{type:String,default:null,validator:me}}),ye={align:Object.keys(he),justify:Object.keys(xe),alignContent:Object.keys(Oe)},Te={align:"align",justify:"justify",alignContent:"align-content"};function Ke(l,i,r){var o=Te[l];if(r!=null){if(i){var m=i.replace(l,"");o+="-".concat(m)}return o+="-".concat(r),o.toLowerCase()}}var Ee=new Map;u.a=Ie.default.extend({name:"v-row",functional:!0,props:N(N(N({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ve}},he),{},{justify:{type:String,default:null,validator:fe}},xe),{},{alignContent:{type:String,default:null,validator:me}},Oe),render:function(i,r){var o=r.props,m=r.data,We=r.children,X="";for(var Ue in o)X+=String(o[Ue]);var h=Ee.get(X);return h||function(){var O;h=[];var Y;for(Y in ye)ye[Y].forEach(function(Pe){var $e=o[Pe],je=Ke(Y,Pe,$e);je&&h.push(je)});h.push((O={"no-gutters":o.noGutters,"row--dense":o.dense},Object(f.a)(O,"align-".concat(o.align),o.align),Object(f.a)(O,"justify-".concat(o.justify),o.justify),Object(f.a)(O,"align-content-".concat(o.alignContent),o.alignContent),O)),Ee.set(X,h)}(),i(o.tag,Object(Be.a)(m,{staticClass:"row",class:h}),We)}})},789:function(d,u,e){var p=e(790);p.__esModule&&(p=p.default),typeof p=="string"&&(p=[[d.i,p,""]]),p.locals&&(d.exports=p.locals);var _=e(16).default,y=_("63c5c7a4",p,!0,{sourceMap:!1})},790:function(d,u,e){var p=e(15),_=p(!1);_.push([d.i,'.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.04}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:before{opacity:.08}.v-expansion-panels{border-radius:20px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:20px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:20px;border-top-right-radius:20px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:20px;border-bottom-right-radius:20px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),d.exports=_},909:function(d,u,e){"use strict";e.r(u);var p=e(587),_=e(585),y=e(575),ge=e(8),Q=e(7),De=e(10),Z=e(4),be=e(12),f=e(9),k=e(13),E=e(2),A=e(102),P=e(118),v=e(1),j=e(5);function g(t,n){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),s.push.apply(s,a)}return s}function q(t){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?g(Object(s),!0).forEach(function(a){Object(E.a)(t,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))})}return t}var I=Object(j.a)(Object(A.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(P.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return q({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(n){this.content=n},unregisterContent:function(){this.content=null},registerHeader:function(n){this.header=n,n.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(n){n.detail&&this.header.$el.blur(),this.$emit("click",n),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var n=this;this.$nextTick(function(){return n.$emit("change")})}},render:function(n){return n("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(v.u)(this))}}),B=e(94),R=e(179),L=e(25),T=Object(j.a)(R.a,L.a,Object(P.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel")),ee=T.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(n,s){var a=this;n&&(this.isBooted=!0),s==null?this.isActive=n:this.$nextTick(function(){return a.isActive=n})}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(n){var s=this;return n(B.a,this.showLazyContent(function(){return[n("div",s.setBackgroundColor(s.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:s.isActive}]}),[n("div",{class:"v-expansion-panel-content__wrap"},Object(v.u)(s))])]}))}}),K=e(45),ne=e(100);function D(t,n){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),s.push.apply(s,a)}return s}function W(t){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?D(Object(s),!0).forEach(function(a){Object(E.a)(t,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):D(Object(s)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))})}return t}var U=Object(j.a)(L.a,Object(P.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel")),te=U.extend().extend({name:"v-expansion-panel-header",directives:{ripple:ne.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(n){this.$emit("click",n)},genIcon:function(){var n=Object(v.u)(this,"actions")||[this.$createElement(K.a,this.expandIcon)];return this.$createElement(B.d,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},n)])}},render:function(n){var s=this;return n("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:W(W({},this.$listeners),{},{click:this.onClick,mousedown:function(){return s.hasMousedown=!0},mouseup:function(){return s.hasMousedown=!1}})}),[Object(v.u)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),se=e(177),Me=e(178),ae=e(789),$=e(76),b=e(11);function V(t,n){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),s.push.apply(s,a)}return s}function M(t){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?V(Object(s),!0).forEach(function(a){Object(E.a)(t,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):V(Object(s)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))})}return t}var oe=$.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return M(M({},$.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(b.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&typeof this.value[0]=="boolean"&&Object(b.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(n,s){var a=this.getValue(n,s),c=this.getValue(n,s+1);n.isActive=this.toggleMethod(a),n.nextIsActive=this.toggleMethod(c)}}}),S=e(248),ie=e(166),x=e(31),re=e(598),le=e(27),pe=function(){var n=this,s=n._self._c;return s(_.a,[s(re.a,[s(p.a,{attrs:{cols:"12"}},[s("span",{staticClass:"text-h4"},[n._v("List")])]),n._v(" "),s(p.a,{attrs:{cols:"12",md:"10"}},[s(oe,{ref:"tableDocument",attrs:{multiple:""},model:{value:n.panel,callback:function(c){n.panel=c},expression:"panel"}},n._l(n.items,function(a,c){return s(I,{key:c},[s(te,{domProps:{textContent:n._s(a.header)}}),n._v(" "),s(ee,[s(S.a,{attrs:{link:"",dense:""}},n._l(a.items,function(C,F){return s(ie.a,{key:F,staticClass:"pt-0 pb-0",attrs:{to:a.route,"two-line":"",link:"",dense:""},on:{click:function(_e){return n.$router.push({path:C.route})}}},[s(x.a,[s(x.c,{staticClass:"font-weight-bold",domProps:{textContent:n._s(C.name)}}),n._v(" "),s(x.b,{domProps:{textContent:n._s(C.desc)}}),n._v(" "),s(y.a)],1)],1)}),1)],1)],1)}),1)],1)],1)],1)},z=[],ce={name:"AllList",data:function(){return{panel:[0,1,2,3,4,5,6],items:[{header:this.$t("Accounting"),items:[{name:this.$t("Chart Of Accounts"),route:"/app/accounting/account",desc:this.$t("Displays your accounts. Balance sheet accounts track your assets and liabilities, and income and expense accounts categorize your transactions. From here, you can add or edit accounts.")},{name:this.$t("Account Category"),route:"/list/account-category",desc:this.$t("Display list of account category")},{name:this.$t("Taxes"),route:"/list/tax",desc:this.$t("Display list of sales tax")},{name:this.$t("Reporting Period"),route:"/list/reporting-period",desc:this.$t("Display list of reporting period")},{name:this.$t("Account Mappings"),route:"/list/account-mapping",desc:this.$t("Display list of account mappings")}]},{header:this.$t("General"),items:[{name:this.$t("Users"),route:"/list/users",desc:this.$t("Display list of users")},{name:this.$t("Permissions"),route:"/list/permissions",desc:this.$t("Display list of permissions")},{name:this.$t("Roles"),route:"/list/roles",desc:this.$t("Display list of roles")}]},{header:this.$t("Transaction"),items:[{name:this.$t("Currency"),route:"/list/currency",desc:this.$t("Display list of currency")},{name:"Product and services",route:"/app/item/list",desc:this.$t("Displays the products and services you sell. From here, you can edit information about a product or service, such as its description, or the rate you charge.")},{name:this.$t("Product category"),route:"/list/item-category",desc:this.$t("A means of classifying items that you sell to customers. Provide a way for you to quickly organize what you sell, and save you time when completing sales transaction forms.")},{name:this.$t("Product Units"),route:"/list/item-unit",desc:this.$t("Display list of item unit.")},{name:this.$t("Payment Term"),route:"/list/paymentterm",desc:this.$t("Displays the list of terms that determine the due dates for payments from customers, or payments to vendors. Terms can also specify discounts for early payment. From here, you can add or edit terms.")},{name:this.$t("Payment Method"),route:"/list/paymentmethod",desc:this.$t("Displays Cash, Check, and any other ways you categorize payments you receive from customers. That way, you can print deposit slips when you deposit the payments you have received.")}]},{header:this.$t("Payroll"),items:[{name:this.$t("Work Location"),route:"/list/work-location",desc:this.$t("Displays the list of work location.")},{name:this.$t("Pay Type"),route:"/list/pay-type",desc:this.$t("Displays the list of pay type")},{name:this.$t("Pay Schedule"),route:"/list/pay-schedule",desc:this.$t("Displays the list of pay schedule.")},{name:this.$t("Deduction"),route:"/list/deduction",desc:this.$t("Displays the list of deduction.")},{name:this.$t("Loan Type"),route:"/list/loan-type",desc:this.$t("Displays the list of loan type.")}]},{header:this.$t("Inventory"),items:[{name:this.$t("Warehouse"),route:"/list/warehouse",desc:this.$t("Displays the list of Warehouse.")}]},{header:"Other",items:[{name:this.$t("Attachments"),route:"/list/attachment",desc:this.$t("Displays the list of all attachments uploaded. From here you can add, edit, download, and export your attachments. You can also see all transactions linked to a particular attachment.")}]}]}},head:function(){return{title:"All Lists"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})}},H=ce,de=e(50),G=Object(de.a)(H,pe,z,!1,null,null,null),Ce=u.default=G.exports}}]);