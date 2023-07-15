---
title: '$onlyForRoles'
description: '$onlyForRoles will check if the user who executed the command has any of the listed roles and return a error message if not.'
id: onlyForRoles
---

`$onlyForRoles` will check if the user who executed the command has any of the listed roles and return a error message if not.

## प्रोयोग

```php
$onlyForRoles[...roleIds;error]
```

## पैरामीटर्स

| फील्ड      | टाइप            | डिस्क्रिप्शन                                                                         |    चाहिए     |
| ---------- | --------------- | ------------------------------------------------------------------------------------ |:------------:|
| ...roleIds | string, integer | Roles you want to limit the command to.                                              |     true     |
| error      | स्ट्रिंग        | Error to return when the command was not executed by any user with the listed roles. | असत्य (नहीं) |

## ट्रू (हा)

This will limit the command only to the listed channels:

```javascript
bot.command({
    name: "onlyForRoles",
    code: `
    Ok.
    $onlyForRoles[roleID;roleID;You can't use that command!]
    `
});
```