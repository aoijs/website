---
title: '$deleteChannels'
description: '$deleteChannels eliminará un canal específico.'
id: deleteChannels
---

`$deleteChannels` clona un canal.

## Uso

```php
$deleteChannels[...canales]
```

## Parámetros

| Campo      | Tipo    | Parámetros                        | Requerido |
| ---------- | ------- | --------------------------------- |:---------:|
| ...canales | integer | El ID del canal que se eliminará. | verdadera |

## Ejemplo(s)

Esto eliminará múltiples canales, asegúrese de reemplazar los argumentos:

```javascript
bot.command({
    name: 'deleteChannels',
    code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
