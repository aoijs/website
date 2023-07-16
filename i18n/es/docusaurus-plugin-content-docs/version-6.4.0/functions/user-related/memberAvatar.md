---
title: '$memberAvatar'
description: '$memberAvatar devolverá la imagen de perfil del autor del comando.'
id: memberAvatar
---

`$memberAvatar` devolverá la imagen de perfil del autor del comando.

## Uso

```php
$memberAvatar[servidorID?;usuarioID?;tamaño?;dinámico?;formato?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                          | Requerido |
| ----------- | -------- | --------------------------------------------------- |:---------:|
| servidorID? | entero   | ID del servidor.                                    |   falso   |
| usarioID?   | entero   | El ID del usuario.                                  |   falso   |
| tamaño?     | entero   | El tamaño del archivo de la imagen.                 |   falso   |
| dinámico?   | booleano | 1. **true** (por defecto) <br /> 2. **false** |   falso   |
| formato?    | cadena   | Formato de imagen:                                  |   falso   |

## Ejemplo(s)

Esto reiniciará la imagen de perfil del usuario

```javascript
bot.command({
    name: 'memberAvatar',
    code: `
  $memberAvatar[$guildID;$authorID;2048;true;webp]
  `
});
```
