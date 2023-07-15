---
title: '$userPerms'
description: '$userPerms will return a user''s permission of a specific guild.'
id: userPerms
---

`$userPerms` will return a user's permission of a specific guild.

## प्रोयोग

```php
$userPerms[userID?;sep?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                    |    चाहिए     |
| -------- | -------- | ----------------------------------------------- |:------------:|
| userID?  | integer  | The user ID.                                    | असत्य (नहीं) |
| sep?     | स्ट्रिंग | Separator to separate multiple returned values. | असत्य (नहीं) |
| guildID? | integer  | The guild ID.                                   | असत्य (नहीं) |

## ट्रू (हा)

This will return your permissions:

```javascript
bot.command({
    name: 'userPerms',
    code: `
  $userPerms[$authorID;, ;$guildID]
  `
});
```
