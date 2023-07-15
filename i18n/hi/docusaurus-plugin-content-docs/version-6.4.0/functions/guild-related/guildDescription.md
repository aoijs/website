---
title: '$guildDescription'
description: '$guildDescription will return the guild''s description.'
id: guildDescription
---

`$guildDescription` will return the guild's description.

## प्रोयोग

```php
$guildDescription[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन         |    चाहिए     |
| -------- | ------- | -------------------- |:------------:|
| guildID? | integer | The ID of the guild. | असत्य (नहीं) |

## ट्रू (हा)

This will return the description of a specific guild:

```javascript
bot.command({
    name: 'guildDescription',
    code: `
  $guildDescription[$guildID]
  `
});
```
