(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1131:function(Q,E,t){"use strict";t.r(E);var m=t(249),I=t(87),j=t(577),O=t(587),D=t(585),A=t(247),f=t(598),X=t(27),c=t(21),L=t(268),R=function(){var _=this,a=_._self._c;return a(D.a,[a(f.a,{attrs:{align:"center","align-content":"center",justify:"center"}},[a(O.a,{attrs:{cols:"12",md:_.mdWidth}},[a(m.a,[a(I.b,[a("div",{staticClass:"pl-4 pt-2"},[a(j.a,{staticClass:"ma-2",attrs:{link:"",color:"primary",label:"",small:""},on:{click:function(W){return _.$router.push({path:"/app/reports/list"})}}},[a(A.a,{attrs:{left:""}},[_._v(" mdi-arrow-left")]),_._v(`
              All Reports
            `)],1),_._v(" "),a("span",{staticClass:"font-weight-medium text-h6"},[_._v(_._s(_.$t(_.$route.query.name))+" "+_._s(_.period))])],1),_._v(" "),a("LazyMainToolbar",{attrs:{"document-status":_.documentStatus,"search-status":_.searchStatus,"item-search":_.itemSearch,"search-item":_.searchItem,search:_.search,title:"Chart of Accounts","show-filter":""},on:{emitData:_.emitData,getDataFromApi:_.getDataFromApi}}),_._v(" "),a(O.a,{staticClass:"mt-1",attrs:{cols:"12"}},[_._t("content")],2)],1)],1)],1)],1)],1)},v=[],Y=t(10),T=t(4),B={name:"ListReport",props:{mdWidth:{type:String,default:"12"},period:{type:String,default:""}},data:function(){return{totalData:0,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},date_from:null,date_to:null,url:"/api/report",title:"Reports"}},head:function(){return{title:this.$route.query.name}},activated:function(){var _=this;this.$nextTick(function(){_.$nuxt.$loading.start()}),this.getDataFromApi()},mounted:function(){this.getDataFromApi()},methods:{editItem:function(_){this.$auth.$storage.setState("basePath",this.$route.path),this.$router.push({path:this.$formatter.mappingAction(_.transaction_type),query:{document:_.id}})},emitData:function(_){this.documentStatus=_.documentStatus,this.itemSearch=_.itemSearch,this.searchStatus=_.searchStatus,this.searchItem=_.searchItem,this.search=_.search,this.filters=_.filters,this.date_from=_.dateFrom,this.date_to=_.dateTo,this.$nuxt.$loading.start(),this.getDataFromApi()},getDataFromApi:function(){var _=this;this.loading=!0;var a=this;this.$axios.get(this.url,{params:{options:a.options,searchItem:a.searchItem,documentStatus:a.documentStatus,searchStatus:a.searchStatus,search:a.search,start_date:a.date_from,end_date:a.date_to,report_type:a.$route.query.name}}).then(function(r){_.$nuxt.$loading.finish(),_.loading=!1,_.allData=r.data.data,_.$emit("getData",{data:_.allData,startDate:r.data.start_date,endDate:r.data.end_date}),_.totalData=r.data.total,_.itemSearch=r.data.filter,_.form=Object.assign({},r.data.data),_.defaultItem=Object.assign({},r.data.form)}).catch(function(r){_.loading=!1,_.$nuxt.$loading.finish(),_.$swal({type:"error",title:"Error",text:r.response.data.message})})}}},P=B,K=t(50),M=Object(K.a)(P,R,v,!1,null,null,null),Z=E.default=M.exports},598:function(Q,E,t){"use strict";var m=t(7),I=t.n(m),j=t(10),O=t.n(j),D=t(12),A=t.n(D),f=t(13),X=t.n(f),c=t(2),L=t(4),R=t.n(L),v=t(34),Y=t.n(v),T=t(51),B=t.n(T),P=t(28),K=t.n(P),M=t(8),Z=t.n(M),l=t(21),_=t.n(l),a=t(64),r=t.n(a),W=t(269),ht=t.n(W),b=t(33),gt=t.n(b),w=t(270),Ct=t.n(w),k=t(271),pt=t.n(k),q=t(272),yt=t.n(q),tt=t(273),It=t.n(tt),_t=t(274),At=t.n(_t),st=t(275),Lt=t.n(st),at=t(276),Rt=t.n(at),et=t(277),Tt=t.n(et),nt=t(278),Bt=t.n(nt),ot=t(279),Kt=t.n(ot),rt=t(280),Wt=t.n(rt),lt=t(281),Ut=t.n(lt),dt=t(282),xt=t.n(dt),ct=t(35),St=t.n(ct),it=t(9),$t=t.n(it),ut=t(283),Vt=t.n(ut),Et=t(3),mt=t(77),jt=t(1);function U(o,e){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),n.push.apply(n,s)}return n}function h(o){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U(Object(n),!0).forEach(function(s){Object(c.a)(o,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(n,s))})}return o}var Ot=["sm","md","lg","xl"],g=["start","end","center"];function C(o,e){return Ot.reduce(function(n,s){return n[o+Object(jt.I)(s)]=e(),n},{})}var x=function(e){return[].concat(g,["baseline","stretch"]).includes(e)},S=C("align",function(){return{type:String,default:null,validator:x}}),$=function(e){return[].concat(g,["space-between","space-around"]).includes(e)},V=C("justify",function(){return{type:String,default:null,validator:$}}),F=function(e){return[].concat(g,["space-between","space-around","stretch"]).includes(e)},G=C("alignContent",function(){return{type:String,default:null,validator:F}}),N={align:Object.keys(S),justify:Object.keys(V),alignContent:Object.keys(G)},Dt={align:"align",justify:"justify",alignContent:"align-content"};function ft(o,e,n){var s=Dt[o];if(n!=null){if(e){var i=e.replace(o,"");s+="-".concat(i)}return s+="-".concat(n),s.toLowerCase()}}var z=new Map;E.a=Et.default.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},S),{},{justify:{type:String,default:null,validator:$}},V),{},{alignContent:{type:String,default:null,validator:F}},G),render:function(e,n){var s=n.props,i=n.data,vt=n.children,p="";for(var Pt in s)p+=String(s[Pt]);var d=z.get(p);return d||function(){var u;d=[];var y;for(y in N)N[y].forEach(function(J){var Mt=s[J],H=ft(y,J,Mt);H&&d.push(H)});d.push((u={"no-gutters":s.noGutters,"row--dense":s.dense},Object(c.a)(u,"align-".concat(s.align),s.align),Object(c.a)(u,"justify-".concat(s.justify),s.justify),Object(c.a)(u,"align-content-".concat(s.alignContent),s.alignContent),u)),z.set(p,d)}(),e(s.tag,Object(mt.a)(i,{staticClass:"row",class:d}),vt)}})}}]);
