---
title: '$guildBanner'
description: '$guildBanner will return the guild banner of a given guild.'
id: guildBanner
---

`$guildBanner` will return the guild banner of a given guild.

## الاستخدام

```php
$guildBanner[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

## مثال

This will return your guild banner (if unlocked and using):

```javascript
bot.command({
    name: 'guildBanner',
    code: `
  $guildBanner[$guildID]
  `
});
```
