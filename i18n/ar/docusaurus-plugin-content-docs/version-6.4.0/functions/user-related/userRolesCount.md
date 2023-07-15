---
title: '$userRolesCount'
description: '$userRolesCount will return a user''s role count.'
id: userRolesCount
---

`$userRolesCount` will return a user's role count.

## الاستخدام

```php
$userRolesCount[userID?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| userID?  | Integer | The user ID.  | false |
| guildID? | Integer | The guild ID. | false |

## مثال

This will return the amount of roles you have assigned:

```javascript
bot.command({
    name: 'userRolesCount',
    code: `
  $userRolesCount[$authorID;$guildID]
  `
});
```
