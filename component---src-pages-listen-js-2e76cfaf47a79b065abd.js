(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8jis":function(M,N,L){"use strict";L.r(N);var D=L("JX7q"),i=L("dI71"),j=(L("ToJy"),L("q1tI")),e=L.n(j),s=L("v5xv"),u=L("vrFN"),t=L("Bl7J"),w=(L("W/9C"),L("i7Q4")),I=L.n(w),a=function(M){function N(N){var L;return(L=M.call(this,N)||this).state={episodes:[],mostRecent:null},L.generateEpisodes=L.generateEpisodes.bind(Object(D.a)(L)),L}Object(i.a)(N,M);var L=N.prototype;return L.generateEpisodes=function(){var M=this,N=this.props.data.allStrapiHdPodcasts.edges,L=[].concat(N).sort((function(M,N){return M.node.episode>N.node.episode?-1:1})).map((function(N,L){var D=N.node.episode,i=N.node.guest,j=N.node.img.formats.medium.url,u=N.node.release_date,t=N.node.description,w=N.node.duration,I=N.node.slug,a="small";return 3!=L&&4!=L||(a="large"),0==L&&M.setState({mostRecent:e.a.createElement(s.a,{size:"large",episode:D,title:i,thumbnail:j,date:u,description:t,duration:w,slug:I,key:L})}),e.a.createElement(s.a,{size:a,episode:D,title:i,thumbnail:j,date:u,description:t,duration:w,slug:I,key:L})}));this.setState({episodes:L});var D=[];D.push(L[L.length-1]),D.push(L[L.length-2]),window.recentEpisodeList=D},L.componentDidMount=function(){this.generateEpisodes()},L.render=function(){return e.a.createElement(e.a.Fragment,null,e.a.createElement(t.a,null,e.a.createElement(u.a,{title:"Listen"}),e.a.createElement("section",{className:"normal-section listen light-nav brown-nav"},e.a.createElement("div",{className:"container"},e.a.createElement("header",null,e.a.createElement("img",{className:"highdef-logo",src:I.a}),e.a.createElement("p",null,"Behind every success is a person. Behind every person is a story. High Definition illuminates the motives within these stories, that drive people to achieve great things. Pretences are left at the door. Truth rises to the surface with refreshing transparency. Unglamorous. Unvarnished. Unscrutinised. Captured in, High Definition.")),e.a.createElement("hr",{className:"mobile"}),e.a.createElement("div",{className:"episode-lg"},e.a.createElement("span",{className:"subheading"},"MOST RECENT EPISODE"),this.state.mostRecent),e.a.createElement("hr",null),e.a.createElement("span",{className:"subheading"},"ALL EPISODES"),e.a.createElement("div",{className:"episode-row"},this.state.episodes.slice(0,4).map((function(M,N){return M}))),e.a.createElement("div",{className:"episode-row"},this.state.episodes.slice(4,8).map((function(M,N){return M})))))))},N}(j.Component);N.default=a},JX7q:function(M,N,L){"use strict";function D(M){if(void 0===M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}L.d(N,"a",(function(){return D}))},i7Q4:function(M,N){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjcuNzgxIiBoZWlnaHQ9IjY5LjIzNSIgdmlld0JveD0iMCAwIDMyNy43ODEgNjkuMjM1Ij4NCiAgPGcgaWQ9Ikdyb3VwXzExNCIgZGF0YS1uYW1lPSJHcm91cCAxMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NC44MjYgLTE2OC4wNTIpIj4NCiAgICA8cGF0aCBpZD0iUGF0aF83MiIgZGF0YS1uYW1lPSJQYXRoIDcyIiBkPSJNMTAyLjM2NywxODEuNDc4SDkwLjY3M3YtMTIuOEg4NC44MjZ2MzAuOTg2aDUuODQ4VjE4Ni43ODRoMTEuNjk0djEyLjg4NWg1Ljg0N1YxNjguNjgzaC01Ljg0N1oiIGZpbGw9IiNmZmYiLz4NCiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzE4NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTg0IiB3aWR0aD0iNS44NDgiIGhlaWdodD0iMzAuOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTMuMzU4IDE2OC42ODMpIiBmaWxsPSIjZmZmIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfNzMiIGRhdGEtbmFtZT0iUGF0aCA3MyIgZD0iTTE0OC4xNywxODguNTE2di00LjUxMUgxMzQuODg4djQuOTQ0aDcuNTI1di4yNzFjMCwzLjUzNy0yLjIyLDUuODQ3LTYuNDYxLDUuODQ3LTQuMjU5LDAtNy0yLjc0My03LTcuMDkydi03LjZjMC00LjM0OSwyLjc0My03LjA5Miw3LTcuMDkyLDQuMjQxLDAsNi4xOSwyLjQ3Miw2LjE5LDUuNjY3di42MTNoNS44NDd2LS41MjNjMC02LjU1MS00LjI1OS0xMC45OS0xMi4wMzctMTAuOTktNy44LDAtMTIuODQ5LDQuNDM5LTEyLjg0OSwxMi40djcuNDM1YzAsNy45NzYsNS4wNTMsMTIuNCwxMi44NDksMTIuNEMxNDMuNzMsMjAwLjI4MywxNDguMTcsMTk1Ljg2MSwxNDguMTcsMTg4LjUxNloiIGZpbGw9IiNmZmYiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF83NCIgZGF0YS1uYW1lPSJQYXRoIDc0IiBkPSJNMTY5LjYwOSwxOTkuNjY5aDUuODQ4VjE2OC42ODNoLTUuODQ4djEyLjhIMTU3LjkxNXYtMTIuOGgtNS44Mjl2MzAuOTg2aDUuODI5VjE4Ni43ODRoMTEuNjk0WiIgZmlsbD0iI2ZmZiIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzc1IiBkYXRhLW5hbWU9IlBhdGggNzUiIGQ9Ik05NS40NTUsMjA1LjY3OUg4NC44MjZ2MzAuOTg2SDk1LjQ1NWM4LjMzOCwwLDEyLjc1OS00LjI0MSwxMi43NTktMTIuNTc5di01LjgyOUMxMDguMjE0LDIwOS45MiwxMDMuNzkzLDIwNS42NzksOTUuNDU1LDIwNS42NzlabTYuOTEyLDE4LjU4OGMwLDQuNTExLTIuMTI5LDcuMDkyLTYuODIyLDcuMDkySDkwLjY3M1YyMTAuOTg1aDQuODcyYzQuNjkzLDAsNi44MjIsMi41OCw2LjgyMiw3LjA5MloiIGZpbGw9IiNmZmYiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF83NiIgZGF0YS1uYW1lPSJQYXRoIDc2IiBkPSJNMTE3Ljc3OCwyMjMuNjg5aDEzLjI4M3YtNS4zMDZIMTE3Ljc3OHYtNy40aDE0LjUyOHYtNS4zMDZIMTExLjk1djMwLjk4NmgyMC42Mjd2LTUuMzA2aC0xNC44WiIgZmlsbD0iI2ZmZiIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzc3IiBkYXRhLW5hbWU9IlBhdGggNzciIGQ9Ik0xMzYuMzEzLDIzNi42NjVoNS44MjlWMjIzLjc4aDEzLjAzdi01LjMwNmgtMTMuMDN2LTcuNDg5aDEzLjkxNHYtNS4zMDZIMTM2LjMxM1oiIGZpbGw9IiNmZmYiLz4NCiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzE4NSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTg1IiB3aWR0aD0iNS44NDgiIGhlaWdodD0iMzAuOTg2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTkuNzkyIDIwNS42NzkpIiBmaWxsPSIjZmZmIi8+DQogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xODYiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE4NiIgd2lkdGg9IjUuODQ4IiBoZWlnaHQ9IjMxLjAwNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk4LjM1NyAyMDUuNjcpIiBmaWxsPSIjZmZmIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfNzgiIGRhdGEtbmFtZT0iUGF0aCA3OCIgZD0iTTE4Ny41ODMsMjMwLjczNmgtLjQzNGwtNy40ODktMjUuMDQ5SDE2OS42MDl2MzAuOTg2aDUuODQ3VjIxMS42MDdoLjQ1MWw3LjQ3MiwyNS4wNjdIMTkzLjQzVjIwNS42ODhoLTUuODQ3WiIgZmlsbD0iI2ZmZiIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzc5IiBkYXRhLW5hbWU9IlBhdGggNzkiIGQ9Ik0yMDcuMTI3LDIxMC45OTNoOS4zODV2MjUuNjhoNS44NDd2LTI1LjY4aDkuMzg1VjIwNS42N0gyMDcuMTI3WiIgZmlsbD0iI2ZmZiIvPg0KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTg3IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxODciIHdpZHRoPSI1Ljg0OCIgaGVpZ2h0PSIzMS4wMDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNC42ODQgMjA1LjY3KSIgZmlsbD0iI2ZmZiIvPg0KICAgIDxwYXRoIGlkPSJQYXRoXzgwIiBkYXRhLW5hbWU9IlBhdGggODAiIGQ9Ik0yNTcuMTg5LDIwNS4wNTZjLTcuOCwwLTEyLjc1OSw0LjQ0LTEyLjc1OSwxMi40djcuNDM1YzAsNy45NzcsNC45NjMsMTIuNCwxMi43NTksMTIuNCw3Ljc3OCwwLDEyLjc0MS00LjQyMSwxMi43NDEtMTIuNHYtNy40MzVDMjY5LjkzLDIwOS41LDI2NC45NjcsMjA1LjA1NiwyNTcuMTg5LDIwNS4wNTZabTYuODkzLDIwLjAxNGMwLDQuMjU5LTIuNTYyLDctNi44OTMsNy00LjM1LDAtNi45MTItMi43NDMtNi45MTItN3YtNy44YzAtNC4yNDEsMi41NjItNi45ODQsNi45MTItNi45ODQsNC4zMzEsMCw2Ljg5MywyLjc0Myw2Ljg5Myw2Ljk4NFoiIGZpbGw9IiNmZmYiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF84MSIgZGF0YS1uYW1lPSJQYXRoIDgxIiBkPSJNNDA2Ljc3OCwyMDUuNzk1djIzLjUxNGExLjQ0OSwxLjQ0OSwwLDAsMS0xLjQ0NSwxLjQ0NEg0MDUuM2ExLjQ0NiwxLjQ0NiwwLDAsMS0xLjM3MS0xLjA0N2wtNS42ODQtMTkuMDU3YTYuOTczLDYuOTczLDAsMCwwLTExLjYwNS0yLjkyMyw2Ljg4Myw2Ljg4MywwLDAsMC0yLjAzOSw0LjkwOHYxNi42NzVhMS40MzQsMS40MzQsMCwwLDEtMi44MTUuNEwzNzYuMSwyMTAuNjQ5YTYuOTY4LDYuOTY4LDAsMCwwLTEzLjY0MywxLjk4NXYxNi42NzVhMS40NDQsMS40NDQsMCwwLDEtMi44MzMuNGwtNS42ODUtMTkuMDU3YTYuOTcyLDYuOTcyLDAsMCwwLTExLjYtMi45MjNjLS4xLjEtLjE4OS4yMDUtLjI4MS4zMDktLjAyOS4wMzMtLjA1OS4wNjMtLjA4Ny4xLS4wODcuMS0uMTY5LjIxMS0uMjUxLjMxOS0uMDQ5LjA2NS0uMS4xMjktLjE0Ni4yLS4wNjQuMDkyLS4xMjQuMTg2LS4xODQuMjgxcy0uMTE1LjE4NS0uMTY5LjI4LS4wOS4xNjQtLjEzMi4yNDdxLS4wOS4xNzMtLjE2OC4zNTFjLS4wMzMuMDc0LS4wNjUuMTQ4LS4xLjIyMi0uMDU0LjEzNC0uMS4yNy0uMTQ4LjQwNy0uMDIzLjA2OS0uMDQ3LjEzNy0uMDY3LjIwNi0uMDQ0LjE0Ny0uMDgxLjMtLjExNS40NDgtLjAxNS4wNjYtLjAzMi4xMy0uMDQ1LjItLjAzMi4xNjEtLjA1NC4zMjUtLjA3NS40OS0uMDA3LjA1OS0uMDE4LjExOC0uMDI0LjE3Ny0uMDIyLjIyNS0uMDM0LjQ1Mi0uMDM0LjY4MnYxNi42NzVhMS40NDksMS40NDksMCwwLDEtMS40NDUsMS40NDRoLS4wMzZhMS40NDYsMS40NDYsMCwwLDEtMS4zNzEtMS4wNDdsLTUuNjg0LTE5LjA1N2E2Ljk3Myw2Ljk3MywwLDAsMC0xMS42MDUtMi45MjMsNi44ODMsNi44ODMsMCwwLDAtMi4wMzksNC45MDh2MTYuNjc1YTEuNDM0LDEuNDM0LDAsMCwxLTIuODE1LjRsLTUuNjg1LTE5LjA1N2E2Ljk2OCw2Ljk2OCwwLDAsMC0xMy42NDMsMS45ODV2MTYuNjc1YTEuNDQ0LDEuNDQ0LDAsMCwxLTIuODMzLjRsLTUuNjg1LTE5LjA1N2E2Ljk1Niw2Ljk1NiwwLDAsMC0xMy42MjUsMS45ODV2MjQuMDM4aDUuODI5VjIxMy4wNDlhMS40NTgsMS40NTgsMCwwLDEsMi44NTEtLjQxNWw1LjcsMTkuMDc1YTcuMTE2LDcuMTE2LDAsMCwwLDIuNTA5LDMuNTkyLDYuOTUzLDYuOTUzLDAsMCwwLDExLjEtNS41NzdWMjEzLjA0OWExLjQ1MiwxLjQ1MiwwLDAsMSwxLjQ2Mi0xLjQ0MywxLjUxMSwxLjUxMSwwLDAsMSwuODY2LjI4OCwxLjQ0OCwxLjQ0OCwwLDAsMSwuNTIzLjc1OGw1LjY4NiwxOS4wNTdhNi45NDMsNi45NDMsMCwwLDAsNi42NTgsNC45NjNoLjAxOEE2LjkzOSw2LjkzOSwwLDAsMCwzMjQsMjI5LjcyNFYyMTMuMDQ5YTEuNDQ4LDEuNDQ4LDAsMCwxLDEuNDQ0LTEuNDQzLDEuNDI4LDEuNDI4LDAsMCwxLDEuMzg5LDEuMDQ2bDUuNywxOS4wNTdhNi45NSw2Ljk1LDAsMCwwLDEzLjYwNy0xLjk4NVYyMTMuMDQ5YTEuNDU4LDEuNDU4LDAsMCwxLDIuODUxLS40MTVsNS43LDE5LjA3NUE3LjExNiw3LjExNiwwLDAsMCwzNTcuMiwyMzUuM2E2Ljk1Myw2Ljk1MywwLDAsMCwxMS4xLTUuNTc3VjIxMy4wNDlhMS40NTIsMS40NTIsMCwwLDEsMS40NjItMS40NDMsMS41MTEsMS41MTEsMCwwLDEsLjg2Ni4yODgsMS40NDgsMS40NDgsMCwwLDEsLjUyMy43NThsNS42ODYsMTkuMDU3YTYuOTQzLDYuOTQzLDAsMCwwLDYuNjU4LDQuOTYzaC4wMThhNi45MzksNi45MzksMCwwLDAsNi45NDgtNi45NDhWMjEzLjA0OWExLjQ0OCwxLjQ0OCwwLDAsMSwxLjQ0NC0xLjQ0MywxLjQyOCwxLjQyOCwwLDAsMSwxLjM4OSwxLjA0Nmw1LjcsMTkuMDU3YTYuOTUsNi45NSwwLDAsMCwxMy42MDgtMS45ODVWMjA1Ljc5NVoiIGZpbGw9IiNmZmYiLz4NCiAgPC9nPg0KPC9zdmc+DQo="}}]);
//# sourceMappingURL=component---src-pages-listen-js-2e76cfaf47a79b065abd.js.map