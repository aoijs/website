---
title: '$guildSplash'
description: '$guildSplash will return a guild''s invite background (if unlocked).'
id: guildSplash
---

`$guildSplash` will return a guild's invite background (if unlocked).

## الاستخدام

```php
$guildSplash[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the guild's invite background (if unlocked):

```javascript
bot.command({
    name: 'guildSplash',
    code: `
  $guildSplash[$guildID]
  `
});
```
