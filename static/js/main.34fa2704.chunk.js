(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),l=a(16),c=a(15),i=a(17),o=a(0),u=a.n(o),s=a(22),m=a.n(s);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(66),h=a.n(E),d=a(43),p=a.n(d),f=a(28),v=a.n(f),b=a(34),g=a.n(b),C=a(23),S=a.n(C),O=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(g.a,{bg:"light",expand:"lg"},u.a.createElement(g.a.Brand,{href:"#home",onClick:function(){return e.props.onClick("home")}},"SAM-SAM"),u.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),u.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},u.a.createElement(v.a,{className:"mr-auto"},u.a.createElement(v.a.Link,{href:"#home",onClick:function(){return e.props.onClick("home")}},"Home"),u.a.createElement(v.a.Link,{href:"#status",onClick:function(){return e.props.onClick("status")}},"Processor Status"),u.a.createElement(S.a,{title:"Filters",id:"basic-nav-dropdown"},u.a.createElement(S.a.Item,{href:"#filterActions/localFilters",onClick:function(){return e.props.onClick("localFilters")}},"Local Filters"),u.a.createElement(S.a.Item,{href:"#filterActions/importFilters",onClick:function(){return e.props.onClick("importFilters")}},"Import Filters"),u.a.createElement(S.a.Item,{href:"#filterActions/filterStore",onClick:function(){return e.props.onClick("filterStore")}},"SAM Filter Store"),u.a.createElement(S.a.Divider,null),u.a.createElement(S.a.Item,{href:"#filterActions/OSC1",onClick:function(){return e.props.onClick("OSC1")}},"Core 1 Filter Settings"),u.a.createElement(S.a.Item,{href:"#filterActions/OSC2",onClick:function(){return e.props.onClick("OSC2")}},"Core 2 Filter Settings")),u.a.createElement(v.a.Link,{href:"#history",onClick:function(){return e.props.onClick("history")}},"History and Monitoring"),u.a.createElement(v.a.Link,{href:"#about",onClick:function(){return e.props.onClick("about")}},"About")),u.a.createElement(h.a,{inline:!0},u.a.createElement(p.a,{type:"text",placeholder:"Search filters",className:"mr-sm-2"}),u.a.createElement("button",{type:"submit"},"Search"))))}}]),t}(u.a.Component),y=a(11),k=a.n(y),A=a(1),j=a.n(A),F=a(27),x=a.n(F),w=a(8),L=a.n(w),M=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(k.a,{variant:"primary"},u.a.createElement(k.a.Heading,null,"Welcome to the SHARC Audio Module System Augmentation  and Management (SAM-SAM)"),u.a.createElement("hr",null),u.a.createElement("p",{className:"mb-0"},"This server is currently running on your SAM board and is provided as a tool to assist you in the rapid prototyping and evaluation of audio filters running on the SHARC cores of the processor.",u.a.createElement("br",null),"Use the menu items above to download filters and load them to the SHARC cores. Use Open Stage Control to manipulate the filters in real-time.")),u.a.createElement(x.a,null,u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("i",null,"Process Status")),u.a.createElement(j.a,null,"Provides the status of the processor cores. Lists which applications are running on the SHARC cores and whether each core is active",u.a.createElement("hr",null))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("i",null,"Filters > Local Filters")),u.a.createElement(j.a,null,"Management of audio filters currently stored on the SAM. This includes loading and removing filters",u.a.createElement("hr",null))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("i",null,"Filters > Import Filters")),u.a.createElement(j.a,null,"Upload new user-created filters to the SAM",u.a.createElement("hr",null),u.a.createElement("hr",null))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("i",null,"Filters > SAM Filter Store")),u.a.createElement(j.a,null,"View the ADI provided online repository of additional audio effects and filters for the SAM",u.a.createElement("hr",null))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("i",null,"Core 1 Filter Settings")),u.a.createElement(j.a,null,"Use Open Stage Control to manipulate the parameters of the algorithm running on the SHARC 1 core",u.a.createElement("hr",null))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("i",null,"Core 2 Filter Settings")),u.a.createElement(j.a,null,"Use Open Stage Control to manipulate the parameters of the algorithm running on the SHARC 2 core",u.a.createElement("hr",null))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("i",null,"History and Monitoring")),u.a.createElement(j.a,null,"View log files and errors status for support and maintenance of the device",u.a.createElement("hr",null)))))}}]),t}(u.a.Component),R=a(29),H=a.n(R),I=a(10),U=a.n(I),V=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={linuxVersion:"Loading",serverUptime:"Loading",samServerVersion:"Loading",samServerStatus:"Loading",core1OSCStatus:"Loading",core2OSCStatus:"Loading",core1State:"Loading",core1Mode:"Loading",core1Application:"Loading",core2State:"Loading",core2Mode:"Loading"},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Requestiong sysinfo from server"),fetch("http://thinkbox.spd.analog.com:3003/sysinfo").then(function(e){return e.json()}).then(function(t){return e.setState({linuxVersion:t.version,serverUptime:t.upTime,samServerVersion:t.serverVersion})}).catch(function(e){console.log("The fetch request failed: ",e)})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(x.a,null,u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement(k.a,{variant:"primary"},u.a.createElement(k.a.Heading,null,"Core0 (ARM Cortex-A5) running Linux")))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"Linux Version:")),u.a.createElement(j.a,{xs:6},u.a.createElement(k.a,{variant:"secondary"},this.state.linuxVersion))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"Uptime:")),u.a.createElement(j.a,{xs:6},u.a.createElement(k.a,{variant:"secondary"},this.state.serverUptime))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"SHARC Loader Service:")),u.a.createElement(j.a,{xs:6},u.a.createElement(H.a,null,u.a.createElement(U.a,{variant:"success"},"Active"),u.a.createElement(U.a,{variant:"secondary",disabled:!0},"Inactive"),u.a.createElement(U.a,{href:"#",variant:"primary"},"Restart")))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"Server Version:")),u.a.createElement(j.a,{xs:6},u.a.createElement(k.a,{variant:"secondary"},this.state.samServerVersion))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"Core 1 Open Stage Control Service:")),u.a.createElement(j.a,{xs:6},u.a.createElement(H.a,null,u.a.createElement(U.a,{variant:"success"},"Active"),u.a.createElement(U.a,{variant:"secondary",disabled:!0},"Inactive"),u.a.createElement(U.a,{href:"#",variant:"primary"},"Restart")))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"Core 2 Open Stage Control Service:")),u.a.createElement(j.a,{xs:6},u.a.createElement(H.a,null,u.a.createElement(U.a,{variant:"success",disabled:!0},"Active"),u.a.createElement(U.a,{variant:"danger"},"Inactive"),u.a.createElement(U.a,{href:"#",variant:"primary"},"Restart"))))),u.a.createElement(x.a,null,u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement(k.a,{variant:"primary"},u.a.createElement(k.a.Heading,null,"Core1 (SHARC+)")))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"SHARC State:")),u.a.createElement(j.a,{xs:6},u.a.createElement(H.a,null,u.a.createElement(U.a,{variant:"success"},"Active"),u.a.createElement(U.a,{variant:"secondary",disabled:!0},"Inactive"),u.a.createElement(U.a,{href:"#",variant:"primary"},"Restart")))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"SHARC Mode:")),u.a.createElement(j.a,{xs:6},u.a.createElement(k.a,{variant:"secondary"},"Audio Input"))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"Application:")),u.a.createElement(j.a,{xs:6},u.a.createElement(k.a,{variant:"secondary"},"Customer User Filter #1")))),u.a.createElement(x.a,null,u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement(k.a,{variant:"primary"},u.a.createElement(k.a.Heading,null,"Core2 (SHARC+)")))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"SHARC State:")),u.a.createElement(j.a,{xs:6},u.a.createElement(H.a,null,u.a.createElement(U.a,{variant:"success"},"Active"),u.a.createElement(U.a,{variant:"secondary",disabled:!0},"Inactive"),u.a.createElement(U.a,{href:"#",variant:"primary"},"Restart")))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"SHARC Mode:")),u.a.createElement(j.a,{xs:6},u.a.createElement(k.a,{variant:"secondary"},"Audio Output"))),u.a.createElement(L.a,null,u.a.createElement(j.a,null,u.a.createElement("b",null,"Application:")),u.a.createElement(j.a,{xs:6},u.a.createElement(k.a,{variant:"secondary"},"Equalizer")))))}}]),t}(u.a.Component),D=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e="";return e=1===this.props.coreID?"https://d2.alternativeto.net/dist/s/open-stage-control_607015_full.png?format=jpg&width=1600&height=1600&mode=min&upscale=false":"https://user-images.githubusercontent.com/5261671/30510969-39451104-9acf-11e7-8ee0-6e93fa34464d.png",u.a.createElement("div",null,u.a.createElement("img",{src:e,alt:"example"}))}}]),t}(u.a.Component),T=(a(123),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"TBD: Filters")}}]),t}(u.a.Component)),B=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"TBD: Import Filters")}}]),t}(u.a.Component),P=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"TBD: Filter Store")}}]),t}(u.a.Component),q=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,"TBD: About")}}]),t}(u.a.Component),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={pageAction:"home"},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){console.log("User clicked "+e),this.setState({pageAction:e})}},{key:"render",value:function(){var e=this,t=u.a.createElement(M,null);switch(console.log("Render() called for SamPage"),this.state.pageAction){case"home":t=u.a.createElement(M,null);break;case"status":t=u.a.createElement(V,null);break;case"localFilters":t=u.a.createElement(T,null);break;case"importFilters":t=u.a.createElement(B,null);break;case"filterStore":t=u.a.createElement(P,null);break;case"OSC1":t=u.a.createElement(D,{coreID:"1"});break;case"OSC2":t=u.a.createElement(D,{coreID:"2"});break;case"about":t=u.a.createElement(q,null);break;default:console.log("Error: Unknown action: "+this.props.pageAction)}return u.a.createElement("div",null,u.a.createElement(O,{onClick:function(t){return e.handleClick(t)}}),t)}}]),t}(u.a.Component);m.a.render(u.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,t,a){},67:function(e,t,a){e.exports=a(124)}},[[67,1,2]]]);
//# sourceMappingURL=main.34fa2704.chunk.js.map