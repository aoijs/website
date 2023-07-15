---
title: '$guildAvailable'
description: '$guildAvailable will return if the given guild is available on Discord.'
id: guildAvailable
---

`$guildAvailable` will return if the given guild is available on Discord.

## प्रोयोग

```php
$guildAvailable[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return `true` or `false` depending on if the guild is available:

```javascript
bot.command({
    name: 'guildAvailable',
    code: `
  $guildAvailable[$guildID]
  `
});
```
