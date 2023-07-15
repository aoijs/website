---
title: '$guildNames'
description: '$guildNames will return the guide names your bot is in.'
id: guildNames
---

`$guildNames` will return the guide names your bot is in.

## प्रोयोग

```php
$guildNames[sep?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                    |    चाहिए     |
| ----- | -------- | ----------------------------------------------- |:------------:|
| sep?  | स्ट्रिंग | Separator to separate multiple returned values. | असत्य (नहीं) |

## ट्रू (हा)

This will return the names of the guilds your bot is in and separate it by a comma:

```javascript
bot.command({
    name: 'guildNames',
    code: `
  $guildNames[, ]
  `
});
```
