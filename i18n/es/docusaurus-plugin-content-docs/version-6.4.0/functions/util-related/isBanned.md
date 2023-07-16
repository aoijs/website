---
title: '$isBanned'
description: '$isBanned checks if a given user is banned in a specific guild.'
id: isBanned
---

`$isBanned` checks if a given user is banned in a specific guild.

## Uso

```php
$isBanned[guildID;userID]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                    | Requerido |
| ---------- | ------ | ------------------------------------------------------------- |:---------:|
| servidorID | entero | ID of the guild where to check if the user is banned or not.  | verdadero |
| usarioID   | entero | ID of the user that will be checked if they're banned or not. | verdadero |

## Ejemplo(s)

This will return `false` as you're not banned in this guild:

```javascript
bot.command({
    name: 'isBanned',
    code: `
  $isBanned[$guildID;$authorID]
  `
});
```
