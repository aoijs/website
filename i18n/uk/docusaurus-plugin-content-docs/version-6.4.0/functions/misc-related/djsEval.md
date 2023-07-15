---
title: '$djsEval'
description: '$djsEval will execute given discord.js code.'
id: djsEval
---

`$djsEval` will execute given discord.js code.

## Використання

```php
$djsEval[code;returnCode?]
```

## Параметри

| Поле        | Тип   | Опис                                                                      | Обов'язковий |
| ----------- | ----- | ------------------------------------------------------------------------- |:------------:|
| code        | рядок | Discord.js code to execute.                                               |     так      |
| returnCode? | рядок | Return code. <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will return your user ID:

```javascript
bot.command({
    name: "djsEval",
    code: `
  $djsEval[msg.author.id;true]
  `
});
```