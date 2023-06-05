---
title: bot.onGuildJoin
description: An event that gets executed, if the bot joins a server. To let the bot listen to the event, add one bot.onGuildJoin() callback inside your mainfile.
---

This callback will allow the bot to log a message whenever it joins a server.

#### Usage:

```javascript
bot.guildJoinCommand({//command
channel: "channel id",//the channel where <code> will be sent to
code: `your code`//message sent to <channel>
})
```

#### Example Command:

```javascript
bot.guildJoinCommand({
channel: "772414449839636490",
code: `
Ive joined $serverName!
`
})
```

You can also have it send in the server where it joined by using [$systemChannelID](../functions/systemchannelid.md) or [$randomChannelID](../functions/randomchannelid.md).

```javascript
bot.guildJoinCommand({
channel: "$systemChannelID",
code: `
Hi i am Awesome Bot and I can do many things.
`
 
})
```

 
Keep in mind: Not all servers have a system channel!
 


You can use all guild based functions like [$serverName](../functions/servername.md) or [$guildID](../functions/guildid.md) or [$getServerInvite](../functions/getserverinvite.md) in these commands.
 