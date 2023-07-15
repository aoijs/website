---
title: '$guildExists'
description: '$guildExists will check if the given guild exists.'
id: guildExists
---

`$guildExists` will check if the given guild exists.

## الاستخدام

```php
$guildExists[guildId]
```

## البارامترات

| Field   | النوع   | الديسكبربشين | مطلوب |
| ------- | ------- | ------------ |:-----:|
| guildId | Integer | Guild ID.    | true  |

## مثال

This will return `true` your guild exists:

```javascript
bot.command({
    name: 'guildExists',
    code: `
  $guildExists[$guildID]
  `
});
```