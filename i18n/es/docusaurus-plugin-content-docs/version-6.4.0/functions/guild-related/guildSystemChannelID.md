---
title: '$guildSystemChannelID'
description: '$guildSystemChannelID devolverá la ID del canal del sistema del gremio.'
id: guildSystemChannelID
---

`$guildSystemChannelID` devolverá la identificación del canal del sistema del gremio.

## Uso

```php
$guildSystemChannelID[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros          | Requerido |
| ----------- | ------- | ------------------- |:---------:|
| servidorID? | integer | El ID del servidor. |   falso   |

## Ejemplo(s)

Esto devolverá el ID del canal de sistema del gremio:

```javascript
bot.command({
    name: 'guildSystemChannelID',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
