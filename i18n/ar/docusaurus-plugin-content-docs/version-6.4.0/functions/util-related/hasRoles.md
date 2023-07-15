---
title: '$hasRoles'
description: '$hasRoles check if the provided user has the roles listed in the roles argument.'
id: hasRoles
---

`$hasRoles` check if the provided user has the roles listed in the roles argument.

## الاستخدام

```php
$hasRoles[guildID;userID;...roles]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                    | مطلوب |
| -------- | ------- | ----------------------------------------------- |:-----:|
| guildID  | Integer | ID of the guild where the roles are present in. | true  |
| userID   | Integer | ID of the user which has the roles.             | true  |
| ...roles | Integer | The roles that will be checked for.             | true  |

## مثال

This will return `true` when the user has the listed roles:

```javascript
bot.command({
    name: 'hasRoles',
    code: `
  $hasRoles[$guildID;$authorID;$findRole[Owner]]
  `
});
```
