(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1093:function(y,c,t){"use strict";t.r(c);var i=t(250),r=t(87),l=t(595),b=t(587),o=t(577),v=t(600),u=t(592),h=function(){var a=this,e=a._self._c;return e(v.a,[e(l.a,{attrs:{cols:"12",lg:"9"}},[e(b.a,[e(v.a,[e(l.a,{attrs:{cols:"12"}},[e(v.a,[e(l.a,{attrs:{cols:"12",sm:"6",lg:"6",xl:"4"}},[e(u.a,{directives:[{name:"show",rawName:"v-show",value:a.loading,expression:"loading"}],attrs:{type:"card"}}),a._v(" "),e(i.a,{directives:[{name:"show",rawName:"v-show",value:!a.loading,expression:"!loading"}]},[e(r.b,[e("div",{staticClass:"subtitle-1"},[a._v("INVOICES")])]),a._v(" "),e(o.a),a._v(" "),e(r.b,[e("LazyChartBarChart",{ref:"invoice"})],1)],1)],1),a._v(" "),e(l.a,{attrs:{cols:"12",sm:"6",lg:"6",xl:"4"}},[e(u.a,{directives:[{name:"show",rawName:"v-show",value:a.loading,expression:"loading"}],attrs:{type:"card"}}),a._v(" "),e(i.a,{directives:[{name:"show",rawName:"v-show",value:!a.loading,expression:"!loading"}]},[e(r.b,[e("div",{staticClass:"subtitle-1"},[a._v("PROFIT AND LOSS")])]),a._v(" "),e(o.a),a._v(" "),e(r.b,[e("LazyChartLineChart",{ref:"profitLoss"})],1)],1)],1),a._v(" "),e(l.a,{attrs:{cols:"12",sm:"6",lg:"6",xl:"4"}},[e(u.a,{directives:[{name:"show",rawName:"v-show",value:a.loading,expression:"loading"}],attrs:{type:"card"}}),a._v(" "),e(i.a,{directives:[{name:"show",rawName:"v-show",value:!a.loading,expression:"!loading"}]},[e(r.b,[e("div",{staticClass:"subtitle-1"},[a._v("SALES")])]),a._v(" "),e(o.a),a._v(" "),e(r.b,[e("LazyChartLineChart",{ref:"sales"})],1)],1)],1)],1)],1),a._v(" "),e(l.a,{attrs:{cols:"12"}},[e("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"CP","type-trans":["CP","CS","PY","RC","CE"],"show-new-data-multiple":!1,"item-per-page":5,"table-height":"auto","table-title":"Latest Transactions","form-url":"/app/form/purchase/payment","table-url":"/api/transaction/group",url:"/api/transaction/group","header-table":[{text:a.$t("Transaction No"),value:"transaction_no",cellClass:"disable-wrap"},{text:"Vendor/Customer",value:"contact.name",cellClass:"disable-wrap"},{text:a.$t("Transaction Type"),value:"type",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:a.$t("Transaction Date"),value:"transaction_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:a.$t("Reference"),value:"reference_no",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:a.$t("Due Date"),value:"due_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1),a._v(" "),e(l.a,{attrs:{cols:"12"}},[e("LazyPayrollTableCommission",{ref:"tableCommission"})],1),a._v(" "),e(l.a,{attrs:{cols:"12"}},[e("DocumentTableDocument",{ref:"tableDocument",attrs:{"show-new-data-multiple":!1,"item-per-page":5,"table-height":"auto","type-document":"JN","form-url":"/app/form/accounting/journal","table-url":"/api/transactions","table-title":"Latest Journal Entry","header-table":[{text:"Number",value:"transaction_no",cellClass:"disable-wrap"},{text:"Notes",value:"narration",cellClass:"disable-wrap"},{text:"Date",value:"date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Reference",value:"reference",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)],1)],1)],1)],1)},g=[],w=t(24),L=t(73),C={name:"DashboardHome",data:function(){return{loading:!0,title:"Dashboard",value:[423,446,675,510,590,610,760]}},activated:function(){this.$nuxt.$emit("extensionSetting",{tabs:[{title:"Business Overview",route:"/home/business-overview"},{title:"Get Thing Done",route:"/home/getthingdone"}],show:!0,showBtn:!1}),this.getDataChart()},mounted:function(){this.getDataChart()},methods:{getDataChart:function(){var a=this;return Object(w.a)(regeneratorRuntime.mark(function e(){var f,m,p;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a.loading=!0,s.next=3,a.$axios.get("/api/chart",{params:{type:"bar",data:"invoice"}});case 3:return f=s.sent,s.next=6,a.$axios.get("/api/chart",{params:{type:"line",data:"profitLoss"}});case 6:return m=s.sent,s.next=9,a.$axios.get("/api/chart",{params:{type:"line",data:"sales"}});case 9:p=s.sent,a.$refs.invoice.setData(f.data),a.$refs.profitLoss.setData(m.data),a.$refs.sales.setData(p.data),a.loading=!1;case 14:case"end":return s.stop()}},e)}))()}}},x=C,D=t(50),d=Object(D.a)(x,h,g,!1,null,null,null),T=c.default=d.exports;installComponents(d,{DocumentTableDocument:t(628).default})}}]);
