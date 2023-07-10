"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(m,i(i({ref:t},y),{},{components:n})):r.createElement(m,i({ref:t},y))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i=void 0,l={unversionedId:"sql/\u7bc4\u4f8b-leetcode-SQL/day8-511. Game Play Analysis I",id:"sql/\u7bc4\u4f8b-leetcode-SQL/day8-511. Game Play Analysis I",title:"day8-511. Game Play Analysis I",description:"",source:"@site/docs/03.sql/4.\u7bc4\u4f8b-leetcode-SQL/day8-511. Game Play Analysis I.mdx",sourceDirName:"03.sql/4.\u7bc4\u4f8b-leetcode-SQL",slug:"/sql/\u7bc4\u4f8b-leetcode-SQL/day8-511. Game Play Analysis I",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day8-511. Game Play Analysis I",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"day8-1890. The Latest Login in 2020",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day8-1890. The Latest Login in 2020"},next:{title:"day8-586. Customer Placing the Largest Number of Orders",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day8-586. Customer Placing the Largest Number of Orders"}},s={},c=[],y={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"/*\nTable: Activity\n\n+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| player_id    | int     |\n| device_id    | int     |\n| event_date   | date    |\n| games_played | int     |\n+--------------+---------+\n(player_id, event_date) is the primary key of this table.\nThis table shows the activity of players of some games.\nEach row is a record of a player who logged in and played a number of games (possibly 0) before logging out on someday using some device.\n \n\nWrite an SQL query to report the first login date for each player.\n\nReturn the result table in any order.\n\nThe query result format is in the following example.\n\n \n\nExample 1:\n\nInput: \nActivity table:\n+-----------+-----------+------------+--------------+\n| player_id | device_id | event_date | games_played |\n+-----------+-----------+------------+--------------+\n| 1         | 2         | 2016-03-01 | 5            |\n| 1         | 2         | 2016-05-02 | 6            |\n| 2         | 3         | 2017-06-25 | 1            |\n| 3         | 1         | 2016-03-02 | 0            |\n| 3         | 4         | 2018-07-03 | 5            |\n+-----------+-----------+------------+--------------+\nOutput: \n+-----------+-------------+\n| player_id | first_login |\n+-----------+-------------+\n| 1         | 2016-03-01  |\n| 2         | 2017-06-25  |\n| 3         | 2016-03-02  |\n+-----------+-------------+\n*/\n\n// \u7528 player_id \u5206\u7d44\uff0c\u5206\u7d44\u4e2d\u518d\u53bb\u9078 MIN(event_date) \n# Write your MySQL query statement below\nSELECT player_id , MIN(event_date) AS first_login \nFROM Activity\nGROUP BY player_id\n")))}p.isMDXComponent=!0}}]);