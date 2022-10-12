(window.webpackJsonp=window.webpackJsonp||[]).push([[22,31],{1087:function(I,p,e){"use strict";e.r(p);var c=e(635),v=e(165),f=e(595),j=e(587),P=e(910),C=e(625),x=e(578),A=e(600),y=e(575),T=function(){var s=this,l=s._self._c;return l("div",[l("DialogForm",{ref:"dialogForm",attrs:{"max-width":"500px","dialog-title":s.formTitle,"button-title":"Save"},scopedSlots:s._u([{key:"content",fn:function(){return[l(C.a,{staticClass:"pt-2"},[l(j.a,[l(A.a,{attrs:{"no-gutters":""}},[l(f.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l(c.a,{attrs:{items:s.itemStatus,label:"Status",outlined:"","persistent-hint":"",dense:"","hide-details":"auto"},model:{value:s.form.status,callback:function(r){s.$set(s.form,"status",r)},expression:"form.status"}})],1),s._v(" "),l(f.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l(y.a,{attrs:{label:"Period Count",outlined:"",dense:"",type:"number","hide-details":"auto"},model:{value:s.form.period_count,callback:function(r){s.$set(s.form,"period_count",r)},expression:"form.period_count"}})],1),s._v(" "),l(f.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l(y.a,{attrs:{label:"Year",outlined:"",dense:"",type:"number","hide-details":"auto"},model:{value:s.form.calendar_year,callback:function(r){s.$set(s.form,"calendar_year",r)},expression:"form.calendar_year"}})],1),s._v(" "),l(f.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[l(x.a,{ref:"menu3",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:s._u([{key:"activator",fn:function(r){var S=r.on,B=r.attrs;return[l(y.a,s._g(s._b({attrs:{label:"Closing Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:s.form.closing_date,callback:function(U){s.$set(s.form,"closing_date",U)},expression:"form.closing_date"}},"v-text-field",B,!1),S))]}}]),model:{value:s.menu3,callback:function(r){s.menu3=r},expression:"menu3"}},[s._v(" "),l(P.a,{attrs:{"no-title":""},on:{input:function(r){s.menu3=!1}},model:{value:s.form.closing_date,callback:function(r){s.$set(s.form,"closing_date",r)},expression:"form.closing_date"}})],1)],1)],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[l(v.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:s.submitLoad},on:{click:function(r){return s.save()}}},[s._v(`
        `+s._s(s.buttonTitle)+`
      `)])]},proxy:!0}])}),s._v(" "),l("LazyInventoryFormMaster",{ref:"formMaster",on:{returnData:s.returnData}})],1)},M=[],L=e(58),R={name:"FormAccount",props:{formTitle:{type:String,default:""},buttonTitle:{type:String,default:""},url:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,submitLoad:!1,form:this.formData,itemStatus:[],itemBank:[],itemTax:[],menu3:"",statusProcessing:"insert"}},methods:{newData:function(s){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},s),this.itemStatus=this.form.status_list},editItem:function(s,l){this.$refs.dialogForm.openDialog(),this.form=Object.assign({},s),this.statusProcessing="update",this.itemStatus=l.status_list},returnData:function(s){s.type==="Banks"?this.itemBank=s.item:s.type==="Item Unit"&&(this.itemUnit=s.item)},close:function(){var s=this;this.$refs.dialogForm.closeDialog(),this.statusProcessing="insert",setTimeout(function(){s.form=Object.assign({},s.defaultItem)},300)},save:function(){var s=this,l=this.statusProcessing;l==="insert"?(this.store("post",this.url,this.form),s.submitLoad=!1):l==="update"&&(this.store("put",this.url+"/"+this.form.id,this.form),s.submitLoad=!1)},store:function(s,l,F){var d=this,r=this;r.submitLoad=!0,this.$axios({method:s,url:l,data:F}).then(function(S){d.$refs.dialogForm.closeDialog(),d.$emit("getDataFromApi")}).catch(function(S){d.$swal({type:"error",title:"Error",text:S.response.data.message}),r.submitLoad=!1})}}},b=R,D=e(50),o=Object(D.a)(b,T,M,!1,null,null,null),u=p.default=o.exports;installComponents(o,{DialogForm:e(602).default})},602:function(I,p,e){"use strict";e.r(p);var c=e(165),v=e(250),f=e(87),j=e(596),P=e(577),C=e(248),x=e(589),A=function(){var o=this,u=o._self._c;return u(j.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:o.original,"max-width":o.maxWidth,transition:"dialog-top-transition"},model:{value:o.dialog,callback:function(s){o.dialog=s},expression:"dialog"}},[u(v.a,{attrs:{outlined:""}},[u(f.c,[u("span",{staticClass:"subtitle-2"},[o._v(o._s(o.dialogTitle))]),o._v(" "),u(x.a),o._v(" "),u(c.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(s){return o.closeDialog()}}},[u(C.a,[o._v("mdi-close")])],1)],1),o._v(" "),u(P.a),o._v(" "),u(f.b,{staticClass:"pr-0 pl-0"},[o._t("content")],2),o._v(" "),u(P.a),o._v(" "),u(f.a,[o._t("addLine"),o._v(" "),u(x.a),o._v(" "),o._t("saveData")],2)],1)],1)},y=[],T={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},M=T,L=e(50),R=Object(L.a)(M,A,y,!1,null,null,null),b=p.default=R.exports},615:function(I,p,e){var c=e(616);c.__esModule&&(c=c.default),typeof c=="string"&&(c=[[I.i,c,""]]),c.locals&&(I.exports=c.locals);var v=e(16).default,f=v("c6bd0f6a",c,!0,{sourceMap:!1})},616:function(I,p,e){var c=e(15),v=c(!1);v.push([I.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),I.exports=v},635:function(I,p,e){"use strict";var c=e(8),v=e.n(c),f=e(7),j=e.n(f),P=e(12),C=e.n(P),x=e(9),A=e.n(x),y=e(13),T=e.n(y),M=e(2),L=e(59),R=e.n(L),b=e(4),D=e.n(b),o=e(10),u=e.n(o),m=e(79),s=e.n(m),l=e(78),F=e.n(l),d=e(213),r=e.n(d),S=e(34),B=e.n(S),K=e(51),U=e.n(K),$=e(615),Y=e.n($),h=e(631),z=e(575),N=e(77),g=e(1);function V(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(_){return Object.getOwnPropertyDescriptor(n,_).enumerable})),i.push.apply(i,a)}return i}function E(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?V(Object(i),!0).forEach(function(a){Object(M.a)(n,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):V(Object(i)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(i,a))})}return n}var W=E(E({},h.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});p.a=h.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,i,a){return a.toLocaleLowerCase().indexOf(i.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:h.a.options.props.menuProps.type,default:function(){return W}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return E(E({},h.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map(function(i){return t.getValue(i)})},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some(function(i){return!t.hasItem(i)}):this.filteredItems.length>0},currentRange:function(){return this.selectedItem==null?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||this.internalSearch==null?this.allItems:this.allItems.filter(function(i){var a=Object(g.t)(i,t.itemText),_=a!=null?String(a):"";return t.filter(i,String(t.internalSearch),_)})},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return this.isFocused?this.hasDisplayedItems||!this.hideNoData:!1},$_menuProps:function(){var t=h.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),E(E({},W),t)},searchIsDirty:function(){return this.internalSearch!=null&&this.internalSearch!==""},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find(function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))})},listData:function(){var t=h.a.options.computed.listData.call(this);return t.props=E(E({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){t||!this.hasSlot||(this.lazySearch=null)},items:function(t,i){!(i&&i.length)&&this.hideNoData&&this.isFocused&&!this.isMenuActive&&t.length&&this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,i){var a=this;if(t!==i){if(!this.autoSelectFirst){var _=i[this.$refs.menu.listIndex];_?this.setMenuIndex(t.findIndex(function(O){return O===_})):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(function(){!a.internalSearch||t.length!==1&&!a.autoSelectFirst||(a.$refs.menu.getTiles(),a.autoSelectFirst&&t.length&&(a.setMenuIndex(0),a.$emit("update:list-index",a.$refs.menu.listIndex)))})}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===g.A.left?this.selectedIndex===-1?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===g.A.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:(t===g.A.backspace||t===g.A.delete)&&this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,i=this.selectedItems[t];if(!(!this.isInteractive||this.getDisabled(i))){var a=this.selectedItems.length-1;if(this.selectedIndex===-1&&a!==0){this.selectedIndex=a;return}var _=this.selectedItems.length,O=t!==_-1?t:t-1,J=this.selectedItems[O];J?this.selectItem(i):this.setValue(this.multiple?[]:null),this.selectedIndex=O}},clearableCallback:function(){this.internalSearch=null,h.a.options.methods.clearableCallback.call(this)},genInput:function(){var t=z.a.options.methods.genInput.call(this);return t.data=Object(N.a)(t.data,{attrs:{"aria-activedescendant":Object(g.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(g.r)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=h.a.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?h.a.options.methods.genSelections.call(this):[]},onClick:function(t){!this.isInteractive||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1||!t.target)){var i=t.target,a=i.value;i.value&&this.activateMenu(),!this.multiple&&a===""&&this.deleteCurrentItem(),this.internalSearch=a,this.badInput=i.validity&&i.validity.badInput}},onKeyDown:function(t){var i=t.keyCode;(t.ctrlKey||![g.A.home,g.A.end].includes(i))&&h.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(i)},onSpaceDown:function(t){},onTabDown:function(t){h.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){h.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){h.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick(function(){(!t.multiple||!t.internalSearch||!t.isMenuActive)&&(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))})},updateSelf:function(){!this.searchIsDirty&&!this.internalValue||!this.multiple&&!this.valueComparator(this.internalSearch,this.getValue(this.internalValue))&&this.setSearch()},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var i,a;if(this.selectedIndex!==-1){var _=this.selectedItems[this.selectedIndex],O=this.getText(_);(i=t.clipboardData)===null||i===void 0||i.setData("text/plain",O),(a=t.clipboardData)===null||a===void 0||a.setData("text/vnd.vuetify.autocomplete.item+plain",O),t.preventDefault()}}}})}}]);
