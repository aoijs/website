---
title: "Cat Command"
description: "Cat command nothing interesting."
authors:
  name: "@devlordduck2"
  title: Member - 1096717977304453160
  userid: "1096717977304453160"
  url: https://discord.com/users/1096717977304453160
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png
tags: ["aoi.js","v6"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

The title says everything.

**Code:**

```
bot.command({
   name: "cat",
   aliases: ["kitty"],
   code: `
$title[1;🐱CAT🐱]
$description[1;[Image]($get[url])]
$image[$get[url]]
$footer[This cat/kitty says meow]
$let[url;$jsonRequest[https://ild.vercel.app/api/cat;image]]
`
})
```
![#](https://media.discordapp.net/attachments/1106869098077491200/1127304975786192966/SmartSelect_20230708_212712_Discord.jpg?width=253&height=381)