---
title: '$unPinMessage'
description: '$unPinMessage desanclará un mensaje determinado.'
id: unPinMessage
---

`$unPinMessage` desanclará un mensaje determinado.

## Uso

```php
$unPinMessage[ID de mensaje;canalID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                         | Requerido |
| ------------- | ------ | -------------------------------------------------- |:---------:|
| ID de mensaje | entero | El ID del mensaje a desanclar.                     |   falso   |
| canalID       | entero | El ID del canal en el que se encuentra el mensaje. |   falso   |

## Ejemplo(s)

Esto fijará el mensaje del bot y lo desanclará después de dos segundos:

```javascript
bot.command({
    name: 'unPinMessage',
    code: `
  $unPinMessage[$get[id]]
  $wait[2s]
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // usando $let & $get para guardar el ID del mensaje
});
```