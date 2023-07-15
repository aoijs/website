---
title: '$userExists'
description: '$userExists will check if a given user exists.'
id: userExists
---

`$userExists` will check if a given user exists.

## الاستخدام

```php
$userExists[userID?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين | مطلوب |
| ------- | ------- | ------------ |:-----:|
| userID? | Integer | The user ID. | false |

## مثال

This will return either `true` or `false` depending on if the user exists, in this example below it will return `true` as you exist as Discord user:

```javascript
bot.command({
    name: 'userExists',
    code: `
  $userExists[$authorID]
  `
});
```
