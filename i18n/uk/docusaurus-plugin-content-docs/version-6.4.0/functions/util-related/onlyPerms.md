---
title: '$onlyPerms'
description: '$onlyPerms will check if the user has the listed permission and return a error message if not.'
id: onlyPerms
---

`$onlyPerms` will check if the user has the listed permission and return a error message if not.

## Використання

```php
$onlyPerms[...perms;error]
```

## Параметри

| Поле     | Тип   | Опис                                                          | Обов'язковий |
| -------- | ----- | ------------------------------------------------------------- |:------------:|
| ...perms | рядок | Permission the user requires.                                 |     так      |
| error    | рядок | Error to return when the user has not the listed permissions. |     так      |

You can find all permissions __[here](../../guides/Client/2permissionsintents.md)__.

## Приклад(и)

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