---
title: '$deleteChannel'
description: '$deleteChannel eliminará un canal específico.'
id: deleteChannel
---

`$deleteChannel` clona un canal.

## Uso

```php
$deleteChannel[canalID]
```

## Parámetros

| Campo   | Tipo    | Parámetros                        | Requerido |
| ------- | ------- | --------------------------------- |:---------:|
| canalID | integer | El ID del canal que se eliminará. | verdadera |

## Ejemplo(s)

Esto creará una invitación del canal donde se ejecuta el comando en:

```javascript
bot.command({
    name: 'deleteChannel',
    code: `
  $deleteChannel[$channelID]
  `
});
```
