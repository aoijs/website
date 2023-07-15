---
title: '$deleteInvite'
description: '$deleteInvite will delete a specific guild invite.'
id: deleteInvite
---

`$deleteInvite` will delete a specific guild invite.

## Modo de uso

```php
$deleteInvite[guildID;inviteCode;reason?]
```

## Parámetros

| Campo      | Tipo     | Parámetros                                                | Requerido |
| ---------- | -------- | --------------------------------------------------------- |:---------:|
| servidorID | entero   | The guild ID whose invite should be deleted.              | verdadero |
| inviteCode | consulta | The specific invite code.                                 | verdadero |
| ¿razón?    | string   | Reason which will be displayed in the guild's audit logs. |   falso   |

## Ejemplo(s)

This will delete an invite (wont work as the invite code doesn't exist):

```javascript
bot.command({
    name: 'deleteInvite',
    code: `
  $deleteInvite[$guildID;ifawd9a;Testing!]
  `
});
```