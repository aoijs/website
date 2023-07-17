---
title: '$pinMessage'
description: '$pinMessage fijará un mensaje determinado.'
id: pinMessage
---

`$pinMessage` fijará un mensaje determinado.

## Uso

```php
$pinMessage[ID de mensaje;canalID?]
```

## Parámetros

| Campo         | Tipo   | Parámetros                                     | Requerido |
| ------------- | ------ | ---------------------------------------------- |:---------:|
| ID de mensaje | entero | El ID del mensaje que se fijará.               |   falso   |
| canalID       | entero | El ID del canal donde se encuentra el mensaje. |   falso   |

## Ejemplo(s)

Esto fijará el mensaje del bot:

```javascript
bot.command({
    name: 'pinMessage',
    code: `
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // usando $let & $get para guardar el ID del mensaje
});
```