---
title: '$getVar'
description: '$getVar will return the value of a global variable.'
id: getVar
---

`$getVar` will return the value of a global variable

## Використання

```php
$getVar[varname;table?]
```

## Параметри

| Поле    | Тип   | Опис            | Обов'язковий |
| ------- | ----- | --------------- |:------------:|
| varname | рядок | Variable name.  |     так      |
| table?  | рядок | Variable table. |      ні      |

## Приклад(и)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getVar",
    code: `
    $getVar[Example;main]
    `
});
```