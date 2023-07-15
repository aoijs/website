---
title: '$lowestRole'
description: '$lowestRole will return the lowest role of a specific user.'
id: lowestRole
---

`$lowestRole` will return the lowest role of a specific user.

## الاستخدام

```php
$lowestRole[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                               | مطلوب |
| -------- | ------- | ---------------------------------------------------------- |:-----:|
| userID?  | Integer | ID of the user you want the lowest role to be returned of. | false |
| guildID? | Integer | The ID of the guild.                                       | false |

## مثال

This will return the ID of your lowest role:

```javascript
bot.command({
    name: 'lowestRole',
    code: `
  $lowestRole[$authorID;$guildID]
  `
});
```
