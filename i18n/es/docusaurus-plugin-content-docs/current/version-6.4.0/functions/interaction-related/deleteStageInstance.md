---
title: '$deleteStageInstance'
description: '$deleteStageInstance will end an existing stage instance.'
id: deleteStageInstance
---

`$deleteStageInstance` will end an existing stage instance.

## Modo de uso

```php
$deleteStageInstance[channelID]
```

## Parámetros

| Campo   | Tipo    | Parámetros                                          | Requerido |
| ------- | ------- | --------------------------------------------------- |:---------:|
| canalID | integer | The stage channel ID of the current stage instance. | verdadera |

## Ejemplo(s)

This will end the current stage instance: ( make sure to replace stageID with an actual stage ID )

```javascript
bot.command({
    name: 'deleteStageInstance',
    code: `
  $deleteStageInstance[stageInstance]
  `
});
```