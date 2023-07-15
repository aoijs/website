---
title: '$userID'
description: '$userID will return a given user''s ID.'
id: userID
---

`$userID` will return a given user's ID.

## प्रोयोग

```php
$userID[user]
```

## पैरामीटर्स

| फील्ड | टाइप           | डिस्क्रिप्शन                                                     | चाहिए |
| ----- | -------------- | ---------------------------------------------------------------- |:-----:|
| user  | string, number | The name of the user who you want the user ID to be returned of. | true  |

## ट्रू (हा)

This will return your user ID:

```javascript
bot.command({
    name: 'userID',
    code: `
  $userID[$username]
  `
});
```
