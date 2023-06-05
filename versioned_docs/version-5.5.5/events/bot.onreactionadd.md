---
title: bot.onReactionAdd
description: An event that gets executed, if the bot sees a user reacting with a reaction to a message. To let the bot listen to the event, add one bot.onReactionAdd() callback inside your mainfile.
---

#### Usage:

```javascript
bot.reactionAddCommand({ //command
        channel: "channel id", //the channel where the bot will log
        code: `your code` //Message that will be sent to <channel>
})
```

#### Example Command:

```javascript
bot.reactionAddCommand({
        channel: "772414449839636490", 
        code: `$username has reacted with $emojiToString`
})
```

#### Functions:

* [$messageID](../functions/usermessageid.md) => to get the messageID the user reacted
* $authorMessage => to get the authorID of the message the user reacted to
* [$channelID ](../functions/channelid.md)=> to get the channelID of the message
* [$authorID](../functions/authorid.md) => the ID of the user that reacted
* [$username](../functions/username.md) => the username of the user that reacted

> You can use functions like [$onlyForChannels](../functions/onlyforchannels.md) or the functions from above in an [$onlyIf](../functions/onlyif.md) limiter at the bottom of the code to limit your code to specific reactions etc.