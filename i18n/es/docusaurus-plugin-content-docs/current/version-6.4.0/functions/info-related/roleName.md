---
title: '$roleName'
description: '$roleName will return the name of a specific role.'
id: roleName
---

`$roleName` will return the name of a specific role.

## Modo de uso

```php
$roleName[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                     | Requerido |
| ----------- | ------ | -------------------------------------------------------------- |:---------:|
| roleID      | entero | The role ID of which you want the role name to be returned of. | verdadero |
| servidorID? | entero | The guild ID.                                                  |    no     |

## Ejemplo(s)

This will return the role name of any role you may like, in this case, It would return `@everyone`:

```javascript
bot.command({
    name: 'roleName',
    code: `
  \`$roleName[$guildID]\`
  `
});
```
