---
title: '$guildID'
description: '$guildID will return the guild ID of a given guild.'
id: guildID
---

`$guildID` will return the guild ID of a given guild.

## प्रोयोग

```php
$guildID[name?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                      |    चाहिए     |
| ----- | -------- | ------------------------------------------------- |:------------:|
| name? | स्ट्रिंग | The guild name you want the ID to be returned of. | असत्य (नहीं) |

## ट्रू (हा)

This will return your guild ID:

```javascript
bot.command({
    name: 'guildID',
    code: `
  $guildID
  `
});
```
