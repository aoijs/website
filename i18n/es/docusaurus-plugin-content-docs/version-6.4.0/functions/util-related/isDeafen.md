---
title: $isDeafen
description: '$isDeafen comprobará si un usuario determinado está ensordecido o no.'
id: isDeafen
---

`$isDeafen` comprobará si un determinado usuario está sordo o no.

## Uso

```php
$isDeafen[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                           | Requerido |
| ----------- | ------ | -------------------------------------------------------------------- |:---------:|
| usarioID?   | entero | ID de usuario que desea comprobar si están ensordecidos,             |    no     |
| servidorID? | entero | El ID de la hermandad donde quieres comprobar si están ensordecidos. |    no     |

## Ejemplo(s)

Esto devolverá `falso` o `verdadero` dependiendo de si actualmente estás ensordecido o no:

```javascript
bot.command({
    name: 'isDeafen',
    code: `
  $isDeafen[$authorID;$guildID]
  `
});
```
