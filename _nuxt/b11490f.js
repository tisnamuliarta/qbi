(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1008:function(f,s,l){"use strict";l.r(s);var n=function(){var e=this,t=e._self._c;return t("div",[t("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"SO","form-url":"/app/form/sales/order","header-table":[{text:e.$t("Transaction No"),value:"transaction_no",cellClass:"disable-wrap"},{text:"Customer",value:"contact.name",cellClass:"disable-wrap"},{text:e.$t("Transaction Date"),value:"transaction_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:e.$t("Due Date"),value:"due_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},i=[],o={name:"AllPurchase",head:function(){return{title:this.$t("Sales Order")}},activated:function(){this.$nuxt.$emit("extensionActive",{active:0})},created:function(){var e=this;this.$nuxt.$on("getDataFromApi",function(t){return e.getDataFromApi(t)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},c=o,u=l(50),r=Object(u.a)(c,n,i,!1,null,null,null),d=s.default=r.exports;installComponents(r,{DocumentTableDocument:l(626).default})}}]);