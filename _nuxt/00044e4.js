(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{987:function(f,n,l){"use strict";l.r(n);var s=function(){var e=this,a=e._self._c;return a("div",[a("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"PR","form-url":"/app/form/inventory/receipt","table-url":"/api/documents","table-title":e.$t("Receipt From Production"),"header-table":[{text:e.$t("Transaction No"),value:"transaction_no",cellClass:"disable-wrap"},{text:"Description",value:"narration",cellClass:"disable-wrap"},{text:e.$t("Transaction Date"),value:"transaction_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Reference",value:"reference_no",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},i=[],o={name:"AllPurchase",head:function(){return{title:this.$t("Receipt From Production")}},activated:function(){this.$nuxt.$emit("extensionActive",{active:1})},created:function(){var e=this;this.$nuxt.$on("getDataFromApi",function(a){return e.getDataFromApi(a)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},c=o,u=l(50),r=Object(u.a)(c,s,i,!1,null,null,null),p=n.default=r.exports;installComponents(r,{DocumentTableDocument:l(626).default})}}]);