---
title: '$userRolesCount'
description: '$userRolesCount will return a user''s role count.'
id: userRolesCount
---

`$userRolesCount` will return a user's role count.

## प्रोयोग

```php
$userRolesCount[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| userID?  | integer | The user ID.  | असत्य (नहीं) |
| guildID? | integer | The guild ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return the amount of roles you have assigned:

```javascript
bot.command({
    name: 'userRolesCount',
    code: `
  $userRolesCount[$authorID;$guildID]
  `
});
```
