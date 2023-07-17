---
title: $deleteChannel
description: '$deleteChannel удалит определенный канал.'
id: deleteChannel
---

`$deleteChannel` удалит определенный канал.

## Использование

```php
$deleteChannel[channelID]
```

## Параметры

| Название  | Nbg   | Описание                                | Нужно |
| --------- | ----- | --------------------------------------- |:-----:|
| ID канала | целое | ID канала канала, который будет удален. |  да   |

## Пример(ы)

Это удалит канал, в котором была выполнена команда:

```javascript
bot.command({
    name: 'deleteChannel',
    code: `
  $deleteChannel[$channelID]
  `
});
```
