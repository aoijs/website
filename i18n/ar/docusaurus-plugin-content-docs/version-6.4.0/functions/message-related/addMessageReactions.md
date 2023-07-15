---
title: '$addMessageReactions'
description: '$addMessageReactions will add a reaction to a specific message.'
id: addMessageReactions
---

`$addMessageReactions` will add a reaction to a specific message.

## الاستخدام

```php
$addMessageReactions[channelID;messageID;...reactions]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                | مطلوب |
| --------- | ------- | ------------------------------------------- |:-----:|
| channelID | Integer | Channel ID of where the message is located. | true  |
| messageID | Integer | Message ID.                                 | true  |
| reactions | string  | Reactions to add.                           | true  |

## مثال

This will add the given reactions to your message:

```javascript
bot.command({
    name: 'addMessageReactions',
    code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
