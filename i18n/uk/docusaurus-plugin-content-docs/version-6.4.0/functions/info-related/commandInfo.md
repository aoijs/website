---
title: '$commandInfo'
description: '$commandInfo will return the given text of a property.'
id: commandInfo
---

`$commandInfo` will return the given text of a property.

## Використання

```php
$commandInfo[name;option]
```

## Параметри

| Поле   | Тип   | Опис                   | Обов'язковий |
| ------ | ----- | ---------------------- |:------------:|
| назва  | рядок | Command name or alias. |     так      |
| option | рядок | Property to retrieve.  |     так      |

## Приклад(и)

This will return the usage (defined by added properties) of the command:

* You can add anything you'd like, for example "usage" as below.
* You can use aliases or the command name to return it's information.

```javascript
bot.command({
    name: 'commandInfo',
    aliases: ["ci", "cmdInfo"],
    usage: "commandInfo [command]",
    code: `
  Usage: $commandInfo[ci;usage]
  `
});
```