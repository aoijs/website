---
title: '$addMessageReactions'
description: '$addMessageReactions will add a reaction to a specific message.'
id: addMessageReactions
---

`$addMessageReactions` will add a reaction to a specific message.

## प्रोयोग

```php
$addMessageReactions[channelID;messageID;...reactions]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                | चाहिए |
| --------- | -------- | ------------------------------------------- |:-----:|
| channelID | integer  | Channel ID of where the message is located. | true  |
| messageID | integer  | Message ID.                                 | true  |
| reactions | स्ट्रिंग | Reactions to add.                           | true  |

## ट्रू (हा)

This will add the given reactions to your message:

```javascript
bot.command({
    name: 'addMessageReactions',
    code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
