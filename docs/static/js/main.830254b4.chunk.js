(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),s=a.n(r),l=(a(25),a(3)),i=a(4),m=a(2),o=a(5),u=a(6),h=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:"hero is-small"},c.a.createElement("div",{className:"hero-body has-text-centered"},c.a.createElement("div",{className:"container"},c.a.createElement("p",{className:"title"},this.props.title))))))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSearchInputChanges=function(e){e.preventDefault(),n.setState({searchValue:e.target.value})},n.resetInputField=function(){n.setState({searchValue:""}),document.querySelector(".input").value=""},n.callSearchFunction=function(e){e.preventDefault(),n.props.search(n.state.searchValue),n.resetInputField()},n.state={searchValue:""},n.handleSearchInputChanges=n.handleSearchInputChanges.bind(Object(m.a)(n)),n.resetInputField=n.resetInputField.bind(Object(m.a)(n)),n.callSearchFunction=n.callSearchFunction.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns is-centered"},c.a.createElement("div",{className:"column is-half"},c.a.createElement("div",{className:"field has-addons"},c.a.createElement("div",{className:"control is-expanded"},c.a.createElement("input",{className:"input",type:"text",value:this.state.searchValue,onChange:this.handleSearchInputChanges})),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"button is-info",onClick:this.callSearchFunction,type:"submit",value:"SEARCH"})))))))}}]),a}(n.Component),p=function(e){var t=e.weather,a=t.weather[0].icon,n=t.weather[0].main,r=function(e){return new Date(1e3*e).toLocaleString([],{hour:"2-digit",minute:"2-digit"})};return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns has-text-centered is-centered"},c.a.createElement("div",{className:"column is-half"},c.a.createElement("p",{className:"city"},t.name,", ",c.a.createElement("b",null,t.sys.country)),c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column"},c.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(a,"@2x.png"),alt:n})),c.a.createElement("div",{className:"column"},c.a.createElement("span",{className:"bigTemp bold"},Math.round(t.main.temp),"\xb0")),c.a.createElement("div",{className:"column description has-text-left"},c.a.createElement("p",null,c.a.createElement("b",null,Math.round(t.main.temp_max),"\xb0 ")," ",Math.round(t.main.temp_min),"\xb0"),c.a.createElement("p",null,t.weather[0].description),c.a.createElement("p",null,"sunrise: ",r(t.sys.sunrise)),c.a.createElement("p",null,"sunset: ",r(t.sys.sunset))))))))},E=a(9),v=function(e){var t=e.data,a=function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{className:"weather-details"},c.a.createElement("div",{className:"weather-details-data"},"".concat((a=1e3*e.dt-1e3)?new Date(a).getHours():(new Date).getHours(),":00")),c.a.createElement("div",{className:"weather-details-data"},c.a.createElement("strong",null,"".concat(Math.round(e.main.temp_max),"\xb0")," "),"".concat(Math.round(e.main.temp_min),"\xb0")),c.a.createElement("span",{className:"spacer"})));var a};return c.a.createElement("div",{className:"weather-hour"},t.map((function(e,t){return a(e,t)})))},f=function(e){var t=e.forecast,a=Object.values(t.reduce((function(e,t){var a=t.dt_txt.substr(0,10);return e[a]=e[a]||[],e[a].push(t),e}),{})),n=a.length>5?a.slice(1,6):a;return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns"},n.map((function(e,t){return c.a.createElement("div",{key:t,className:"column"},c.a.createElement("div",{className:"currentDay"},c.a.createElement("span",null,function(e){return["SUN","MON","TUE","WED","THU","FRI","SAT"][new Date(1e3*e[0].dt).getDay()]}(e)),c.a.createElement("span",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.forEach((function(e){a.push(e.main.temp_max),t.push(e.main.temp_min)}));var n={min:Math.round(Math.min.apply(Math,Object(E.a)(t))),max:Math.round(Math.max.apply(Math,Object(E.a)(a)))};return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("strong",null,"".concat(n.max,"\xb0C"))," / ","".concat(n.min,"\xb0C")))}(e))),c.a.createElement("span",null,c.a.createElement(v,{data:e})))})))))},b=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"content has-text-centered"},c.a.createElement("p",{className:"title is-7"},"what's the weather - 2020 - made by ",c.a.createElement("a",{href:"https://iamnelsonmartins.com"},"iamnelsonmartins"))))}}]),a}(n.Component),g=a(7),N=a.n(g);a(42);a(43).config();var y=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).removeBodyClass=function(){var e=document.body.className;document.body.classList.remove(e),document.body.classList.add("weather-default")},n.changeBG=function(){var e=(new Date).toLocaleString([],{hour:"2-digit",minute:"2-digit"});e>="05:00"&&e<="21:00"?document.body.classList.remove("weather-night"):document.body.classList.add("weather-night")},n.search=function(e){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&apikey=").concat("ef5568b5d45e62e08f16a76621315cb1","&units=metric"),a="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&apikey=").concat("ef5568b5d45e62e08f16a76621315cb1","&units=metric"),c=N.a.get(t),r=N.a.get(a);N.a.all([c,r]).then(N.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];n.setState({weather:t[0].data,forecast:t[1].data.list,loading:!1,search:!0,errorMessage:null})}))).catch((function(e){n.setState({errorMessage:e})}))},n.state={loading:!0,weather:[],forecast:[],errorMessage:null,search:!0},n.search=n.search.bind(Object(m.a)(n)),n.removeBodyClass=n.removeBodyClass.bind(Object(m.a)(n)),n.changeBG=n.changeBG.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},this.changeBG(),c.a.createElement(h,{title:"What's the weather like Today?"}),c.a.createElement(d,{search:this.search}),c.a.createElement("div",null,this.state.loading&&!this.state.errorMessage?c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container has-text-centered info"},c.a.createElement("p",null,"Type a city name to see the weather"))):this.state.errorMessage&&this.state.search?c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container has-text-centered info"},c.a.createElement("p",null,"something went wrong"),c.a.createElement("p",null,"did you forgot to type a city?"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{weather:this.state.weather}),c.a.createElement(f,{forecast:this.state.forecast}),c.a.createElement(b,null))))}}]),a}(n.Component);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.830254b4.chunk.js.map