(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{914:function(f,s,t){"use strict";t.r(s);var n=function(){var a=this,e=a._self._c;return e("div",[e("DocumentTableDocument",{ref:"tableDocument",attrs:{"type-document":"EXPENSE","form-url":"/app/expense/form","header-table":[{text:"Number",value:"document_number",cellClass:"disable-wrap"},{text:"Customer",value:"contact_name",cellClass:"disable-wrap"},{text:"Date",value:"issued_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Due Date",value:"due_at",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Status",value:"status",align:"left",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Balance Due",value:"balance_due",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Total",value:"amount",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"actions",align:"center",cellClass:"disable-wrap",sortable:!1,filterable:!1}]}}),a._v(" "),e("NuxtChild",{attrs:{"keep-alive":"","keep-alive-props":{include:["form"]}}})],1)},i=[],o={name:"Expense",layout:"dashboard",head:function(){return{title:"Expense"}},created:function(){var a=this;this.$nuxt.$on("getDataFromApi",function(e){return a.getDataFromApi(e)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},u=o,c=t(50),r=Object(c.a)(u,n,i,!1,null,null,null),p=s.default=r.exports;installComponents(r,{DocumentTableDocument:t(626).default})}}]);
