"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[10042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),s=r,f=d["".concat(p,".").concat(s)]||d[s]||u[s]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),s=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$getApplicationCommandID",description:"$getApplicationCommandID will return the ID of a given application command.",id:"getApplicationCommandID"},g=void 0,y={unversionedId:"functions/misc-related/getApplicationCommandID",id:"version-6.4.0/functions/misc-related/getApplicationCommandID",title:"$getApplicationCommandID",description:"$getApplicationCommandID will return the ID of a given application command.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/getApplicationCommandID.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/getApplicationCommandID",permalink:"/uk/docs/functions/misc-related/getApplicationCommandID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$getApplicationCommandID",description:"$getApplicationCommandID will return the ID of a given application command.",id:"getApplicationCommandID"},sidebar:"docs",previous:{title:"$forEachUser",permalink:"/uk/docs/functions/misc-related/forEachUser"},next:{title:"$getApplicationCommandOptions",permalink:"/uk/docs/functions/misc-related/getApplicationCommandOptions"}},b={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:k},O="wrapper";function h(e){var t=e,{components:n}=t,r=s(t,["components"]);return(0,a.kt)(O,u(d(d({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$getApplicationCommandID")," will return the ID of a given application command."),(0,a.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$getApplicationCommandID[name;type?]\n")),(0,a.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Name of the application command."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0442\u0438\u043f?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Application command type. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"global")," (default) ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"guildID")," (specific guild ID)"),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,a.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("p",null,'This will return the ID of an application command called "example", (if any):'),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "getApplicationCommandID",\n    code: `\n  $getApplicationCommandID[example;global]\n  `\n});\n')))}h.isMDXComponent=!0}}]);