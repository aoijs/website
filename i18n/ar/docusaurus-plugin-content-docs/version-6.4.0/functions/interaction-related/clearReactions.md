---
title: '$clearReactions'
description: '$clearReactions will remove a given or all reactions of a message.'
id: clearReactions
---

`$clearReactions` will remove a given or all reactions of a message.

## الاستخدام

```php
$clearReactions[channelID;messageID;emoji]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                                                 | مطلوب |
| --------- | ------- | -------------------------------------------------------------------------------------------- |:-----:|
| channelID | Integer | The channel ID of where the message is located in.                                           | true  |
| messageID | Integer | The message ID.                                                                              | true  |
| emoji     | string  | The emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji | true  |

## مثال

This will add two emojis and remove one completely:

```javascript
bot.command({
    name: 'clearReactions',
    code: `
  $clearReactions[$channelID;$messageID;🥱]
  $wait[2s]
  $addCmdReactions[🥱;😩]
  `
});
```
