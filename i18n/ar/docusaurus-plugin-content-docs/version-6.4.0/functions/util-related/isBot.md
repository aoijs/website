---
title: '$isBot'
description: '$isBot will check if the given user is a bot.'
id: isBot
---

`$isBot` will check if the given user is a bot.

## الاستخدام

```php
$isBot[userID?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                       | مطلوب |
| ------- | ------- | ---------------------------------- |:-----:|
| userID? | Integer | User id to check if they're a bot. | false |

## مثال

This will return `true` as your bot is, obviously, a bot:

```javascript
bot.command({
    name: 'isBot',
    code: `
  $isBot[$clientID]
  `
});
```
