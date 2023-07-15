---
title: '$getBanReason'
description: '$getBanReason will return a ban reason of an specific user.'
id: getBanReason
---

`$getBanReason` will return a ban reason of an specific user.

## الاستخدام

```php
$getBanReason[guildID?;userID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                 | مطلوب |
| -------- | ------- | ------------------------------------------------------------ |:-----:|
| guildID? | Integer | The guild ID.                                                | false |
| userID?  | Integer | The user ID of the user you want to check the ban reason of. | false |

## مثال

This will return the ban reason of whoever you'd like:

```javascript
bot.command({
    name: 'getBanReason',
    code: `
  $getBanReason[$guildID;userID] 
  ` // make sure to replace "userID" with an actual user ID
});
```