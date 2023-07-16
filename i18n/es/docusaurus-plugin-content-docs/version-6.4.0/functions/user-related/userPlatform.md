---
title: '$userPlatform'
description: '$userPlatform devolverá la plataforma con la que el usuario está usando Discord.'
id: userPlatform
---

`$userPlatform` devolverá la plataforma con la que el usuario está usando Discord.

## Uso

```php
$userPlatform[usuarioID?;servidorID?;sep?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                | Requerido |
| ----------- | ------ | --------------------------------------------------------- |:---------:|
| usarioID?   | entero | El ID del usuario.                                        |   falso   |
| servidorID? | entero | El ID del gremio del lugar donde está baneado el usuario. |   falso   |
| sep?        | cadena | El separador para dividir múltiples plataformas.          |   falso   |

### Plataformas：
- **web** - El usuario está utilizando actualmente el cliente web.
- **mobile** - El usuario está usando la aplicación móvil.
- **desktop** - El usuario está usando la aplicación de escritorio.
- **none** - El usuario está desconectado, o no puede obtener la plataforma.

## Ejemplo(s)

Esto devolverá tu plataforma que estás usando Discord en:

```javascript
bot.command({
    name: 'userPlatform',
    code: `
  $userPlatform[$authorID;$guildID;, ]
  `
});
```
