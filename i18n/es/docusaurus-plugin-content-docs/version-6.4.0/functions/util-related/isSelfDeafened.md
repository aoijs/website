---
title: $isSelfDeafened
description: '$isSelfDeafened es similar pero no confundir con `$isDeafen`, esto comprobará si el usuario se ensordece.'
id: isSelfDeafened
---

`$isSelfDeafened` es similar pero no confundir con `$isDeafen`, esto comprobará si el usuario se ensordece a sí mismo.

## Uso

```php
$isSelfDeafened[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                              | Requerido |
| ----------- | ------ | ------------------------------------------------------- |:---------:|
| usarioID?   | entero | ID del usuario que desea comprobar si está ensordecido. |    no     |
| servidorID? | entero | ID de la hermandad donde están ensordecidos.            |    no     |

## Ejemplo(s)

Esto retornará `verdadero` o `falso` dependiendo de si estás ensordecido o no:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
