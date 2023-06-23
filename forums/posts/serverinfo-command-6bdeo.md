---
title: "Serverinfo command"
description: "Requires GuildPresences in intents"
authors:
  name: "@arkwell"
  title: Member
  url: https://discord.com/users/405070001356275712
  image_url: https://cdn.discordapp.com/avatars/405070001356275712/a_4eba9c78ecdc4cf568a3ec1a03d52db4.png
tags: ["v6","aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

### Content

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
