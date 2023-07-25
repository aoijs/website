---
title: "Simple Password Command"
description: "Simple password generator. 

(Prefix)password 29

This will send you a password which is 29 characters.

 Want more info on our bots go to 
https://zono.bloxy.pro"
authors:
  name: "@adityaredflag"
  title: Member - 983386510235680888
  userid: "983386510235680888"
  url: https://discord.com/users/983386510235680888
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/983386510235680888.png
tags: ["v6","aoi.js"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

module.exports = ({
name: "password",
  code: `
$color[#8C51FF]
$sendDm[$toUppercase[||$randomString[$message]|| :tick:;$authorID;false]
 $onlyIf[$message[1]<=100;:error: 100 characters is the max!]
 $onlyIf[$message[1]>=5;:error: 5 characters or more!]
 $onlyIf[$isNumber[$message[1]]==true;:error: 12 characters or more!]
 $onlyIf[false!=$isUserDmEnabled;:error: Your DMs are not open!]
 $title[:tick: Sent!]
 $footer[https://zono.bloxy.pro]
`
})