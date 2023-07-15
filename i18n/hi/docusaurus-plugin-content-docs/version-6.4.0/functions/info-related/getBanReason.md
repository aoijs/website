---
title: '$getBanReason'
description: '$getBanReason will return a ban reason of an specific user.'
id: getBanReason
---

`$getBanReason` will return a ban reason of an specific user.

## प्रोयोग

```php
$getBanReason[guildID?;userID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                 |    चाहिए     |
| -------- | ------- | ------------------------------------------------------------ |:------------:|
| guildID? | integer | The guild ID.                                                | असत्य (नहीं) |
| userID?  | integer | The user ID of the user you want to check the ban reason of. | असत्य (नहीं) |

## ट्रू (हा)

This will return the ban reason of whoever you'd like:

```javascript
bot.command({
    name: 'getBanReason',
    code: `
  $getBanReason[$guildID;userID] 
  ` // make sure to replace "userID" with an actual user ID
});
```