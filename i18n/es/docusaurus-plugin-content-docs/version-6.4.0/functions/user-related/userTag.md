---
title: '$userTag'
description: '$userTag devolverá el nombre de usuario y el discriminador de un usuario.'
id: userTag
---

`$userTag` devolverá el nombre de usuario y el discriminador de un usuario.

## Uso

```php
$userTag[usuarioID?]
```

## Parámetros

| Campo     | Tipo   | Parámetros                     | Requerido |
| --------- | ------ | ------------------------------ |:---------:|
| usarioID? | entero | La identificación del usuario. |   falso   |

## Ejemplo(s)

Esto devolverá su nombre de usuario y discriminador:

```javascript
bot.command({
    name: 'userTag',
    code: `
  $userTag[$authorID]
  `
});
```
