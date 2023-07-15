---
title: '$userDefaultAvatar'
description: '$userDefaultAvatar will return the given user''s default Discord User Avatar.'
id: userDefaultAvatar
---

`$userDefaultAvatar` will return the given user's default Discord User Avatar.

## प्रोयोग

```php
$userDefaultAvatar[userID?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन        |    चाहिए     |
| ------- | ------- | ------------------- |:------------:|
| userID? | integer | The ID of the user. | असत्य (नहीं) |

## ट्रू (हा)

This will return your default Discord User Avatar:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID]
  `
});
```
