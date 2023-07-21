---
title: "Bot Guild Create Log Command"
description: "This command depicts or gets executed when a bot joins a guild, it logs the message with full guild Information in a particular pvt or open channel!"
authors:
  name: "@neoxyybae"
  title: Member - 1034802804964995142
  userid: "1034802804964995142"
  url: https://discord.com/users/1034802804964995142
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/1034802804964995142.png
tags: ["v6","Other","aoi.js"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports={
  name: "join",
  type: "guildJoin",
  channel: "$channelID",
  code: `
  $author[1;$guildName[$guildID];$guildIcon[$guildID]]
  $title[<:icons_stagerequesttospeak:1123610843720986645> New Guild Joined!]
  $description[<:reply3:1124230185844224000> **Guild Name**: $guildName[$guildID]
<:reply2:1124230129497944145> **Guild ID**: \`$guildID\`
<:reply2:1124230129497944145> **Guild Members**: \`$membersCount[$guildID]\`
<:reply2:1124230129497944145> **Owner** : <@$ownerID[$guildID]> (\`$ownerID[$guildID]\`)
<:replyL:1124230183000494160> **Guild Link**: $getGuildInvite[$guildID]]
$footer[Thanks For Adding]
$color[$getVar[color]]`
}`
```
