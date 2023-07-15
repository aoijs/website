---
title: '$username'
description: '$username will return a user''s username.'
id: username
---

`$username` will return a user's username.

## प्रोयोग

```php
$username[userID?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन |    चाहिए     |
| ------- | ------- | ------------ |:------------:|
| userID? | integer | The user ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return your username:

```javascript
bot.command({
    name: 'username',
    code: `
  $username[$authorID]
  `
});
```
