---
title: $isStreaming
description: '$isStreaming comprobará si un usuario está transmitiendo en un canal de voz.'
id: isStreaming
---

`$isStreaming` comprobará si un usuario está transmitiendo en un canal de voz.

## Uso

```php
$isStreaming[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                           | Requerido |
| ----------- | ------ | ---------------------------------------------------- |:---------:|
| usarioID?   | entero | ID del usuario que desea comprobar si está fluyendo. |    no     |
| servidorID? | entero | ID del canal en el que se están transmitiendo.       |    no     |

## Ejemplo(s)

Esto retornará `verdadero` o `falso` dependiendo de si estás transmitiendo (canal de voz) o no:

```javascript
bot.command({
    name: 'isStreaming',
    code: `
  $isStreaming[$authorID;$guildID]
  `
});
```
