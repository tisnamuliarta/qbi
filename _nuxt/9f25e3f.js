(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1074:function(P,M,e){"use strict";e.r(M);var c=e(596),p=e(633),d=e(165),C=e(249),O=e(88),D=e(587),j=e(247),Z=e(616),g=e(248),L=e(166),x=e(31),R=e(143),K=e(576),T=e(598),J=e(629),B=e(589),A=e(573),U=function(){var t=this,a=t._self._c;return a(c.a,{staticClass:"rounded",attrs:{flat:"",color:"white",dense:"",elevation:"0"}},[t.showBatchAction?a(d.a,{staticClass:"mr-0 pr-0",attrs:{icon:""}},[a(j.a,[t._v("mdi-arrow-down-left")])],1):t._e(),t._v(" "),t.showBatchAction?a(K.a,{attrs:{transition:"slide-y-transition","offset-y":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(l){var f=l.on,h=l.attrs;return[a(d.a,t._g(t._b({staticClass:"ml-0 mr-2",attrs:{small:"",color:"green",dark:"",elevation:"0"}},"v-btn",h,!1),f),[t._v(`
        Batch Action
        `),a(d.a,{attrs:{dark:"",small:"",icon:""}},[a(j.a,[t._v("mdi-menu-down")])],1)],1)]}}],null,!1,3625072657)},[t._v(" "),a(g.a,{attrs:{dense:""}},t._l(["Make Inactive"],function(i,l){return a(L.a,{key:l,attrs:{dense:""},on:{click:function(h){return t.makeInActive(i,t.doctype)}}},[a(x.a,[a(x.c,[t._v(t._s(i))])],1)],1)}),1)],1):t._e(),t._v(" "),a(K.a,{attrs:{"close-on-content-click":!1,"nudge-width":400,"max-width":"550px",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(l){var f=l.on,h=l.attrs;return[t.showFilter?a(d.a,t._g(t._b({staticClass:"d-none d-sm-flex",attrs:{small:"",outlined:"",color:"black",elevation:"0",dark:""}},"v-btn",h,!1),f),[t._v(`
        Filter
        `),a(d.a,{staticClass:"d-none d-sm-flex",attrs:{dark:"",color:"black",small:"",icon:""}},[a(j.a,[t._v("mdi-menu-down")])],1)],1):t._e()]}}]),model:{value:t.menu,callback:function(l){t.menu=l},expression:"menu"}},[t._v(" "),a(C.a,{attrs:{rounded:"",elevation:"10"}},[a(O.b,[a(T.a,{attrs:{dense:""}},[a(D.a,{attrs:{cols:"12",md:"4"}},[a(A.a,{attrs:{label:"Transaction",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),a(D.a,{attrs:{cols:"12",md:"4"}}),t._v(" "),a(D.a,{attrs:{cols:"12",md:"4"}}),t._v(" "),a(D.a,{attrs:{cols:"12",md:"4"}},[a(p.a,{attrs:{label:"Status",items:["All","Open","Draft","Cancel","Closed","Pending"],outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),a(D.a,{attrs:{cols:"12",md:"4"}},[a(A.a,{attrs:{label:"Delivery Method",outlined:"",dense:"","hide-details":"auto"}})],1),t._v(" "),a(D.a,{attrs:{cols:"12",md:"4"}}),t._v(" "),a(D.a,{attrs:{cols:"12",md:"4"}},[a(p.a,{attrs:{items:t.itemDateFilter,label:"Date Filter","return-object":"",outlined:"",dense:"","hide-details":"auto"},on:{change:t.changeDate},model:{value:t.form.date_filter,callback:function(l){t.$set(t.form,"date_filter",l)},expression:"form.date_filter"}})],1),t._v(" "),a(D.a,{attrs:{cols:"12",md:"4"}},[a(A.a,{attrs:{label:"Date From",outlined:"",dense:"",type:"date","hide-details":"auto"},model:{value:t.form.date_from,callback:function(l){t.$set(t.form,"date_from",l)},expression:"form.date_from"}})],1),t._v(" "),a(D.a,{attrs:{cols:"12",md:"4"}},[a(A.a,{attrs:{label:"Date To",outlined:"",dense:"",type:"date","hide-details":"auto"},model:{value:t.form.date_to,callback:function(l){t.$set(t.form,"date_to",l)},expression:"form.date_to"}})],1),t._v(" "),t.showZeroQty?a(D.a,{attrs:{cols:"12",md:"4"}},[a(J.a,{attrs:{items:["Yes","No"],label:"Show Zero Balance",outlined:"",dense:"",type:"date","hide-details":"auto"},model:{value:t.form.show_zero_balance,callback:function(l){t.$set(t.form,"show_zero_balance",l)},expression:"form.show_zero_balance"}})],1):t._e()],1)],1),t._v(" "),a(O.a,[a(d.a,{attrs:{text:"",small:""}},[t._v(" Cancel ")]),t._v(" "),a(B.a),t._v(" "),a(d.a,{attrs:{color:"primary",small:"",elevation:"0"},on:{click:t.passDataToToolbar}},[t._v(`
          Apply
        `)])],1)],1)],1),t._v(" "),a("div",{staticClass:"d-none d-sm-flex ml-2"},[a(Z.a,{attrs:{wrap:""}},[a(T.a,[a(D.a,{staticClass:"mt-0 mr-2",attrs:{cols:"12",md:"12",sm:"12"}},[t._t("search"),t._v(" "),t.showSearchFilter?a(A.a,{staticClass:"mt-1",attrs:{label:"search",outlined:"",dense:"","hide-details":"auto"},on:{change:t.getDataFromApi},model:{value:t.searchData,callback:function(l){t.searchData=l},expression:"searchData"}}):t._e()],2)],1)],1)],1),t._v(" "),a(B.a),t._v(" "),t.showBackLink?a("LazySetupBackList"):t._e(),t._v(" "),t.showNewData?a(d.a,{staticClass:"d-none d-sm-flex",attrs:{color:"primary",elevation:"0",small:""},on:{click:t.newData}},[t._v(`
    `+t._s(t.newDataText)+`
  `)]):t._e(),t._v(" "),t.showNewData?a(d.a,{staticClass:"d-flex d-sm-none",attrs:{color:"primary",elevation:"0",small:"",icon:""},on:{click:t.newData}},[a(j.a,[t._v("mdi-plus-box")])],1):t._e(),t._v(" "),t.showNewDataMultiple?a(d.a,{attrs:{small:"",color:"primary",elevation:"0"},on:{click:t.newData}},[t._v(`
    `+t._s(t.$t("New Transactions"))+`
  `)]):t._e(),t._v(" "),a(d.a,{staticClass:"ml-1 mr-1 d-none d-sm-flex",attrs:{loading:t.loading,icon:"",small:""},on:{click:function(l){return t.processAction("refresh")}}},[a(j.a,[t._v("mdi-refresh")])],1),t._v(" "),a(K.a,{staticClass:"d-flex d-sm-none",attrs:{"offset-y":"",left:"","nudge-width":120},scopedSlots:t._u([{key:"activator",fn:function(l){var f=l.on,h=l.attrs;return[a(d.a,t._g(t._b({staticClass:"d-flex d-sm-none",attrs:{icon:""}},"v-btn",h,!1),f),[a(j.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),a(g.a,{attrs:{dense:""}},t._l(t.itemsMenu,function(i,l){return a(L.a,{key:l,attrs:{link:"",dense:""},on:{click:function(h){return t.processAction(i.action)}}},[a(R.a,[a(j.a,{domProps:{textContent:t._s(i.icon)}})],1),t._v(" "),a(x.c,[t._v(t._s(i.title))])],1)}),1)],1)],1)},Q=[],W=e(24),et=e(73),N=e(21),st=e(268),V={name:"MainToolbar",props:{title:{type:String,default:""},doctype:{type:String,default:""},newDataRoute:{type:String,default:""},newDataType:{type:String,default:""},titleButton:{type:String,default:""},searchItem:{type:String,default:""},search:{type:String,default:""},filters:{type:String,default:""},searchStatus:{type:String,default:"Active"},documentStatus:{type:Array,default:function(){return[]}},buttonTitle:{type:String,default:"New"},newDataText:{type:String,default:"New"},showAdd:{type:Boolean,default:!0},filter:{type:Boolean,default:!0},showBatchAction:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showBackLink:{type:Boolean,default:!1},showNewData:{type:Boolean,default:!1},showNewDataMultiple:{type:Boolean,default:!1},showSearchFilter:{type:Boolean,default:!0},showZeroQty:{type:Boolean,default:!1},newDataMultipleItem:{type:Array,default:function(){return[]}},itemSearch:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,menu:!1,dialogFilter:!1,searchStatusData:this.searchStatus,searchItemData:this.searchItem,searchData:this.search,items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemDateFilter:[],form:{date_from:null,date_to:null,show_zero_balance:null,date_filter:null},itemsMenu:[{title:"Refresh",icon:"mdi-refresh",action:"refresh"},{title:"Print",icon:"mdi-printer",action:"print"},{title:"Export to excel",icon:"mdi-microsoft-excel",action:"export-excel"},{title:"Form Settings",icon:"mdi-cog",action:"setting"}]}},watch:{searchData:{handler:function(){this.$emit("emitData",{search:this.searchData})},deep:!0}},mounted:function(){this.getDateFilter()},methods:{newData:function(){this.$auth.$storage.setState("basePath",this.$route.path),this.$emit("newData")},getDateFilter:function(){var t=this;return Object(W.a)(regeneratorRuntime.mark(function a(){var i;return regeneratorRuntime.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,t.$axios.get("/api/date-filter");case 2:i=f.sent,t.itemDateFilter=i.data.date_filter;case 4:case"end":return f.stop()}},a)}))()},changeDate:function(){this.form.date_from=this.form.date_filter.date_from,this.form.date_to=this.form.date_filter.date_to},passDataToToolbar:function(t){this.menu=!1,this.$emit("emitData",{documentStatus:t.documentStatus,itemSearch:t.itemSearch,searchStatus:t.searchStatus,searchItem:t.searchItem,search:t.search,dateFrom:this.form.date_from,dateTo:this.form.date_to,show_zero_balance:this.form.show_zero_balance})},getDataFromApi:function(){this.$emit("getDataFromApi",{search:this.search})},processAction:function(t){switch(t){case"refresh":this.$emit("getDataFromApi");break;case"print":this.$emit("getDataFromApi");break;case"export-excel":this.$emit("getDataFromApi");break;case"setting":this.$emit("getDataFromApi");break}},makeInActive:function(){}}},Y=V,F=e(50),X=Object(F.a)(Y,U,Q,!1,null,null,null),z=M.default=X.exports},598:function(P,M,e){"use strict";var c=e(7),p=e.n(c),d=e(10),C=e.n(d),O=e(12),D=e.n(O),j=e(13),Z=e.n(j),g=e(2),L=e(4),x=e.n(L),R=e(34),K=e.n(R),T=e(51),J=e.n(T),B=e(28),A=e.n(B),U=e(8),Q=e.n(U),W=e(21),et=e.n(W),N=e(64),st=e.n(N),V=e(269),Y=e.n(V),F=e(33),X=e.n(F),z=e(270),E=e.n(z),t=e(271),a=e.n(t),i=e(272),l=e.n(i),f=e(273),h=e.n(f),G=e(274),n=e.n(G),s=e(275),o=e.n(s),r=e(276),I=e.n(r),y=e(277),at=e.n(y),ht=e(278),St=e.n(ht),vt=e(279),Lt=e.n(vt),Et=e(280),Rt=e.n(Et),Dt=e(281),Kt=e.n(Dt),pt=e(282),Ut=e.n(pt),Ot=e(35),Wt=e.n(Ot),Pt=e(9),Vt=e.n(Pt),Mt=e(283),Ft=e.n(Mt),jt=e(3),It=e(77),gt=e(1);function nt(v,u){var m=Object.keys(v);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(v);u&&(_=_.filter(function($){return Object.getOwnPropertyDescriptor(v,$).enumerable})),m.push.apply(m,_)}return m}function w(v){for(var u=1;u<arguments.length;u++){var m=arguments[u]!=null?arguments[u]:{};u%2?nt(Object(m),!0).forEach(function(_){Object(g.a)(v,_,m[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(m)):nt(Object(m)).forEach(function(_){Object.defineProperty(v,_,Object.getOwnPropertyDescriptor(m,_))})}return v}var yt=["sm","md","lg","xl"],H=["start","end","center"];function k(v,u){return yt.reduce(function(m,_){return m[v+Object(gt.I)(_)]=u(),m},{})}var ot=function(u){return[].concat(H,["baseline","stretch"]).includes(u)},lt=k("align",function(){return{type:String,default:null,validator:ot}}),rt=function(u){return[].concat(H,["space-between","space-around"]).includes(u)},_t=k("justify",function(){return{type:String,default:null,validator:rt}}),it=function(u){return[].concat(H,["space-between","space-around","stretch"]).includes(u)},ct=k("alignContent",function(){return{type:String,default:null,validator:it}}),dt={align:Object.keys(lt),justify:Object.keys(_t),alignContent:Object.keys(ct)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function At(v,u,m){var _=Ct[v];if(m!=null){if(u){var $=u.replace(v,"");_+="-".concat($)}return _+="-".concat(m),_.toLowerCase()}}var ut=new Map;M.a=jt.default.extend({name:"v-row",functional:!0,props:w(w(w({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ot}},lt),{},{justify:{type:String,default:null,validator:rt}},_t),{},{alignContent:{type:String,default:null,validator:it}},ct),render:function(u,m){var _=m.props,$=m.data,xt=m.children,q="";for(var Tt in _)q+=String(_[Tt]);var S=ut.get(q);return S||function(){var b;S=[];var tt;for(tt in dt)dt[tt].forEach(function(mt){var Bt=_[mt],ft=At(tt,mt,Bt);ft&&S.push(ft)});S.push((b={"no-gutters":_.noGutters,"row--dense":_.dense},Object(g.a)(b,"align-".concat(_.align),_.align),Object(g.a)(b,"justify-".concat(_.justify),_.justify),Object(g.a)(b,"align-content-".concat(_.alignContent),_.alignContent),b)),ut.set(q,S)}(),u(_.tag,Object(It.a)($,{staticClass:"row",class:S}),xt)}})},599:function(P,M,e){var c=e(376),p=e(47);P.exports=function(d,C,O){return O.get&&c(O.get,C,{getter:!0}),O.set&&c(O.set,C,{setter:!0}),p.f(d,C,O)}},612:function(P,M,e){var c=e(614);c.__esModule&&(c=c.default),typeof c=="string"&&(c=[[P.i,c,""]]),c.locals&&(P.exports=c.locals);var p=e(16).default,d=p("c6bd0f6a",c,!0,{sourceMap:!1})},614:function(P,M,e){var c=e(15),p=c(!1);p.push([P.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),P.exports=p},616:function(P,M,e){"use strict";var c=e(284),p=e.n(c),d=e(285);M.a=Object(d.a)("layout")},633:function(P,M,e){"use strict";var c=e(8),p=e.n(c),d=e(7),C=e.n(d),O=e(12),D=e.n(O),j=e(9),Z=e.n(j),g=e(13),L=e.n(g),x=e(2),R=e(59),K=e.n(R),T=e(4),J=e.n(T),B=e(10),A=e.n(B),U=e(79),Q=e.n(U),W=e(78),et=e.n(W),N=e(213),st=e.n(N),V=e(34),Y=e.n(V),F=e(51),X=e.n(F),z=e(612),E=e.n(z),t=e(629),a=e(573),i=e(77),l=e(1);function f(n,s){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);s&&(r=r.filter(function(I){return Object.getOwnPropertyDescriptor(n,I).enumerable})),o.push.apply(o,r)}return o}function h(n){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?f(Object(o),!0).forEach(function(r){Object(x.a)(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}var G=h(h({},t.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});M.a=t.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(s,o,r){return r.toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:t.a.options.props.menuProps.type,default:function(){return G}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},t.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var s=this;return this.selectedItems.map(function(o){return s.getValue(o)})},hasDisplayedItems:function(){var s=this;return this.hideSelected?this.filteredItems.some(function(o){return!s.hasItem(o)}):this.filteredItems.length>0},currentRange:function(){return this.selectedItem==null?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var s=this;return!this.isSearching||this.noFilter||this.internalSearch==null?this.allItems:this.allItems.filter(function(o){var r=Object(l.t)(o,s.itemText),I=r!=null?String(r):"";return s.filter(o,String(s.internalSearch),I)})},internalSearch:{get:function(){return this.lazySearch},set:function(s){this.lazySearch!==s&&(this.lazySearch=s,this.$emit("update:search-input",s))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return this.isFocused?this.hasDisplayedItems||!this.hideNoData:!1},$_menuProps:function(){var s=t.a.options.computed.$_menuProps.call(this);return s.contentClass="v-autocomplete__content ".concat(s.contentClass||"").trim(),h(h({},G),s)},searchIsDirty:function(){return this.internalSearch!=null&&this.internalSearch!==""},selectedItem:function(){var s=this;return this.multiple?null:this.selectedItems.find(function(o){return s.valueComparator(s.getValue(o),s.getValue(s.internalValue))})},listData:function(){var s=t.a.options.computed.listData.call(this);return s.props=h(h({},s.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),s}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(s){s?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(s){s||!this.hasSlot||(this.lazySearch=null)},items:function(s,o){!(o&&o.length)&&this.hideNoData&&this.isFocused&&!this.isMenuActive&&s.length&&this.activateMenu()},searchInput:function(s){this.lazySearch=s},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(s,o){var r=this;if(s!==o){if(!this.autoSelectFirst){var I=o[this.$refs.menu.listIndex];I?this.setMenuIndex(s.findIndex(function(y){return y===I})):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(function(){!r.internalSearch||s.length!==1&&!r.autoSelectFirst||(r.$refs.menu.getTiles(),r.autoSelectFirst&&s.length&&(r.setMenuIndex(0),r.$emit("update:list-index",r.$refs.menu.listIndex)))})}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(s){this.searchIsDirty||(this.multiple&&s===l.A.left?this.selectedIndex===-1?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&s===l.A.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:(s===l.A.backspace||s===l.A.delete)&&this.deleteCurrentItem())},deleteCurrentItem:function(){var s=this.selectedIndex,o=this.selectedItems[s];if(!(!this.isInteractive||this.getDisabled(o))){var r=this.selectedItems.length-1;if(this.selectedIndex===-1&&r!==0){this.selectedIndex=r;return}var I=this.selectedItems.length,y=s!==I-1?s:s-1,at=this.selectedItems[y];at?this.selectItem(o):this.setValue(this.multiple?[]:null),this.selectedIndex=y}},clearableCallback:function(){this.internalSearch=null,t.a.options.methods.clearableCallback.call(this)},genInput:function(){var s=a.a.options.methods.genInput.call(this);return s.data=Object(i.a)(s.data,{attrs:{"aria-activedescendant":Object(l.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(l.r)(s.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),s},genInputSlot:function(){var s=t.a.options.methods.genInputSlot.call(this);return s.data.attrs.role="combobox",s},genSelections:function(){return this.hasSlot||this.multiple?t.a.options.methods.genSelections.call(this):[]},onClick:function(s){!this.isInteractive||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(s.target)||this.activateMenu())},onInput:function(s){if(!(this.selectedIndex>-1||!s.target)){var o=s.target,r=o.value;o.value&&this.activateMenu(),!this.multiple&&r===""&&this.deleteCurrentItem(),this.internalSearch=r,this.badInput=o.validity&&o.validity.badInput}},onKeyDown:function(s){var o=s.keyCode;(s.ctrlKey||![l.A.home,l.A.end].includes(o))&&t.a.options.methods.onKeyDown.call(this,s),this.changeSelectedIndex(o)},onSpaceDown:function(s){},onTabDown:function(s){t.a.options.methods.onTabDown.call(this,s),this.updateSelf()},onUpDown:function(s){s.preventDefault(),this.activateMenu()},selectItem:function(s){t.a.options.methods.selectItem.call(this,s),this.setSearch()},setSelectedItems:function(){t.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var s=this;this.$nextTick(function(){(!s.multiple||!s.internalSearch||!s.isMenuActive)&&(s.internalSearch=!s.selectedItems.length||s.multiple||s.hasSlot?null:s.getText(s.selectedItem))})},updateSelf:function(){!this.searchIsDirty&&!this.internalValue||!this.multiple&&!this.valueComparator(this.internalSearch,this.getValue(this.internalValue))&&this.setSearch()},hasItem:function(s){return this.selectedValues.indexOf(this.getValue(s))>-1},onCopy:function(s){var o,r;if(this.selectedIndex!==-1){var I=this.selectedItems[this.selectedIndex],y=this.getText(I);(o=s.clipboardData)===null||o===void 0||o.setData("text/plain",y),(r=s.clipboardData)===null||r===void 0||r.setData("text/vnd.vuetify.autocomplete.item+plain",y),s.preventDefault()}}}})}}]);
