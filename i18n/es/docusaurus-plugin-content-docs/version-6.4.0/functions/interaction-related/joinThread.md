---
title: '$joinThread'
description: '$joinThread hará que el bot se una a un hilo específico.'
id: joinThread
---

`$joinThread` hará que el bot se una a un hilo específico.

## Uso

```php
$joinThread[canalID;ID de helo]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                  | Requerido |
| ------- | ------ | ------------------------------------------- |:---------:|
| canalID | entero | ID del canal donde se encuentra el mensaje. | verdadero |
| hiloID  | entero | ID del servidor.                            | verdadero |

## Ejemplo(s)

Esto creará un hilo en el canal actual y añadirá el bot a él:

```javascript
bot.command({
    name: 'archiveThread',
    code: `
  $joinThread[$channelID;$get[threadID];true;testing]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]  
  `
});
```