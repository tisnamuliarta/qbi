(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1080:function(k,r,a){"use strict";a.r(r);var c=a(165),o=a(595),i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"text-center"},[n(o.a,{attrs:{bottom:"",right:"",timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var b=e.attrs;return[n(c.a,t._b({attrs:{color:"red",text:""},on:{click:function(h){t.snackbar=!1}}},"v-btn",b,!1),[t._v(`
        Close
      `)])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(`
    `+t._s(t.text)+`

    `)])],1)},l=[],u={name:"Snackbar",data:function(){return{snackbar:!1,text:"My timeout is set to 2000.",timeout:2e3}},methods:{display:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8e3,n=arguments.length>1?arguments[1]:void 0;this.snackbar=!0,this.timeout=t,this.text=n}}},v=u,m=a(50),d=Object(m.a)(v,i,l,!1,null,null,null),p=r.default=d.exports}}]);
