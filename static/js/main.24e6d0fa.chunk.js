(this.webpackJsonpcomicbooks=this.webpackJsonpcomicbooks||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(11),r=a.n(c),i=(a(75),a(34)),s=a(16),o=a.n(s),l=a(22),d=a(24),j=(a(77),a(130)),b=a(149),m=a(132),p=a(150),u=a(134),h=a(35),f=[{type:"characters",primary:"Characters"},{type:"comics",primary:"Comics"},{type:"creators",primary:"Creators"},{type:"events",primary:"Events"},{type:"series",primary:"Series"}],x=a(2),O=Object(j.a)((function(){return Object(b.a)({root:{},activeType:{backgroundColor:"lightgray"},types:{color:"white"},header:{textAlign:"center",color:"black",fontSize:"24px",fontFamily:"Roboto"},listItems:{padding:".15em",textAlign:"center"},nav:{padding:"0",margin:"0",borderRadius:"1em",border:"1px solid black"},flexContainer:{display:"flex",flexDirection:"row",justifyContent:"center",padding:0,color:"black",width:"100%"}})}));var y=function(e){var t=O(),a=e.value;return Object(x.jsx)("div",{className:t.root,children:Object(x.jsxs)(m.a,{container:!0,className:t.flexContainer,children:[f.map((function(n,c){return Object(x.jsx)(m.a,{item:!0,md:2,sm:3,xs:4,children:Object(x.jsx)(p.a,{className:t.listItems,button:!0,onClick:function(){return a({type:n.type,offset:0})},children:Object(x.jsx)(u.a,{primary:Object(x.jsx)(h.a,{variant:"h6",children:n.primary}),className:e.controls.type===n.type?t.activeType:t.types})},c)},c)})),Object(x.jsx)(p.a,{})]})})},g=a(135),v=a(136),w=Object(j.a)((function(){return Object(b.a)({root:{flexGrow:1},siteName:{fontFamily:"'Marvel'",fontSize:"2em",color:"white",marginLeft:"10%",padding:"0em 0em 0em 0em"},navbar:{backgroundColor:"#282828"}})}));var k=function(){var e=w();return Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)(g.a,{position:"static",className:e.navbar,children:Object(x.jsx)(v.a,{variant:"dense",style:{padding:".5em "},children:Object(x.jsx)(h.a,{className:e.siteName,children:"Marvel Comics API"})})})})},C=a(148),N=a(147),S=a(151),I=a(137),F=a(138),E=a(139),P=a(146),A=a(145),z=a(140),H=a(141),R=a(142),B=a(143),G=a(144),_=Object(j.a)((function(){return Object(b.a)({root:{flexGrow:1,color:"white"},centerElement:{display:"flex",justifyContent:"center",alignItems:"center"},listItem:{overflow:"scroll",maxHeight:"10rem",overflowX:"hidden",backgroundColor:"lightgray",padding:"0",margin:"0"},accordion:{width:"100%"},dialogHead:{width:"100%",textAlign:"center",fontSize:"24px",fontFamily:"Roboto"},dialog:{overflow:"hidden"},card:{position:"relative"},overlayFont:{position:"absolute",top:"40%",width:"100%",textAlign:"center",color:"white",fontFamily:"Roboto"},flexContainer:{display:"flex",flexDirection:"row",justifyContent:"center",padding:0,color:"black",width:"100%"}})}));var D=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)({}),s=Object(d.a)(i,2),j=s[0],b=s[1],u=Object(n.useState)(!1),f=Object(d.a)(u,2),O=f[0],y=f[1],g=Object(n.useState)(!1),v=Object(d.a)(g,2),w=v[0],k=v[1],D=Object(n.useState)(!0),M=Object(d.a)(D,2),W=M[0],J=M[1],L=e.controls.data,T=_(),X="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";Object(n.useEffect)(Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e.controls.type){t.next=5;break}return t.next=3,y(!0);case 3:t.next=7;break;case 5:return t.next=7,y(!1);case 7:case"end":return t.stop()}}),t)}))));var q=function(t){e.changeContent(t)};return Object(x.jsxs)("div",{className:T.root,children:[Object(x.jsxs)(m.a,{container:!0,style:{paddingBottom:"2em"},children:[Object(x.jsx)(E.a,{variant:"contained",onClick:e.nextPage,children:"Next Page"}),0!==e.controls.offset&&Object(x.jsx)(E.a,{variant:"contained",onClick:e.prevPage,children:"Previous Page"}),Object(x.jsx)(P.a,{placeholder:"Search\u2026",style:{backgroundColor:"white"},classes:{}}),Object(x.jsxs)(E.a,{onClick:function(){return J(!W)},variant:"contained",children:["Hide ",e.controls.type," with no Images"]})]}),Object(x.jsxs)(h.a,{item:!0,md:12,style:{color:"white",fontSize:"20px",paddingBottom:"1em"},children:["Showing (",e.controls.offset+1," - ",e.controls.offset+18,") of ",e.controls.total," Results Found"]}),Object(x.jsxs)(A.a,{open:c,onClose:function(){r(!c),b({})},fullWidth:!0,maxWidth:"sm",children:[Object(x.jsxs)(N.a,{defaultExpanded:!0,style:{margin:"0",padding:"0"},children:[Object(x.jsx)(S.a,{children:Object(x.jsx)(h.a,{className:T.dialogHead,children:j.name||j.title})}),Object(x.jsx)(I.a,{style:{margin:"0",padding:"0"},children:Object(x.jsx)(z.a,{className:T.dialog,style:{margin:"0",padding:"0"},children:Object(x.jsxs)(m.a,{container:!0,spacing:2,className:T.centerElement,children:[Object(x.jsx)(m.a,{item:!0,md:10,children:Object(x.jsx)(H.a,{children:void 0!==j.thumbnail&&Object(x.jsxs)(R.a,{className:T.card,children:[Object(x.jsx)(B.a,{component:"img",className:T.dialogImg,image:j.thumbnail.path+"/standard_incredible."+j.thumbnail.extension,title:j.name}),j.thumbnail.path===X&&Object(x.jsx)(h.a,{variant:"h3",className:T.overlayFont,children:j.name||j.title})]})})}),Object(x.jsx)(m.a,{item:!0,md:12,children:Object(x.jsx)(H.a,{id:"alert-dialog-slide-description",children:Object(x.jsx)(h.a,{style:{margin:"1em"},children:j.description})})})]})})})]}),"characters"===e.controls.type&&function(e){return e.type.map((function(e,t){return void 0!==e.data&&e.data.available>0&&Object(x.jsxs)(N.a,{expanded:w===t,onChange:(a=t,function(e,t){k(!!t&&a)}),style:{margin:"0",padding:"0"},children:[Object(x.jsx)(S.a,{expandIcon:Object(x.jsx)(C.a,{}),style:{backgroundColor:"gray"},children:Object(x.jsxs)(h.a,{className:T.accordion,variant:"h6",children:[Object(x.jsx)("span",{children:e.name}),Object(x.jsxs)("span",{style:{float:"right"},children:["(",e.data.available,")"]})]},t)}),Object(x.jsx)(I.a,{className:T.listItem,children:Object(x.jsx)(h.a,{children:void 0!==e.data&&e.data.items.map((function(t,a){return Object(x.jsx)(I.a,{children:Object(x.jsx)(F.a,{children:Object(x.jsx)(p.a,{button:!0,onClick:function(){return q({item:t,type:e.name})},children:t.name})})},a)}))})})]});var a}))}({type:[{name:"Comics",data:j.comics},{name:"Stories",data:j.stories},{name:"Events",data:j.events}]})]}),Object(x.jsx)(m.a,{container:!0,spacing:2,children:void 0!==L&&!1===O?L.map((function(e,t){return Object(x.jsx)(x.Fragment,{children:(e.thumbnail.path!==X&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"!==e.thumbnail.path||!1===W)&&Object(x.jsx)(m.a,{lg:2,md:3,sm:4,xs:6,item:!0,className:T.items,children:Object(x.jsx)(R.a,{children:Object(x.jsxs)(G.a,{children:[Object(x.jsx)(B.a,{component:"img",image:e.thumbnail.path+"/portrait_uncanny."+e.thumbnail.extension,title:e.name,onClick:function(){return function(e){r(!c),b(e)}(e)}}),e.thumbnail.path===X&&Object(x.jsx)(h.a,{variant:"h5",component:"div",className:T.overlayFont,children:e.name||e.title||e.fullName})]})})},t)})})):Object(x.jsx)("div",{className:"loaderBody",children:Object(x.jsxs)("div",{className:"loader",children:[Object(x.jsx)("span",{children:"L"}),Object(x.jsx)("span",{children:"O"}),Object(x.jsx)("span",{children:"A"}),Object(x.jsx)("span",{children:"D"}),Object(x.jsx)("span",{children:"I"}),Object(x.jsx)("span",{children:"N"}),Object(x.jsx)("span",{children:"G"})]})})})]})},M=a(63),W=a.n(M),J=a(100),L="https://gateway.marvel.com:443/v1/public/",T="06d98e032eab520f04f0ee1b0ec3d66b",X=J("164c4c8ffd2e17bf2b4b1c29315359a88caa7c2eb06d98e032eab520f04f0ee1b0ec3d66b");function q(e){return K.apply(this,arguments)}function K(){return(K=Object(l.a)(o.a.mark((function e(t){var a,n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t.defaultSearch){e.next=10;break}return a=t.type,n=t.offset,c=L+a+"?offset="+n+"&limit=18&ts=1&apikey="+T+"&hash="+X,e.next=6,W.a.get(c);case 6:return r=e.sent,e.abrupt("return",r.data.data);case 10:console.log("Searching for "+t.type+" : "+t.item.name);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=Object(j.a)((function(){return Object(b.a)({root:{flexGrow:1,padding:"0em 10% 0em 10%",minHeight:"100vh",backgroundColor:"black"},items:{border:"1px solid green"}})}));var U=function(){var e=Object(n.useState)({type:"characters",data:[]}),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Q();Object(n.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===a.data.length&&s({type:a.type,offset:0});case 1:case"end":return e.stop()}}),e)}))),[]);var s=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(Object(i.a)(Object(i.a)({},a),{},{type:void 0})),e.next=3,q({type:t.type,offset:t.offset,defaultSearch:!0});case 3:return n=e.sent,e.next=6,c(Object(i.a)(Object(i.a)({},a),{},{type:t.type,total:n.total,offset:n.offset,count:n.count,limit:n.limit,data:n.results}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q({defaultSearch:!1,item:t.item,type:t.type});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsx)("div",{className:r.root,children:Object(x.jsxs)(m.a,{container:!0,style:{display:"flex",justifyContent:"center"},spacing:2,children:[Object(x.jsx)(m.a,{style:{padding:"0"},item:!0,xs:10,children:Object(x.jsx)(y,{controls:a,value:s})}),Object(x.jsx)(m.a,{zeroMinWidth:!0,item:!0,xs:12,children:Object(x.jsx)(D,{nextPage:function(){s({type:a.type,offset:a.offset+18})},prevPage:function(){s({type:a.type,offset:a.offset-18})},changeContent:j,controls:a})})]})})]})},V=a(64);r.a.render(Object(x.jsx)(V.a,{children:Object(x.jsx)(U,{})}),document.getElementById("root"))},75:function(e,t,a){},77:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.24e6d0fa.chunk.js.map