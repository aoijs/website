---
title: '$userNickname'
description: '$userNickname will return a user''s nickname.'
id: userNickname
---

`$userNickname` will return a user's nickname.

## Uso

```php
$userNickname[guildID?;userID?;returnUser?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                           | Requerido |
| ----------- | -------- | ------------------------------------------------------------------------------------ |:---------:|
| servidorID? | entero   | The ID of the guild.                                                                 |    no     |
| usarioID?   | entero   | El ID del usuario.                                                                   |    no     |
| returnUser? | booleano | Return the username <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

This will return your nickname, if you have none then it'll return your Discord username:

```javascript
bot.command({
    name: 'nickname',
    code: `
  $userNickname[$guildID;$authorID;true]
  `
});
```
