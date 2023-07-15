---
title: '$userDefaultAvatar'
description: '$userDefaultAvatar will return the given user''s default Discord User Avatar.'
id: userDefaultAvatar
---

`$userDefaultAvatar` will return the given user's default Discord User Avatar.

## الاستخدام

```php
$userDefaultAvatar[userID?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين    | مطلوب |
| ------- | ------- | --------------- |:-----:|
| userID? | Integer | اي دي المستخدم. | false |

## مثال

This will return your default Discord User Avatar:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID]
  `
});
```
