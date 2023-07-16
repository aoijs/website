---
title: '$userAvatar'
description: '$userAvatar devolverá la imagen de perfil de un usuario específico.'
id: userAvatar
---

`$userAvatar` devolverá la imagen de perfil de un usuario específico.

## Uso

```php
$userAvatar[usuarioID?;tamaño?;dinámico?;formato?]
```

## Parámetros

| Campo     | Tipo           | Parámetros                                          | Requerido |
| --------- | -------------- | --------------------------------------------------- |:---------:|
| usarioID? | entero         | El ID del usuario.                                  |   falso   |
| tamaño?   | cadena, número | El tamaño del archivo de la imagen.                 |   falso   |
| dinámico? | booleano       | 1. **true** (por defecto) <br /> 2. **false** |   falso   |
| formato?  | cadena         | El formato de la imagen devuelta.                   |   falso   |

## Ejemplo(s)

Esto devolverá tu foto de perfil:

```javascript
bot.command({
    name: 'userAvatar',
    code: `
  $userAvatar[$authorID;2048;true;webp]
  `
});
```
