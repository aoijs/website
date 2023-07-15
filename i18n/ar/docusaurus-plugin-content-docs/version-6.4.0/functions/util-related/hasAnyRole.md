---
title: '$hasAnyRole'
description: '$hasAnyRole will check if the provided user has any of the roles listed in the roles argument.'
id: hasAnyRole
---

`$hasAnyRole` will check if the provided user has any of the roles listed in the roles argument.

## الاستخدام

```php
$hasAnyRole[guildID;userID;...roles]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                    | مطلوب |
| -------- | ------- | ----------------------------------------------- |:-----:|
| guildID  | Integer | ID of the guild where the roles are present in. | true  |
| userID   | Integer | ID of the user.                                 | true  |
| ...roles | Integer | The roles that will be checked for.             | true  |

## مثال

This will return `true` when the user has any of the listed roles:

```javascript
bot.command({
    name: 'hasAnyRole',
    code: `
  $hasAnyRole[$guildID;$authorID;$findRole[Owner];$findRole[Admin]]
  `
});
```
