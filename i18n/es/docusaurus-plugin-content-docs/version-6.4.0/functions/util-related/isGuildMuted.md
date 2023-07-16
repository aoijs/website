---
title: '$isGuildMuted'
description: '$isGuildMuted es similar pero no confundir con `$isMuted`, esto comprobará si el usuario está silenciado.'
id: isGuildMuted
---

`$isGuildMuted` es similar pero no confundir con `$isMuted`, esto comprobará si el usuario está silenciado.

## Uso

```php
$isGuildMuted[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                 | Requerido |
| ----------- | ------ | -------------------------------------------------------------------------- |:---------:|
| usarioID?   | entero | El ID del usuario que desea comprobar si están silenciados en el servidor. |    no     |
| servidorID? | entero | El ID de la guild donde están silenciados.                                 |    no     |

## Ejemplo(s)

Esto retornará `verdadero` o `falso` dependiendo de si estás silenciado en el servidor o no:

```javascript
bot.command({
    name: 'isGuildMuted',
    code: `
  $isGuildMuted[$authorID;$guildID]
  `
});
```
