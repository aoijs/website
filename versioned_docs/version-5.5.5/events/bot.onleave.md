---
title: bot.onLeave
description: An event that gets executed, if the bot sees a user leaving a server. To let the bot listen to the event, add one bot.onLeave() callback inside your main file.
---

This callback that allows the bot to log every user who leaves the server.

```javascript
bot.leaveCommand({ //command
        channel: "channel id", //channel where the bot logs
        code: `your code` //Message sent to <channel>
})
```

 
Make sure the \`channel\` is in the server. So recommended to use server variables (if your bot isn't for 1 server)
 

```javascript
bot.leaveCommand({ 
        channel: "782446718704812032", 
        code: `Goodbye, $username, hope you had a good stay at $serverName`
        /*
                Code Breakdown
        $serverName - The name of the server the user left
        $username - The user who left the server
        */
})
```

 
`GUILD_MEMBERS` intent needed! Information in the [Gateway Intents](../other/gateway-intents.md) guide.
 


You can use all guild and member based functions like [$serverName](../functions/servername.md) or [$guildID](../functions/guildid.md) or [$username](../functions/username.md) or [$authorID](../functions/authorid.md) in these commands.
 
