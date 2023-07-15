---
title: '$isMentioned'
description: '$isMentioned checks if the query contains a mention.'
id: isMentioned
---

`$isMentioned` checks if the query contains a mention.

## الاستخدام

```php
$isMentioned[query]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                                  | مطلوب |
| ----- | ------ | ------------------------------------------------------------- |:-----:|
| query | string | Where you want to check if a user/role/channel was mentioned. | true  |

## مثال

This will return `true` as you were mentioned within the message:

```javascript
bot.command({
    name: 'isMentioned',
    code: `
  $isMentioned[<@$authorID>]
  `
});
```
