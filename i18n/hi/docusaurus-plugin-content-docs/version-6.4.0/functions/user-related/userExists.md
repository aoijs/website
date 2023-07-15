---
title: '$userExists'
description: '$userExists will check if a given user exists.'
id: userExists
---

`$userExists` will check if a given user exists.

## प्रोयोग

```php
$userExists[userID?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन |    चाहिए     |
| ------- | ------- | ------------ |:------------:|
| userID? | integer | The user ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return either `true` or `false` depending on if the user exists, in this example below it will return `true` as you exist as Discord user:

```javascript
bot.command({
    name: 'userExists',
    code: `
  $userExists[$authorID]
  `
});
```
