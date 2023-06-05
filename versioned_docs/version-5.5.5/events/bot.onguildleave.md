---
title: bot.onGuildLeave
description: An event that gets executed, if the bot leaves a server. To let the bot listen to the event, add one bot.onGuildLeave() callback inside your mainfile.
---

This callback will allow the bot to log a message whenever it leaves a server.

#### Usage:

```javascript
bot.guildLeaveCommand({//command
channel: "channel id",//the channel where <code> will be sent to
code: `your code`//message sent to <channel>
})
```

#### Example command:

```javascript
bot.guildLeaveCommand({
channel: "772414449839636490",
code: `
I have left $serverName!
`
})
```


You can use all guild based functions like [$serverName](../functions/servername.md) or [$guildID](../functions/guildid.md) in these commands but functions like [$getServerInvite](../functions/getserverinvite.md) won't work here.
 