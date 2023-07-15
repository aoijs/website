---
title: '$addCmdReactions'
description: '$addCmdReactions will react with given emojis to the author''s message.'
id: addCmdReactions
---

`$addCmdReactions` will react with given emojis to the author's message.

## الاستخدام

```php
$addCmdReactions[...reactions]
```

## البارامترات

| Field     | النوع  | الديسكبربشين      | مطلوب |
| --------- | ------ | ----------------- |:-----:|
| reactions | string | Reactions to add. | true  |

## مثال

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
