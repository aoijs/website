---
title: '$clearReactions'
description: '$clearReactions will remove a given or all reactions of a message.'
id: clearReactions
---

`$clearReactions` will remove a given or all reactions of a message.

## प्रोयोग

```php
$clearReactions[channelID;messageID;emoji]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                                                 | चाहिए |
| --------- | -------- | -------------------------------------------------------------------------------------------- |:-----:|
| channelID | integer  | The channel ID of where the message is located in.                                           | true  |
| messageID | integer  | The message ID.                                                                              | true  |
| emoji     | स्ट्रिंग | The emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji | true  |

## ट्रू (हा)

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
