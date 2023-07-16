---
title: $onlyIfMessageContains
description: '$onlyIfMessageContains перевірятиме чи повідомлення містить даний текст, а якщо не повернуть повідомлення про помилку.'
id: onlyIfMessageContains
---

`$onlyIfMessageContains` перевірить чи повідомлення містить цей текст, а якщо не повернуте повідомлення.

## Використання

```php
$onlyIfMessageContains[content;...text;error]
```

## Параметри

| Поле    | Тип   | Опис                                       | Обов'язковий |
| ------- | ----- | ------------------------------------------ |:------------:|
| зміст   | рядок | Повідомлення, яке має містити даний текст. |     так      |
| текст   | рядок | Текст для перевірки у повідомленні.        |     так      |
| помилка | рядок | Помилка повернення.                        |     так      |

## Приклад(и)

Це поверне повідомлення про помилку як про "aoi.js" не відображається в "Привіт!":

```javascript
bot.command({
    name: "onlyIfMessageContains",
    код: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    `
});
```