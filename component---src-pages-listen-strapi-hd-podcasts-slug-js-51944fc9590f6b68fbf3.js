(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7uMK":function(e,t,a){"use strict";a.r(t);var r=a("JX7q"),n=a("dI71"),i=(a("ToJy"),a("q1tI")),s=a.n(i),l=a("Wbzz"),c=a("k7N+"),o=a.n(c),m=a("vrFN"),d=a("Bl7J"),u=a("v5xv"),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={article:a.props.data.strapiHdPodcasts,metaTitle:a.props.data.strapiHdPodcasts.guest,metaDescription:a.props.data.strapiHdPodcasts.description,recentEpisodes:[],currentURL:""},a.renderRecentEpisodes=a.renderRecentEpisodes.bind(Object(r.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.renderRecentEpisodes=function(){var e=this.props.data.allStrapiHdPodcasts.edges,t=[].concat(e).sort((function(e,t){return e.node.episode>t.node.episode?-1:1})).map((function(e,t){var a=e.node.episode,r=e.node.guest,n=e.node.img.formats.medium.url,i=e.node.release_date,l=e.node.description,c=e.node.duration,o=e.node.slug;return s.a.createElement(u.a,{size:"small",episode:a,title:r,thumbnail:n,date:i,description:l,duration:c,slug:o,key:t})})),a=window.location.href;this.setState({recentEpisodes:t}),this.setState({currentURL:a})},a.componentDidMount=function(){this.renderRecentEpisodes()},a.render=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement(m.a,{title:this.state.metaTitle,description:this.state.metaDescription}),s.a.createElement("section",{className:"normal-section article listen-article light-nav brown-nav"},s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement("div",{className:"left-contain"},s.a.createElement("hr",{className:"desktop"}),s.a.createElement("header",null,s.a.createElement("span",{className:"number"},"Episode #",this.state.article.episode),s.a.createElement("h1",{className:"title"},this.state.article.guest),s.a.createElement("div",{className:"flexbox"},s.a.createElement("div",{className:"info"},s.a.createElement("p",{className:"date"},s.a.createElement(o.a,{format:"Do MMMM, YYYY"},this.state.article.date)),s.a.createElement("span",null," | "),s.a.createElement("p",{className:"time"},this.state.article.duration," minutes")),s.a.createElement("div",{className:"share-links"},s.a.createElement("p",null,s.a.createElement("b",null,"Share")),s.a.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url="+this.state.currentURL,target:"_blank",rel:"noreferrer"},"LinkedIn"),s.a.createElement("a",{href:"https://t.me/share/url?url="+this.state.currentURL,target:"_blank",rel:"noreferrer"},"Telegram"),s.a.createElement("a",{href:"https://twitter.com/intent/tweet?url="+this.state.currentURL,target:"_blank",rel:"noreferrer"},"Twitter"),s.a.createElement("a",{href:this.state.article.youtube_link,target:"_blank",rel:"noreferrer"},"Youtube")))),s.a.createElement("div",{className:"episode-play"},s.a.createElement("iframe",{src:this.state.article.captivate_link,title:"Captivate Player",width:"100%",height:"170px",frameBorder:"0"})),s.a.createElement("div",{className:"text-contain"},s.a.createElement("h2",{className:"tagline"},this.state.article.description),s.a.createElement("p",null,this.state.article.transcript),this.state.article.notes&&s.a.createElement("p",null,this.state.article.notes)),null!=this.state.article.youtube_link&&s.a.createElement("div",{className:"article-video"},s.a.createElement("iframe",{src:this.state.article.youtube_link,title:"YouTube Video",width:"100%",height:"620px",frameBorder:"0"}))),s.a.createElement("div",{className:"right-contain"},s.a.createElement("picture",{className:"article-img"},s.a.createElement("img",{alt:"article-thumbnail",src:this.state.article.img.formats.medium.url})),s.a.createElement("div",{className:"episode-play mobile"},s.a.createElement("iframe",{src:this.state.article.captivate_link,title:"Captivate Player",width:"100%",height:"175px",frameBorder:"0"})))),s.a.createElement("div",{className:"recent-episodes"},s.a.createElement("span",{className:"subheading"},"RECENT EPISODES"),this.state.recentEpisodes.slice(0,2).map((function(e,t){return e})),s.a.createElement(l.Link,{className:"link-white",to:"/listen"},"View all Episodes",s.a.createElement("button",{"aria-label":"View all episodes",className:"circle-btn sml"})))))))},t}(i.Component);t.default=p},JX7q:function(e,t,a){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-listen-strapi-hd-podcasts-slug-js-51944fc9590f6b68fbf3.js.map