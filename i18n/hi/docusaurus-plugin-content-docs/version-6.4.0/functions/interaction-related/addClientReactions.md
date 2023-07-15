---
title: '$addClientReactions'
description: '$addClientReactions will add a reaction to the bot''s message.'
id: addClientReactions
---

`$addClientReactions` will add a reaction to the bot's message.

## प्रोयोग

```php
$addClientReactions[...reactions]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन      | चाहिए |
| --------- | -------- | ----------------- |:-----:|
| reactions | स्ट्रिंग | Reactions to add. | true  |

## ट्रू (हा)

This will add the given emojis to the bot's response ("Hello!"):

```javascript
bot.command({
    name: 'addClientReactions',
    code: `
    Hello!
    $addClientReactions[🧡;❤]
  `
});
```