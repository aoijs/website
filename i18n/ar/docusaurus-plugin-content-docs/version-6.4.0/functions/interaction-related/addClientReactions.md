---
title: '$addClientReactions'
description: '$addClientReactions will add a reaction to the bot''s message.'
id: addClientReactions
---

`$addClientReactions` will add a reaction to the bot's message.

## الاستخدام

```php
$addClientReactions[...reactions]
```

## البارامترات

| Field     | النوع  | الديسكبربشين      | مطلوب |
| --------- | ------ | ----------------- |:-----:|
| reactions | string | Reactions to add. | true  |

## مثال

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