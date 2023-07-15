---
title: '$vanityUses'
description: '$vanityUses will return the uses of a vanity URL.'
id: vanityUses
---

`$vanityUses` will return the uses of a vanity URL.

## प्रोयोग

```php
$vanityUses[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| guildID? | integer | The guild ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return the uses of your guild's vanity URL, if you have one:

```javascript
bot.command({
    name: 'vanityUses',
    code: `
  $vanityUses[$guildID]
  `
});
```
