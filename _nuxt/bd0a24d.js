(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{980:function(f,s,t){"use strict";t.r(s);var r=function(){var l=this,a=l._self._c;return a("div",[a("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"SI","form-url":"/app/sales/invoice/form","header-table":[{text:"Number",value:"document_number",cellClass:"disable-wrap"},{text:"Customer",value:"contact_name",cellClass:"disable-wrap"},{text:"Date",value:"issued_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Due Date",value:"due_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}})],1)},o=[],i={name:"SalesInvoice",head:function(){return{title:"A/R Invoice"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var l=this;this.$nuxt.$on("getDataFromApi",function(a){return l.getDataFromApi(a)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},c=i,u=t(50),n=Object(u.a)(c,r,o,!1,null,null,null),d=s.default=n.exports;installComponents(n,{DocumentTableDocument:t(628).default})}}]);