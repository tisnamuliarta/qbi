(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1001:function(f,s,l){"use strict";l.r(s);var i=function(){var e=this,a=e._self._c;return a("div",[a("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"SQ","form-url":"/app/form/sales/quote","header-table":[{text:e.$t("Transaction No"),value:"transaction_no",cellClass:"disable-wrap"},{text:"Customer",value:"contact.name",cellClass:"disable-wrap"},{text:e.$t("Transaction Date"),value:"transaction_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:e.$t("Due Date"),value:"due_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},r=[],o={name:"AllPurchase",head:function(){return{title:this.$t("Sales Quotations")}},activated:function(){this.$nuxt.$emit("extensionActive",{active:0})},created:function(){var e=this;this.$nuxt.$on("getDataFromApi",function(a){return e.getDataFromApi(a)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},u=o,c=l(50),n=Object(c.a)(u,i,r,!1,null,null,null),d=s.default=n.exports;installComponents(n,{DocumentTableDocument:l(628).default})}}]);
