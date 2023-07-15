---
title: '$username'
description: '$username will return a user''s username.'
id: username
---

`$username` will return a user's username.

## الاستخدام

```php
$username[userID?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين | مطلوب |
| ------- | ------- | ------------ |:-----:|
| userID? | Integer | The user ID. | false |

## مثال

This will return your username:

```javascript
bot.command({
    name: 'username',
    code: `
  $username[$authorID]
  `
});
```
