---
title: '$userExists'
description: '$userExists verificará si existe un usuario determinado.'
id: userExists
---

`$userExists` comprobará si existe un usuario determinado.

## Uso

```php
$userExists[usuarioID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros                     | Requerido |
| --------- | ------- | ------------------------------ |:---------:|
| usarioID? | integer | La identificación del usuario. |   falso   |

## Ejemplo(s)

Esto retornará `true` o `false` dependiendo de si el usuario existe, en este ejemplo a continuación retornará `true` tal como existas como usuario de Discord:

```javascript
bot.command({
    name: 'userExists',
    code: `
  $userExists[$authorID]
  `
});
```
