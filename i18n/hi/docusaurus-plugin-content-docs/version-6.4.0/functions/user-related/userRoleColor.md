---
title: '$userRoleColor'
description: '$userRoleColor will return the role color of a user''s highest assigned role.'
id: userRoleColor
---

`$userRoleColor` will return the role color of a user's highest assigned role.

## प्रोयोग

```php
$userRoleColor[userID?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| userID?  | integer | The user ID.  | असत्य (नहीं) |
| guildID? | integer | The guild ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return the Color of your highest role:

```javascript
bot.command({
    name: 'userRoleColor',
    code: `
  $userRoleColor[$authorID;$guildID]
  `
});
```
