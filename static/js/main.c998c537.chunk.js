(this["webpackJsonpstar-wars-cards"]=this["webpackJsonpstar-wars-cards"]||[]).push([[0],{32:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},88:function(e,t,r){},96:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),a=r.n(c),s=r(46),i=r.n(s),o=(r(54),r(16)),l=r(2),u=(r(55),r(3)),j=r.n(u),d=r(8),h=r(10);function p(e){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r(32);var x=function(e){var t=e.character;return Object(n.jsx)("div",{class:"flip-card",children:Object(n.jsxs)("div",{class:"flip-card-inner",children:[Object(n.jsxs)("div",{class:"flip-card-front",children:[Object(n.jsx)("img",{src:t.image,alt:t.name}),Object(n.jsx)("div",{className:"overlay",children:Object(n.jsx)("h1",{className:"front-text",children:t.name})})]}),Object(n.jsxs)("div",{class:"flip-card-back",children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsx)("h2",{children:t.species}),Object(n.jsx)("h2",{children:t.homeworld}),t.masters&&Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("p",{children:[t.name," was trained by ",t.masters[0]]})})]})]})})};var O=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(!0),i=Object(h.a)(s,2),o=i[0],l=i[1],u="https://akabab.github.io/starwars-api/api";Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(u+"/all.json");case 2:return t=e.sent,e.next=5,b(t);case 5:e.sent,l(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var b=function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(u+"/id/"+t.id+".json");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:r=e.sent,a(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:o?Object(n.jsx)("h1",{children:"Loading..."}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"grid-container",style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:r.map((function(e,t){return Object(n.jsx)(x,{character:e},t)}))})})})},g=r(47),v=r.n(g),w=a.a.createRef();var y=function(e){var t=e.character;return Object(n.jsxs)("div",{class:"flip-card",children:[Object(n.jsx)(v.a,{targetRef:w,filename:"SWcard.pdf",children:function(e){var t=e.toPdf;return Object(n.jsx)("button",{onClick:t,style:{backgroundColor:"#f9d71c",borderRadius:"5px",color:"black",fontWeight:"800",marginTop:"2rem",marginBottom:"1rem",border:"1px solid black",cursor:"pointer",padding:".5rem"},children:"Export as PDF"})}}),Object(n.jsxs)("div",{class:"flip-card-inner",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"flip-card-front",ref:w,children:[Object(n.jsx)("img",{src:t.image,alt:t.name}),Object(n.jsx)("div",{className:"overlay",children:Object(n.jsx)("h1",{className:"front-text",children:t.name})})]})}),Object(n.jsxs)("div",{class:"flip-card-back",children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsx)("h2",{children:t.species}),Object(n.jsx)("h2",{children:t.homeworld}),t.masters&&Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("p",{children:[t.name," was trained by ",t.masters]})})]})]})]})};var k=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(!0),i=Object(h.a)(s,2),o=(i[0],i[1]),l=Object(c.useState)([]),u=Object(h.a)(l,2),b=u[0],m=u[1],x=Object(c.useState)(""),O=Object(h.a)(x,2),g=O[0],v=O[1],w="https://akabab.github.io/starwars-api/api";Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(w+"/all.json");case 2:return t=e.sent,e.next=5,k(t);case 5:e.sent,o(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var k=function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(w+"/id/"+t.id+".json");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:r=e.sent,m(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"3rem"},children:[Object(n.jsx)("label",{htmlFor:"search",style:{color:"#f9d71c",fontSize:"1.5rem",fontWeight:"600",marginBottom:"1rem"},children:"Search for a character by name"}),Object(n.jsx)("input",{style:{width:"60%",alignItems:"center",height:"2rem",borderRadius:"5px"},type:"text",value:r,onChange:function(e){v(""),a(e.target.value)}}),Object(n.jsx)("button",{style:{backgroundColor:"#f9d71c",borderRadius:"5px",color:"black",fontWeight:"800",marginTop:"2rem",border:"1px solid black",cursor:"pointer",padding:".5rem"},onClick:function(e){e.preventDefault(),v(r.trim().toLowerCase()),a("")},children:"SEARCH"}),b.map((function(e,t){return e.name.trim().toLowerCase()===g?Object(n.jsx)(y,{character:e},t):null}))]})};r(88);var S=function(){return Object(n.jsx)("div",{className:"star-wars",children:Object(n.jsx)("h6",{children:"A long time ago, in a galaxy far far away...."})})};var C=function(){return Object(n.jsxs)("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-around",margin:"0 10rem 0 10rem"},children:[Object(n.jsxs)(o.b,{to:"/",children:[Object(n.jsx)("img",{src:"https://icons-for-free.com/iconfiles/png/512/r2d2+robot+starwars+icon-1320166698566079188.png",alt:"BB8",style:{height:"8rem",width:"8rem"}}),Object(n.jsx)("p",{style:{color:"white",fontWeight:"800",textDecoration:"none"},children:"HOME"})]}),Object(n.jsxs)(o.b,{to:"/search",children:[Object(n.jsx)("img",{src:"https://img.icons8.com/plasticine/2x/stormtrooper.png",alt:"storm trooper",style:{height:"8rem",width:"8rem"}}),Object(n.jsx)("p",{style:{color:"white",fontWeight:"800",textDecoration:"none"},children:"SEARCH"})]}),Object(n.jsxs)(o.b,{to:"/all",children:[Object(n.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/movies-2-ultra-color/60/073_-_X_Wing-512.png",alt:"X wing",style:{height:"8rem",width:"8rem"}}),Object(n.jsx)("p",{style:{color:"white",fontWeight:"800",textDecoration:"none"},children:"ALL"})]})]})};var W=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("img",{src:"https://i.pinimg.com/originals/2f/48/54/2f4854e80863db8219a256c7a35bd034.png",alt:"star wars logo",style:{alignItems:"center",width:"50%",height:"30%",margin:"3rem 0"}}),Object(n.jsx)(C,{}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(n.jsx)(l.a,{path:"/all",component:O}),Object(n.jsx)(l.a,{path:"/search",component:k})]})]})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.c998c537.chunk.js.map