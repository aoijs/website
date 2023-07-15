---
title: '$isVariableExist'
description: '$isVariableExist checks if a given variable exists in a given table.'
id: isVariableExist
---

`$isVariableExist` checks if a given variable exists in a given table.

## Використання

```php
$isVariableExist[variable;table?]
```

## Параметри

| Поле     | Тип   | Опис               | Обов'язковий |
| -------- | ----- | ------------------ |:------------:|
| variable | рядок | The variable name. |     так      |
| table?   | рядок | The table name.    |      ні      |

## Приклад(и)

This will either true or false depending on if a variable called `Example` exists:

```javascript
bot.command({
    name: 'isVariableExist',
    code: `
  $isVariableExist[Example;main]
  `
});
```
