---
title: '$clientLeave'
description: '$clientLeave hará que su bot abandone un servidor específico.'
id: clientLeave
---

`$clientLeave` hará que su bot abandone un servidor específico.

## Modo de uso

```php
$clientLeave[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Descripción                                | Requerido |
| ----------- | ------- | ------------------------------------------ |:---------:|
| servidorID? | integer | ID del servidor del que su bot abandonará. |    no     |

## Ejemplo(s)

Esto hará que su bot abandone el servidor actual:

```javascript
bot.command({
    name: 'clientLeave',
    code: `
  $clientLeave[$guildID]
  $wait[2s]
  $sendMessage[¡Adiós, me voy!]
  `
});
```
