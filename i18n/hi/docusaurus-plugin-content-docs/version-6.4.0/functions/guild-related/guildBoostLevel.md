---
title: '$guildBoostLevel'
description: '$guildBoostLevel will return the guild''s boost level.'
id: guildBoostLevel
---

`$guildBoostLevel` will return the guild's boost level.

## प्रोयोग

```php
$guildBoostLevel[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the boost level of a specific guild:

```javascript
bot.command({
    name: 'guildBoostLevel',
    code: `
  $guildBoostLevel[$guildID]
  `
});
```
