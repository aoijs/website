---
title: '$guildBoostCount'
description: '$guildBoostCount will return the guild''s boost count.'
id: guildBoostCount
---

`$guildBoostCount` will return the guild's boost count.

## الاستخدام

```php
$guildBoostCount[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the amount of boosts a specific guild has:

```javascript
bot.command({
    name: 'guildBoostCount',
    code: `
  $guildBoostCount[$guildID]
  `
});
```
