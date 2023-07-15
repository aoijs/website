---
title: '$onlyIf'
description: '$onlyIf will check for a condition and return a error message if that condition does not match.'
id: onlyIf
---

`$onlyIf` will check for a condition and return a error message if that condition does not match.

## Використання

```php
$onlyIf[condition;error]
```

## Параметри

| Поле      | Тип   | Опис                                           | Обов'язковий |
| --------- | ----- | ---------------------------------------------- |:------------:|
| condition | рядок | Condition to check.                            |     так      |
| error     | рядок | Error to return when condition does not match. |      ні      |

## Приклад(и)

This will return the error message as 5 does not equal to 3:

```javascript
bot.command({
    name: "onlyIf",
    code: `
    Ok.
    $onlyIf[5==3;That's wrong!]
    `
});
```