(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),s=n.n(o),l=(n(13),n(15),n(3)),r=n(4),i=n(6),m=n(5),u=n(7),h=function(){return c.a.createElement("div",{className:"header__section"},c.a.createElement("ion-icon",{className:"header__section-navIcon",name:"menu"}),c.a.createElement("p",{className:"header__section-logo"},"404News"),c.a.createElement("ul",{className:"header__section-list"},c.a.createElement("li",{className:"header__section-list-object"},"Yahoo"),c.a.createElement("li",{className:"header__section-list-object"},"BBC"),c.a.createElement("li",{className:"header__section-list-object"},"The NYT"),c.a.createElement("li",{className:"header__section-list-object"},"CNN"),c.a.createElement("li",{className:"header__section-list-object"},"Washington Post")),c.a.createElement("ion-icon",{className:"header__section-searchIcon",name:"search"}))},d=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=62abe08b0bac4d048638127c17e09e69").then(function(e){return e.json()}).then(function(e){return console.log(e.articles)}).catch(function(e){return console.log("ERROR: "+e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))}}]),t}(a.Component);s.a.render(c.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.eaa1224c.chunk.js.map