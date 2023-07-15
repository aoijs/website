---
title: '$guildFeatures'
description: '$guildFeatures will return unlocked guild features.'
id: guildFeatures
---

`$guildFeatures` will return unlocked guild features.

## प्रोयोग

```php
$guildFeatures[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the unlocked guild features of a guild:

```javascript
bot.command({
    name: 'guildFeatures',
    code: `
  $guildFeatures[$guildID;true]
  `
});
```
