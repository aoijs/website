---
title: '$modifyRole'
description: '$modifyRole will modify a given role.'
id: modifyRole
---

`$modifyRole` will modify a given role.

## Modo de uso

```php
$modifyRole[guildID;roleID;...data]
```

## Parámetros

| Campo      | Tipo           | Parámetros                                    | Requerido |
| ---------- | -------------- | --------------------------------------------- |:---------:|
| servidorID | entero         | The guild ID of where the role is located in. | verdadero |
| roleID     | entero         | The role ID to modify.                        | verdadero |
| ...data    | string, object | New Role Data.                                |    sí     |

## Ejemplo(s)

This will edit a existing role / change its name to "Awesome!":

```javascript
bot.command({
    name: 'modifyRole',
    code: `
  $modifyRole[$guildID;roleID;{
    "name": "Awesome!"
  }]
  `
});
```