---
title: '$guildLowestRole'
description: '$guildLowestRole will return the lowest role of a specific guild.'
id: guildLowestRole
---

`$guildLowestRole` will return the lowest role of a specific guild.

## प्रोयोग

```php
$guildLowestRole[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the ID of the lowest guild role:

```javascript
bot.command({
    name: 'guildLowestRole',
    code: `
  $guildLowestRole[$guildID]
  `
});
```
