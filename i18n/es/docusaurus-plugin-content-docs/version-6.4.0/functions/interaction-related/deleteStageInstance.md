---
title: '$deleteStageInstance'
description: '$deleteStageInstance terminará una instancia de etapa existente.'
id: deleteStageInstance
---

`$deleteStageInstance` finalizará una instancia de etapa existente.

## Uso

```php
$deleteStageInstance[canalID]
```

## Parámetros

| Campo   | Tipo    | Parámetros                                                | Requerido |
| ------- | ------- | --------------------------------------------------------- |:---------:|
| canalID | integer | El ID del canal stage de la instancia actual de la etapa. | verdadera |

## Ejemplo(s)

Esto finalizará la instancia actual de la etapa: ( asegúrese de reemplazar stageID con un ID de etapa actual )

```javascript
bot.command({
    name: 'deleteStageInstance',
    code: `
  $deleteStageInstance[stageInstance]
  `
});
```