(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1057:function(q,f,t){"use strict";t.r(f);var O=function(){var e=this,_=e.$createElement,s=e._self._c||_;return s("v-row",[s("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,loading:e.loading,"hide-default-footer":"","show-select":"","fixed-header":"",height:"76vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(r){e.options=r}},scopedSlots:e._u([{key:"top",fn:function(){return[s("div",{staticClass:"pl-4 pt-2"},[s("span",{staticClass:"font-weight-medium text-h6"},[e._v("Reconcile")])]),e._v(" "),s("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:"Chart of Accounts","show-batch-action":""},on:{emitData:e.emitData,newData:e.newData}})]},proxy:!0},{key:"item.id",fn:function(r){var u=r.item;return[s("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(i){return e.actions(e.itemAction,u)}}},[e._v(`
          `+e._s(e.itemText)+`
        `)]),e._v(" "),s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(i){var j=i.on,D=i.attrs;return[s("v-btn",e._g(e._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",D,!1),j),[s("v-icon",[e._v("mdi-menu-down")])],1)]}}],null,!0)},[e._v(" "),s("v-list",e._l(e.items,function(i,j){return s("v-list-item",{key:j,on:{click:function(D){return e.actions(i.action,u)}}},[s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(i.text))])],1)],1)}),1)],1)]}}],null,!0)}),e._v(" "),s("LazyAccountingFormAccount",{ref:"forms",attrs:{"form-data":e.form,"form-title":e.formTitle,"button-title":e.buttonTitle,url:e.url},on:{getDataFromApi:e.getDataFromApi}})],1)],1)},R=[],x=t(21),tt=t(283),K=t(9),et=t(4),P={name:"ReconcileList",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",url:"/api/financial/reconcile",headers:[{text:"Account Code",value:"code",cellClass:"disable-wrap"},{text:"Account Name",value:"name",cellClass:"disable-wrap"},{text:"Account Type",value:"account_type",cellClass:"disable-wrap"},{text:"Category",value:"category.name",cellClass:"disable-wrap"},{text:"Currency",value:"currency.currency_code",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"id",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1}],title:"Chart Of Accounts"}},head:function(){return{title:this.title}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},computed:{formTitle:function(){return this.editedIndex===-1?"New Account":"Edit Account"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form)},actions:function(_,s){_==="edit"?this.editItem(s):this.deleteItem(s)},editItem:function(_){this.editedIndex=this.allData.indexOf(_),this.$refs.forms.editItem(_,this.form)},deleteItem:function(_){var s=this,r=this;this.$swal({title:"Are you sure?",text:"The data will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(u){u.value&&s.$axios.delete(r.url+"/"+_.id).then(function(i){s.$swal({type:"success",title:"Success...",text:"Row Deleted!"}),s.getDataFromApi()}).catch(function(i){s.$swal({type:"error",title:"Oops...",text:i.response.data.message})})})},emitData:function(_){this.documentStatus=_.documentStatus,this.itemSearch=_.itemSearch,this.searchStatus=_.searchStatus,this.searchItem=_.searchItem,this.search=_.search,this.filters=_.filters,this.getDataFromApi()},getDataFromApi:function(){var _=this;this.loading=!0;var s=this;this.$axios.get(this.url,{params:{options:s.options,searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search}}).then(function(r){_.loading=!1,_.allData=r.data.data.rows,_.totalData=r.data.data.total,_.itemSearch=r.data.filter,_.form=Object.assign({},r.data.data.form),_.defaultItem=Object.assign({},r.data.data.form)}).catch(function(r){_.loading=!1,_.$swal({type:"error",title:"Error",text:r.response.data.message})})}}},U=P,c=t(50),M=t(51),W=t.n(M),h=t(164),S=t(581),g=t(1018),V=t(246),C=t(248),$=t(165),v=t(34),F=t(573),I=t(595),p=Object(c.a)(U,O,R,!1,null,null,null),G=f.default=p.exports;W()(p,{VBtn:h.a,VCol:S.a,VDataTable:g.a,VIcon:V.a,VList:C.a,VListItem:$.a,VListItemContent:v.b,VListItemTitle:v.d,VMenu:F.a,VRow:I.a})},595:function(q,f,t){"use strict";var O=t(7),R=t.n(O),x=t(9),tt=t.n(x),K=t(12),et=t.n(K),P=t(13),U=t.n(P),c=t(1),M=t(4),W=t.n(M),h=t(33),S=t.n(h),g=t(52),V=t.n(g),C=t(27),$=t.n(C),v=t(8),F=t.n(v),I=t(21),p=t.n(I),G=t(65),e=t.n(G),_=t(266),s=t.n(_),r=t(32),u=t.n(r),i=t(267),j=t.n(i),D=t(268),It=t.n(D),st=t(269),pt=t.n(st),at=t(270),At=t.n(at),_t=t(271),yt=t.n(_t),nt=t(272),Tt=t.n(nt),ot=t(273),Lt=t.n(ot),lt=t(274),Bt=t.n(lt),rt=t(275),Rt=t.n(rt),it=t(276),xt=t.n(it),ct=t(277),Kt=t.n(ct),dt=t(278),Ut=t.n(dt),ut=t(279),Wt=t.n(ut),mt=t(35),St=t.n(mt),Et=t(10),Vt=t.n(Et),ft=t(280),$t=t.n(ft),vt=t(2),jt=t(78),Dt=t(0);function N(l,n){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(l);n&&(a=a.filter(function(m){return Object.getOwnPropertyDescriptor(l,m).enumerable})),o.push.apply(o,a)}return o}function A(l){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?N(Object(o),!0).forEach(function(a){Object(c.a)(l,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):N(Object(o)).forEach(function(a){Object.defineProperty(l,a,Object.getOwnPropertyDescriptor(o,a))})}return l}var Ot=["sm","md","lg","xl"],y=["start","end","center"];function T(l,n){return Ot.reduce(function(o,a){return o[l+Object(Dt.H)(a)]=n(),o},{})}var z=function(n){return[].concat(y,["baseline","stretch"]).includes(n)},J=T("align",function(){return{type:String,default:null,validator:z}}),H=function(n){return[].concat(y,["space-between","space-around"]).includes(n)},Y=T("justify",function(){return{type:String,default:null,validator:H}}),Q=function(n){return[].concat(y,["space-between","space-around","stretch"]).includes(n)},X=T("alignContent",function(){return{type:String,default:null,validator:Q}}),Z={align:Object.keys(J),justify:Object.keys(Y),alignContent:Object.keys(X)},Pt={align:"align",justify:"justify",alignContent:"align-content"};function Mt(l,n,o){var a=Pt[l];if(o!=null){if(n){var m=n.replace(l,"");a+="-".concat(m)}return a+="-".concat(o),a.toLowerCase()}}var b=new Map;f.a=vt.default.extend({name:"v-row",functional:!0,props:A(A(A({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:z}},J),{},{justify:{type:String,default:null,validator:H}},Y),{},{alignContent:{type:String,default:null,validator:Q}},X),render:function(n,o){var a=o.props,m=o.data,ht=o.children,L="";for(var gt in a)L+=String(a[gt]);var d=b.get(L);return d||function(){var E;d=[];var B;for(B in Z)Z[B].forEach(function(w){var Ct=a[w],k=Mt(B,w,Ct);k&&d.push(k)});d.push((E={"no-gutters":a.noGutters,"row--dense":a.dense},Object(c.a)(E,"align-".concat(a.align),a.align),Object(c.a)(E,"justify-".concat(a.justify),a.justify),Object(c.a)(E,"align-content-".concat(a.alignContent),a.alignContent),E)),b.set(L,d)}(),n(a.tag,Object(jt.a)(m,{staticClass:"row",class:d}),ht)}})}}]);