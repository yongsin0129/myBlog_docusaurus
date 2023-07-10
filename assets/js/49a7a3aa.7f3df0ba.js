"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(n),y=o,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},c=void 0,l={unversionedId:"sql/\u7bc4\u4f8b-leetcode-SQL/day1-1757. Recyclable and Low Fat Products",id:"sql/\u7bc4\u4f8b-leetcode-SQL/day1-1757. Recyclable and Low Fat Products",title:"day1-1757. Recyclable and Low Fat Products",description:"",source:"@site/docs/03.sql/4.\u7bc4\u4f8b-leetcode-SQL/day1-1757. Recyclable and Low Fat Products.mdx",sourceDirName:"03.sql/4.\u7bc4\u4f8b-leetcode-SQL",slug:"/sql/\u7bc4\u4f8b-leetcode-SQL/day1-1757. Recyclable and Low Fat Products",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day1-1757. Recyclable and Low Fat Products",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"answer",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-\u98f2\u6599\u5e97/answer"},next:{title:"day1-183. Customers Who Never Order",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-leetcode-SQL/day1-183. Customers Who Never Order"}},s={},i=[],u={toc:i},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"/*\nTable: Products\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| product_id  | int     |\n| low_fats    | enum    |\n| recyclable  | enum    |\n+-------------+---------+\nproduct_id is the primary key for this table.\nlow_fats is an ENUM of type ('Y', 'N') where 'Y' means this product is low fat and 'N' means it is not.\nrecyclable is an ENUM of types ('Y', 'N') where 'Y' means this product is recyclable and 'N' means it is not.\n \n\nWrite an SQL query to find the ids of products that are both low fat and recyclable.\n\nReturn the result table in any order.\n\nThe query result format is in the following example.\n\n \n\nExample 1:\n\nInput: \nProducts table:\n+-------------+----------+------------+\n| product_id  | low_fats | recyclable |\n+-------------+----------+------------+\n| 0           | Y        | N          |\n| 1           | Y        | Y          |\n| 2           | N        | Y          |\n| 3           | Y        | Y          |\n| 4           | N        | N          |\n+-------------+----------+------------+\nOutput: \n+-------------+\n| product_id  |\n+-------------+\n| 1           |\n| 3           |\n+-------------+\nExplanation: Only products 1 and 3 are both low fat and recyclable.\n*/\n\n# Write your MySQL query statement below\nSELECT product_id\nFROM Products\nWHERE low_fats = 'Y' AND recyclable = 'Y'\n")))}p.isMDXComponent=!0}}]);