(this.webpackJsonprobo=this.webpackJsonprobo||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n(16)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(12),n(3)),c=n(4),s=n(6),m=n(5),u=function(e){var a=e.id,n=e.name,t=e.username,i=e.email;return r.a.createElement("div",{className:"tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/test".concat(a,"?200x20}")}),r.a.createElement("h2",null,n),r.a.createElement("h4",null,t),r.a.createElement("p",null,i))},h=function(e){var a=e.robots.map((function(e,a){return r.a.createElement(u,{key:a,id:e.id,name:e.name,username:e.username,email:e.email})}));return r.a.createElement("div",null,a)},d=(n(13),function(e){e.searchfield;var a=e.searchchange;return r.a.createElement("div",null,r.a.createElement("span",{className:"b f2"},"Search:"),r.a.createElement("input",{type:"search",placeholder:"Search frds...",className:"bg-light-blue dib br3 pa3 ma2",onChange:a}),r.a.createElement("br",null))}),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=(n(14),function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).onsearchchange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:b,searchfield:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(d,{searchchange:this.onsearchchange}),r.a.createElement(h,{robots:a}))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f225984e.chunk.js.map