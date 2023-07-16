"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94885],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17835:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&l(e,t,r[t]);if(s)for(var t of s(r))u.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>i(e,a(r)),m=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$resumeSong",description:"Resume the song from being paused"},g=void 0,y={unversionedId:"functions/resumesong",id:"version-5.5.5/functions/resumesong",title:"$resumeSong",description:"Resume the song from being paused",source:"@site/versioned_docs/version-5.5.5/functions/resumesong.md",sourceDirName:"functions",slug:"/functions/resumesong",permalink:"/hi/docs/5.5.5/functions/resumesong",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$resumeSong",description:"Resume the song from being paused"},sidebar:"docs",previous:{title:"$resolveEmojiID",permalink:"/hi/docs/5.5.5/functions/resolveemojiid"},next:{title:"$role",permalink:"/hi/docs/5.5.5/functions/role"}},b={},v=[],O={toc:v},j="wrapper";function h(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(j,f(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function resumes a song after being paused"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname:"resume",\ncode: `$resumeSong`\n})\n')))}h.isMDXComponent=!0}}]);