---
title: '$leaveThread'
description: '$leaveThread hará que el bot se una a un hilo específico.'
id: leaveThread
---

`$killShard` hará que el bot se una a un hilo específico.

## Uso

```php
$leaveThread[canalID;hiloID]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                      | Requerido |
| ------- | ------ | ----------------------------------------------- |:---------:|
| canalID | entero | ID del canal en el que se encuentra el mensaje. | verdadero |
| hiloID  | entero | ID del servidor.                                | verdadero |

## Ejemplo(s)

Esto creará un hilo y hará que el bot salga después de la creación:

```javascript
bot.command({
    name: 'leaveThread',
    code: `
  $leaveThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```