---
title: '$rolePerms'
description: '$rolePerms will return all given permissions of a role.'
id: rolePerms
---

`$rolePerms` will return all given permissions of a role.

## प्रोयोग

```php
$rolePerms[roleID;sep?;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                    |    चाहिए     |
| -------- | ------- | ----------------------------------------------- |:------------:|
| roleID   | integer | The role ID.                                    |     true     |
| sep?     | integer | Separator to separate multiple returned values. | असत्य (नहीं) |
| guildID? | integer | The guild ID.                                   | असत्य (नहीं) |

## ट्रू (हा)

This will return the permissions for the `@everyone` role:

```javascript
bot.command({
    name: 'rolePerms',
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
