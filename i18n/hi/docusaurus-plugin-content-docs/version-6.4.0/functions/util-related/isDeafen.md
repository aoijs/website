---
title: '$isDeafen'
description: '$isDeafen will check if a certain user is deafened or not.'
id: isDeafen
---

`$isDeafen` will check if a certain user is deafened or not.

## प्रोयोग

```php
$isDeafen[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                              |    चाहिए     |
| -------- | ------- | --------------------------------------------------------- |:------------:|
| userID?  | integer | User ID you want to check if they're deafened,            | असत्य (नहीं) |
| guildID? | integer | The guild ID where you want to check if they're deafened. | असत्य (नहीं) |

## ट्रू (हा)

This will return `false` or `true` depending on if you're currently deafened or not:

```javascript
bot.command({
    name: 'isDeafen',
    code: `
  $isDeafen[$authorID;$guildID]
  `
});
```
