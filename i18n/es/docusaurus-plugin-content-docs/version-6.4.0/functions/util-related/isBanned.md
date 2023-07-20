---
title: $isBanned
description: '$isBanned comprueba si un usuario dado está baneado en un gremio específico.'
id: isBanned
---

`$isBanned` comprueba si un usuario determinado está baneado en un gremio específico.

## Uso

```php
$isBanned[guildID;userID]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | ID de la guild donde comprobar si el usuario está baneado o no. | verdadero |
| usarioID   | entero | ID del usuario que se comprobará si está baneado o no.          | verdadero |

## Ejemplo(s)

Esto devolverá `falso` ya que no estás baneado en este gremio:

```javascript
bot.command({
    name: 'isBanned',
    code: `
  $isBanned[$guildID;$authorID]
  `
});
```
