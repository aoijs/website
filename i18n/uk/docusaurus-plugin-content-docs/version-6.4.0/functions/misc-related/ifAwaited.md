---
title: '$ifAwaited'
description: '$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.'
id: ifAwaited
---

`$ifAwaited` will check a condition and executed an awaited command depending on the condition being true or false.

## Використання

```php
$ifAwaited[condition;true;false?]
```

## Параметри

| Поле      | Тип   | Опис                                    | Обов'язковий |
| --------- | ----- | --------------------------------------- |:------------:|
| condition | рядок | Condition to check                      |     так      |
| так       | рядок | What to do when the condition is true.  |     так      |
| false?    | рядок | What to do when the condition is false. |      ні      |

#### Valid Mathematical Operators

| Operator | Mathematical Expression  |
| -------- | ------------------------ |
| ==       | equal to                 |
| !=       | not equal to             |
| <=       | less than or equal to    |
| \>=     | greater than or equal to |
| \>      | greater than             |
| <        | less than                |
| \       | \|     | logical OR     |
| &&       | logical conjunction      |

## Приклад(и)

This will execute the `awaitedCommand` awaited command as the statement is true:

```javascript
bot.command({
    name: "ifAwaited",
    code: `
    $ifAwaited[1==1;{execute:awaitedCommand}]
    `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
    $sendMessage[That's true!;false]
    `
});
```