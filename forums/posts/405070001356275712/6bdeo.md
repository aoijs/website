---
title: "Serverinfo command"
description: "Requires GuildPresences in intents"
authors:
  name: "@arkwell"
  title: Member - 405070001356275712
  userid: "405070001356275712"
  url: https://discord.com/users/405070001356275712
  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/405070001356275712.png
tags: ["v6","aoi.js"]
hide_table_of_contents: true
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = [{
    name: "serverinfo",
    code: `
$addField[Channels;Total: $channelCount[$guildID]
Text: $channelCount[$guildID;Text]
Voice: $channelCount[$guildID;Voice]
Category: $channelCount[$guildID;Category]
News: $channelCount[$guildID;Announcement]
Threads: $channelCount[$guildID;PublicThread]]
$addField[Emojis;Total: $emojiCount[$guildID]]
$addField[Roles;$roleCount[$guildID;true]]
$addField[Members;Total: $membersCount[$guildID]
Humans: $membersCount[$guildID;all;false]
Bots: $sub[$membersCount[$guildID;all;true];$membersCount[$guildID;all;false]]
Online: $membersCount[$guildID;online;true]]
$addField[Boosts;$guildBoostCount[$guildID] (Level $guildBoostLevel[$guildID])]
$addField[Creation;$creationDate[$guildID;time]]
$addField[Guild ID;$guildID]
$addField[Owner;<@$ownerID[$guildID]>]
$title[Server Information - $guildName[$guildID]]
  `
}]; 
```

Requires GuildPresences in intents
