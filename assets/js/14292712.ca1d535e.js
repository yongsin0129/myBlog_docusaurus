"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"MergeSort",sidebar_position:3},i=void 0,l={unversionedId:"\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/MergeSort",id:"\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/MergeSort",title:"MergeSort",description:"\u5408\u4f75\u6392\u5e8f\uff08Merge Sort\uff09",source:"@site/docs/05.\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/05.\u6392\u5e8f/03.MergeSort.mdx",sourceDirName:"05.\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/05.\u6392\u5e8f",slug:"/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/MergeSort",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/MergeSort",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"MergeSort",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Select Insert Bubble",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/\u521d\u968e\u6392\u5e8f"},next:{title:"QuickSort",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/QuickSort"}},p={},u=[{value:"<strong>\u5408\u4f75\u6392\u5e8f\uff08Merge Sort\uff09</strong>",id:"\u5408\u4f75\u6392\u5e8fmerge-sort",level:2},{value:"\u53c3\u8003\u8cc7\u6599 :",id:"\u53c3\u8003\u8cc7\u6599-",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5408\u4f75\u6392\u5e8fmerge-sort"},(0,o.kt)("strong",{parentName:"h2"},"\u5408\u4f75\u6392\u5e8f\uff08Merge Sort\uff09")),(0,o.kt)("img",{alt:"demo picture",src:"https://res.cloudinary.com/dhnxanz2c/image/upload/v1688523949/order/Untitled_bo34lf.png",width:"75%",height:"75%"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5408\u4f75\u6392\u5e8f\uff08Merge Sort\uff09"),"\xa0\u53c8\u7a31\u70ba\xa0",(0,o.kt)("strong",{parentName:"p"},"\u6b78\u4f75\u6392\u5e8f"),"\uff0c\u662f\u5efa\u7acb\u5728\u5408\u4f75\u64cd\u4f5c\u4e0a\u7684\u4e00\u7a2e\u6709\u6548\u7684\u6392\u5e8f\u6f14\u7b97\u6cd5\uff0c\u662f\u63a1\u7528\xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://zh.wikipedia.org/wiki/%E5%88%86%E6%B2%BB%E6%B3%95"},"\u5206\u6cbb\u6cd5")),"\xa0\u7684\u4e00\u500b\u975e\u5e38\u5178\u578b\u7684\u61c9\u7528\u3002"),(0,o.kt)("p",null,"\u5206\u6cbb\u6cd5\uff08Divide and Conquer\uff09\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f\u5c07\u554f\u984c\u5206\u6210\u5169\u500b\u5b50\u554f\u984c\u6216\u66f4\u591a\u7684\u5b50\u554f\u984c\uff0c\u518d\u7e7c\u7e8c\u5c07\u5b50\u554f\u984c\u5206\u89e3\u6210\u66f4\u5c0f\u7684\u5b50\u554f\u984c\uff0c\u76f4\u5230\u53ef\u4ee5\u7c21\u55ae\u6c42\u89e3\uff0c\u63a5\u8457\u5c07\u6240\u6709\u5b50\u554f\u984c\u7684\u7d50\u679c\u5408\u4f75\uff0c\u5c31\u80fd\u6c42\u5f97\u5143\u554f\u984c\u7684\u89e3\u3002\u5206\u6cbb\u6cd5\u4e00\u822c\u6703\u4f7f\u7528\u905e\u8ff4\u5be6\u73fe\u3002"),(0,o.kt)("p",null,"\u64cd\u4f5c\u6d41\u7a0b\uff0c\u63a1\u7528\u5206\u6cbb\u6cd5\uff0c\u5206\u70ba\u5169\u500b\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5206\u5272\uff1a\u5c07\u6578\u5217\u5e73\u5747\u5206\u5272\u6210\u5169\u534a\uff0c\u91cd\u8907\u64cd\u4f5c\u76f4\u5230\u5340\u584a\u4e2d\u53ea\u5269\u4e00\u500b\u5143\u7d20\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5408\u4f75\uff1a\u63a5\u8457\u518d\u5c07\u5404\u500b\u5b50\u9663\u5217\u5408\u4f75\uff0c\u5408\u4f75\u6642\u6703\u53cd\u8986\u6bd4\u8f03\u7b2c\u4e00\u500b\u6578\uff0c\u4e26\u5c07\u8f03\u5c0f\u7684\u5143\u7d20\u79fb\u81f3\u4e0a\u4e00\u5c64\u4e2d\u3002\u91cd\u8907\u64cd\u4f5c\u76f4\u5230\u5269\u4e00\u500b\u6578\u5217\uff0c\u6392\u5e8f\u5b8c\u7562\u3002")),(0,o.kt)("p",null,"\u5408\u4f75\u6392\u5e8f\u7684\u5be6\u73fe\u6709\u5169\u7a2e\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u905e\u8ff4\u7d50\u69cb\uff08\u81ea\u9802\u5411\u4e0b Top-down\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u8fed\u4ee3\u7d50\u69cb\uff08\u81ea\u5e95\u5411\u4e0a Bottom-up\uff09")),(0,o.kt)("p",null,"\u4e00\u822c\u4f86\u8aaa\uff0c\u5408\u4f75\u6392\u5e8f\u662f\u4f7f\u7528\u905e\u8ff4\u7d50\u69cb\u4f86\u5be6\u73fe\u7684\uff0c\u4f46\u905e\u8ff4\u6709\u4e00\u500b\u554f\u984c\uff0c\u5c31\u662f\u9700\u8981\u4f7f\u7528\u5230\u984d\u5916\u7a7a\u9593\u4f86\u5132\u5b58\u5b50\u9663\u5217\uff0c\u800c\u4e14\u7576\u905e\u8ff4\u51fd\u5f0f\u88ab\u547c\u53eb\u7684\u904e\u65bc\u983b\u7e41\uff0c\u53ef\u80fd\u5c0e\u81f4\xa0",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://zh.wikipedia.org/wiki/%E5%A0%86%E7%96%8A%E6%BA%A2%E4%BD%8D"},"\u5806\u758a\u6ea2\u4f4d")),"\u3002"),(0,o.kt)("p",null,"\u70ba\u4e86\u512a\u5316\u5408\u4f75\u6392\u5e8f\uff08\u8fed\u4ee3\u7d50\u69cb\uff09\uff0c\u6211\u5011\u53ef\u4ee5\u8df3\u904e\u5206\u5272\u9019\u500b\u64cd\u4f5c\uff0c\u4e5f\u5c31\u662f\u4e00\u958b\u59cb\u5c31\u5c07\u5b83\u5011\u8996\u70ba\u5df2\u5206\u5272\u72c0\u614b\uff0c\u6bd4\u8f03\u76f8\u9130\u5169\u500b\u5143\u7d20\u9032\u884c\u5408\u4f75\u64cd\u4f5c\uff0c\u6bcf\u8f2a\u9032\u884c\u5408\u4f75\u64cd\u4f5c\u7684\u5143\u7d20\u90fd\u6703\u7ffb\u500d\u6210\u9577\u3002"),(0,o.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599-"},"\u53c3\u8003\u8cc7\u6599 :"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chupai.github.io/posts/200525_sort_algorithm_merge_sort/"},"JavaScript \u5b78\u6f14\u7b97\u6cd5\uff08\u4e5d\uff09- \u5408\u4f75\u6392\u5e8f \u2013 \u7af9\u767d\u8a18\u4e8b\u672c (chupai.github.io)")))}m.isMDXComponent=!0}}]);