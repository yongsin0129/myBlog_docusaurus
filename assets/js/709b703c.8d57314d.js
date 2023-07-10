"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=o,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i=void 0,s={unversionedId:"sql/\u7bc4\u4f8b-leetcode-SQL/day4-1795. Rearrange Products Table",id:"sql/\u7bc4\u4f8b-leetcode-SQL/day4-1795. Rearrange Products Table",title:"day4-1795. Rearrange Products Table",description:"",source:"@site/docs/03.sql/4.\u7bc4\u4f8b-leetcode-SQL/day4-1795. Rearrange Products Table.mdx",sourceDirName:"03.sql/4.\u7bc4\u4f8b-leetcode-SQL",slug:"/sql/\u7bc4\u4f8b-leetcode-SQL/day4-1795. Rearrange Products Table",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day4-1795. Rearrange Products Table",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"day4-176. Second Highest Salary",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day4-176. Second Highest Salary"},next:{title:"day4-1965. Employees With Missing Information",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day4-1965. Employees With Missing Information"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"/*\nTable: Products\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| product_id  | int     |\n| store1      | int     |\n| store2      | int     |\n| store3      | int     |\n+-------------+---------+\nproduct_id is the primary key for this table.\nEach row in this table indicates the product's price in 3 different stores: store1, store2, and store3.\nIf the product is not available in a store, the price will be null in that store's column.\n \n\nWrite an SQL query to rearrange the Products table so that each row has (product_id, store, price). If a product is not available in a store, do not include a row with that product_id and store combination in the result table.\n\nReturn the result table in any order.\n\nThe query result format is in the following example.\n\n \n\nExample 1:\n\nInput: \nProducts table:\n+------------+--------+--------+--------+\n| product_id | store1 | store2 | store3 |\n+------------+--------+--------+--------+\n| 0          | 95     | 100    | 105    |\n| 1          | 70     | null   | 80     |\n+------------+--------+--------+--------+\nOutput: \n+------------+--------+-------+\n| product_id | store  | price |\n+------------+--------+-------+\n| 0          | store1 | 95    |\n| 0          | store2 | 100   |\n| 0          | store3 | 105   |\n| 1          | store1 | 70    |\n| 1          | store3 | 80    |\n+------------+--------+-------+\nExplanation: \nProduct 0 is available in all three stores with prices 95, 100, and 105 respectively.\nProduct 1 is available in store1 with price 70 and store3 with price 80. The product is not available in store2.\n*/\n\n# Write your MySQL query statement below\nSELECT product_id,\n    'store1' AS store,\n    store1 AS price\nFROM Products\nWHERE store1 IS NOT NULL\nUNION\nSELECT product_id,\n    'store2' AS store,\n    store2 AS price\nFROM Products\nWHERE store2 IS NOT NULL\nUNION\nSELECT product_id,\n    'store3' AS store,\n    store3 AS price\nFROM Products\nWHERE store3 IS NOT NULL\n\n/*\nskill:\n\nstring - \u9078\u5b57\u4e32\u7528 '' \uff0c\u9078\u503c\u5247\u76f4\u63a5\u6307\u5b9a field \n\n*/\n\n/*\n\u7db2\u8def\u89e3\u6cd5\n\n\n*/\n")))}p.isMDXComponent=!0}}]);