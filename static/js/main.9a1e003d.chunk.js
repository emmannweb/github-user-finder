(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(3),c=a.n(l),s=(a(17),a(1)),o=a.n(s),i=a(4),u=a(5),m=a(6),p=a(7),f=a(10),g=a(8),d=a(11),h=(a(19),function(e){var t=e.SearchProps;return n.a.createElement("div",{className:"form-inline my-2 my-lg-0"},n.a.createElement("input",{onChange:t,className:"form-control mr-sm-2",type:"search",placeholder:"Filter by Username","aria-label":"Search"}))}),b=function(e){var t=e.NavbarSearchProps;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"navbar-brand"}," ",n.a.createElement("i",{className:"fab fa-github icone"}),"Github User Finder"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"}),n.a.createElement(h,{SearchProps:t}))))},v=function(e){return n.a.createElement("div",{className:"col-sm-3  cardbox"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"image_container"},n.a.createElement("img",{className:"user_image",src:e.user.avatar_url,alt:""})),n.a.createElement("div",{className:"titleCard"},n.a.createElement("h4",null,e.user.login)),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},"Followers: ",n.a.createElement("b",null," ",""+e.user.followers_url.length)),n.a.createElement("li",{className:"list-group-item"}," ","Following: ",n.a.createElement("b",null," ",""+e.user.following_url.length)),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("div",{className:"social_icon"},n.a.createElement("span",null,n.a.createElement("a",{href:e.user.html_url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-github","aria-hidden":"true"}))))))))},E=function(e){return n.a.createElement("div",{className:"container container_style"},n.a.createElement("div",{className:"row"},e.UsersProps.map((function(e,t){return n.a.createElement(v,{key:t,user:e})}))))},y=function(e){return n.a.createElement("button",{className:"btn btn-default btn-primary",onClick:e.ButtonEvent},"load more")},N=function(){return n.a.createElement("div",{className:"container-fluid footer_class"},n.a.createElement("div",{className:"container "},n.a.createElement("footer",null,n.a.createElement("span",null,"Github User Finder"))))},O=a(9),w=a.n(O),_=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"loaderstyle"},n.a.createElement("div",null,n.a.createElement("img",{src:w.a,alt:"loading...",style:{position:"relative",display:"block",margin:"auto",width:"100px",marginTop:"30px"}}))))};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var S=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).loadMoreUser=function(t){var a=e.state.post_per_page;e.setState((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{post_per_page:a+8})}),e.fetchUser),console.log("new user added")},e.fetchUser=function(){e.setState({loading:!0}),fetch("https://api.github.com/search/users?page=1&per_page=".concat(e.state.post_per_page,"&q=").concat(e.state.Query),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw Error("Request rejected with status ".concat(e.status))})).then((function(t){return e.setState({Users:t.items,loading:!1})})).catch((function(e){return console.log(e)}))},e.onChangeSearch=function(t){""===t.target.value?e.setState({Query:"emmann"},e.fetchUser):t.target.value.length>2&&(e.setState({Query:t.target.value},e.fetchUser),e.setState({post_per_page:8},e.fetchUser)),t.preventDefault()},e.state={Users:[],post_per_page:8,Query:"emma",loading:!1},e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchUser();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.Users,a=e.Query,r=t.filter((function(e){return e.login.toLowerCase().includes(a.toLowerCase())}));return n.a.createElement("div",{className:"App"},n.a.createElement(b,{NavbarSearchProps:this.onChangeSearch}),this.state.loading?n.a.createElement(_,null):n.a.createElement(E,{UsersProps:r}),this.state.loading?"":n.a.createElement(y,{ButtonEvent:this.loadMoreUser}),n.a.createElement(N,null))}}]),t}(r.Component);c.a.render(n.a.createElement(S,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/loader.46695451.gif"}},[[12,1,2]]]);
//# sourceMappingURL=main.9a1e003d.chunk.js.map