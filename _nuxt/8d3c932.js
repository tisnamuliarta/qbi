(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{990:function(h,i,o){"use strict";o.r(i);var a=function(){var r=this,e=r._self._c;return e("div",[e("NuxtChild",{attrs:{"keep-alive":"","keep-alive-props":{exclude:["modal"]}}})],1)},s=[],p={name:"AllPurchase",head:function(){return{title:"All Purchase"}},activated:function(){this.$nuxt.$emit("extensionSetting",{tabs:[{title:this.$t("Purchase Order"),route:"/app/purchase/list/purchaseorder",icon:"mdi-store-edit"},{title:this.$t("Goods Receipt PO"),route:"/app/purchase/list/receipt",icon:"mdi-truck-fast"},{title:this.$t("A/P Invoice"),route:"/app/purchase/list/invoice",icon:"mdi-receipt"},{title:this.$t("A/P Credit Memo"),route:"/app/purchase/list/creditmemo",icon:"mdi-keyboard-return"},{title:this.$t("Goods Return"),route:"/app/purchase/list/return",icon:"mdi-truck-remove"}],show:!0,showBtn:!1,itemBtn:[{text:this.$t("Purchase Quotations"),type:"PQ",route:"/app/form/purchase/quote"},{text:this.$t("Purchase Order"),type:"PO",route:"/app/form/purchase/order"},{text:this.$t("Goods Receipt PO"),type:"GR",route:"/app/form/purchase/receipt"},{text:this.$t("A/P Invoice"),type:"PI",route:"/app/form/purchase/invoice"},{text:this.$t("Outgoing Payment"),type:"PP",route:"/app/form/purchase/payment"},{text:this.$t("A/P Credit Memo"),type:"APCM",route:"/app/form/purchase/creditmemo"},{text:this.$t("Goods Return"),type:"GR",route:"/app/form/purchase/return"}]})},created:function(){var r=this;this.$nuxt.$on("getDataFromApi",function(e){return r.getDataFromApi(e)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},u=p,n=o(50),c=Object(n.a)(u,a,s,!1,null,null,null),l=i.default=c.exports}}]);