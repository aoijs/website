---
title: $reverse
description: '$reverse изменит данный текст.'
id: reverse
---

`$reverse` обратит заданный текст.

## Использование

```php
$reverse[text]
```

## Параметры

| Название | Nbg    | Описание                           | Нужно |
| -------- | ------ | ---------------------------------- |:-----:|
| текст    | строка | Текст, который вы хотите отменить. |  да   |

## Пример(ы)

Это будет читать следующий текст:

```javascript
bot.command({
    name: 'reverse',
    code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```