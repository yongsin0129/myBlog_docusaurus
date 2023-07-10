"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2427],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>m});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),s=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},o=function(e){var n=s(e.components);return l.createElement(u.Provider,{value:n},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),h=s(t),p=r,m=h["".concat(u,".").concat(p)]||h[p]||c[p]||i;return t?l.createElement(m,a(a({ref:n},o),{},{components:t})):l.createElement(m,a({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d[h]="string"==typeof e?e:r,a[1]=d;for(var s=2;s<i;s++)a[s]=t[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var l=t(7462),r=(t(7294),t(3905));const i={sidebar_label:"linked list",sidebar_position:2},a=void 0,d={unversionedId:"\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u7dda\u6027\u8868/linked list",id:"\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u7dda\u6027\u8868/linked list",title:"linked list",description:"\u5fc3\u667a\u5716",source:"@site/docs/05.\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/02.\u7dda\u6027\u8868/02.linked list.mdx",sourceDirName:"05.\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/02.\u7dda\u6027\u8868",slug:"/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u7dda\u6027\u8868/linked list",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u7dda\u6027\u8868/linked list",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"linked list",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"array",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u7dda\u6027\u8868/array"},next:{title:"stack",permalink:"/myBlog_docusaurus/docs/\u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5/\u7dda\u6027\u8868/stack"}},u={},s=[{value:"\u5fc3\u667a\u5716",id:"\u5fc3\u667a\u5716",level:2},{value:"\u55ae\u5411\u93c8\u8868\uff08singly linked list\uff09",id:"\u55ae\u5411\u93c8\u8868singly-linked-list",level:2},{value:"\u8907\u96dc\u5ea6\u5206\u6790",id:"\u8907\u96dc\u5ea6\u5206\u6790",level:3},{value:"\u512a\u7f3a\u9ede\u5206\u6790",id:"\u512a\u7f3a\u9ede\u5206\u6790",level:3},{value:"\u5be6\u4f5c linked list - \u7a0b\u5f0f\u78bc",id:"\u5be6\u4f5c-linked-list---\u7a0b\u5f0f\u78bc",level:3},{value:"\u96d9\u5411\u93c8\u8868\uff08doubly linked list\uff09",id:"\u96d9\u5411\u93c8\u8868doubly-linked-list",level:2},{value:"\u5faa\u74b0\u93c8\u8868\uff08circular linked list\uff09",id:"\u5faa\u74b0\u93c8\u8868circular-linked-list",level:2}],o={toc:s},h="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,l.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5fc3\u667a\u5716"},"\u5fc3\u667a\u5716"),(0,r.kt)("img",{alt:"demo picture",src:"https://res.cloudinary.com/dhnxanz2c/image/upload/v1688467613/data%20structure%20and%20algorithm/linked%20list/Untitled_hnhtpi.png",width:"75%",height:"75%"}),(0,r.kt)("h2",{id:"\u55ae\u5411\u93c8\u8868singly-linked-list"},"\u55ae\u5411\u93c8\u8868\uff08singly linked list\uff09"),(0,r.kt)("p",null,"\u93c8\u8868\uff08Linked List\uff09\u662f\u4e00\u7a2e\u5e38\u898b\u7684\u57fa\u790e\u6578\u64da\u7d50\u69cb\uff0c\u662f\u4e00\u7a2e\u7dda\u6027\u8868\uff0c\u4f46\u662f\u4e26\u4e0d\u6703\u6309\u7dda\u6027\u7684\u9806\u5e8f\u5b58\u5132\u6578\u64da\uff0c\u800c\u662f\u5728\u6bcf\u4e00\u500b\u7bc0\u9ede\u88cf\u5b58\u5230\u4e0b\u4e00\u500b\u7bc0\u9ede\u7684\u6307\u91dd\uff08Pointer\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u93c8\u8868\u662f\u7531\u6578\u64da\u57df\u548c\u6307\u91dd\u57df\u5169\u90e8\u5206\u7d44\u6210\u7684"),"\uff0c\u5b83\u7684\u7d44\u6210\u7d50\u69cb\u5982\u4e0b\uff1a"),(0,r.kt)("img",{alt:"demo picture",src:"https://res.cloudinary.com/dhnxanz2c/image/upload/v1688468010/data%20structure%20and%20algorithm/linked%20list/Untitled_myddwr.png",width:"75%",height:"75%"}),(0,r.kt)("p",null,"\u6bcf\u500b\u7bc0\u9ede\u53ea\u6709\u4e00\u500b\u6307\u5411\u4e0b\u4e00\u500b\u7bc0\u9ede\u7684\u6307\u91dd\uff0c\u6700\u5f8c\u4e00\u500b\u7bc0\u9ede\u7684\u6307\u91dd\u6307\u5411\u7a7a\uff08NULL\uff09\u3002"),(0,r.kt)("h3",{id:"\u8907\u96dc\u5ea6\u5206\u6790"},"\u8907\u96dc\u5ea6\u5206\u6790"),(0,r.kt)("p",null,"\u7531\u65bc\u93c8\u8868\u7121\u9700\u6309\u9806\u5e8f\u5b58\u5132\uff0c\u56e0\u6b64\u93c8\u8868\u5728\u63d2\u5165\u7684\u6642\u53ef\u4ee5\u9054\u5230 O(1) \u7684\u8907\u96dc\u5ea6\uff0c\u6bd4\u9806\u5e8f\u9336\u5feb\u5f97\u591a\uff0c\u4f46\u662f\u67e5\u627e\u4e00\u500b\u7bc0\u9ede\u6216\u8005\u8a2a\u554f\u7279\u5b9a\u7de8\u865f\u7684\u7bc0\u9ede\u5247\u9700\u8981 O(n) \u7684\u6642\u9593\uff0c\u800c\u9806\u5e8f\u8868\u63d2\u5165\u548c\u67e5\u8a62\u7684\u6642\u9593\u8907\u96dc\u5ea6\u5206\u5225\u662f O(log n) \u548c O(1)\u3002"),(0,r.kt)("h3",{id:"\u512a\u7f3a\u9ede\u5206\u6790"},"\u512a\u7f3a\u9ede\u5206\u6790"),(0,r.kt)("p",null,"\u4f7f\u7528\u93c8\u8868\u7d50\u69cb\u53ef\u4ee5\u514b\u670d\u6578\u7d44\u93c8\u8868\u9700\u8981\u9810\u5148\u77e5\u9053\u6578\u64da\u5927\u5c0f\u7684\u7f3a\u9ede\uff0c\u93c8\u8868\u7d50\u69cb\u53ef\u4ee5\u5145\u5206\u5229\u7528\u8a08\u7b97\u6a5f\u5167\u5b58\u7a7a\u9593\uff0c\u5be6\u73fe\u9748\u6d3b\u7684\u5167\u5b58\u52d5\u614b\u7ba1\u7406\u3002\u4f46\u662f\u93c8\u8868\u5931\u53bb\u4e86\u6578\u7d44\u96a8\u6a5f\u8b80\u53d6\u7684\u512a\u9ede\uff0c\u540c\u6642\u93c8\u8868\u7531\u65bc\u589e\u52a0\u4e86\u7d50\u9ede\u7684\u6307\u91dd\u57df\uff0c\u7a7a\u9593\u958b\u92b7\u6bd4\u8f03\u5927\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6700\u58de\u6642\u9593\u8907\u96dc\u5ea6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"push()"),(0,r.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c07\u65b0\u7bc0\u9ede\u65b0\u589e\u5230\u93c8\u8868\u7684\u672b\u5c3e\uff0c\u9700\u8981\u904d\u6b77\u6574\u500b\u93c8\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pop()"),(0,r.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c07\u93c8\u8868\u7684\u6700\u5f8c\u4e00\u500b\u7bc0\u9ede\u5f48\u51fa\uff0c\u9700\u8981\u904d\u6b77\u6574\u500b\u93c8\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shift()"),(0,r.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c07\u93c8\u8868\u7684\u7b2c\u4e00\u500b\u7bc0\u9ede\u5f48\u51fa\uff0c\u4e0d\u9700\u8981\u904d\u6b77\u6574\u500b\u93c8\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unshift()"),(0,r.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u93c8\u8868\u7684\u958b\u982d\u65b0\u589e\u4e00\u500b\u65b0\u7bc0\u9ede\uff0c\u4e0d\u9700\u8981\u904d\u6b77\u6574\u500b\u93c8\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"insertAt()"),(0,r.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u93c8\u8868\u7684\u6307\u5b9a\u4f4d\u7f6e\u63d2\u5165\u4e00\u500b\u65b0\u7bc0\u9ede\uff0c\u9700\u8981\u904d\u6b77\u6574\u500b\u93c8\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removeAt()"),(0,r.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u522a\u9664\u93c8\u8868\u4e2d\u6307\u5b9a\u4f4d\u7f6e\u7684\u7bc0\u9ede\uff0c\u9700\u8981\u904d\u6b77\u6574\u500b\u93c8\u8868\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"get()"),(0,r.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7372\u53d6\u93c8\u8868\u4e2d\u6307\u5b9a\u4f4d\u7f6e\u7bc0\u9ede\u7684\u503c\uff0c\u9700\u8981\u904d\u6b77\u6574\u500b\u93c8\u8868\u3002")))),(0,r.kt)("h3",{id:"\u5be6\u4f5c-linked-list---\u7a0b\u5f0f\u78bc"},"\u5be6\u4f5c linked list - \u7a0b\u5f0f\u78bc"),(0,r.kt)("details",null,(0,r.kt)("summary",null," \u4f7f\u7528 JS \u5be6\u73fe linked list "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'class Node {\n  constructor (value) { // \u5efa\u7acb\u4e00\u500b\u65b0\u7684\u7bc0\u9ede\uff0c\u50b3\u5165\u7bc0\u9ede\u7684\u503c\n    this.value = value // \u8a2d\u5b9a\u7bc0\u9ede\u7684\u503c\n    this.next = null // \u8a2d\u5b9a\u7bc0\u9ede\u7684\u4e0b\u4e00\u500b\u7bc0\u9ede\u70ba null\n  }\n}\n\nclass LinkedList {\n  constructor () { // \u5efa\u7acb\u4e00\u500b\u65b0\u7684\u93c8\u7d50\u4e32\u5217\n    this.head = null // \u8a2d\u5b9a\u93c8\u7d50\u4e32\u5217\u7684\u982d\u7bc0\u9ede\u70ba null\n    this.length = 0 // \u8a2d\u5b9a\u93c8\u7d50\u4e32\u5217\u7684\u9577\u5ea6\u70ba 0\n  }\n\n  push (value) { // \u5728\u93c8\u7d50\u4e32\u5217\u7684\u5c3e\u90e8\u65b0\u589e\u4e00\u500b\u7bc0\u9ede\uff0c\u50b3\u5165\u7bc0\u9ede\u7684\u503c\n    let newNode = new Node(value) // \u5efa\u7acb\u4e00\u500b\u65b0\u7684\u7bc0\u9ede\uff0c\u50b3\u5165\u7bc0\u9ede\u7684\u503c\n    if (this.head === null) { // \u5982\u679c\u93c8\u7d50\u4e32\u5217\u7684\u982d\u7bc0\u9ede\u70ba null\uff0c\u4ee3\u8868\u93c8\u7d50\u4e32\u5217\u662f\u7a7a\u7684\n      this.head = newNode // \u5c07\u65b0\u7684\u7bc0\u9ede\u8a2d\u5b9a\u70ba\u93c8\u7d50\u4e32\u5217\u7684\u982d\u7bc0\u9ede\n    } else { // \u5982\u679c\u93c8\u7d50\u4e32\u5217\u4e0d\u662f\u7a7a\u7684\n      let currentNode = this.head // \u8a2d\u5b9a\u76ee\u524d\u7bc0\u9ede\u70ba\u93c8\u7d50\u4e32\u5217\u7684\u982d\u7bc0\u9ede\n      while (currentNode.next !== null) { // \u5982\u679c\u76ee\u524d\u7bc0\u9ede\u7684\u4e0b\u4e00\u500b\u7bc0\u9ede\u4e0d\u662f null\uff0c\u4ee3\u8868\u76ee\u524d\u7bc0\u9ede\u4e0d\u662f\u5c3e\u7bc0\u9ede\n        currentNode = currentNode.next // \u5c07\u76ee\u524d\u7bc0\u9ede\u8a2d\u5b9a\u70ba\u76ee\u524d\u7bc0\u9ede\u7684\u4e0b\u4e00\u500b\u7bc0\u9ede\n      }\n      currentNode.next = newNode // \u5c07\u65b0\u7684\u7bc0\u9ede\u8a2d\u5b9a\u70ba\u76ee\u524d\u7bc0\u9ede\u7684\u4e0b\u4e00\u500b\u7bc0\u9ede\uff0c\u5373\u65b0\u589e\u7bc0\u9ede\u5230\u93c8\u7d50\u4e32\u5217\u7684\u5c3e\u90e8\n    }\n    this.length++ // \u9577\u5ea6\u52a0 1\n  }\n\n  pop () { // \u5f9e\u93c8\u7d50\u4e32\u5217\u7684\u5c3e\u90e8\u79fb\u9664\u4e00\u500b\u7bc0\u9ede\n    if (!this.head) { // \u5982\u679c\u93c8\u7d50\u4e32\u5217\u662f\u7a7a\u7684\uff0c\u4ee3\u8868\u6c92\u6709\u7bc0\u9ede\u53ef\u4ee5\u79fb\u9664\n      return null // \u56de\u50b3 null\n    } else if (this.length === 1) { // \u5982\u679c\u93c8\u7d50\u4e32\u5217\u53ea\u6709\u4e00\u500b\u7bc0\u9ede\n      let temp = this.head // \u5c07\u982d\u7bc0\u9ede\u5b58\u5165 temp \u8b8a\u6578\n      this.head = null // \u5c07\u982d\u7bc0\u9ede\u8a2d\u5b9a\u70ba null\uff0c\u5373\u79fb\u9664\u982d\u7bc0\u9ede\n      this.length = 0 // \u9577\u5ea6\u8a2d\u5b9a\u70ba 0\n      return temp // \u56de\u50b3\u88ab\u79fb\u9664\u7684\u7bc0\u9ede\n    } else { // \u5982\u679c\u93c8\u7d50\u4e32\u5217\u6709\u591a\u500b\u7bc0\u9ede\n      let currentNode = this.head // \u8a2d\u5b9a\u76ee\u524d\u7bc0\u9ede\u70ba\u93c8\u7d50\u4e32\u5217\u7684\u982d\u7bc0\u9ede\n      for (let i = 1; i <= this.length - 2; i++) { // for \u8ff4\u5708\u57f7\u884c length - 2 \u6b21\uff0c\u76ee\u7684\u662f\u627e\u5230\u5c3e\u7bc0\u9ede\u7684\u524d\u4e00\u500b\u7bc0\u9ede\n        currentNode = currentNode.next // \u5c07\u76ee\u524d\u7bc0\u9ede\u8a2d\u5b9a\u70ba\u76ee\u524d\u7bc0\u9ede\u7684\u4e0b\u4e00\u500b\u7bc0\u9ede\n      }\n      let temp = currentNode.next // \u5c07\u5c3e\u7bc0\u9ede\u5b58\u5165 temp \u8b8a\u6578\n      currentNode.next = null // \u5c07\u5c3e\u7bc0\u9ede\u7684\u524d\u4e00\u500b\u7bc0\u9ede\u7684\u4e0b\u4e00\u500b\u7bc0\u9ede\u8a2d\u5b9a\u70ba null\uff0c\u5373\u79fb\u9664\u5c3e\u7bc0\u9ede\n      this.length-- // \u9577\u5ea6\u6e1b 1\n      return temp // \u56de\u50b3\u88ab\u79fb\u9664\u7684\u7bc0\u9ede\n    }\n  }\n\n  // shift() \u65b9\u6cd5\u7528\u4f86\u79fb\u9664 Linked List \u7684\u7b2c\u4e00\u500b\u7bc0\u9ede\u4e26\u56de\u50b3\u8a72\u7bc0\u9ede\n  shift () {\n    if (!this.head) { // \u5982\u679c Linked List \u70ba\u7a7a\uff0c\u56de\u50b3 null\n      return null\n    } else if (this.length === 1) { // \u5982\u679c Linked List \u53ea\u6709\u4e00\u500b\u7bc0\u9ede\uff0c\u5c07 head \u8a2d\u70ba null\uff0c\u9577\u5ea6\u8a2d\u70ba 0\uff0c\u4e26\u56de\u50b3\u8a72\u7bc0\u9ede\n      let temp = this.head\n      this.head = null\n      this.length = 0\n      return temp\n    } else { // \u5982\u679c Linked List \u6709\u591a\u500b\u7bc0\u9ede\uff0c\u5c07 head \u8a2d\u70ba\u4e0b\u4e00\u500b\u7bc0\u9ede\uff0c\u9577\u5ea6\u6e1b 1\uff0c\u4e26\u56de\u50b3\u7b2c\u4e00\u500b\u7bc0\u9ede\n      let temp = this.head\n      this.head = this.head.next\n      this.length--\n      return temp\n    }\n  }\n\n  // unshift() \u65b9\u6cd5\u7528\u4f86\u5728 Linked List \u7684\u958b\u982d\u65b0\u589e\u4e00\u500b\u7bc0\u9ede\n  unshift (value) {\n    if (!this.head) { // \u5982\u679c Linked List \u70ba\u7a7a\uff0c\u5c07 head \u8a2d\u70ba\u65b0\u7bc0\u9ede\n      this.head = new Node(value)\n    } else { // \u5982\u679c Linked List \u6709\u7bc0\u9ede\uff0c\u5c07 head \u8a2d\u70ba\u65b0\u7bc0\u9ede\uff0c\u4e26\u5c07\u65b0\u7bc0\u9ede\u7684 next \u6307\u5411\u539f\u672c\u7684 head\n      let temp = this.head\n      let newNode = new Node(value)\n      this.head = newNode\n      this.head.next = temp\n    }\n    this.length++ // \u9577\u5ea6\u52a0 1\n  }\n\n  insertAt (index, value) {\n    // \u5982\u679c\u7d22\u5f15\u8d85\u51fa\u7bc4\u570d\u6216\u5c0f\u65bc0\uff0c\u5247\u8fd4\u56denull\n    if (index > this.length || index < 0) {\n      return null\n    }\n    // \u5982\u679c\u7d22\u5f15\u70ba0\uff0c\u5247\u5728\u982d\u90e8\u63d2\u5165\u65b0\u7bc0\u9ede\n    else if (index === 0) {\n      this.unshift(value)\n      return\n    }\n    // \u5982\u679c\u7d22\u5f15\u70ba\u5217\u8868\u9577\u5ea6\uff0c\u5247\u5728\u5c3e\u90e8\u63d2\u5165\u65b0\u7bc0\u9ede\n    else if (index === this.length) {\n      this.push(value)\n      return\n    }\n\n    let currentNode = this.head\n    let newNode = new Node(value)\n    // \u904d\u6b77\u7d22\u5f15-1\u6b65\n    for (let i = 1; i <= index - 1; i++) {\n      currentNode = currentNode.next\n    }\n    // \u63d2\u5165\u65b0\u7bc0\u9ede\n    newNode.next = currentNode.next\n    currentNode.next = newNode\n    this.length++\n    return\n  }\n\n  // removeAt\u65b9\u6cd5\u7528\u65bc\u522a\u9664\u6307\u5b9a\u7d22\u5f15\u4f4d\u7f6e\u7684\u7bc0\u9ede\n  removeAt (index) {\n    // \u5982\u679c\u7d22\u5f15\u4f4d\u7f6e\u8d85\u51fa\u7bc4\u570d\uff0c\u8fd4\u56denull\n    if (index > this.length || index < 0) {\n      return null\n    }\n    // \u5982\u679c\u7d22\u5f15\u4f4d\u7f6e\u70ba0\uff0c\u8abf\u7528shift\u65b9\u6cd5\u522a\u9664\u982d\u7bc0\u9ede\u4e26\u8fd4\u56de\u522a\u9664\u7684\u7bc0\u9ede\n    else if (index === 0) {\n      let result = this.shift()\n      return result\n    }\n    // \u5982\u679c\u7d22\u5f15\u4f4d\u7f6e\u70ba\u6700\u5f8c\u4e00\u500b\u7bc0\u9ede\uff0c\u8abf\u7528pop\u65b9\u6cd5\u522a\u9664\u5c3e\u7bc0\u9ede\u4e26\u8fd4\u56de\u522a\u9664\u7684\u7bc0\u9ede\n    else if (index === this.length) {\n      let result = this.pop()\n      return result\n    }\n\n    // \u904d\u6b77\u93c8\u8868\uff0c\u627e\u5230\u8981\u522a\u9664\u7684\u7bc0\u9ede\u7684\u524d\u4e00\u500b\u7bc0\u9ede\n    let currentNode = this.head\n    for (let i = 1; i <= index - 1; i++) {\n      currentNode = currentNode.next\n    }\n    // \u5c07\u8981\u522a\u9664\u7684\u7bc0\u9ede\u7684\u524d\u4e00\u500b\u7bc0\u9ede\u7684next\u6307\u5411\u8981\u522a\u9664\u7684\u7bc0\u9ede\u7684\u4e0b\u4e00\u500b\u7bc0\u9ede\n    let temp = currentNode.next\n    currentNode.next = currentNode.next.next\n    // \u93c8\u8868\u9577\u5ea6\u6e1b1\n    this.length--\n    // \u8fd4\u56de\u522a\u9664\u7684\u7bc0\u9ede\n    return temp\n  }\n\n  // get\u65b9\u6cd5\u7528\u4f86\u53d6\u5f97\u6307\u5b9a\u7d22\u5f15\u7684\u7bc0\u9ede\u503c\n  get (index) {\n    // \u5982\u679c\u7d22\u5f15\u8d85\u51fa\u7bc4\u570d\uff0c\u56de\u50b3null\n    if (index >= this.length || index < 0) {\n      return null\n    }\n    // \u8d70\u8a2a\u93c8\u7d50\u4e32\u5217\uff0c\u627e\u5230\u6307\u5b9a\u7d22\u5f15\u7684\u7bc0\u9ede\n    let currentNode = this.head\n    for (let i = 0; i < index; i++) {\n      currentNode = currentNode.next\n    }\n    // \u56de\u50b3\u6307\u5b9a\u7d22\u5f15\u7684\u7bc0\u9ede\u503c\n    return currentNode.value\n  }\n\n  // printAll\u65b9\u6cd5\u7528\u4f86\u5217\u5370\u93c8\u7d50\u4e32\u5217\u4e2d\u6240\u6709\u7bc0\u9ede\u7684\u503c\n  printAll () {\n    // \u5982\u679c\u93c8\u7d50\u4e32\u5217\u70ba\u7a7a\uff0c\u5217\u5370\u63d0\u793a\u8a0a\u606f\u4e26\u8fd4\u56de\n    if (this.length === 0) {\n      console.log("Nothing in this linked list.")\n      return\n    }\n    // \u8d70\u8a2a\u93c8\u7d50\u4e32\u5217\uff0c\u5217\u5370\u6bcf\u500b\u7bc0\u9ede\u7684\u503c\n    let currentNode = this.head\n    while (currentNode !== null) {\n      console.log(currentNode.value)\n      currentNode = currentNode.next\n    }\n  }\n}\n\nlet myLinkedList = new LinkedList()\nmyLinkedList.push("Mike")\nmyLinkedList.push("Harry")\nmyLinkedList.push("James")\nmyLinkedList.push("Kevin")\n\nconsole.log(myLinkedList.get(100))\n\nmyLinkedList.printAll()\nconsole.log(myLinkedList.length);\n'))),(0,r.kt)("h2",{id:"\u96d9\u5411\u93c8\u8868doubly-linked-list"},"\u96d9\u5411\u93c8\u8868\uff08doubly linked list\uff09"),(0,r.kt)("p",null,"\u6bcf\u500b\u7bc0\u9ede\u6709\u5169\u500b\u6307\u91dd\uff0c\u4e00\u500b\u6307\u5411\u524d\u4e00\u500b\u7bc0\u9ede\uff0c\u4e00\u500b\u6307\u5411\u5f8c\u4e00\u500b\u7bc0\u9ede\uff0c\u7b2c\u4e00\u500b\u7bc0\u9ede\u7684\u524d\u7f6e\u6307\u91dd\u548c\u6700\u5f8c\u4e00\u500b\u7bc0\u9ede\u7684\u5f8c\u7e7c\u6307\u91dd\u90fd\u6307\u5411\u7a7a\uff08NULL\uff09\u3002"),(0,r.kt)("img",{alt:"demo picture",src:"https://res.cloudinary.com/dhnxanz2c/image/upload/v1688467952/data%20structure%20and%20algorithm/linked%20list/Untitled_ncbbsw.png",width:"75%",height:"75%"}),(0,r.kt)("h2",{id:"\u5faa\u74b0\u93c8\u8868circular-linked-list"},"\u5faa\u74b0\u93c8\u8868\uff08circular linked list\uff09"),(0,r.kt)("p",null,"\u6700\u5f8c\u4e00\u500b\u7bc0\u9ede\u7684\u6307\u91dd\u4e0d\u662fNULL\uff0c\u800c\u662f\u6307\u5411\u7b2c\u4e00\u500b\u7bc0\u9ede\uff0c\u5f9e\u800c\u5f62\u6210\u4e00\u500b\u74b0\u5f62\u7d50\u69cb\u3002\u53ef\u4ee5\u662f\u55ae\u5411\u5faa\u74b0\u93c8\u8868\u6216\u96d9\u5411\u5faa\u74b0\u93c8\u8868\u3002"),(0,r.kt)("img",{alt:"demo picture",src:"https://res.cloudinary.com/dhnxanz2c/image/upload/v1688468010/data%20structure%20and%20algorithm/linked%20list/Untitled_myddwr.png",width:"75%",height:"75%"}),(0,r.kt)("img",{alt:"demo picture",src:"https://res.cloudinary.com/dhnxanz2c/image/upload/v1688468038/data%20structure%20and%20algorithm/linked%20list/Untitled_h3cldy.png",width:"75%",height:"75%"}))}c.isMDXComponent=!0}}]);