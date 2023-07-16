"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55174],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return r?n.createElement(f,o(o({ref:e},d),{},{components:r})):n.createElement(f,o({ref:e},d))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89014:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>h,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&d(t,r,e[r]);if(i)for(var r of i(e))u.call(e,r)&&d(t,r,e[r]);return t},c=(t,e)=>l(t,o(e)),m=(t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&i)for(var n of i(t))e.indexOf(n)<0&&u.call(t,n)&&(r[n]=t[n]);return r};const f={title:"$httpRequest",description:"$httpRequest either posts to or retrieves data from an API.",id:"httpRequest"},k=void 0,g={unversionedId:"functions/util-related/httpRequest",id:"version-6.4.0/functions/util-related/httpRequest",title:"$httpRequest",description:"$httpRequest either posts to or retrieves data from an API.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/httpRequest.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/httpRequest",permalink:"/uk/docs/functions/util-related/httpRequest",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$httpRequest",description:"$httpRequest either posts to or retrieves data from an API.",id:"httpRequest"},sidebar:"docs",previous:{title:"$hasRoles",permalink:"/uk/docs/functions/util-related/hasRoles"},next:{title:"$indexOf",permalink:"/uk/docs/functions/util-related/indexOf"}},h={},y=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],b={toc:y},N="wrapper";function v(t){var e=t,{components:r}=e,a=m(e,["components"]);return(0,n.kt)(N,c(s(s({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$httpRequest")," either posts to or retrieves data from an API."),(0,n.kt)("h2",s({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$httpRequest[URL;method;body?;property?;error?;...header?]\n")),(0,n.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"URL"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"URL you want to get/send data to/from."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"method"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Method ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"GET")," (default) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"POST")," ",(0,n.kt)("br",null)," 3. ",(0,n.kt)("strong",{parentName:"td"},"PUT")),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"body?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Content."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"property?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Property to return (get method)."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"error?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Error to return when request fails."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"...header"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Header."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,n.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,"This will return a random dog fact using the ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "httpRequest",\n    code: `\n    $httpRequest[https://some-random-api.ml/facts/dog;GET;;fact;Something went wrong.]\n    `\n});\n')))}v.isMDXComponent=!0}}]);