---
title: '$userID'
description: '$userID will return a given user''s ID.'
id: userID
---

`$userID` will return a given user's ID.

## الاستخدام

```php
$userID[user]
```

## البارامترات

| Field | النوع          | الديسكبربشين                                                     | مطلوب |
| ----- | -------------- | ---------------------------------------------------------------- |:-----:|
| user  | string, number | The name of the user who you want the user ID to be returned of. | true  |

## مثال

This will return your user ID:

```javascript
bot.command({
    name: 'userID',
    code: `
  $userID[$username]
  `
});
```
