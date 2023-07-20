---
title: $isGuildDeafened
description: '$isGuildDeafened es similar pero no confundir con `$isDeafen`, esto comprobará si el usuario está sordo.'
id: isGuildDeafened
---

`$isGuildDeafened` es similar pero no confundir con `$isDeafen`, esto comprobará si el usuario está ensordazado en el servidor.

## Uso

```php
$isGuildDeafened[userID?;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                            | Requerido |
| ----------- | ------ | --------------------------------------------------------------------- |:---------:|
| usarioID?   | entero | El ID del usuario que desea comprobar si es un servidor ensordecedor. |    no     |
| servidorID? | entero | El ID de la hermandad donde están ensordecidos en el servidor.        |    no     |

## Ejemplo(s)

Esto devolverá `verdadero` o `falso` dependiendo de si eres el servidor ensordecido o no:

```javascript
bot.command({
    name: 'isGuildDeafened',
    code: `
  $isGuildDeafened
  `
});
```
