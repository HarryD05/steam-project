(self.webpackChunksteam_project=self.webpackChunksteam_project||[]).push([[823],{9323:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a=n(8879),c=n(262),i=n(9232),l=function(e){var t=e.Image,n=e.Subject,a=e.Title,c=e.Author,i=e.LinkTo;return r.createElement("div",{className:"articlePreview bg"+n+"-light"},r.createElement("a",{href:i},r.createElement("img",{src:t,alt:"Preview picture for article: "+a}),r.createElement("div",{className:"details"},r.createElement("h2",null,a),r.createElement("p",null,c))))},u=[["2BB760","Biochem"],["9C2111","Physics & Technology"],["BFAA34","Econ &  Business"],["C8792C","Humanities"],["622058","Music"],["376B70","Art & Media"],["AF70BD","Literature & Philosophy"],["CDCEED","Politics & Philosophy"],["3E5FCA","Maths"]],o=function(){return r.createElement("div",{className:"articleScroller"},u.map((function(e,t){return r.createElement("a",{className:"subject",key:t,href:"#"+e[0],style:{top:65+30*t+"px"}},r.createElement("div",{className:"circle bg"+e[0]}),r.createElement("p",null,""+e[1]))})))},m=(n(9787),[["2BB760","Biochem"],["9C2111","Physics & Technology"],["BFAA34","Econ &  Business"],["C8792C","Humanities"],["622058","Music"],["376B70","Art & Media"],["AF70BD","Literature & Philosophy"],["CDCEED","Politics & Philosophy"],["3E5FCA","Maths"]]),s=function(e){var t=e.data,u=(0,r.useState)([]),s=u[0],h=u[1];(0,r.useEffect)((function(){var e=[];t.allMarkdownRemark.edges.forEach((function(t){t=t.node.frontmatter,e.push(t)})),console.log(e),h(e)}),[t]);var g,T;return r.createElement(r.Fragment,null,r.createElement(a.Z,null),r.createElement("main",{className:"categories"},r.createElement(c.Z,{seo:i.Z.Categories.SEO}),r.createElement(o,null),r.createElement("h1",null,"Categories"),r.createElement("div",{className:"subjects"},(T=(g=s)&&g.length&&g.map((function(e){return{Image:n(8968)("./"+e.preview_image).default,Title:e.title,Subject:e.subject,Author:"Not setup yet",LinkTo:e.slug}})),console.log(T),0===T?r.createElement("p",null,"No articles"):m.map((function(e,t){return r.createElement("div",{className:"subject",key:t,id:e[0]},r.createElement("h2",null,e[1]),r.createElement("div",{className:"previews"},T.map((function(t,n){if(t.Subject===e[0])return r.createElement(r.Fragment,null,r.createElement(l,{key:n,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+1,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+2,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+3,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+4,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+5,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+6,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+7,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+8,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}),r.createElement(l,{key:n+9,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject}))}))))}))))))}},4231:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/PreviewImage1-507ed5f237a902040f944b9906c9491f.png"},35:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/PreviewImage2-08083bfe604a880ba9d2ce4cce83989e.png"},8968:function(e,t,n){var r={"./PreviewImage1.png":4231,"./PreviewImage2.png":35};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=8968}}]);
//# sourceMappingURL=component---src-pages-categories-js-1f32cbd34875af198ca0.js.map