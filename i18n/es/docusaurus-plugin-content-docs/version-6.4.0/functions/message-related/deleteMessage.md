---
title: '$deleteMessage'
description: '$deleteMessage eliminará un mensaje específico.'
id: deleteMessage
---

`$deleteMessage` eliminará un mensaje específico.

## Uso

```php
$deleteMessage[mensajeID;canalID]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                     | Requerido |
| ------------- | ------ | ---------------------------------------------- |:---------:|
| ID de mensaje | entero | El ID del mensaje del canal que se eliminará.  | verdadero |
| canalID       | entero | El ID del canal donde se encuentra el mensaje. |   falso   |

## Ejemplo(s)

Esto enviará y eliminará el mensaje enviado después de 15 segundos (estamos usando $let y $get para almacenar temporalmente el mensaje ID):

```javascript
bot.command({
    name: 'deleteMessage',
    code: `
  $deleteMessage[$get[id];$channelID]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```