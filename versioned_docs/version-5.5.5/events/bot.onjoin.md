---
title: bot.onJoin
description: An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file.
---

Callback that triggers every time a user joins a server.

#### Usage:

```javascript
bot.joinCommand({ //command
channel: "channel id", //channel where it will log
code: `your code` //Message sent to <channel>
})
```

 
Make sure the \`channel\` is in the server. So recommended to use server variables (if your bot isn't for 1 server)
 

#### Example Command:

```javascript
bot.joinCommand({ 
channel: "782446718704812032", 
code: `
Welcome to $serverName, $username!
`
/*
Code Breakdown
$serverName - The name of the server the user joined
$username - The user who joined the server
*/
}) 
```

 
`GUILD_MEMBERS` intent needed! Information in the [Gateway Intents](../other/gateway-intents.md) guide.
 


You can use all guild and member based functions like [$serverName](../functions/servername.md) or [$guildID](../functions/guildid.md) or [$username](../functions/username.md) or [$authorID](../functions/authorid.md) in these commands.
 
