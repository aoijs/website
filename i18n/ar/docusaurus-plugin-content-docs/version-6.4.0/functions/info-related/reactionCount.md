---
title: '$reactionCount'
description: '$reactionCount will return the amount of users who reacted to a specific emoji.'
id: reactionCount
---

`$reactionCount` will return the amount of users who reacted to a specific emoji.

## الاستخدام

```php
$reactionCount[channelID;messageID;emoji]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                           | مطلوب |
| --------- | ------- | ------------------------------------------------------ |:-----:|
| channelID | Integer | The ID of the channel where the message is located in. | true  |
| messageID | Integer | The ID of the message.                                 | true  |
| emoji     | string  | The emoji its reaction count will be returned of.      | true  |

## مثال

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
