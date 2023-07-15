---
title: '$membersCount'
description: '$membersCount will return a guild''s member count.'
id: membersCount
---

`$membersCount` will return a guild's member count.

## Modo de uso

```php
$membersCount[guildID?;presence?;countBot?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                                                          | Requerido |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | The ID of the guild.                                                                                                                                                |    no     |
| presence?   | consulta | The presence of the users <br /> 1. **all** (default) <br /> 2. **dnd** <br /> 3. **idle** <br /> 4. **offline** <br /> 5. **online** |    no     |
| countBot?   | booleano | Count bots? <br /> 1. **true** (default) <br /> 2. **false**                                                                                            |   falso   |

## Ejemplo(s)

This will return the amount of offline users (including bots) in your guild:

```javascript
bot.command({
    name: 'membersCount',
    code: `
  $membersCount[$guildID;offline;true]
  `
});
```
