(window.webpackJsonp=window.webpackJsonp||[]).push([[278,31],{598:function(j,E,t){"use strict";var _=t(7),D=t.n(_),h=t(10),y=t.n(h),P=t(12),W=t.n(P),A=t(13),U=t.n(A),M=t(2),T=t(4),V=t.n(T),L=t(34),z=t.n(L),S=t(51),C=t.n(S),l=t(28),O=t.n(l),B=t(8),F=t.n(B),J=t(21),et=t.n(J),X=t(64),st=t.n(X),R=t(269),Y=t.n(R),$=t(33),Q=t.n($),b=t(270),H=t.n(b),p=t(271),u=t.n(p),s=t(272),a=t.n(s),c=t(273),d=t.n(c),g=t(274),n=t.n(g),e=t(275),o=t.n(e),r=t(276),I=t.n(r),x=t(277),nt=t.n(x),ht=t(278),St=t.n(ht),vt=t(279),Bt=t.n(vt),Et=t(280),Rt=t.n(Et),pt=t(281),Kt=t.n(pt),Dt=t(282),Wt=t.n(Dt),Ot=t(35),Ut=t.n(Ot),gt=t(9),Vt=t.n(gt),Pt=t(283),Ft=t.n(Pt),jt=t(3),It=t(77),Mt=t(1);function at(v,m){var f=Object.keys(v);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(v);m&&(i=i.filter(function(N){return Object.getOwnPropertyDescriptor(v,N).enumerable})),f.push.apply(f,i)}return f}function Z(v){for(var m=1;m<arguments.length;m++){var f=arguments[m]!=null?arguments[m]:{};m%2?at(Object(f),!0).forEach(function(i){Object(M.a)(v,i,f[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(f)):at(Object(f)).forEach(function(i){Object.defineProperty(v,i,Object.getOwnPropertyDescriptor(f,i))})}return v}var yt=["sm","md","lg","xl"],w=["start","end","center"];function k(v,m){return yt.reduce(function(f,i){return f[v+Object(Mt.I)(i)]=m(),f},{})}var ot=function(m){return[].concat(w,["baseline","stretch"]).includes(m)},rt=k("align",function(){return{type:String,default:null,validator:ot}}),it=function(m){return[].concat(w,["space-between","space-around"]).includes(m)},lt=k("justify",function(){return{type:String,default:null,validator:it}}),_t=function(m){return[].concat(w,["space-between","space-around","stretch"]).includes(m)},ct=k("alignContent",function(){return{type:String,default:null,validator:_t}}),dt={align:Object.keys(rt),justify:Object.keys(lt),alignContent:Object.keys(ct)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function xt(v,m,f){var i=Ct[v];if(f!=null){if(m){var N=m.replace(v,"");i+="-".concat(N)}return i+="-".concat(f),i.toLowerCase()}}var ut=new Map;E.a=jt.default.extend({name:"v-row",functional:!0,props:Z(Z(Z({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ot}},rt),{},{justify:{type:String,default:null,validator:it}},lt),{},{alignContent:{type:String,default:null,validator:_t}},ct),render:function(m,f){var i=f.props,N=f.data,At=f.children,q="";for(var Tt in i)q+=String(i[Tt]);var K=ut.get(q);return K||function(){var G;K=[];var tt;for(tt in dt)dt[tt].forEach(function(mt){var Lt=i[mt],ft=xt(tt,mt,Lt);ft&&K.push(ft)});K.push((G={"no-gutters":i.noGutters,"row--dense":i.dense},Object(M.a)(G,"align-".concat(i.align),i.align),Object(M.a)(G,"justify-".concat(i.justify),i.justify),Object(M.a)(G,"align-content-".concat(i.alignContent),i.alignContent),G)),ut.set(q,K)}(),m(i.tag,Object(It.a)(N,{staticClass:"row",class:K}),At)}})},599:function(j,E,t){var _=t(375),D=t(47);j.exports=function(h,y,P){return P.get&&_(P.get,y,{getter:!0}),P.set&&_(P.set,y,{setter:!0}),D.f(h,y,P)}},600:function(j,E,t){"use strict";t.r(E);var _=t(165),D=t(249),h=t(87),y=t(594),P=t(575),W=t(247),A=t(589),U=function(){var l=this,O=l._self._c;return O(y.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:l.original,"max-width":l.maxWidth,transition:"dialog-top-transition"},model:{value:l.dialog,callback:function(F){l.dialog=F},expression:"dialog"}},[O(D.a,[O(h.c,[O("span",{staticClass:"subtitle-2"},[l._v(l._s(l.dialogTitle))]),l._v(" "),O(A.a),l._v(" "),O(_.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(F){return l.closeDialog()}}},[O(W.a,[l._v("mdi-close-circle")])],1)],1),l._v(" "),O(P.a),l._v(" "),O(h.b,{staticClass:"pr-0 pl-0"},[l._t("content")],2),l._v(" "),O(P.a),l._v(" "),O(h.a,[l._t("addLine"),l._v(" "),O(A.a),l._v(" "),l._t("saveData")],2)],1)],1)},M=[],T={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},V=T,L=t(50),z=Object(L.a)(V,U,M,!1,null,null,null),S=E.default=z.exports},612:function(j,E,t){var _=t(614);_.__esModule&&(_=_.default),typeof _=="string"&&(_=[[j.i,_,""]]),_.locals&&(j.exports=_.locals);var D=t(16).default,h=D("c6bd0f6a",_,!0,{sourceMap:!1})},614:function(j,E,t){var _=t(15),D=_(!1);D.push([j.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),j.exports=D},616:function(j,E,t){"use strict";var _=t(284),D=t.n(_),h=t(285);E.a=Object(h.a)("layout")},620:function(j,E,t){"use strict";var _=t(284),D=t.n(_),h=t(285);E.a=Object(h.a)("flex")},633:function(j,E,t){"use strict";var _=t(8),D=t.n(_),h=t(7),y=t.n(h),P=t(12),W=t.n(P),A=t(9),U=t.n(A),M=t(13),T=t.n(M),V=t(2),L=t(59),z=t.n(L),S=t(4),C=t.n(S),l=t(10),O=t.n(l),B=t(79),F=t.n(B),J=t(78),et=t.n(J),X=t(213),st=t.n(X),R=t(34),Y=t.n(R),$=t(51),Q=t.n($),b=t(612),H=t.n(b),p=t(629),u=t(573),s=t(77),a=t(1);function c(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(I){return Object.getOwnPropertyDescriptor(n,I).enumerable})),o.push.apply(o,r)}return o}function d(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?c(Object(o),!0).forEach(function(r){Object(V.a)(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}var g=d(d({},p.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});E.a=p.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,o,r){return r.toLocaleLowerCase().indexOf(o.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:p.a.options.props.menuProps.type,default:function(){return g}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return d(d({},p.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map(function(o){return e.getValue(o)})},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some(function(o){return!e.hasItem(o)}):this.filteredItems.length>0},currentRange:function(){return this.selectedItem==null?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||this.internalSearch==null?this.allItems:this.allItems.filter(function(o){var r=Object(a.t)(o,e.itemText),I=r!=null?String(r):"";return e.filter(o,String(e.internalSearch),I)})},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return this.isFocused?this.hasDisplayedItems||!this.hideNoData:!1},$_menuProps:function(){var e=p.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),d(d({},g),e)},searchIsDirty:function(){return this.internalSearch!=null&&this.internalSearch!==""},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find(function(o){return e.valueComparator(e.getValue(o),e.getValue(e.internalValue))})},listData:function(){var e=p.a.options.computed.listData.call(this);return e.props=d(d({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){e||!this.hasSlot||(this.lazySearch=null)},items:function(e,o){!(o&&o.length)&&this.hideNoData&&this.isFocused&&!this.isMenuActive&&e.length&&this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,o){var r=this;if(e!==o){if(!this.autoSelectFirst){var I=o[this.$refs.menu.listIndex];I?this.setMenuIndex(e.findIndex(function(x){return x===I})):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(function(){!r.internalSearch||e.length!==1&&!r.autoSelectFirst||(r.$refs.menu.getTiles(),r.autoSelectFirst&&e.length&&(r.setMenuIndex(0),r.$emit("update:list-index",r.$refs.menu.listIndex)))})}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===a.A.left?this.selectedIndex===-1?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===a.A.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:(e===a.A.backspace||e===a.A.delete)&&this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,o=this.selectedItems[e];if(!(!this.isInteractive||this.getDisabled(o))){var r=this.selectedItems.length-1;if(this.selectedIndex===-1&&r!==0){this.selectedIndex=r;return}var I=this.selectedItems.length,x=e!==I-1?e:e-1,nt=this.selectedItems[x];nt?this.selectItem(o):this.setValue(this.multiple?[]:null),this.selectedIndex=x}},clearableCallback:function(){this.internalSearch=null,p.a.options.methods.clearableCallback.call(this)},genInput:function(){var e=u.a.options.methods.genInput.call(this);return e.data=Object(s.a)(e.data,{attrs:{"aria-activedescendant":Object(a.r)(this.$refs.menu,"activeTile.id"),autocomplete:Object(a.r)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=p.a.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?p.a.options.methods.genSelections.call(this):[]},onClick:function(e){!this.isInteractive||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1||!e.target)){var o=e.target,r=o.value;o.value&&this.activateMenu(),!this.multiple&&r===""&&this.deleteCurrentItem(),this.internalSearch=r,this.badInput=o.validity&&o.validity.badInput}},onKeyDown:function(e){var o=e.keyCode;(e.ctrlKey||![a.A.home,a.A.end].includes(o))&&p.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(o)},onSpaceDown:function(e){},onTabDown:function(e){p.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){p.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){p.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick(function(){(!e.multiple||!e.internalSearch||!e.isMenuActive)&&(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))})},updateSelf:function(){!this.searchIsDirty&&!this.internalValue||!this.multiple&&!this.valueComparator(this.internalSearch,this.getValue(this.internalValue))&&this.setSearch()},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var o,r;if(this.selectedIndex!==-1){var I=this.selectedItems[this.selectedIndex],x=this.getText(I);(o=e.clipboardData)===null||o===void 0||o.setData("text/plain",x),(r=e.clipboardData)===null||r===void 0||r.setData("text/vnd.vuetify.autocomplete.item+plain",x),e.preventDefault()}}}})},933:function(j,E,t){"use strict";t.r(E);var _=t(633),D=t(165),h=t(587),y=t(585),P=t(908),W=t(620),A=t(616),U=t(598),M=t(592),T=t(573),V=t(21),L=t(268),z=t(27),S=function(){var s=this,a=s._self._c;return a(A.a,[a(W.a,{attrs:{sm12:""}},[a("div",{staticClass:"mt-0"},[a(M.a,{directives:[{name:"show",rawName:"v-show",value:s.loading,expression:"loading"}],attrs:{type:"table"}}),s._v(" "),a(P.a,{directives:[{name:"show",rawName:"v-show",value:!s.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:s.headers,items:s.allData,"items-per-page":20,options:s.options,"server-items-length":s.totalData,loading:s.loading,dense:"","fixed-header":"","show-select":"",height:"70vh","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(d){s.options=d}},scopedSlots:s._u([{key:"top",fn:function(){return[a("div",{staticClass:"pl-4 pt-2"},[a("span",{staticClass:"font-weight-medium text-h6"},[s._v(s._s(s.$t("Pay Types")))])]),s._v(" "),a("LazyMainToolbar",{attrs:{"document-status":s.documentStatus,"search-status":s.searchStatus,"item-search":s.itemSearch,"search-item":s.searchItem,search:s.search,filter:!1,title:"Master Permissions","show-new-data":"","new-data-text":"New Pay Type","show-back-link":"","show-batch-action":""},on:{emitData:s.emitData,newData:s.newData,getDataFromApi:s.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(d){var g=d.item;return[a(D.a,{staticClass:"font-weight-bold text-right",attrs:{text:"",small:"",color:"secondary"},on:{click:function(e){return s.editItem(g)}}},[s._v(`
            Edit
          `)])]}}],null,!0)})],1)]),s._v(" "),a("DialogForm",{ref:"dialogForm",attrs:{"max-width":"400px","dialog-title":s.formTitle,"button-title":"Save"},scopedSlots:s._u([{key:"content",fn:function(){return[a(y.a,[a(U.a,{attrs:{"no-gutters":""}},[a(h.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a(T.a,{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:s.form.name,callback:function(g){s.$set(s.form,"name",g)},expression:"form.name"}})],1),s._v(" "),a(h.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a(_.a,{attrs:{items:s.itemCategory,label:"Category",outlined:"",dense:"","hide-details":"auto"},model:{value:s.form.category,callback:function(g){s.$set(s.form,"category",g)},expression:"form.category"}})],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[a(D.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:s.submitLoad},on:{click:function(g){return s.save()}}},[s._v(`
        Save
      `)])]},proxy:!0}])})],1)},C=[],l=t(2),O=t(8),B=t(7),F=t(10),J=t(4),et=t(12),X=t(9),st=t(13);function R(u,s){var a=Object.keys(u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(u);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(u,d).enumerable})),a.push.apply(a,c)}return a}function Y(u){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?R(Object(a),!0).forEach(function(c){Object(l.a)(u,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach(function(c){Object.defineProperty(u,c,Object.getOwnPropertyDescriptor(a,c))})}return u}var $={name:"PaymentMethod",data:function(){return{totalData:0,editedIndex:-1,submitLoad:!1,statusProcessing:"insert",dialog:!1,loading:!0,insert:!0,url:"/api/payroll/pay-types",valueWhenIsEmpty:"0",moneyOptions:{suffix:"",length:11,precision:2},documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",itemAccounts:[],itemCategory:["Jenis pembayaran umum","Jenis Pembayaran Tambahan"],allData:[],form:{},defaultItem:{},options:{},headers:[{text:"Name",value:"name"},{text:"category",value:"category"},{text:"Action",value:"ACTIONS",align:"right"}]}},head:function(){return{title:"Pay Type"}},computed:{formTitle:function(){return this.editedIndex===-1?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{emitData:function(s){this.documentStatus=s.documentStatus,this.itemSearch=s.itemSearch,this.searchStatus=s.searchStatus,this.searchItem=s.searchItem,this.search=s.search,this.filters=s.filters,this.getDataFromApi()},getDataFromApi:function(){var s=this;this.loading=!0;var a=this,c={searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search};this.$axios.get(this.url,{params:Y(Y({},a.options),c)}).then(function(d){s.loading=!1,s.allData=d.data.data,s.totalData=d.data.total,s.defaultItem=Object.assign({},d.data.form)}).catch(function(d){s.loading=!1,s.$swal({type:"error",title:"Error",text:d.response.data.message})})},getAccounts:function(){var s=this;this.$axios.get("/api/financial/accounts",{params:{type:"All"}}).then(function(a){s.itemAccounts=a.data.data}).catch(function(a){s.$swal({type:"error",title:"Error",text:a.response.data.message})})},newData:function(){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem)},editItem:function(s){this.editedIndex=this.allData.indexOf(s),this.form=Object.assign({},s),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.insert=!1},save:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,c=this.statusProcessing;c==="insert"?this.store("post",this.url,this.form,"insert",s):c==="update"&&this.store("put",this.url+"/"+this.form.id,this.form,"update",s)},store:function(s,a,c,d){var g=this,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",e=this;e.submitLoad=!0,this.$axios({method:s,url:a,data:c}).then(function(o){e.submitLoad=!1,g.$refs.dialogForm.closeDialog(),g.getDataFromApi()}).catch(function(o){e.submitLoad=!1,g.$swal({type:"error",title:"Error",text:o.response.data.message})})}}},Q=$,b=t(50),H=Object(b.a)(Q,S,C,!1,null,null,null),p=E.default=H.exports;installComponents(H,{DialogForm:t(600).default})}}]);
