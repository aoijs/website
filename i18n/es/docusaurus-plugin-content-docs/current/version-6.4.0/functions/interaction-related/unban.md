---
title: '$unban'
description: '$unban will unban a given user.'
id: unban
---

`$unban` will unban a given user.

## Modo de uso

```php
$unban[guildID;userID;reason?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                                 | Requerido |
| ---------- | ------ | -------------------------------------------------------------------------- |:---------:|
| servidorID | entero | The guild ID of where the user is banned in.                               | verdadero |
| usarioID   | entero | The ID of the user which will be unbanned.                                 | verdadero |
| ¿razón?    | string | The reason for the unban that will be displayed in the guild's audit logs. |   falso   |

## Ejemplo(s)

This will unban a given user:

```javascript
bot.command({
    name: 'unban',
    code: `
  $unban[$guildID;$randomUserID;Some reason.]
  `
});
```