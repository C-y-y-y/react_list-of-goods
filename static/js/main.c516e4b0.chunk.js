(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),s=n.n(o),c=n(1),i=n(2),l=n(4),u=n(3),b=n(7),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isReversed:!1,sortBy:""},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.goods,n=this.state,a=n.isReversed,o=n.sortBy,s=Object(b.a)(t);return s.sort((function(e,t){switch(o){case"length":return e.length-t.length;case"alphabet":return e.localeCompare(t);default:return 0}})),a&&s.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"goodList"},r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("li",{key:e},e)})))),r.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),r.a.createElement("button",{type:"button",onClick:function(){e.setState({sortBy:"alphabet"})}},"Sort by alphabet"),r.a.createElement("button",{type:"button",onClick:function(){e.setState({sortBy:"length"})}},"Sort by length"),r.a.createElement("button",{type:"button",onClick:function(){e.setState({isReversed:!1,sortBy:""})}},"Reset"))}}]),n}(r.a.Component),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isVisible:!1},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isVisible;return r.a.createElement("div",null,!t&&r.a.createElement("button",{type:"button",onClick:function(){e.setState({isVisible:!0})}},"Start"),t?r.a.createElement(p,{goods:h}):"")}}]),n}(r.a.Component);s.a.render(r.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.c516e4b0.chunk.js.map