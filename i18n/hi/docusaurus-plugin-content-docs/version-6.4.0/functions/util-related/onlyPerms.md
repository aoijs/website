---
title: '$onlyPerms'
description: '$onlyPerms will check if the user has the listed permission and return a error message if not.'
id: onlyPerms
---

`$onlyPerms` will check if the user has the listed permission and return a error message if not.

## प्रोयोग

```php
$onlyPerms[...perms;error]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                  | चाहिए |
| -------- | -------- | ------------------------------------------------------------- |:-----:|
| ...perms | स्ट्रिंग | Permission the user requires.                                 | true  |
| error    | स्ट्रिंग | Error to return when the user has not the listed permissions. | true  |

You can find all permissions __[here](../../guides/client/2permissionsintents.md)__.

## ट्रू (हा)

This will limit the command to work only when the user has administrator permissions:

```javascript
bot.command({
    name: "onlyPerms",
    code: `
    Ok.
    $onlyPerms[administrator;You don't have administrator permissions!]
    `
});
```