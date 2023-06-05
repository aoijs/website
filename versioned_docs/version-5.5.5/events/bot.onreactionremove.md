---
title: bot.onReactionRemove
description: An event that gets executed, if the bot sees a user removing a reaction on a message. To let the bot listen to the event, add one bot.onReactionRemove() callback inside your mainfile.
---

This callback logs _**every time**_ a user un-reacts to a message

#### Usage:

```javascript
bot.reactionRemoveCommand({ //command
channel: "channel id", //channel where it logs
code: `your code` // Message that will be sent to <channel>
}) 
```

#### Example Command:

```javascript
bot.reactionRemoveCommand({
channel: "772414449839636490", 
code: `
$username has unreacted with $emojiToString
`
}) 
```

![Here's an example](<../discord-examples/assets/image (40).png>)

#### Functions:

* [$messageID](../functions/usermessageid.md) => to get the messageID the user reacted
* $authorMessage => to get the authorID of the messagte the user reacted to
* [$channelID ](../functions/channelid.md)=> to get the channelID of the message
* [$authorID](../functions/authorid.md) => the ID of the user that reacted
* [$username](../functions/username.md) => the username of the user that reacted


You can use functions like $onlyForChannels or the following functions inside an [$onlyIf](../functions/onlyif.md) limiter at the bottom of the code to limit your code to specific reactions etc:
 
