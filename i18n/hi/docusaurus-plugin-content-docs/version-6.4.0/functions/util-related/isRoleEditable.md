---
title: '$isRoleEditable'
description: '$isRoleEditable will check if the role is editable.'
id: isRoleEditable
---

`$isRoleEditable` will check if the role is editable.

## प्रोयोग

```php
$isRoleEditable[roleID;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                      |    चाहिए     |
| -------- | ------- | ------------------------------------------------- |:------------:|
| roleID   | integer | ID of the role you want to check if its editable. |     true     |
| guildID? | integer | The ID of the guild where the role exists.        | असत्य (नहीं) |

## ट्रू (हा)

This will check if a role called `Owner` is editable:

```javascript
bot.command({
    name: 'isRoleEditable',
    code: `
  $isRoleEditable[$findRole[Owner];$guildID]
  `
});
```
