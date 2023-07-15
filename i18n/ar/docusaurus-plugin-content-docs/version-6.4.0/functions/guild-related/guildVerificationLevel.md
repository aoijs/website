---
title: '$guildVerificationLevel'
description: '$guildVerificationLevel will return the guild''s verification level.'
id: guildVerificationLevel
---

`$guildVerificationLevel` will return the guild's verification level.

## الاستخدام

```php
$guildVerificationLevel[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

| النوع |         |
| ----- | ------- |
| 0     | None    |
| 1     | Low     |
| 2     | Medium  |
| 3     | High    |
| 4     | Highest |

## مثال

This will return the guild's verification Level:

```javascript
bot.command({
    name: 'guildVerificationLevel',
    code: `
  $guildVerificationLevel[$guildID]
  `
});
```
