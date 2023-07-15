---
title: '$ban'
description: '$ban will ban a user of a given guild.'
id: ban
---

`$ban` will ban a user of a guild.

## Modo de uso

```php
$ban[guildID;userID;days?;reason?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                      | Requerido |
| ----------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID? | entero | From which guild the user should be banned from.                | verdadero |
| usarioID    | entero | The user to ban.                                                | verdadero |
| days?       | string | Days of message history to delete, cannot be higher than 7 days |   falso   |
| ¿razón?     | string | razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

This will ban a random user of your guild:

```javascript
bot.command({
    name: 'ban',
    code: `
  $ban[$guildID;$randomUserID;7;Imagine getting banned.]
  `
});
```
