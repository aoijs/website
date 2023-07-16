---
title: '$textSplitMap'
description: '$textSplitMap создаст цикл по всем значениям, которые хранятся в пределах $textSplit'
id: textSplitMap
---

`$textSplitMap` создаст цикл над всеми значениями, которые хранятся в пределах $textSplit.

## Использование

```php
$textSplit[awaited]
```

## Параметры

| Название | Nbg    | Описание               | Нужно |
| -------- | ------ | ---------------------- |:-----:|
| ожидал   | строка | Имя ожидаемой команды. |  да   |

## Пример(ы)

Это вернет аргументы в пределах `$textSplit` и отправит их в отдельности:

```javascript
bot.command({
    name: "textSplitMap",
    код: `
    $textSplitMap[devs]
    $textSplit[Ayaka,Leref,Ferel,Blurr;,]
    `
});

бот. waitedCommand({
    name: «devs»,
    код: `
    $message[1]
    `
});
```