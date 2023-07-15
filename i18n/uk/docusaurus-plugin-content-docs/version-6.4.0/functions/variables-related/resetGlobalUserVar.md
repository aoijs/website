---
title: '$resetGlobalUserVar'
description: '$resetGlobalUserVar will set a given global user variable to its default value.'
id: resetGlobalUserVar
---

`$resetGlobalUserVar` will set a given global user variable to its default value.

## Використання

```php
$resetGlobalUserVar[varname;table?]
```

## Параметри

| Поле    | Тип   | Опис            | Обов'язковий |
| ------- | ----- | --------------- |:------------:|
| varname | рядок | Variable name.  |     так      |
| table?  | рядок | Variable table. |      ні      |

## Приклад(и)

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetGlobalUserVar",
    code: `
    $resetGlobalUserVar[Example;main]
    `
});
```