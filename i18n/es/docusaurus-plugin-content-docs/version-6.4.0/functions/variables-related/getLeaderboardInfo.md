---
title: '$getLeaderboardInfo'
description: '$getLeaderboardInfo will return information about a given variable sorted in a leaderboard.'
id: getLeaderboardInfo
---

`$getLeaderboardInfo` will return information about a given variable sorted in a leaderboard.

## Uso

```php
$getLeaderboardInfo[variable;id;type;option]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                                                   | Requerido |
| ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |:---------:|
| varname | consulta | Variable name.                                                                                                               | verdadero |
| id      | entero   | User/guild/channel/message ID.                                                                                               | verdadero |
| type    | string   | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** |    sí     |
| opción  | string   | Option to return <br /> 1. **top** (default) <br /> **value**                                                    |    sí     |

## Ejemplo(s)

This will return the position of the current guild:

```javascript
bot.command({
    name: "getLeaderboardInfo",
    code: `
    $getLeaderboardInfo[Example;$guildID;server;top]
    `
});
```