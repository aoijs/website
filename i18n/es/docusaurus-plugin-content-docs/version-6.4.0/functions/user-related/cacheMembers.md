---
title: '$cacheMembers'
description: '$cacheMembers will cache all members of a guild.'
id: cacheMembers
---

`$cacheMembers` will cache all members of a guild.

## Uso

```php
$cacheMembers[guildID?;returnCount?]
```

## Parámetros

| Campo        | Tipo    | Parámetros                                                                                        | Requerido |
| ------------ | ------- | ------------------------------------------------------------------------------------------------- |:---------:|
| servidorID?  | entero  | Of which guild the members shall be cached from.                                                  |    no     |
| returnCount? | boolean | Returns the cached member count. <br /> 1. **true** <br /> 2. **false** (por defecto) |    no     |

## Ejemplo(s)

This will cache all members of the current guild and return the amount of the cached members:

```javascript
bot.command({
    name: 'cacheMembers',
    code: `
  $cacheMembers[$guildID;true]
  `
});
```
