---
title: '$unban'
description: '$unban desbaneará a un usuario dado.'
id: unban
---

`$unban` desbloqueará a un usuario dado.

## Uso

```php
$unban[servidorID;ID de usuario;razon?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | El ID del gremio del lugar donde está baneado el usuario.       | verdadero |
| usarioID   | entero | El ID del usuario que será desbloqueado.                        | verdadero |
| ¿razón?    | string | razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

Esto desbancará a un usuario dado:

```javascript
bot.command({
    name: 'unban',
    code: `
  $unban[$guildID;$randomUserID;Some reason.]
  `
});
```