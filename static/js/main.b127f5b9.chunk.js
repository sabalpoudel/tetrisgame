(this["webpackJsonpreact-tetris"]=this["webpackJsonpreact-tetris"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,l,u,s=t(0),d=t.n(s),b=t(12),f=t.n(b),j=(t(21),t(2)),x={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,"T",0],["T","T","T"],[0,0,0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},p=function(){var n="IJLOSTZ",e=n[Math.floor(Math.random()*n.length)];return x[e]},h=t(3),g=t(4),m=g.a.div(r||(r=Object(h.a)(["\n  width: auto;\n  /* border-radius: 5px; */\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"])),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),O=t(1),v=function(n){var e=n.type;return Object(O.jsx)(m,{type:e,color:x[e].color})},y=d.a.memo(v),w=g.a.div(o||(o=Object(h.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n  position: relative;\n  .gameStatusText {\n    left: 0;\n    right: 0;\n    top: 45%;\n    width: 100%;\n    margin: auto;\n    max-width: 25vw;\n    padding: 1.5rem 0;\n    color: lightgrey;\n    font-size: 1.5rem;\n    text-align: center;\n    position: absolute;\n    font-family: Pixel, Arial, Helvetica, sans-serif;\n    background-color: #ff000070;\n  }\n"])),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),S=function(n){var e=n.stage,t=n.pauseGame,r=n.gameOver;return Object(O.jsxs)(w,{width:e[0].length,height:e.length,children:[null===e||void 0===e?void 0:e.map((function(n){return n.map((function(n,e){return Object(O.jsx)(y,{type:n[0]},e)}))})),t&&Object(O.jsx)("div",{className:"gameStatusText",children:"Game Paused !!"}),r&&Object(O.jsx)("div",{className:"gameStatusText",children:"Game Over :("})]})},k=g.a.div(i||(i=Object(h.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"])),(function(n){return n.gameOver?"red":"#999"})),A=g.a.div(c||(c=Object(h.a)(["\n  width: 100%;\n  color: #999;\n  padding: 5px;\n  background: #000;\n  min-height: 30px;\n  font-size: 1rem;\n  align-items: center;\n  line-height: 1.5;\n  border-radius: 20px;\n  border: 4px solid #333;\n  box-sizing: border-box;\n  padding-inline-start: 0;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  p {\n    padding-left: 25px;\n  }\n  li {\n    margin-bottom: 5px;\n  }\n"]))),I=function(n){var e=n.gameOver,t=n.text;return Object(O.jsx)(k,{gameOver:e,children:t})},P=g.a.div(a||(a=Object(h.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: ",";\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"])),(function(n){return n.disabled?"grey":"white"})),T=function(n){var e=n.callback,t=n.text,r=n.disabled;return Object(O.jsx)(P,{onClick:function(n){return!r&&e(n)},disabled:r,children:t})},z=t.p+"static/media/bg.d63cfd51.png",L=g.a.div(l||(l=Object(h.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  overflow: hidden;\n"])),z),C=g.a.div(u||(u=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 40px;\n  margin: 0 auto;\n  max-width: 900px;\n\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]))),G=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},E=Array.from(Array(4),(function(){return new Array(4).fill(0)})),J=function(n,e,t){for(var r=t.x,o=t.y,i=0;i<(null===n||void 0===n?void 0:n.tetromino.length);i+=1)for(var c=0;c<n.tetromino[i].length;c+=1)if(0!==n.tetromino[i][c]&&(!e[i+n.pos.y+o]||!e[i+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[i+n.pos.y+o][c+n.pos.x+r][1]))return!0},R=function(n,e){for(var t=1;t<=20;++t){if(J(n,e,{x:0,y:t}))return t-1}},Z=function(n,e){var t=Object(s.useState)(G()),r=Object(j.a)(t,2),o=r[0],i=r[1],c=Object(s.useState)(0),a=Object(j.a)(c,2),l=a[0],u=a[1];return Object(s.useEffect)((function(){u(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(u((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};return i((function(n){return t(n)})),function(){}}),[n,e]),[o,i,l]},F=t(8);var H,M,D=[40,100,300,1200],U=function(){return Object(O.jsxs)(A,{children:[Object(O.jsx)("p",{children:"Controls"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Pause : Enter"}),Object(O.jsxs)("li",{children:["Move right :",Object(O.jsx)("br",{})," Right Arrow"," "]}),Object(O.jsxs)("li",{children:["Move down :",Object(O.jsx)("br",{})," Down Arrow"]}),Object(O.jsxs)("li",{children:["Move left :",Object(O.jsx)("br",{})," Left Arrow"]}),Object(O.jsxs)("li",{children:["Rotate :",Object(O.jsx)("br",{})," Up Arrow"]}),Object(O.jsxs)("li",{children:["Full Drop :",Object(O.jsx)("br",{})," Space bar"]})]})]})},N=t(16),B=g.a.div(H||(H=Object(h.a)(["\n  width: 100%;\n  color: #999;\n  padding: 5px;\n  display: flex;\n  font-size: 1rem;\n  min-height: 30px;\n  margin-bottom: 5px;\n  align-items: center;\n  box-sizing: border-box;\n  padding-inline-start: 0;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n"]))),K=g.a.div(M||(M=Object(h.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(5vw / ",")\n  );\n  width: 100%;\n  grid-gap: 1px;\n  max-width: 5vw;\n  grid-template-columns: repeat(",', 1fr);\n  margin-left: auto;\n  background-color: "#000";\n'])),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),q=function(n){var e=function(n){var e=Object(N.a)(n);return 2===e.length?(e.unshift([0,0]),e.push([0,0])):3===e.length&&e.unshift([0,0,0]),e}(n.tetromino);return Object(O.jsxs)(B,{children:["Upcoming",Object(O.jsx)(K,{width:4,height:4,children:null===E||void 0===E?void 0:E.map((function(n,t){return n.map((function(n,r){var o;return Object(O.jsx)(y,{type:(null===e||void 0===e||null===(o=e[t])||void 0===o?void 0:o[r])||0},"".concat(t,"-").concat(r))}))}))})]})},Q=d.a.memo(q),V=function(){var n=Object(s.useState)(null),e=Object(j.a)(n,2),t=e[0],r=e[1],o=Object(s.useState)(!1),i=Object(j.a)(o,2),c=i[0],a=i[1],l=Object(s.useState)(!1),u=Object(j.a)(l,2),d=u[0],b=u[1],f=function(){var n=Object(s.useState)({pos:{x:0,y:0},tetromino:x[0].shape,collided:!1}),e=Object(j.a)(n,2),t=e[0],r=e[1],o=Object(s.useState)(p().shape),i=Object(j.a)(o,2),c=i[0],a=i[1],l=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},u=Object(s.useCallback)((function(){r({pos:{x:4,y:0},tetromino:c,collided:!1}),a(p().shape)}),[c]);return[t,function(n){var e=n.x,t=n.y,o=n.collided;r((function(n){return Object(F.a)(Object(F.a)({},n),{},{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:o})}))},u,function(n,e){var o=Object(F.a)({},t);o.tetromino=l(o.tetromino,e);for(var i=o.pos.x,c=1;J(o,n,{x:0,y:0});)if(o.pos.x+=c,(c=-(c+(c>0?1:-1)))>o.tetromino[0].length)return l(o.tetromino,-e),void(o.pos.x=i);r(o)},c]}(),h=Object(j.a)(f,5),g=h[0],m=h[1],v=h[2],y=h[3],w=h[4],k=Z(g,v),A=Object(j.a)(k,3),P=A[0],z=A[1],E=function(n){var e=Object(s.useState)(0),t=Object(j.a)(e,2),r=t[0],o=t[1],i=Object(s.useState)(0),c=Object(j.a)(i,2),a=c[0],l=c[1],u=Object(s.useState)(0),d=Object(j.a)(u,2),b=d[0],f=d[1],x=Object(s.useCallback)((function(){n>0&&(l((function(e){return e+D[n-1]*(b+1)})),o((function(e){return e+n})))}),[b,n]);return Object(s.useEffect)((function(){x()}),[x,n,a]),[a,l,r,o,b,f]}(A[2]),H=Object(j.a)(E,6),M=H[0],N=H[1],B=H[2],K=H[3],q=H[4],V=H[5],W=function(n){console.log({dir:n}),J(g,P,{x:n,y:0})||m({x:n,y:0})},X=function(){B>10*(q+1)&&(V((function(n){return n+1})),r(1e3/(q+1)+200)),J(g,P,{x:0,y:1})?(g.pos.y<1&&(a(!0),r(!1)),m({x:0,y:0,collided:!0})):m({x:0,y:1,collided:!1})},Y=function(n){var e=n.keyCode;console.log("move",e),c||d||(37===e?W(-1):39===e?W(1):40===e?(console.log("dropPlayer"),r(null),X()):38===e?y(P,1):32===e&&(m({x:0,y:R(g,P),collided:!0}),r(100))),c||13!==e||$()};!function(n,e){var t=Object(s.useRef)();Object(s.useEffect)((function(){t.current=n}),[n]),Object(s.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){!c&&X()}),t);var $=function(){console.log("callPauseGame"),d?(b(!1),r(1e3/(q+1)+200)):(r(null),b(!0))};return Object(O.jsx)(L,{role:"button",tabIndex:"0",onKeyUp:function(n){return!c&&!d&&function(n){var e=n.keyCode;console.log("keyUp",e),40!==e&&32!==e||r(1e3/(q+1)+200)}(n)},onKeyDown:function(n){return Y(n)},children:Object(O.jsxs)(C,{children:[Object(O.jsxs)("aside",{children:[Object(O.jsx)(T,{text:d?"|> Resume Game":"II Pause Game",callback:$,disabled:c||1===g.tetromino.length}),Object(O.jsx)(Q,{tetromino:w}),Object(O.jsx)(U,{})]}),Object(O.jsx)(S,{stage:P,pauseGame:d,gameOver:c}),Object(O.jsxs)("aside",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(I,{text:"Score ".concat(M)}),Object(O.jsx)(I,{text:"Rows ".concat(B)}),Object(O.jsx)(I,{text:"Level ".concat(q)})]}),Object(O.jsx)(T,{text:1===g.tetromino.length||c?"Start Game":"Reset Game",callback:function(){z(G()),r(1e3/(q+1)+200),v(),b(!1),a(!1),N(0),K(0),V(0)}})]})]})})},W=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(V,{})})},X=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))};f.a.render(Object(O.jsx)(W,{}),document.getElementById("root")),X()}},[[25,1,2]]]);
//# sourceMappingURL=main.b127f5b9.chunk.js.map