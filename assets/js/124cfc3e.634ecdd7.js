"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),y=r,m=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},i=void 0,l={unversionedId:"sql/\u7bc4\u4f8b-leetcode-SQL/day7-1693. Daily Leads and Partners",id:"sql/\u7bc4\u4f8b-leetcode-SQL/day7-1693. Daily Leads and Partners",title:"day7-1693. Daily Leads and Partners",description:"",source:"@site/docs/03.sql/4.\u7bc4\u4f8b-leetcode-SQL/day7-1693. Daily Leads and Partners.mdx",sourceDirName:"03.sql/4.\u7bc4\u4f8b-leetcode-SQL",slug:"/sql/\u7bc4\u4f8b-leetcode-SQL/day7-1693. Daily Leads and Partners",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day7-1693. Daily Leads and Partners",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"day7-1141. User Activity for the Past 30 Days I",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day7-1141. User Activity for the Past 30 Days I"},next:{title:"day7-1729. Find Followers Count",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day7-1729. Find Followers Count"}},s={},d=[],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"/*\nTable: DailySales\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| date_id     | date    |\n| make_name   | varchar |\n| lead_id     | int     |\n| partner_id  | int     |\n+-------------+---------+\nThis table does not have a primary key.\nThis table contains the date and the name of the product sold and the IDs of the lead and partner it was sold to.\nThe name consists of only lowercase English letters.\n \n\nWrite an SQL query that will, for each date_id and make_name, return the number of distinct lead_id's and distinct partner_id's.\n\nReturn the result table in any order.\n\nThe query result format is in the following example.\n\n \n\nExample 1:\n\nInput: \nDailySales table:\n+-----------+-----------+---------+------------+\n| date_id   | make_name | lead_id | partner_id |\n+-----------+-----------+---------+------------+\n| 2020-12-8 | toyota    | 0       | 1          |\n| 2020-12-8 | toyota    | 1       | 0          |\n| 2020-12-8 | toyota    | 1       | 2          |\n| 2020-12-7 | toyota    | 0       | 2          |\n| 2020-12-7 | toyota    | 0       | 1          |\n| 2020-12-8 | honda     | 1       | 2          |\n| 2020-12-8 | honda     | 2       | 1          |\n| 2020-12-7 | honda     | 0       | 1          |\n| 2020-12-7 | honda     | 1       | 2          |\n| 2020-12-7 | honda     | 2       | 1          |\n+-----------+-----------+---------+------------+\nOutput: \n+-----------+-----------+--------------+-----------------+\n| date_id   | make_name | unique_leads | unique_partners |\n+-----------+-----------+--------------+-----------------+\n| 2020-12-8 | toyota    | 2            | 3               |\n| 2020-12-7 | toyota    | 1            | 2               |\n| 2020-12-8 | honda     | 2            | 2               |\n| 2020-12-7 | honda     | 3            | 2               |\n+-----------+-----------+--------------+-----------------+\nExplanation: \nFor 2020-12-8, toyota gets leads = [0, 1] and partners = [0, 1, 2] while honda gets leads = [1, 2] and partners = [1, 2].\nFor 2020-12-7, toyota gets leads = [0] and partners = [1, 2] while honda gets leads = [0, 1, 2] and partners = [1, 2].\n*/\n\n# Write your MySQL query statement below\nSELECT \n  date_id , \n  make_name  , \n  COUNT(DISTINCT lead_id ) AS unique_leads  , \n  COUNT(DISTINCT partner_id ) AS unique_partners \nFROM DailySales\nGROUP BY date_id , make_name\nORDER BY make_name DESC , date_id  DESC\n\n/*\n\nskill : GROUP BY \u5169\u500b\u5206\u7fa4 \u4e14 \u5169\u500b\u6392\u5e8f\n\n*/\n")))}p.isMDXComponent=!0}}]);