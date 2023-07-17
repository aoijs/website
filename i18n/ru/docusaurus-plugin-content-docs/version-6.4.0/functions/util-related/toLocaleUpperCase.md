---
title: $toLocaleUpperCase
description: '$toLocaleUpperCase изменит первый символ каждого слова на заглавную букву.'
id: toLocaleUpperCase
---

`$toLocaleUpperCase` изменит первый символ каждого слова на заглавную букву.

## Использование

```php
$toLocaleUpperCase[text]
```

## Параметры

| Название | Nbg    | Описание                                      | Нужно |
| -------- | ------ | --------------------------------------------- |:-----:|
| текст    | строка | Текст для изменения языка в верхнем регистре. |  да   |

## Пример(ы)

Это изменит каждый первый символ слова в верхнем регистре, в этом случае он вернет `Здравствуйте, я счастлив.`:

```javascript
bot.command({
    name: "toLocaleUpperCase",
    code: `
    $toLocaleUpperCase[hello, i'm happy.]
    «
});
```