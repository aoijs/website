"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74513],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>P,frontMatter:()=>b,metadata:()=>y,toc:()=>j});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$getObjectProperty",description:"$getObjectProperty will return a object property of a given object.",id:"getObjectProperty"},f=void 0,y={unversionedId:"functions/misc-related/getObjectProperty",id:"version-6.4.0/functions/misc-related/getObjectProperty",title:"$getObjectProperty",description:"$getObjectProperty will return a object property of a given object.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/getObjectProperty.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/getObjectProperty",permalink:"/es/docs/functions/misc-related/getObjectProperty",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$getObjectProperty",description:"$getObjectProperty will return a object property of a given object.",id:"getObjectProperty"},sidebar:"docs",previous:{title:"$getObject",permalink:"/es/docs/functions/misc-related/getObject"},next:{title:"$hour",permalink:"/es/docs/functions/misc-related/hour"}},g={},j=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:j},v="wrapper";function P(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(v,d(u(u({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$getObjectProperty")," will return a object property of a given object."),(0,n.kt)("h2",u({},{id:"modo-de-uso"}),"Modo de uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getObjectProperty[name]\n")),(0,n.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"nombre"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Name of the object property."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadera")))),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,'This will return the object property of "hello" created in ',(0,n.kt)("inlineCode",{parentName:"p"},"$createObject"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "getObjectProperty",\n    code: `\n    $getObjectProperty[hello]\n    $createObject[{"hello": "bye"}]\n    `\n});\n')))}P.isMDXComponent=!0}}]);