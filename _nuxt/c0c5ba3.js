(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{599:function(C,v,t){"use strict";var O=t(7),I=t.n(O),j=t(9),u=t.n(j),i=t(12),at=t.n(i),p=t(13),$=t.n(p),m=t(2),A=t(4),F=t.n(A),y=t(33),G=t.n(y),T=t(52),N=t.n(T),L=t(28),z=t.n(L),h=t(8),J=t.n(h),B=t(21),R=t.n(B),Y=t(65),r=t.n(Y),e=t(269),s=t.n(e),l=t(32),E=t.n(l),c=t(270),D=t.n(c),d=t(271),x=t.n(d),g=t(272),pt=t.n(g),nt=t(273),At=t.n(nt),_t=t(274),yt=t.n(_t),ot=t(275),Tt=t.n(ot),lt=t(276),Lt=t.n(lt),rt=t(277),Bt=t.n(rt),it=t(278),Rt=t.n(it),ct=t(279),xt=t.n(ct),dt=t(280),Kt=t.n(dt),ut=t(281),Ut=t.n(ut),mt=t(282),Wt=t.n(mt),Et=t(34),St=t.n(Et),ft=t(10),Vt=t.n(ft),vt=t(283),$t=t.n(vt),Ot=t(3),jt=t(78),Dt=t(1);function b(o,n){var _=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);n&&(a=a.filter(function(P){return Object.getOwnPropertyDescriptor(o,P).enumerable})),_.push.apply(_,a)}return _}function K(o){for(var n=1;n<arguments.length;n++){var _=arguments[n]!=null?arguments[n]:{};n%2?b(Object(_),!0).forEach(function(a){Object(m.a)(o,a,_[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(_)):b(Object(_)).forEach(function(a){Object.defineProperty(o,a,Object.getOwnPropertyDescriptor(_,a))})}return o}var Pt=["sm","md","lg","xl"],U=["start","end","center"];function W(o,n){return Pt.reduce(function(_,a){return _[o+Object(Dt.I)(a)]=n(),_},{})}var H=function(n){return[].concat(U,["baseline","stretch"]).includes(n)},Q=W("align",function(){return{type:String,default:null,validator:H}}),X=function(n){return[].concat(U,["space-between","space-around"]).includes(n)},Z=W("justify",function(){return{type:String,default:null,validator:X}}),w=function(n){return[].concat(U,["space-between","space-around","stretch"]).includes(n)},k=W("alignContent",function(){return{type:String,default:null,validator:w}}),q={align:Object.keys(Q),justify:Object.keys(Z),alignContent:Object.keys(k)},Mt={align:"align",justify:"justify",alignContent:"align-content"};function ht(o,n,_){var a=Mt[o];if(_!=null){if(n){var P=n.replace(o,"");a+="-".concat(P)}return a+="-".concat(_),a.toLowerCase()}}var tt=new Map;v.a=Ot.default.extend({name:"v-row",functional:!0,props:K(K(K({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:H}},Q),{},{justify:{type:String,default:null,validator:X}},Z),{},{alignContent:{type:String,default:null,validator:w}},k),render:function(n,_){var a=_.props,P=_.data,gt=_.children,S="";for(var Ct in a)S+=String(a[Ct]);var f=tt.get(S);return f||function(){var M;f=[];var V;for(V in q)q[V].forEach(function(et){var It=a[et],st=ht(V,et,It);st&&f.push(st)});f.push((M={"no-gutters":a.noGutters,"row--dense":a.dense},Object(m.a)(M,"align-".concat(a.align),a.align),Object(m.a)(M,"justify-".concat(a.justify),a.justify),Object(m.a)(M,"align-content-".concat(a.alignContent),a.alignContent),M)),tt.set(S,f)}(),n(a.tag,Object(jt.a)(P,{staticClass:"row",class:f}),gt)}})},600:function(C,v,t){var O=t(375),I=t(47);C.exports=function(j,u,i){return i.get&&O(i.get,u,{getter:!0}),i.set&&O(i.set,u,{setter:!0}),I.f(j,u,i)}},952:function(C,v,t){"use strict";t.r(v);var O=t(21),I=t(268),j=function(){var e=this,s=e._self._c;return s("v-row",[s("v-col",{staticClass:"mt-0",attrs:{cols:"12"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,loading:e.loading,"hide-default-footer":"","show-select":"","fixed-header":"",height:"76vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(E){e.options=E}},scopedSlots:e._u([{key:"top",fn:function(){return[s("div",{staticClass:"pl-4 pt-2"},[s("span",{staticClass:"font-weight-medium text-h6"},[e._v("Reconcile")])]),e._v(" "),s("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:"Chart of Accounts","show-batch-action":""},on:{emitData:e.emitData,newData:e.newData}})]},proxy:!0},{key:"item.id",fn:function(E){var c=E.item;return[s("v-btn",{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(d){return e.actions(e.itemAction,c)}}},[e._v(`
            `+e._s(e.itemText)+`
          `)]),e._v(" "),s("v-menu",{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(d){var x=d.on,g=d.attrs;return[s("v-btn",e._g(e._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",g,!1),x),[s("v-icon",[e._v("mdi-menu-down")])],1)]}}],null,!0)},[e._v(" "),s("v-list",e._l(e.items,function(D,d){return s("v-list-item",{key:d,on:{click:function(g){return e.actions(D.action,c)}}},[s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(D.text))])],1)],1)}),1)],1)]}}],null,!0)}),e._v(" "),s("LazyAccountingFormAccount",{ref:"forms",attrs:{"form-data":e.form,"form-title":e.formTitle,"button-title":e.buttonTitle,url:e.url},on:{getDataFromApi:e.getDataFromApi}})],1)],1)},u=[],i=t(9),at=t(4),p={name:"ReconcileList",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",url:"/api/financial/reconcile",headers:[{text:"Account Code",value:"code",cellClass:"disable-wrap"},{text:"Account Name",value:"name",cellClass:"disable-wrap"},{text:"Account Type",value:"account_type",cellClass:"disable-wrap"},{text:"Category",value:"category.name",cellClass:"disable-wrap"},{text:"Currency",value:"currency.currency_code",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"id",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1}],title:"Chart Of Accounts"}},head:function(){return{title:this.title}},computed:{formTitle:function(){return this.editedIndex===-1?"New Account":"Edit Account"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form)},actions:function(e,s){e==="edit"?this.editItem(s):this.deleteItem(s)},editItem:function(e){this.editedIndex=this.allData.indexOf(e),this.$refs.forms.editItem(e,this.form)},deleteItem:function(e){var s=this,l=this;this.$swal({title:"Are you sure?",text:"The data will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(E){E.value&&s.$axios.delete(l.url+"/"+e.id).then(function(c){s.$swal({type:"success",title:"Success...",text:"Row Deleted!"}),s.getDataFromApi()}).catch(function(c){s.$swal({type:"error",title:"Oops...",text:c.response.data.message})})})},emitData:function(e){this.documentStatus=e.documentStatus,this.itemSearch=e.itemSearch,this.searchStatus=e.searchStatus,this.searchItem=e.searchItem,this.search=e.search,this.filters=e.filters,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loading=!0;var s=this;this.$axios.get(this.url,{params:{options:s.options,searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search}}).then(function(l){e.loading=!1,e.allData=l.data.data.rows,e.totalData=l.data.data.total,e.itemSearch=l.data.filter,e.form=Object.assign({},l.data.data.form),e.defaultItem=Object.assign({},l.data.data.form)}).catch(function(l){e.loading=!1,e.$swal({type:"error",title:"Error",text:l.response.data.message})})}}},$=p,m=t(50),A=t(51),F=t.n(A),y=t(164),G=t(585),T=t(908),N=t(247),L=t(249),z=t(165),h=t(35),J=t(577),B=t(599),R=Object(m.a)($,j,u,!1,null,null,null),Y=v.default=R.exports;F()(R,{VBtn:y.a,VCol:G.a,VDataTable:T.a,VIcon:N.a,VList:L.a,VListItem:z.a,VListItemContent:h.a,VListItemTitle:h.c,VMenu:J.a,VRow:B.a})}}]);
