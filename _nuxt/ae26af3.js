(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1031:function(p,D,t){"use strict";t.r(D);var c=function(){var o=this,f=o.$createElement,l=o._self._c||f;return l("v-row",{attrs:{"no-gutters":""}},[l("v-col",{staticClass:"pr-md-3 pl-md-3",attrs:{cols:"12"}},o._l(o.accountMapping,function(C,I){return l("v-row",{key:I,attrs:{"no-gutters":""}},[l("v-col",{staticClass:"mb-2",attrs:{cols:"12"}},[l("v-subheader",[o._v(o._s(C.type))]),o._v(" "),l("v-divider")],1),o._v(" "),o._l(C.items,function(E){return l("v-col",{key:E.id,staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12",md:"6"}},[l("v-autocomplete",{attrs:{items:o.itemAccounts,label:E.label,"item-value":"id","item-text":"name",outlined:"",clearable:"",dense:"","hide-details":"auto"},model:{value:o.form[E.name],callback:function(y){o.$set(o.form,E.name,y)},expression:"form[child.name]"}})],1)})],2)}),1)],1)},j=[],M=t(17),tt=t(4),W=t(10),et=t(215),S=t(29),N={name:"EmailSetup",props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{itemAccounts:[],accountMapping:[],form:this.formData,paperSize:["A4 Portrait","A4 Landscape","Letter Portrait","Letter Landscape"]}},created:function(){this.getAccounts(),this.getAccountMapping()},methods:{getAccountMapping:function(){var f=this,l=this;this.$axios.get("/api/financial/account-mapping").then(function(C){f.accountMapping=C.data.data,Object.entries(l.accountMapping).forEach(function(I){var E=Object(M.a)(I,2),y=E[0],X=E[1];Object.entries(X.items).forEach(function(R){var $=Object(M.a)(R,2),d=$[0],K=$[1];l.form[K.name]=K.account_id})})})},getAccounts:function(){var f=this;this.$axios.get("/api/financial/accounts",{params:{type:"All"}}).then(function(l){f.itemAccounts=l.data.data.rows}).catch(function(l){f.$swal({type:"error",title:"Error",text:l.response.data.message})})},getForm:function(){return this.form},setForm:function(f){this.form=Object.assign({},f),this.getAccountMapping()}}},P=N,V=t(50),F=t(51),T=t.n(F),G=t(643),L=t(581),J=t(572),x=t(595),H=t(820),g=Object(V.a)(P,c,j,!1,null,null,null),st=D.default=g.exports;T()(g,{VAutocomplete:G.a,VCol:L.a,VDivider:J.a,VRow:x.a,VSubheader:H.a})},595:function(p,D,t){"use strict";var c=t(7),j=t.n(c),M=t(9),tt=t.n(M),W=t(12),et=t.n(W),S=t(13),N=t.n(S),P=t(1),V=t(4),F=t.n(V),T=t(33),G=t.n(T),L=t(52),J=t.n(L),x=t(27),H=t.n(x),g=t(8),st=t.n(g),o=t(21),f=t.n(o),l=t(65),C=t.n(l),I=t(266),E=t.n(I),y=t(32),X=t.n(y),R=t(267),$=t.n(R),d=t(268),K=t.n(d),Y=t(269),h=t.n(Y),z=t(270),v=t.n(z),b=t(271),s=t.n(b),e=t(272),n=t.n(e),_=t(273),m=t.n(_),O=t(274),nt=t.n(O),ht=t(275),Rt=t.n(ht),Et=t(276),Kt=t.n(Et),vt=t(277),Bt=t.n(vt),Ot=t(278),Ut=t.n(Ot),pt=t(279),Wt=t.n(pt),Dt=t(35),St=t.n(Dt),jt=t(10),Vt=t.n(jt),Pt=t(280),Ft=t.n(Pt),Mt=t(2),It=t(78),gt=t(0);function _t(u,r){var i=Object.keys(u);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(u);r&&(a=a.filter(function(B){return Object.getOwnPropertyDescriptor(u,B).enumerable})),i.push.apply(i,a)}return i}function Q(u){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?_t(Object(i),!0).forEach(function(a){Object(P.a)(u,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(i)):_t(Object(i)).forEach(function(a){Object.defineProperty(u,a,Object.getOwnPropertyDescriptor(i,a))})}return u}var Ct=["sm","md","lg","xl"],Z=["start","end","center"];function w(u,r){return Ct.reduce(function(i,a){return i[u+Object(gt.H)(a)]=r(),i},{})}var at=function(r){return[].concat(Z,["baseline","stretch"]).includes(r)},ot=w("align",function(){return{type:String,default:null,validator:at}}),rt=function(r){return[].concat(Z,["space-between","space-around"]).includes(r)},lt=w("justify",function(){return{type:String,default:null,validator:rt}}),it=function(r){return[].concat(Z,["space-between","space-around","stretch"]).includes(r)},ct=w("alignContent",function(){return{type:String,default:null,validator:it}}),ut={align:Object.keys(ot),justify:Object.keys(lt),alignContent:Object.keys(ct)},yt={align:"align",justify:"justify",alignContent:"align-content"};function At(u,r,i){var a=yt[u];if(i!=null){if(r){var B=r.replace(u,"");a+="-".concat(B)}return a+="-".concat(i),a.toLowerCase()}}var dt=new Map;D.a=Mt.default.extend({name:"v-row",functional:!0,props:Q(Q(Q({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:at}},ot),{},{justify:{type:String,default:null,validator:rt}},lt),{},{alignContent:{type:String,default:null,validator:it}},ct),render:function(r,i){var a=i.props,B=i.data,Tt=i.children,k="";for(var Lt in a)k+=String(a[Lt]);var A=dt.get(k);return A||function(){var U;A=[];var q;for(q in ut)ut[q].forEach(function(mt){var xt=a[mt],ft=At(q,mt,xt);ft&&A.push(ft)});A.push((U={"no-gutters":a.noGutters,"row--dense":a.dense},Object(P.a)(U,"align-".concat(a.align),a.align),Object(P.a)(U,"justify-".concat(a.justify),a.justify),Object(P.a)(U,"align-content-".concat(a.alignContent),a.alignContent),U)),dt.set(k,A)}(),r(a.tag,Object(It.a)(B,{staticClass:"row",class:A}),Tt)}})},624:function(p,D,t){var c=t(626);c.__esModule&&(c=c.default),typeof c=="string"&&(c=[[p.i,c,""]]),c.locals&&(p.exports=c.locals);var j=t(15).default,M=j("c6bd0f6a",c,!0,{sourceMap:!1})},626:function(p,D,t){var c=t(14),j=c(!1);j.push([p.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),p.exports=j},643:function(p,D,t){"use strict";var c=t(8),j=t.n(c),M=t(7),tt=t.n(M),W=t(12),et=t.n(W),S=t(10),N=t.n(S),P=t(13),V=t.n(P),F=t(1),T=t(60),G=t.n(T),L=t(4),J=t.n(L),x=t(9),H=t.n(x),g=t(80),st=t.n(g),o=t(79),f=t.n(o),l=t(214),C=t.n(l),I=t(33),E=t.n(I),y=t(52),X=t.n(y),R=t(624),$=t.n(R),d=t(637),K=t(570),Y=t(78),h=t(0);function z(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(s);e&&(_=_.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),n.push.apply(n,_)}return n}function v(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(_){Object(F.a)(s,_,n[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(_){Object.defineProperty(s,_,Object.getOwnPropertyDescriptor(n,_))})}return s}var b=v(v({},d.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});D.a=d.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,n,_){return _.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:d.a.options.props.menuProps.type,default:function(){return b}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return v(v({},d.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map(function(n){return e.getValue(n)})},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some(function(n){return!e.hasItem(n)}):this.filteredItems.length>0},currentRange:function(){return this.selectedItem==null?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||this.internalSearch==null?this.allItems:this.allItems.filter(function(n){var _=Object(h.s)(n,e.itemText),m=_!=null?String(_):"";return e.filter(n,String(e.internalSearch),m)})},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return this.isFocused?this.hasDisplayedItems||!this.hideNoData:!1},$_menuProps:function(){var e=d.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),v(v({},b),e)},searchIsDirty:function(){return this.internalSearch!=null&&this.internalSearch!==""},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find(function(n){return e.valueComparator(e.getValue(n),e.getValue(e.internalValue))})},listData:function(){var e=d.a.options.computed.listData.call(this);return e.props=v(v({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){e||!this.hasSlot||(this.lazySearch=null)},items:function(e,n){!(n&&n.length)&&this.hideNoData&&this.isFocused&&!this.isMenuActive&&e.length&&this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,n){var _=this;if(e!==n){if(!this.autoSelectFirst){var m=n[this.$refs.menu.listIndex];m?this.setMenuIndex(e.findIndex(function(O){return O===m})):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(function(){!_.internalSearch||e.length!==1&&!_.autoSelectFirst||(_.$refs.menu.getTiles(),_.autoSelectFirst&&e.length&&(_.setMenuIndex(0),_.$emit("update:list-index",_.$refs.menu.listIndex)))})}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===h.z.left?this.selectedIndex===-1?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===h.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:(e===h.z.backspace||e===h.z.delete)&&this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,n=this.selectedItems[e];if(!(!this.isInteractive||this.getDisabled(n))){var _=this.selectedItems.length-1;if(this.selectedIndex===-1&&_!==0){this.selectedIndex=_;return}var m=this.selectedItems.length,O=e!==m-1?e:e-1,nt=this.selectedItems[O];nt?this.selectItem(n):this.setValue(this.multiple?[]:null),this.selectedIndex=O}},clearableCallback:function(){this.internalSearch=null,d.a.options.methods.clearableCallback.call(this)},genInput:function(){var e=K.a.options.methods.genInput.call(this);return e.data=Object(Y.a)(e.data,{attrs:{"aria-activedescendant":Object(h.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.q)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=d.a.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?d.a.options.methods.genSelections.call(this):[]},onClick:function(e){!this.isInteractive||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1||!e.target)){var n=e.target,_=n.value;n.value&&this.activateMenu(),!this.multiple&&_===""&&this.deleteCurrentItem(),this.internalSearch=_,this.badInput=n.validity&&n.validity.badInput}},onKeyDown:function(e){var n=e.keyCode;(e.ctrlKey||![h.z.home,h.z.end].includes(n))&&d.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(n)},onSpaceDown:function(e){},onTabDown:function(e){d.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){d.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){d.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick(function(){(!e.multiple||!e.internalSearch||!e.isMenuActive)&&(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))})},updateSelf:function(){!this.searchIsDirty&&!this.internalValue||!this.multiple&&!this.valueComparator(this.internalSearch,this.getValue(this.internalValue))&&this.setSearch()},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var n,_;if(this.selectedIndex!==-1){var m=this.selectedItems[this.selectedIndex],O=this.getText(m);(n=e.clipboardData)==null||n.setData("text/plain",O),(_=e.clipboardData)==null||_.setData("text/vnd.vuetify.autocomplete.item+plain",O),e.preventDefault()}}}})}}]);