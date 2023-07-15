---
title: '$isRoleEditable'
description: '$isRoleEditable will check if the role is editable.'
id: isRoleEditable
---

`$isRoleEditable` will check if the role is editable.

## Modo de uso

```php
$isRoleEditable[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                        | Requerido |
| ----------- | ------ | ------------------------------------------------- |:---------:|
| roleID      | entero | ID of the role you want to check if its editable. | verdadero |
| servidorID? | entero | The ID of the guild where the role exists.        |    no     |

## Ejemplo(s)

This will check if a role called `Owner` is editable:

```javascript
bot.command({
    name: 'isRoleEditable',
    code: `
  $isRoleEditable[$findRole[Owner];$guildID]
  `
});
```
