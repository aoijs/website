---
title: '$rolePerms'
description: '$rolePerms will return all given permissions of a role.'
id: rolePerms
---

`$rolePerms` will return all given permissions of a role.

## الاستخدام

```php
$rolePerms[roleID;sep?;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                    | مطلوب |
| -------- | ------- | ----------------------------------------------- |:-----:|
| roleID   | Integer | The role ID.                                    | true  |
| sep?     | Integer | Separator to separate multiple returned values. | false |
| guildID? | Integer | The guild ID.                                   | false |

## مثال

This will return the permissions for the `@everyone` role:

```javascript
bot.command({
    name: 'rolePerms',
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
