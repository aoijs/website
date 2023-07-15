---
title: '$isUserDmEnabled'
description: '$isUserDmEnabled will check if the user''s Direct Messages are either disabled or enabled.'
id: isUserDmEnabled
---

`$isUserDmEnabled` will check if the user's Direct Messages are either disabled or enabled.

## प्रोयोग

```php
$isUserDmEnabled[userID]
```

## पैरामीटर्स

| फील्ड  | टाइप    | डिस्क्रिप्शन                                                      | चाहिए |
| ------ | ------- | ----------------------------------------------------------------- |:-----:|
| userID | integer | ID of the user you want to check if their dms are enabled or not. | true  |

## ट्रू (हा)

This will return either `true` or `false` depending on if your Direct Messages are enabled or disabled:

```javascript
bot.command({
    name: 'isUserDmEnabled',
    code: `
  $isUserDmEnabled[$authorID]
  `
});
```
