---
title: "Voice Channel Count"
description: "¡Hey! With this command you will know in how many Voice Channels is your bot connected to.

**Variables needed**: 
`vcCount: 0`

¿For what I need this code?
I dont know, but the reason why I use it is in case I want to restart the host and I do not want some user that's listening to music stop listening suddenly"
authors:
  name: "@jollyjolli"
  title: Member - 166181471369953280
  userid: "166181471369953280"
  url: https://discord.com/users/166181471369953280
  image_url: https://cdn.discordapp.com/avatars/166181471369953280/97d86ef51d7e49e38ad47175a6f9dc19.png
tags: ["v6","aoi.js","aoi.music"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

```js
module.exports = [{
name: "voiceCount",
aliases: ["vcCount", "vcc"],
code: `
$reply

$forEachGuild[100;{"msg": "$sendMessage[Counting how many voice channels I'm in.;true]", "channelID": "$channelID", "guildid": "$guildid"};vcCountAWAITED;vcCountEndAWAITED]

$setGuildVar[vcCount;0;$guildid]
`
}, {
    name: "vcCountAWAITED",
    type: "awaited",
    $if: "old",
    code: `
    $setGuildVar[vcCount;$sum[$getGuildVar[vcCount;$awaitData[guildid]];1];$awaitData[guildid]]
    $onlyIf[$voiceID[$clientID]!=; ]
`
}, {
    name: "vcCountEndAWAITED",
    $if: "old",
    type: "awaited",
    channel: "1073754825705136238",
    code: `
$editMessage[$awaitData[msg];I'm on a total of $getGuildVar[vcCount;$awaitData[guildid]] voice channels.;$awaitData[channelID]]
`
}]
```
