(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1104:function(x,v,t){"use strict";t.r(v);var m=function(){var e=this,u=e.$createElement,s=e._self._c||u;return s("v-app-bar",{staticClass:"rounded",attrs:{flat:"",color:"white",dense:"",elevation:"0"}},[e.showBatchAction?s("v-btn",{staticClass:"mr-0 pr-0",attrs:{icon:""}},[s("v-icon",[e._v("mdi-arrow-down-left")])],1):e._e(),e._v(" "),e.showBatchAction?s("v-menu",{attrs:{transition:"slide-y-transition","offset-y":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(a){var _=a.on,n=a.attrs;return[s("v-btn",e._g(e._b({staticClass:"ml-0 mr-2",attrs:{small:"",color:"black",dark:"",outlined:"",elevation:"0"}},"v-btn",n,!1),_),[e._v(`
        Batch Action
        `),s("v-btn",{attrs:{color:"black",dark:"",small:"",icon:""}},[s("v-icon",[e._v("mdi-menu-down")])],1)],1)]}}],null,!1,3184914963)},[e._v(" "),s("v-list",{attrs:{dense:""}},e._l(["Make Inactive"],function(a,_){return s("v-list-item",{key:_,attrs:{dense:""},on:{click:function(n){return e.makeInActive(a,e.doctype)}}},[s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(a))])],1)],1)}),1)],1):e._e(),e._v(" "),s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":400,"max-width":"400px",bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(a){var _=a.on,n=a.attrs;return[e.showFilter?s("v-btn",e._g(e._b({staticClass:"d-none d-sm-flex",attrs:{small:"",outlined:"",color:"black",elevation:"0",dark:""}},"v-btn",n,!1),_),[e._v(`
        Filter
        `),s("v-btn",{staticClass:"d-none d-sm-flex",attrs:{dark:"",color:"black",small:"",icon:""}},[s("v-icon",[e._v("mdi-menu-down")])],1)],1):e._e()]}}])},[e._v(" "),s("v-card",[s("v-card-text",[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Transaction",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}}),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Status",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{attrs:{label:"Delivery Method",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"Date",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"From",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{attrs:{label:"To",outlined:"",dense:"","hide-details":"auto"}})],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-btn",{attrs:{text:""}},[e._v(" Cancel ")]),e._v(" "),s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"primary",small:"",elevation:"0"}},[e._v(" Apply ")])],1)],1)],1),e._v(" "),s("v-form",{staticClass:"d-none d-sm-flex ml-2"},[s("v-layout",{attrs:{wrap:""}},[s("v-row",[s("v-col",{staticClass:"mt-0 mr-2",attrs:{cols:"12",md:"12",sm:"12"}},[s("v-text-field",{staticClass:"mt-1",attrs:{label:"search",outlined:"",dense:"","hide-details":"auto"},on:{change:e.getDataFromApi},model:{value:e.searchData,callback:function(a){e.searchData=a},expression:"searchData"}})],1)],1)],1)],1),e._v(" "),s("v-spacer"),e._v(" "),e.showBackLink?s("LazySetupBackList"):e._e(),e._v(" "),e.showNewData?s("v-btn",{staticClass:"d-none d-sm-flex",attrs:{color:"primary",elevation:"0",small:""},on:{click:e.newData}},[e._v(`
    `+e._s(e.newDataText)+`
  `)]):e._e(),e._v(" "),e.showNewData?s("v-btn",{staticClass:"d-flex d-sm-none",attrs:{color:"primary",elevation:"0",small:"",icon:""},on:{click:e.newData}},[s("v-icon",[e._v("mdi-plus-box")])],1):e._e(),e._v(" "),e.showNewDataMultiple?s("v-menu",{attrs:{transition:"slide-y-transition","offset-y":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(a){var _=a.on,n=a.attrs;return[s("v-btn",e._g(e._b({attrs:{small:"",color:"primary",elevation:"0"}},"v-btn",n,!1),_),[e._v(`
        New Transactions
        `),s("v-btn",{attrs:{dark:"",small:"",icon:""}},[s("v-icon",[e._v("mdi-menu-down")])],1)],1)]}}],null,!1,2307938073)},[e._v(" "),s("v-list",{attrs:{dense:""}},e._l(e.newDataMultipleItem,function(a,_){return s("v-list-item",{key:_,attrs:{dense:""},on:{click:function(n){return e.$router.push({path:a.route,query:{document:0,type:a.type}})}}},[s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(a.text))])],1)],1)}),1)],1):e._e(),e._v(" "),s("v-btn",{staticClass:"ml-1 mr-1 d-none d-sm-flex",attrs:{loading:e.loading,icon:"",small:""},on:{click:function(a){return e.processAction("refresh")}}},[s("v-icon",[e._v("mdi-refresh")])],1),e._v(" "),s("v-btn",{staticClass:"ml-1 mr-1 d-none d-sm-flex",attrs:{loading:e.loading,icon:"",small:""},on:{click:function(a){return e.processAction("print")}}},[s("v-icon",[e._v("mdi-printer")])],1),e._v(" "),s("v-btn",{staticClass:"ml-1 mr-1 d-none d-sm-flex",attrs:{loading:e.loading,icon:"",small:""},on:{click:function(a){return e.processAction("export-excel")}}},[s("v-icon",[e._v("mdi-microsoft-excel")])],1),e._v(" "),s("v-btn",{staticClass:"d-none d-sm-flex",attrs:{loading:e.loading,icon:"",small:""},on:{click:function(a){return e.processAction("setting")}}},[s("v-icon",[e._v("mdi-cog")])],1),e._v(" "),s("v-menu",{staticClass:"d-flex d-sm-none",attrs:{"offset-y":"",left:"","nudge-width":120},scopedSlots:e._u([{key:"activator",fn:function(a){var _=a.on,n=a.attrs;return[s("v-btn",e._g(e._b({staticClass:"d-flex d-sm-none",attrs:{icon:""}},"v-btn",n,!1),_),[s("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),s("v-list",{attrs:{dense:""}},e._l(e.itemsMenu,function(a,_){return s("v-list-item",{key:_,attrs:{link:"",dense:""},on:{click:function(n){return e.processAction(a.action)}}},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:e._s(a.icon)}})],1),e._v(" "),s("v-list-item-title",[e._v(e._s(a.title))])],1)}),1)],1)],1)},P=[],M=t(21),V=t(283),L={name:"MainToolbar",props:{title:{type:String,default:""},doctype:{type:String,default:""},titleButton:{type:String,default:""},searchItem:{type:String,default:""},search:{type:String,default:""},filters:{type:String,default:""},searchStatus:{type:String,default:"Active"},documentStatus:{type:Array,default:function(){return[]}},buttonTitle:{type:String,default:"New"},newDataText:{type:String,default:"New"},showAdd:{type:Boolean,default:!0},filter:{type:Boolean,default:!0},showBatchAction:{type:Boolean,default:!1},showFilter:{type:Boolean,default:!1},showBackLink:{type:Boolean,default:!1},showNewData:{type:Boolean,default:!1},showNewDataMultiple:{type:Boolean,default:!1},newDataMultipleItem:{type:Array,default:function(){return[]}},itemSearch:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,dialogFilter:!1,searchStatusData:this.searchStatus,searchItemData:this.searchItem,searchData:this.search,items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemsMenu:[{title:"Refresh",icon:"mdi-refresh",action:"refresh"},{title:"Print",icon:"mdi-printer",action:"print"},{title:"Export to excel",icon:"mdi-microsoft-excel",action:"export-excel"},{title:"Form Settings",icon:"mdi-cog",action:"setting"}]}},watch:{searchData:{handler:function(){this.$emit("emitData",{search:this.searchData})},deep:!0}},methods:{newData:function(){this.$emit("newData")},passDataToToolbar:function(u){this.$emit("emitData",{documentStatus:u.documentStatus,itemSearch:u.itemSearch,searchStatus:u.searchStatus,searchItem:u.searchItem,search:u.search})},getDataFromApi:function(){this.$emit("getDataFromApi",{search:this.search})},processAction:function(u){switch(u){case"refresh":this.$emit("getDataFromApi");break;case"print":this.$emit("getDataFromApi");break;case"export-excel":this.$emit("getDataFromApi");break;case"setting":this.$emit("getDataFromApi");break}},makeInActive:function(){}}},R=L,K=t(50),U=t(51),E=t.n(U),h=t(593),S=t(164),g=t(247),W=t(88),y=t(581),b=t(612),C=t(246),$=t(615),p=t(248),F=t(165),f=t(34),N=t(142),B=t(573),G=t(595),A=t(589),z=t(570),O=Object(K.a)(R,m,P,!1,null,null,null),J=v.default=O.exports;E()(O,{VAppBar:h.a,VBtn:S.a,VCard:g.a,VCardActions:W.a,VCardText:W.b,VCol:y.a,VForm:b.a,VIcon:C.a,VLayout:$.a,VList:p.a,VListItem:F.a,VListItemContent:f.b,VListItemIcon:N.a,VListItemTitle:f.d,VMenu:B.a,VRow:G.a,VSpacer:A.a,VTextField:z.a})},595:function(x,v,t){"use strict";var m=t(7),P=t.n(m),M=t(9),V=t.n(M),L=t(12),R=t.n(L),K=t(13),U=t.n(K),E=t(1),h=t(4),S=t.n(h),g=t(33),W=t.n(g),y=t(52),b=t.n(y),C=t(27),$=t.n(C),p=t(8),F=t.n(p),f=t(21),N=t.n(f),B=t(65),G=t.n(B),A=t(266),z=t.n(A),O=t(32),J=t.n(O),e=t(267),u=t.n(e),s=t(268),a=t.n(s),_=t(269),n=t.n(_),l=t(270),d=t.n(l),D=t(271),H=t.n(D),Q=t(272),It=t.n(Q),dt=t(273),Tt=t.n(dt),ct=t(274),Lt=t.n(ct),ut=t(275),Rt=t.n(ut),vt=t(276),Kt=t.n(vt),mt=t(277),Ut=t.n(mt),Et=t(278),Wt=t.n(Et),ft=t(279),xt=t.n(ft),Ot=t(35),Vt=t.n(Ot),Dt=t(10),St=t.n(Dt),jt=t(280),bt=t.n(jt),Pt=t(2),Mt=t(78),ht=t(0);function q(c,r){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(c);r&&(o=o.filter(function(I){return Object.getOwnPropertyDescriptor(c,I).enumerable})),i.push.apply(i,o)}return i}function X(c){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?q(Object(i),!0).forEach(function(o){Object(E.a)(c,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach(function(o){Object.defineProperty(c,o,Object.getOwnPropertyDescriptor(i,o))})}return c}var gt=["sm","md","lg","xl"],Y=["start","end","center"];function Z(c,r){return gt.reduce(function(i,o){return i[c+Object(ht.H)(o)]=r(),i},{})}var tt=function(r){return[].concat(Y,["baseline","stretch"]).includes(r)},et=Z("align",function(){return{type:String,default:null,validator:tt}}),st=function(r){return[].concat(Y,["space-between","space-around"]).includes(r)},at=Z("justify",function(){return{type:String,default:null,validator:st}}),_t=function(r){return[].concat(Y,["space-between","space-around","stretch"]).includes(r)},nt=Z("alignContent",function(){return{type:String,default:null,validator:_t}}),ot={align:Object.keys(et),justify:Object.keys(at),alignContent:Object.keys(nt)},yt={align:"align",justify:"justify",alignContent:"align-content"};function Ct(c,r,i){var o=yt[c];if(i!=null){if(r){var I=r.replace(c,"");o+="-".concat(I)}return o+="-".concat(i),o.toLowerCase()}}var rt=new Map;v.a=Pt.default.extend({name:"v-row",functional:!0,props:X(X(X({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:tt}},et),{},{justify:{type:String,default:null,validator:st}},at),{},{alignContent:{type:String,default:null,validator:_t}},nt),render:function(r,i){var o=i.props,I=i.data,pt=i.children,w="";for(var Bt in o)w+=String(o[Bt]);var j=rt.get(w);return j||function(){var T;j=[];var k;for(k in ot)ot[k].forEach(function(lt){var At=o[lt],it=Ct(k,lt,At);it&&j.push(it)});j.push((T={"no-gutters":o.noGutters,"row--dense":o.dense},Object(E.a)(T,"align-".concat(o.align),o.align),Object(E.a)(T,"justify-".concat(o.justify),o.justify),Object(E.a)(T,"align-content-".concat(o.alignContent),o.alignContent),T)),rt.set(w,j)}(),r(o.tag,Object(Mt.a)(I,{staticClass:"row",class:j}),pt)}})},612:function(x,v,t){"use strict";var m=t(1),P=t(33),M=t.n(P),V=t(52),L=t.n(V),R=t(286),K=t.n(R),U=t(9),E=t.n(U),h=t(4),S=t.n(h),g=t(10),W=t.n(g),y=t(59),b=t.n(y),C=t(79),$=t.n(C),p=t(8),F=t.n(p),f=t(7),N=t.n(f),B=t(12),G=t.n(B),A=t(13),z=t.n(A),O=t(5),J=t(99),e=t(118);function u(a,_){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);_&&(l=l.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),n.push.apply(n,l)}return n}function s(a){for(var _=1;_<arguments.length;_++){var n=arguments[_]!=null?arguments[_]:{};_%2?u(Object(n),!0).forEach(function(l){Object(m.a)(a,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(l){Object.defineProperty(a,l,Object.getOwnPropertyDescriptor(n,l))})}return a}v.a=Object(O.a)(J.a,Object(e.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(_){var n=Object.values(_).includes(!0);this.$emit("input",!n)},deep:!0,immediate:!0}},methods:{watchInput:function(_){var n=this,l=function(H){return H.$watch("hasError",function(Q){n.$set(n.errorBag,H._uid,Q)},{immediate:!0})},d={_uid:_._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?d.shouldValidate=_.$watch("shouldValidate",function(D){!D||n.errorBag.hasOwnProperty(_._uid)||(d.valid=l(_))}):d.valid=l(_),d},validate:function(){return this.inputs.filter(function(_){return!_.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(_){return _.reset()}),this.resetErrorBag()},resetErrorBag:function(){var _=this;this.lazyValidation&&setTimeout(function(){_.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(_){return _.resetValidation()}),this.resetErrorBag()},register:function(_){this.inputs.push(_),this.watchers.push(this.watchInput(_))},unregister:function(_){var n=this.inputs.find(function(d){return d._uid===_._uid});if(!!n){var l=this.watchers.find(function(d){return d._uid===n._uid});l&&(l.valid(),l.shouldValidate()),this.watchers=this.watchers.filter(function(d){return d._uid!==n._uid}),this.inputs=this.inputs.filter(function(d){return d._uid!==n._uid}),this.$delete(this.errorBag,n._uid)}}},render:function(_){var n=this;return _("form",{staticClass:"v-form",attrs:s({novalidate:!0},this.attrs$),on:{submit:function(d){return n.$emit("submit",d)}}},this.$slots.default)}})},615:function(x,v,t){"use strict";var m=t(281),P=t.n(m),M=t(282);v.a=Object(M.a)("layout")}}]);