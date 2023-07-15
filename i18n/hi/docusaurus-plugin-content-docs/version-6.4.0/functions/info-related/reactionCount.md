---
title: '$reactionCount'
description: '$reactionCount will return the amount of users who reacted to a specific emoji.'
id: reactionCount
---

`$reactionCount` will return the amount of users who reacted to a specific emoji.

## प्रोयोग

```php
$reactionCount[channelID;messageID;emoji]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                           | चाहिए |
| --------- | -------- | ------------------------------------------------------ |:-----:|
| channelID | integer  | The ID of the channel where the message is located in. | true  |
| messageID | integer  | The ID of the message.                                 | true  |
| emoji     | स्ट्रिंग | The emoji its reaction count will be returned of.      | true  |

## ट्रू (हा)

This will return the amount of reactions on your message with which you executed the command, will most likely return `1` due to the bot being the only one who reacted to it:

```javascript
bot.command({
    name: 'reactionCount',
    code: `
There are: $reactionCount[$channelID;$messageID;😫] reactions!
$addCmdReactions[😫]
`
});
```
