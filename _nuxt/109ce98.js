(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{989:function(f,s,t){"use strict";t.r(s);var i=function(){var l=this,a=l._self._c;return a("div",[a("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"PI","form-url":"/app/purchase/invoice/form","table-title":"Purchase Invoice","header-table":[{text:"Number",value:"document_number",cellClass:"disable-wrap"},{text:"Customer",value:"contact_name",cellClass:"disable-wrap"},{text:"Date",value:"issued_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Due Date",value:"due_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},r=[],o={name:"SalesInvoice",head:function(){return{title:"A/R Invoice"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var l=this;this.$nuxt.$on("getDataFromApi",function(a){return l.getDataFromApi(a)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},c=o,u=t(50),n=Object(u.a)(c,i,r,!1,null,null,null),b=s.default=n.exports;installComponents(n,{DocumentTableDocument:t(626).default})}}]);
