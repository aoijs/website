---
title: '$userPerms'
description: '$userPerms will return a user''s permission of a specific guild.'
id: userPerms
---

`$userPerms` will return a user's permission of a specific guild.

## الاستخدام

```php
$userPerms[userID?;sep?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                    | مطلوب |
| -------- | ------- | ----------------------------------------------- |:-----:|
| userID?  | Integer | The user ID.                                    | false |
| sep?     | string  | Separator to separate multiple returned values. | false |
| guildID? | Integer | The guild ID.                                   | false |

## مثال

This will return your permissions:

```javascript
bot.command({
    name: 'userPerms',
    code: `
  $userPerms[$authorID;, ;$guildID]
  `
});
```
