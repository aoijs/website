---
title: '$isRoleManaged'
description: '$isRoleManaged will check if a certain role is managed by Discord.'
id: isRoleManaged
---

`$isRoleManaged` will check if a certain role is managed by Discord.

## Modo de uso

```php
$isRoleManaged[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                          | Requerido |
| ----------- | ------ | ------------------------------------------------------------------- |:---------:|
| roleID      | entero | ID of the role you want to check if it's managed by Discord or not. | verdadero |
| servidorID? | entero | ID of the guild where the role exists.                              |    no     |

## Ejemplo(s)

This will check if a role called `Server Booster` is managed by Discord and return either `true` or `false`:

```javascript
bot.command({
    name: 'isRoleManaged',
    code: `
  $isRoleManaged[$findRole[Server Booster];$guildID]
  `
});
```
