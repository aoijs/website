---
title: '$guildAvailable'
description: '$guildAvailable will return if the given guild is available on Discord.'
id: guildAvailable
---

`$guildAvailable` will return if the given guild is available on Discord.

## الاستخدام

```php
$guildAvailable[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return `true` or `false` depending on if the guild is available:

```javascript
bot.command({
    name: 'guildAvailable',
    code: `
  $guildAvailable[$guildID]
  `
});
```
