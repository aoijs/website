---
title: '$guildSplash'
description: '$guildSplash will return a guild''s invite background (if unlocked).'
id: guildSplash
---

`$guildSplash` will return a guild's invite background (if unlocked).

## प्रोयोग

```php
$guildSplash[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the guild's invite background (if unlocked):

```javascript
bot.command({
    name: 'guildSplash',
    code: `
  $guildSplash[$guildID]
  `
});
```
