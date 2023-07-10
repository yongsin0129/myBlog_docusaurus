"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"ShellSort",sidebar_position:5},l=void 0,p={unversionedId:"\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/ShellSort",id:"\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/ShellSort",title:"ShellSort",description:"\u5e0c\u723e\u6392\u5e8f\uff08Shell Sort\uff09",source:"@site/docs/05.\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/05.\u6392\u5e8f/05.ShellSort.mdx",sourceDirName:"05.\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/05.\u6392\u5e8f",slug:"/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/ShellSort",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/ShellSort",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"ShellSort",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"QuickSort",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/QuickSort"},next:{title:"HeapSort",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u6392\u5e8f/HeapSort"}},i={},s=[{value:"<strong>\u5e0c\u723e\u6392\u5e8f\uff08Shell Sort\uff09</strong>",id:"\u5e0c\u723e\u6392\u5e8fshell-sort",level:2},{value:"\u53c3\u8003\u8cc7\u6599 :",id:"\u53c3\u8003\u8cc7\u6599-",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5e0c\u723e\u6392\u5e8fshell-sort"},(0,o.kt)("strong",{parentName:"h2"},"\u5e0c\u723e\u6392\u5e8f\uff08Shell Sort\uff09")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5e0c\u723e\u6392\u5e8f\uff08Shell Sort\uff09"),"\uff0c\u4e5f\u7a31\xa0",(0,o.kt)("strong",{parentName:"p"},"\u905e\u6e1b\u589e\u91cf\u6392\u5e8f"),"\uff0c\u662f\xa0",(0,o.kt)("strong",{parentName:"p"},"\u63d2\u5165\u6392\u5e8f"),"\xa0\u7684\u4e00\u7a2e\u66f4\u9ad8\u6548\u7684\u6539\u9032\u7248\u672c\uff0c\u70ba\u4e0d\u7a69\u5b9a\u6392\u5e8f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d2\u5165\u6392\u5e8f\uff08Insertion Sort\uff09"),"\xa0\u7684\u5169\u9ede\u7279\u6027\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5df2\u7d93\u6392\u597d\u5e8f\u7684\u8cc7\u6599\u64cd\u4f5c\u6642\uff0c\u662f\u6548\u7387\u9ad8\u7684\uff0c\u5373\u53ef\u4ee5\u9054\u5230\xa0",(0,o.kt)("em",{parentName:"li"},"O"),"(",(0,o.kt)("em",{parentName:"li"},"n"),")\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f46\u4e00\u822c\u60c5\u6cc1\u662f\u4f4e\u6548\uff0c\u6bcf\u6b21\u53ea\u80fd\u5c07\u8cc7\u6599\u79fb\u52d5\u4e00\u4f4d\u3002")),(0,o.kt)("p",null,"\u800c\xa0",(0,o.kt)("strong",{parentName:"p"},"\u5e0c\u723e\u6392\u5e8f"),"\xa0\u662f\u5728\xa0",(0,o.kt)("strong",{parentName:"p"},"\u63d2\u5165\u6392\u5e8f"),"\xa0\u57fa\u790e\u4e0a\u6dfb\u52a0\u4e86\xa0",(0,o.kt)("strong",{parentName:"p"},"\u9593\u9694\u9577\u5ea6\uff08gap\uff09"),"\xa0\u7684\u6982\u5ff5\uff0c\u4f7f\u5f97\xa0",(0,o.kt)("strong",{parentName:"p"},"\u63d2\u5165\u6392\u5e8f"),"\xa0\u53ef\u4ee5\u5206\u7d44\u57f7\u884c\uff0c\u4e26\u4e14\u8cc7\u6599\u7684\u79fb\u52d5\u8ddd\u96e2\u53ef\u4ee5\u5927\u65bc\u4e00\u3002"),(0,o.kt)("p",null,"\u5176\u6982\u5ff5\u70ba\uff0c\u5c07\u6574\u500b\u9663\u4f9d\u7167\u9810\u5148\u6307\u5b9a\u7684\xa0",(0,o.kt)("strong",{parentName:"p"},"gap"),"\uff0c\u4ea4\u932f\u5206\u5272\u6210\u6578\u500b\u5c0f\u9663\u5217\uff0c\u4e26\u4ee5\u63d2\u5165\u6392\u5e8f\u7684\u65b9\u5f0f\u5c07\u9019\u4e9b\u5c0f\u9663\u5217\u500b\u5225\u6392\u5e8f\uff0c\u7136\u5f8c\u9010\u6f38\u7e2e\u5c0f\xa0",(0,o.kt)("strong",{parentName:"p"},"gap"),"\uff0c\u76f4\u5230\xa0",(0,o.kt)("strong",{parentName:"p"},"gap"),"\xa0\u7b49\u65bc 1\u3002\u6b64\u6642\u518d\u4f5c\u6700\u5f8c\u4e00\u6b21\u63d2\u5165\u6392\u5e8f\u3002"),(0,o.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599-"},"\u53c3\u8003\u8cc7\u6599 :"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chupai.github.io/posts/2006/sort_algorithm_shell_sort/#%E5%B8%8C%E7%88%BE%E6%8E%92%E5%BA%8Fshell-sort"},"JavaScript \u5b78\u6f14\u7b97\u6cd5\uff08\u5341\u4e00\uff09- \u5e0c\u723e\u6392\u5e8f \u2013 \u7af9\u767d\u8a18\u4e8b\u672c (chupai.github.io)")))}m.isMDXComponent=!0}}]);