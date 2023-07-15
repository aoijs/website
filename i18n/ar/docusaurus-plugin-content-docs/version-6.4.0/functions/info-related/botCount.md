---
title: '$guildBotCount'
description: '$guildBotCount will return the amount of Bots in your guild.'
id: guildBotCount
---

`$guildBotCount` will return the amount of Bots in your guild.

## الاستخدام

```php
$guildBotCount[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                   | مطلوب |
| -------- | ------- | -------------------------------------------------------------- |:-----:|
| guildID? | Integer | Guild ID of the guild you want to retrieve the amount of bots. | false |

## مثال

This will return the amount of bots in your guild:

```javascript
bot.command({
    name: 'guildBotCount',
    code: `
  $guildBotCount
  `
});
```