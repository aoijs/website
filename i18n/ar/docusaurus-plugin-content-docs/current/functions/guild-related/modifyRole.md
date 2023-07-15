---
title: '$modifyRole'
description: '$modifyRole will modify a given role.'
id: modifyRole
---

`$modifyRole` will modify a given role.

## الاستخدام

```php
$modifyRole[guildID;roleID;...data]
```

## البارامترات

| Field   | النوع          | الديسكبربشين                                  | مطلوب |
| ------- | -------------- | --------------------------------------------- |:-----:|
| guildID | Integer        | The guild ID of where the role is located in. | true  |
| roleID  | Integer        | The role ID to modify.                        | true  |
| ...data | string, object | New Role Data.                                | true  |

## مثال

This will edit a existing role / change its name to "Awesome!":

```javascript
bot.command({
    name: 'modifyRole',
    code: `
  $modifyRole[$guildID;roleID;{
    "name": "Awesome!"
  }]
  `
});
```