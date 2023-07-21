---
title: $isVideoOn
description: '$isVideoOn comprueba si el usuario dado tiene su video encendido en un canal de voz.'
id: isVideoOn
---

`$isVideoOn` comprueba si el usuario dado tiene su video encendido en un canal de voz.

## Uso

```php
$isVideoOn[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                             | Requerido |
| ----------- | ------ | ---------------------------------------------------------------------- |:---------:|
| usarioID?   | entero | ID del usuario que activó el vídeo.                                    |    no     |
| servidorID? | entero | ID de la hermandad que quieres comprobar si tienen su video encendido. |    no     |

## Ejemplo(s)

Esto comprobará si estás usando actualmente la función de vídeo en un canal de voz:

```javascript
bot.command({
    name: 'isVideoOn',
    code: `
  $isVideoOn[$authorID;$guildID]
  `
});
```
