---
title: $addTimestamp
description: '$addTimestamp добавит метку времени для встраивания.'
id: addTimestamp
---

`$addTimestamp` добавит метку времени для встраивания.

## Использование

```php
$addTimestamp[ms?]
```

## Параметры

| Название | Nbg   | Описание       | Нужно |
| -------- | ----- | -------------- |:-----:|
| мс       | целое | Эпоха времени. | ложь  |

## Пример(ы)

Это создаст вставку с отметкой времени и описанием:

```javascript
bot.command({
    name: 'addTimestamp',
    code: `
  $description[Hello!]
  $addTimestamp
  `
});
```
