(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=(a(17),function(){return r.a.createElement("div",{className:"main-banner img-container diagonal l-section",id:"main-banner"},r.a.createElement("div",{className:"ed-grid lg-grid-6"},r.a.createElement("div",{className:"lg-cols-4 lg-x-2"},r.a.createElement("img",{className:"main-banner__img",src:"img/banner-img.png",alt:"alt-Banner"}),r.a.createElement("div",{className:"main-banner__data s-center"},r.a.createElement("p",{className:"t2 s-mb-0"},"Shopping Card Emulator"),r.a.createElement("p",null,"New fashion trends"),r.a.createElement("input",{className:"nav-input",type:"text",placeholder:"Explore Products"})))))}),o=a(3),m=Object(o.b)(function(e){return{cartLegth:e.cart.length}})(function(e){var t=e.cartLegth;return r.a.createElement("li",{className:"s-card"},r.a.createElement("i",{className:"fas fa-cart-arrow-down"}),r.a.createElement("span",{className:"s-card__number"}," ","".concat(t)," "))}),s=(Object(n.createRef)(),function(){return r.a.createElement("header",{className:"main-header"},r.a.createElement("div",{className:"ed-grid s-grid-5 lg-grid-4"},r.a.createElement("div",{className:"s-cols-4 lg-cols-1 s-cross-center"},r.a.createElement("nav",null,r.a.createElement(m,null)))))}),u=function(e){var t=e.id,a=e.title,n=e.image,i=e.addCourseToCart,c=e.cart,l=e.deleteCourseFromCart;return r.a.createElement("article",{className:"card",id:a},r.a.createElement("div",{className:"img-container s-ratio-16-9 s-radius-tr s-radius-tl"},r.a.createElement("img",{src:n,alt:a})),r.a.createElement("div",{className:"card__data s-border s-radius-br s-radius-bl s-pxy-2"},r.a.createElement("h3",{className:"t5 s-mb-2 s-center"},a),r.a.createElement("div",{className:"s-main-center"},c.find(function(e){return e===t})?r.a.createElement("button",{className:"button--ghost-alert button--tiny",onClick:function(){return l(t)}},"Remove Card"):r.a.createElement("button",{className:"button--ghost-alert button--tiny",onClick:function(){return i(t)}},"Add to Car"))))};u.defaultProps={title:"No titles",image:"https://scott88lee.github.io/FMX/img/avatar.jpg"};var g=Object(o.b)(function(e){return{cart:e.cart}},function(e){return{addCourseToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))},deleteCourseFromCart:function(t){e(function(e){return{type:"DELETE_FROM_CART",id:e}}(t))}}})(u),d=[{id:1,title:"title1",image:"img/img1.jpg"},{id:2,title:"title2",image:"img/img2.jpg",price:"100",cursoLink:"https://www.google.com"},{id:3,title:"title3",image:"img/img3.jpg",price:"150",cursoLink:"https://www.google.com"},{id:4,title:"title4",image:"img/img4.jpg"},{id:5,title:"title5",image:"img/img3.jpg"},{id:6,title:"title6",image:"img/img4.jpg"},{id:7,title:"title7",image:"img/img1.jpg"},{id:8,title:"title8",image:"img/img2.jpg"}],p=function(){return r.a.createElement("div",{className:"ed-grid s-grid-2 m-grid-3 l-grid-4"},d.map(function(e){return r.a.createElement(g,{key:e.id,id:e.id,title:e.title,image:e.image})}))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(l,null),r.a.createElement(p,null))},E=a(11),b=a(5);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(E.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var w={cart:[]},O=Object(b.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return"ADD_TO_CART"===t.type?e.cart.find(function(e){return e===t.id})?e:h({},e,{cart:e.cart.concat(t.id)}):"DELETE_FROM_CART"===t.type?h({},e,{cart:e.cart.filter(function(e){return e!==t.id})}):e}),j=(a(23),function(){return r.a.createElement(o.a,{store:O},r.a.createElement(f,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.74aafe81.chunk.js.map