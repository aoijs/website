---
title: '$deleteVar'
description: '$deleteVar will delete a given variable.'
id: deleteVar
---

`$deleteVar` will delete a given variable.

## Використання

```php
$deleteVar[variable;id;table?]
```

## Параметри

| Поле     | Тип            | Опис                                          | Обов'язковий |
| -------- | -------------- | --------------------------------------------- |:------------:|
| variable | string, number | Variable name.                                |     так      |
| id       | integer        | ID of the variable to delete ( userID etc. ). |     так      |
| table?   | рядок          | Variable table.                               |      ні      |

## Приклад(и)

This will delete a variable called "Test":

```javascript
bot.command({
    name: "deleteVar",
    code: `
  $deleteVar[Test;$authorID;main]
  `
});
```