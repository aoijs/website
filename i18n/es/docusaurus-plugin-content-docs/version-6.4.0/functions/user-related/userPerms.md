---
title: '$userPerms'
description: '$userPerms will return a user''s permission of a specific guild.'
id: userPerms
---

`$userPerms` will return a user's permission of a specific guild.

## Modo de uso

```php
$userPerms[userID?;sep?;guildID?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                      | Requerido |
| ----------- | -------- | ----------------------------------------------- |:---------:|
| usarioID?   | entero   | The user ID.                                    |    no     |
| sep?        | consulta | Separator to separate multiple returned values. |    no     |
| servidorID? | entero   | The guild ID.                                   |   falso   |

## Ejemplo(s)

This will return your permissions:

```javascript
bot.command({
    name: 'userPerms',
    code: `
  $userPerms[$authorID;, ;$guildID]
  `
});
```
