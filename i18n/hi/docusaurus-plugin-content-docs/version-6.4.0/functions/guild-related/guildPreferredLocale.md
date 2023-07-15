---
title: '$guildPreferredLocale'
description: '$guildPreferredLocale will return a guild''s set locale.'
id: guildPreferredLocale
---

`$guildPreferredLocale` will return a guild's set locale.

## प्रोयोग

```php
$guildPreferredLocale[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the guild's preferred locale:

```javascript
bot.command({
    name: 'guildPreferredLocale',
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
