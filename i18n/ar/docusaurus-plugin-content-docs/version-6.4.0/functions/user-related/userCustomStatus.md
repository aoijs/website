---
title: '$userCustomStatus'
description: '$userCustomStatus will return a user''s custom status.'
id: userCustomStatus
---

`$userCustomStatus` will return a user's custom status.

## الاستخدام

```php
$userCustomStatus[guildID?;userID?;option?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                                                                                          | مطلوب |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |:-----:|
| guildID? | Integer | The role ID.                                                                                                                                          | false |
| userID?  | Integer | The user ID.                                                                                                                                          | false |
| option?  | string  | Which part of the status will be returned <br /> 1. **state** (default) - returns the status text <br /> 2. **emoji** - returns the emoji | false |

## مثال

This will return your status text if you have any:

```javascript
bot.command({
    name: 'userCustomStatus',
    code: `
  $userCustomStatus[$authorID;$guildID;state]
  `
});
```
