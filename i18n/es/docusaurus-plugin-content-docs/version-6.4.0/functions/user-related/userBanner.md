---
title: '$userBanner'
description: '$userBanner devolverá el banner de perfil de un usuario específico.'
id: userBanner
---

`$userBanner` devolverá el banner del perfil de un usuario específico.

## Uso

```php
$userBanner[usuarioID?;tamaño?;dinámico?;formato?]
```

## Parámetros

| Campo     | Tipo           | Parámetros                                          | Requerido |
| --------- | -------------- | --------------------------------------------------- |:---------:|
| usarioID? | entero         | El ID del usuario.                                  |   falso   |
| tamaño?   | cadena, número | El tamaño del archivo de la imagen.                 |   falso   |
| dinámico? | booleano       | 1. **true** (por defecto) <br /> 2. **false** |   falso   |
| formato?  | cadena         | El formato de la imagen devuelta.                   |   falso   |

## Ejemplo(s)

Esto devolverá el banner de tu perfil:

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBanner[$authorID;4096;true;webp]
  `
});
```
