---
title: '$guildBoostLevel'
description: '$guildBoostLevel will return the guild''s boost level.'
id: guildBoostLevel
---

`$guildBoostLevel` will return the guild's boost level.

## الاستخدام

```php
$guildBoostLevel[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the boost level of a specific guild:

```javascript
bot.command({
    name: 'guildBoostLevel',
    code: `
  $guildBoostLevel[$guildID]
  `
});
```
