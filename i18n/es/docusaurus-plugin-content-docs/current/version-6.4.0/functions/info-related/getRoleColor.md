---
title: '$getRoleColor'
description: '$getRoleColor will return the given role''s color.'
id: getRoleColor
---

`$getRoleColor` will return the given role's color.

## Modo de uso

```php
$getRoleColor[roleId;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                               | Requerido |
| ----------- | ------ | -------------------------------------------------------- |:---------:|
| roleId      | entero | The ID of the role you want the color to be returned of. | verdadero |
| servidorID? | entero | The ID of the guild where the role exists in.            |    no     |

## Ejemplo(s)

This will return the role ID of your highest role:

```javascript
bot.command({
    name: 'getRoleColor',
    code: `
  $getRoleColor[$userHighestRole]
  `
});
```