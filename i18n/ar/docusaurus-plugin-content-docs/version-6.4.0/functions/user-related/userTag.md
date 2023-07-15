---
title: '$userTag'
description: '$userTag will return a user''s username and discriminator.'
id: userTag
---

`$userTag` will return a user's username and discriminator.

## الاستخدام

```php
$userTag[userID?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين | مطلوب |
| ------- | ------- | ------------ |:-----:|
| userID? | Integer | The user ID. | false |

## مثال

This will return your username and discriminator:

```javascript
bot.command({
    name: 'userTag',
    code: `
  $userTag[$authorID]
  `
});
```
