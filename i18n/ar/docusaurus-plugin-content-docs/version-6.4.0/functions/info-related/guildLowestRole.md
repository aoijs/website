---
title: '$guildLowestRole'
description: '$guildLowestRole will return the lowest role of a specific guild.'
id: guildLowestRole
---

`$guildLowestRole` will return the lowest role of a specific guild.

## الاستخدام

```php
$guildLowestRole[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the ID of the lowest guild role:

```javascript
bot.command({
    name: 'guildLowestRole',
    code: `
  $guildLowestRole[$guildID]
  `
});
```
