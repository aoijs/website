---
title: '$userCustomStatus'
description: '$userCustomStatus will return a user''s custom status.'
id: userCustomStatus
---

`$userCustomStatus` will return a user's custom status.

## प्रोयोग

```php
$userCustomStatus[guildID?;userID?;option?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                                                          |    चाहिए     |
| -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | integer  | The role ID.                                                                                                                                          | असत्य (नहीं) |
| userID?  | integer  | The user ID.                                                                                                                                          | असत्य (नहीं) |
| option?  | स्ट्रिंग | Which part of the status will be returned <br /> 1. **state** (default) - returns the status text <br /> 2. **emoji** - returns the emoji | असत्य (नहीं) |

## ट्रू (हा)

This will return your status text if you have any:

```javascript
bot.command({
    name: 'userCustomStatus',
    code: `
  $userCustomStatus[$authorID;$guildID;state]
  `
});
```
