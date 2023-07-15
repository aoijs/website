---
title: '$onlyPerms'
description: '$onlyPerms will check if the user has the listed permission and return a error message if not.'
id: onlyPerms
---

`$onlyPerms` will check if the user has the listed permission and return a error message if not.

## الاستخدام

```php
$onlyPerms[...perms;error]
```

## البارامترات

| Field    | النوع  | الديسكبربشين                                                  | مطلوب |
| -------- | ------ | ------------------------------------------------------------- |:-----:|
| ...perms | string | Permission the user requires.                                 | true  |
| error    | string | Error to return when the user has not the listed permissions. | true  |

You can find all permissions __[here](../../guides/client/2permissionsintents.md)__.

## مثال

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