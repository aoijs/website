---
title: '$guildID'
description: '$guildID will return the guild ID of a given guild.'
id: guildID
---

`$guildID` will return the guild ID of a given guild.

## Modo de uso

```php
$guildID[name?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                        | Requerido |
| ----- | ------ | ------------------------------------------------- |:---------:|
| name? | string | The guild name you want the ID to be returned of. |    no     |

## Ejemplo(s)

This will return your guild ID:

```javascript
bot.command({
    name: 'guildID',
    code: `
  $guildID
  `
});
```
