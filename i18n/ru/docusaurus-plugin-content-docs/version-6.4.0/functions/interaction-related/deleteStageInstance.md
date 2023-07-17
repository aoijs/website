---
title: $deleteStageInstance
description: '$deleteStageInstance завершит существующую стадию.'
id: deleteStageInstance
---

`$deleteStageInstance` завершит существующую стадию.

## Использование

```php
$deleteStageInstance[channelID]
```

## Параметры

| Название  | Nbg   | Описание                              | Нужно |
| --------- | ----- | ------------------------------------- |:-----:|
| ID канала | целое | ID канала стадии текущего экземпляра. |  да   |

## Пример(ы)

Текущая стадия завершится ( убедитесь, что stageID заменен фактическим ID стадии)

```javascript
bot.command({
    name: 'deleteStageInstance',
    code: `
  $deleteStageInstance[stageInstance]
  `
});
```