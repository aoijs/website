---
title: '$setRoleColor'
description: '$setRoleColor will set a roles'' color.'
id: setRoleColor
---

`$setRoleColor` will set a roles' color.

## Modo de uso

```php
$setRoleColor[roleID;color]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                | Requerido |
| ------ | -------- | ----------------------------------------- |:---------:|
| roleID | entero   | The ID of the role that will be modified. | verdadero |
| color  | consulta | The new (hex) color.                      | verdadero |

## Ejemplo(s)

This will change a random role's color to red:

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;Red]`
});
```

```javascript
bot.command({
    name: 'setRoleColor',
    code: `
   $setRoleColor[$randomRoleID;ED4245]`
});
```