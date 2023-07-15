---
title: '$isVerified'
description: '$isVerified checks if the given guild is verified by Discord.'
id: isVerified
---

`$isVerified` checks if the given guild is verified by Discord.

## الاستخدام

```php
$isVerified[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                            | مطلوب |
| -------- | ------- | ----------------------------------------------------------------------- |:-----:|
| guildID? | Integer | The ID of the guild where you want to check its verification status of. | false |

## مثال

This will check if your server is verified and return either `true` or `false`:

```javascript
bot.command({
    name: 'isVerified',
    code: `
  $isVerified[$guildID]
  `
});
```
