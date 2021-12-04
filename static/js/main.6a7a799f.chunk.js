(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),s=c(2),r=c(1),o=(c(9),c(10),c(0)),i=function(e){var t=e.setCurrentCity,c=e.buttonColor,n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],l=a[1],u=Object(r.useState)("Weather in your city"),j=Object(s.a)(u,2),d=j[0],m=j[1],b=Object(r.useState)(!1),h=Object(s.a)(b,2),f=h[0],p=h[1],O=function(){""===i.trim()?(m(""),p(!0)):(t(i),m("Weather in your city"))};return Object(o.jsx)("div",{className:"search",children:Object(o.jsxs)("div",{className:"search__container",children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"text",placeholder:d,value:i,onChange:function(e){0===i.length&&(m("Weather in your city"),p(!1)),l(e.target.value)},onClick:function(){0===i.length&&(m("Weather in your city"),p(!1))},className:"search__input",onKeyPress:function(e){0===i.trim().length&&(m(""),p(!0)),"Enter"===e.key&&O()},style:{borderColor:c}}),Object(o.jsx)("p",{className:"search__warning",children:f&&"Please write your city"})]}),Object(o.jsx)("button",{type:"button",className:"search__btn",onClick:O,style:{backgroundColor:c,borderColor:c},children:"Search"})]})})},l=(c(12),function(e){var t=e.data,c=e.temperature,n=e.buttonColor,a=Object(r.useState)("C"),i=Object(s.a)(a,2),l=i[0],u=i[1],j=function(e){e.preventDefault(),u(e.currentTarget.textContent)},d=function(e){return Math.round(9*(e-273.15)/5+32)};return Object(o.jsx)(o.Fragment,{children:t.main?Object(o.jsxs)("div",{className:"main-content",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("div",{className:"title__country-img",style:{backgroundImage:"url('https://openweathermap.org/images/flags/".concat(function(e){if(t.sys)return console.log(t),e.toLowerCase()}(t.sys.country),".png')")}}),Object(o.jsxs)("h2",{className:"title__text",children:[t.name,", ",t.sys.country]})]}),Object(o.jsx)("div",{className:"main-container",children:Object(o.jsxs)("div",{className:"temperature",children:[Object(o.jsx)("div",{className:"temperature__image",style:{backgroundImage:"url('https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png')")}}),Object(o.jsx)("h3",{className:"temperature__value width",children:"C"===l?"".concat(c(t.main.temp)," ").concat(l):"".concat(d(t.main.temp)," ").concat(l)}),Object(o.jsx)("button",{type:"button",className:"temperature__button temperature__button--left",onClick:j,style:{borderColor:n},children:"C"}),Object(o.jsx)("button",{type:"button",className:"temperature__button temperature__button--right",onClick:j,children:"F"})]})}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"left-side-info",children:[Object(o.jsx)("div",{className:"info__wrap",children:Object(o.jsxs)("h4",{className:"info__text",children:["Feels like: ",Object(o.jsx)("span",{className:"width",children:"C"===l?"".concat(c(t.main.feels_like)," C"):"".concat(d(t.main.feels_like)," F")})]})}),Object(o.jsx)("div",{className:"info__wrap",children:Object(o.jsxs)("h4",{className:"info__text",children:["min-temperature: ","C"===l?"".concat(c(t.main.temp_min)," C"):"".concat(d(t.main.temp_min)," F")]})}),Object(o.jsx)("div",{className:"info__wrap",children:Object(o.jsxs)("h4",{className:"info__text",children:["max-temperature: ","C"===l?"".concat(c(t.main.temp_max)," C"):"".concat(d(t.main.temp_max)," F")]})})]}),Object(o.jsxs)("div",{className:"rigth-side-info",children:[Object(o.jsx)("div",{className:"info-wrap",children:Object(o.jsxs)("h4",{className:"info__text",children:["Wind speed: ",t.wind.speed," m/s."]})}),Object(o.jsx)("div",{className:"info-wrap",children:Object(o.jsxs)("h4",{className:"info__text",children:["Clouds: ",t.clouds.all," %"]})}),Object(o.jsx)("div",{className:"info-wrap",children:Object(o.jsxs)("h4",{className:"info__text",children:["Humidity: ",t.main.humidity," %"]})})]})]})]}):Object(o.jsx)("div",{className:"error",children:"City not found"})})}),u="https://api.openweathermap.org/data/2.5",j="647b53cbe99d2eb31ae048ed78665cd8",d=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)({}),d=Object(s.a)(a,2),m=d[0],b=d[1],h=Object(r.useState)(0),f=Object(s.a)(h,2),p=f[0],O=f[1],x=Object(r.useState)(0),_=Object(s.a)(x,2),y=_[0],g=_[1],N=Object(r.useState)("#fff"),v=Object(s.a)(N,2),C=v[0],w=v[1];Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){g(e.coords.longitude),O(e.coords.latitude)}))}),[]);Object(r.useEffect)((function(){var e,t;p&&(e=p,t=y,fetch("".concat(u,"/weather?lat=").concat(e,"&lon=").concat(t,"&appid=").concat(j)).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return console.log(e)})))}),[p,y]),Object(r.useEffect)((function(){c&&function(e){fetch("".concat(u,"/weather?q=").concat(e,"&appid=").concat(j)).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return console.log(e)}))}(c)}),[c]);var k=function(e){return Math.round(e-273.15)},S=function(e){return e>0?70-e:160+e};return Object(r.useEffect)((function(){document.body.style.setProperty("transition","all, 0.3s"),m.main&&(k(m.main.temp)<-10?(document.body.style.setProperty("background-color","#00ffff"),w("#00ffff")):k(m.main.temp)>30?(document.body.style.setProperty("background-color","#ff8c00"),w("#ff8c00")):(document.body.style.setProperty("background-color","hsl(".concat(S(k(m.main.temp)),", 100%, 50%)")),w("hsl(".concat(S(k(m.main.temp)),", 100%, 50%)"))))}),[m]),Object(o.jsx)(o.Fragment,{children:m.main?Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("h1",{className:"page__title",children:"WEATHER."}),Object(o.jsx)(i,{setCurrentCity:n,buttonColor:C}),Object(o.jsx)(l,{data:m,temperature:k,buttonColor:C})]}):Object(o.jsx)("div",{className:"loading",children:"Loading..."})})};a.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.6a7a799f.chunk.js.map