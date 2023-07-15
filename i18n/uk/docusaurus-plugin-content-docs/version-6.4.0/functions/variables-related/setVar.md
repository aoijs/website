---
title: '$setVar'
description: '$setVar will change the value of a given global variable.'
id: setVar
---

`$setVar` will change the value of a given global variable.

## Використання

```php
$setVar[varname;value;table?]
```

## Параметри

| Поле    | Тип   | Опис                | Обов'язковий |
| ------- | ----- | ------------------- |:------------:|
| Varname | рядок | Variable name.      |     так      |
| Value   | рядок | New Variable value. |     так      |
| Table?  | рядок | Variable table.     |      ні      |

## Приклад(и)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setVar",
    code: `
    $setVar[Example;This is a value;main]
    `
});
```