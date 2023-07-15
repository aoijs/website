---
title: '$resetGuildVar'
description: '$resetGuildVar will set a given guild variable to its default value.'
id: resetGuildVar
---

`$resetGuildVar` will set a given guild variable to its default value.

## Використання

```php
$resetGuildVar[varname;table?]
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
    name: "resetGuildVar",
    code: `
    $resetGuildVar[Example;main]
    `
});
```