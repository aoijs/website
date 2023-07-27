"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46103,27918],{17119:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(67294),s=a(30143);const n=()=>i.createElement(s.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},53989:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(67294),s=a(99861);const n={"cookies-banner":"cookies-banner_YsRc",container:"container_H2za",avatar:"avatar_qL_g",content:"content_j2XQ",tagContainer:"tagContainer_hVSL",tag:"tag_Utpt",tagCircle:"tagCircle_gDjY"};var o=a(55692);function r(){const{colorMode:e}=(0,o.I)(),[t,a]=(0,i.useState)(!1);(0,i.useEffect)((()=>{r()||a(!0)}),[]);const r=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}};return i.createElement("div",null,t&&i.createElement("div",{className:n["cookies-banner"]},i.createElement("p",null,"You need to allow cookies to comment on Wikis!")),i.createElement(s.Z,{repo:"aoijs/website",repoId:"MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY=",category:"General",categoryId:"DIC_kwDOFa8DhM4CXVEw",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0}))}},42060:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(67294),s=a(86010),n=a(11128);const o={tag:"tag_U0uN",booster:"booster_MDO7",staff:"staff_nctV",mod:"mod_BJV7",creator:"creator_hdXK",contributor:"contributor_Fooe"};var r=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))m.call(t,a)&&d(e,a,t[a]);return e};function p(e){return e.href?i.createElement(n.Z,u({},e)):i.createElement(i.Fragment,null,e.children)}function g({author:e,className:t}){const{name:a,title:n,url:r,imageURL:l,email:c}=e,m=r||c&&`mailto:${c}`||void 0,d=a.toLowerCase(),u=["@leref"].map((e=>e.toLowerCase())).includes(d),g=["@dodogames","@supremesupreme","@faf4a","@usersatoshi"].map((e=>e.toLowerCase())).includes(d),h=["@dodogames","@supremesupreme","@faf4a","@usersatoshi","@ahoemi","@snowytealatte","@wansie","@jollyjolli","@manu_1025"].map((e=>e.toLowerCase())).includes(d),b=["@faf4a","@dodogames"].map((e=>e.toLowerCase())).includes(d),f=["@.kuray.","@Alien Abd","@Zeke \u2661","@artemcurious","@creitingameplays","@eduard.irm","@kzzzakz","@leref","@neussdev","@valentineu0","@wansie"].map((e=>e.toLowerCase())).includes(d);return i.createElement("div",{className:(0,s.Z)("avatar margin-bottom--sm",t)},l&&i.createElement(p,{href:m,className:"avatar__photo-link"},i.createElement("img",{className:"avatar__photo",src:l,alt:a})),a&&i.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},i.createElement("div",{className:"avatar__name"},i.createElement(p,{href:m,itemProp:"url"},i.createElement("span",{itemProp:"name"},a)),b&&i.createElement("span",{className:(0,s.Z)(o.tag,o.contributor)},"Contributor"),f&&i.createElement("span",{className:(0,s.Z)(o.tag,o.booster)},"Server Booster"),h&&i.createElement("span",{className:(0,s.Z)(o.tag,o.staff)},"Staff"),g&&i.createElement("span",{className:(0,s.Z)(o.tag,o.mod)},"Moderator"),u&&i.createElement("span",{className:(0,s.Z)(o.tag,o.creator)},"Creator")),n&&i.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}},48365:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(67294),s=a(86010),n=a(14699),o=a(41599),r=a(36081);const l={container:"container_iJTo"};function c({readingTime:e}){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return i.createElement(i.Fragment,null,t(e))}function m(){return i.createElement(i.Fragment,null," \xb7 ")}function d({className:e}){const{metadata:t}=(0,r.C)(),{date:a,formattedDate:n,readingTime:o}=t;return i.createElement("div",{className:(0,s.Z)(l.container,"margin-vert--md",e)},void 0!==o&&i.createElement(i.Fragment,null,i.createElement(m,null),i.createElement(c,{readingTime:o})))}},59227:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(67294),s=a(36081),n=a(47569),o=a(53989),r=a(35710),l=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&u(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&u(e,a,t[a]);return e};function g(e){const{metadata:t,isBlogPostPage:a}=(0,s.C)(),{frontMatter:l,slug:c,title:m}=((0,r.Z)(),t),{enableComments:d}=l;return i.createElement(i.Fragment,null,i.createElement(n.Z,p({},e)),d&&a&&i.createElement(o.Z,null))}},67853:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(67294),s=a(17119);function n(e){return i.createElement("div",null,i.createElement(s.Z,null))}},77886:(e,t,a)=>{a.d(t,{Z:()=>E});var i=a(67294),s=a(13044),n=a(86010),o=a(11128),r=a(14699);const l={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",newItem:"newItem_b9o7",newTag:"newTag_fGI0",activeButton:"activeButton_HxF9",searchContainer:"searchContainer_GE6j",searchInput:"searchInput_nz1m",mobileSearchContainer:"mobileSearchContainer_i5LO",mobileSearchInput:"mobileSearchInput_ULu5",searchIcon:"searchIcon_X7sx",searchClose:"searchClose_K_EJ"};function c({sidebar:e}){const t=["/wikis/submit","/wikis/guidelines","/wikis/tags","/wikis/showcase","es/wikis/submit","es/wikis/guidelines","es/wikis/tags","es/wikis/showcase","fr/wikis/submit","fr/wikis/guidelines","fr/wikis/tags","fr/wikis/showcase","ar/wikis/submit","ar/wikis/guidelines","ar/wikis/tags","ar/wikis/showcase","ru/wikis/submit","ru/wikis/guidelines","ru/wikis/tags","ru/wikis/showcase","uk/wikis/submit","uk/wikis/guidelines","uk/wikis/tags","uk/wikis/showcase","tr/wikis/submit","tr/wikis/guidelines","tr/wikis/tags","tr/wikis/showcase","de/wikis/submit","de/wikis/guidelines","de/wikis/tags","de/wikis/showcase"],[a,s]=(0,i.useState)(!1),[c,m]=(0,i.useState)("");(0,i.useEffect)((()=>{const e=d("sortingState");e&&s(JSON.parse(e))}),[]),(0,i.useEffect)((()=>{p()&&u("sortingState",JSON.stringify(a))}),[a]);const d=e=>p()?localStorage.getItem(e):null,u=(e,t)=>{p()&&localStorage.setItem(e,t)},p=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}},g=e.items.filter((e=>!t.includes(e.permalink))).filter((e=>e.title.toLowerCase().includes(c.toLowerCase()))).sort(((e,t)=>{if(a)return e.title.localeCompare(t.title)}));return i.createElement("aside",{className:"col col--3"},i.createElement("nav",{className:(0,n.Z)(l.sidebar,"thin-scrollbar"),"aria-label":(0,r.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},i.createElement("div",{className:(0,n.Z)(l.sidebarItemTitle,"margin-bottom--md")},i.createElement("span",null,"Introduction")),i.createElement("ul",{className:(0,n.Z)(l.sidebarItemList,"clean-list")},i.createElement("li",{key:"/wikis/guidelines",className:l.sidebarItem},i.createElement(o.Z,{isNavLink:!0,to:"/wikis/guidelines",className:l.sidebarItemLink,activeClassName:l.sidebarItemLinkActive},"Wiki Guidelines")),i.createElement("li",{key:"/wikis/submit",className:l.sidebarItem},i.createElement(o.Z,{isNavLink:!0,to:"/wikis/submit",className:l.sidebarItemLink,activeClassName:l.sidebarItemLinkActive},"Submit Wiki")),i.createElement("li",{key:"/wikis/tags",className:l.sidebarItem},i.createElement(o.Z,{isNavLink:!0,to:"/wikis/tags",className:l.sidebarItemLink,activeClassName:l.sidebarItemLinkActive},"Tags")),i.createElement("li",{key:"/wikis/showcase",className:l.sidebarItem},i.createElement(o.Z,{isNavLink:!0,to:"/wikis/showcase",className:l.sidebarItemLink,activeClassName:l.sidebarItemLinkActive},"Showcase"))),i.createElement("div",{className:(0,n.Z)(l.sidebarItemTitle,"margin-bottom--md")},"Wikis",i.createElement("button",{className:(0,n.Z)(l.activeButton,{[l.activeButton]:a}),onClick:()=>{s((e=>!e))}},a?"A-Z":"Newest First")),i.createElement("div",{className:l.searchContainer},i.createElement("input",{type:"text",className:l.searchInput,placeholder:"Search Wikis...",value:c,onChange:e=>{m(e.target.value)}})),i.createElement("ul",{className:(0,n.Z)(l.sidebarItemList,"clean-list")},g.map(((e,t)=>{return i.createElement("li",{key:e.permalink,className:l.sidebarItem},i.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:l.sidebarItemLink,activeClassName:l.sidebarItemLinkActive},(a=e.title).charAt(0).toUpperCase()+a.slice(1)));var a})))))}var m=a(56981),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&f(e,a,t[a]);if(g)for(var a of g(t))b.call(t,a)&&f(e,a,t[a]);return e},v=(e,t)=>u(e,p(t));function k({sidebar:e,onSearch:t}){const[a,s]=(0,i.useState)(""),n=["/wikis/submit","/wikis/guidelines","/wikis/tags","es/wikis/submit","es/wikis/guidelines","es/wikis/tags","fr/wikis/submit","fr/wikis/guidelines","fr/wikis/tags","ar/wikis/submit","ar/wikis/guidelines","ar/wikis/tags","ru/wikis/submit","ru/wikis/guidelines","ru/wikis/tags","uk/wikis/submit","uk/wikis/guidelines","uk/wikis/tags","tr/wikis/submit","tr/wikis/guidelines","tr/wikis/tags","de/wikis/submit","de/wikis/guidelines","de/wikis/tags"],r=null==e?void 0:e.items.filter((e=>!n.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title))),[c,m]=(0,i.useState)(r);return i.createElement("ul",{className:"menu__list"},i.createElement("div",{className:"menu__title"},"Introduction"),i.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},i.createElement(o.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),i.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},i.createElement(o.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),i.createElement("li",{key:"/wikis/tags",className:"menu__list-item"},i.createElement(o.Z,{isNavLink:!0,to:"/wikis/tags",className:"menu__link",activeClassName:"menu__link--active"},"Tags")),i.createElement("div",{className:"menu__title",style:{marginTop:"25px",marginBottom:"15px"}},"Wikis"),i.createElement("div",{className:l.searchContainer},i.createElement("input",{type:"text",className:l.searchInput,placeholder:"Search Wikis...",value:a,onChange:e=>{const t=e.target.value.toLowerCase(),a=r.filter((e=>e.title.toLowerCase().includes(t)));m(a),s(t)}})),c.map((e=>{return i.createElement("li",{key:e.permalink,className:"menu__list-item"},i.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},(t=e.title).charAt(0).toUpperCase()+t.slice(1)));var t})))}function y({sidebar:e,onSearch:t}){const a=["/wikis/submit","/wikis/guidelines","/wikis/tags"],s=null==e?void 0:e.items.filter((e=>!a.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title)));return i.createElement(m.Zo,{component:k,props:{sidebar:v(w({},e),{items:s.map((e=>{return v(w({},e),{title:(t=e.title,t.charAt(0).toUpperCase()+t.slice(1))});var t}))})}})}function E({sidebar:e}){const t=(0,s.i)();return(null==e?void 0:e.items.length)?"mobile"===t?i.createElement(y,{sidebar:e}):i.createElement(c,{sidebar:e}):null}},6758:(e,t,a)=>{a.d(t,{Z:()=>$});var i=a(63997),s=a(67294);const n=({children:e,color:t,radius:a,padding:i})=>s.createElement("span",{style:{backgroundColor:t,borderRadius:a||"2px",color:"#fff",padding:i||"0.2rem"}},e);var o=a(54023),r=a(49247),l=a(17119),c=a(53989),m=a(17891),d=a(86010),u=a(25365),p=Object.defineProperty,g=Object.defineProperties,h=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&v(e,a,t[a]);if(b)for(var a of b(t))w.call(t,a)&&v(e,a,t[a]);return e},y=(e,t)=>g(e,h(t));const E=({name:e,id:t,value:a,onChange:i,type:n,error:o,charCount:r})=>{const l={width:"100%",padding:"8px",borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.1)",border:"1px solid "+(o?"red":"#3f51b5"),transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"},c=e=>{i(e)};let m=null;switch(n){case"textarea-description":m=s.createElement("div",null,s.createElement("textarea",{name:e,id:t,value:a,onChange:c,style:y(k({},l),{minHeight:"155px",resize:"none"}),required:!0}),s.createElement("div",{style:{fontSize:"12px",color:r>=500?"red":"#3f51b5"}},void 0===r?"0":r,"/",500));break;case"textarea-code":m=s.createElement("textarea",{name:e,id:t,value:a,onChange:c,style:y(k({},l),{minHeight:"155px",resize:"none"}),required:!0});break;case"number":const n=t=>{const{value:a}=t.target,s=a.replace(/[^0-9]/g,"");s.length>20||i({target:{name:e,value:s}})};m=s.createElement("div",{style:{position:"relative"}},s.createElement("input",{type:"text",name:e,id:t,value:a,onChange:n,style:l,inputMode:"numeric",pattern:"[0-9]*",required:!0}));break;case"small":m=s.createElement("input",{type:"text",name:e,id:t,value:a,onChange:c,style:y(k({},l),{width:"50%",fontSize:"12px"}),required:!0});break;default:m=s.createElement("div",null,s.createElement("input",{type:"text",name:e,id:t,value:a,onChange:c,style:y(k({},l),{resize:"none"}),required:!0}),s.createElement("div",{style:{fontSize:"12px",color:r>=50?"red":"#3f51b5",marginTop:"5px"}},void 0===r?"0":r,"/",50))}return s.createElement("div",null,m)};var _=a(99578),j=a(11128),C=a(42060),I=Object.defineProperty,x=Object.defineProperties,N=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,T=(e,t,a)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,L=(e,t)=>{for(var a in t||(t={}))O.call(t,a)&&T(e,a,t[a]);if(S)for(var a of S(t))Z.call(t,a)&&T(e,a,t[a]);return e},A=(e,t)=>x(e,N(t));const P=()=>{const[e,t]=(0,s.useState)(0),[a,i]=(0,s.useState)(0),[n,o]=(0,s.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[r,l]=(0,s.useState)({title:!1,discordUID:!1,description:!1,code:!1,tags:!1}),{title:c,description:m,discordUID:p,code:g,tags:h,isUIDValid:b}=n,[f,w]=(0,s.useState)({avatar:`https://cdn.discordapp.com/embed/avatars/${Math.floor(5*Math.random())}.png`,username:"Guest User",id:""}),v=async e=>{const{name:a,value:i}=e.target;let s=i;if("title"===a)s=i.replace(/[^a-zA-Z0-9 ]/g,""),t((e=>A(L({},e),{title:i.length}))),s.length>49&&(s=s.substring(0,50));else if("description"===a)t((e=>A(L({},e),{description:i.length}))),i.length>=500&&(s=i.substring(0,499));else if("discordUID"===a&&(o((e=>A(L({},e),{isUIDValid:!0}))),i.length>=17)){const{avatar:e,username:t,bot:a,id:s}=await k(i);void 0!==a&&o((e=>A(L({},e),{isUIDValid:!1}))),w((a=>A(L({},a),{avatar:e,username:t,id:"- "+s})))}o((e=>A(L({},e),{[a]:s})))},k=async e=>{const t=Math.floor(5*Math.random());try{const a=await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vdWluZm8v")+e+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw==")),i=await a.json();return i&&i.avatar?{bot:i.bot,avatar:i.avatar,username:i.username,id:i.id}:{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}catch(a){return{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}},y=async e=>{e.preventDefault();const t=Date.now();if(t-a<15e3)return void alert("Don't spam the submit button!");i(t);const s={title:!1,discordUID:!1,description:!1,code:!1};["title","discordUID","description","code"].forEach((e=>{""===n[e].trim()&&(s[e]=!0)})),0===n.tags.length&&(s.tags=!0);const{avatar:o,username:r,bot:d}=await k(p);if("Guest User"===r&&(s.discordUID=!0),void 0!==d&&(s.discordUID=!0),l(s),Object.values(s).some((e=>!0===e)))return;const u=Math.random().toString(36).substring(7),b=`${p}/${u}.md`,f=`---\ntitle: "${c}"\ndescription: "${m}"\nauthors:\n  name: "@${r}"\n  title: Member - ${p}\n  userid: "${p}"\n  url: https://discord.com/users/${p}\n  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/${p}.png\ntags: ${JSON.stringify(h)}\nhide_table_of_contents: true\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n\n${g}`;try{async function v(e){try{(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vYXZhdGFycy8=")+e+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw=="))).ok||await alert("Something went wrong while handling your request. (Try resubmitting later again, or notify aoi.js staff about this if it occurs again)")}catch(t){return void await alert("Something went wrong while handling your request. (Failed to upload your avatar, you can savely ignore this error)")}}if(!(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi")+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw=="),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({commitMessage:`New Wiki created by: ${r}`,content:f,fileName:b})})).ok)return void await alert("Something went wrong while handling your request.");await v(p),alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}catch(w){return}};return s.createElement("form",{onSubmit:y},s.createElement("br",null),s.createElement("br",null),s.createElement("h3",null,"Title of Wiki",s.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short and fitting title for your Wiki)")),s.createElement(E,{name:"title",id:"title",value:c,onChange:v,type:"text",placeholder:"Title",required:!0,pattern:"[a-zA-Z0-9]*",error:r.title,charCount:void 0===e.title?"0":e.title}),s.createElement("br",null),s.createElement("h3",null,"Description",s.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short description about the purpose of your Wiki, will NOT be displayed to the user on the website)")),s.createElement(E,{name:"description",id:"description",value:m,onChange:v,type:"textarea-description",placeholder:"Description",required:!0,error:r.description,charCount:void 0===e.description?"0":e.description}),s.createElement("br",null),s.createElement("h3",null,"Discord User ID",s.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Your Discord User ID, so you get the full credit of YOUR work)")),s.createElement(E,{name:"discordUID",id:"discordUID",value:p,onChange:v,type:"number",placeholder:"Discord UID",required:!0,error:!b||r.discordUID}),!b&&s.createElement("p",{style:{color:"red"}},"Invalid user"),s.createElement("br",null),s.createElement("h3",null,"Content of Wiki",s.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(The content of your Wiki, including how it works, what it does and more)")),s.createElement(E,{name:"code",id:"code",value:g,onChange:v,type:"textarea-code",placeholder:"Code",required:!0,error:r.code}),s.createElement("h5",{style:{marginBottom:"0.5rem"}},s.createElement("span",{style:{verticalAlign:"middle"}},"Preview",s.createElement("small",{style:{fontSize:"8px",color:"gray",verticalAlign:"middle"}}," ","(How your Wiki will look on the website)"))),s.createElement("div",{style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #3f51b5",backgroundColor:"rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"}},s.createElement("div",{style:{overflow:"hidden"}},s.createElement("div",{style:{background:"transparent",borderRadius:"4px",padding:"12px"}},s.createElement(C.Z,{author:{name:`@${f.username}`,title:`Member ${f.id}`,url:`https://discord.com/users/${p}`,imageURL:`${f.avatar}`}}),s.createElement("br",null),!g&&s.createElement("div",{className:_.Z.placeholderText},"Some text of your awesome Wiki!",s.createElement("br",null),s.createElement("br",null),"Did you know that you can use markdown to make your Wiki look even better? ",s.createElement("br",null)," ",s.createElement("br",null),s.createElement("div",{style:{fontSize:"18px",color:"gray",border:"1px solid #3f51b5",borderRadius:"3px",margin:"4px",padding:"10px"}},"![Alt Text](Image Link) for images! ",s.createElement("br",null),"## For Headers! ",s.createElement("br",null),"- For Lists! ",s.createElement("br",null))),s.createElement(u.D,null,g)))),s.createElement("br",null),s.createElement("h3",null,"Tags",s.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Select Tags that fit your Wiki)")),s.createElement("div",{className:_.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>s.createElement("span",{key:e,className:(0,d.Z)(_.Z.tag,{[_.Z.active]:h.includes(e)}),onClick:()=>(e=>{const t=[...h];t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),o((e=>A(L({},e),{tags:t})))})(e)},e)))),r.tags&&s.createElement("p",{style:{color:"red",marginTop:"10px",fontFamily:"var(--ifm-font-family-base)"}},"At least one tag is required"),s.createElement("div",{className:_.Z.buttons,style:{width:"100%",display:"flex",justifyContent:"flex-end",marginTop:"15px"}},s.createElement(j.Z,{className:(0,d.Z)("button button--outline button--secondary"),onClick:y,style:{width:"100%"}},"Submit")))},z=({children:e})=>{const[t,a]=(0,s.useState)(!1),i={display:"inline-block",padding:"0px 3px",fontWeight:"500",marginTop:"-5px",backgroundColor:t?"#4d5291":"#3b406e",cursor:t?"pointer":"default",color:"#c9cdfb",borderRadius:"3px",transition:"background-color 0.15s ease"};return s.createElement("div",{style:i,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1)},e)};const D="undefined"!=typeof document&&document.createElement("style");D&&(D.appendChild(document.createTextNode("\n.card-wrapper {\n  margin-bottom: 20px;\n}\n.pills {\n    list-style-type: none;\n    padding: 0;\n    display: flex;\n    margin-bottom: 10px;\n  }\n  \n  .pills__item {\n    background-color: #e9e9e9;\n    padding: 8px 16px;\n    border-radius: 20px;\n    margin-right: 8px;\n    cursor: pointer;\n    color: #555;\n  }\n  \n  .pills__item--active {\n    background-color: #0d6efd;\n    color: #fff;\n  }\n  \n")),document.head.appendChild(D));var W=Object.defineProperty,U=Object.defineProperties,B=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,R=(e,t,a)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const $=(H=((e,t)=>{for(var a in t||(t={}))F.call(t,a)&&R(e,a,t[a]);if(M)for(var a of M(t))G.call(t,a)&&R(e,a,t[a]);return e})({},i.Z),q={Highlight:n,GiscusComponent:c.Z,InputField:E,SubmitForm:P,Cookies:l.Z,Tabs:o.Z,Slash:z,Showcase:function(){const[e,t]=(0,s.useState)([]),a=[{title:"Random memes",description:"They are funny images of trending memes totally in Spanish.",tags:["aoi.js","v6"],path:"/wikis/posts/1029818509364047933/ryko5y"},{title:"Bot Guild Create Log Command",description:"This command depicts or gets executed when a bot joins a guild, it logs the message with full guild Information in a particular pvt or open channel!",tags:["v6","Other","aoi.js"],path:"/wikis/posts/1034802804964995142/kphbt"},{title:"Prefix custom function",description:"Returns the prefix you used to call the command.",tags:["aoi.js","v6"],path:"/wikis/posts/1077733015846932530/iitgox"},{title:"Translate custom function",description:"Function that will translate something.",tags:["aoi.js","v6"],path:"/wikis/posts/1096717977304453160/8djazp"},{title:"Simple Welcome Card",description:"just simple welcome card using aoi.canvas",tags:["v6","Other"],path:"/wikis/posts/1096717977304453160/nhjf7f"},{title:"msgAfter function",description:"This will help people to get arguments ($msgAfter[2] --\x3e arg3 arg4 ...)",tags:["aoi.js","v6"],path:"/wikis/posts/1096717977304453160/v71q0o"},{title:"Cat Command",description:"Cat command nothing interesting.",tags:["aoi.js","v6"],path:"/wikis/posts/1096717977304453160/vwxtre"},{title:"Guess the country game",description:"a guess the country game using $awaitMessages the user gets a country flag and he has to guess it if the user guesses it right the bot mentions him and says Gg ",tags:["v6","aoi.js","Other"],path:"/wikis/posts/1121808241974837308/txlnl"},{title:"Voice Channel Count",description:"\xa1Hey! With this command you will know in how many Voice Channels is your bot connected to.\n**Variables needed**:  `vcCount: 0`\n\xbfFor what I need this code? I dont know, but the reason why I use it is in case I want to restart the host and I do not want some user that's listening to music stop listening suddenly",tags:["v6","aoi.js","aoi.music"],path:"/wikis/posts/166181471369953280/0ggsc"},{title:"File Names Custom Function",description:"Is a comprehensive resource dedicated to providing information and documentation on a custom function for obtaining file names. ",tags:["v6","aoi.js"],path:"/wikis/posts/166181471369953280/eff65g"},{title:"Get Weather",description:"A simple custom function for getting the weather of someplace.\nKinda useless :)",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/i1psxm"},{title:"Random Car Image",description:"Very simple code",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/nji73d"},{title:"Country Information Custom Function",description:"The $country function provides detailed information about a specific country. By specifying the country name and desired format, you can retrieve various details such as the country's name in English or Spanish, continent information, capital city, dialing code, country codes, top-level domain, area measurement, flag in emoji format, and high-resolution flag image.",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/ny063"},{title:"Random Country",description:"A code for get information about a random code.",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/p2o9s"},{title:"Google Search",description:"Inspired on $search of Fafa, but this is on google!",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/sjmifn"},{title:"8ball command",description:"8ball command",tags:["v6","aoi.js"],path:"/wikis/posts/405070001356275712/2pf8fb"},{title:"Serverinfo command",description:"Requires GuildPresences in intents",tags:["v6","aoi.js"],path:"/wikis/posts/405070001356275712/6bdeo"},{title:"Botinfo command",description:"simple botinfo command",tags:["v6","aoi.js"],path:"/wikis/posts/405070001356275712/sr2wtw"},{title:"fetchInvite function",description:"Easily fetch the information of Invites using custom functions!",tags:["aoi.js","v6","Other"],path:"/wikis/posts/428188716641812481/6ftrh8"},{title:"RPS game",description:"Simple RPS game.",tags:["aoi.js","v6"],path:"/wikis/posts/428188716641812481/gm5x4"},{title:"Transcript Custom Function",description:"$transcript custom function which saves messages of a channel and formats them to a .html file.",tags:["aoi.js","Other","v6"],path:"/wikis/posts/428188716641812481/nw36qo"},{title:"search function",description:"$search custom function for aoi.music which returns search results of either youtube or soundcloud.",tags:["aoi.js","aoi.music","v6","Other"],path:"/wikis/posts/428188716641812481/wvkxjp"},{title:"callAwaited Custom Function",description:"Calls an awaited command.",tags:["v6","aoi.js"],path:"/wikis/posts/590267498192961540/0mi2zp"},{title:"commandExists Custom Function",description:"Check if a command exists through its type and name.",tags:["aoi.js","v6"],path:"/wikis/posts/590267498192961540/jqpcsp"},{title:"Unicode character unescape",description:"This custom function allows you to unescape unicode characters. For example, if you had this string (which is escaped): `Hey there, wassup?`, then by using this function, you would get `Hey there, wassup?`.",tags:["v6","aoi.js"],path:"/wikis/posts/591690683509768223/0k0txb"},{title:"New if in old if commands",description:"This code allows you to use the new `$if` in old `$if` commands",tags:["v6","aoi.js"],path:"/wikis/posts/591690683509768223/82om08"},{title:"Is file empty function",description:"This function will return `true` or `false` based on whether the file specified is empty or not.",tags:["aoi.js","v6"],path:"/wikis/posts/591690683509768223/d0m8v5"},{title:"Download function",description:"This is a custom function for downloading files accessible through https.",tags:["aoi.js","v6"],path:"/wikis/posts/591690683509768223/h3mscp"},{title:"Yes or no command",description:"Yes or no command",tags:["aoi.js","v6"],path:"/wikis/posts/632607624742961153/0s8eh9"},{title:"HowGamer command",description:"Checks how gamer you're for no reason, It's just for fun so.",tags:["v6","aoi.js"],path:"/wikis/posts/632607624742961153/ic9vu7"},{title:"Long Serverinfo command",description:"A long serverinfo command just for you. Nothing fancy about it.",tags:["v6","aoi.js"],path:"/wikis/posts/632607624742961153/iiwq2"},{title:"Author button",description:"A tutorial on how to setup author button with explanation on how it works!",tags:["v6","aoi.js"],path:"/wikis/posts/632607624742961153/mnfe6"},{title:"Kick command",description:"The Kick command is triggered through a slash command interaction. Nothing special, it's just a kick command.",tags:["v6","aoi.js"],path:"/wikis/posts/689364013297041409/3rabq"},{title:"Clear command",description:"The clear command allows the user (with permission) to delete fewer than 100 messages. It also provides two additional optional options: filter and channel.",tags:["aoi.js","v6"],path:"/wikis/posts/689364013297041409/psfe2c"},{title:"Reloading the Commands ",description:"Before restarting your bot, you can reinstall the commands folder that you have already set and run your commands.",tags:["v6","aoi.js","Other"],path:"/wikis/posts/693451182617657394/30bbab"},{title:"Some thread functions",description:"This wiki is about 3 custom functions for threads: lock, unlock and rename.",tags:["v6","aoi.js","Other"],path:"/wikis/posts/713132410153205802/34unj"},{title:"Progression bar",description:"A function that makes progression bar to save time and help people who can't do basic maths",tags:["v6","aoi.js","Other"],path:"/wikis/posts/713132410153205802/c6h1efa"},{title:"Member count with image",description:"A custom function to show the data of server members.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/5sg6ej"},{title:"Slot Command",description:"A simple, easy slot command",tags:["aoi.js","v6"],path:"/wikis/posts/715852000096419900/7y0d4k"},{title:"commands list",description:"A djs code to filter and get your commands list",tags:["Other","v6"],path:"/wikis/posts/715852000096419900/aswziy"},{title:"anti swear command",description:"A djs code to check if any message contains swear words or not.",tags:["v6","Other","aoi.js"],path:"/wikis/posts/715852000096419900/cy1ltq"},{title:"toToggleCase",description:"A custom d.js function for text modification.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/dmrmlh"},{title:"Hack command",description:"A advanced hack command\u2026 Made for fun check it out.",tags:["aoi.js","Other","v6"],path:"/wikis/posts/715852000096419900/icaljl"},{title:"Colored and styled console logging",description:"List of codes for colored and styled console logging.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/sof89f"},{title:"Emoji Progress Bar",description:"A js function to make a progression bar using emojis.",tags:["aoi.js","v6","Other"],path:"/wikis/posts/715852000096419900/szskh"},{title:"Server captcha verification",description:"A command to make a verification system.",tags:["v6","aoi.js","Other"],path:"/wikis/posts/715852000096419900/vr5jfn"},{title:"reverseText",description:"A fun command to modify text and reverse them.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/w2htzj"},{title:"randomText advanced",description:"A custom function to get random/specified number of words.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/xzyzwx"},{title:"Currency Command Balance",description:"A Simple Currency Balance Command",tags:["v6","aoi.js"],path:"/wikis/posts/730782268175679528/c0xpn"},{title:"Simple Moderations Clear",description:"This is a simple moderations clear command.",tags:["aoi.js","v6"],path:"/wikis/posts/730782268175679528/j991sn"},{title:"Simple avatar command",description:"Simple avatar command for aoi.js v6",tags:["aoi.js","v6"],path:"/wikis/posts/894309600029999104/jh5tdp"},{title:"Ticketing system",description:"This is a ticketing system whose most of the codes are aoi.js while some, like the transcript is made with discord.js. I thought of making this wiki as many people are having doubts or want to make a ticketing system. ",tags:["aoi.js","v6"],path:"/wikis/posts/949588732498018324/r4uv0q"},{title:"Roblox group info command",description:"Displays info about a roblox group",tags:["v6","aoi.js"],path:"/wikis/posts/964024743172915220/ebigj"}],i=a=>{e.includes(a)?t(e.filter((e=>e!==a))):t([...e,a])},n=0===e.length?a:a.filter((t=>e.every((e=>t.tags.includes(e)))));return s.createElement("div",null,s.createElement("ul",{className:"pills"},s.createElement("li",{className:(0,d.Z)("pills__item",{"pills__item--active":0===e.length}),onClick:()=>{t([])}},"All"),s.createElement("li",{className:(0,d.Z)("pills__item",{"pills__item--active":e.includes("v6")}),onClick:()=>i("v6")},"v6"),s.createElement("li",{className:(0,d.Z)("pills__item",{"pills__item--active":e.includes("Other")}),onClick:()=>i("Other")},"Other"),s.createElement("li",{className:(0,d.Z)("pills__item",{"pills__item--active":e.includes("aoi.js")}),onClick:()=>i("aoi.js")},"aoi.js")),s.createElement("div",{className:"card-demo"},n.map(((e,t)=>s.createElement("div",{className:(0,d.Z)("card","card-wrapper"),key:t},s.createElement("div",{className:(0,d.Z)("card__header","my-card-header")},s.createElement("h3",null,e.title)),s.createElement("div",{className:(0,d.Z)("card__body","my-card-body")},s.createElement("p",null,e.description)),s.createElement("div",{className:(0,d.Z)("card__image","my-card-image")},s.createElement("img",{src:"https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true",alt:"Image"})),s.createElement("div",{className:(0,d.Z)("card__footer","my-card-footer")},s.createElement(j.Z,{className:(0,d.Z)("button","button--secondary","button--block"),href:e.path},"Go to Wiki")))))))},Tooltip:m.u,TabItem:r.Z},U(H,B(q)));var H,q},99578:(e,t,a)=>{a.d(t,{Z:()=>i});const i={privacyContainer:"privacyContainer_t35s",privacyHeaderItem:"privacyHeaderItem_iUQ6",privacyHeaderItemSmall:"privacyHeaderItemSmall_hfP8",privacyItem:"privacyItem_Sgzu",heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng",copyButtonWrapper:"copyButtonWrapper_uKA6",copyContent:"copyContent_jOkt",copyIconButton:"copyIconButton_SUcq",copyIconWrapper:"copyIconWrapper_KfKX",copyIcon:"copyIcon_gf9d",checkmarkIcon:"checkmarkIcon_Jfyd",copied:"copied_VSYr"}}}]);