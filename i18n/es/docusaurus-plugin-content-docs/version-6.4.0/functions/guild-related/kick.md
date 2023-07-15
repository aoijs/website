---
title: '$kick'
description: '$kick eliminará a un usuario de un gremio determinado.'
id: kick
---

`$kick` eliminará a un usuario de un gremio determinado.

## Uso

```php
$kick[servidorID;ID de usuario;razon?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | ID del servidor desde el que se contarán los canales.           | verdadero |
| usarioID   | entero | El ID del usuario que será eliminado del gremio.                | verdadero |
| ¿razón?    | string | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

Esto expulsará a alguien de tu gremio:

```javascript
bot.command({
    name: 'kick',
    code: `
  <@$findMember[$message;false]> ha sido pateado!
  $kick[$guildID;$findMember[$message;false];Razon!]
  `
});
```
