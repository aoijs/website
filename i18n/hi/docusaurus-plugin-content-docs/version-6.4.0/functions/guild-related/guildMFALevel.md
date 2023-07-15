---
title: '$guildMFALevel'
description: '$guildMFALevel will return the guild''s MFA Level.'
id: guildMFALevel
---

`$guildMFALevel` will return the guild's MFA Level.

## प्रोयोग

```php
$guildMFALevel[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

| टाइप |                                                               |
| ---- | ------------------------------------------------------------- |
| 0    | Guild has MFA/2FA requirement for moderation actions disabled |
| 1    | Guild has MFA/2FA requirement for moderation actions          |

## ट्रू (हा)

This will return the guild's MFA Level:

```javascript
bot.command({
    name: 'guildMFALevel',
    code: `
  $guildMFALevel[$guildID]
  `
});
```
