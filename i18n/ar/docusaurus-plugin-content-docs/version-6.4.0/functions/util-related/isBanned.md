---
title: '$isBanned'
description: '$isBanned checks if a given user is banned in a specific guild.'
id: isBanned
---

`$isBanned` checks if a given user is banned in a specific guild.

## الاستخدام

```php
$isBanned[guildID;userID]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                  | مطلوب |
| ------- | ------- | ------------------------------------------------------------- |:-----:|
| guildID | Integer | ID of the guild where to check if the user is banned or not.  | true  |
| userID  | Integer | ID of the user that will be checked if they're banned or not. | true  |

## مثال

This will return `false` as you're not banned in this guild:

```javascript
bot.command({
    name: 'isBanned',
    code: `
  $isBanned[$guildID;$authorID]
  `
});
```
