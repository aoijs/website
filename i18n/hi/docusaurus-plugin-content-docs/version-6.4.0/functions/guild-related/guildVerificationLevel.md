---
title: '$guildVerificationLevel'
description: '$guildVerificationLevel will return the guild''s verification level.'
id: guildVerificationLevel
---

`$guildVerificationLevel` will return the guild's verification level.

## प्रोयोग

```php
$guildVerificationLevel[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

| टाइप |         |
| ---- | ------- |
| 0    | None    |
| 1    | Low     |
| 2    | Medium  |
| 3    | High    |
| 4    | Highest |

## ट्रू (हा)

This will return the guild's verification Level:

```javascript
bot.command({
    name: 'guildVerificationLevel',
    code: `
  $guildVerificationLevel[$guildID]
  `
});
```
