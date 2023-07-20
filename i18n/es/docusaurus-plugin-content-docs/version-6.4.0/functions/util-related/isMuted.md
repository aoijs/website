---
title: $isMuted
description: '$isMuted comprobará si un usuario específico está silenciado dentro de un canal de voz.'
id: isMuted
---

`$isMuted` comprobará si un usuario específico está silenciado dentro de un canal de voz.

## Uso

```php
$isMuted[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                             | Requerido |
| ----------- | ------ | ------------------------------------------------------ |:---------:|
| usarioID    | entero | ID del usuario que desea comprobar si está silenciado. | verdadero |
| servidorID? | entero | ID del gremio en el que el usuario está silenciado.    | verdadero |

## Ejemplo(s)

Esto comprobará si actualmente estás silenciado en un canal de voz y devuelve `verdadero` o `falso`:

```javascript
bot.command({
    name: 'isMuted',
    code: `
  $isMuted[$authorID;$guildID]
  `
});
```
