---
title: '$memberExists'
description: '$memberExists verifica si un usuario dado es miembro del gremio dado.'
id: memberExists
---

`$memberExists` comprueba si un usuario determinado es miembro del gremio dado.

## Uso

```php
$memberExists[usuarioID;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                     | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------------ | --------- |
| usarioID    | entero | id del usuario que desea comprobar si actualmente es miembro del servidor dado | verdadero |
| servidorID? | entero | ID del gremio donde el usuario está presente                                   | falso     |

## Ejemplo(s)

Esto devolverá `true` como estás en este gremio:

```javascript
bot.command({
    name: 'memberExists',
    code: `
  $memberExists[$authorid;$guildID]
  `
});
```
