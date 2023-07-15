---
title: '$guildLowestRole'
description: '$guildLowestRole will return the lowest role of a specific guild.'
id: guildLowestRole
---

`$guildLowestRole` will return the lowest role of a specific guild.

## Modo de uso

```php
$guildLowestRole[guildID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros           | Requerido |
| ----------- | ------- | -------------------- |:---------:|
| servidorID? | integer | The ID of the guild. |    no     |

## Ejemplo(s)

This will return the ID of the lowest guild role:

```javascript
bot.command({
    name: 'guildLowestRole',
    code: `
  $guildLowestRole[$guildID]
  `
});
```
