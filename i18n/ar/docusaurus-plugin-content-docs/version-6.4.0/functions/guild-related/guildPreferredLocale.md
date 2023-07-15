---
title: '$guildPreferredLocale'
description: '$guildPreferredLocale will return a guild''s set locale.'
id: guildPreferredLocale
---

`$guildPreferredLocale` will return a guild's set locale.

## الاستخدام

```php
$guildPreferredLocale[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the guild's preferred locale:

```javascript
bot.command({
    name: 'guildPreferredLocale',
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
