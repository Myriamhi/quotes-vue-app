(function(t){function e(e){for(var c,u,a=e[0],s=e[1],l=e[2],b=0,f=[];b<a.length;b++)u=a[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);i&&i(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(c=!1)}c&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var c={},o={app:0},r=[];function u(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=c,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)u.d(n,c,function(e){return t[e]}.bind(null,c));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var i=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={class:"p-3"},r={class:"mx-auto max-w-screen-lg flex items-center justify-center"},u=Object(c["f"])("Home"),a=Object(c["f"])("All Quotes");function s(t,e,n,s,l,i){var b=Object(c["v"])("router-link"),f=Object(c["v"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",o,[Object(c["g"])("div",r,[Object(c["g"])(b,{to:"/",class:"mx-2 btn"},{default:Object(c["A"])((function(){return[u]})),_:1}),Object(c["g"])(b,{to:"/all",class:"mx-2 btn"},{default:Object(c["A"])((function(){return[a]})),_:1})])]),Object(c["g"])(f)],64)}var l=n("5502"),i={setup:function(){var t=Object(l["b"])();Object(c["o"])((function(){t.commit("GetAllQuotes")}))}};i.render=s;var b=i,f=n("6c02"),j={class:"home"},O={class:"mx-auto max-w-screen-lg"},d={class:"flex items-center flex-col justify-center"},p={key:0,class:"mb-6 my-10 text-2xl text-center text-gray-500"},g=Object(c["g"])("br",null,null,-1),m={class:"text-gray-400"};function v(t,e){return Object(c["q"])(),Object(c["d"])("div",j,[Object(c["g"])("div",O,[Object(c["g"])("div",d,[Object(c["g"])("div",{class:"btn",onClick:e[1]||(e[1]=function(e){return t.$store.commit("GetRandomQuote")})},"Get Random Quote"),"undefined"!=typeof t.$store.state.quote._id?(Object(c["q"])(),Object(c["d"])("p",p,[Object(c["g"])("span",null,'"'+Object(c["x"])(t.$store.state.quote.content)+'"',1),g,Object(c["g"])("span",m,"- "+Object(c["x"])(t.$store.state.quote.author),1)])):Object(c["e"])("",!0)])])])}const x={};x.render=v;var h=x,y={class:"p-3"},q={class:"mx-auto max-w-screen-lg"},w=Object(c["g"])("h1",null,"All Quotes",-1),_={class:"py-4"},Q={class:"my-5 text-lg text-center text-gray-500"},k=Object(c["g"])("br",null,null,-1),A={class:"text-gray-400"};function G(t,e,n,o,r,u){var a=Object(c["v"])("router-link");return Object(c["q"])(),Object(c["d"])("div",y,[Object(c["g"])("div",q,[w,Object(c["g"])("div",_,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(t.$store.state.quotes,(function(t,e){return Object(c["q"])(),Object(c["d"])(a,{key:t._id,to:"/quote/".concat(t._id)},{default:Object(c["A"])((function(){return[Object(c["g"])("div",{class:"quote py-2 ".concat(e%2==0?"bg-gray-100":"")},[Object(c["g"])("p",Q,[Object(c["g"])("span",null,'"'+Object(c["x"])(t.content)+'"',1),k,Object(c["g"])("span",A,"- "+Object(c["x"])(t.author),1)])],2)]})),_:2},1032,["to"])})),128))])])])}var S={};S.render=G;var P=S,$={class:"py-3"},M={class:"mx-auto max-w-screen-lg"},R={class:"text-3xl text-center"},T={class:"my-5 text-2xl text-center text-gray-500"};function H(t,e,n,o,r,u){return Object(c["q"])(),Object(c["d"])("div",$,[Object(c["g"])("div",M,[Object(c["g"])("h1",R,Object(c["x"])(o.quote.author),1),Object(c["g"])("p",T,' "'+Object(c["x"])(o.quote.content)+'" ',1)])])}var J={setup:function(){var t=Object(f["c"])(),e=Object(l["b"])(),n=Object(c["t"])({});return Object(c["o"])((function(){setTimeout((function(){n.value=e.getters.GetSpecificQuote(t.params.id)}),100)})),{quote:n}}};J.render=H;var C=J,D=[{path:"/",name:"Home",component:h},{path:"/all",name:"All Quotes",component:P},{path:"/quote/:id",name:"Single Quote",component:C}],z=Object(f["a"])({history:Object(f["b"])("/"),routes:D}),B=z,E=(n("4de4"),n("d3b7"),Object(l["a"])({state:{quote:{},quotes:[]},mutations:{GetRandomQuote:function(t){var e=this;fetch("http://localhost:3000/quotes/random").then((function(t){return t.json()})).then((function(n){t.quote._id!=n._id?t.quote=n:(console.log("Duplicate"),e.commit("GetRandomQuote"))}))},GetAllQuotes:function(t){fetch("http://localhost:3000/quotes").then((function(t){return t.json()})).then((function(e){t.quotes=e}))}},getters:{GetSpecificQuote:function(t){return function(e){return t.quotes.filter((function(t){return t._id==e}))[0]}}}}));n("def6");Object(c["c"])(b).use(E).use(B).mount("#app")},def6:function(t,e,n){}});
//# sourceMappingURL=app.6a6c60ba.js.map