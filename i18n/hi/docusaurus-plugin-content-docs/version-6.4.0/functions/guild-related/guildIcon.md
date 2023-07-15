---
title: '$guildIcon'
description: '$guildIcon will return the guild''s icon.'
id: guildIcon
---

`$guildIcon` will return the guild's icon.

## प्रोयोग

```php
$guildIcon[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the icon of the guild:

```javascript
bot.command({
    name: 'guildIcon',
    code: `
  $guildIcon[$guildID]
  `
});
```
