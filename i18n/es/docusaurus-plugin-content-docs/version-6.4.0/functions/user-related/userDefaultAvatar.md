---
title: '$userDefaultAvatar'
description: '$userDefaultAvatar devolverá el avatar de usuario predeterminado de Discord del usuario.'
id: userDefaultAvatar
---

`$userDefaultAvatar` devolverá el avatar predeterminado del usuario de Discord por defecto.

## Uso

```php
$userDefaultAvatar[usuarioID?]
```

## Parámetros

| Campo     | Tipo    | Parámetros         | Requerido |
| --------- | ------- | ------------------ |:---------:|
| usarioID? | integer | El ID del usuario. |   falso   |

## Ejemplo(s)

Esto devolverá tu Avatar de Usuario predeterminado de Discord:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID]
  `
});
```
