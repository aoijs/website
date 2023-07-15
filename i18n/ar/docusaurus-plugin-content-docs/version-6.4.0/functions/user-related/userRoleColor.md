---
title: '$userRoleColor'
description: '$userRoleColor will return the role color of a user''s highest assigned role.'
id: userRoleColor
---

`$userRoleColor` will return the role color of a user's highest assigned role.

## الاستخدام

```php
$userRoleColor[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| userID?  | Integer | The user ID.  | false |
| guildID? | Integer | The guild ID. | false |

## مثال

This will return the Color of your highest role:

```javascript
bot.command({
    name: 'userRoleColor',
    code: `
  $userRoleColor[$authorID;$guildID]
  `
});
```
