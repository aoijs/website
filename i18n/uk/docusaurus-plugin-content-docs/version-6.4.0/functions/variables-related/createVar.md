---
title: '$createVar'
description: '$createVar will create a new variable.'
id: createVar
---

`$createVar` will create a new variable.

## Використання

```php
$createVar[table;...vars]
```

## Параметри

| Поле    | Тип   | Опис                     | Обов'язковий |
| ------- | ----- | ------------------------ |:------------:|
| table   | рядок | Variable table.          |     так      |
| ...vars | рядок | Variable name and value. |     так      |

## Приклад(и)

This will create a new variable with the name of "variable" and the value of "value":

```javascript
bot.command({
    name: "createVar",
    code: `
  $createVar[main;variable;value]
  `
});
```