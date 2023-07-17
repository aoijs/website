---
title: '$userActivity'
description: '$userActivity devolverá la actividad de un usuario'
id: userActivity
---

`$userActivity` devolverá la actividad actual de un usuario.

## Uso

```php
$userActivity[servidorID?;usuarioID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                     | Requerido |
| ----------- | ------ | ------------------------------ |:---------:|
| servidorID? | entero | El ID del servidor.            |   falso   |
| usarioID?   | entero | La identificación del usuario. |   falso   |

## Ejemplo(s)

Esto devolverá su actividad actual:

```javascript
bot.command({
    name: 'userActivity',
    code: `
  $userActivity[$guildID;$authorID]
  `
});
```