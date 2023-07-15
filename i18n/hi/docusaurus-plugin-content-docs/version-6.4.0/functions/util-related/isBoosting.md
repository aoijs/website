---
title: '$isBoosting'
description: '$isBoosting will check if the given user is boosting the given guild.'
id: isBoosting
---

`$isBoosting` will check if the given user is boosting the given guild.

## प्रोयोग

```php
$isBoosting[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                   |    चाहिए     |
| -------- | ------- | ---------------------------------------------- |:------------:|
| userID?  | integer | User ID to check if they're boosting.          | असत्य (नहीं) |
| guildID? | integer | The guild ID of where they boosted the server. | असत्य (नहीं) |

## ट्रू (हा)

This will return `false` or `true` depending on if you boosted this server:

```javascript
bot.command({
    name: 'isBoosting',
    code: `
  $isBoosting[$authorID;$guildID]
  `
});
```
