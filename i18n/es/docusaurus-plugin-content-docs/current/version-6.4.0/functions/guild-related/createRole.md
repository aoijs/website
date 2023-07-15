---
title: '$createRole'
description: '$createRole will create a new guild role.'
id: createRole
---

`$createRole` will create a new guild role.

## Modo de uso

```php
$createRole[guildID;returnID;name;color;icon;hoist;unicodeEmoji;position;mentionable;...permissions]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                             | Requerido |
| -------------- | -------- | ------------------------------------------------------ |:---------:|
| servidorID     | entero   | The ID of the guild where the role will be created in. | verdadero |
| returnID       | boolean  | Return the ID of the newly created role?               | verdadero |
| nombre         | string   | The name of the new role.                              |    sí     |
| color          | entero   | The color of the new role.                             |    sí     |
| icon           | cadena   | The image URL that will be used as icon.               |    no     |
| hoist          | booleano | If the new role should be hoisted.                     | verdadero |
| unicodeEmoji   | cadena   | The unicodeEmoji that will be used as icon.            |   falso   |
| position       | entero   | The position of the role, 1 being the very bottom.     |    sí     |
| mentionable    | boolean  | If the role is mentionable by `@everyone`.             |    sí     |
| ...permissions | string   | Permissions the role will have.                        |   falso   |

## Ejemplo(s)

This will create a new role called "Bird" in the color of red:

```javascript
bot.command({
    name: 'createRole',
    code: `
    $createRole[$guildID;false;Bird;FF0000;;false;❤;1;false;sendmessages]`
});
```
