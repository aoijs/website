---
title: '$userStatus'
description: '$userStatus will return a user''s presence.'
id: userStatus
---

`$userStatus` will return a user's presence.

## Uso

```php
$userStatus[guildId?;userId?]
```

## Parámetros

| Campo    | Tipo   | Parámetros                                                      | Requerido |
| -------- | ------ | --------------------------------------------------------------- |:---------:|
| guildId? | entero | The guild ID of which guild you want to retrieve the status of. |    no     |
| userId?  | entero | The ID of the user you want to return the status of.            |    no     |

## Ejemplo(s)

This will either return `idle`, `online`, `invisible` or `dnd` depending on your current presence:

```javascript
bot.command({
    name: 'userStatus',
    code: `
  $userStatus[$guildID;$authorID]
  `
});
```
