(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{966:function(f,s,t){"use strict";t.r(s);var r=function(){var l=this,a=l._self._c;return a("div",[a("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"CE","form-url":"/app/form/purchase/payment","table-url":"/api/transactions",url:"/api/transactions","header-table":[{text:"Number",value:"transaction_no",cellClass:"disable-wrap"},{text:"Customer",value:"contact.name",cellClass:"disable-wrap"},{text:"Date",value:"issued_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Due Date",value:"due_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"main_account_amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},i=[],o={name:"AllPurchase",head:function(){return{title:this.$t("Outgoing Payment")}},activated:function(){this.$nuxt.$emit("extensionActive",{active:1})},created:function(){var l=this;this.$nuxt.$on("getDataFromApi",function(a){return l.getDataFromApi(a)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},u=o,c=t(50),n=Object(c.a)(u,r,i,!1,null,null,null),d=s.default=n.exports;installComponents(n,{DocumentTableDocument:t(626).default})}}]);
