---
title: '$guildBotCount'
description: '$guildBotCount will return the amount of Bots in your guild.'
id: guildBotCount
---

`$guildBotCount` will return the amount of Bots in your guild.

## प्रोयोग

```php
$guildBotCount[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                   |    चाहिए     |
| -------- | ------- | -------------------------------------------------------------- |:------------:|
| guildID? | integer | Guild ID of the guild you want to retrieve the amount of bots. | असत्य (नहीं) |

## ट्रू (हा)

This will return the amount of bots in your guild:

```javascript
bot.command({
    name: 'guildBotCount',
    code: `
  $guildBotCount
  `
});
```