"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2995],{3905:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>y});var i=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=i.createContext({}),c=function(t){var n=i.useContext(d),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},l=function(t){var n=c(t.components);return i.createElement(d.Provider,{value:n},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(t,n){var e=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=c(e),p=r,y=u["".concat(d,".").concat(p)]||u[p]||m[p]||o;return e?i.createElement(y,a(a({ref:n},l),{},{components:e})):i.createElement(y,a({ref:n},l))}));function y(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=e.length,a=new Array(o);a[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=t,s[u]="string"==typeof t?t:r,a[1]=s;for(var c=2;c<o;c++)a[c]=e[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},2290:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=e(7462),r=(e(7294),e(3905));const o={sidebar_position:1},a=void 0,s={unversionedId:"sql/\u7bc4\u4f8b-leetcode-SQL/day5-1581. Customer Who Visited but Did Not Make Any Transactions",id:"sql/\u7bc4\u4f8b-leetcode-SQL/day5-1581. Customer Who Visited but Did Not Make Any Transactions",title:"day5-1581. Customer Who Visited but Did Not Make Any Transactions",description:"",source:"@site/docs/03.sql/4.\u7bc4\u4f8b-leetcode-SQL/day5-1581. Customer Who Visited but Did Not Make Any Transactions.mdx",sourceDirName:"03.sql/4.\u7bc4\u4f8b-leetcode-SQL",slug:"/sql/\u7bc4\u4f8b-leetcode-SQL/day5-1581. Customer Who Visited but Did Not Make Any Transactions",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day5-1581. Customer Who Visited but Did Not Make Any Transactions",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"day5-1148. Article Views I",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day5-1148. Article Views I"},next:{title:"day5-175. Combine Two Tables",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day5-175. Combine Two Tables"}},d={},c=[],l={toc:c},u="wrapper";function m(t){let{components:n,...e}=t;return(0,r.kt)(u,(0,i.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"/*\nTable: Visits\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| visit_id    | int     |\n| customer_id | int     |\n+-------------+---------+\nvisit_id is the primary key for this table.\nThis table contains information about the customers who visited the mall.\n \n\nTable: Transactions\n\n+----------------+---------+\n| Column Name    | Type    |\n+----------------+---------+\n| transaction_id | int     |\n| visit_id       | int     |\n| amount         | int     |\n+----------------+---------+\ntransaction_id is the primary key for this table.\nThis table contains information about the transactions made during the visit_id.\n \n\nWrite a SQL query to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.\n\nReturn the result table sorted in any order.\n\nThe query result format is in the following example.\n\n \n\nExample 1:\n\nInput: \nVisits\n+----------+-------------+\n| visit_id | customer_id |\n+----------+-------------+\n| 1        | 23          |\n| 2        | 9           |\n| 4        | 30          |\n| 5        | 54          |\n| 6        | 96          |\n| 7        | 54          |\n| 8        | 54          |\n+----------+-------------+\nTransactions\n+----------------+----------+--------+\n| transaction_id | visit_id | amount |\n+----------------+----------+--------+\n| 2              | 5        | 310    |\n| 3              | 5        | 300    |\n| 9              | 5        | 200    |\n| 12             | 1        | 910    |\n| 13             | 2        | 970    |\n+----------------+----------+--------+\nOutput: \n+-------------+----------------+\n| customer_id | count_no_trans |\n+-------------+----------------+\n| 54          | 2              |\n| 30          | 1              |\n| 96          | 1              |\n+-------------+----------------+\nExplanation: \nCustomer with id = 23 visited the mall once and made one transaction during the visit with id = 12.\nCustomer with id = 9 visited the mall once and made one transaction during the visit with id = 13.\nCustomer with id = 30 visited the mall once and did not make any transactions.\nCustomer with id = 54 visited the mall three times. During 2 visits they did not make any transactions, and during one visit they made 3 transactions.\nCustomer with id = 96 visited the mall once and did not make any transactions.\nAs we can see, users with IDs 30 and 96 visited the mall one time without making any transactions. Also, user 54 visited the mall twice and did not make any transactions.\n*/\n\n# \u5148\u7528 Visits LEFT JOIN Transactions \u8d77\u4f86\n# \u627e\u51fa\u8868\u5167 transaction_id \u70ba\u7a7a\u7684\u5c31\u662f\u53ea\u53c3\u89c0\u6c92\u6709\u8cfc\u8cb7\u7684\u8a18\u9304\n# \u518d count and group\n\n// \u89e3\u6cd51\n \nSELECT customer_id  , COUNT(V.visit_id) AS count_no_trans\nFROM Visits AS V\nLEFT JOIN Transactions AS T ON T.visit_id = V.visit_id\nWHERE transaction_id IS NULL\nGROUP BY customer_id \n\n\n// \u89e3\u6cd52 \u627e\u51fa\u4e0d\u5728 Transactions table \u4e2d\u7684 visit id\n\nselect customer_id, count(visit_id) as count_no_trans \nfrom Visits where visit_id not in (select visit_id from Transactions)\ngroup by customer_id;\n")))}m.isMDXComponent=!0}}]);