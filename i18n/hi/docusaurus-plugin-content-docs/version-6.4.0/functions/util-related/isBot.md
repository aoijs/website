---
title: '$isBot'
description: '$isBot will check if the given user is a bot.'
id: isBot
---

`$isBot` will check if the given user is a bot.

## प्रोयोग

```php
$isBot[userID?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन                       |    चाहिए     |
| ------- | ------- | ---------------------------------- |:------------:|
| userID? | integer | User id to check if they're a bot. | असत्य (नहीं) |

## ट्रू (हा)

This will return `true` as your bot is, obviously, a bot:

```javascript
bot.command({
    name: 'isBot',
    code: `
  $isBot[$clientID]
  `
});
```
