(this["webpackJsonpdata-table-component"]=this["webpackJsonpdata-table-component"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(4),o=n.n(a),l=(n(12),n(2)),i=n.n(l),u=n(5),s=n(1),m=function(e){var t=e.columns;return r.a.createElement("thead",{style:{background:"#ccc",border:"none"}},r.a.createElement("tr",null,t&&t.length&&t.map((function(e){return r.a.createElement("th",{key:e.id},"string"===typeof e.label?e.label:null,"function"===typeof e.label?e.label(e):null)}))))},f=n(6);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,b=function(e){var t=e.datum,n=e.rowIndex,c=e.onRowClick,a=e.columns,o=e.selectRows;return r.a.createElement("tr",{onClick:c},a.length&&a.map((function(e,c){return r.a.createElement("td",{key:c,style:{textAlign:e.textAlign},onClick:o(d({},t,{rowIndex:n}))},e.element(t))})))},g=function(e){var t=e.data,n=e.columns,c=e.onRowClick,a=e.selectRows;return r.a.createElement("tbody",null,t.length?t.map((function(e,t){return r.a.createElement(b,Object.assign({key:t},{datum:e,rowIndex:t,onRowClick:c,columns:n,selectRows:a}))})):null)},w=function(e){var t=e.columns,n=e.rows,c=e.onRowClick,a=e.selectRows,o=e.setPreviousPage,l=e.setNextPage;return r.a.createElement("div",{style:{maxHeight:"400px",overflow:"scroll",margin:"0 auto",fontSize:"10px",clear:"both"},onScroll:function(e){var t=e.target;t.scrollTop+50>=t.scrollHeight-t.offsetHeight&&l(),t.scrollHeight<100&&o()}},r.a.createElement("table",{style:{width:"100%"}},r.a.createElement(m,{columns:t}),r.a.createElement(g,{data:n,columns:t,onRowClick:c,selectRows:a})))},O=[{id:"number",label:function(e){return r.a.createElement("input",{type:"checkbox",checked:e.checked,onClick:p()})},element:function(e){var t=Object(c.useState)(e.checked),n=Object(s.a)(t,2),a=n[0],o=n[1];return r.a.createElement("input",{type:"checkbox",value:e.id,checked:Boolean(e.checked),onChange:function(e){o(!a)}})}},{id:"albumId",label:"AlbumId",element:function(e){return r.a.createElement("span",null,e.albumId)},width:"100px",textAlign:"right"},{id:"id",label:"id",element:function(e){return r.a.createElement("span",null,e.id)},width:"100px",textAlign:"right"},{id:"thumbnailUrl",label:"thumbnailUrl",element:function(e){return r.a.createElement("span",null,e.thumbnailUrl)},width:"100px",textAlign:"left"},{id:"title",label:"Title",element:function(e){return r.a.createElement("span",null,e.title)},width:"100px",textAlign:"left"}],k=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],o=n[1],l=Object(c.useState)(1),m=Object(s.a)(l,2),f=m[0],h=m[1],d=Object(c.useState)([]),b=Object(s.a)(d,2),g=b[0],k=b[1],y=Object(c.useState)(2),j=Object(s.a)(y,2),E=j[0];j[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.json()}));case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var v=Math.ceil(a.length/100);Object(c.useEffect)((function(){var e=100*Math.max(f-E,0),t=100*Math.min(f+E,v),n=a.slice(e,t);k(n)}),[a,f]),p=function(e){return function(t){a=a.map((function(t,n){return e&&e.rowIndex===n&&(t.checked=!Boolean(t.checked)),e||(t.checked=!Boolean(t.checked)),t})),o(a)}};return r.a.createElement(w,{setNextPage:function(){h(f++)},selectRows:p,onRowClick:function(e){return console.log(e)},onSelectionChanged:function(e){return console.log(e,"selection Changed")},rows:g,columns:O,numberOfEntry:100})};n(14);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Datatable"),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.9803776f.chunk.js.map