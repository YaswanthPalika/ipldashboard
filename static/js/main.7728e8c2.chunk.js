(this["webpackJsonpdebugging-ipl-dashboard"]=this["webpackJsonpdebugging-ipl-dashboard"]||[]).push([[0],{49:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(22),r=a.n(n),i=a(14),l=a(3),m=a(13),o=a.n(m),h=a(15),d=a(9),u=a(10),j=a(12),p=a(11),b=a(16),g=a.n(b),O=(a(49),a(1)),f=function(e){var t=e.teamData,a=t.name,s=t.id,c=t.teamImageURL;return Object(O.jsx)(i.b,{to:"/team-matches/".concat(s),className:"link-item",children:Object(O.jsxs)("li",{className:"team-card",children:[Object(O.jsx)("img",{src:c,alt:a,className:"team-logo"}),Object(O.jsx)("p",{className:"team-name",children:a})]})})},x=(a(54),"https://apis.ccbp.in/ipl"),v=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,teams:[]},e.setTeams=function(t,a){e.setState({teams:t,isLoading:a})},e.getTeams=Object(h.a)(o.a.mark((function t(){var a,s,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(x);case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,c=s.teams.map((function(e){return{name:e.name,id:e.id,teamImageURL:e.team_image_url}})),e.setTeams(c,!1);case 8:case"end":return t.stop()}}),t)}))),e.renderTeamsList=function(){var t=e.state.teams;return Object(O.jsx)("ul",{className:"teams-list",children:t.map((function(e){return Object(O.jsx)(f,{teamData:e},e.id)}))})},e.renderLoader=function(){return Object(O.jsx)("div",{testid:"loader",className:"loader-container",children:Object(O.jsx)(g.a,{type:"Oval",color:"#ffffff",height:"50"})})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getTeams()}},{key:"render",value:function(){var e=this.state.isLoading;return Object(O.jsx)("div",{className:"home-route-container",children:Object(O.jsxs)("div",{className:"teams-list-container",children:[Object(O.jsxs)("div",{className:"ipl-dashboard-heading-container",children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png",alt:"ipl-logo",className:"ipl-logo"}),Object(O.jsx)("h1",{className:"ipl-dashboard-heading",children:"IPL Dashboard"})]}),e?this.renderLoader():this.renderTeamsList()]})})}}]),a}(s.Component),N=(a(55),function(){return Object(O.jsx)("div",{className:"not-found-route-container",children:Object(O.jsx)("h1",{className:"not-found-heading",children:"Page Not Found !!"})})}),_=(a(56),function(e){var t=e.latestMatchData,a=t.competingTeam,s=t.date,c=t.venue,n=t.result,r=t.competingTeamLogo,i=t.firstInnings,l=t.secondInnings,m=t.manOfTheMatch,o=t.umpires;return Object(O.jsxs)("div",{className:"latest-match-container",children:[Object(O.jsx)("h1",{className:"latest-match-heading",children:"Latest Matches"}),Object(O.jsxs)("div",{className:"latest-match-card",children:[Object(O.jsxs)("div",{className:"latest-match-details-logo-container",children:[Object(O.jsxs)("div",{className:"latest-match-details-1",children:[Object(O.jsx)("p",{className:"latest-match-team-name",children:a}),Object(O.jsx)("p",{className:"latest-match-date",children:s}),Object(O.jsx)("p",{className:"match-details",children:c}),Object(O.jsx)("p",{className:"match-details",children:n})]}),Object(O.jsx)("img",{src:r,className:"latest-match-team-logo",alt:"latest-".concat(a)})]}),Object(O.jsx)("hr",{className:"separator"}),Object(O.jsxs)("div",{className:"latest-match-details-2",children:[Object(O.jsx)("p",{className:"latest-match-details-label",children:"First Innings"}),Object(O.jsx)("p",{className:"latest-match-details-value",children:i}),Object(O.jsx)("p",{className:"latest-match-details-label",children:"Second Innings"}),Object(O.jsx)("p",{className:"latest-match-details-value",children:l}),Object(O.jsx)("p",{className:"latest-match-details-label",children:"Man Of The Match"}),Object(O.jsx)("p",{className:"latest-match-details-value",children:m}),Object(O.jsx)("p",{className:"latest-match-details-label",children:"Umpires"}),Object(O.jsx)("p",{className:"latest-match-details-value",children:o})]})]})]})}),M=(a(57),function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).getMatchStatusClassName=function(e){return"Won"===e?"match-won":"match-lost"},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.matchData,t=e.competingTeamLogo,a=e.competingTeam,s=e.matchStatus,c=e.result,n="match-status ".concat(this.getMatchStatusClassName(s));return Object(O.jsxs)("li",{className:"match-card",children:[Object(O.jsx)("img",{src:t,className:"competing-team-logo",alt:"competing-team ".concat(a)}),Object(O.jsx)("p",{className:"competing-team-name",children:a}),Object(O.jsx)("p",{className:"result",children:c}),Object(O.jsx)("p",{className:n,children:s})]})}}]),a}(s.Component)),L=(a(58),"https://apis.ccbp.in/ipl/"),T=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,recentMatchesData:{}},e.setRecentMatches=function(t,a){e.setState({recentMatchesData:t,isLoading:a})},e.getRecentMatches=Object(h.a)(o.a.mark((function t(){var a,s,c,n,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match,s=a.params,c=s.id,t.next=5,fetch("".concat(L).concat(c));case 5:return n=t.sent,t.next=8,n.json();case 8:r=t.sent,i={teamBannerURL:r.team_banner_url,latestMatch:{umpires:r.latest_match_details.umpires,result:r.latest_match_details.result,manOfTheMatch:r.latest_match_details.man_of_the_match,id:r.latest_match_details.id,date:r.latest_match_details.date,venue:r.latest_match_details.venue,competingTeam:r.latest_match_details.competing_team,competingTeamLogo:r.latest_match_details.competing_team_logo,firstInnings:r.latest_match_details.first_innings,secondInnings:r.latest_match_details.second_innings,matchStatus:r.latest_match_details.match_status},recentMatches:r.recent_matches.map((function(e){return{umpires:e.umpires,result:e.result,manOfTheMatch:e.man_of_the_match,id:e.id,date:e.date,venue:e.venue,competingTeam:e.competing_team,competingTeamLogo:e.competing_team_logo,firstInnings:e.first_innings,secondInnings:e.second_innings,matchStatus:e.match_status}}))},e.setRecentMatches(i,!1);case 11:case"end":return t.stop()}}),t)}))),e.renderRecentMatchesList=function(){var t=e.state.recentMatchesData.recentMatches;return Object(O.jsx)("ul",{className:"recent-matches-list",children:t.map((function(e){return Object(O.jsx)(M,{matchData:e},e.id)}))})},e.renderTeamMatches=function(){var t=e.props.match.params.id,a=e.state.recentMatchesData,s=a.teamBannerURL,c=a.latestMatch;return Object(O.jsxs)("div",{className:"team-matches-container",children:[Object(O.jsx)("img",{src:s,alt:t,className:"team-banner"}),Object(O.jsx)(_,{latestMatchData:c}),e.renderRecentMatchesList()]})},e.renderLoader=function(){return Object(O.jsx)("div",{testid:"loader",className:"loader-container",children:Object(O.jsx)(g.a,{type:"Oval",color:"#ffffff",height:"50"})})},e.getRouteClassName=function(){switch(e.props.match.params.id){case"RCB":return"rcb";case"KKR":return"kkr";case"KXP":return"kxp";case"CSK":return"csk";case"RR":return"rr";case"MI":return"mi";case"SH":return"srh";case"DC":return"dc";default:return""}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getRecentMatches()}},{key:"render",value:function(){var e=this.state.isLoading,t="team-matches-route-container ".concat(this.getRouteClassName());return Object(O.jsx)("div",{className:t,children:e?this.renderLoader():this.renderTeamMatches()})}}]),a}(s.Component),R=(a(59),function(){return Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:v}),Object(O.jsx)(l.a,{path:"/team-matches/:id",component:T}),Object(O.jsx)(l.a,{component:N})]})});r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(R,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.7728e8c2.chunk.js.map