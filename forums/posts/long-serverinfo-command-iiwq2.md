---
title: "Long Serverinfo command"
description: "A long serverinfo command just for you. Nothing fancy about it."
authors:
  name: "@dodogames"
  title: Member
  url: https://discord.com/users/632607624742961153
  image_url: https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png
tags: ["v6","aoi.js"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = {
  name: "serverinfo",
  aliases: "server",
  code: `$title[Server Info]
  $addField[Verification Level;$get[verifylevel]]
  $addField[Other;
Server Created since: $creationDate[$guildID;date]
Content Filter: $get[content]
Server ID: $guildID
]
  $addField[General;
Roles: $roleCount[$guildID;true]
Emojis: $emojiCount[$guildID] 
Server Boosts: $guildBoostCount[$guildID]

]
  $addField[Channels;
Total: $channelCount[$guildID;all]
Text Channels: $channelCount[$guildID;Text]
Voice Channels: $channelCount[$guildID;Voice]
Forum Channels: $channelCount[$guildID;Forum]
Categories: $channelCount[$guildID;Category]
]
  $addField[Members information;
Total: $membersCount[$guildID;all;true]
Humans: $membersCount[$guildID;all;false]
Bots: $botCount[$guildID]
]
  $thumbnail[$get[serverimage]]
  $cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
  
  $let[verifylevel;$replaceText[$replaceText[$replaceText[$replaceText[$GuildVerificationLevel;1;Low];2;Medium];3;High];4;Very High]]
  $let[content;$replaceText[$replaceText[$replaceText[$guildContentFilter[$guildID];0;Disabled];1;Medium];2;High]]
  $let[serverimage;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]
`
}
```
# Note
This command requires the intent `GuildPresences` to be added into your bot's main file (aka index.js) for the total members shown to be correct. If this doesn't work then eval `$cacheMembers[$guildID]` in the server where you used serverinfo command (while having the intent added as well) and then try again. Feel free to ask for help in support if needed!