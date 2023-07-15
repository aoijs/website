---
title: '$userTag'
description: '$userTag will return a user''s username and discriminator.'
id: userTag
---

`$userTag` will return a user's username and discriminator.

## प्रोयोग

```php
$userTag[userID?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन |    चाहिए     |
| ------- | ------- | ------------ |:------------:|
| userID? | integer | The user ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return your username and discriminator:

```javascript
bot.command({
    name: 'userTag',
    code: `
  $userTag[$authorID]
  `
});
```
