(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1044:function(n,i,a){"use strict";a.r(i);var r=function(){var t=this,e=t._self._c;return e("LazyReportLayoutDefault",{ref:"report",on:{getData:t.getData},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Description")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("Amount")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("NON_OPERATING_EXPENSES")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("NON_OPERATING_REVENUES")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("OPERATING_EXPENSES")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("OPERATING_REVENUES")]),t._v(" "),e("td")]),t._v(" "),t._l(t.allData.accounts,function(b,l){return e("tr",{key:l+"1"},[e("td",[t._v(t._s(b.OPERATING_EXPENSES))])])}),t._v(" "),t._l(t.allData.balances,function(b,l){return e("tr",{key:l+"2"},[e("td",[t._v(t._s(b[l]))])])}),t._v(" "),t._l(t.allData.results,function(b,l){return e("tr",{key:l+"3"},[e("td",[t._v(t._s(b[l]))])])}),t._v(" "),t._l(t.allData.totals,function(b,l){return e("tr",{key:l+"4"},[e("td",[t._v(t._s(b[l]))])])})],2)]},proxy:!0}])})]},proxy:!0}])})},v=[],h=a(27),E={name:"ListReport",data:function(){return{loading:!0,allData:[]}},head:function(){return{title:this.$route.query.name}},methods:{getData:function(t){this.allData=t}}},c=E,g=a(50),f=a(51),O=a.n(f),m=a(627),u=Object(g.a)(c,r,v,!1,null,null,null),w=i.default=u.exports;O()(u,{VSimpleTable:m.a})},603:function(n,i,a){var r=a(604);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var v=a(15).default,h=v("146bc305",r,!0,{sourceMap:!1})},604:function(n,i,a){var r=a(14),v=r(!1);v.push([n.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td{height:32px}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:48px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}",""]),n.exports=v},627:function(n,i,a){"use strict";var r=a(8),v=a.n(r),h=a(7),E=a.n(h),c=a(9),g=a.n(c),f=a(4),O=a.n(f),m=a(12),u=a.n(m),w=a(10),p=a.n(w),t=a(13),e=a.n(t),y=a(2),D=a(22),b=a.n(D),l=a(603),A=a.n(l),j=a(1),M=a(16),x=a(5);function P(d,_){var o=Object.keys(d);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(d);_&&(s=s.filter(function(T){return Object.getOwnPropertyDescriptor(d,T).enumerable})),o.push.apply(o,s)}return o}function R(d){for(var _=1;_<arguments.length;_++){var o=arguments[_]!=null?arguments[_]:{};_%2?P(Object(o),!0).forEach(function(s){Object(y.a)(d,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach(function(s){Object.defineProperty(d,s,Object.getOwnPropertyDescriptor(o,s))})}return d}i.a=Object(x.a)(M.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return R({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(j.i)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(_){return _("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})}}]);
