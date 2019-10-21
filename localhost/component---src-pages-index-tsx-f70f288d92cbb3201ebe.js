(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{295:function(n,e,t){"use strict";t.r(e);t(45);var a=t(0),i=t.n(a),r=t(342),s=t(161),o=t(348),c=t(350),u=t(349),l=t(347),d=t(341),m=t(327),f=t(326),b=t(338),h=t.n(b),g=t(325);function k(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n                  margin-right: 5px;\n                "]);return k=function(){return n},n}var v=function(n){var e=n.blocks,t=[{key:"columnIndex",name:"Index",fieldName:"index",iconName:"NumberSymbol",isIconOnly:!0,minWidth:5,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0},{key:"columnHash",name:"Hash",fieldName:"hash",minWidth:200,maxWidth:450,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(n){return i.a.createElement(u.a,{href:"./block/?"+n.hash},n.hash)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0},{key:"coulmnMiner",name:"Miner",fieldName:"miner",minWidth:200,maxWidth:450,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0},{key:"columnTimeTaken",name:"Time Taken",minWidth:80,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0,onRender:function(n,t){var a=e[Math.min(t+1,e.length-1)],r=Date.parse(a.timestamp),s=Date.parse(n.timestamp);return i.a.createElement(i.a.Fragment,null,(s-r)/1e3)}},{key:"columnTxNumber",name:"Tx #",minWidth:5,maxWidth:20,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"number",isPadded:!0,onRender:function(n){return i.a.createElement(i.a.Fragment,null,n.transactions.length)}}];return i.a.createElement(l.a,{items:e.slice(0,-1),columns:t,selectionMode:d.b.none,getKey:function(n){return n.hash},setKey:"set",layoutMode:m.e.justified,isHeaderVisible:!0,onItemInvoked:function(n){return Object(s.navigate)("/block/?"+n.hash)}})};e.default=function(n){var e=n.location,t=function(n){var e=Object(g.a)(n),t=e[0],a=e[1];return[h.a.parse(t),function(n){return a(h.a.stringify(n))}]}(e),s=t[0],u=t[1],l=s.offset,d=void 0===l?0:l,m=function(n){if(n<1){var e=Object.assign({},s);delete e.offset,u(e)}else u(Object.assign({},s,{offset:n}))},b=function(){m(+d+21)},p=function(){m(+d-21)},y=Object(a.useState)(!1),x=y[0],E=y[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{label:"Include blocks having any tx",checked:x,onChange:function(n,e){E(!!e)}}),i.a.createElement(f.b,{variables:{offset:d,limit:21,excludeEmptyTxs:x}},function(n){var e=n.data,t=n.loading;if(n.error)return i.a.createElement("p",null,"error!");var a=e&&e.blocks?e.blocks.map(function(n){return new Date(n.timestamp)}):null,s=a?0:null;if(null!=s&&a){for(var o=0;o<a.length-1;o++)s+=+a[o]-+a[o+1];s/=1e3*(a.length-1)}var u=e&&e.blocks?e.blocks.map(function(n){return n.difficulty}):null,l=0;return null!=l&&u&&(l=u.reduce(function(n,e){return n+e},0)/u.length),i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{key:"interval"},"Average interval in this page: ",s," sec"),i.a.createElement("p",{key:"difficulty"},"Average difficulty in this page: ",l),i.a.createElement(c.a,{onClick:p,disabled:t||d<1,className:Object(r.a)(k())},"← Newer"),i.a.createElement(c.a,{disabled:t,onClick:b},"Older →"),t?i.a.createElement("p",null,"Loading…"):i.a.createElement(v,{blocks:t?[]:e.blocks}))}))}},325:function(n,e,t){"use strict";t.d(e,"a",function(){return r});t(162);var a=t(0),i=t(161);function r(n){return[Object(a.useMemo)(function(){return n.search.substr(1)},[n]),Object(a.useCallback)(function(e){var t=n.pathname.substr(Object(i.withPrefix)("/").length-1);Object(i.navigate)(t+(e?"?"+e:""))},[n,i.navigate])]}},326:function(n,e,t){"use strict";t.d(e,"b",function(){return g}),t.d(e,"a",function(){return v}),t.d(e,"c",function(){return y});t(45);var a=t(163),i=t.n(a),r=t(0),s=t(328);t(330);function o(){var n=m(["\n  query TransactionById($id: ID) {\n    transaction(id: $id) {\n      ...TransactionCommon\n    }\n  }\n  ","\n"]);return o=function(){return n},n}function c(){var n=m(["\n  query BlockByHash($hash: ID) {\n    block(hash: $hash) {\n      ...BlockCommon\n      miner\n      nonce\n      previousBlock {\n        hash\n      }\n      transactions {\n        ...TransactionCommon\n      }\n    }\n  }\n  ","\n  ","\n"]);return c=function(){return n},n}function u(){var n=m(["\n  query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n    blocks(\n      desc: true\n      offset: $offset\n      limit: $limit\n      excludeEmptyTxs: $excludeEmptyTxs\n    ) {\n      ...BlockCommon\n      miner\n      transactions {\n        id\n      }\n    }\n  }\n  ","\n"]);return u=function(){return n},n}function l(){var n=m(["\n  fragment TransactionCommon on Transaction {\n    id\n    nonce\n    publicKey\n    signature\n    signer\n    timestamp\n    updatedAddresses\n  }\n"]);return l=function(){return n},n}function d(){var n=m(["\n  fragment BlockCommon on Block {\n    hash\n    index\n    difficulty\n    timestamp\n  }\n"]);return d=function(){return n},n}function m(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=i()(d()),b=i()(l()),h=i()(u(),f),g=function(n){return r.createElement(s.b,Object.assign({query:h},n))};var k=i()(c(),f,b),v=function(n){return r.createElement(s.b,Object.assign({query:k},n))};var p=i()(o(),b),y=function(n){return r.createElement(s.b,Object.assign({query:p},n))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f70f288d92cbb3201ebe.js.map