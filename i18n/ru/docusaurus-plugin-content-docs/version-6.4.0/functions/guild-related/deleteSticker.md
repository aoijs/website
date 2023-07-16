---
title: '$deleteSticker'
description: '$deleteSticker удалит указанный стикер.'
id: deleteSticker
---

`$deleteSticker` удалит указанный стикер.

## Использование

```php
$deleteSticker[guildID;sticker]
```

## Параметры

| Название   | Nbg    | Описание                                | Нужно |
| ---------- | ------ | --------------------------------------- |:-----:|
| ID гильдии | целое  | ID гильдии, в которой находится стикер. |  да   |
| стикер     | строка | Имя стикера.                            |  да   |

## Пример(ы)

Это удалит стикер вашей гильдии ( убедитесь, что вы указали фактическое имя стикера):

```javascript
bot.command({
    name: 'deleteSticker',
    code: `
  $deleteSticker[$guildID;sticker]
  `
});
```