---
title: '$guildMFALevel'
description: '$guildMFALevel will return the guild''s MFA Level.'
id: guildMFALevel
---

`$guildMFALevel` will return the guild's MFA Level.

## الاستخدام

```php
$guildMFALevel[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين         | مطلوب |
| -------- | ------- | -------------------- |:-----:|
| guildID? | Integer | The ID of the guild. | false |

| النوع |                                                               |
| ----- | ------------------------------------------------------------- |
| 0     | Guild has MFA/2FA requirement for moderation actions disabled |
| 1     | Guild has MFA/2FA requirement for moderation actions          |

## مثال

This will return the guild's MFA Level:

```javascript
bot.command({
    name: 'guildMFALevel',
    code: `
  $guildMFALevel[$guildID]
  `
});
```
