---
title: '$guildBanner'
description: '$guildBanner will return the guild banner of a given guild.'
id: guildBanner
---

`$guildBanner` will return the guild banner of a given guild.

## प्रोयोग

```php
$guildBanner[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return your guild banner (if unlocked and using):

```javascript
bot.command({
    name: 'guildBanner',
    code: `
  $guildBanner[$guildID]
  `
});
```
