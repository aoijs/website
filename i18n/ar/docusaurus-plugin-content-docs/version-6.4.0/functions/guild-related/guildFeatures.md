---
title: '$guildFeatures'
description: '$guildFeatures will return unlocked guild features.'
id: guildFeatures
---

`$guildFeatures` will return unlocked guild features.

## الاستخدام

```php
$guildFeatures[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return the unlocked guild features of a guild:

```javascript
bot.command({
    name: 'guildFeatures',
    code: `
  $guildFeatures[$guildID;true]
  `
});
```
