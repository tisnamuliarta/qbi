(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{997:function(f,s,l){"use strict";l.r(s);var r=function(){var e=this,a=e._self._c;return a("div",[a("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"GN","form-url":"/app/form/purchase/return","header-table":[{text:e.$t("Transaction No"),value:"transaction_no",cellClass:"disable-wrap"},{text:"Vendor",value:"contact.name",cellClass:"disable-wrap"},{text:e.$t("Transaction Date"),value:"transaction_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:e.$t("Due Date"),value:"due_date",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},i=[],o={name:"AllPurchase",head:function(){return{title:this.$t("Goods Return")}},activated:function(){this.$nuxt.$emit("extensionActive",{active:4})},created:function(){var e=this;this.$nuxt.$on("getDataFromApi",function(a){return e.getDataFromApi(a)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},c=o,u=l(50),n=Object(u.a)(c,r,i,!1,null,null,null),d=s.default=n.exports;installComponents(n,{DocumentTableDocument:l(626).default})}}]);
