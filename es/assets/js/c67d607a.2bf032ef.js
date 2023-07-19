"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(r),u=a,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))m.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$maxRam",description:"$maxRam devolver\xe1 la cantidad m\xe1xima de Ram del bot.",id:"maxRam"},v=void 0,b={unversionedId:"functions/info-related/maxRam",id:"version-6.4.0/functions/info-related/maxRam",title:"$maxRam",description:"$maxRam devolver\xe1 la cantidad m\xe1xima de Ram del bot.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/maxRam.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/maxRam",permalink:"/es/docs/functions/info-related/maxRam",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689803006,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$maxRam",description:"$maxRam devolver\xe1 la cantidad m\xe1xima de Ram del bot.",id:"maxRam"},sidebar:"docs",previous:{title:"$lowestRole",permalink:"/es/docs/functions/info-related/lowestRole"},next:{title:"$maximumMembers",permalink:"/es/docs/functions/info-related/maximumMembers"}},y={},O=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],x={toc:O},g="wrapper";function j(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(g,d(p(p({},x),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$maxRam")," devolver\xe1 la cantidad m\xe1xima de Ram del bot."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$maxRam\n")),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 a su bot la cantidad m\xe1xima de Ram disponible:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'maxRam',\n    code: `\n  $maxRam\n  `\n});\n")))}j.isMDXComponent=!0}}]);