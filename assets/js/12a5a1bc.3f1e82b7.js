"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Serverinfo command",description:"Requires GuildPresences in intents",authors:{name:"@arkwell",title:"Member - 405070001356275712",userid:"405070001356275712",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,l={permalink:"/wikis/posts/405070001356275712/6bdeo",source:"@site/forums/posts/405070001356275712/6bdeo.md",title:"Serverinfo command",description:"Requires GuildPresences in intents",date:"2023-06-25T06:46:32.000Z",formattedDate:"June 25, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@arkwell",title:"Member - 405070001356275712",userid:"405070001356275712",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif",imageURL:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif"}],frontMatter:{title:"Serverinfo command",description:"Requires GuildPresences in intents",authors:{name:"@arkwell",title:"Member - 405070001356275712",userid:"405070001356275712",url:"https://discord.com/users/405070001356275712",image_url:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif",imageURL:"https://cdn.discordapp.com/avatars/405070001356275712/a_dc76e5bb817c9ec73319c6fbfb3ccae7.gif"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"8ball command",permalink:"/wikis/posts/405070001356275712/2pf8fb"},nextItem:{title:"Botinfo command",permalink:"/wikis/posts/405070001356275712/sr2wtw"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "serverinfo",\n    code: `\n$addField[Channels;Total: $channelCount[$guildID]\nText: $channelCount[$guildID;Text]\nVoice: $channelCount[$guildID;Voice]\nCategory: $channelCount[$guildID;Category]\nNews: $channelCount[$guildID;Announcement]\nThreads: $channelCount[$guildID;PublicThread]]\n$addField[Emojis;Total: $emojiCount[$guildID]]\n$addField[Roles;$roleCount[$guildID;true]]\n$addField[Members;Total: $membersCount[$guildID]\nHumans: $membersCount[$guildID;all;false]\nBots: $sub[$membersCount[$guildID;all;true];$membersCount[$guildID;all;false]]\nOnline: $membersCount[$guildID;online;true]]\n$addField[Boosts;$guildBoostCount[$guildID] (Level $guildBoostLevel[$guildID])]\n$addField[Creation;$creationDate[$guildID;time]]\n$addField[Guild ID;$guildID]\n$addField[Owner;<@$ownerID[$guildID]>]\n$title[Server Information - $guildName[$guildID]]\n  `\n}]; \n')),(0,a.kt)("p",null,"Requires GuildPresences in intents"))}p.isMDXComponent=!0}}]);