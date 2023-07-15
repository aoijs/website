---
title: '$lowestRole'
description: '$lowestRole will return the lowest role of a specific user.'
id: lowestRole
---

`$lowestRole` will return the lowest role of a specific user.

## प्रोयोग

```php
$lowestRole[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                               |    चाहिए     |
| -------- | ------- | ---------------------------------------------------------- |:------------:|
| userID?  | integer | ID of the user you want the lowest role to be returned of. | असत्य (नहीं) |
| guildID? | integer | The ID of the guild.                                       | असत्य (नहीं) |

## ट्रू (हा)

This will return the ID of your lowest role:

```javascript
bot.command({
    name: 'lowestRole',
    code: `
  $lowestRole[$authorID;$guildID]
  `
});
```
