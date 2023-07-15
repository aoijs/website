---
title: '$deleteStageInstance'
description: '$deleteStageInstance will end an existing stage instance.'
id: deleteStageInstance
---

`$deleteStageInstance` will end an existing stage instance.

## Використання

```php
$deleteStageInstance[channelID]
```

## Параметри

| Поле      | Тип     | Опис                                                | Обов'язковий |
| --------- | ------- | --------------------------------------------------- |:------------:|
| channelID | integer | The stage channel ID of the current stage instance. |     так      |

## Приклад(и)

This will end the current stage instance: ( make sure to replace stageID with an actual stage ID )

```javascript
bot.command({
    name: 'deleteStageInstance',
    code: `
  $deleteStageInstance[stageInstance]
  `
});
```