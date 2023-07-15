---
title: '$kick'
description: '$kick will remove a user from a given guild.'
id: kick
---

`$kick` will remove a user from a given guild.

## Modo de uso

```php
$kick[guildID;userID;reason?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                    | Requerido |
| ---------- | ------ | ------------------------------------------------------------- |:---------:|
| servidorID | entero | The ID of the guild where the user shall be removed from.     | verdadero |
| usarioID   | entero | The ID of the user which will be removed from the guild.      | verdadero |
| ¿razón?    | string | The reason which will be displayed in the guild's audit logs. |   falso   |

## Ejemplo(s)

This will kick someone from your guild:

```javascript
bot.command({
    name: 'kick',
    code: `
  <@$findMember[$message;false]> has been kicked!
  $kick[$guildID;$findMember[$message;false];Example reason!]
  `
});
```
