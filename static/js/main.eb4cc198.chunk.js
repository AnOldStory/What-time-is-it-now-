(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},170:function(e,t,a){e.exports=a(402)},387:function(e,t,a){},402:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(17),i=a.n(r),c=a(23),l=a(24),s=a(26),h=a(25),m=a(27),u=a(405),d=a(407),b=a(406),p=a(68),f=a(51),g=a(103),E=a(149),v=a(18),j=a(72),O=a.n(j),y=a(44),w=a.n(y),k=a(105),C=a.n(k),I=a(102),N=a.n(I),x=a(162),S=a.n(x),T=a(152),W=a.n(T),J=a(153),U=a.n(J),z=a(161),M=a.n(z),B=a(154),q=a.n(B),A=a(155),D=a.n(A),F=a(50),P=a.n(F),R=a(150),$=a.n(R),G=a(404),H=a(408),K=(a(109),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement($.a,null,o.a.createElement(W.a,{avatar:o.a.createElement(U.a,{"aria-label":"Recipe"},this.props.author[0]),title:this.props.author}),o.a.createElement(q.a,null,o.a.createElement(P.a,{component:"p"},this.props.contents)),o.a.createElement(D.a,{disableActionSpacing:!0},o.a.createElement(G.a,{quote:"WhatTimeIsItNow?",hashtag:"#WhatTimeIsItNow?",url:"https://anoldstory.github.io/WhatTimeIsItNow/board/"+this.props.id},o.a.createElement(M.a,null,o.a.createElement(H.a,{size:32,round:!0}))))))}}]),t}(n.Component)),L=a(163),Q=a.n(L),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(E.a)({},e,t.target.value))}},a.state={name:"\uc775\uba85",text:"\uae00\uc744 \uc368\uc8fc\uc138\uc694",notice:[],loding:0},console.log(a.props.match),a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a.handleUpdate=a.handleUpdate.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://opso.ml/board").then(function(e){return e.json()}).then(function(t){e.setState({notice:JSON.parse(t)})}).catch(function(e){return console.log(e)})}},{key:"handleSubmit",value:function(){var e=this;this.setState({loding:1}),fetch("http://opso.ml/board",{method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({author:this.state.name,contents:this.state.text})}).then(function(){e.handleUpdate(),e.setState({text:"",loding:0})}).catch(function(e){return console.log(e)})}},{key:"handleUpdate",value:function(){var e=this;fetch("http://opso.ml/board").then(function(e){return e.json()}).then(function(t){e.setState({notice:JSON.parse(t)})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.notice;return o.a.createElement("div",null,o.a.createElement(O.a,{className:"center-box",container:!0,spacing:40,justify:"center",alignItems:"center"},o.a.createElement(O.a,{className:"paper",item:!0},o.a.createElement(w.a,null,o.a.createElement(O.a,{container:!0,direction:"column",justify:"center",className:"grid-padding"},o.a.createElement(C.a,{id:"outlined-name",label:"\uc774\ub984",value:this.state.name,onChange:this.handleChange("name"),margin:"none",variant:"outlined"}),o.a.createElement("br",null),o.a.createElement(C.a,{id:"outlined-multiline-static",label:"\ub0b4\uc6a9",multiline:!0,value:this.state.text,onChange:this.handleChange("text"),margin:"normal",variant:"outlined"}),o.a.createElement(N.a,{variant:"contained",color:"primary",onClick:this.handleSubmit,disabled:1===this.state.loding},1===this.state.loding?"\uae00\uc744 \uc62c\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4. ":"\uae00 \uc62c\ub9ac\uae30 ",o.a.createElement(S.a,null,"send")))),o.a.createElement("br",null),1===this.state.loding?o.a.createElement(Q.a,{className:"loding",disableShrink:!0}):o.a.createElement("br",null),o.a.createElement(w.a,null,t.map(function(t){return o.a.createElement(K,{key:t.id,author:t.author,contents:t.contents,id:t.id,match:e.props.match})})))))}}]),t}(n.Component),X=a(403),Y=(a(380),a(165)),Z=a.n(Y),_=a(164),ee=a.n(_),te=a(166),ae=a.n(te),ne=a(107),oe=a.n(ne),re=a(106),ie=(a(387),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e,t){a.setState({value:t})},a.state={value:0},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"nav"},o.a.createElement(ee.a,{position:"static"},o.a.createElement(Z.a,null,o.a.createElement(P.a,{variant:"h6",color:"inherit",noWrap:!0},"What time is it now?"),o.a.createElement(ae.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"secondary",textColor:"secondary"},o.a.createElement(oe.a,{icon:o.a.createElement(re.a,{icon:"home",size:"2x"}),label:"\uba54\uc778",component:X.a,to:"/WhatTimeIsItNow/"}),o.a.createElement(oe.a,{icon:o.a.createElement(re.a,{icon:"sticky-note",size:"2x"}),label:"\uae00\ubaa9\ub85d",component:X.a,to:"/WhatTimeIsItNow/post"})),this.props.match)))}}]),t}(n.Component));f.b.add(g.a,g.b);var ce=Object(p.createMuiTheme)({palette:{common:{black:"#000",white:"rgba(255, 255, 255, 1)"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"rgba(77, 171, 245, 1)",main:"rgba(33, 150, 243, 1)",dark:"rgba(23, 105, 170, 1)",contrastText:"#fff"},secondary:{light:"rgba(77, 171, 245, 1)",main:"rgba(255, 255, 255, 1)",dark:"rgba(23, 105, 170, 1)",contrastText:"rgba(23, 105, 170, 1)"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}}),le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p.MuiThemeProvider,{theme:ce},o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(ie,{match:this.props.match}),o.a.createElement(d.a,{exact:!0,path:"/WhatTimeIsItNow/"}),o.a.createElement(b.a,null,o.a.createElement(d.a,{path:"/WhatTimeIsItNow/post",component:V}),o.a.createElement(d.a,{path:"/WhatTimeIsItNow/post/:id",component:V})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[170,2,1]]]);
//# sourceMappingURL=main.eb4cc198.chunk.js.map