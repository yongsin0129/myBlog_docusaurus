"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i=void 0,s={unversionedId:"sql/\u7bc4\u4f8b-\u98f2\u6599\u5e97/insert_into_data",id:"sql/\u7bc4\u4f8b-\u98f2\u6599\u5e97/insert_into_data",title:"insert_into_data",description:"",source:"@site/docs/03.sql/3.\u7bc4\u4f8b-\u98f2\u6599\u5e97/2.insert_into_data.mdx",sourceDirName:"03.sql/3.\u7bc4\u4f8b-\u98f2\u6599\u5e97",slug:"/sql/\u7bc4\u4f8b-\u98f2\u6599\u5e97/insert_into_data",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-\u98f2\u6599\u5e97/insert_into_data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"create_db_and_tables",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-\u98f2\u6599\u5e97/create_db_and_tables"},next:{title:"problems",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-\u98f2\u6599\u5e97/problems"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO drinks (drink_name,price,cost)\nVALUE ('\u963f\u83ef\u7530', 65 , 20 ),\n      ('\u767e\u9999\u7d05\u8336', 45 , 10 ),\n      ('\u56db\u5b63\u6625\u8336', 25 , 5 ),\n      ('\u611b\u7389\u51b0\u8336', 50 , 7 ),\n      ('\u51b0\u5496\u5561', 70 , 30 );\n\nINSERT INTO customers (customer_name,phone,birthdate)\nVALUE ('Johny', 0980123123 , '1997-04-22' ),\n        ('Wendy', 0919456456 , '1999-07-07' );\n\nINSERT INTO orders (drinks_id,customers_id,quantity,create_at)\nVALUE (1, 2 , 4 ,'2019-07-14 13:55:56'),\n      (2, 2 , 3 ,'2019-07-14 14:21:23'),\n      (3, 2 , 9 ,'2019-07-14 14:26:12'),\n      (3, 1 , 2 ,'2019-07-14 18:51:50');\n")))}d.isMDXComponent=!0}}]);