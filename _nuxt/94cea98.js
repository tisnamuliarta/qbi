(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1109:function(v,j,t){"use strict";t.r(j);var l=t(635),O=t(579),g=t(595),C=t(587),f=t(248),z=t(166),A=t(252),N=t(254),h=t(31),U=t(600),G=t(21),W=t(270),et=t(27),x=function(){var o=this,c=o._self._c;return c(C.a,{attrs:{fluid:""}},[c(U.a,{attrs:{"no-gutters":""}},[c(g.a,{attrs:{cols:"12",md:"12"}},[c(l.a,{attrs:{items:o.items,loading:o.isLoading,"search-input":o.search,chips:"",clearable:"","hide-details":"","hide-selected":"","item-text":"name","item-value":"symbol",label:"Search for a coin...",solo:"",dense:""},on:{"update:searchInput":function(m){o.search=m},"update:search-input":function(m){o.search=m}},scopedSlots:o._u([{key:"no-data",fn:function(){return[c(z.a,[c(h.d,[o._v(`
              Search for your favorite
              `),c("strong",[o._v("Cryptocurrency")])])],1)]},proxy:!0},{key:"selection",fn:function(m){var p=m.attr,H=m.on,B=m.item,Q=m.selected;return[c(O.a,o._g(o._b({staticClass:"white--text",attrs:{"input-value":Q,color:"blue-grey"}},"v-chip",p,!1),H),[c(f.a,{attrs:{left:""}},[o._v(" mdi-bitcoin ")]),o._v(" "),c("span",{domProps:{textContent:o._s(B.name)}})],1)]}},{key:"item",fn:function(m){var p=m.item;return[c(N.a,{staticClass:"text-h5 font-weight-light white--text",attrs:{color:"indigo"}},[o._v(`
            `+o._s(p.name.charAt(0))+`
          `)]),o._v(" "),c(h.b,[c(h.d,{domProps:{textContent:o._s(p.name)}}),o._v(" "),c(h.c,{domProps:{textContent:o._s(p.symbol)}})],1),o._v(" "),c(A.a,[c(f.a,[o._v("mdi-bitcoin")])],1)]}}]),model:{value:o.model,callback:function(m){o.model=m},expression:"model"}})],1)],1)],1)},J=[],L={name:"SettingList",data:function(){return{dialog:!1,isLoading:!1,items:[],model:null,search:null,tab:null}},methods:{openDialog:function(){this.dialog=!0},openAction:function(o){this.$emit("openAction",{item:o.item}),this.dialog=!1}}},X=L,T=t(50),Y=Object(T.a)(X,x,J,!1,null,null,null),V=j.default=Y.exports},600:function(v,j,t){"use strict";var l=t(7),O=t.n(l),g=t(10),C=t.n(g),f=t(12),z=t.n(f),A=t(13),N=t.n(A),h=t(2),U=t(4),G=t.n(U),W=t(34),et=t.n(W),x=t(51),J=t.n(x),L=t(28),X=t.n(L),T=t(8),Y=t.n(T),V=t(21),R=t.n(V),o=t(64),c=t.n(o),P=t(271),m=t.n(P),p=t(33),H=t.n(p),B=t(272),Q=t.n(B),d=t(273),st=t.n(d),Z=t(274),D=t.n(Z),F=t(275),I=t.n(F),$=t(276),s=t.n($),e=t(277),n=t.n(e),_=t(278),E=t.n(_),M=t(279),nt=t.n(M),ht=t(280),Rt=t.n(ht),Et=t(281),Bt=t.n(Et),vt=t(282),Kt=t.n(vt),Ot=t(283),St=t.n(Ot),Dt=t(284),Ut=t.n(Dt),jt=t(35),Wt=t.n(jt),Pt=t(9),Vt=t.n(Pt),pt=t(285),Ft=t.n(pt),It=t(3),Mt=t(77),gt=t(1);function _t(u,r){var i=Object.keys(u);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(u);r&&(a=a.filter(function(K){return Object.getOwnPropertyDescriptor(u,K).enumerable})),i.push.apply(i,a)}return i}function b(u){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?_t(Object(i),!0).forEach(function(a){Object(h.a)(u,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(i)):_t(Object(i)).forEach(function(a){Object.defineProperty(u,a,Object.getOwnPropertyDescriptor(i,a))})}return u}var Ct=["sm","md","lg","xl"],w=["start","end","center"];function k(u,r){return Ct.reduce(function(i,a){return i[u+Object(gt.I)(a)]=r(),i},{})}var ot=function(r){return[].concat(w,["baseline","stretch"]).includes(r)},at=k("align",function(){return{type:String,default:null,validator:ot}}),lt=function(r){return[].concat(w,["space-between","space-around"]).includes(r)},rt=k("justify",function(){return{type:String,default:null,validator:lt}}),it=function(r){return[].concat(w,["space-between","space-around","stretch"]).includes(r)},ct=k("alignContent",function(){return{type:String,default:null,validator:it}}),ut={align:Object.keys(at),justify:Object.keys(rt),alignContent:Object.keys(ct)},yt={align:"align",justify:"justify",alignContent:"align-content"};function At(u,r,i){var a=yt[u];if(i!=null){if(r){var K=r.replace(u,"");a+="-".concat(K)}return a+="-".concat(i),a.toLowerCase()}}var dt=new Map;j.a=It.default.extend({name:"v-row",functional:!0,props:b(b(b({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ot}},at),{},{justify:{type:String,default:null,validator:lt}},rt),{},{alignContent:{type:String,default:null,validator:it}},ct),render:function(r,i){var a=i.props,K=i.data,xt=i.children,q="";for(var Lt in a)q+=String(a[Lt]);var y=dt.get(q);return y||function(){var S;y=[];var tt;for(tt in ut)ut[tt].forEach(function(mt){var Tt=a[mt],ft=At(tt,mt,Tt);ft&&y.push(ft)});y.push((S={"no-gutters":a.noGutters,"row--dense":a.dense},Object(h.a)(S,"align-".concat(a.align),a.align),Object(h.a)(S,"justify-".concat(a.justify),a.justify),Object(h.a)(S,"align-content-".concat(a.alignContent),a.alignContent),S)),dt.set(q,y)}(),r(a.tag,Object(Mt.a)(K,{staticClass:"row",class:y}),xt)}})},601:function(v,j,t){var l=t(378),O=t(47);v.exports=function(g,C,f){return f.get&&l(f.get,C,{getter:!0}),f.set&&l(f.set,C,{setter:!0}),O.f(g,C,f)}},614:function(v,j,t){var l=t(616);l.__esModule&&(l=l.default),typeof l=="string"&&(l=[[v.i,l,""]]),l.locals&&(v.exports=l.locals);var O=t(16).default,g=O("c6bd0f6a",l,!0,{sourceMap:!1})},616:function(v,j,t){var l=t(15),O=l(!1);O.push([v.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),v.exports=O},635:function(v,j,t){"use strict";var l=t(8),O=t.n(l),g=t(7),C=t.n(g),f=t(12),z=t.n(f),A=t(9),N=t.n(A),h=t(13),U=t.n(h),G=t(2),W=t(59),et=t.n(W),x=t(4),J=t.n(x),L=t(10),X=t.n(L),T=t(79),Y=t.n(T),V=t(78),R=t.n(V),o=t(213),c=t.n(o),P=t(34),m=t.n(P),p=t(51),H=t.n(p),B=t(614),Q=t.n(B),d=t(631),st=t(575),Z=t(77),D=t(1);function F(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(s);e&&(_=_.filter(function(E){return Object.getOwnPropertyDescriptor(s,E).enumerable})),n.push.apply(n,_)}return n}function I(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?F(Object(n),!0).forEach(function(_){Object(G.a)(s,_,n[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(_){Object.defineProperty(s,_,Object.getOwnPropertyDescriptor(n,_))})}return s}var $=I(I({},d.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});j.a=d.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,n,_){return _.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:d.a.options.props.menuProps.type,default:function(){return $}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return I(I({},d.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map(function(n){return e.getValue(n)})},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some(function(n){return!e.hasItem(n)}):this.filteredItems.length>0},currentRange:function(){return this.selectedItem==null?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||this.internalSearch==null?this.allItems:this.allItems.filter(function(n){var _=Object(D.t)(n,e.itemText),E=_!=null?String(_):"";return e.filter(n,String(e.internalSearch),E)})},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return this.isFocused?this.hasDisplayedItems||!this.hideNoData:!1},$_menuProps:function(){var e=d.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),I(I({},$),e)},searchIsDirty:function(){return this.internalSearch!=null&&this.internalSearch!==""},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find(function(n){return e.valueComparator(e.getValue(n),e.getValue(e.internalValue))})},listData:function(){var e=d.a.options.computed.listData.call(this);return e.props=I(I({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){e||!this.hasSlot||(this.lazySearch=null)},items:function(e,n){!(n&&n.length)&&this.hideNoData&&this.isFocused&&!this.isMenuActive&&e.length&&this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,n){var _=this;if(e!==n){if(!this.autoSelectFirst){var E=n[this.$refs.menu.listIndex];E?this.setMenuIndex(e.findIndex(function(M){return M===E})):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(function(){!_.internalSearch||e.length!==1&&!_.autoSelectFirst||(_.$refs.menu.getTiles(),_.autoSelectFirst&&e.length&&(_.setMenuIndex(0),_.$emit("update:list-index",_.$refs.menu.listIndex)))})}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===D.A.left?this.selectedIndex===-1?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===D.A.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:(e===D.A.backspace||e===D.A.delete)&&this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,n=this.selectedItems[e];if(!(!this.isInteractive||this.getDisabled(n))){var _=this.selectedItems.length-1;if(this.selectedIndex===-1&&_!==0){this.selectedIndex=_;return}var E=this.selectedItems.length,M=e!==E-1?e:e-1,nt=this.selectedItems[M];nt?this.selectItem(n):this.setValue(this.multiple?[]:null),this.selectedIndex=M}},clearableCallback:function(){this.internalSearch=null,d.a.options.methods.clearableCallback.call(this)},genInput:function(){var e=st.a.options.methods.genInput.call(this);return e.data=Object(Z.a)(e.data,{attrs:{"aria-activedescendant":Object(D.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(D.r)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=d.a.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?d.a.options.methods.genSelections.call(this):[]},onClick:function(e){!this.isInteractive||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1||!e.target)){var n=e.target,_=n.value;n.value&&this.activateMenu(),!this.multiple&&_===""&&this.deleteCurrentItem(),this.internalSearch=_,this.badInput=n.validity&&n.validity.badInput}},onKeyDown:function(e){var n=e.keyCode;(e.ctrlKey||![D.A.home,D.A.end].includes(n))&&d.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(n)},onSpaceDown:function(e){},onTabDown:function(e){d.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){d.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){d.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick(function(){(!e.multiple||!e.internalSearch||!e.isMenuActive)&&(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))})},updateSelf:function(){!this.searchIsDirty&&!this.internalValue||!this.multiple&&!this.valueComparator(this.internalSearch,this.getValue(this.internalValue))&&this.setSearch()},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var n,_;if(this.selectedIndex!==-1){var E=this.selectedItems[this.selectedIndex],M=this.getText(E);(n=e.clipboardData)===null||n===void 0||n.setData("text/plain",M),(_=e.clipboardData)===null||_===void 0||_.setData("text/vnd.vuetify.autocomplete.item+plain",M),e.preventDefault()}}}})}}]);