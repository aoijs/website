---
title: '$randomUserID'
description: '$randomUserID will return a random username.'
id: randomUserID
---

`$randomUserID` will return a random username.

## الاستخدام

```php
$randomUserID[global/guildID?]
```

## البارامترات

| Field           | النوع  | الديسكبربشين                                                             | مطلوب |
| --------------- | ------ | ------------------------------------------------------------------------ |:-----:|
| global/guildID? | string | Return a random user out of all guild or out of one specific guild only. | false |

## مثال

This will return a random user id:

```javascript
bot.command({
    name: 'randomUserID',
    code: `
  $randomUserID[global]
  `
});
```
