(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{992:function(e,r,t){"use strict";t.r(r);t(21),t(268),t(9),t(4),t(27),t(33),t(52);var o={name:"AllSales",data:function(){return{panel:[0,1,2,3,4,5,6],itemsPerPageArray:[4,8,12],sortDesc:!1,page:1,itemsPerPage:4,sortBy:"name",keys:["Name","Calories"],open:[1,2,3,4,5,6,7,8],search:null,caseSensitive:!1,items:[{id:1,name:"Business Overview",children:[{id:11,name:"Audit Log",route:"/app/reports/report/audit-log"},{id:12,name:"Statement of cash flow",route:"/app/reports/report/cash-flow"},{id:13,name:"Balance sheet",route:"/app/reports/report/balance-sheet"},{id:18,name:"Profit and loss",route:"/app/reports/report/profit-loss"}]},{id:2,name:"Who owe you",children:[{id:25,name:"Customer Balance Summary",route:"/app/reports/report/customer-balance"},{id:28,name:"Open invoice",route:"/app/reports/report/open-invoice"}]},{id:4,name:"Sales and customer",children:[{id:45,name:"Income by Customer Summary",route:"/app/reports/report/customer-invoice"},{id:47,name:"Inventory Valuation Summary",route:"/app/reports/report/inventory-valuation"},{id:411,name:"Product/Service List",route:"/app/reports/report/product"},{id:415,name:"Sales by Customer Summary",route:"/app/reports/report/sales-customer"},{id:421,name:"Sales by Product/Service Summary",route:"/app/reports/report/sales-product"},{id:423,name:"Transaction List by Customer",route:"/app/reports/report/transaction-customer"}]},{id:5,name:"What you owe",children:[{id:52,name:"Accounts payable aging summary",route:"/app/reports/report/payable"},{id:53,name:"Bill Payment List",route:"/app/reports/report/vendor-payment"},{id:55,name:"Unpaid Bills",route:"/app/reports/report/vendor-unpaid"},{id:57,name:"Vendor Balance Summary",route:"/app/reports/report/vendor"}]},{id:6,name:"Expense and vendor",children:[{id:61,name:"Expenses by Vendor Summary",route:"/app/reports/report/expense"},{id:62,name:"Open Purchase Order List",route:"/app/reports/report/open-purchase"},{id:64,name:"Purchases by Product/Service Detail",route:"/app/reports/report/purchase-product"},{id:66,name:"Transaction List by Vendor",route:"/app/reports/report/transaction-vendor"}]},{id:7,name:"Payroll",children:[{id:71,name:"Employee Contact List",route:"/app/reports/report/employee"},{id:72,name:"Paycheck History",route:"/app/reports/report/paycheck"},{id:73,name:"Payroll Billing Summary",route:"/app/reports/report/payroll"}]},{id:8,name:"Accounting",children:[{id:81,name:"Account List",route:"/app/reports/report/account"},{id:83,name:"Balance Sheet",route:"/app/reports/report/balance-sheet"},{id:84,name:"General Ledger",route:"/app/reports/report/gl"},{id:85,name:"Journal",route:"/app/reports/report/journal"},{id:88,name:"Profit and Loss",route:"/app/reports/report/profit-loss"},{id:811,name:"Recent Transactions",route:"/app/reports/report/transaction"},{id:813,name:"Statement of Cash Flows",route:"/app/reports/report/cash-flow"},{id:817,name:"Trial Balance",route:"/app/reports/report/trial-balance"},{id:818,name:"Account Balance",route:"/app/reports/report/account-balance"}]}]}},head:function(){return{title:"Reports"}},computed:{filter:function(){return this.caseSensitive?function(e,r,t){return e[t].includes(r)}:void 0}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var e=this;this.$nuxt.$on("getDataFromApi",(function(r){return e.getDataFromApi(r)}))},methods:{openDialog:function(e){this.$router.push({path:e.route,query:{name:e.name}})},getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},n=t(50),c=t(51),l=t.n(c),m=t(248),d=t(88),h=t(629),v=t(585),y=t(586),f=t(598),S=t(48),w=t(575),x=t(1137),component=Object(n.a)(o,(function(){var e=this,r=e._self._c;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"10"}},[r("v-card",{staticClass:"mx-auto"},[r("v-sheet",{staticClass:"pa-4 primary lighten-2"},[r("v-text-field",{attrs:{label:"Search Company Directory",dark:"",flat:"","solo-inverted":"","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:e.search,callback:function(r){e.search=r},expression:"search"}}),e._v(" "),r("v-checkbox",{attrs:{dark:"","hide-details":"",label:"Case sensitive search"},model:{value:e.caseSensitive,callback:function(r){e.caseSensitive=r},expression:"caseSensitive"}})],1),e._v(" "),r("v-card-text",[r("v-treeview",{attrs:{items:e.items,search:e.search,filter:e.filter,open:e.open,activatable:""},on:{"update:open":function(r){e.open=r}},scopedSlots:e._u([{key:"label",fn:function(t){var o=t.item;return[r("a",{on:{click:function(r){return e.openDialog(o)}}},[e._v(e._s(o.name))])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;l()(component,{VCard:m.a,VCardText:d.b,VCheckbox:h.a,VCol:v.a,VContainer:y.a,VRow:f.a,VSheet:S.a,VTextField:w.a,VTreeview:x.a})}}]);