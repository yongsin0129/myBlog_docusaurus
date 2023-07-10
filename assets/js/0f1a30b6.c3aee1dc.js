"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1745],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>N});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=t.createContext({}),d=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=d(e.components);return t.createElement(u.Provider,{value:n},e.children)},o="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},E=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),o=d(a),E=l,N=o["".concat(u,".").concat(E)]||o[E]||b[E]||r;return a?t.createElement(N,i(i({ref:n},m),{},{components:a})):t.createElement(N,i({ref:n},m))}));function N(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=E;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[o]="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}E.displayName="MDXCreateElement"},4571:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(7462),l=(a(7294),a(3905));const r={sidebar_position:2},i=void 0,s={unversionedId:"sql/\u57fa\u672c\u4f7f\u7528",id:"sql/\u57fa\u672c\u4f7f\u7528",title:"\u57fa\u672c\u4f7f\u7528",description:"Create Database (1)",source:"@site/docs/03.sql/2.\u57fa\u672c\u4f7f\u7528.mdx",sourceDirName:"03.sql",slug:"/sql/\u57fa\u672c\u4f7f\u7528",permalink:"/myBlog_docusaurus/docs/sql/\u57fa\u672c\u4f7f\u7528",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"cheat-sheet",permalink:"/myBlog_docusaurus/docs/sql/cheat-sheet"},next:{title:"create_db_and_tables",permalink:"/myBlog_docusaurus/docs/sql/\u7bc4\u4f8b-\u98f2\u6599\u5e97/create_db_and_tables"}},u={},d=[{value:"Create Database (1)",id:"create-database-1",level:2},{value:"Create Table (Part 2)",id:"create-table-part-2",level:2},{value:"Insert Into (3)",id:"insert-into-3",level:2},{value:"Select (4)",id:"select-4",level:2},{value:"Data manipulate and query (5)",id:"data-manipulate-and-query-5",level:2},{value:"Join (6)",id:"join-6",level:2},{value:"Aggregate Functions (7)",id:"aggregate-functions-7",level:2},{value:"Having vs Where (8)",id:"having-vs-where-8",level:2}],m={toc:d},o="wrapper";function b(e){let{components:n,...a}=e;return(0,l.kt)(o,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-database-1"},"Create Database (1)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Drop Database"),(0,l.kt)("li",{parentName:"ul"},"Use Database"),(0,l.kt)("li",{parentName:"ul"},"Create Table (2)"),(0,l.kt)("li",{parentName:"ul"},"Alter Table"),(0,l.kt)("li",{parentName:"ul"},"Drop Table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- KEY WORD \u8acb\u7d71\u4e00\u4f7f\u7528\u5927\u5beb\uff0c\u505a\u5340\u5206\n\nCREATE DATABASE record_company;\n\nUSE record_company;\n/*\n\u4f7f\u7528 USE \u6642\uff0cSQL \u6703\u5c07\u7576\u524d\u7684\u5de5\u4f5c\u968e\u6bb5\u8a2d\u7f6e\u70ba\u9078\u64c7\u7684\u6578\u64da\u5eab\uff0c\u4e26\u4e14\u5728\u63a5\u4e0b\u4f86\u7684\u6240\u6709 SQL \u67e5\u8a62\u4e2d\u90fd\u6703\u5c07\u8a72\u6578\u64da\u5eab\u4f5c\u70ba\u9ed8\u8a8d\u7684\u64cd\u4f5c\u5c0d\u8c61\u3002\n*/\n\nDROP DATABASE record_company;\n\nCREATE TABLE test (\n    test_column INT -- type \u8a18\u5f97\u901a\u4e00\u7528\u5927\u5beb\u505a\u5340\u5206\n);\n\nALTER TABLE test\nADD another_column \nVARCHAR(255); \n-- VARCHAR \u70ba\u53ef\u8b8a\u9577\u5ea6\u7684\u5b57\u4e32\u6578\u64da\u985e\u578b\uff0c\u8207 CHAR \u6216 CHARACTER \u4e0d\u540c\u7684\u662f\uff0cVARCHAR \u5728\u5b58\u5132\u6578\u64da\u6642\u53ea\u6703\u4f54\u7528\u5be6\u969b\u9700\u8981\u7684\u5b58\u5132\u7a7a\u9593\uff0c\u56e0\u6b64\u53ef\u4ee5\u7bc0\u7701\u5b58\u5132\u7a7a\u9593\u3002\n\nDROP TABLE test;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"create-table-part-2"},"Create Table (Part 2)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Band Table"),(0,l.kt)("li",{parentName:"ul"},"Not Null"),(0,l.kt)("li",{parentName:"ul"},"Primary Key/ID/Auto Increment"),(0,l.kt)("li",{parentName:"ul"},"Album Table"),(0,l.kt)("li",{parentName:"ul"},"Foreign Key/Table Relationships")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE bands (\n  id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- UNSIGNED \u975e\u8ca0\u6578\uff0c\u5247\u53ef\u8b93\u6b63\u6578\u7bc4\u570d\u591a\u4e00\u500d\n  name VARCHAR(255) NOT NULL,\n  PRIMARY KEY (id)\n);\n\nCREATE TABLE albums (\n  id INT UNSIGNED NOT NULL AUTO_INCREMENT,\n  name VARCHAR(255) NOT NULL,\n  release_year INT,\n  band_id INT NOT NULL,\n  PRIMARY KEY (id),\n  FOREIGN KEY (band_id) REFERENCES bands(id) -- \u6307\u5b9a\u95dc\u806f\n);\n\nSHOW TABLES; -- \u986f\u793a\u7576\u524d\u8cc7\u6599\u5eab\u6240\u6709\u7684 tables\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"insert-into-3"},"Insert Into (3)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO bands (name) -- INSERT INTO <table name> (<column name>) VALUE (<data>)\nVALUE ('Iron Maiden');\n\nINSERT INTO bands (name)\nVALUE ('Deuce'),('Avenged Sevenfold'),('Ankor');\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"select-4"},"Select (4)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Limit"),(0,l.kt)("li",{parentName:"ul"},"Specific Columns"),(0,l.kt)("li",{parentName:"ul"},"As/Alias Columns"),(0,l.kt)("li",{parentName:"ul"},"Order By")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM bands; -- * \u70ba\u5168\u90e8\u7684 column\n\nSELECT * FROM bands LIMIT 2;\n\nSELECT name FROM bands LIMIT 2; -- \u6307\u5b9a column \uff0c \u4e0d\u8981\u4e00\u6b21\u5168\u62ff\n\nSELECT id AS 'ID',name AS 'BAND_NAME' \nFROM bands; -- \u4f7f\u7528 AS \u7d66\u5225\u540d\n\nSELECT * FROM bands ORDER BY name ASC;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"data-manipulate-and-query-5"},"Data manipulate and query (5)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Distinct Select"),(0,l.kt)("li",{parentName:"ul"},"Update (SET)"),(0,l.kt)("li",{parentName:"ul"},"Where"),(0,l.kt)("li",{parentName:"ul"},"Less Than (\u908f\u8f2f\u904b\u7b97\u5b50 \u6bd4\u5927\u5c0f)\n",(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/zh-tw/sql/t-sql/language-elements/operators-transact-sql?view=sql-server-ver16"},"\u904b\u7b97\u5b50\u53c3\u8003\u8cc7\u6599")),(0,l.kt)("li",{parentName:"ul"},"Like String Filter (\u5b57\u4e32\u6bd4\u5c0d)"),(0,l.kt)("li",{parentName:"ul"},"Or"),(0,l.kt)("li",{parentName:"ul"},"And "),(0,l.kt)("li",{parentName:"ul"},"Between "),(0,l.kt)("li",{parentName:"ul"},"Is Null ( or and between is \u7528\u4f86\u589e\u52a0 where \u7be9\u9078\u7684\u5f48\u6027)"),(0,l.kt)("li",{parentName:"ul"},"Delete")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO albums (name,release_year,band_id)\nVALUE ('The Number of the Beats',1985,1),\n      ('Power Slave',1984,1 ),\n      ('Nightmare',2018,2),\n      ('Nightmare',2010,3),\n      ('Test Album',Null,3);\n\n--\nSELECT * FROM albums;\n\n\n--\nSELECT DISTINCT name FROM albums;\n\n\n--\nUPDATE albums\nSET release_year = 1982\nWHERE id = 1;\n\n--\nSELECT * FROM albums\nWHERE release_year <  2000;\n\n--\nSELECT * FROM albums\nWHERE name like '%er%'; -- % \u8868\u793a any ( \u7a7a\u767d\u4e5f\u662f any )\n\n--\nSELECT * FROM albums\nWHERE name like '%er%' OR band_id=2;\n\nSELECT * FROM albums\nWHERE release_year = 1984 AND band_id = 1;\n\nSELECT * FROM albums\nWHERE release_year BETWEEN 2000 AND 2018;\n\nSELECT * FROM albums\nWHERE release_year IS NULL; -- \u6709\u591a\u7a2e\u5224\u65b7\u53ef\u7528 (IS FALSE , IS TRUE , IS NOT NULL)\n\n-- delete\nDELETE from albums\nWHERE release_year IS NULL; \n\nDELETE from albums\nWHERE name LIKE 'test album';\n/*\nError Code: 1175. \nYou are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  \nTo disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.\n\u4ee5\u4e0a\u5169\u7a2e\u65b9\u5f0f\u90fd\u4e0d\u884c\uff0c\u56e0\u70ba\u4e0d\u662f\u6307\u5b9a KEY column\n*/\nDELETE from albums\nWHERE id = 5; -- id \u70ba\u9019\u500b table \u7684 KEY column , \u9019\u6a23\u624d\u80fd\u5728 safe mode \u4e2d\u522a\u9664\u8cc7\u6599\uff0c\u78ba\u4fdd\u4e0d\u6703\u6709\u8cc7\u6599\u88ab\u8aa4\u522a\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"join-6"},"Join (6)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Inner/Left/Right Comparison")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--\nSELECT * FROM bands\nJOIN albums ON bands.id = albums.band_id;\n\nSELECT * FROM bands\nINNER JOIN albums ON bands.id = albums.band_id;\n\n/*\n| id | name              | id | name                    | release_year | band_id |\n|----|-------------------|----|-------------------------|--------------|---------|\n| 1  | Iron Maiden       | 1  | The Number of the Beats | 1982         | 1       |\n| 1  | Iron Maiden       | 2  | Power Slave             | 1984         | 1       |\n| 2  | Deuce             | 3  | Nightmare               | 2018         | 2       |\n| 3  | Avenged Sevenfold | 4  | Nightmare               | 2010         | 3       |\n| 3  | Avenged Sevenfold | 5  | Test Album              | NULL         | 3       |\n*/\n\nSELECT * FROM bands\nLEFT JOIN albums ON bands.id = albums.band_id;\n/*\n| id | name              | id   | name                    | release_year | band_id |\n|----|-------------------|------|-------------------------|--------------|---------|\n| 1  | Iron Maiden       | 1    | The Number of the Beats | 1982         | 1       |\n| 1  | Iron Maiden       | 2    | Power Slave             | 1984         | 1       |\n| 2  | Deuce             | 3    | Nightmare               | 2018         | 2       |\n| 3  | Avenged Sevenfold | 4    | Nightmare               | 2010         | 3       |\n| 3  | Avenged Sevenfold | 6    | Test Album              | NULL         | 3       |\n| 4  | Ankor             | NULL | NULL                    | NULL         | NULL    |  <-- \u4e0d\u4e00\u6a23\n*/\n\nSELECT * FROM albums\nRIGHT JOIN bands ON bands.id = albums.band_id;\n/*\n| id   | name                    | release_year | band_id | id | name              |\n|------|-------------------------|--------------|---------|----|-------------------|\n| 1    | The Number of the Beats | 1982         | 1       | 1  | Iron Maiden       |\n| 2    | Power Slave             | 1984         | 1       | 1  | Iron Maiden       |\n| 3    | Nightmare               | 2018         | 2       | 2  | Deuce             |\n| 4    | Nightmare               | 2010         | 3       | 3  | Avenged Sevenfold |\n| 6    | Test Album              | NULL         | 3       | 3  | Avenged Sevenfold |\n| NULL | NULL                    | NULL         | NULL    | 4  | Ankor             |  <-- \u4e0d\u4e00\u6a23\n*/\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"aggregate-functions-7"},"Aggregate Functions (7)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Group By"),(0,l.kt)("li",{parentName:"ul"},"Combined With Join"),(0,l.kt)("li",{parentName:"ul"},"Alias Tables")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--\nSELECT AVG(release_year) FROM albums;\n\n\n--\nSELECT SUM(release_year) FROM albums;\n\n\n--\nSELECT band_id , COUNT(band_id) FROM albums\nGROUP BY band_id;\n\n--\nSELECT b.name AS band_name, COUNT(a.band_id) AS num_albums \nFROM bands AS b\nLEFT JOIN albums AS a ON b.id = a.band_id\nGROUP BY b.id;\n/*\n| band_name         | num_albums |\n|-------------------|------------|\n| Iron Maiden       | 2          |\n| Deuce             | 1          |\n| Avenged Sevenfold | 2          |\n| Ankor             | 0          |\n*/\n\n\n\n-- \u7df4\u7fd2\u4e00 : \u986f\u793a\u6bcf\u500b band \u7684 albums \nSELECT * , COUNT(band_id) AS albums_numbers FROM bands\nLEFT JOIN albums ON albums.band_id = bands.id\nGROUP BY bands.id;\n\n/*\n| id | name              | id   | name                    | release_year | band_id | numbers_albums |\n|----|-------------------|------|-------------------------|--------------|---------|----------------|\n| 1  | Iron Maiden       | 1    | The Number of the Beats | 1982         | 1       | 2              |\n| 2  | Deuce             | 3    | Nightmare               | 2018         | 2       | 1              |\n| 3  | Avenged Sevenfold | 4    | Nightmare               | 2010         | 3       | 2              |\n| 4  | Ankor             | NULL | NULL                    | NULL         | NULL    | 0              |\n*/\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"having-vs-where-8"},"Having vs Where (8)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--\nSELECT b.name AS band_name, COUNT(a.band_id) AS num_albums \nFROM bands AS b\nLEFT JOIN albums AS a ON b.id = a.band_id\nWHERE num_albums = 1\nGROUP BY b.id;\n/*\nError Code: 1054. Unknown column 'num_albums' in 'where clause'\n\u539f\u56e0 : WHERE \u6703\u5728 GROUP BY \u4e4b\u524d\u57f7\u884c , \u800c aggregate \u6703\u5728 GROUP BY \u4e4b\u5f8c\u624d\u57f7\u884c\nWHERE -> GROUP BY -> aggregate\n*/\n\n--\nSELECT b.name AS band_name, COUNT(a.band_id) AS num_albums \nFROM bands AS b\nLEFT JOIN albums AS a ON b.id = a.band_id\nGROUP BY b.id\nHAVING num_albums = 2;\n/*\n\u8a18\u5f97 HAVING \u8a9e\u6cd5\u7684\u4f4d\u7f6e \u8981\u653e\u5728 GROUP BY \u7684\u5f8c\u9762\n| band_name         | num_albums |\n|-------------------|------------|\n| Iron Maiden       | 2          |\n| Avenged Sevenfold | 2          |\n*/\n\n--\nSELECT b.name AS band_name, COUNT(a.band_id) AS num_albums \nFROM bands AS b\nLEFT JOIN albums AS a ON b.id = a.band_id\nWHERE b.name LIKE '%Iron%'\nGROUP BY b.id\nHAVING num_albums = 2;\n/*\n\u8a18\u5f97 WHERE \u8981\u653e\u5728 GROUP BY \u7684\u524d\u9762 ,  HAVING \u8981\u653e\u5728 GROUP BY \u7684\u5f8c\u9762 , \n| band_name         | num_albums |\n|-------------------|------------|\n| Iron Maiden       | 2          |\n*/\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"\u7b46\u8a18 : \n\n\u589e\u522a\u67e5\u6539\nINSERT INTO , DELETE , SELECT & AS, UPDATE & SET\n\ntable : bands\n| id  | name                    |\n| --- | ----------------------- |\n| 1   | Iron Maiden             |\n| 2   | Deuce                   |\n| 3   | Avenged Sevenfold       |\n| 4   | Ankor                   |\n\ntable : albums\n| id  | album Name              | release_year | band_id               |\n| --- | ----------------------- | ---------    | --------------------- |\n| 1   | The Number of the Beats | 1982         | 1                     |\n| 2   | Power Slave             | 1984         | 1                     |\n| 3   | Nightmare               | 2018         | 2                     |\n| 4   | Nightmare               | 2010         | 3                     |\n| 5   | test album              | null         | 3                     |\n\n")))}b.isMDXComponent=!0}}]);