---
title: '$onlyClientPerms'
description: '$onlyClientPerms will check if the bot has the listed permission and return a error message if not.'
id: onlyClientPerms
---

`$onlyClientPerms` will check if the bot has the listed permission and return a error message if not.

## Використання

```php
$onlyClientPerms[...perms;error]
```

## Параметри

| Поле     | Тип   | Опис                                                         | Обов'язковий |
| -------- | ----- | ------------------------------------------------------------ |:------------:|
| ...perms | рядок | Permission that the bot requires.                            |     так      |
| error    | рядок | Error to return when the bot has not the listed permissions. |     так      |

You can find all permissions __[here](../../guides/client/2permissionsintents.md)__.

## Приклад(и)

This will limit the command to work only when the Bot has administrator permissions:

```javascript
bot.command({
    name: "onlyClientPerms",
    code: `
    Ok.
    $onlyClientPerms[administrator;I don't have administrator permissions!]
    `
});
```
