---
title: '$roleId'
description: '$roleId will return the ID of a role.'
id: roleId
---

`$roleId` will return the ID of a role.

## Modo de uso

```php
$roleId[roleResolver;guildID?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                                     | Requerido |
| ------------ | -------- | ---------------------------------------------- |:---------:|
| roleResolver | consulta | Name of the role.                              | verdadero |
| servidorID?  | consulta | ID of the guild where the role was created in. |    no     |

## Ejemplo(s)

This will return the role ID of a role called `Owner` (this example won't work if you dont have that role):

```javascript
bot.command({
    name: 'roleId',
    code: `
  $roleId[Owner;$guildID]
  `
});
```