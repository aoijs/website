---
title: '$guildName'
description: '$guildName will return a guild''s name.'
id: guildName
---

`$guildName` will return a guild's name.

## प्रोयोग

```php
$guildName[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the name of your guild:

```javascript
bot.command({
    name: 'guildName',
    code: `
  $guildName[$guildID]
  `
});
```
