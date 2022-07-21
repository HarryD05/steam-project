"use strict";(self.webpackChunksteam_project=self.webpackChunksteam_project||[]).push([[897],{4874:function(e,t,n){var r=n(7294);n(6025);t.Z=function(e){var t=e.Image,n=e.Subject,l=e.Title,a=e.Author,u=e.LinkTo,i=e.includeAuthor,c=void 0===i||i;return r.createElement("a",{href:u,className:"articlePreview bg"+n+"-light "+(c?"":"noAuthor")},r.createElement("div",{className:"img"},r.createElement("img",{src:"string"==typeof t?t:t.default,alt:"Preview picture for article: "+l})),r.createElement("div",{className:"articleDetails"},r.createElement("h2",null,l),c?r.createElement("p",null,a.first_name+" "+a.surname):r.createElement("p",null)))}},5255:function(e,t,n){n.r(t);var r=n(2982),l=n(5861),a=n(4687),u=n.n(a),i=n(7294),c=n(5540),o=n(6025),s=n(262),m=n(1159),f=n(4874),p=n(2583),d=n(1588),h=n(7551);t.default=function(e){var t=e.data,n="undefined"!=typeof window?window.location.href.split(/[?#]/)[0]:"",a=(0,i.useState)(null),E=a[0],g=a[1],v=(0,i.useState)([]),w=v[0],k=v[1],b=n.slice(n.indexOf("profiles")+9);"/"===b[b.length-1]&&(b=b.slice(0,b.length-1));var N=[],Z=[];(0,i.useEffect)((function(){window.scrollTo(0,0)}),[b]),(0,i.useEffect)((function(){(0,l.Z)(u().mark((function e(){var n,l,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.allMarkdownRemark.edges.map((function(e,t){"Profile"===e.node.frontmatter.type?N.push(Object.assign({},e.node.frontmatter,{index:t})):e.node.frontmatter.userID===b&&Z.push(Object.assign({},e.node.frontmatter,{index:t}))})),n={},l=0;case 3:if(!(l<N.length)){e.next=11;break}if(N[l].slug.slice(10)!==b){e.next=8;break}return N[l].html=t.allMarkdownRemark.edges[N[l].index].node.html,n.profiles=[N[l]],e.abrupt("break",11);case 8:l++,e.next=3;break;case 11:a=Z.map((function(e){return(0,h.iR)({articles:[e]},!1,!1)})),k([].concat((0,r.Z)(w),(0,r.Z)(a))),g((0,d.ix)(n));case 14:case"end":return e.stop()}}),e)})))()}),[b]);return E?i.createElement(i.Fragment,null,i.createElement(s.Z,{seo:Object.assign({},o.Z.ProfileDetails.SEO,{title:"STEAM Project | "+(0,d.wZ)(E),image:(0,d.m1)(E),url:n})}),i.createElement(m.Z,null),i.createElement("main",{className:"profileDetails"},i.createElement("div",{className:"details"},i.createElement("div",{className:"top"},i.createElement("img",{src:"string"==typeof(0,d.m1)(E)?(0,d.m1)(E):(0,d.m1)(E).default,alt:"profile picture of "+(0,d.wZ)(E)}),i.createElement("div",{className:"details"},i.createElement("div",{className:"name"},i.createElement("h1",null,(0,d.wZ)(E)),i.createElement("p",null,(0,d.xm)(E))),i.createElement("p",null,(0,d.FF)(E)),i.createElement("p",null,(0,d.hb)(E)))),i.createElement(c.Z,{className:"content"},(0,d.py)(E))),i.createElement("div",{className:"article-list"},i.createElement("h2",null,"Articles"),i.createElement("div",{className:"issues"},function(){if(0===w.length)return i.createElement("p",null,"No articles...");var e={};w.forEach((function(t,n){e.hasOwnProperty(t.Issue)||(e[t.Issue]=[]),e[t.Issue].push(i.createElement(f.Z,{key:n,Image:t.Image,Title:t.Title,Author:t.Author,LinkTo:t.LinkTo,Subject:t.Subject,includeAuthor:!1}))}));for(var t=[],n=Object.keys(e).map((function(e){return Number(e)})),l=Math.min.apply(Math,(0,r.Z)(n));l<=Math.max.apply(Math,(0,r.Z)(n));l++)e.hasOwnProperty(l)&&t.push(i.createElement("div",{className:"issueSection",key:l},i.createElement("h3",null,"Issue ",l),i.createElement("div",{className:"issueArticles"},e[l].map((function(e){return e})))));return t}()))),i.createElement(p.Z,null)):null}},1588:function(e,t,n){n.d(t,{FF:function(){return o},hb:function(){return c},ix:function(){return a},m1:function(){return m},o2:function(){return l},py:function(){return s},wZ:function(){return u},xm:function(){return i}});var r=n(9787),l=function(e){return e&&e.length&&e.map((function(e){return{Image:n(7728)("./"+e.profile_picture),Name:e.first_name+" "+e.surname,Role:e.role,LinkTo:e.slug}}))},a=function(e){return e&&e.profiles&&e.profiles[0]&&{Name:e.profiles[0].first_name+" "+e.profiles[0].surname,Image:n(7728)("./"+e.profiles[0].profile_picture),Role:e.profiles[0].role,School:e.profiles[0].school,Pronouns:e.profiles[0].pronouns,MarkDownContent:(new r.Z).turndown(e.profiles[0].html)}},u=function(e){return null==e?"":e.Name},i=function(e){return null==e?"":e.Pronouns},c=function(e){return null==e?"":e.Role},o=function(e){return null==e?"":e.School},s=function(e){return null==e?"":e.MarkDownContent},m=function(e){return null==e||null===e.Image||void 0===e.Image||""===e.Image?null:e.Image}}}]);
//# sourceMappingURL=component---src-components-profiles-profile-details-js-9f2d3a891e42b8684102.js.map