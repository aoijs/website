---
title: '$addCmdReactions'
description: '$addCmdReactions will react with given emojis to the author''s message.'
id: addCmdReactions
---

`$addCmdReactions` will react with given emojis to the author's message.

## प्रोयोग

```php
$addCmdReactions[...reactions]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन      | चाहिए |
| --------- | -------- | ----------------- |:-----:|
| reactions | स्ट्रिंग | Reactions to add. | true  |

## ट्रू (हा)

This will add the given emojis to the author's response ("Hello!"):

```javascript
bot.command({
    name: 'addCmdReactions',
    code: `
Hello!
$addCmdReactions[🧡;❤]
  `
});
```
