---
title: $splitText
description: '$splitText возвращает значение $textSplit в зависимости от заданного индекса.'
id: splitText
---

`$splitText` возвращает значение $textSplit в зависимости от заданного индекса.

## Использование

```php
$splitText[index]
```

## Параметры

| Название | Nbg   | Описание                         | Нужно |
| -------- | ----- | -------------------------------- |:-----:|
| индекс   | целое | Индекс `$textSplit` содержимого. |  да   |

## Пример(ы)

Это вернет `aoi.js` , поскольку это второй аргумент `$textSplit`:

```javascript
bot.command({
    name: 'splitText',
    code: `
  $splitText[2]
  $textSplit[@akarui/aoi.db//aoi.js;//]
  `
});
```