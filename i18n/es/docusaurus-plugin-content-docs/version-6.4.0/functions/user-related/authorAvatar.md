---
title: '$authorAvatar'
description: '$authorAvatar devolverá la imagen del perfil del autor del comando.'
id: authorAvatar
---

`$authorAvatar` devolverá la imagen de perfil del autor del comando.

## Uso

```php
$authorAvatar[tamaño?;dinámico?;formato?]
```

## Parámetros

| Campo     | Tipo           | Parámetros                                          | Requerido |
| --------- | -------------- | --------------------------------------------------- |:---------:|
| tamaño?   | cadena, número | El tamaño del archivo de la imagen.                 |   falso   |
| dinámico? | booleano       | 1. **true** (por defecto) <br /> 2. **false** |   falso   |
| formato?  | cadena         | El formato de la imagen devuelta.                   |   falso   |

## Ejemplo(s)

Esto reiniciará la imagen de perfil del usuario

```javascript
bot.command({
    name: 'authorAvatar',
    code: `
  $authorAvatar[2048;true;webp]
  `
});
```
