---
title: "Simple Welcome Card"
description: "just simple welcome card using aoi.canvas"
authors:
  name: "@devlordduck2"
  title: Member - 1096717977304453160
  userid: "1096717977304453160"
  url: https://discord.com/users/1096717977304453160
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1096717977304453160.png
tags: ["v6","Other"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

This is simple welcome card using aoi.canvas. (requires aoi.canvas)

**Code:**
```
module.exports = [{
    type: "join",
    channel: "ID",
    code: `
    $title[Welcome]
    $description[<@$authorID>, Welcome to $guildName[$guildID].]
    $sendCanvas[welcome;image;1]
    $color[#00FFFF]
    $drawText[welcome;Welcome;150;350]
    $font[welcome;50px Arial]
    $canvasColor[welcome;#FFFFFF]
    $drawImage[welcome;avatar;130;50;250;250;130]
    $loadImage[welcome;avatar;url;$nonEscape[$userAvatar[$authorID]]]
    $drawImage[welcome;background;1;1;512;512]
    $loadImage[welcome;background;url;$nonEscape[$get[background]]]
    $createCanvas[welcome;512;512]
    $let[background;$nonEscape[https://media.discordapp.net/attachments/1128690282586702027/1130126476189106246/13.png]]
`
}]
```