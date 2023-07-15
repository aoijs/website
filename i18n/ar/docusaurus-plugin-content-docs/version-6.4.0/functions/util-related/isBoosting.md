---
title: '$isBoosting'
description: '$isBoosting will check if the given user is boosting the given guild.'
id: isBoosting
---

`$isBoosting` will check if the given user is boosting the given guild.

## الاستخدام

```php
$isBoosting[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                   | مطلوب |
| -------- | ------- | ---------------------------------------------- |:-----:|
| userID?  | Integer | User ID to check if they're boosting.          | false |
| guildID? | Integer | The guild ID of where they boosted the server. | false |

## مثال

This will return `false` or `true` depending on if you boosted this server:

```javascript
bot.command({
    name: 'isBoosting',
    code: `
  $isBoosting[$authorID;$guildID]
  `
});
```
